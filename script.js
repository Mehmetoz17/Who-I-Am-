"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
const modalTitle = document.querySelector("h1");
const modalContent = document.querySelector("p");

const modalData = [
  {
    label: "About Me",
    title: "My name is Mohammad",
    text: "But you can call me Mehmet  and I'm a passionate Front-End Developer focused on creating beautiful and user-friendly interfaces. I'm always learning new technologies, new tools and enjoy working with creative and cool teams",
  },
  {
    label: "Skills and Expertise",
    title: "Technical Skills",
    text: "Proficient in HTML, CSS, and JavaScript & Strong problem-solving abilities and effective team communication",
  },
  {
    label: "Work Experience or Portfolio",
    title: "Selected Projects",
    text: "I'm currently working on my resume and adding some cool and creative projects to my GitHub page 👨‍💻 ",
  },
  {
    label: "Goals and Vision",
    title: "My Vision",
    text: "My goal is to contribute to innovative and impactful projects that make a difference in users' lives. I aspire to grow as a Front-End Developer, collaborate with creative teams, and eventually lead projects that focus on user-first designs. I believe in lifelong learning and aim to master both technical and leadership skills",
  },
];

btnOpenModal.forEach((button, index) => {
  button.textContent = modalData[index].label;
  button.setAttribute("data-title", modalData[index].title);
  button.setAttribute("data-text", modalData[index].text);
});

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// const openModal = function (event) {
//   const button = event.target;
//   const title = button.dataset.title;
//   const text = button.dataset.text;

//   modalTitle.textContent = title;
//   modalContent.textContent = text;
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

const openModal = function (event) {
  const button = event.target;
  const title = button.dataset.title;
  const text = button.dataset.text;

  modalTitle.textContent = title;
  modalContent.textContent = text;

  modal.classList.remove("hidden");
  modal.classList.remove("hidden");
};

btnOpenModal.forEach((button) => {
  button.addEventListener("click", openModal);
});

overlay.addEventListener("click", closeModal);
btnCloseModal.addEventListener("click", closeModal);

// Note: The value of e.key for the Escape key should be "Escape" with an uppercase E, not "escape" with a lowercase E. JavaScript is case-sensitive.
document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
    console.log("Esc was pressed, modal closed baby !");
  }
  console.log("Esc was pressed");
});

// const openModal = function(index) {

//   console.log("button clicked");
//   modal.classList.remove('hidden')
//   overlay.classList.remove('hidden')

//   modalTitle.textContent = modalTitles[index]
//   modalContent.textContent = modalTexts[index]

//   };

// const buttonLabels = [
//   "showModal1",
//   "showModal2",
//   "showModal3",
//   "showModal4",
// ]

// const modalTitles = [
//   "1",
//   "2",
//   "3",
//   "4",
// ];

// const modalTexts = [
//   "11",
//   "22",
//   "33",
//   "44",
// ]

// const closeModal = function(){

//   modal.classList.add('hidden')
//   overlay.classList.add('hidden')

// }

// for (let i = 0; i < btnOpenModal.length; i++)
//   btnOpenModal[i].addEventListener('click',openModal)

//   overlay.addEventListener('click', closeModal)
//   btnCloseModal.addEventListener("click", closeModal)

//   btnOpenModal.forEach((button,index) =>{
//     button.addEventListener("click",() => openModal(index));
//     button.textContent = buttonLabels[index]
//   });
