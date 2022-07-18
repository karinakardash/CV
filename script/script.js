const tickLayout = document.getElementById("tick_layout");
const tickJS = document.getElementById("tick_js");
const tickTS = document.getElementById("tick_ts");
const tickReact = document.getElementById("tick_react");
const projectLayout = document.getElementById("project_layout");
const projectJS = document.getElementById("project_js");
const projectTS = document.getElementById("project_ts");
const projectReact = document.getElementById("project_react");
const projectSubtitleLayout = document.querySelector(".projects__subtitle__layout");
const projectSubtitleJS = document.querySelector(".projects__subtitle__js");
const projectSubtitleTS = document.querySelector(".projects__subtitle__ts");
const projectSubtitleReact = document.querySelector(".projects__subtitle__react")

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
function openProjectReact(){
    projectReact.classList.toggle("open");
    tickReact.classList.toggle("open");
}

tickLayout.addEventListener("click", openProjectLayout)
tickJS.addEventListener("click", openProjectJS)
tickTS.addEventListener("click", openProjectTS)
tickReact.addEventListener("click", openProjectReact)
projectSubtitleLayout.addEventListener("click", openProjectLayout)
projectSubtitleJS.addEventListener("click", openProjectJS)
projectSubtitleTS.addEventListener("click", openProjectTS)
projectSubtitleReact.addEventListener("click", openProjectReact)