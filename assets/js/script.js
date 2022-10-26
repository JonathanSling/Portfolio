function InAnim(){
    let content = "Jonathan_Sling", i = 0, before= "";

    let title = document.querySelectorAll("h1")[0];

    
    let inter = setInterval(() => {
        title.classList.remove("start");
        before += content[i];
        title.innerHTML = "<span>{ </span>"+ before +"<span>}</span>";
        i++;
        if(i > content.length -1){
            clearInterval(inter);
            title.classList.add("done");
            Rest();
        }
    }, 150);
    
    function Rest(){
        document.body.classList.remove("start");
        document.querySelectorAll("header")[0].classList.remove("start");
        document.getElementById("Title").classList.remove("start");
    }
}

function Header(){
    let header = document.querySelectorAll("header")[0];
    let float = document.getElementById("floating");
    let li = document.querySelectorAll("li");

    header.addEventListener("mouseleave", () => {
        float.style.opacity = "0";
        let inter = setInterval(() => {    
            float.classList.add("notr");
            clearInterval(inter);
        }, 500);
    });

    li.forEach( e => {
        e.addEventListener("mouseenter", () => {
            let rect = e.getBoundingClientRect();
            float.style.left = (rect.left - 30 ).toString() + "px";
            float.style.width = (rect.width).toString() + "px";
            float.offsetHeight;
            float.classList.remove("notr");
            float.style.opacity = "1";
        })
    });
}


function main(){
    window.scrollTo(0, 0);

    InAnim();
    Header();
    
    if(window.innerWidth < 1200){
        window.addEventListener("touchmove", Scroll);
        document.body.addEventListener("touchstart", (e) => {
            if(e.touches[0].clientX < (window.innerWidth - document.getElementById("nav").offsetWidth)){
                document.getElementById("checkbox").checked = false;
            }
        });
        document.body.addEventListener("click", (e) => {
            if(e.x < (window.innerWidth - document.getElementById("nav").offsetWidth)){
                document.getElementById("checkbox").checked = false;
            }
        });
        let li = document.querySelectorAll("li");
        li.forEach( e => {
            e.addEventListener("touchend", () =>{
                document.getElementById("checkbox").checked = false;
            })
            e.addEventListener("click", () =>{
                document.getElementById("checkbox").checked = false;
            })
        })
    }
    
    document.getElementById("Contact").querySelectorAll(".text")[0].addEventListener("click", () => {
        document.getElementById("Contact").classList.toggle("hidden");
        document.getElementById("Contact").querySelectorAll(".text")[0].classList.remove("animated");
    });

    window.addEventListener("scroll", Scroll);

    function Scroll(){
        let div = document.querySelectorAll(".transition div")[0], div2 = document.querySelectorAll(".transition div")[1];
        div.style.padding = "0 0 0 " + (130*window.scrollY/window.innerHeight).toString() + "vw";
        div2.style.padding = "0 0 0 " + (130*(window.scrollY-window.innerHeight*2)/(window.innerHeight)).toString() + "vw";

        if(window.scrollY > window.innerHeight*1.4){
            document.querySelector(":root").style.setProperty("--text", "#202124");
            document.querySelector(":root").style.setProperty("--background", "#d7d7d7");
        }else{
            document.querySelector(":root").style.setProperty("--text", "white");
            document.querySelector(":root").style.setProperty("--background", "#202124");
        }

        if(document.getElementById("checkbox").checked){
            document.getElementById("checkbox").checked = false;
        }

        Discover("About");
        Discover("Student");
        Discover("Projects");
        if(document.getElementById("Footer").offsetTop < window.scrollY+window.innerHeight){
            document.getElementById("Footer").classList.remove("start");
        }

        function Discover(name){
            if(document.getElementById(name).offsetTop < window.scrollY+window.innerHeight/3){
                document.getElementById(name).classList.remove("start");
            }
        }
    }
}

setTimeout(() => {
    main();
},1000);
