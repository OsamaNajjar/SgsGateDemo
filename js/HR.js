let lis = document.querySelectorAll(".hrListTitle");
let cards = document.querySelectorAll(".hrCard");
let counter = document.querySelectorAll(".pageNumCounter");

lis.forEach(function(ele){
    ele.onclick = function(){
        lis.forEach(function(ele){
            ele.classList.remove("active");
        })
        this.classList.add("active");
    }
})

counter.forEach(function(ele){
    ele.onclick = function(){
        counter.forEach(function(ele){
            ele.classList.remove("active");
        })
        this.classList.add("active");
    }
})