function app(){
let btn = document.querySelectorAll('button');
let reset = document.getElementById('reset')
let refresh = document.getElementById('reset');
refresh.addEventListener('click', _ => {
            location.reload();
})

btn.forEach(function (item){
    console.log(item);
    item.addEventListener('click', function() {
        item.style.display = "none";
    })

})
}
app();




