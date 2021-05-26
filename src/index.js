import "./styles/index.css";
import Comment from "./comment";

class App {
  static init() {
    new Comment();
    document
      .querySelector(".nav-button")
      .addEventListener("click", function () {
        console.log("hello world!!!");
        document.querySelector("body").classList.toggle("show_menu");
        document.querySelector(".nav-wrap ul.top_nav").classList.toggle("show");
      });

    window.addEventListener("popstate", function () {
      document.querySelector("body").classList.toggle("show_menu");
      document.querySelector(".nav-wrap ul.top_nav").classList.toggle("show");
    });

    document.querySelector(".contact-form").addEventListener("submit", function (event) {
      event.preventDefault();

      const name = event.target.elements[0].value;
      const email = event.target.elements[1].value;
      const subject = event.target.elements[2].value;
      const message = event.target.elements[3].value;
  
      if (name.trim() === "" || email.trim() === "" || subject.trim() === "" || message.trim() === "" ) {
        alert("All fields needs to be filled");
        return;
      }

      window.setTimeout(() => {
        alert("Your message has been delivered.")
        event.target.elements[0].value = "";
        event.target.elements[1].value = "";
        event.target.elements[2].value = "";
        event.target.elements[3].value = "";
      }, 1000)

    })
  }
}

App.init();
