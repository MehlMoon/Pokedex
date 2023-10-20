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
        height: 510px;
        min-width: 300px;
        max-width: 300px;
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

    .poke_line{
        background-color: rgba(128, 128, 128, 0.2);
        margin-top: 7px;
        margin-bottom: 0px;
        width: 100%;
        height: 25px;
    }

    .pokemon_try{
        border: 2px solid gray;
        border-radius: 20px;
        width: 40%;
        line-height: 5px;
    }

    .pokemon_try2{
        background-color: lightgray;
        border-radius: 20px;
        width: 40%;
        line-height: 5px;
    }

    .hidden{
        display: none;
    }

    .bug{
        background-color: rgb(177, 238, 89);
        color: white;
    }
    .dark{
        background-color: rgb(68, 58, 81);
        color: white;
    }
    .dragon{
        background-color: rgb(77, 114, 120);
        color: white;
    }
    .electric{
        background-color: rgb(232, 238, 16);
        color: white;
    }
    .fairy{
        background-color: rgb(255, 157, 197);
    }
    .fighting{
        background-color: rgb(196, 40, 0);
        color: white;
    }
    .fire{
        background-color: rgb(246, 8, 8);
        color: white;
    }
    .flying{
        background-color: rgb(204, 227, 226);
    }
    .ghost{
        background-color: rgb(87, 102, 139);
        color: white;
    }
    .grass{
        background-color: rgb(70, 191, 34);
        color: white;
    }
    .ground{
        background-color: rgb(193, 141, 14);
        color: white;
    }
    .ice{
        background-color: rgb(207, 246, 255);
    }
    .poison{
        background-color: rgb(145, 17, 201);
        color: white;
    }
    .psychic{
        background-color: rgb(229, 200, 246);
    }
    .rock{
       background-color: rgb(142, 62, 0);
       color: white;
    }
    .steel{
        background-color: rgb(132, 165, 175);
    }
    .water{
        background-color: rgb(33, 122, 240);
        color: white;
    }
  };`

    constructor(){
        super();
    }

    render(){
        return html`
        <div class="container_pokemon">
                ${pokemon.map(data => html`
                <div class="card_pokemon">
                <div class="pokemon_header">
                    <h3>${data.name.toUpperCase()}</h3>
                </div>

                <div class="pokemon_img">
                    <img src=${data.img}/>
                </div>

                <div class="pokemon_about">
                    <p>${data.about}</p>
                </div>

                <h5>${data.pokemonRarity.toUpperCase()}</h5>

                <div class="poke_line">
                    SIZE
                </div>

                <div class="pokemon_minicontainer">
                    <div class="pokemon_try">
                        <p>Height:</p>
                        <p>${data.size.height}</p>
                    </div>
                    <div class="pokemon_try">
                        <p>Weight:</p>
                        <p>${data.size.weight}</p>
                    </div>
                </div>

                <div class="poke_line">
                    TYPE
                </div>

                <div class="pokemon_minicontainer">
                    <div class="pokemon_try2 ${differentColor(data.type[0])}">
                        <p>${data.type[0]}</p>
                    </div>
                    <div class="pokemon_try2 ${data.type[1] ? differentColor(data.type[1]) : 'hidden'}">
                        <p>${data.type[1]}</p>
                    </div>
                </div>
            </div>
                `)}
        </div>`;

        function differentColor(type){
            switch (type){
                case "bug":
                    return "bug";
                case "dark":
                    return "dark";
                case "dragon":
                    return "dragon";
                case "electric":
                    return "electric";
                case "fairy":
                    return "fairy";
                case "fighting":
                    return "fighting";
                case "fire":
                    return "fire";
                case "flying":
                    return "flying";
                case "ghost":
                    return "ghost";
                case "grass":
                    return "grass";
                case "ground":
                    return "ground";
                case "ice":
                    return "ice";
                case "poison":
                    return "poison";
                case "psychic":
                    return "psychic";
                case "rock":
                    return "rock";
                case "steel":
                    return "steel";
                case "water":
                    return "water";
                default:
                    return "";
            }
        }
    }
}
customElements.define("painting-cards", Visualizer);