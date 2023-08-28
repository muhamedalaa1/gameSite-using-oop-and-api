export class Ui {
    constructor(){
     
    }


    displayHomeGames(data){


        let cartona = "";
        for(let i = 0; i < data.length;i++){

          

            cartona += `
                        <div class="col-lg-3 col-md-6">
            <div class="inner h-100">
              <div class="card-group h-100">
                <div data-id="${data[i].id}" class="card">
                  <img src="${data[i].thumbnail}" class="w-100 card-img-top" alt="..." />
                  <div
                    class="card-body d-flex justify-content-between align-items-center"
                  >
                    <h5 class="card-title">${data[i].title}</h5>
                    <button class="btn btn-primary">Free</button>
                  </div>
                  <p class="card-text p-2">
                    ${data[i].short_description.split(" " ,8)}
                  </p>
                  <div
                    class="card-footer d-flex justify-content-between align-items-center"
                  >
                    <small class="text-body-secondary">${data[i].genre}</small>
                    <small class="text-body-secondary">${data[i].platform}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
            `;
        }

        document.getElementById("HomeDisplay").innerHTML = cartona
    }


    displayDetailsInfo(data){

      let cartona = `

                <div class="detailsImage w-50 me-4">
            <img class="w-100" src="${data.thumbnail}" alt="..." />
          </div>

          <div class="detailsDescription w-50">
            <h3>Title: ${data.title}</h3>

            <div class="category d-flex my-2">
              <p>Category:</p>
              <span class="ms-2 btn btn-primary">${data.genre}</span>
            </div>

            <div class="Platform d-flex my-2">
              <p>Platform:</p>
              <span class="ms-2 btn btn-primary">${data.platform}</span>
            </div>

            <div class="Status d-flex my-2">
              <p>Status:</p>
              <span class="ms-2 btn btn-primary">Live</span>
            </div>

            <p>${data.description}</p>

            <a href="${data.game_url}" target="_blank" class="btn btn-outline-warning">Show Game</a>
          </div>
      
      `;

      document.getElementById("theReplacedInner").innerHTML=cartona;

    }
}