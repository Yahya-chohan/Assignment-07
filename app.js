// let result = document.getElementById("disply");

let fruit = ["Apple","Mango","Banana","orange"];
function add() {
    let position = +document.getElementById("position").value; 
    let newvalue = document.getElementById("newvalue").value ;
if (position < 0 ||position > fruit.length) {
    alert("use correct index number ")
} else {
    fruit.splice( position, 0 , newvalue ) ;
    // result.textContent =fruit.join("");
    document.getElementById("disply").textContent = fruit.join(",");

console.log(fruit.join(fruit));

    
}

}



function dele() {
    let position = +document.getElementById("position").value; 
    let newvalue = document.getElementById("newvalue").value ;
if (position < 0 ||position > fruit.length)  {
    alert("use correct index number ")
} else {
    fruit.splice( position, 1,) ;
    // result.textContent =fruit.join("");
    document.getElementById("disply").textContent = fruit.join(",");

console.log(fruit.join(fruit)); 
}
    

}



        function update(){
            let position = +document.getElementById("position").value; 
            let newvalue = document.getElementById("newvalue").value ;
        if(position < 0 ||position > fruit.length)  {
            alert("use correct index number ")
  
        } else {
            fruit.splice( position, 1,newvalue) ;
            // result.textContent =fruit.join("");
            document.getElementById("disply").textContent = fruit.join(",");
        
        console.log(fruit.join(fruit)); 
        }
        }