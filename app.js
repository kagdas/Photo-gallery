const panels = document.querySelectorAll(".panel")


panels.forEach((panel) =>{
    panel.addEventListener("click", ()=>{
        removeActiveClasses()
        panel.classList.add("active")
        //tıklandığında active class'ını çağırır.
    })
})

function removeActiveClasses(){
    panels.forEach((panel) =>{
        panel.classList.remove("active")
    })
}