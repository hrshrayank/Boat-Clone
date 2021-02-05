window.onload=function(){
    // loadData()
    var sbar=document.getElementById("search")
    sbar.addEventListener("keyup",function(){
        loadData(event.target.value)
        console.log(event.target.value);
    })
}
window.addEventListener("load", loadPage)
    let load = document.getElementById("load")
    let displayyy = document.getElementById("middle__second")
    displayyy.innerHTML = ""
    
    // Loader animation
    function loadPage() {
        let gif = document.createElement("img")
        gif.setAttribute("src", "https://cdn.shopify.com/s/files/1/0057/8938/4802/t/11/assets/286.gif?11553")
        load.append(gif)
        let container = document.getElementById("container")
        container.style.opacity = 0.75
        container.append(load)
        setTimeout(loadData, 1000)
    }

var cards=document.getElementById("middle__second")

var data=[]
let sort_btn=document.getElementById("sort_btn")

sort_btn.addEventListener("click",function(){
    let select_out=document.getElementById("sort-by").value
    console.log("Working");
    if(select_out =="feature"){
        loadData()
    }else if(select_out == "low_to_high"){
        loadDataLowToHigh()
    }else if(select_out =="high_to_low"){
        loadDataHighToLow()
    }
})

// console.log(n);
function loadDataLowToHigh(){
    var xhr=new XMLHttpRequest()
    
    var url="http://localhost:3000/airdopes?_sort=price&_order=asc"
    // console.log(query);

    xhr.open("GET",url);
    var output=""

    xhr.onload =function(){
        data=JSON.parse(xhr.responseText)
        console.log(data);
        
        display(data)
    }
    xhr.send()
    
}

function loadDataHighToLow(){
    // let cards=document.getElementById("middle__second")
    // cards.innerHTML=""
    // try {
    //     fetch("http://localhost:3000/airdopes?_sort=price&_order=desc")

    //     .then(response=>response.json())
    //     .then(res=>display(data))

    // } catch(err){
    //     console.log(err);
    // }
    var xhr=new XMLHttpRequest()
    
    var url="http://localhost:3000/airdopes?_sort=price&_order=desc"
    // console.log(query);

    xhr.open("GET",url);
    var output=""

    xhr.onload =function(){
        data=JSON.parse(xhr.responseText)
        console.log(data);
        
        display(data)
    }
    xhr.send()
}
function display(data){
    var output=""
    for(i in data){
        // localStorage.setItem("order",JSON.stringify(data));
        output+=`
        <div class="middle__second_main">
            <img src="${data[i].url}">

            <h1>${data[i].name}</h1>
            <p style="color: red;">${data[i].Rating}</p>
            <div class="middle_second_flex">
            <p class="middle_second_flex_red">${data[i].price}</p>

            <p class="middle_second_underline"><s>${data[i].before}</s></p>
            </div>
        </div>
        `;
    }

    cards.innerHTML=output
}
function loadData(query){
    var xhr=new XMLHttpRequest()
    
    var url="http://localhost:3000/airdopes?s="+query
    // console.log(query);

    xhr.open("GET",url);
    

    xhr.onload =function(){
        data=JSON.parse(xhr.responseText)
        console.log(data);
        
            display(data)
    }
    xhr.send()
    
}