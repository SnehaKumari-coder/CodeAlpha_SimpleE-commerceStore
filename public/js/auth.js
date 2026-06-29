// REGISTER

const registerForm =
document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener(
"submit",
async (e)=>{

e.preventDefault();

const user = {

name:
document.getElementById("name").value,

email:
document.getElementById("email").value,

password:
document.getElementById("password").value

};

const res = await fetch(
"http://localhost:5000/api/users/register",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(user)
});

const data = await res.json();

alert(data.message);

if(data.success){

window.location.href =
"login.html";

}

});
}


// LOGIN

const loginForm =
document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener(
"submit",
async (e)=>{

e.preventDefault();

const user = {

email:
document.getElementById("email").value,

password:
document.getElementById("password").value

};

const res = await fetch(
"http://localhost:5000/api/users/login",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(user)
});

const data = await res.json();

alert(data.message);

if(data.success){

localStorage.setItem(
"user",
JSON.stringify(data.user)
);

window.location.href =
"dashboard.html";

}

});

}