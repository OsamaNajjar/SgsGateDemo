let popImage = document.querySelectorAll(".picZooming");
let popLayout = document.querySelector(".layouPic");
let popLayoutImage =  document.querySelector(".layouPic img");




popImage.forEach(image =>{
  image.onclick = ()=>{
    popLayout.style.display="block";
    popLayoutImage.src = image.getAttribute('src');
  }
})

popLayout.onclick=function(){
  popLayout.style.display="none";
}
