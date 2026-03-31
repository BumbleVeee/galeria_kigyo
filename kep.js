export const KEPLISTA=[
    {
        src: "https://www.balatonica.hu/img/article/_1738082963.jpg",
        cim: "Kigyo",
        leiras: "kigyo",
        index: 0,
    },
    {
        src: "https://www.balatonica.hu/img/article/_1738082963.jpg",
        cim: "Kigyo2",
        leiras: "kigy",
        index: 1,
    },
    {
        src: "https://www.balatonica.hu/img/article/_1738082963.jpg",
        cim: "Kigyo3",
        leiras: "kig",
        index: 2,
    },
    {
        src: "https://www.balatonica.hu/img/article/_1738082963.jpg",
        cim: "Kigyo4",
        leiras: "ki",
        index: 3,
    },
    {
        src: "https://www.balatonica.hu/img/article/_1738082963.jpg",
        cim: "Kigyo5",
        leiras: "k",
        index: 4,
    },
]

export default class Kep{
    #obj={}
    constructor(obj={src,cim,leiras,index}, kepElem) {
        this.#obj=obj;
        this.kepElem=kepElem
        this.megjelenit()
        this.buttonElem=this.kepElem.querySelector("img")
        this.buttonElem.addEventListener("click", function (event) {
            console.log(event.target)
        })
    }

    megjelenit(){
        let kod=`
            <div class="kartya">
                <img src="${this.#obj.src}" alt="${this.#obj.index}">
                <p>${this.#obj.cim}</p>
                <p>${this.#obj.leiras}</p>
            </div>
            `;
        this.kepElem.innerHTML += kod 
    }

    getObj(){
        return this.#obj
    }
}