import { KEPLISTA } from "./keplista.js";
import  Kep  from "./kep.js";

export default class Kepek{
    constructor(KEPLISTA, szuloElem){
        this.KEPLISTA = KEPLISTA
        this.szuloElem = szuloElem
        this.kepek = []
        this.megjelenit(KEPLISTA)
    }

    megjelenit(KEPLISTA){
        this.kepek = []
        KEPLISTA.forEach((kep) => {
            const kepek = new Kep(kep, this.szuloElem);
            this.kepek.push(kepek);
        });
    }
}
