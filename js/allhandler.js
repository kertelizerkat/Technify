
let line="https://sculpin-charming-directly.ngrok-free.app"
// line="http://localhost:5700"
let theme_m='Light'
localStorage.setItem('theme_+-----', theme_m)
let access_="domaContent"
let online=false

document.addEventListener('DOMContentLoaded', function() {
    fetch(line+ '/status', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify('hi')
    })
    .then(response => response.json())
    .then(data => {
        if (data.message=='okay'){
           
          localStorage.setItem('online','true')
        }else{
            online=true
            localStorage.setItem('online','true')
       
        }
        localStorage.setItem('online','true')
      
       
    })
    .catch(error => {
        console.log(error)
        localStorage.setItem('online','false')
        document.querySelector('html').innerHTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechNify | offline</title>
    
    <style>
        body{
            height:100vh;
            width:100vw;
            background-color:black;
            overflow: hidden;
            transform: scale(0.8)
        }
        .loading{
 height:100vh;
 overflow: hidden;
 
    
}
.loader{
    height:100vh;
    width:100vw;
    position: absolute;
    z-index: 10000000000000000000;
    background-color: black;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    


}
.headl{
    font-size: 2rem;
    color: aqua;
}
.hide{
    visibility: hidden;
    min-height: 0px;
    min-width: 0px;
    max-width: 0px;
    max-height: 0px;
    opacity: 0;
    overflow: hidden;
}
.bload{
top:0;
    left:0;
    right:0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
   overflow:hidden;
   height:100vh
    
}
    
    
    @keyframes spin {
  from {
    transform: rotate(0);
  }
  to{
    transform: rotate(359deg);
  }
}

@keyframes spin3D {
  from {
    transform: rotate3d(.5,.5,.5, 360deg);
  }
  to{
    transform: rotate3d(0deg);
  }
}

@keyframes configure-clockwise {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes configure-xclockwise {
  0% {
    transform: rotate(45deg);
  }
  25% {
    transform: rotate(-45deg);
  }
  50% {
    transform: rotate(-135deg);
  }
  75% {
    transform: rotate(-225deg);
  }
  100% {
    transform: rotate(-315deg);
  }
}

@keyframes pulse {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: .25;
    transform: scale(.75);
  }
}

/* GRID STYLING */

* {
  box-sizing: border-box;
}



.spinner-box {
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}

/* SPINNING CIRCLE */




/* ALTERNATING ORBITS */

.circle-border {
  width: 150px;
  height: 150px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(63,249,220);
  background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);
  animation: spin .8s linear 0s infinite;
}

.circle-core {
  width: 100%;
  height: 100%;
  background-color: #1d2630;
  border-radius: 50%;
}

/* X-ROTATING BOXES */

.configure-border-1 {
  width: 115px;
  height: 115px;
  padding: 3px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fb5b53;
  animation: configure-clockwise 3s ease-in-out 0s infinite alternate;
}

.configure-border-2 {
  width: 115px;
  height: 115px;
  padding: 3px;
  left: -115px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(63,249,220);
  transform: rotate(45deg);
  animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;
}

.configure-core {
  width: 100%;
  height: 100%;
  background-color: #1d2630;
}

/* PULSE BUBBLES */

.pulse-container {
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pulse-bubble {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #3ff9dc;
}

.pulse-bubble-1 {
    animation: pulse .4s ease 0s infinite alternate;
}
.pulse-bubble-2 {
    animation: pulse .4s ease .2s infinite alternate;
}
.pulse-bubble-3 {
    animation: pulse .4s ease .4s infinite alternate;
}

/* SOLAR SYSTEM */

.solar-system {
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.orbit {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #fafbfC;
	border-radius: 50%;
} 

.earth-orbit {
	width: 165px;
	height: 165px;
  animation: spin 12s linear 0s infinite;
  -webkit-animation: spin 12s linear 0s infinite;
}

.venus-orbit {
	width: 120px;
	height: 120px;
  animation: spin 7.4s linear 0s infinite;
  -webkit-animation: spin 7.4s linear 0s infinite;
}

.mercury-orbit {
	width: 90px;
	height: 90px;
 animation: spin 3s linear 0s infinite;
  -webkit-animation: spin 3s linear 0s infinite;
}

.planet {
	position: absolute;
	top: -5px;
  width: 10px;
  height: 10px;
	border-radius: 50%;
  background-color: #3ff9dc;
}

.sun {
	width: 35px;
	height: 35px;
	border-radius: 50%;
	background-color: #ffab91;
}

.leo {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
}

.blue-orbit {
	width: 165px;
	height: 165px;
  border: 1px solid #91daffa5;
  animation: spin3D 3s linear .2s infinite;
  -webkit-animation: spin3D 3s linear .2s infinite;
}

.green-orbit {
	width: 120px;
	height: 120px;
  border: 1px solid #91ffbfa5;
animation: spin3D 2s linear 0s infinite;
  -webkit-animation: spin3D 2s linear 0s infinite;
}
.inf{
  text-align: center;
  /* transform: scale(1); */
}

.red-orbit {
	width: 90px;
	height: 90px;
  border: 1px solid #ffca91a5;
 animation: spin3D 1s linear 0s infinite;
  -webkit-animation: spin3D 1s linear 0s infinite;
}

.white-orbit {
	width: 60px;
	height: 60px;
  border: 2px solid #ffffff;
  animation: spin3D 10s linear 0s infinite;
  -webkit-animation: spin3D 10s linear 0s infinite;
}

.w1 {
  transform: rotate3D(1, 1, 1, 90deg);
}

.w2 {
  transform: rotate3D(1, 2, .5, 90deg);
}

.w3 {
  transform: rotate3D(.5, 1, 2, 90deg);
}

.three-quarter-spinner {
  width: 50px;
  height: 50px;
  border: 3px solid #fb5b53;
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: spin .5s linear 0s infinite;
}


h5{
            color:#A9A9A9;
        }
        
        /* Offline container styling */
        .offline-container {
          text-align: center;
          max-width: 600px;
          padding: 20px;
        }
        
        h1 {
          font-size: 2.5rem;
          color: #007ACC; /* Vibrant red for offline message */
          margin-bottom: 15px;
        }
        
        p {
          font-size: 1.2rem;
          color: #cccccc; /* Light grey text for description */
        }
    </style>
    
</head>
<body>
    <div class="loader" id="loader">
        <div class="headl">TechNify </div>
        
        <div class="spinner-box">
            <div class="blue-orbit leo">
            </div>

            <div class="green-orbit leo">
            </div>

            <div class="red-orbit leo">
            </div>

            <div class="white-orbit w1 leo">
            </div>
            <div class="white-orbit w2 leo">
            </div>
            <div class="white-orbit w3 leo">
            </div>
        </div>
<div class="inf">
          <h1>We Are Offline</h1>
          <p>We're temporarily disconnected, but we'll be back shortly. Stay tuned!</p>
          <footer>
              <h5>Copyright 2025 &copy; TechNify . All rights reserved</h5>
            </footer>
        </div>
    </div>
   
</div>


<script>
</script>
    
    
</body>
</html>`
window.addEventListener("resize", checkScreenWidth);

function check(){
  fetch(line+ '/status', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify('hi')
})
.then(response => response.json())
.then(data => {
    if (data.message=='okay'){
       
      
          
    }else{
    
   
    }
    if (window.innerWidth < 320) {

    }else{
      window.location.reload()
    }

    
   
})
.catch(error => {
    console.log('testing')
});
}
setInterval(check,5000)

            
    });
})
if (!(localStorage.getItem('theme_+-----'))){
    
    let pagbody= document.querySelector('html')
    let pagbodyC=pagbody.innerHTML
    let pagbody2= document.querySelector('body')
    let pageCode= pagbody.innerHTML
  
    // let theme='none';
    const storageKey = 'theme_+-----';
    let userInput = localStorage.getItem(storageKey);
    theme= userInput
    
    
    if (!userInput){
         pagbody.innerHTML=`<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TechNify | Theme</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
        <style>
            body{
                background-color: black;
                display: flex;
                align-items: center;
                height:100vh;
                width:100vw;
                justify-content: center;
                color: white;
                flex-direction: column;
            }
            .container{
                width:200px;
                height:100px;
                border: 1px solid white;
                border-radius: 20px;
                border-bottom: 1px solid transparent;
                border-top: 1px solid transparent;
                display: flex;
                justify-content: space-between;
                padding: 0 30px;
                align-items: center;
                gap: 20px
    
            }
    
            .dark,.light{
              height:50px
              ;
              display: flex;
              width:50%;
             
              align-items: center;
              justify-content: center
              ;
              border-radius: 20px;
              cursor: pointer;
            }
            .head{
                color: rgb(255,255,255);
                font-size: 1.5rem;
                margin-bottom: 20px;
            }
            .dark{
                border: 1px solid white;
            }
            .light{
                border: 1px solid aqua;
                color: black;
                background-color: rgba(255,255,255,0.9);
                font-weight: 900;
            }
            body{
                overflow: hidden;
            }
            .tk{
                animation: colorFlow 5s alternate;
            }
            @keyframes colorFlow {
        0% {
            color: black;
        }
    
        25% {
            color: white
        }
    
        50% {
            color: transparent;
            -webkit-text-stroke: 1px white;
        }
    
        70% {
            color: transparent;
            -webkit-text-stroke: 1px white;
        }
    
        100% {
            color: white;
        }
    }
    
        </style>
    </head>
    <body>
    <script src="loader.js"></script>
        <div class="head">
            Choose your <span class="tk">Laerner</span> Theme
        </div>
        <div class="container">
              <div onclick='dark()' class="dark">Dark</div>
              <div onclick='light()' class="light">Light</div>
        </div>
    </body>
    `
    
    
    }else{
        
        if (theme=='Light'){
        pagbody2.style.color='white'
    
        document.querySelectorAll('select').forEach(element =>{
            element.style.color= 'black'
        })
        }
    
    
    }
    
    function dark(){
        // alert('Dark')
        localStorage.setItem(storageKey, 'Dark');
        theme= 'Dark'
        window.location.href = 'index.html'
    
    
    }
    function light(){
        localStorage.setItem(storageKey, 'Light');
        theme='Light'
        window.location.href = 'index.html'
    }
    
    
        
}
