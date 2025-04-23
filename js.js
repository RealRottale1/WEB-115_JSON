const stuff = document.body.getElementsByTagName("input");
console.log(stuff)
const endButton = document.body.getElementsByTagName("button")[0];

endButton.addEventListener("click", function() {
    const obj = {
        "first name": stuff[0].value,
        "last name": stuff[1].value,
        "course": stuff[2].value,
        "section number": stuff[3].value,
        "role": stuff[4].value,
    }

    console.log("Person Object:")
    console.log(obj)
    console.log("JSON Object:")
    console.log(JSON.stringify(obj))
})