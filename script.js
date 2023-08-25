const cardArray = [
  {
    id: 1,
    name: "pizza",
    img: "./img/pizza.png",
  },
  {
    id: 2,
    name: "milkshake",
    img: "./img/milkshake.png",
  },
  {
    id: 3,
    name: "ice-cream",
    img: "./img/ice-cream.png",
  },
  {
    id: 4,
    name: "hotdog",
    img: "./img/hotdog.png",
  },
  {
    id: 5,
    name: "fries",
    img: "./img/fries.png",
  },
  {
    id: 6,
    name: "cheeseburger",
    img: "./img/cheeseburger.png",
  },
  {
    id: 7,
    name: "pizza",
    img: "./img/pizza.png",
  },
  {
    id: 8,
    name: "milkshake",
    img: "./img/milkshake.png",
  },
  {
    id: 9,
    name: "ice-cream",
    img: "./img/ice-cream.png",
  },
  {
    id: 10,
    name: "hotdog",
    img: "./img/hotdog.png",
  },
  {
    id: 11,
    name: "fries",
    img: "./img/fries.png",
  },
  {
    id: 12,
    name: "cheeseburger",
    img: "./img/cheeseburger.png",
  },
];
var gameScore = 0;
var totalScore = (localStorage.getItem("totalScore"));
var divCount = 0;
let cardChoosen = [];
let cardChoosenID = [];
const gameArea = document.querySelector("#gameArea");
document.getElementById("totalScore").innerHTML =
  localStorage.getItem("totalScore");
  document.getElementById("gameScore").innerHTML = gameScore;

function deleteGameArea() {
  gameArea.innerHTML = "";
}

function createGameArea() {
  cardArray.sort(() => 0.5 - Math.random());
  for (let index = 0; index < cardArray.length; index++) {
    const gameCards = document.createElement("img");
    gameCards.setAttribute("src", "./img/blank.png");
    gameCards.setAttribute("imgID", index);
    gameCards.classList.add("gameCards");
    gameCards.addEventListener("click", function flipCard() {
      const cardID = this.getAttribute("imgID");
      cardChoosen.push(cardArray[cardID].name);
      cardChoosenID.push(cardID);
      this.setAttribute("src", cardArray[cardID].img);
      console.log(cardChoosen);
      if (cardChoosen.length > 2) {
        for (let index = 0; index < cardChoosen.length - 2; index++) {
          cardChoosen.pop();
        }
      } else if (cardChoosen.length == 2) {
        setTimeout(() => {
          const cards = document.querySelectorAll("#gameArea img");
          function resetArray() {
            cardChoosen = [];
            cardChoosenID = [];
          }
          if (
            cardChoosen[0] === cardChoosen[1] &&
            cardChoosenID[0] != cardChoosenID[1]
          ) {
            for (let index = 0; index < cardChoosen.length; index++) {
              cards[cardChoosenID[index]].setAttribute(
                "src",
                "./img/success.png"
              );
              const parentElement = cards[cardChoosenID[index]].cloneNode(true);
              cards[cardChoosenID[index]].replaceWith(parentElement);
            }
            gameScore = gameScore + 1;
            document.getElementById("gameScore").innerHTML = gameScore;
            if (gameScore == cardArray.length / 2) {
              gameScore = 0;
              document.getElementById("gameScore").innerHTML = gameScore;
              totalScore = totalScore + 1;
              localStorage.setItem((key = "totalScore"), (value = totalScore));
              document.getElementById("totalScore").innerHTML =
                localStorage.getItem("totalScore");
              deleteGameArea();
              createGameArea();
              alert("Tebrikler oyunu kazandınız!");
            }
            resetArray();
          } else {
            for (let index = 0; index < cardChoosen.length; index++) {
              cards[cardChoosenID[index]].setAttribute(
                "src",
                "./img/blank.png"
              );
            }
            resetArray();
          }
        }, 400);
      }
    });
    gameArea.appendChild(gameCards);
  }
}
createGameArea();
