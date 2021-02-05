window.addEventListener("load",renderproduct)

function renderproduct () {
    fetch (`http://localhost:3000/products`)
    .then (res => res.json())
    .then (res => renderdom(res));
}

function renderdom (data) {
  
    let productdisplay = document.getElementById("productlist")
    for (let i in data) {
        let maindiv = document.createElement("div")
        maindiv.className  = "boxes"
        maindiv.addEventListener("click", productdetalis);
        maindiv.id = data[i].id;
        let imgdiv = document.createElement("div")
        let img1 = document.createElement("img");
        img1.src = data[i].img_1;
        imgdiv.className = "img"
        imgdiv.append(img1);

        let proinfo = document.createElement("div");
        proinfo.className="productinfo"
        let pname = document.createElement("p");
        pname.textContent = data[i].name;
        // let star = document.createElement("span");
        // star.textContent = data[i].rating;
        let star = displayStars(data[i].rating);
        let reviwe = document.createElement("span");
        reviwe.textContent = data[i].review;
        let br = document.createElement("br")
        let price1 = document.createElement("span");
        price1.textContent = data[i].discount_price;
        let price2 = document.createElement("span");
        price2.textContent = data[i].actual_price;
        price2.className = "price2"
        proinfo.append(pname,star,reviwe,br,price1,price2);

        maindiv.append(imgdiv,proinfo)
        productdisplay.append(maindiv);
    }
}

function displayStars(n){
    let mainspan = document.createElement("span");
    for(let i= 0;i<5;i++){
        let span = document.createElement("span");
        span.classList.add("fa","fa-star");
        span.setAttribute("aria-hidden","true")
        mainspan.append(span)
    }
    return mainspan;
}

function showpopup(event){
    let left = event.target.offsetLeft ;
    let top = event.target.offsetTop +10;

    let popdiv = document.getElementById("featuredpopdiv");
    let didplay = popdiv.style.display;
    if(didplay == "" || didplay == "none")
    popdiv.setAttribute("style",`position:absolute;top:${top}px;left:${left}px;display:block`)
    else{
    popdiv.style.display = "none"
    }
}

function productdetalis(e) {
    let currtar = e.currentTarget.id;
    let query = new URLSearchParams();
    query.append("id",currtar);
    let url = "productdetalis.html" + "?" + query;
    window.location.assign(url)
}
function sortproducts(){
   let sortby = document.getElementById("prod_sort").value;
   alert(sortby)
}