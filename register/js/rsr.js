let menu_img = document.querySelector(".menu");
let menu = document.querySelector(".closed");
let qry = document.getElementById("input");
let holder = document.querySelector(".holder");
let state = document.querySelector(".state");
let self = document.getElementById("main_js");
let status_heading = document.querySelector(".status_heading");
let caption = document.querySelector(".cap");
let premium= document.querySelector(".pversion");
let main_state="wining_matches";


let cmst=main_state
premium.addEventListener("click",()=>{
    if(main_state=="premium"){
        main_state="wining_matches"
        state.textContent="Get more info about an individual match"
        status_heading.textContent="obvious winining matches"
        caption.textContent="Enter two seperate teams"
        qry.setAttribute("placeholder","Name or country-england")
        premium.textContent="Premium"
    }else{
        main_state="premium"
        premium.textContent="Normal"
        qry.setAttribute("placeholder","click submit")
        status_heading.textContent="Current due matches";
        caption.textContent="Click Submit!"
    }
})


state.addEventListener("click",()=>{
    if(main_state=="wining_matches"){
        main_state="individual_matches"
        state.textContent="Know all obvious wining matches"
        status_heading.textContent="info about an idividual match"
        caption.textContent="Enter two seperate teams"
        qry.setAttribute("placeholder","Liverpool vs Chelsea /a file")
    }else{
        main_state="wining_matches"
        state.textContent="Get more info about an individual match"
        status_heading.textContent="obvious winining matches"
        caption.textContent="Enter two seperate teams"
        qry.setAttribute("placeholder","Name or country-england")
    }
    if(main_state=="premium"){
        main_state="individual_matches"
        state.textContent="Know all obvious wining matches"
        status_heading.textContent="info about an idividual match"
        caption.textContent="Enter two seperate teams"
        qry.setAttribute("placeholder","Liverpool vs Chelsea")
    }

    

})



menu_img.addEventListener("click",()=>{
    if(menu_img.textContent=="Menu"){
    menu_img.textContent="Close";
  }else{
    menu_img.textContent="Menu";
  }
  menu_img.classList.toggle("pink");
  
  menu.classList.toggle("open");
  
   
 })

let  btn =document.querySelector(".btn");
let cencon= document.getElementById("cencon");
let out=document.querySelector(".output");


let bordero= out.style.border;
let inno= out.innerHTML


qry.addEventListener('keypress', function(event) {
     if (event.key === 'Enter') {runPythonScript(); } 
    }
);
function runPythonScript() {
    
    value= qry.value;
    if(value.length>0 || main_state=="premium"){
    // qry.setAttribute("placeholder","e.g. " + qry.value)
    // qry.value="";
    let color=btn.style.color;
    let text=btn.textContent;
    let bgcolor=btn.style.backgroundColor;
    let animation=btn.style.animationName
    btn.textContent="Loading";
    btn.style.color="rgb(65,25,65)"
    btn.style.backgroundColor= "rgba(255,255,255,0.6)";
    btn.style.animationName="rotate";
    btn.style.animationDuration="1s"
    btn.style.timingFunction="ease-in-out"
    btn.style.animationIterationCount="infinite"
    btn.style.cursor="wait"

    //cecon
    let colorc=cencon.style.color;
    let textc=cencon.textContent;
    let bgcolorc=cencon.style.backgroundColor;
    let animationc=cencon.style.animationName
    
    cencon.style.color="rgb(65,25,65)"
    cencon.style.backgroundColor= "rgba(255,255,255,0.6)";
    cencon.style.animationName="rotate";
    cencon.style.animationDuration="1s"
    cencon.style.timingFunction="ease-in-out"
    cencon.style.animationIterationCount="infinite"
    //holder
    holder.classList.remove("flex")
    //input border
    
    out.style.border=bordero
    out.innerHTML=inno
    // var data = {
    
    // message: String(value)
    
    // };
    let http;
    if (main_state == "wining_matches") {
        http = "https://sculpin-charming-directly.ngrok-free.app/receive_message";
    }
    if (main_state == "individual_matches") {
        http = "https://sculpin-charming-directly.ngrok-free.app/individual_receive_message";
    }
    if (main_state == "premium") {
        http = "https://sculpin-charming-directly.ngrok-free.app/premium";
    }
   


    
        
        
    }
}    