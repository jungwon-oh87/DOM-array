const add_user_button = document.getElementById("add_user");
const double_money_button = document.getElementById("double_money");
const main = document.getElementById("main");
const sort = document.getElementById("sort");
const mill = document.getElementById("mill");
let data = [];

// get a random uer
async function getUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();
  // console.log(data.results[0]);

  const new_user_obj = {
    first_name: data.results[0].name.first,
    last_name: data.results[0].name.last,
    money: Math.floor(Math.random() * 100000)
  };
  addUser(new_user_obj);
}

// add a user
function addUser(new_user_obj) {
  data.push(new_user_obj);
  updateDOM();
}

//update DOM
function updateDOM(updatedData = data) {
  main.innerHTML = "";

  updatedData.forEach(item => {
    const row_element = document.createElement("div");
    row_element.classList.add("flex", "w-full", "justify-between");

    row_element.innerHTML = `<strong>${item.first_name} ${
      item.last_name
    }</strong>
    <p>${formatMoney(item.money)}</p>
    `;

    main.appendChild(row_element);
  });
}

// number to dollar format
function formatMoney(number) {
  return `$${number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
}

function doubleMoney() {
  data = data.map(user => {
    return { ...user, money: user.money * 2 };
  });
  updateDOM();
}

function sortByRichest() {
  data.sort((a, b) => {
    return b.money - a.money;
  });

  updateDOM();
}

add_user_button.addEventListener("click", getUser);
double_money_button.addEventListener("click", doubleMoney);
sort.addEventListener("click", sortByRichest);
mill.addEventListener();
