export default class Kep{
    #obj={}
    constructor(obj={src,cim,leiras,index}, szuloElem){
        this.#obj = obj
        this.szuloElem = szuloElem
        this.megjelenit()
        this.kivalasztEsemeny()
    }

    megjelenit(){
        let kod =`
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
        const kepElem = this.szuloElem.querySelector(".kartya:last-child");
        kepElem.addEventListener("click", ()=>{
            console.log("katt : ", this.#obj.index);
            const e = new CustomEvent("kivalaszt", { detail: this.#obj.index});
            window.dispatchEvent(e);
        });
    }
}