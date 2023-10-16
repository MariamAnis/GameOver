// shayl functions bt3ml display ll dataa
import { Details } from "./details.js";
export class Ui {
    constructor(result) {
        this.result = result;
        $('.row').click( (e)=> { 
            if(e.target.classList.contains('game')){
                $('.header').addClass('d-none');
                $('.games-body').addClass('d-none');
                $('nav').addClass('d-none');
                $('.details').removeClass('d-none');
                let id= e.target.id;
                  console.log(id);
                  this.gamesDetails(id);
            }
           
        });
        $('.details').click( (e)=> { 
            if(e.target.classList.contains('close')){
                $('.header').removeClass('d-none');
                $('.games-body').removeClass('d-none');
                $('nav').removeClass('d-none');
               $('nav').addClass('fixed-top');
                $('.details').addClass('d-none');
            }
           

            
        });
       
       
       

    }
    
    async gamesDetails(id){
        const details =  new Details();
        const res =  await details.getDetails(id);
        console.log(res);
        this.displayDetails(res);
      }
    
    displayGames() {
        var box = '';
        for (let i = 0; i < this.result.length; i++) {
            box += `
            <div class="col-md-3 mt-3">
            <div class="card  mb-3 h-100 ">
                <div class="card-body game">
                    <figure>
                        <img src="${this.result[i].thumbnail}" class="w-100 game"id="${this.result[i].id}">
                    </figure>
                    
                    <div class="row mt-2">
                        <div class="col-md-8">
                            <p class="title game" id="${this.result[i].id}">${this.result[i].title}</p>
                        </div>
                        <div class="col-md-4">
                            <span class="price p-1 game"id="${this.result[i].id}">Free</span>
                            <span class="id p-1 game text-white d-none"id="${this.result[i].id}">${this.result[i].id}</span>
                            
                        </div>
                    </div>
                    <div class="row">
                    <div class="col-md-12">
                    <p class="text-secondary small desc card-text game"id="${this.result[i].id}">${this.result[i].short_description.split(' ', 7)+"..."}</p>
                    </div>
                    </div>
                    
                </div>
                <div class="card-footer bg-transparent ">
                    <div class="row">
                        <div class="col-md-4">
                            <p class="cat d-inline-block p-1 game"id="${this.result[i].id}">${this.result[i].genre}</p>
                        </div>
                        <div class="col-md-8">
                            <span class="source d-inline-block p-1 game"id="${this.result[i].id}">${this.result[i].platform}</span>
                        </div>
                    </div>
                   
                    
                </div>
            </div>
            </div>
            `
        }
        $('.row').html(box);

    }
 
    displayDetails(res){
        let box=`
        <div class="row">
            <div class="col-md-6">
                <h3 class="text-white mt-4">Details game</h3>
            </div>
            <div class="col-md-6 position-relative">
            <i class="fa fa-close position-absolute end-0 close" style="font-size:48px;color:white"></i>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <img src="${res.thumbnail}" class="w-100">
            </div>
            <div class="col-md-6">
                <h2 class="text-white">${res.title}</h2>
                <span class="badge bg-info p-2 text-white mb-3">Category: ${res.genre}</span>
                <span class="badge bg-info p-2 text-white mb-3">Platform: ${res.platform}</span>
                <span class="badge bg-info p-2 mb-2">Status: ${res.status}</span>
                <p class="text-white">${res.description}</p>
                <a href="${res.freetogame_profile_url}" class="btn btn-outline-warning p-2 text-white">Visit game</a>
            </div>
        </div>
    `;
    $('.details').html(box);

    }
 
}
