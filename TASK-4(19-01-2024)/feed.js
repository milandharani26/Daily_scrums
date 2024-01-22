var users = JSON.parse(localStorage.getItem('registeredUsers')) || [];

function data() {

    var use = ""
    users.forEach(user => {
        console.log(user);
        document.getElementById('userfeed').innerHTML += `<div class="card" style="width: 18rem;">
                                                                <div class="card-body">
                                                                <h5 class="card-title">Username : ${user.username}</h5>
                                                                <br/>
                                                                <h6 class="card-subtitle mb-2 text-body-secondary">email : ${user.email}</h6>
                                                                <h6 class="card-subtitle mb-2 text-body-secondary">mobile : ${user.phoneNumber}</h6>
                                                                <h6 class="card-subtitle mb-2 text-body-secondary">gender :${user.gender}</h6>
                                                                <h6 class="card-subtitle mb-2 text-body-secondary">email : ${user.email}</h6>
                                                                </div>
                                                            </div>`;
        
    });

}

window.onload = data();