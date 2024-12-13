
import { Ui } from './ui.js'
import { Details } from './deails.js'


export class GamesCategory {


    constructor() {
        this.disPlay = new Ui()
        this.loading = document.querySelector(".loading")
        this.category = document.querySelector(".catogery")
        this.details = document.querySelector(".details")


        document.querySelector("ul").addEventListener("click", (e) => {
            const clicked = e.target.closest(".nav-link")
            if (!clicked) return

            document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"))
            clicked.classList.add("active")

            this.fetchDataAndDisplay(clicked.innerText)

        })
        this.fetchDataAndDisplay('mmorpg')



    }

    async fetchDataAndDisplay(link) {
        this.loading.classList.remove("d-none")
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '7e9896be63mshf467dbf8aec9978p185a42jsn68355a23bcb8',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${link}`, options)
        let data = await res.json()
        this.loading.classList.add("d-none")
        this.disPlay.disPlayCatogery(data)
        this.cardEventListenters()

    }

    cardEventListenters() {
        document.querySelectorAll('.card').forEach(card => card.addEventListener("click", () => {
            this.category.classList.add("d-none")
            this.details.classList.remove("d-none")
            new Details().getDtails(card.id);

        }))
    }
}