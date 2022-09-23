let mainlanding = document.querySelector(".main-landing");
let arrayimg=["images/img1.jpg" , "images/img2.jpg" , "images/img3.jpg" ,"images/img4.jpg" , "images/img5.jpg"];
let icon = document.querySelector(".toogle-setting .fa-cog");
let content = document.querySelector(".setting-box");
icon.onclick=function() {
  this.classList.toggle("fa-spin");
  content.classList.toggle("open");
}
let maincolor=localStorage.getItem("color_option");
if(maincolor !== null){
    document.documentElement.style.setProperty("--main-color" ,maincolor);
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");

        if(element.dataset.color === maincolor){
            element.classList.add("active");
        }
       
    });
    
}
let colorli=document.querySelectorAll(".colors-list li");
colorli.forEach(li => {
    li.addEventListener("click" , (e) =>{
     document.documentElement.style.setProperty("--main-color" ,e.target.dataset.color);
     localStorage.setItem("color_option" , e.target.dataset.color);

     handactive(e);
   
    });
});

let backimage=true;
let backinterval;


function intervalbackground (){
if(backimage === true){
    backinterval = setInterval(() => {
        let randomimgs = Math.floor(Math.random() * arrayimg.length);
    
        mainlanding.style.backgroundImage="url('  " + arrayimg[randomimgs] +" ')";
       
    }, 4000);
};
};
intervalbackground();

let backgroundstorage = localStorage.getItem("background_option");

if(backgroundstorage !== null){
  if(backgroundstorage === 'true'){
    backimage = true;
  }else {
    backimage = false;
  }
//   console.log(backgroundstorage);
//   document.querySelectorAll(".rnd_background span").forEach(element =>{
//       element.classList.remove("active");
//   });
//   if(backgroundstorage === 'true'){
//       document.querySelector(".rnd_background .yes").classList.add("active");
//   }else{
//     document.querySelector(".rnd_background .no").classList.add("active");
// }

 }




let randback=document.querySelectorAll(".rnd_background span");
randback.forEach(span =>{
    span.addEventListener("click" ,(e) =>{
        handactive(e);

        if(e.target.dataset.background === 'yes'){
            backimage=true;
           intervalbackground();
           localStorage.setItem("background_option", true);
       }else{
            backimage=false;
           clearInterval(backinterval);
           localStorage.setItem("background_option" , false);
       };
    });
});

var headland = document.querySelector('.main-landing .head-landing');
var head = document.createElement("h3");
var text = document.createTextNode("Special Design");
headland.appendChild(head);
head.appendChild(text);

var buttonland = document.querySelector(".head-landing .toogle-link");

    var span1 = document.createElement("span");
    var span2 = document.createElement("span");
var span3 = document.createElement("span");
buttonland.appendChild(span1);
buttonland.appendChild(span2);
buttonland.appendChild(span3)


// start our gallery
let ourgallery = document.querySelectorAll(".our-gallery .box img");

ourgallery.forEach(img =>{
    img.addEventListener('click' ,(e) =>{
        let popupoverlay = document.createElement("div");
        popupoverlay.className = "popup_overlay";
       document.body.appendChild(popupoverlay);

       let popbox = document.createElement("div");
       popbox.className="pop_box";
      
       let imgbox = document.createElement("img");
       if(img.alt !== null){
           let craetehead =document.createElement("h4");
           craetehead.className="craete-head";
           let craetetext=document.createTextNode(img.alt);
           craetehead.appendChild(craetetext);
           popbox.appendChild(craetehead);
       }
       imgbox.src=img.src;
       popbox.appendChild(imgbox);
       document.body.appendChild(popbox);
       
       let closebtn=document.createElement("span");
       let textclose = document.createTextNode("X");
       closebtn.className="close_btn";
       closebtn.appendChild(textclose);
       popbox.appendChild(closebtn);
    });
  });

  document.addEventListener("click" , function(e){
       if(e.target.className === "close_btn"){
           e.target.parentNode.remove();
           document.querySelector(".popup_overlay").remove();
       }
  });
  
// end our gallery

let bullets=document.querySelectorAll(".bullet");
let links=document.querySelectorAll(".head-landing a");
function moveanywhere(element){
    element.forEach(ele =>{
        ele.addEventListener("click" , (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.set).scrollIntoView({
                behavior:"smooth"
            });
        });
    });
};
moveanywhere(bullets);
moveanywhere(links);
function handactive(event){
    event.target.parentElement.querySelectorAll(".active").forEach(element =>{
        element.classList.remove("active");
    })
    event.target.classList.add("active");
}

let bulletsspan=document.querySelectorAll(".bullet-option span");
let bulletcontainer=document.querySelector(".bullets");
let localbullet=localStorage.getItem("option-bullet");
if(localbullet !==null){
    bulletsspan.forEach(span =>{
        span.classList.remove("active");
    });
    if(localbullet ==="show"){
        bulletcontainer.style.display="block";
        document.querySelector(".bullet-option .yes").classList.add("active");
    }else{
        bulletcontainer.style.display="none";
        document.querySelector(".bullet-option .no").classList.add("active");

    }
}
bulletsspan.forEach(span =>{
    span.addEventListener("click" , e =>{
        if(span.dataset.display ==="show"){
            bulletcontainer.style.display="block";
            localStorage.setItem("option-bullet" , "show");
        }else{
            bulletcontainer.style.display="none";
            localStorage.setItem("option-bullet" , "hide");
        }
        handactive(e);
    });
});

let reset=document.querySelector(".localstorage-option");
reset.onclick=function(){
localStorage.removeItem("color_option");
localStorage.removeItem("background_option");
localStorage.removeItem("option-bullet");
window.location.reload();
};


let btntoogle=document.querySelector(".toogle-link");
let menuShow=document.querySelector(".link");
btntoogle.onclick=function(e){
    e.stopPropagation();
    this.classList.toggle("menu-active");
    menuShow.classList.toggle("open");
}

 document.addEventListener('click' , (e) =>{
     if(e.target !==btntoogle && e.target !==menuShow){
         if(menuShow.classList.contains("open")){
            btntoogle.classList.toggle("menu-active");
            menuShow.classList.toggle("open");
        };
    };
})
menuShow.onclick=function(e){
    e.stopPropagation();
}