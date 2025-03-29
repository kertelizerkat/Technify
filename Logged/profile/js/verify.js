
window.addEventListener('DOMContentLoaded',()=>{
    let date2=18
    let date1=17
    let pstate=accessInfo(en('state',date2))
    let pasw=accessInfo(en('password',date1))
    let phon=accessInfo(en('phone',date1))
    let usern=accessInfo(en('username',date1))
    let email= accessInfo(en('email',date1))
    let logged= accessInfo(en('logged',date1))
    if (pasw && phon && usern && email && logged=='true'){
        
        if (!(pstate=='cost' || pstate=='login' || pstate=='verify' || pstate=='register' || pstate=='BTS'|| pstate=="logged")){window.location.assign('../logged')};
        pstate=accessInfo(en('state',date2))
         pasw=de(accessInfo(en('password',date1)),date1)
         phon=de(accessInfo(en('phone',date1)),date1)
         usern=de(accessInfo(en('username',date1)),date1)
         email= de(accessInfo(en('email',date1)),date1)
         logged= accessInfo(en('logged',date1))
        let username= document.getElementById('username');
        let emailA= document.getElementById('email');
        let phone= document.getElementById('phone');
        let password= document.getElementById('password');
        emailA.textContent=email
        phone.textContent=phon
        username.textContent=usern
        password.textContent=pasw
       

    
    }
    else{window.location.assign("../")}
        
    
})


// let con=document.querySelector(".loading-container");

