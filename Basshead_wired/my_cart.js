window.addEventListener("load", loadData)
var total = 0
let arr = [{}]

function loadData() {

    let display = document.getElementById("display")

    let store_details = localStorage.getItem("cart_items")
    if(store_details == null) {
        store_details_obj = []
    } else {
        store_details_obj = JSON.parse(store_details)
    }
    
    let output = ""
    let sum = 0
    store_details_obj.forEach(function(item, index) {

        // Cart product details
        // var cart_product_display = document.createElement("div")
        // cart_product_display.className = "cart_product_display"

        output += `<div class="cart_product_display">
                        <div class="remove_item" onclick="removeItem(${index})">&#10006</div>
                        <div><img src = "${item.img_url}"></div>
                        <div class="name_color">
                            <p>${item.name}</p>
                            <div class="prod_color" style="background-color:${item.color}"></div>
                        </div>
                        <div>
                            <p class="prod_price" id="prod_price">Rs. <span id="item_price${index}">${item.price}</span></p>
                        </div>
                        <div class="change_quantity">
                            <div class="decrease" onclick="decreaseValue(${index})" id="decrease">-</div>
                            <input class="number" id="${index}" value=${item.quantity}>
                            <div class="increase" onclick="increaseValue(${index})" id="increase">+</div>
                        </div>
                        <div class="total_cost" id="cost${index}">Rs. <span id="final_cost${index}" class="fin_cost">${item.total}</span></div>
                    </div>
                    <div class="prod_line" style="margin-top:-15px"></div>`
    })

    display.innerHTML = output
}

function removeItem(index) {
    let val = localStorage.getItem("cart_items")
    let store_details_obj = JSON.parse(val)
    store_details_obj.splice(index, 1)
    localStorage.setItem("cart_items", JSON.stringify(store_details_obj))
    loadData()

}



function increaseValue(index) {
    let final = document.getElementById(`final_cost${index}`)
    let item_price = document.getElementById(`item_price${index}`)
    let item = item_price.textContent
    final.innerHTML = ""

    var value = parseInt(document.getElementById(index).value, 10)
    value = isNaN(value) ? 0 : value
    value++
    document.getElementById(index).value = value
    final.innerHTML = Number(value) * Number(item)
    

    arr.push(Number(final.innerHTML))
    display_bill(arr)
  }
  
  function decreaseValue(index) {
  
    let item_price = document.getElementById(`item_price${index}`)
    let item = item_price.textContent
    let final = document.getElementById(`final_cost${index}`)
    final.innerHTML = ""
    var value = parseInt(document.getElementById(index).value, 10)
    value = isNaN(value) ? 0 : value
    value < 1 ? value = 1 : ''
    if(value > 1) {
        value--
    }
    
    document.getElementById(index).value = value
    final.innerHTML = Number(value) * Number(item)
    
    arr.push(Number(final.innerHTML))
    display_bill(arr)
  }
  

function display_bill(arr) {
    // for(let i=0 ; i<arr.length ; i++) {
        console.log(arr)
        let total = 0
        let total_bill = document.createElement("div")
        let display = document.getElementById("display")
        for(let i=0 ; i<arr.length ; i++) {
            total = total + arr[i]
        }
        console.log(total)
    // }
}

