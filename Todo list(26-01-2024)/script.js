function displayError(id, msg) {
  document.getElementById(id).innerHTML = msg;
}

//!add todo
function todo(e) {
  e.preventDefault();
  var title = document.getElementById("title").value.trim();
  var description = document.getElementById("description").value.trim();

  if (title.length !== 0 && description.length !== 0) {
    var currentDate = new Date();
    const timestamp = currentDate.getTime();

    var options = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true, // Use 12-hour time format
    };

    var formattedDateTime = currentDate.toLocaleString("en-US", options);

    const todoData = {
      title: title,
      description: description,
      dateTime: formattedDateTime,
      id: timestamp,
      checked: false,
    };

    var todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todoData);
    localStorage.setItem("todos", JSON.stringify(todos));
    location.reload();
  } else {
    if (title.length == 0 && description.length == 0) {
      displayError("titleError", "Enter valid title");
      displayError("descriptionError", "Enter valid description");
    } else if (title.length == 0) {
      displayError("titleError", "Enter valid title");
    } else {
      displayError("descriptionError", "Enter valid description");
    }
  }
}

document.getElementById("title").addEventListener("click", function () {
  document.getElementById("titleError").textContent = "";
  document.getElementById("descriptionError").textContent = "";
});

document.getElementById("description").addEventListener("click", function () {
  document.getElementById("titleError").textContent = "";
  document.getElementById("descriptionError").textContent = "";
});

var todos = JSON.parse(localStorage.getItem("todos")) || [];

function listData() {


  todos.forEach((item, index) => {
    console.log(item);
    document.getElementById("list").innerHTML += `
    <div class="todo-list" id="list-items">
    <input type="checkbox" id="checkbox-${item.id}" onclick="toggleCheckbox(${item.id})" ${item.checked ? "checked" : ""}>
        <h3>${item.title}</h3>
        <div class="buttens"> 
            <button class="btn btn-warning update-btn" onclick="updateUser(${item.id})">Update</button>
            <button class="btn btn-danger delete-btn" onclick="deleteUser(${item.id})">Delete </button>
            <button class="btn btn-primary description-model" onclick="showModel(${item.id})">description</button>
        </div>
    </div> `;
  });
}

window.onload = listData();
// listData();



//! this is copy of localStorage for ascending and decending.
var todoForSort = JSON.parse(localStorage.getItem("todos")) || [];

//! sorting
function sorting(){
const sortStatus = document.getElementById('sortBtn').value

//!ascending
if(sortStatus == "ascending"){
  todoForSort.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
  document.getElementById("list").innerHTML = "";
  todoForSort.forEach((item, index) => {
    // console.log(item);
    document.getElementById("list").innerHTML += `
    <div class="todo-list" id="list-items">
    <input type="checkbox" id="checkbox-${item.id}" onclick="toggleCheckbox(${item.id})" ${item.checked ? "checked" : ""}>
        <h3>${item.title}</h3>
        <div class="buttens"> 
            <button class="btn btn-warning update-btn" onclick="updateUser(${item.id})">Update</button>
            <button class="btn btn-danger delete-btn" onclick="deleteUser(${item.id})">Delete </button>
            <button class="btn btn-primary description-model" onclick="showModel(${item.id})">description</button>
        </div>
    </div> `;
  });

  document.getElementById('sortBtn').value = "decending";
  document.getElementById("sortingValue").innerHTML = "decending";
}
//!decending
else if(sortStatus=="decending"){
  document.getElementById("list").innerHTML = "";
  todoForSort.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
  todoForSort.reverse();
  todoForSort.forEach((item, index) => {
    console.log(item);
    document.getElementById("list").innerHTML += `
    <div class="todo-list" id="list-items">
    <input type="checkbox" id="checkbox-${item.id}" onclick="toggleCheckbox(${item.id})" ${item.checked ? "checked" : ""}>
        <h3>${item.title}</h3>
        <div class="buttens"> 
            <button class="btn btn-warning update-btn" onclick="updateUser(${item.id})">Update</button>
            <button class="btn btn-danger delete-btn" onclick="deleteUser(${item.id})">Delete </button>
            <button class="btn btn-primary description-model" onclick="showModel(${item.id})">description</button>
        </div>
    </div> `;
  });

  console.log(todoForSort);

  document.getElementById('sortBtn').value = "original";
  document.getElementById("sortingValue").innerHTML = "original";
}

else if (sortStatus == "original"){
  document.getElementById("list").innerHTML = "";

  todos.forEach((item, index) => {
    console.log(item);
    document.getElementById("list").innerHTML += `
    <div class="todo-list" id="list-items">
    <input type="checkbox" id="checkbox-${item.id}" onclick="toggleCheckbox(${item.id})" ${item.checked ? "checked" : ""}>
        <h3>${item.title}</h3>
        <div class="buttens"> 
            <button class="btn btn-warning update-btn" onclick="updateUser(${item.id})">Update</button>
            <button class="btn btn-danger delete-btn" onclick="deleteUser(${item.id})">Delete </button>
            <button class="btn btn-primary description-model" onclick="showModel(${item.id})">description</button>
        </div>
    </div> `;
  });

  document.getElementById('sortBtn').value = "ascending";
  document.getElementById("sortingValue").innerHTML = "ascending";
  }
 
}


//!search
// Function to filter todos based on search input
function filterTodos() {
  const searchInput = document.getElementById('search');
  // const filterText = searchInput.value;
  const filterText = searchInput.value.trim().toLowerCase();
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(filterText) || todo.description.toLowerCase().includes(filterText)
  );
  displayFilteredTodos(filteredTodos);
}


function displayFilteredTodos(filteredTodos) {
  const todoListContainer = document.getElementById('list');
  todoListContainer.innerHTML = '';
  if(filteredTodos.length==0){
    todoListContainer.innerHTML = `<div>
      <h1>Nothing found</h1>
    </div>`;
  }

  else{
  filteredTodos.forEach((todo, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'todoItem';

    listItem.innerHTML = `<div class="todo-list" id="list-items">
    <input type="checkbox" id="checkbox-${todo.id}" onclick="toggleCheckbox(${todo.id})" ${todo.checked ? "checked" : ""}>
        <h3>${todo.title}</h3>
        <div class="buttens"> 
            <button class="btn btn-warning update-btn" onclick="updateUser(${todo.id})">Update</button>
            <button class="btn btn-danger delete-btn" onclick="deleteUser(${todo.id})">Delete </button>
            <button class="btn btn-primary description-model" onclick="showModel(${todo.id})">description</button>
        </div>
    </div>
    `;
    todoListContainer.appendChild(listItem);
  });
  }
}

//!window popup
const description = document.querySelectorAll(".description-model");
const btnCloseModel = document.querySelector(".close");
const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");
const deleteBtn = document.querySelectorAll(".delete-btn");

function showModel(todoid){
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  let obj = todos.find((todoobj) => todoobj.id === todoid);

  model.classList.remove("hidden");
  overlay.classList.remove("hidden");

  document.getElementById("model-description").innerHTML = `
      <h1>${obj.title} 😍</h1>
      <p>${obj.description}</p>
      <p>${obj.dateTime}</p>
      `;

      btnCloseModel.addEventListener("click", function () {
        model.classList.add("hidden");
        overlay.classList.add("hidden");
      });
      
      overlay.addEventListener("click", function () {
        model.classList.add("hidden");
        overlay.classList.add("hidden");
      });
      
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !model.classList.contains("hidden")) {
          model.classList.add("hidden");
          overlay.classList.add("hidden");
        }
      });

}


//! delete todo
function deleteUser(i) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos = todos.filter((item) => item.id !== i);
  localStorage.setItem("todos", JSON.stringify(todos));
  location.reload();
}

//!update button
function updateUser(todoid) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  let obj = todos.find((todoobj) => todoobj.id === todoid);

  model.classList.remove("hidden");
  overlay.classList.remove("hidden");

  document.getElementById("model-description").innerHTML = `
        <div class="container" id="todo-form">
        <center><h1>Update</h1></center>
        <div class="form-floating mb-3">
        <label for="title" style="position: absolute; top: -51%; left: -1%"><b>Title</b></label>
          <input
            type="text"
            class="form-control"
            id="updatetitle"
            placeholder="Title"
            name="title"
            value="${obj.title}"
          />
          <span id="titleError" class="error"></span><br />
        </div>

        <div class="form-floating mb-3">
        <label for="title" style="position: absolute; top: -27%; left: -1%;"><b>Description</b></label>
        <textarea name="description"  class="form-control" id="updatedescription" cols="30" rows="10" placeholder="description class="textarea-update"  style="
        height: 120px;"> ${obj.description}
        </textarea>
        <span id="descriptionError" class="error"></span><br/>
        </div>

        <div class="center">
          <button class="btn btn-primary updateTodoStorage" onclick="updateStorage(${obj.id})">update</button>
        </div>
      </div>
`;

  btnCloseModel.addEventListener("click", function () {
    model.classList.add("hidden");
    overlay.classList.add("hidden");
  });

  overlay.addEventListener("click", function () {
    model.classList.add("hidden");
    overlay.classList.add("hidden");
  });

  document.addEventListener("keydown", function (e) {
    // console.log(e.key)
    if (e.key === "Escape" && !model.classList.contains("hidden")) {
      model.classList.add("hidden");
      overlay.classList.add("hidden");
    }
  });
}

function updateStorage(i) {
  let updatedTitle = document.getElementById("updatetitle").value;
  let updateddesc = document.getElementById("updatedescription").value;

  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  let obj = todos.find((o) => o.id === i);

  todos.map((item) => {
    if (item.id === i) {
      item.title = updatedTitle;
      item.description = updateddesc;
      localStorage.setItem("todos", JSON.stringify(todos));

      location.reload();
    }
  });
}

//! checkbox
function toggleCheckbox(todoid) {
  console.log(todoid, "toggle todo");

  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  todos.map((todo) => {
    if (todo.id === todoid) {
      todo.checked = !todo.checked;
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  });
}

