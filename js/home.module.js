import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Home {
  constructor() {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        this.changeActive(link)
        const categortOfClickedLink = link.getAttribute("data-category");      
        this.dispalyGames(categortOfClickedLink);
      });
    });

    this.homeCards = document.getElementById("homeDisplay");
    this.detailsCards = document.getElementById("detailsDisplay");


    this.loading = document.querySelector(".loader");

    this.ui = new Ui();

    this.dispalyGames("mmoarpg");

  }

  async changeActive(link){
    document.querySelector(".navbar-nav a.active").classList.remove("active");
    link.classList.add("active"); 
  }

  async dispalyGames(category) {

    this.loading.classList.remove("d-none")
    const setting = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a474996243msh970f3d9323ff42fp14f246jsnd103939cb32a",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const gamesApi = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      setting
    );
    const apiResponse = await gamesApi.json();
    this.loading.classList.add("d-none");

    this.ui.displayHomeGames(apiResponse);


    document.querySelectorAll(".card").forEach(card =>{

      card.addEventListener("click",()=>{

        this.homeCards.classList.add("d-none")
        this.detailsCards.classList.remove("d-none")
        this.detailsSec = new Details(card.dataset.id);
        
      } )

    })

  }
}