let box = document.querySelectorAll(".box");
for (i = 0; i < box.length; i++) {
  box[i].addEventListener("click", play);
}

function play() {
  let innerhtmlvalue = this.querySelector(".letter").innerHTML;
  let innerhtmldiv = this.querySelector(".letter");
 let letterInfo = this.querySelector(".info");
 
   box.forEach(b => {
    if (b !== this) {
      b.querySelector(".letter").style.display = "block";
      b.querySelector(".info").style.display = "none";
    }
  });
//   innerhtmldiv.classList.toggle("hidden");
//   letterInfo.classList.toggle('hidden');
  if (letterInfo.style.display === "block") {
    innerhtmldiv.style.display = "block";
    letterInfo.style.display = "none";
  } else {
    innerhtmldiv.style.display = "none"
   keyPressed(innerhtmlvalue);
    letterInfo.style.display = "block";
  }

   buttonAnimation(innerhtmlvalue);
}

function keyPressed(key) {
  switch (key) {
    case "A":
      let Asound = new Audio("./sounds/Asound.mp3");
      Asound.play();
      break;
    case "B":
      let Bsound = new Audio("./sounds/Bsound.mp3");
      Bsound.play();
      break;
    case "C":
      let Csound = new Audio("./sounds/Csound.mp3");
      Csound.play();
      break;
    case "D":
      let Dsound = new Audio("./sounds/Dsound.mp3");
      Dsound.play();
      break;
    case "E":
      let Esound = new Audio("./sounds/Esound.mp3");
      Esound.play();
      break;
    case "F":
      let Fsound = new Audio("./sounds/Fsound.mp3");
      Fsound.play();
      break;
    case "G":
      let Gsound = new Audio("./sounds/Gsound.mp3");
      Gsound.play();
      break;
    case "H":
      let Hsound = new Audio("./sounds/Hsound.mp3");
      Hsound.play();
      break;
    case "I":
      let Isound = new Audio("./sounds/Isound.mp3");
      Isound.play();
      break;
    case "J":
      let Jsound = new Audio("./sounds/Jsound.mp3");
      Jsound.play();
      break;
    case "K":
      let Ksound = new Audio("./sounds/Ksound.mp3");
      Ksound.play();
      break;
    case "L":
      let Lsound = new Audio("./sounds/Lsound.mp3");
      Lsound.play();
      break;
    case "M":
      let Msound = new Audio("./sounds/Msound.mp3");
      Msound.play();
      break;
    case "N":
      let Nsound = new Audio("./sounds/Nsound.mp3");
      Nsound.play();
      break;
    case "O":
      let Osound = new Audio("./sounds/Osound.mp3");
      Osound.play();
      break;
    case "P":
      let Psound = new Audio("./sounds/Psound.mp3");
      Psound.play();
      break;
    case "Q":
      let Qsound = new Audio("./sounds/Qsound.mp3");
      Qsound.play();
      break;
    case "R":
      let Rsound = new Audio("./sounds/Rsound.mp3");
      Rsound.play();
      break;
    case "S":
      let Ssound = new Audio("./sounds/Ssound.mp3");
      Ssound.play();
      break;
    case "T":
      let Tsound = new Audio("./sounds/Tsound.mp3");
      Tsound.play();
      break;
    case "U":
      let Usound = new Audio("./sounds/Usound.mp3");
      Usound.play();
      break;
    case "V":
      let Vsound = new Audio("./sounds/Vsound.mp3");
      Vsound.play();
      break;
    case "W":
      let Wsound = new Audio("./sounds/Wsound.mp3");
      Wsound.play();
      break;
    case "X":
      let Xsound = new Audio("./sounds/Xsound.mp3");
      Xsound.play();
      break;
    case "Y":
      let Ysound = new Audio("./sounds/Ysound.mp3");
      Ysound.play();
      break;
    case "Z":
      let Zsound = new Audio("./sounds/Zsound.mp3");
      Zsound.play();
      break;
    default:
      console.log("wrong input");
  }
}
document.addEventListener("keydown", function (event) {
  let x = event.key.toUpperCase();
  buttonAnimation(x);
  toggleLetterInfo(x);
});

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
function toggleLetterInfo(key) {
  const box = document.querySelector("." + key);
  if (!box) return;

  const letterSpan = box.querySelector(".letter");
  const letterInfo = box.querySelector(".info");

  // Hide all other info divs
  document.querySelectorAll(".box").forEach(b => {
    if (b !== box) {
      b.querySelector(".letter").style.display = "block";
      b.querySelector(".info").style.display = "none";
    }
  });

  // Toggle current
  if (letterInfo.style.display === "block") {
    letterSpan.style.display = "block";
    letterInfo.style.display = "none";
  } else {
    letterSpan.style.display = "none";
    keyPressed(key);
    letterInfo.style.display = "block";
  }
}