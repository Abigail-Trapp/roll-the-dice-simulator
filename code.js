
let resultArr = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 


function rollDie() {
    return Math.floor(Math.random() * 6) + 1 
}
function addTwoDie() {
    return rollDie() + rollDie()  
}


let graph = document.getElementById("graph") 

function renderGraph() {  
    graph.innerHTML = "" 
     for (let i = 2; i < resultArr.length; i++) { 
         let div = document.createElement("div") 
         let p = document.createElement("p") 
        p.append(`You rolled a ${i} ${resultArr[i]} times `) 
        div.append(p) 
        graph.append(div) 
    
     }
}
let result = document.getElementById("result") 
let roll = document.getElementById("roll") 

roll.addEventListener("click", rollClick) 

function rollClick() { 
    result.innerHTML = "" 
    let rollDieResult = addTwoDie() 
    resultArr[rollDieResult] += 1 
    result.append(`You rolled a ${rollDieResult}!`) 
    renderGraph(); 
}
let roll1000 = document.getElementById("roll1000") 
roll1000.addEventListener("click", rollClick1000) 

function rollClick1000 (){ 
    result.innerHTML = "" 
    for (let i = 0; i < 1000; i++) { 
    let rollDieResult = addTwoDie() 
        resultArr[rollDieResult] += 1 
    }
    result.append(`You rolled 1000 times!`) 
    renderGraph(); 
}