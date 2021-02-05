
window.addEventListener("load",productcart)

function productcart(){
   debugger
        grandtotal = 0
        if( localStorage.getItem("cartproducts") == "[]" || localStorage.getItem("cartproducts") == null || localStorage.getItem("cartproducts") == ""){

            return;
        }
            let product = JSON.parse( localStorage.getItem("cartproducts"));
            let table = document.getElementById("details").getElementsByTagName('tbody')[0]
            //removing prev rows
            let x = table.rows.length;
            for(let i=1;i < x ;i++) {
               
                table.deleteRow(1);
              }

            for (let i of product) {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let img = document.createElement("img");
            img.src = i.img;
            img.className = "imgclass"
            let name = document.createElement("p");
            name.textContent = i.name;
            let deleteproduct = document.createElement("span");
            deleteproduct.textContent = "X";deleteproduct.id = i.id;
            deleteproduct.className = "delete"
            deleteproduct.addEventListener("click",deletepro)
            td1.append(deleteproduct,img,name);
            let td2 = document.createElement("td");
            let price1 = document.createElement("span")
            price1.textContent = i.price;
            td2.append(price1);
            let td3 = document.createElement("td");
            let qty = document.createElement("span")
            qty.textContent = i.quantity;
            let td4 = document.createElement("td")
            let total = document.createElement("span");
            total.textContent = gettotal( i.price , i.quantity);
            td4.append(total)
            td3.append(qty);
            tr.append(td1,td2,td3,td4);
            table.append(tr);
        }
    
    }
    function deletepro(event){
      
        let product = JSON.parse( localStorage.getItem("cartproducts"));
        let pro_id = event.currentTarget.id;
        let ind = product.findIndex(x => x.id == pro_id);
        product.splice(ind,1);
        localStorage.setItem("cartproducts",JSON.stringify( product));
        if (product.length == 0) {
            let wholetotal = document.getElementById("g_total");
            wholetotal.textContent = 0;
            window.location.assign("delete.html")
        
        }
        productcart();
    }
    // document.getElementById("continueshoping").addEventListener("click",function(){
    //     window.location.assign("rock.html")
    // })
    let grandtotal = 0;
    function gettotal (value1,value2) {
        let num =  value1.split(" ")[1];
        num = parseFloat( num.replace(',', ''));
        grandtotal += num * value2
        let wholetotal = document.getElementById("g_total");
        
        wholetotal.textContent = grandtotal;
        return num * value2
    }
    


