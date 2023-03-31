export enum Attribute {
    "name" = "name",
    "height" = "height",

}

class Card extends HTMLElement{
    name?: string;
    height?: string;

    static get observedAttributes(){
        const attrs: Record<Attribute, null> = {
            name: null,
            height: null,
        };
        return Object.keys(attrs);
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
    ){
        switch(propName){
            default:
            this[propName] = newValue;
            break;
        }
        this.render();
    }

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML =`
            <section>
                <h1>Name: ${this.name}</h1>
                <p>Height: ${this.height} cm</p>
            </section>
            `;
        }
    }
}

customElements.define("my-card", Card);
export default Card;