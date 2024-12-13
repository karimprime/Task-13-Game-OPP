
import { Ui } from './ui.js'


export class Details {

    constructor() {
        this.uidisplayDtails = new Ui()
        this.category = document.querySelector(".catogery")
        this.details = document.querySelector(".details")
        this.loading = document.querySelector(".loading")
        this.closeBtn = document.querySelector(".details i")

        this.closeBtn.addEventListener("click", () => {
            this.category.classList.remove("d-none")
            this.details.classList.add("d-none")
        })


    }


    async getDtails(id) {
        this.loading.classList.remove("d-none")
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '7e9896be63mshf467dbf8aec9978p185a42jsn68355a23bcb8',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
        let data = await res.json()
        this.loading.classList.add("d-none")
        this.uidisplayDtails.displayDetails(data)
    }


}