import { KEPLISTA } from "./keplista.js";

export class Kepnezegeto{
    #INDEX = 0;
    constructor(szuloElem){
        this.szuloElem = szuloElem
        //this.megjelenit(KEPLISTA[0]) = kezdoAllapot
        this.megjelenit()
        this.esemenyek()
    }

    megjelenit(){
        const kep = KEPLISTA[this.#INDEX]
        let kod =`
            <div class="kartya">
                <button id="balra">ᗢᘏᓚ</button>
                <img src="${kep.src}" alt="${kep.index}">
                <button id="jobbra">ᓚᘏᗢ</button>
            </div>
            `;
        this.szuloElem.innerHTML = kod
    }

    getIndex(){
        return this.#INDEX
    }

    esemenyek(){
    this.szuloElem.addEventListener("click", (e) => {

        if (e.target.id === "jobbra"){
            console.log("jobbra katt", this.#INDEX);
            this.#INDEX = (this.#INDEX + 1) % KEPLISTA.length;
            this.megjelenit();
        }

        if (e.target.id === "balra"){
            console.log("balra katt", this.#INDEX);
            this.#INDEX = (this.#INDEX - 1 + KEPLISTA.length) % KEPLISTA.length;
            this.megjelenit();
        }

    });
    }
}