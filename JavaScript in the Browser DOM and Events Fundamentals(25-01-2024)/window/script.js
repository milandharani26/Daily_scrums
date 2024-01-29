const showModel = document.querySelectorAll(".btn");
const btnCloseModel = document.querySelector(".close");
const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");


for (let i = 0; i < showModel.length; i++) {
    showModel[i].addEventListener("click", function(){
        model.classList.remove('hidden');
        overlay.classList.remove("hidden");
    })
}


btnCloseModel.addEventListener("click", function(){
    model.classList.add('hidden');
    overlay.classList.add("hidden");
})

overlay.addEventListener("click", function(){
    model.classList.add('hidden');
    overlay.classList.add("hidden");
})

document.addEventListener("keydown", function(e){
    console.log(e.key)

    if (e.key === 'Escape' && !model.classList.contains('hidden')) {
        model.classList.add('hidden');
        overlay.classList.add("hidden");
      }
})
