
window.addEventListener('DOMContentLoaded',()=>{
    let date2=18
    let date1=17
    const pstate=accessInfo(en('state',date2))
    const pasw=accessInfo(en('password',date1))
    const phon=accessInfo(en('phone',date1))
    const usern=accessInfo(en('username',date1))
    const email= accessInfo(en('email',date1))
    const logged= accessInfo(en('logged',date1))
    if (pasw && phon && usern && email && logged=='true'){
        if (!(pstate=='cost' || pstate=='login' || pstate=='verify' || pstate=='register' || pstate=='BTS'|| pstate=="logged")){window.location.assign('../login')};
        let usht= document.querySelector('.username');
        usht.textContent=de(usern,date1);
        storeInfo(en('state',date2), 'logged')
    
    }
    else{window.location.assign("../login/")}
        
    
})

window.addEventListener('load',()=>{
    let loader= document.querySelector('.loading-container')
    loader.style.display='none'
    
    
})
// let con=document.querySelector(".loading-container");

