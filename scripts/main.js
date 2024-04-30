// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";
const myImage = document.querySelector("img");

myImage.onclick = () => {
	const mySrc = myImage.getAttribute("src");
	if (mySrc === "images/cat.png") {
		myImage.setAttribute("src", "images/cat2.png");
	} else {
		myImage.setAttribute("src", "images/cat.png");
	}
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
	const myName = prompt("Please enter your name.");
	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem("name", myName);
		myHeading.textContent = `The Cat is cool, ${myName} you agree?`;
	}
}

if (!localStorage.getItem("name")) {
	setUserName();
} else {
	const storedName = localStorage.getItem("name");
	myHeading.textContent = `The Cat is cool, ${storedName} you agree?`;
}

myButton.onclick = () => {
	setUserName();
};
