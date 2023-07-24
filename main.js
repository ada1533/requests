
let list = document.querySelector(".list");
let list2 = document.querySelector(".list2");
let Api1 = "https://rickandmortyapi.com/api/character";
let obj = {};

function cile() {
  fetch(Api1)
    .then((data) => data.json())
    .then((res) =>
      res.results.forEach(
        (item) =>
          (list.innerHTML += ` ${item.name} <img src = "${item.image}" style="width:30px";><br>`)
      )
    )
    .catch((err) => console.log(err));
}
cile();

async function getRequestImg() {
  try {
    let response = await fetch(Api1);
    let data = await response.json();
    let a = data.results.map((item) => item.image);
    let b = data.results.map((item) => item.name);

    for (let i = 0; i < a.length; i++) {
      let obj2 = {
        title: a[i],
        name: b[i],
      };
      fetch(" http://localhost:2000/characters", {
        method: "POST",
        body: JSON.stringify(obj2),
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      list2.innerHTML += `<p>${obj2.name}</p> <img src = "${obj2.title}" style="width:30px";>`;
      console.log("s");
    }
  } catch (error) {
    console.error("Произошла ошибка при получении данных:", error);
  }
}

getRequestImg();
