const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".nav");
const nav__items = document.querySelectorAll(".nav__item");
const categoriesContainer = document.querySelector(".categories");
const quizTitle = document.querySelector(".quiz-title");
const quizGrid = document.querySelector(".quiz-grid");
const quizCategoriesContainer = document.querySelector(".quiz-categories");
const storyContainer = document.querySelector(".story");
const tagsContainer = document.querySelector(".popular");

// Toggle Functionality
const toggleMenu = function (e) {
  nav__items.forEach((item) => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      toggle.querySelector("a").innerHTML = '<i class="fas fa-bars"></i>';
    } else {
      item.classList.add("active");
      toggle.querySelector("a").innerHTML = '<i class="fas fa-times"></i>';
    }
  });
};
toggle.addEventListener("click", toggleMenu);
// prettier-ignore
const categories = [
    "All" ,"Women", 'Men', 'Couples', "Adult", 'Kids', 'Living', 'Personality', 'Hobby' ,'Relationship', 'Animals' ,'Travel', 'Film', 'Politics', 'History', 'Story', 'Girls', 'Trivia', 'Health', 'Teans', 'Food', 'Music', 'Technology', 'Education', 'Career', 'Entertainment' ,'Other'
];

categories.forEach((item) => {
  const itemHTML = `<a href="#" class="categories__item">${item}</a>`;
  categoriesContainer.insertAdjacentHTML("beforeend", itemHTML);
});

categoriesContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("categories__item")) {
    quizTitle.innerHTML = "";
    quizTitle.innerHTML = `${e.target.textContent} Quizzes`;
  }
});

const createQuizTile = function (n) {
  const quizTileHTML = `<article class="quiz-tile">
  <div class="quiz-tile__wrapper">
    <img src="./images/food/food-1.jpg" class="quiz__img" />
    <div class="quiz__body">
      <span class="quiz__body--time">1 month ago</span>
      <p class="quiz__body--topic">What should you eat tonight?</p>
    </div>
  </div>
  <div class="quiz-tile__footer">
    <div class="stats">
      <span class="stats__icon"><i class="fas fa-list"></i></span>
      <span class="stats__label">29</span>
    </div>
    <div class="stats">
      <span class="stats__icon"><i class="far fa-eye"></i></span>
      <span class="stats__label">654321</span>
    </div>
    <div class="stats">
      <span class="stats__icon"><i class="far fa-thumbs-up"></i></span>
      <span class="stats__label">8663 </span>
    </div>
    <div class="stats">
      <span class="stats__icon"><i class="fas fa-user"></i></span>
      <span class="stats__label">Gatby</span>
    </div>
  </div>
</article>`;

  for (let i = 1; i <= n; i++) {
    quizGrid.insertAdjacentHTML("beforeend", quizTileHTML);
  }
};

createQuizTile(30);

const quizCategories = categories.slice(1);
console.log(quizCategories);

quizCategories.forEach((cat) => {
  const quizHTML = `<a href="#" class="quiz-categories__item">${cat}</a>`;

  quizCategoriesContainer.insertAdjacentHTML("beforeend", quizHTML);
});

//prettier-ignore
const storyCategories = [
  "Action",
  "Adventure",
  "Romance",
  "Long",
  "Historical",
  "Horror",
  "Humor",
  "Mystery",
  "Non Fiction",
  "Poetry",
  "Realistic",
  "Fantasy",
  "Fanfiction",
  "Thriller",
  "Challenge",
  "Science Fiction",
  "Short Stories",
];

storyCategories.forEach((story) => {
  const storyHTML = `<a href="#" class="quiz-categories__item story__item">${story}</a>`;

  storyContainer.insertAdjacentHTML("beforeend", storyHTML);
});

// Popular tags
// prettier-ignore
const popularTags = ['Girls', 'Friends', 'Fun', 'Teens', 'Love', 'Personality', 'Food', 'History', 'Name', 'Generator', 'Character', 'Lifestyle', 'Religion', 'Music', 'Style', 'Animals']

popularTags.forEach((tag) => {
  const tagHTML = `<a href="#" class="quiz-categories__item popular__item">${tag}</a>`;

  tagsContainer.insertAdjacentHTML("beforeend", tagHTML);
});

const hasSubMenu = document.querySelector(".has-sub-menu");

hasSubMenu.addEventListener(
  "click",
  function () {
    if (
      this.querySelector(".sub__menu").classList.contains("sub__menu--active")
    ) {
      this.querySelector(".sub__menu").classList.remove("sub__menu--active");
    } else {
      this.querySelector(".sub__menu").classList.add("sub__menu--active");
    }
  },
  false
);

document.addEventListener("click", function (e) {
  const isClicked = hasSubMenu.contains(e.target);
  if (!isClicked && hasSubMenu.querySelector(".sub__menu--active")) {
    hasSubMenu
      .querySelector(".sub__menu--active")
      .classList.remove("sub__menu--active");
  }
});
