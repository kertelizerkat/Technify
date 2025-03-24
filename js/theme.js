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
    <script src="js/allhandler.js"></script>
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



