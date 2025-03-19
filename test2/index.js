let ball= document.querySelector('.ball');
let pole11= document.querySelector('.p1');
let pole22= document.querySelector('.p2');
let st= document.querySelector('.start_btn');
let sp= document.querySelector('.stop_btn');

let start1=false
let p1_state=0;
let p2_state=0;


pole11.addEventListener('click',()=>{
    
    pole11.style.backgroundColor= 'green'
})



st.addEventListener('click',()=>{
   pole11.style.backgroundColor= 'green'
   pole22.style.backgroundColor= 'red'
})
sp.addEventListener('click',()=>{
   pole11.style.backgroundColor= 'white'
   pole22.style.backgroundColor= 'white'
})
function stop(){
     stop=true
}
function restart(){
     restart=true
}




