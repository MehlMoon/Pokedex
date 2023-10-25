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
        width: 20%;
        height: 50%;
        text-align: center;
    }
    
    input{
        background-color: white;
        color: black;
        width: 70%;
        height: 50%;
        text-align: left;
    }
    img{
        min-width: 25px;
        max-width: 25px;
        display: block;
    }
    `;

    static properties = {
        newPokemon: { type: Array },
        selectedType: { type: String },
        searchedName: { type: String }
    }

    constructor(){
        super();
        this.newPokemon = pokemon; //Almacenar los cambios en esta variable
        this.selectedType = "default"; //Default para que muestre todos
        this.searchedName = "";
    }

    pokeSelect(event){
        this.selectedType = event.target.value;
        this.selector();
        this.searcher();
        console.log("Tipo seleccionado: " + event.target.value); //A ver si selecciona el tipo
    }

    nameSearch(event){
        this.searchedName = event.target.value.toLowerCase();
        this.searcher();
        console.log("Buscando: " + event.target.value); //A ver si busca lo que quiero y ver si lo hace minúsculas
    }

    selector(){
        if (this.selectedType === "default"){
            this.newPokemon = pokemon;
        } else {
            this.newPokemon = pokemon.filter(p => {
                return (
                    p.type[0] === this.selectedType || (p.type[1] && p.type[1] === this.selectedType)
                );
            }); //Filtro por tipo considerando ambas partes del array
        }

        console.log(this.newPokemon);
        this.searcher();
    }

    searcher(){ 
        this.newPokemon = pokemon.filter(p => {
            const typejoin = this.selectedType === "default" || (p.type[0] === this.selectedType || (p.type[1] && p.type[1] === this.selectedType));
            const namejoin = p.name.includes(this.searchedName);
            return  typejoin && namejoin;
        });
    }

    render(){
        return html`
        <div class="navigation">
            <select id="type" @change="${this.pokeSelect}">
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
            <img src="/img/find.png"/>
            <input id="buscador" type="text" @input="${this.nameSearch}" placeholder="Search by Name" />
        </div>

        <painting-cards .pokemon="${this.newPokemon}"></painting-cards>
        `;
    } 
}
customElements.define("my-app", App);