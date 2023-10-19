import { LitElement, html, css } from "lit";
import { pokemon } from "./pokemon";

export class Visualizer extends LitElement{

    static styles = css`
    .container_pokemon{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .card_pokemon{
        margin-top: 20px;
        background-color: white;
        width: 15%;
        height: 500px;
        border: 1px solid black;

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
        margin-bottom: 10px;
    }

    .pokemon_img{
        background-color: rgba(128, 128, 128, 0.2);
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
        height: 30%;
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
            </div>
                `)}
        </div>`;
    }
}
customElements.define("painting-cards", Visualizer);