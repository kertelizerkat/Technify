
let line="https://sculpin-charming-directly.ngrok-free.app"
line="http://localhost:5700"
let theme_m='Light'
localStorage.setItem('theme_+-----', theme_m)
let access_="domContent"
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
           
                online=true
        }else{
            online=true
        location.reload(false)
       
        }
        online=true
       
    })
    .catch(error => {
        console.log(error)
        document.querySelector('html').innerHTML=`<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>TechNify | offline</title>
          <link rel="stylesheet" href="styles.css">
          <style>
            /* Body styling for the dark theme */
        body, html {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          background-color: #121212; /* Dark background */
          font-family: Arial, sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
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
        
        /* Animation element */
        .offline-animation {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin: 0 auto 20px auto;
          background: radial-gradient(circle, #007ACC 20%, transparent 50%);
          animation: pulse 1.5s infinite;
        }
        
        /* Keyframes for the pulse animation */
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.6;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }
          p {
            font-size: 1rem;
          }
        }
        
          </style>
        </head>
        <body>
          <div class="offline-container">
            <div class="offline-animation"></div>
            <h1>We Are Offline</h1>
            <p>We're temporarily disconnected, but we'll be back shortly. Stay tuned!</p>
            <footer>
                <h5>Copyright &copy; TechNify</h5>
              </footer>
          </div>
          
        </body>
        </html>
        `
            
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
            Choose your <span class="tk">TechNify</span> Theme
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
