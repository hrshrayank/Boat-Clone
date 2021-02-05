
function displaypersons(){
   
    fetch("http://localhost:3000/presons")
    .then(res=>res.json())
    .then(res=>renderpersonsdiv(res))
}
function renderpersonsdiv(res){
    let pdiv = document.getElementById("personCarousel")
    let items = document.createElement("div")
    items.classList.add("carousel-inner")
    pdiv.append(items)
    let inx = 0
    for(let i of res){
        
        let div = document.createElement("div")
        if(inx == 0){
            div.className = "active ";
        }
        div.className += "item";
        let test = document.createElement("p")
        test.textContent = i.text ;
        test.className = "persontext"
        let span1 = document.createElement("span")
        let img = document.createElement("img")
        img.src= i.img;
        span1.append(img)
        let span2 = document.createElement("span")
        let name = document.createElement("p");
        name.textContent = i.name ;
        let desi = document.createElement("p");
        desi.textContent = i.designation 
        let com = document.createElement("p");
        com.textContent = i.company 
        span2.append(name,desi,com)
        div.append(test,span1,span2);

        items.append(div)
        inx++;
    }
    
    let a1 = document.createElement("a");
    a1.classList.add("left","carousel-control");
    a1.href="#personCarousel";
    a1.setAttribute("data-slide", "prev");
    let span = document.createElement("span");
    span.classList.add("glyphicon","glyphicon-chevron-left");
    a1.append(span)
    let a2 = document.createElement("a");
    a2.classList.add("right","carousel-control");a1.href="#personCarousel";
    a2.setAttribute("data-slide", "next");
    let span2 = document.createElement("span");
    span2.classList.add("glyphicon","glyphicon-chevron-right");
    a2.append(span2)  
    pdiv.append(a1,a2)  
}
displaypersons();

