
window.addEventListener('load',()=>{
    let date2=18
    let date1=17
    const pstate=accessInfo(en('state',date2));
    const pasw=accessInfo(en('password',date1));
    const grade=accessInfo(en('grade',date1));
    const usern=accessInfo(en('username',date1));
    const email= accessInfo(en('email',date1));
    const logged= accessInfo(en('logged',date1));
    

    if (pasw && grade && usern && email && logged=='true'){
        if (!(pstate=='cost' || pstate=='login' || pstate=='verify' || pstate=='register' || pstate=='BTS'|| pstate=="logged" || pstate=="Dboard")){window.location.assign('../../login')}else{
            storeInfo(en('state',date2), 'Dboard')
            let data__ = { data: `${(en(de(email,date1),date2))}(@)${en(de(pasw,date1),date2)}(@)` }
            sendFormData(data__)

        }
    }




    setInterval(getChats,5000)
    
})



function getChats(){
    let usernn= de(accessInfo(en('username',date1)),date1)
fetch(line+ '/chats', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({message:'chats',username:usernn,ctype:'grade-12-open'})
})
.then(response => response.json())
.then(data => {
    let chatBody3=document.getElementById('chatBody');
    if(chatBody3.innerHTML==data.message){}else{
        chatBody3.innerHTML=data.message
    }
     
   
  

   
})
.catch(error => {
    console.log('failed to recieve data')
    // location.reload()
        
});}



function sendmes(message_){
    let usernn= de(accessInfo(en('username',date1)),date1)
    fetch(line+ '/chatssendm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({message: message_,username:usernn,ctype:'grade-12-open'})
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message)
        let chatInput2=document.getElementById('chatInput');
        let chatBody2=document.getElementById('chatBody');
        let messageElem2 = document.createElement('div');
        messageElem2.classList.add('message', 'message-self');
        messageElem2.innerHTML = `<div class="sender">You</div><div class="bubble">${message_}</div>`;
        chatBody2.appendChild(messageElem2);
        chatBody2.scrollTop = chatBody2.scrollHeight;
        chatInput2.value = "";
       
    })
    .catch(error => {
        console.log('failed to send data')
        // location.reload()
            
    });}