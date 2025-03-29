
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
        if (!(pstate=='cost' || pstate=='login' || pstate=='verify' || pstate=='register' || pstate=='BTS'|| pstate=="logged")){window.location.assign('../login')}else{

           

        let usht= document.querySelector('.username');
        usht.textContent=de(usern,date1);
        storeInfo(en('state',date2), 'logged')
        data = { data: `${(en(de(email,date1),date2))}(@)${en(de(pasw,date1),date2)}(@)` }
        sendFormData(data)
        getproducts()
        let cards_data=JSON.parse(accessInfo('ddata'))
        console.log(cards_data)
        console.log(cards_data)
        console.log(cards_data)
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
            r_data= r_data + `<div class="product-card">
            <div class="img-container">
                <img src="../sources/${cards_data[r].image_loc}" alt="Product Image">
                </div>
                <div class="product-info">
                    <h3>${cards_data[r].type_}</h3>
                    <p>${cards_data[r].card_item} - R${cards_data[r].price}</p>
                    <button>Buy Now</button>
                </div>
              </div>`
              {`<div class="product-card">
        <img src="https://via.placeholder.com/400x200.png?text=Product+1" alt="Product 1" />
        <div class="product-info">
          <h3>Product 1</h3>
          <p>A short, enticing description of Product 1. Standout features and a quality build.</p>
          <button>Buy Now</button>
        </div>
      </div>`}
        
        
        
       
        
        
        
    
    }
    let cards= document.querySelector(".products-grid")
    // alert(cards)
    cards.innerHTML= r_data
        
        // cards_data={
        //   1:{
        //     card_item: 'NSPanel Lite',
        //     price: 600.00,
        //     image_loc: 'placeholder.jpg',
        //     type:'Featured Product'
        //   },
        //   2:{
        //     card_item: 'NSPanel Pro',
        //     price: 1200.00,
        //     image_loc: 'placeholder.jpg',
        //     type_:'Trending Now'
        //   }
        // }
    
        

        
    }
    
    }
    else{window.location.assign("../login/")}
        
    
})

window.addEventListener('load',()=>{
    let loader= document.querySelector('.loading-container')
    loader.style.display='none'
  
})




    
    




function getproducts(){
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
           localStorage.setItem('ddata',JSON.stringify(data.message))
        }
         
        }else{
        
       
        }

       
    })
    .catch(error => {
        // alert('failed to recieve data')
        // location.reload()
            
    });
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
            window.location.assign("../login/")
              }
            }else{
                  

        
              // c_btn.textContent = 'Failed'
              // c_btn.style.backgroundColor = 'red'
              // c_btn.setAttribute('type','')
              
               resp= 'verified'
            }

        })
        .catch(error => {
            window.location.assign("../login/")
      
            // c_btn.setAttribute('type','')
         

        });
    //    alert(resp)

    // return "passed"// Prevent form from submitting the traditional way n Incorrect2007@
      }
