window.addEventListener("scroll",function(){
    progreso();
})

function progreso(){
    let progreso=document.documentElement.scrollTop;
    var nav=document.getElementById('nav');
    if (progreso>40){
        nav.style.height='10vh'
    }
    else if (progreso<=40){
        nav.style.height='20vh'
    }

    let posicion = window.innerHeight-5;
    var pos=document.getElementsByClassName('a_section')
    var p=Math.floor(progreso/posicion)
    console.log(posicion);
    for(var i=0; i<6; i++){
        if(i==p){
            pos[i].style.color="#f7c04f"
        }
        else{
            pos[i].style.color="white"
        }
    }
}