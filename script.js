// // //your JS code here. If required.



// //your JS code here. If required.
// var nameElement = document.querySelector("#name");
// var ageElement = document.querySelector("#age");
// var btnElement = document.querySelector("#btn");

// var promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     var age = ageElement.value;
//     var name = nameElement.value;

//     if (!(age && name)) {
//       alert("Please enter valid details");
//       return;
//     }
//     if (age < 18) {
//       reject(`Oh sorry ${name}. You aren't old enough`);
//     } else {
//       resolve(`Welcome, ${name}. You can vote.`);
//     }
//   }, 4000);
// });

// function callPromise() {
//   return promise;
// }
// function handleSubmit(e) {
//   e.preventDefault();
//   callPromise().then(alert).catch(alert);
// }

// btnElement.addEventListener("click", handleSubmit);














var ageElement=document.querySelector("#age");
var nameElement=document.querySelector("#name");
var btnElement=document.querySelector("btn");

var promise=new Promise(function (resolve,reject) {
setTimeOut(function () {
	if(!(age & name)){
		return reject("Error");
	}
	if(age>18){
		return resolve(`Welcome, ${name} You can vote.`)
	}else{
		return reject(`Oh sorry ${age} You aren't old enough.`)
	}
},4000)
	
})
function callPromise() {
	return promise;
}
function HandleEventPromise() {
	callPromise.then(alert("DONE")).catch(alert("Error"));
	
}

btnElement.addEventListener("click",HandleEventPromise());
