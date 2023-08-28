import { Ui } from "./ui.module.js";

export class Details {
  constructor(identifier) {
    document.getElementById("closeDetails").addEventListener("click", () => {
      document.getElementById("homeDisplay").classList.remove("d-none");
      document.getElementById("detailsDisplay").classList.add("d-none");
    });

    this.ui = new Ui();
    this.loading = document.querySelector(".loader");
    this.getapi(identifier);
  }

  async getapi(identifier) {

    this.loading.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a474996243msh970f3d9323ff42fp14f246jsnd103939cb32a",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${identifier}`,
      options
    );
    const apiRespnse = await api.json();
    this.loading.classList.add("d-none");
    

    new Ui().displayDetailsInfo(apiRespnse);
  }
}