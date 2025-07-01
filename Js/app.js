//* More API Info = https://www.geeksforgeeks.org/what-is-an-api/
//* JSON= Javascriot Object notation
//* Link = https://www.w3schools.com/whatis/whatis_json.asp


//! Fetching
//* using this method will handle all the Asynchronous parts of async/await/promises

//? Fetching the information from this link below.
let url = `https://swapi.info/api/people/1`
let currentChar;
let button = document.querySelector("#showChar")
button.addEventListener("click", fetchData);

//fetch(url)
//    .then(res => res.json())
//    .then(data => {
//        console.log(data);
//        currentChar = data;
//        console.log(currentChar);
//    })
//    .catch(error => {
//        console.log(error);
//    })

    function fetchData() {

        fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        currentChar = data;
        console.log(currentChar);
    })
    .catch(error => {
        console.log(error);
    })
    }