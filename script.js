const burger = document.getElementById ("burger")
const links = document.getElementsByClassName("link")

burger.addEventListener("click", function(){
    burger.classList.toggle("rotate")
    for(let link of links){
        link.classList.toggle("block")
    }
})

window.addEventListener("resize", function(){
    if(window.innerWidth > 768){
        burger.classList.remove("rotate")
        for(let link of links){
         link.classList.remove("block")
    }
}
    console.log(this.window.innerWidth)
})