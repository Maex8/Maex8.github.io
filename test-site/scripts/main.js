const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/bodybuilder-silhouette.jpg"){
        myImage.setAttribute("src", "images/arnold-terminator.jpg" )
    } else {
        myImage.setAttribute("src", "images/bodybuilder-silhouette.jpg" )
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if(!myName){
        setUserName();
    } else {
        localStorage.setItem("name" , myName);
        myHeading.textContent = `${myName} bude bodybuilder.`;
    }

};

if (!localStorage.getItem("name")){
    setUserName();
} else  {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `${storedName} bude bodybuilder.`;
}
myButton.onclick = () => {
    setUserName();
};