// Start Remove Shorts //
let remove = document.querySelector(".remove")
let line = document.getElementById("divLine")
remove.addEventListener("click", function(){
    remove.parentElement.parentElement.remove();

    let undoDiv = document.createElement("div")

    let removeMass = document.createElement("p")
    removeMass.append("Shelf will be hidden for 30 days")
    removeMass.style.fontSize = "12px"
    removeMass.style.color = "#60607A"
    line.after(removeMass)

    let undoBtn = document.createElement("p")
    undoBtn.append("Undo")
    undoBtn.style.fontSize = "12px"
    undoBtn.style.fontWeight = "bold"
    undoBtn.style.color = "#4564D4"
    undoBtn.style.cursor = "pointer"
    undoBtn.style.marginLeft = "20px"

    undoDiv.appendChild(removeMass)
    undoDiv.appendChild(undoBtn)

    undoDiv.style.display = "flex"
    
    line.after(undoDiv)

    undoBtn.addEventListener("click", function(){
        line.after(remove.parentElement.parentElement)
        undoDiv.style.display = "none"
    })
})
// End Remove Shorts //

// Start NavBar Toggle //
let navBar = document.querySelector(".navBar")
let inactive = document.querySelector(".inactiveNav")
let active = document.querySelector(".activeNav")
let header = document.getElementById("header")
let slider = document.getElementById("slider")
let pageContent = document.getElementById("page-content")

active.addEventListener("click", function(){
    navBar.classList.add("opend")
    header.style.opacity = "0.4"
    slider.style.opacity = "0.4"
    pageContent.style.opacity = "0.4"
    document.body.style.overflow = "hidden";
})

inactive.addEventListener("click", function(){
    navBar.classList.remove("opend")
    header.style.opacity = "1"
    slider.style.opacity = "1"
    pageContent.style.opacity = "1"
    document.body.style.overflow = "auto";
})
// End NavBar Toggle //

// Start PopUp Toggle //
let avatarIcon = document.getElementById("avatarIcon")
let popup = document.getElementById("popup")

avatarIcon.addEventListener("click", function(){
    popup.classList.toggle("opend")
    // document.body.style.overflow = "hidden";
})
// End PopUp Toggle //
