window.addEventListener("load",productdiv);
let product = []
function productdiv () {
    let boxdiv1 = document.getElementById("leftbox1");
    let qurey = location.search;
    if(qurey == null || qurey == "") qurey = "?id=1";
    fetch(`http://localhost:3000/products` + qurey)
    .then(res => res.json())
    .then(res => setTimeout(() => {
        renderdom(res);
    }, 1000))
}

function renderdom(data) {
    document.getElementById("1").style.display = "none"
    document.getElementById("2").style.display = "block"
    product = data;
    let boxdiv1 = document.getElementById("leftbox1");
    let div1 = document.createElement("img");
    div1.src = data[0].img_1;
    boxdiv1.append(div1);  
 
    let boxdiv2 = document.getElementById("productdetails")
    let div2 = document.createElement("p");
    div2.textContent = data[0].name;
    let star = displayStars(data[0].rating);
    let reviwe = document.createElement("span");
    reviwe.textContent = data[0].review;
    let br = document.createElement("br")
    let price1 = document.createElement("span");
    price1.textContent = data[0].discount_price;
    price1.className = "price11"
    let price2 = document.createElement("span");
    price2.textContent = data[0].actual_price;
    price2.className = "price22"
    let features = document.createElement("div");
    for(let j in data[0].features){
        let span = document.createElement("span");
        span.textContent = data[0].features[j];
        let br = document.createElement("br");
        features.append(span,br)
    }
    boxdiv2.append(div2,star,reviwe,br,price1,price2,features);
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



function changeqty (value) {
    let inputvalue = Number(document.getElementById("qty").value);
    if (value < 0) {
        if (inputvalue > 1) {
            inputvalue += value; 
        }
    }
    else {
        inputvalue += value;
    }
    document.getElementById("qty").value = inputvalue;
}

document.getElementById("addcart").addEventListener("click",addtocart);


function addtocart () {
    let cartproduct =[];
   if(localStorage.getItem("cartproducts") == null || localStorage.getItem("cartproducts") == "")
   {
       cartproduct =[];
   }
   else{

       cartproduct = JSON.parse(localStorage.getItem("cartproducts"));
   }

    let ind = cartproduct.findIndex(x => x.id == product[0].id);
    if (ind >= 0) {
        cartproduct[ind].quantity += Number(document.getElementById("qty").value);
    }
    else{ 
    let pro = {}
    pro.id = product[0].id;
    pro.name = product[0].name;
    pro.price = product[0].discount_price;
    pro.img = product[0].img_1;
    pro.quantity = Number(document.getElementById("qty").value);
    cartproduct.push(pro);
  
    }
    localStorage.setItem("cartproducts",JSON.stringify( cartproduct));
    window.location.assign("yourcart.html");
}

