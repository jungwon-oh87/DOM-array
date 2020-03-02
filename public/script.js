const add_user_button = document.getElementById("add_user");

let data = [];

// get a random uer
async function getUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();
  console.log(data.results[0]);

  const new_user_obj = {
    first_name: data.results[0].name.first,
    last_name: data.results[0].name.last,
    money: Math.floor(Math.random() * 100000)
  };
  addUser(new_user_obj);
}

// add a user
function addUser(user_info) {
  data.push(user_info.name);
}

//update DOM
function updateDOM(updatedData = data) {}

getUser();
