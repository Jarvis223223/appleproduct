// Search Input Change Js
let searchInp = document.getElementById("search-input");
let icons = document.getElementsByClassName("icon-item");

searchInp.onfocus = function () {
  for (let icon of icons) {
    icon.style.display = "none";
  }
  this.style.width = "100%";
};
searchInp.onblur = function () {
  for (let icon of icons) {
    icon.style.display = "inline";
  }
  this.style.width = "65px";
};

// NavBar Bg Js
window.onscroll = function () {
  let nav = document.getElementById("nav");
  let arrow = document.getElementById("go-to-top");
  if (window.pageYOffset > 500) {
    nav.classList.add("bg");
  } else {
    nav.classList.remove("bg");
  }

  if (window.pageYOffset > 300) {
    arrow.style.opacity = "1";
  } else {
    arrow.style.opacity = "0";
  }
};

// NavBar Show & Hide
let hambergar = document.getElementById("hambergar");
let navbarMenu = document.getElementById("navbar-menu");

hambergar.onclick = function () {
  navbarMenu.classList.toggle("active");

  if (this.innerHTML === '<i class="fa-solid fa-bars"></i>') {
    this.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    this.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
};

// Slider Js
let nextBtn = document.getElementById("nextBtn");
let preBtn = document.getElementById("preBtn");
let sliders = document.getElementsByClassName("slider");
let num = 1;
function next() {
  document.getElementById("slider" + num).classList.remove("active");
  num++;
  if (num > sliders.length) {
    num = 1;
  }
  document.getElementById("slider" + num).classList.add("active");
}

function pre() {
  document.getElementById("slider" + num).classList.remove("active");
  num--;
  if (num < 1) {
    num = sliders.length;
  }
  document.getElementById("slider" + num).classList.add("active");
}
preBtn.onclick = pre;
nextBtn.onclick = next;

setInterval(next, 3000);

// Product Filter Js

let allBtn = document.getElementById("all-btn");
let clothBtn = document.getElementById("cloth-btn");
let shoeBtn = document.getElementById("shoe-btn");
let watchBtn = document.getElementById("watch-btn");

let clothCard = document.getElementsByClassName("cloth");
let shoeCard = document.getElementsByClassName("shoe");
let watchCard = document.getElementsByClassName("watch");

allBtn.onclick = function () {
  for (let shoe of shoeCard) {
    shoe.style.display = "block";
  }
  for (let watch of watchCard) {
    watch.style.display = "block";
  }
  for (let cloth of clothCard) {
    cloth.style.display = "block";
  }

  this.classList.add("actives");
  clothBtn.classList.remove("actives");
  shoeBtn.classList.remove("actives");
  watchBtn.classList.remove("actives");
};

clothBtn.onclick = function () {
  for (let shoe of shoeCard) {
    shoe.style.display = "none";
  }
  for (let watch of watchCard) {
    watch.style.display = "none";
  }
  for (let cloth of clothCard) {
    cloth.style.display = "block";
  }

  this.classList.add("actives");
  allBtn.classList.remove("actives");
  shoeBtn.classList.remove("actives");
  watchBtn.classList.remove("actives");
};
shoeBtn.onclick = function () {
  for (let cloth of clothCard) {
    cloth.style.display = "none";
  }
  for (let watch of watchCard) {
    watch.style.display = "none";
  }
  for (let shoe of shoeCard) {
    shoe.style.display = "block";
  }

  this.classList.add("actives");
  clothBtn.classList.remove("actives");
  allBtn.classList.remove("actives");
  watchBtn.classList.remove("actives");
};
watchBtn.onclick = function () {
  for (let shoe of shoeCard) {
    shoe.style.display = "none";
  }
  for (let cloth of clothCard) {
    cloth.style.display = "none";
  }
  for (let watch of watchCard) {
    watch.style.display = "block";
  }

  this.classList.add("actives");
  clothBtn.classList.remove("actives");
  allBtn.classList.remove("actives");
  shoeBtn.classList.remove("actives");
};

// Time

let hoursTag = document.getElementById("hours");
let minutesTag = document.getElementById("minutes");
let secoundsTag = document.getElementById("secounds");
let dayTag = document.getElementById("days");

function run() {
  const now = new Date();

  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const day = now.toLocaleDateString("en-US", { weekday: "short" });

  hoursTag.innerHTML = hour;
  minutesTag.innerHTML = minute;
  secoundsTag.innerHTML = second;
  dayTag.innerHTML = day;
}

setInterval(run, 1000);
