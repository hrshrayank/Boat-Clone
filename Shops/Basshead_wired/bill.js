let return_to_cart = document.getElementById("return_cart")

window.addEventListener("load", function() {
    let display = document.getElementById("display")
    let store_details = localStorage.getItem("cart_items")

    if(store_details == null) {
        store_details_obj = []
    } else {
        store_details_obj = JSON.parse(store_details)
    }

    let sum = 0
    let output = ""

    store_details_obj.forEach(function(item, index) {
        output += `<div class="cart_product_display">
                        <div class="bill_img"><img src = "${item.img_url}"></div>
                        <div class="name_color">
                            <div><p>${item.name}</p></div>
                            <div class = "color_price">
                                <div class="prod_color" style="background-color:${item.color}"></div>
                                <div>
                                    <p class="prod_price" id="prod_price">Rs. <span id="item_price${index}">${item.price}</span></p>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <p class="quantity" id="quantity">Qty - <span id="item_price${index}">${item.quantity}</span></p>
                        </div>
                        <div class="total_cost" id="cost${index}">Rs. <span id="final_cost${index}" class="fin_cost">${item.total}</span></div>
                    </div>
                    `
    })

    for(let i=0 ; i<store_details_obj.length ; i++) {
        sum += store_details_obj[i].total
    }

    sum = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")  //to add comma for number
    sum = sum + ".00"

    output += ` <div class="line_total"></div>
                <div class="total_bill">
                    <div>Total</div>
                    <div>Rs. ${sum}</div>
                </div>`

    display.innerHTML = output
    
})


let email = document.getElementById("email")
let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let addr = document.getElementById("addr")
let state = document.getElementById("state")
let city = document.getElementById("city")
let phone = document.getElementById("phone")
let user_det = document.getElementById("user_det")

user_det.addEventListener("keyup", function() {
    // console.log(city.value)
    let flag = 0
    let pay = document.getElementById("pay")
    var modal = document.getElementById("myModal");

    if(email.value == "" || fname.value == "" || lname.value == "" || addr.value == "" || city.value == "" || phone.value == "") {
        pay.disabled = true 
        pay.style.backgroundColor = "#b6b6b6"
        flag = 0
    } else {
        flag = 1
    }

    if(flag == 1) {
        pay.removeAttribute("disabled")
        pay.style.backgroundColor = "red"
        pay.addEventListener("click", () => {
            popup()
        })

        function popup() {
            localStorage.removeItem("cart_items")
            modal.style.display = "block";
            setTimeout(() => {
                location = "./basshead.html"
            }, 4000)
        }
    }
})



return_to_cart.addEventListener("click", () => {
    location = "./my_cart.html"
})

