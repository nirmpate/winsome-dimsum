

//Get menu containers from home page.  Function adds class .active to menu containers if
//user clicks on their button.  
var dim = document.getElementById("dimSum");
var spec = document.getElementById("specialty");
var bev = document.getElementById("beverages");


function viewDim() {
    if (dim.className === "menuContainer") {
        dim.className += " active";
        spec.className = "menuContainer";
        bev.className = "menuContainer";
    } 
    else if (dim.className === "menuContainer active") {
    	dim.className = "menuContainer active"
    }
    
    else {
        dim.className = "menuContainer";
    }
}

function viewSpecialty() {
    if (spec.className === "menuContainer") {
        spec.className += " active";
        dim.className = "menuContainer";
        bev.className = "menuContainer";
    } else {
        spec.className = "menuContainer active";
    }
}

function viewBeverages() {
    if (bev.className === "menuContainer") {
        bev.className += " active";
        dim.className = "menuContainer";
        spec.className = "menuContainer";
    } else {
        bev.className = "menuContainer active";
    }
}