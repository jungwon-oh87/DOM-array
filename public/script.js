const add_user_button = document.getElementById("add_user");

let data = [];

// fetch random uers
async function getUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();

  console.log(data.results[0]);
}

getUser();
