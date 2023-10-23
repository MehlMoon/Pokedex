import { LitElement, html, css } from "lit";
import { pokemon } from "./pokemon";
import { Visualizer } from "./visualizer";

export class App extends LitElement{
    static get properties(){
        return{
            selectedType: { type: String }
        }
    }

    constructor(){
        super();
        this.addEventListener("change", (e) => this.filterChange(e))
        
    }
    
    render(){
        return html`
        <painting-cards></painting-cards>
        `;
    } 

    selector(){
        
    }
}
customElements.define("my-app", App);