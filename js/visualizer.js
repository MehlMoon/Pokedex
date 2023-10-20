import { LitElement, html, css } from "lit";
import { pokemon } from "./pokemon";

export class Visualizer extends LitElement{

    static styles = css`
    .container_pokemon{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 10px;
    }

    .card_pokemon{
        background-color: white;
        border: 2px solid black;
        margin-top: 10px;
        height: 500px;
        min-width: 300px;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .pokemon_header{
        background-color: gray;
        color: white;
        text-align: center;
        width: 100%;
        height: 35px;
        line-height: 0px;
    }

    .pokemon_img{
        background-color: rgba(128, 128, 128, 0.1);
        margin-top: 8px;
        border-radius: 100px;
    }

    img {
        max-width: 100%;
        display: block;
        }

    .pokemon_about{
        text-align: justify;
        font-size: small;
        width: 80%;
        line-height: 15px;
    }
    
    .pokemon_minicontainer{
        margin-top: 5px;
        width:100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .poke_try{
        border: 2px solid gray;
        border-radius: 20px;
        width: 40%;
        line-height: 5px;
    }

    .poke_try2{
        background-color: lightgray;
        border-radius: 20px;
        width: 40%;
        line-height: 5px;
    }


  };`

    constructor(){
        super();
    }

    render(){
        return html`
        <div class="container_pokemon">
                ${pokemon.map(info => html`
                <div class="card_pokemon">
                <div class="pokemon_header">
                    <h3>${info.name.toUpperCase()}</h3>
                </div>

                <div class="pokemon_img">
                    <img src=${info.img}/>
                </div>

                <div class="pokemon_about">
                    <p>${info.about}</p>
                </div>

                <div class="pokemon_minicontainer">
                    <div class="poke_try">
                        <p>Height:</p>
                        <p>${info.size.height}</p>
                    </div>
                    <div class="poke_try">
                        <p>Weight:</p>
                        <p>${info.size.weight}</p>
                    </div>
                </div>

                <div class="pokemon_minicontainer">
                    <div class="poke_try2">
                        <p>${info.type[0]}</p>
                    </div>
                    <div class="poke_try2">
                        <p>${info.type[1]}</p>
                    </div>
                </div>
                
            </div>
                `)}
        </div>`;
    }
}
customElements.define("painting-cards", Visualizer);