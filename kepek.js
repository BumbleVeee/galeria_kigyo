import  Kep  from "./kep.js";
import { KEPLISTA } from "./keplista.js";

export default class Kepek{
    #lista = []
    constructor(szuloElem){
        this.szuloElem = szuloElem
        for (let index = 0; index < KEPLISTA.length; index++) {
            /*const element = KEPLISTA[index];
            const kep = new Kep(element, szuloElem)
            this.#lista.push(kep)*/
            this.#lista.push(new Kep(KEPLISTA[index], szuloElem))
        }
        //this.megjelenit(szuloElem)   -----> NE HÍVD MEG!!! 🤦‍♀️
    }

    megjelenit(szuloElem){
        for (let index = 0; index < this.#lista.length; index++) {
            //this.getLista()[index].megjelenit()
            new Kep(this.getLista()[index], szuloElem)
        }
    }

    getLista(){
        return this.#lista
    }
}
