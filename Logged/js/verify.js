
window.addEventListener('load',()=>{
    let dmcon = accessInfo("domaContent2")
    let givendt = accessInfo('domaContentdate2')
    let ons= accessInfo('online') 
    let dd=accessInfo(en('logged',17))
    if (givendt) {
        checkTimeDifference(givendt, onThresholdMet);
    }
    if (dmcon && ons=='true' && dd=='true' && accessInfo(en('password',17)) && accessInfo(en('username',date1)) ) {
    
        document.body.innerHTML = dmcon
    
    }else{

    let date2=18
    let date1=17
    const pstate=accessInfo(en('state',date2))
    const pasw=accessInfo(en('password',date1))
    const phone=accessInfo(en('phone',date1))
    const usern=accessInfo(en('username',date1))
    const email= accessInfo(en('email',date1))
    const logged= accessInfo(en('logged',date1))

    if (pasw && phone && usern && email && logged=='true'){
        if (!(pstate=='cost' || pstate=='login' || pstate=='verify' || pstate=='register' || pstate=='BTS'|| pstate=="logged" || pstate=="Dboard")){window.location.assign('../login')}else{

           

        let usht= document.querySelector('.username');
        usht.innerHTML=de(usern,date1);
        storeInfo(en('state',date2), 'logged')
        data = { data: `${(en(de(email,date1),date2))}(@)${en(de(pasw,date1),date2)}(@)` }
       
        sendFormData(data)
        getproducts()
        let cards_data=JSON.parse(accessInfo('ddata'))
        // console.log(cards_data)
        // console.log(cards_data)
        // console.log(cards_data)
        console.log(cards_data)
        console.log('hey')
        if(cards_data){
        // alert('incorporating data')

        }
        else{
        // alert('failed to use data data')
        
    }
        let r_data='';
        for (r in cards_data){
            r_data= r_data + `<div class="c2" style="background-image: url('../sources/${cards_data[r].image_loc}');">
    <div class="overlay">
      <div class="content">
        <h2>${cards_data[r].type_}</h2>
        <div class="match">${cards_data[r].match}</div>
      </div>
      <div class="footer">
        <div class="btn-wrapper">
          <button class='bwin'>Win</button>
          <div class="progress">
            <span class="percentage">${cards_data[r].win}%</span>
            <div class="progress-bar winp" style="width: ${cards_data[r].win}%;"></div>
          </div>
        </div>
       
        <div class="btn-wrapper">
          <button class='bdraw'>Draw</button>
          <div class="progress">
            <span class="percentage">${cards_data[r].draw}%</span>
            <div class="progress-bar drawp" style="width: ${cards_data[r].draw}%;"></div>
          </div>
        </div>
         <div class="btn-wrapper">
          <button class='blose'>win</button>
          <div class="progress">
            <span class="percentage">${cards_data[r].lose}%</span>
            <div class="progress-bar losep" style="width: ${cards_data[r].lose}%;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>`
             
        
        
        
       
        
        
        
    
    }
    let cards= document.querySelector(".products-grid")
    // alert(cards)
    // cards.innerHTML= r_data
        
      
    
        

        
    }
    
    }
    else{window.location.assign("../login/index.html")}
        
    
}})

window.addEventListener('load',()=>{
    let loader= document.querySelector('.loading-container')
    if (loader){
    loader.style.display='none'}
    if (document.querySelector('.products-grid')){
   if (document.querySelector('.products-grid').innerHTML=='<div class="loading-dots"><div></div><div></div><div></div></div>'){
    // Call the function
    
    waitForSixtySeconds();
   
   }}

   // Side Menu Toggle Script
let menu_img = document.querySelector(".menu");
let menu = document.querySelector(".closed");

menu_img.addEventListener("click", () => {
    if (menu_img.textContent == "Menu") {
        menu_img.textContent = "Close";
    } else {
        menu_img.textContent = "Menu";
    }
    menu_img.classList.toggle("pink");

    menu.classList.toggle("open");


})
 

const header = document.querySelector("header");
let val=0;
// let w= window.scrollY
// window.addEventListener("scroll", () => {
//   if (window.scrollY > w) {
//     val=val+2;
//     header.style.backgroundColor = "rgba(0,0,0,0."+ String(val)+ ")";
//     w= window.scrollY
//   } else {
//     val=val-2;
//     header.style.backgroundColor = "rgba(0,0,0,0."+ String(val)+ ")";
//     w= window.scrollY
//   }
// });


  
})


function waitForSixtySeconds() {
    console.log("Waiting for 60 seconds...");
    setTimeout(() => {
        // location.reload(true)
        getproducts2()
    }, 3000); // 60000 milliseconds = 60 seconds
}




    
    



function getproducts2(){
    // alert('fetching')
    fetch(line+ '/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({message:'Logged'})
    })
    .then(response => response.json())
    .then(data => {
        if (true){
            if (data.message){

           console.log(data.message)
        //    alert('data recieved')
        let cards_data=data.message
        // console.log(cards_data)
        // console.log(cards_data)
        // console.log(cards_data)
        console.log(cards_data)
        console.log('hey')
        if(cards_data){
        // alert('incorporating data')

        }
        else{
        // alert('failed to use data data')
        
    }

        let r_data='';
        for (r in cards_data){
            r_data= r_data + `<div class="c2" style="background-image: url('../sources/${cards_data[r].image_loc}');">
    <div class="overlay">
      <div class="content">
        <h2>${cards_data[r].type_}</h2>
        <div class="match">${cards_data[r].match}</div>
      </div>
      <div class="footer">
        <div class="btn-wrapper">
          <button class='bwin'>Win</button>
          <div class="progress">
            <span class="percentage">${cards_data[r].win}%</span>
            <div class="progress-bar winp" style="width: ${cards_data[r].win}%;"></div>
          </div>
        </div>
       
        <div class="btn-wrapper">
          <button class='bdraw'>Draw</button>
          <div class="progress">
            <span class="percentage">${cards_data[r].draw}%</span>
            <div class="progress-bar drawp" style="width: ${cards_data[r].draw}%;"></div>
          </div>
        </div>
         <div class="btn-wrapper">
          <button class='blose'>win</button>
          <div class="progress">
            <span class="percentage">${cards_data[r].lose}%</span>
            <div class="progress-bar losep" style="width: ${cards_data[r].lose}%;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>`


            
        
        
        
       
        
        
        
    
    }
    let cards= document.querySelector(".products-grid")

    cards.innerHTML= r_data
    // let users= document.querySelectorAll('.users_')
//   users.forEach(element => {
//     element.addEventListener('click',()=>{
//       var id= element.getAttribute('id').split('-')[1]
//       window.location.assign(`dashboards/About--${cards_data[id].price}`)
      

//     })
    
//   });
        
    
        }
         
        }else{
        
       
        }

       
    })
    .catch(error => {

        console.log('failed to recieve data')
            
    });
}
function getproducts(){
    // alert('fetching')
    
}
// let con=document.querySelector(".loading-container");




function sendFormData(data) {
    // Send data to Flask application using fetch
    console.log(data)
    const http = line + "/login";
    fetch(http, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
        .then(response => {

            if (!response.ok) 
                { throw new Error("Something went wrong, Please try again!");
                    
                } 
                
                return response.json();

        })
        .then(data => {
            console.log("Data from server:", data);
            reg_h=document.querySelector('.reg_h')
            if (data['message']=='Login failed!'){
              if (data['reason']=='incorrect details'){
            window.location.assign("../login/index.html")
              }
            }else{
                  

        
              // c_btn.textContent = 'Failed'
              // c_btn.style.backgroundColor = 'red'
              // c_btn.setAttribute('type','')
              
               resp= 'verified'
            } 

        })
        .catch(error => {
            window.location.assign("../login/index.html")
      
            // c_btn.setAttribute('type','')
         

        });
    //    alert(resp)

    // return "passed"// Prevent form from submitting the traditional way n Incorrect2007@
      };



      function saveDOMBeforeReload() {
        window.addEventListener('beforeunload', function () {
            try {
                // Get the current DOM content
                if (accessInfo('online')=='true' && accessInfo(en('logged',17))=='true') {
                const domContent = document.body.innerHTML;
                const exampleDate = new Date();
                // Save it in local storage
                localStorage.setItem('domContent2', domContent);
                localStorage.setItem('domContentdate2', exampleDate);
                localStorage.setItem('main_state2', main_state);
    
                console.log('DOM content saved before reload!');}
            } catch (error) {
                console.error('Error saving DOM content:', error);
            }
        });
    }
    
    // Call the function to start listening for reloads
    saveDOMBeforeReload();
    function checkTimeDifference(dateGiven, callbackFunction) {
        const currentTime = dateGiven; // Get the current date and time
        const givenTime = new Date(dateGiven); // Convert the given date to a Date object
    
        // Calculate the time difference in milliseconds
        const timeDifference = currentTime - givenTime;
    
        // Check if the time difference is 2 minutes or more (10 minutes = 600,000 milliseconds)
        if (timeDifference >= 120000) {
            ; // Call the provided function
            localStorage.setItem('domContent2', '')
            localStorage.setItem('domContentdate2', '')
            localStorage.setItem('main_state2', '')
        } else {
            console.log('The 10-minute threshold has not yet been reached.');
        }
    }
    
    // Example usage:
    // Define the function to execute
    function onThresholdMet() {
        console.log('10 minutes have passed since the given date!');
    }    