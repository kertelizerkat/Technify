function storeInfo(key, value) {
  localStorage.setItem(key, value);
  // console.log(`Data stored: ${key} = ${value}`);
}
function accessInfo(key) {
  const value = localStorage.getItem(key);
  if (value) {
      // console.log(`Data retrieved: ${key} = ${value}`);
      return value;
  } else {
      // console.log(`No data found for key: ${key}`);
      return null;
  }
}




const styleP = document.querySelector('style')
let stylepp= styleP.innerHTML


document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('html');
    const styleP = document.querySelector('style')
    // let stylepp= styleP.innerHTML
    styleP.innerHTML= styleP.innerHTML+ `
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
  -webkit-animation: spin 12s linear 0s infinite;
}

.venus-orbit {
	width: 120px;
	height: 120px;
  -webkit-animation: spin 7.4s linear 0s infinite;
}

.mercury-orbit {
	width: 90px;
	height: 90px;
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
  -webkit-animation: spin3D 3s linear .2s infinite;
}

.green-orbit {
	width: 120px;
	height: 120px;
  border: 1px solid #91ffbfa5;
  -webkit-animation: spin3D 2s linear 0s infinite;
}

.red-orbit {
	width: 90px;
	height: 90px;
  border: 1px solid #ffca91a5;
  -webkit-animation: spin3D 1s linear 0s infinite;
}

.white-orbit {
	width: 60px;
	height: 60px;
  border: 2px solid #ffffff;
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
}`
 
    element.classList.add('loading');
    let body__ = document.querySelector('body')
    body__.classList.add('bload');
    let s5 = document.querySelectorAll('section')
    s5.forEach(element=>{
      element.classList.add('hide2')
    })
  


});

window.addEventListener('load', () => {
  let s5 = document.querySelectorAll('section')
  s5.forEach(element=>{
    element.classList.remove('hide2')
  })
    const ld= document.querySelector('.loader');
    ld.classList.add('hide');
    const element = document.querySelector('html');
    element.classList.remove('loading');
    const styleP= document.querySelector('style')
    styleP.innerHTML=stylepp

    const body__= document.querySelector('body');
   
    

    element.classList.remove('loading');
    body__.classList.remove('bload');
 



});
