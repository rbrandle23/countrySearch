function searchFunction() {
    var input, filter, ul, li, a , i ,txtVal;
    input = document.getElementById("textInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("listUl")
    li = ul.getElementsByTagName("li");

    for(i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtVal = a.textContent || a.innerText;
        if(txtVal.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
let arr  = [];
async function countryList() {
    await fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => data.map((item) => arr.push(item.name.common)))
    .catch((e) => console.log(e));

    for(let i = 0; i < arr.length; i++) {
        const ul = document.getElementById("listUl");
        const li = document.createElement("li")
        const a = document.createElement("a");

        a.innerText = arr[i];
        li.appendChild(a)
        ul.appendChild(li)

    }
}
countryList()