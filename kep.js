export default class Kep{
    #obj={}
    constructor(obj={src,cim,leiras,index}, szuloElem) {
        this.#obj=obj;
        this.szuloElem = szuloElem
        this.megjelenit()
        this.kivalasztEsemeny()
        //this.buttonElem=this.kepElem.querySelector("img")
        /*this.buttonElem.addEventListener("click", function (event) {
            console.log(event.target)
        })*/
    }

    megjelenit(){
        let kod=`
            <div class="kartya">
                <img src="${this.#obj.src}" alt="${this.#obj.index}">
                <p>${this.#obj.cim}</p>
                <p>${this.#obj.leiras}</p>
            </div>
            `;
        this.szuloElem.insertAdjacentHTML("beforeend", kod)
    }

    getObj(){
        return this.#obj
    }

    esemeny(){
        console.log("saját kép katt esemény");
        const e = new CustomEvent("kivalaszt", { detail: this.#obj.index});
        window.dispatchEvent(e);
    }

    kivalasztEsemeny(){
        this.elem.addEventListener("click", ()=>{
            this.sajatEsemeny();
        })
    }
}