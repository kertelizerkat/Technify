
window.addEventListener('DOMContentLoaded',()=>{
    let date2=18
    let date1=17
    let pstate=accessInfo(en('state',date2))
    let pasw=accessInfo(en('password',date1))
    let phone=accessInfo(en('phone',date1))
    let usern=accessInfo(en('username',date1))
    let email= accessInfo(en('email',date1))
    let logged= accessInfo(en('logged',date1))
    if (pasw && phone && usern && email && logged=='true'){
        
        if (!(pstate=='cost' || pstate=='login' || pstate=='verify' || pstate=='register' || pstate=='BTS'|| pstate=="logged")){window.location.assign('../logged')};
        pstate=accessInfo(en('state',date2))
         pasw=de(accessInfo(en('password',date1)),date1)
         phone=de(accessInfo(en('phone',date1)),date1)
         usern=de(accessInfo(en('username',date1)),date1)
         email= de(accessInfo(en('email',date1)),date1)
         logged= accessInfo(en('logged',date1))
        let username= document.getElementById('username');
        let emailA= document.getElementById('email');
        let phonen= document.getElementById('phone');
        let password= document.getElementById('password');
        emailA.textContent=email
        phonen.textContent=phone
        username.textContent=usern
        password.textContent=pasw
    const emailC=email
    if (emailC){
        // alert(emailC)
        // document.querySelector('.eml').textContent = emailC
    }else{
        
        window.location.assign('../login')
    }
    let dataC={ email_P: emailC + "+check"  }
    
    fetch(line+'/resend_c', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataC)
    })
    .then(response => response.json())
    .then(data => {
        if (data.message=='verified'){
        let status= document.getElementById("verified-status")
        status.textContent='Verified'
        status.style.color='rgb(0,255,0)'
    
        }
        if(data.message=='Nverified'){
            let status= document.getElementById("verified-status")
            status.textContent='Not Verified'
            status.style.color='rgb(255,0,0)'
            status.style.cursor='pointer'
            status.style.textDecoration='underline'
            status.addEventListener('mouseover',()=>{
                status.style.color='white'
                status.style.textDecoration='none'
            })
            status.addEventListener('mouseout',()=>{
                status.style.color='red'
                status.style.textDecoration='underline'
            })
            status.addEventListener('click',()=>{
                window.location.assign('../../verify')
            })
    

        }

       
    })
    .catch(error => {
        console.log(error)
        let status= document.getElementById("verified-status")
        status.textContent='unknown'
        status.style.color='yellow'
       
    
    });
    
       

    
    }
    else{window.location.assign("../index.html")}
        
    
})


let intervalId = setInterval(() => {
    let st=document.getElementById("verified-status")

    
       
    if (!(st.textContent=='unknown')) {
        console.log("Condition met! Stopping the loop.");
        clearInterval(intervalId); // Stop the loop
    }else{
        if (!st.textContent=='checking'){
        st.textContent='checking'
        let emailC2=  de(accessInfo(en('email',date1)),date1)
        let dataC={ email_P: emailC2 + "+check"  }
        fetch(line+'/resend_c', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataC)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message=='verified'){
            let status= document.getElementById("verified-status")
            status.textContent='Verified'
            status.style.color='rgb(0,255,0)'
        
            }
            if(data.message=='Nverified'){
                let status= document.getElementById("verified-status")
                status.textContent='Not Verified'
                status.style.color='rgb(255,0,0)'
                status.style.cursor='pointer'
                status.style.textDecoration='underline'
                status.addEventListener('click',()=>{
                    window.location.assign('../../verify')
                })
        
    
            }
    
           
        })
        .catch(error => {
            console.log(error)
            let status= document.getElementById("verified-status")
            status.textContent='unknown'
            status.style.color='yellow'
           
        
        });
    }
     
    }
}, 7000);

// let con=document.querySelector(".loading-container");

