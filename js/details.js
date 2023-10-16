// ms2ol 3an el details bta3t ay game
export class Details {
    constructor() {

    }
    async getDetails(id) {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'acc3808d99mshb1dbd2be6121c7ep10a83fjsn50b6ca9634f2',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }
        
       

       
            const response = await fetch(url,options);
            const result = await response.json();
           // console.log(result);
            return result;
           
    }
   
   
}
