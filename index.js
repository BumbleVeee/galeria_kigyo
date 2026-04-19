import { KEPLISTA } from "./keplista.js";
import  Kep  from "./kep.js";
import Kepek from "./kepek.js";
import { Kepnezegeto } from "./kepnezegeto.js";

const szuloElem = document.querySelector(".tarolo")
const szuloElem2 = document.querySelector(".nezegeto")
//const kep = new Kep(KEPLISTA[0], szuloElem)
const kepnezegeto = new Kepnezegeto(szuloElem2)
const kepek = new Kepek(szuloElem)