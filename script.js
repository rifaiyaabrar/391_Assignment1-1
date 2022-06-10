const location2 = (window.location.href);
const date = (document.lastModified);
const hello = document.querySelector(".script");
const hello2 = () => {
    hello.textContent = `Last Modified date: ${date}      Location: ${location2}`
} 
