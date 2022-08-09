const previous = document.querySelector(".previous")
const present = document.querySelector(".present")
const buttons = document.querySelectorAll("button")
// Adding doms

let oporator
// Variable to store the operator


function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function divide(a,b){
    return a/b
}
// functions for the operators
   
function operator(first, last, operating){

    if (operating =="+"){
       answer = add(first,last)
       previous.innerText=answer
       present.innerText=null
    }
    else if (operating == "-"){
        answer = subtract(last,first)
        previous.innerText=answer
        present.innerText=null
    }
    else if (operating == "/"){
        answer = divide(last, first)
        previous.innerText=answer
        present.innerText=null

    }
    else if (operating == "*"){
        answer = multiply(first,last)
        previous.innerText=answer
        present.innerText=null

    }


}
// function that takes in the 2 digits and operator and changes the output






buttons.forEach(button =>{

button.addEventListener("click", function(e){
    console.log(e.target.innerText)

    if (e.target.innerText=="-" || e.target.innerText=="+" || e.target.innerText=="/" || e.target.innerText=="*" ){
        present.innerText = previous.innerText
        previous.innerText= null
        oporator = e.target.innerText
        
    }
    else if(e.target.innerText=="="){
        

        operator(parseInt(previous.innerText),parseInt(present.innerText),oporator)
    }

    else if(e.target.innerText == "AC"){
       
        previous.innerText=null
        present.innerText=null

    }
    else if(e.target.innerText == "DEL"){

        let string = previous.innerText.slice(0,-1)
        previous.innerText=string

    }
    else{
        if (e.target.innerText == "." && previous.innerText.includes(".")){
            return
        }
        previous.innerText= previous.innerText+ e.target.innerText
    }

})
});

// this is the implemntations of the doms, this how the buttons change stuff. It uses dom mannupliation


