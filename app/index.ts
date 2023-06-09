import "./components/indexcom";
import { traer_api } from "./components/Card/datacard";
import Card, {Attribute} from "./components/Card/card";

class AppContainer extends HTMLElement{
    StarList: Card[]=[];

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    async connectedCallback(){
        const dataStar = await traer_api();
        dataStar.forEach((data: any)=>{
            console.log(data);
        });

        dataStar.forEach((data: any)=>{
            const StarCard = this.ownerDocument.createElement("my-card") as Card;
            StarCard.setAttribute(Attribute.name, data.name);
            console.log(data.name)
            StarCard.setAttribute(Attribute.height, data.height);
            this.StarList.push(StarCard);
        });
        this.render(this.StarList);
    }

    render(StarList: any){
        const StarCards = this.ownerDocument.createElement("section")
        StarCards.className = "StarSection"
        StarList.forEach((StarCard:any)=>{
            StarCards.appendChild(StarCard)
        });
        this.shadowRoot?.appendChild(StarCards);
    }
}

customElements.define("app-container", AppContainer);