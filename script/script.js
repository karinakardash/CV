const tickLayout = document.getElementById("tick_layout");
const tickJS = document.getElementById("tick_js");
const tickTS = document.getElementById("tick_ts");
const projectLayout = document.getElementById("project_layout");
const projectJS = document.getElementById("project_js");
const projectTS = document.getElementById("project_ts");

function openProjectLayout(){
    projectLayout.classList.toggle("open");
    tickLayout.classList.toggle("open");
}

function openProjectJS(){
    projectJS.classList.toggle("open");
    tickJS.classList.toggle("open");
}
function openProjectTS(){
    projectTS.classList.toggle("open");
    tickTS.classList.toggle("open");
}

tickLayout.addEventListener("click", openProjectLayout)
tickJS.addEventListener("click", openProjectJS)
tickTS.addEventListener("click", openProjectTS)