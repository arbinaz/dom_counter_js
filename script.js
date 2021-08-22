let root=document.getElementById("root");
console.log(root);

let countEl=document.createElement("p");
countEl.innerText=0;

let incrementBtn=document.createElement("button")
incrementBtn.setAttribute("onclick","increment()");
incrementBtn.innerText="Increment";


let decrementBtn=document.createElement("button")
decrementBtn.setAttribute("onclick","decrement()");
decrementBtn.innerText="Decrement";

let reset=document.createElement("button")
reset.setAttribute("onclick","resetTo0()");
reset.innerText="Reset";

root.appendChild(countEl);
root.appendChild(incrementBtn);
root.appendChild(decrementBtn);
root.appendChild(reset);

function increment(){
    let currentCount=countEl.innerText;
    let updatedCount=parseInt(currentCount)+1;
    countEl.innerHTML=updatedCount;
}
function decrement(){
    let currentCount=countEl.innerText;
    let updatedCount=parseInt(currentCount)-1;
    countEl.innerHTML=updatedCount;
}
function resetTo0(){
    countEl.innerHTML=0;
}

