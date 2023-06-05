
// Question no 1

//Compare two JSON with same properties


let obj1 = {name: "Person 1", age: 5};
let obj2 = {age: 5, name: "Person 1"};


if(obj1.name == obj2.name || obj1.age == obj2.age){
    console.log("Both has same properties!")
}
else{
    console.log("Both has different properties")
}


// Question no 2

// Console all country flags



let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function(){
   
    if(xhr.status == 200){
       let users = JSON.parse(xhr.response);


users.forEach((obj, index) => {
    console.log(obj.flags)
});
    }
    else{
        console.log(xhr.status)
    }
 }


// Question no 3

//Display in Console countries names, regions, sub-region and populations




let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function(){
   
    if(xhr.status == 200){
       let users = JSON.parse(xhr.response);


users.forEach((obj, index) => {
    console.log(obj.name.common, obj.region, obj.subregion, obj.population)
});
    }
    else{
        console.log(xhr.status)
    }
 }





