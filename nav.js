// ----------------create-----------------
const nav = document.createElement("ul");
const navItemOne = document.createElement("li");
const navItemTwo = document.createElement("li");
const navItemThree = document.createElement("li");

nav.classList.add('navigation');

navItemOne.innerText = "Anasayfa";
navItemTwo.innerText = "iletişim";
navItemThree.innerText = "Hakkımızda";

navItemOne.addEventListener('click', () => window.location.href = "index.html");
navItemTwo.addEventListener('click', () => window.location.href = "contact.html");
navItemThree.addEventListener('click', () => window.location.href = "about.html");

// ---------------appending-----
nav.appendChild(navItemOne);
nav.appendChild(navItemTwo);
nav.appendChild(navItemThree);

document.querySelector("#navigation-area").appendChild(nav);





