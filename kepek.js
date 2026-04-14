import { KEPLISTA } from "kep.js";

export default class Kepek{
    constructor(KEPLISTA, szuloElem){
        this.KEPLISTA = KEPLISTA
        this.szuloElem = szuloElem
        this.kepek = []
    }

    megjelenit(KEPLISTA){
        this.kepek = []
        KEPLISTA.forEach((kep,i) => {
            const kep = new KEPLISTA(kep, i, this.szuloElem);
            this.kepek.push(kep);
        });
    }
}
