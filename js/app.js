import { LitElement, html, css } from "lit";
import { pokemon } from "./pokemon";
import { Visualizer } from "./visualizer";

export class App extends LitElement{
    static styles = css`
    .navigation{
        grid-area: "navigation";
        background-color: black;
        color:white;
        width: 100%;
        height: 70px;
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;
        justify-content: space-around;
        text-align:center;
    }

    select{
        background-color: darkgray;
        color: white;
        width: 25%;
        height: 50%;
        text-align: center;
    }
    
    input{
        background-color: white;
        color: black;
        width: 40%;
        height: 50%;
        text-align: left;
    }
    `;
    static properties = {
        filteredPokemon: { type: Array },
        selectedType: { type: String },
        searchedName: { type: String }
    }

    constructor(){
        super();
        this.filteredPokemon = pokemon;
        this.selectedType = "default"; //Default para que muestre todos
        this.searchedName = "";
    }

    dataChange(event){
        this.selectedType = event.target.value;
        this.typeSelector();
        this.nameSearcher();
        console.log("Tipo seleccionado: " + event.target.value);
        console.log()
    }

    nameSearch(event){
        this.searchedName = event.target.value;
        this.nameSearcher();
        console.log("Buscando: " + event.target.value);
    }

    typeSelector(){
        if (this.selectedType === "default"){
            this.filteredPokemon = pokemon;
        } else {
            this.filteredPokemon = pokemon.filter(p => {
                return (
                    p.type[0] === this.selectedType || (p.type[1] && p.type[1] === this.selectedType)
                );
            });
        }
        console.log(this.filteredPokemon);
        return this.filteredPokemon && this.searchedName;
    }

    nameSearcher(){ 
        this.filteredPokemon = pokemon.filter(p => {
            const typejoin = this.selectedType === "default" || (p.type[0] === this.selectedType || (p.type[1] && p.type[1] === this.selectedType));
            const namejoin = p.name.includes(this.searchedName);
            return  typejoin && namejoin;
        });
    }

    render(){
        return html`
        <div class="navigation">
            <select id="type" @change="${this.dataChange}">
                <option value="default">All Types</option>
                <option value="bug">Bug</option>
                <option value="dark">Dark</option>
                <option value="dragon">Dragon</option>
                <option value="electric">Electric</option>
                <option value="fairy">Fairy</option>
                <option value="fighting">Fighting</option>
                <option value="fire">Fire</option>
                <option value="flying">Flying</option>
                <option value="ghost">Ghost</option>
                <option value="grass">Grass</option>
                <option value="ground">Ground</option>
                <option value="ice">Ice</option>
                <option value="normal">Normal</option>
                <option value="poison">Poison</option>
                <option value="psychic">Psychic</option>
                <option value="rock">Rock</option>
                <option value="steel">Steel</option>
                <option value="water">Water</option>
            </select>

            <select id="generation" @change="${this.geneChange}">
                <option value="default">Generation</option>
                <option value="1">Kanto</option>
                <option value="2">Johto</option>
            </select>

            <input id="buscador" type="text" @input="${this.nameSearch}" placeholder="Search by Name" />
        </div>

        <painting-cards .pokemon="${this.filteredPokemon}"></painting-cards>
        `;
    } 
}
customElements.define("my-app", App);