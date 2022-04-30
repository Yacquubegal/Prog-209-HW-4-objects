// code the runs immediately when page is first loaded

// define a Constructor function
var Fooditem = function(pfoodname, pCalories) {
    this.foodname = pfoodname;
    this.Calories = pCalories;
    // this.someName = parseInt(parameterName);
};

CustomerArray = []; // define an array to hold Customer objects
value = [];
 

// pr-load array with 2 objects
let newFooditem0 = new Fooditem("Banana", 20)
CustomerArray.push(newFooditem0);

let newFooditem1 = new Fooditem("Hot dog", 458);
CustomerArray.push(newFooditem1);

let newFooditem2 = new Fooditem("cake", 200);
CustomerArray.push(newFooditem2);


document.addEventListener("DOMContentLoaded", function (event) {

// define what should happend when the "show one" button is clicked
    // document.getElementById("show").addEventListener("click", function () {
    //     console.log(CustomerArray);
    //     let message = "foodname  Calories\n";  // add heading
    //     // search thru array to find which object has the correct name property
    //     for (i = 0; i < CustomerArray.length; i++) {
    //         if( document.getElementById("whichPerson").value == CustomerArray[i].foodname){
    //         message = message + CustomerArray[i].foodname + "  " + CustomerArray[i].Calories;
    //         console.log(message);
    //         }
    //     }
    //     document.getElementById("output").value = message;  // write out the data
    // });
    
});

// define what should happen when the form is submitted
function formSubmitEvent() {
    console.log(CustomerArray);
    let message = "foodname  Calories\n"; 
    for (i = 0; i < CustomerArray.length; i++) {
        if( document.getElementById("whichPerson").value == CustomerArray[i].foodname){
        message = message + CustomerArray[i].foodname + "  " + CustomerArray[i].Calories;
        }
    }
    let tfoodname = document.getElementById("foodname").value;
    let tCalories = document.getElementById("Calories").value;
    CustomerArray.push( new Fooditem(tfoodname, tCalories))
    // clear text boxes
    document.getElementById("foodname").value = "";
    document.getElementById("Calories").value = "";
    }


