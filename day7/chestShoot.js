 function testdemo() 
 {
    let name = document.getElementById("nameInput").value;
    let mark = document.getElementById("markInput").value;
    
    enterDate(name, mark);
   
}
function enterDate(name="", mark=0)
{
    if(name == "" || mark <= 0){
        document.getElementById("demo").innerHTML = "الرجاء ادخال الاسم والدرجة";
        return;
    }
    var fullmark = 100;
    document.getElementById("demo").innerHTML = "هلا  " + name + ", درجتك " + mark + " من " + fullmark + " (" + (mark / fullmark * 100) + "%).";
    chackMark(mark);
    chest.src = "../day7/image/chest_open_4.png";
}

function chackMark(mark = 0){
    if(mark >= 90){
        document.getElementById("mark").innerHTML = "<br>ممتاز!";
        stars(5);
    }else if(mark >= 80){
        document.getElementById("mark").innerHTML = "<br>جيد!";
        stars(4);
    }else if(mark >= 60){
        document.getElementById("mark").innerHTML = "<br>جيد!";
        stars(3);
    }else{
        document.getElementById("mark").innerHTML = "<br>يمكنك التحسن.";
        stars(1);    
    }
}

function stars(count = 0) {

    let oldStars = document.getElementById("starsContainer");
    if (oldStars) {
        oldStars.remove();
    }

    let starsContainer = document.createElement("div");
    starsContainer.id = "starsContainer";
    starsContainer.style.display = "inline-block";
    starsContainer.style.margin = "10px";

    for (let i = 0; i < count; i++) {
        let star = document.createElement("img");
        star.src = "https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000";
        star.style.width = "30px";
        starsContainer.appendChild(star);
    }
    document.body.appendChild(starsContainer);
}

function moveChest(){
        var chest = document.getElementById("chest");
        var position = 0;
        document.addEventListener('keydown',function(event){
                if(event.key === "ArrowRight"){
                    position +=10;
                    chest.style.left = position + "px";
                }
                if(event.key === "ArrowLeft"){
                    position -=10;
                    chest.style.left = position + "px";
                }
                 if(event.code === "Space") {
                    shootBullet();
                    }
            });
}
function shootBullet() {
        chest.src = "../day7/image/chest_open_4.png";
        var newBullet = document.createElement("img");
        newBullet.src = "../day7/image/coin_1.png";
        newBullet.alt = "bullet";
        newBullet.width = 20;
        newBullet.style.position = "absolute";
        newBullet.style.left = (chest.offsetLeft + chest.width / 2 - 10) + "px";
        newBullet.style.top = (chest.offsetTop + chest.height) + "px";
        document.body.appendChild(newBullet);

    var bulletPos = chest.offsetTop + chest.height;
    var interval = setInterval(function() {
        bulletPos += 15;
        newBullet.style.top = bulletPos + "px";
        if (bulletPos > window.innerHeight) {
            newBullet.remove();
            clearInterval(interval);
        }
        chest.src = "../day7/image/chest_open_2.png";
        }, 16);
}
var start = false;
function startsGame() {
        if(start){
        shootBullet();
        moveChest();}
}
    