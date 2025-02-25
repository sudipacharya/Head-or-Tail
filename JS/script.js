const username_submit = (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  if (username.length < 5) {
    alert("Username must be at least 5 characters long");
    return;
  }
  //success
  document.getElementById("user").innerText = username;
  document.getElementById("username_div").style.display = "none";
  document.getElementById("game_div").style.display = "block";
};
const start_game = (side) => {
  document.getElementById("results").style.display = "none";

  document.getElementById("flipping").style.display = "block";

  setTimeout(() => {
    get_results(side);
    document.getElementById("flipping").style.display = "none";
    document.getElementById("results").style.display = "block";
  }, 1000);
};
const get_results = (side) => {
  const coin_side = Math.floor(Math.random() * (2 - 1 + 1) + 1);

  let flipped_side = "";
  if (coin_side === 1) {
    flipped_side = "head";
  } else {
    flipped_side = "tail";
  }

  document.getElementById("results").innerHTML ='Coin was flipped and result was <h1>' +flipped_side + "</h1> Your choice: "+ side;
  if (coin_side === 1) {
    //head
    if (side === "head") {
      won();
    } else {
      lost();
    }
  } else {
    if (side === "tail") {
      won();
    } else {
      lost();
    }
  }
};

const won = () => {
  setTimeout(() => {
    alert("You won!");
  }, 1000);
};

const lost = () => {
  setTimeout(() => {
    alert("You lost!");
  }, 1000);
};
