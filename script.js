document.addEventListener("DOMContentLoaded", function () {
  //select the left  (The below code is not available.)
  // const card = document.getElementById("left-card");

  // access the button from left-card
  const reactBtn = document.getElementById("react-performance");
  const japanBtn = document.getElementById("japan-travel");
  const receipeBtn = document.getElementById("receipe-favourite");
  const workoutBtn = document.getElementById("workout-weekly");
  const mealBtn = document.getElementById("meal-prep");
  const readBtn = document.getElementById("read-list");
  const fitnessBtn = document.getElementById("fitness-goal");

  // access the button from right-card
  const reactContent = document.getElementById("react-javascript");
  const japanContent = document.getElementById("japan-content1");
  const receipeContent = document.getElementById("receipe-content1");
  const workoutContent = document.getElementById("workout-content1");
  const mealContent = document.getElementById("meal-content1");
  const readContent = document.getElementById("read-content1");
  const fitnessContent = document.getElementById("fitness-content1");

  //access the headig from right-card
  const reactHeading = document.getElementById("javascript-description");
  const japanHeading = document.getElementById("travel-planning");
  const receipeHeading = document.getElementById("favorite-pasta");
  const WeeklyHeading = document.getElementById("weekly-workout");
  const mealHeading = document.getElementById("meal-ideas");
  const raedHeading = document.getElementById("reading-list");
  const fitnessHeading = document.getElementById("fitness-heading-goal");

  const content = {
    react: `React  is a JavaScript library for building interactive user
            interfaces using reusable components. It updates the UI efficiently
            with a virtual DOM.`,
    japan: `Japan is an island nation in East Asia known for its rich culture,
            advanced technology, and beautiful landscapes.`,
    receipe: `A recipe is a set of instructions for preparing a specific dish,
            including ingredients and steps.`,
    weekly: ` A weekly workout plan is a structured schedule that outlines
            specific exercises for each day to improve fitness and health `,
    meal: `Meal prep ideas involve planning and preparing meals in advance to
            save time, reduce stress, and eat healthier throughout the week .`,
    read:`A reading list is a curated collection of books or articles planned
            for reading, often based on personal interests or study goals.`,
    fit :   `A fitness goal for 2025 sets a clear target for improving health,
            strength, or endurance within the year.`

  };

  // const  = document.getElementById("react-content-btn");
  document.getElementById("react-content-btn").innerHTML = content.react;
  document.getElementById("japan-content-btn").innerHTML = content.japan;
  document.getElementById("receipe-content-btn").innerHTML = content.receipe;
  document.getElementById("workout-content-btn").innerHTML = content.weekly;
  document.getElementById("meal-content-btn").innerHTML = content.meal;
  document.getElementById("read-content-btn").innerHTML = content.read;
  document.getElementById("fitness-content-btn").innerHTML = content.fit;

  let hideElements = [
    japanContent,
    receipeContent,
    workoutContent,
    mealContent,
    raedHeading,
    readContent,
    fitnessHeading,
    fitnessContent,
    japanHeading,
    receipeHeading,
    WeeklyHeading,
    mealHeading,
    reactContent,
    reactHeading,
  ];

  let allButtons = [
    reactBtn,
    japanBtn,
    receipeBtn,
    workoutBtn,
    mealBtn,
    readBtn,
    fitnessBtn,
  ];

  function show() {
    hideElements.forEach((el) => el.classList.add("hidden"));
  }

  function reactshow(content, heading) {
    content.classList.remove("hidden");
    heading.classList.remove("hidden");
  }

  function highlight(button, activebutton) {
    button.forEach((btn) => btn.classList.remove("highlighter"));
    activebutton.classList.add("highlighter");
  }

  reactBtn.addEventListener("click", function () {
    // hideElements.forEach((el) => el.classList.add("hidden"));
    show();
    // reactContent.classList.remove("hidden");
    // reactHeading.classList.remove("hidden");
    reactshow(reactContent, reactHeading);
    // allButtons.forEach((btn) => btn.classList.remove("highlighter"));
    // reactBtn.classList.add("highlighter");
    highlight(allButtons, reactBtn);
  });

  japanBtn.addEventListener("click", function () {
    // hideElements.forEach((el) => el.classList.add("hidden"));
    show();
    // japanHeading.classList.remove("hidden");
    // japanContent.classList.remove("hidden");
    reactshow(japanContent, japanHeading);
    // allButtons.forEach((btn) => btn.classList.remove("highlighter"));
    // japanBtn.classList.add("highlighter");
    highlight(allButtons, japanBtn);
  });

  receipeBtn.addEventListener("click", function () {
    // hideElements.forEach((el) => el.classList.add("hidden"));
    show();
    // receipeHeading.classList.remove("hidden");
    // reactContent.classList.remove("hidden");
    reactshow(receipeHeading, reactContent);
    // allButtons.forEach((btn) => btn.classList.remove("highlighter"));
    // receipeBtn.classList.add("highlighter");
    highlight(allButtons, receipeBtn);
  });

  workoutBtn.addEventListener("click", function () {
    // hideElements.forEach((el) => el.classList.add("hidden"));
    show();
    // WeeklyHeading.classList.remove("hidden");
    // workoutContent.classList.remove("hidden");
    reactshow(WeeklyHeading, workoutContent);
    // allButtons.forEach((btn) => btn.classList.remove("highlighter"));
    // workoutBtn.classList.add("highlighter");
    highlight(allButtons, workoutBtn);
  });

  mealBtn.addEventListener("click", function () {
    // hideElements.forEach((el) => el.classList.add("hidden"));
    show();
    // mealHeading.classList.remove("hidden");
    // mealContent.classList.remove("hidden");
    reactshow(mealHeading, mealContent);
    // allButtons.forEach((btn) => btn.classList.remove("highlighter"));
    // mealBtn.classList.add("highlighter");
    highlight(allButtons, mealBtn);
  });

  readBtn.addEventListener("click", function () {
    // hideElements.forEach((el) => el.classList.add("hidden"));
    show();
    // raedHeading.classList.remove("hidden");
    // readContent.classList.remove("hidden");
    reactshow(raedHeading, readContent);
    // allButtons.forEach((btn) => btn.classList.remove("highlighter"));
    // readBtn.classList.add("highlighter");
    highlight(allButtons, readBtn);
  });

  fitnessBtn.addEventListener("click", function () {
    // hideElements.forEach((el) => el.classList.add("hidden"));
    show();
    // fitnessHeading.classList.remove("hidden");
    // fitnessContent.classList.remove("hidden");
    reactshow(fitnessHeading, fitnessContent);
    // allButtons.forEach((btn) => btn.classList.remove("highlighter"));
    // fitnessBtn.classList.add("highlighter");
    highlight(allButtons, fitnessBtn);
  });
});
