//home
import { Ui } from "./ui.module.js";
export class Games {
    constructor() {
        this.getLink();
        this.getGames('mmorpg');
        
        

    }
    async getGames(category) {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'acc3808d99mshb1dbd2be6121c7ep10a83fjsn50b6ca9634f2',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }

        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        const display = new Ui(result);
        display.displayGames();
        
    }
    getLink(){
        const links = document.querySelectorAll('.navbar .nav-item .nav-link')
        links.forEach(link => {
           link.addEventListener('click',(e)=>{
            $('.navbar .nav-item .nav-link').addClass('active');
            $(e.target).parent().siblings().children().removeClass('active');
            let attr = $(e.target).html().toLowerCase();
            this.getGames(attr);
           })
        });
        
    }
    
   

}