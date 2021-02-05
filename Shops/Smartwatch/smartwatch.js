const cards = document.getElementById('middle__second');
const searchBar = document.getElementById('search');
let data = [];
//Search Items
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = data.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString)
            
            
        );
    });
    displayCharacters(filteredCharacters);
});

//Sort Items

let sort_btn=document.getElementById("sort_btn")

sort_btn.addEventListener("click",function(){
    let select_out=document.getElementById("sort-by").value
    // console.log("Working");
    if(select_out =="feature"){
        loadData()
    }else if(select_out == "low_to_high"){
        loadDataLowToHigh()
    }else if(select_out =="high_to_low"){
        loadDataHighToLow()
    }
})
// Low to high
const loadDataLowToHigh = async () => {
    // let pric =JSON.parse(price)
    // console.log(pric);
    try {
        const res = await fetch('http://localhost:3000/smartwatch?_sort=price&_order=asc');
        data = await res.json();
        displayCharacters(data);
    } catch (err) {
        console.error(err);
    }
};
//High to Low
const loadDataHighToLow = async () => {
    try {
        const res = await fetch('http://localhost:3000/smartwatch?_sort=price&_order=desc');
        data = await res.json();
        displayCharacters(data);
    } catch (err) {
        console.error(err);
    }
};


//Normal

const loadData = async () => {
    try {
        const res = await fetch('http://localhost:3000/smartwatch');
        data = await res.json();
        displayCharacters(data);
    } catch (err) {
        console.error(err);
    }
};
//Display Data
const displayCharacters = (characters) => {
    const html = characters
        .map((character) => {
            return `
            <div class="middle__second_main">
            <img src="${character.url}">

            <h1>${character.name}</h1>
            <p class="rating"><i class="fa fa-star" aria-hidden="true"style="color: red;"></i>
            <i class="fa fa-star" aria-hidden="true"style="color: red;"></i>
            <i class="fa fa-star" aria-hidden="true"style="color: red;"></i>
            <i class="fa fa-star" aria-hidden="true"style="color: red;"></i>
            <i class="fa fa-star" aria-hidden="true"></i>${character.Rating}</p>
            <div class="middle_second_flex">
            <p class="middle_second_flex_red">Rs ${character.price}.00</p>

            <p class="middle_second_underline"><s>Rs ${character.before}.00</s></p>

            </div>
        </div>
        `;
        })
        .join('');
    cards.innerHTML = html;
};

loadData();
