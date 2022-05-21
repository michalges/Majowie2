window.addEventListener('scroll', e => {
    if(pageYOffset <= 5){
        document.querySelector("nav").style.backgroundColor = "rgb(255, 255, 255, 0)";
        document.querySelector("nav").style.borderColor = "transparent";
        
        document.querySelectorAll('.menu_button').forEach(element => {
            element.style.color = "white";
        });
    }
    else{
        if(pageYOffset >= (innerHeight/100)*94-6){
            document.querySelector("nav").style.position = "fixed";
            document.querySelector("nav").style.transform = "translateY(0)";
        }
        else{
            document.querySelector("nav").style.position = "absolute";
            document.querySelector("nav").style.transform = "translateY(calc(94vh - 3px))";
        }

        if(pageYOffset >= (innerHeight*3.25 - ((innerHeight/100)*6)-7) && pageYOffset < (innerHeight*7.25)){
            document.querySelector("nav").style.backgroundColor = "hsl(0, 0%, 12%)";
            document.querySelector("nav").style.borderTop = "0";
            document.querySelector("nav").style.borderBottom = "1px solid white";
            document.querySelectorAll('.menu_button').forEach(element => {
                element.style.color = "white";
            });
        }
        else{
            document.querySelector("nav").style.backgroundColor = "white";
            document.querySelector("nav").style.borderTop = "1px solid #292929";
            document.querySelector("nav").style.borderBottom = "1px solid #292929";
            document.querySelectorAll('.menu_button').forEach(element => {
                element.style.color = "#292929";
            });
        }
    }
    
    if(pageYOffset >= (innerHeight*4.25) && pageYOffset < ((innerHeight*4.25) + (1*innerWidth))){
        document.getElementById("zabytki_div").style.position = "fixed";
        document.getElementById("zabytki_div").style.top = "0";
        document.getElementById("zabytki_div").style.marginTop = "0";
        document.getElementById("zabytki_div").style.marginLeft = -((pageYOffset) - (innerHeight*4.25)) + "px";
    }
    
    if(pageYOffset >= ((innerHeight*4.25) + (1*innerWidth))){
        document.getElementById("zabytki_div").style.position = "relative";
        document.getElementById("zabytki_div").style.marginTop = "100vw";
        document.getElementById("zabytki_div").style.marginLeft = "-100vw";
    }
    if(pageYOffset < innerHeight*4.25){
        document.getElementById("zabytki_div").style.position = "relative";
        document.getElementById("zabytki_div").style.marginTop = "0";
        document.getElementById("zabytki_div").style.marginLeft = "0";
    }
});


const links = document.querySelectorAll("nav > a");
links[0].addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});
links[1].addEventListener("click", () => {
    window.scrollTo({
        top: 1.25*innerHeight,
        left: 0,
        behavior: 'smooth'
    });
});
links[2].addEventListener("click", () => {
    window.scrollTo({
        top: 2.25*innerHeight,
        left: 0,
        behavior: 'smooth'
    });
});
links[3].addEventListener("click", () => {
    window.scrollTo({
        top: 3.25*innerHeight,
        left: 0,
        behavior: 'smooth'
    });
});
links[4].addEventListener("click", () => {
    window.scrollTo({
        top: 5.25*innerHeight + innerWidth,
        left: 0,
        behavior: 'smooth'
    });
});


document.getElementById("zabytek_1_button").addEventListener("click", () => {
    document.getElementById("zabytek_1_div").style.display = "flex";
    document.getElementById("blur").style.display = "initial";
    document.getElementById("zabytek_1_div").style.animation = "fade 0.5s ease forwards";
    document.body.style.overflow = "hidden";
});
document.getElementById("zabytki_div_button_1").addEventListener("click", () => {
    document.getElementById("zabytek_1_div").style.animation = "fade_out 0.5s ease forwards";
    document.getElementById("blur").style.display = "none";
    setTimeout(() => {document.getElementById("zabytek_1_div").style.display = "none";}, 500);
    document.body.style.overflowY = "overlay";
});


document.getElementById("zabytek_2_button").addEventListener("click", () => {
    document.getElementById("zabytek_2_div").style.display = "flex";
    document.getElementById("blur").style.display = "initial";
    document.getElementById("zabytek_2_div").style.animation = "fade 0.5s ease forwards";
    document.body.style.overflow = "hidden";
});
document.getElementById("zabytki_div_button_2").addEventListener("click", () => {
    document.getElementById("zabytek_2_div").style.animation = "fade_out 0.5s ease forwards";
    document.getElementById("blur").style.display = "none";
    setTimeout(() => {document.getElementById("zabytek_2_div").style.display = "none";}, 500);
    document.body.style.overflowY = "overlay";
});


document.getElementById("zabytek_3_button").addEventListener("click", () => {
    document.getElementById("zabytek_3_div").style.display = "flex";
    document.getElementById("blur").style.display = "initial";
    document.getElementById("zabytek_3_div").style.animation = "fade 0.5s ease forwards";
    document.body.style.overflow = "hidden";
});
document.getElementById("zabytki_div_button_3").addEventListener("click", () => {
    document.getElementById("zabytek_3_div").style.animation = "fade_out 0.5s ease forwards";
    document.getElementById("blur").style.display = "none";
    setTimeout(() => {document.getElementById("zabytek_3_div").style.display = "none";}, 500);
    document.body.style.overflowY = "overlay";
});


document.getElementById("zabytek_4_button").addEventListener("click", () => {
    document.getElementById("zabytek_4_div").style.display = "flex";
    document.getElementById("blur").style.display = "initial";
    document.getElementById("zabytek_4_div").style.animation = "fade 0.5s ease forwards";
    document.body.style.overflow = "hidden";
});
document.getElementById("zabytki_div_button_4").addEventListener("click", () => {
    document.getElementById("zabytek_4_div").style.animation = "fade_out 0.5s ease forwards";
    document.getElementById("blur").style.display = "none";
    setTimeout(() => {document.getElementById("zabytek_4_div").style.display = "none";}, 500);
    document.body.style.overflowY = "overlay";
});


document.getElementById("zabytek_5_button").addEventListener("click", () => {
    document.getElementById("zabytek_5_div").style.display = "flex";
    document.getElementById("blur").style.display = "initial";
    document.getElementById("zabytek_5_div").style.animation = "fade 0.5s ease forwards";
    document.body.style.overflow = "hidden";
});
document.getElementById("zabytki_div_button_5").addEventListener("click", () => {
    document.getElementById("zabytek_5_div").style.animation = "fade_out 0.5s ease forwards";
    document.getElementById("blur").style.display = "none";
    setTimeout(() => {document.getElementById("zabytek_5_div").style.display = "none";}, 500);
    document.body.style.overflowY = "overlay";
});


document.getElementById("zabytek_6_button").addEventListener("click", () => {
    document.getElementById("zabytek_6_div").style.display = "flex";
    document.getElementById("blur").style.display = "initial";
    document.getElementById("zabytek_6_div").style.animation = "fade 0.5s ease forwards";
    document.body.style.overflow = "hidden";
});
document.getElementById("zabytki_div_button_6").addEventListener("click", () => {
    document.getElementById("zabytek_6_div").style.animation = "fade_out 0.5s ease forwards";
    document.getElementById("blur").style.display = "none";
    setTimeout(() => {document.getElementById("zabytek_6_div").style.display = "none";}, 500);
    document.body.style.overflowY = "overlay";
});


document.getElementById("zabytek_7_button").addEventListener("click", () => {
    document.getElementById("zabytek_7_div").style.display = "flex";
    document.getElementById("blur").style.display = "initial";
    document.getElementById("zabytek_7_div").style.animation = "fade 0.5s ease forwards";
    document.body.style.overflow = "hidden";
});
document.getElementById("zabytki_div_button_7").addEventListener("click", () => {
    document.getElementById("zabytek_7_div").style.animation = "fade_out 0.5s ease forwards";
    document.getElementById("blur").style.display = "none";
    setTimeout(() => {document.getElementById("zabytek_7_div").style.display = "none";}, 500);
    document.body.style.overflowY = "overlay";
});


document.getElementById("zabytek_8_button").addEventListener("click", () => {
    document.getElementById("zabytek_8_div").style.display = "flex";
    document.getElementById("blur").style.display = "initial";
    document.getElementById("zabytek_8_div").style.animation = "fade 0.5s ease forwards";
    document.body.style.overflow = "hidden";
});
document.getElementById("zabytki_div_button_8").addEventListener("click", () => {
    document.getElementById("zabytek_8_div").style.animation = "fade_out 0.5s ease forwards";
    document.getElementById("blur").style.display = "none";
    setTimeout(() => {document.getElementById("zabytek_8_div").style.display = "none";}, 500);
    document.body.style.overflowY = "overlay";
});