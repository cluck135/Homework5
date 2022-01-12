let Time = moment().format("dddd, MMMM Do");
$("#currentDay").text(Time);

let hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
let militaryHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
let timeBlocks = document.querySelector("ul");
let currentHour = moment().format("H");

for(let i = 0; i<hours.length; i++){
    let li = document.createElement("li");
    let div = document.createElement("div");
    let p = document.createElement("p");
    let textarea = document.createElement("textarea");
    let button = document.createElement("button");
    let icon = document.createElement("i");


    li.setAttribute("class", "time-block row");
    div.setAttribute("class", "hour col-1");
    div.innerHTML = hours[i];
    div.style.paddingTop = "30px";
    p.setAttribute("id", "timeFrame");
    p.innerHTML = militaryHours[i];
    p.style.display = "none";
    textarea.setAttribute("class", "col-10");
    textarea.setAttribute("id", "task");
    textarea.setAttribute("placeholder", "enter task");
    button.setAttribute("class", "saveBtn col-1");
    icon.setAttribute("class", "fas fa-save");

    if(parseInt(p.innerHTML) == parseInt(currentHour)){
        textarea.classList.add("present");
    }else if(parseInt(p.innerHTML) < parseInt(currentHour)){
        textarea.classList.add("past");
    }else{
        textarea.classList.add("future");
    }

    div.appendChild(p);
    li.appendChild(div);
    li.appendChild(textarea);
    button.appendChild(icon);
    li.appendChild(button);
    timeBlocks.appendChild(li);
}

let tasks = document.querySelectorAll("textarea");
let l = 0;
for(let k = 9; k<18; k++){
    tasks[l].innerHTML = JSON.parse(localStorage.getItem(k.toString() + "hour"));
    l++;
}


let btn = document.querySelectorAll("button");
btn.forEach(function(item){
    item.addEventListener("click", function(e){
        let target = e.currentTarget;
        let input = target.parentNode.children[1].value;
        for(let j = 9; j<18; j++){
            if(parseInt(target.parentNode.children[0].children[0].innerHTML) == j ){
                localStorage.setItem(j.toString() + "hour", JSON.stringify(input));
            }
       }

})});





