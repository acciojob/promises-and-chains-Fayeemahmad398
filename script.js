//your JS code here. If required.

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
