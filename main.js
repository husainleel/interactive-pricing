var value = 1;
var discount = 1 ;

document.querySelector("#slider").addEventListener("change", function(event) {
     value = event.target.value;
    priceFunc(value);
});

function priceFunc (value) {
document.querySelector(".pv").textContent = (data[value].views + " PAGEVIEWS");
document.querySelector(".price").textContent = ("$"+ data[value].price*discount + ".00");
}


document.querySelector("#yearly-toggle").addEventListener("change", function(e){
    if(this.checked) {
        discount = 0.75
        priceFunc(value); 
    } else {
        discount = 1;
        priceFunc(value); 
    }
});

var data = [
    {views: "10K", price: 8},
    {views: "50K", price: 12},
    {views: "100K", price: 16},
    {views: "500K", price: 24},
    {views: "1M", price: 36},
];