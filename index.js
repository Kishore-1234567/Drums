
var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var val=this.innerHTML;
        makeSound(val);
        addAnimation(val);
    });
}

document.addEventListener("keypress",function(e){
    makeSound(e.key);
    addAnimation(e.key);
});

function addAnimation(key){
    var selector=document.querySelector("."+key);
    selector.classList.add("pressed");
    setTimeout(function(){selector.classList.remove("pressed")},100)
}

function makeSound(key){
    switch (key){
        case "w":
            var a=new Audio("sounds/tom-1.mp3");
            a.play();
            break;
        case "a":
            var a=new Audio("sounds/tom-2.mp3");
            a.play();
            break;
        case "s":
            var a=new Audio("sounds/tom-3.mp3");
            a.play();
            break;
        case "d":
            var a=new Audio("sounds/tom-4.mp3");
            a.play();
            break;

        case "j":
            var a=new Audio("sounds/snare.mp3");
            a.play();
            break;
        case "k":
            var a=new Audio("sounds/crash.mp3");
            a.play();
            break;
        case "l":
            var a=new Audio("sounds/kick-bass.mp3");
            a.play();
            break;
        default:
            console.log(val);
            break;
    }
}