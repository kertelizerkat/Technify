
let line="https://sculpin-charming-directly.ngrok-free.app"
// line="http://localhost:5700"
// let theme_m='Dark'
// localStorage.setItem('theme_+-----', theme_m)
let access_="domContent"

document.addEventListener('DOMContentLoaded', function() {
    fetch(line+ '/status', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify("hello")
    })
    .then(response => response.json())
    .then(data => {
        if (data.message=='okay'){
        
    
        }else{
          window.location.replace("spt2.html")

        }
       
    })
    .catch(error => {
        console.log(error)
        window.location.assign('spt2.html')
    });
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
            window.location.assign('spt2.html')
        }
       
    })
    .catch(error => {
        console.log(error)
        window.location.assign('spt2.html')
    });
    })
