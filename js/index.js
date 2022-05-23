function mainProjects(){
    document.getElementById("mainproject").style.display = "block";
    document.getElementById("miniproject").style.display = "none";
    document.getElementById("latestproject").style.display = "none";
    console.log("vishwanth");
    
}
function miniProjects(){
    document.getElementById("mainproject").style.display = "none";
    document.getElementById("miniproject").style.display = "block";
    document.getElementById("latestproject").style.display = "none";
}
function latestProjects() {

    document.getElementById("mainproject").style.display = "none";
    document.getElementById("miniproject").style.display = "none";
    document.getElementById("latestproject").style.display = "block";
}