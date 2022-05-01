// code the runs immediately when page is first loaded

// define a Constructor function
    // this.someName = parseInt(parameterName);


let CustomerArray = []; // define an array to hold Customer objects


var Fooditem = function(pfoodname, pCalories) {
    this.foodname = pfoodname;
    this.Calories = pCalories;
}

// define what should happen when the form is submitted
function formSubmitEvent() {
    console.log(CustomerArray);
    let tfoodname = document.getElementById("foodname").value;
    let tCalories = document.getElementById("Calories").value;
    CustomerArray.push( new Fooditem(tfoodname, tCalories))
    // clear text boxes
    document.getElementById("foodname").value = "";
    document.getElementById("Calories").value = "";
    let message = "foodname  Calories\n";  // add heading
    // search thru array to find which object has the correct name property
    
    let totalCalories = 0;
    for (i = 0; i < CustomerArray.length; i++) {
        console.log(CustomerArray[i].Calories);
        totalCalories += parseInt(CustomerArray[i].Calories);
    }
    document.getElementById("TotalofCalories").value = totalCalories;  // write out the data
  
    // at this point you have just added another item to the array
    // loop thru the array and add up the calorie count for each object in the array
    // and then write that out to the (very badly named)
    // <input name="whichPerson" id="whichPerson" /><br>
        }
