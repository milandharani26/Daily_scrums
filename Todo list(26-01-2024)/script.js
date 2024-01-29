function todo(e) {
  e.preventDefault();

  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;

  //geting current time and date
  // var currentDate = new Date();

  // // Get the current date and time as a string
  // var dateString = currentDate.toDateString();
  // var timeString = currentDate.toTimeString();
  var currentDate = new Date();

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
  // console.log(title, description);
  const todoData = {
    title: title,
    description: description,
    dateTime: formattedDateTime,
  };

  var todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push(todoData);
  localStorage.setItem("todos", JSON.stringify(todos));
  location.reload();
}

var todos = JSON.parse(localStorage.getItem("todos")) || [];

function listData() {
  todos.forEach((item) => {
    console.log(item);
    document.getElementById("list").innerHTML += `<hr>
    <div class="todo-list" id="list-items">
        <h3>${item.title}</h3>
        <div class="buttens">
            <button class="btn btn-warning update-btn">Update</button>
            <button class="btn btn-danger delete-btn">Delete</button>
            <button class="btn btn-primary description-model">description</button>
        </div>
    </div>
    <hr>`;
  });
}

window.onload = listData();



//window popup
const description = document.querySelectorAll(".description-model");
const btnCloseModel = document.querySelector(".close");
const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");
const deleteBtn = document.querySelectorAll(".delete-btn");

for (let i = 0; i < description.length; i++) {
  description[i].addEventListener("click", function () {
    model.classList.remove("hidden");
    overlay.classList.remove("hidden");

    document.getElementById("model-description").innerHTML = `
        <h1>${todos[i].title} 😍</h1>
        <p>${todos[i].description}</p>
        <p>${todos[i].dateTime}</p>
        `;

    // if(!model.classList.contains('hidden')){
    //     document.getElementsByTagName("html").style.overflow = 'hidden';
    // }
  });
}

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

// // Clear all key-value pairs from local storage
// localStorage.clear();

for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", function () {
    console.log(deleteBtn.length);
    console.log(todos[i]);

    // localStorage.removeItem(todos[i])
    todos.splice(i, i + 1);
    // location.reload();

  });
}



//update button

const updateBtn = document.querySelectorAll(".update-btn");

for(let i = 0; i< updateBtn.length; i++){
    updateBtn[i].addEventListener("click", function(){

        model.classList.remove("hidden");
        overlay.classList.remove("hidden");

        console.log(todos[i].title)
        console.log(todos[i].description)

        document.getElementById("model-description").innerHTML = `
        <div class="container" id="todo-form">
        <center><h1>Update</h1></center>

        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Title"
            name="title"
            value= ${todos[i].title}
          />
          <label for="floatingInputUsername" id="username">Title</label>
          <span id="usernameError" class="error"></span><br />
        </div>

        <div class="form-floating mb-3">
        <textarea name="description"  class="form-control" id="description" cols="30" rows="10" placeholder="description class="textarea-update"  style="
        height: 120px;"> ${todos[i].description}
        </textarea>
        </div>

        <div class="center">
          <button class="btn btn-primary updateTodoStorage" onclick="updateStorage()">update</button>
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
    })

})
}


const updateTodoStorage = document.querySelectorAll(".updateTodoStorage");

function updateStorage(){
    alert("hello")
}


