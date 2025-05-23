
    // Object to store HTML content for each tab
    let mcont=document.querySelector('.container22')

    let rliadt=[]
    storeInfo('mode','black')
    

    let tod= document.getElementById('today')
    let yes= document.getElementById('analysis')
    
    let predicter= document.getElementById('predicter')
    let statec= 'today'
    let on=''
    let mstate='main'
    let main=document.getElementById('Dashboard')
    let bts=document.getElementById('BTS')
    let main_state="individual_matches"
    let state2_='individual_matches'
    let change=true
    let predicter_innerhtml=`
                  <div class="container33">

        <div class="holder">
          <div id="cencon" class="container-bts">
            <div class="form">
              <div class="cap">TechNified Predictions <span id="M">M</span>.<span id="T">T</span>.<span id="E">E</span></div>
              <label id='label33' style='font-size: small' for="input"
                >Match:
                <input
                  id="input" style='font-size: small; min-width: 75%;'
                  placeholder="Liverpool vs Chealsea"
                  type="text"
                  minlength="4"
              /></label>
              <button class="btn btn33" onclick="predict()" >Predict</button>
             
             
            </div>
          </div>
          
          <div>
            <div class="output"></div>
            <div class="progress-container hide">
        <div class="progress-bar" id="progress-bar">50%</div>
    </div>
    <div class="progress-label hide">Progress: <span id="progress-text">50%</span></div>
    
          </div>
        </div>
      </div>`
    
    tod.addEventListener('click',()=>{
      statec= 'today'
      storeInfo('statec',statec)
    
      updatecontent()
      
      

    })
    yes.addEventListener('click',()=>{
      statec='analysis'
      storeInfo('statec',statec)
     

    })
  
    predicter.addEventListener('click',()=>{
      statec='predicter'
      storeInfo('statec',statec)
    
    })
    let statec_=accessInfo('statec')
   
   
    let contentMap = {
      today: `<div  class="products-grid c1"><div class="loading-dots"><div></div><div></div><div></div></div></div>`,
      analysis: `
      <div class='lineg'>
          <div class='light-mode' id='gfl'>

            <div id='c-btn_344' class="theme-toggle">
                <span class="toggle-label">Theme Changer</span>
                <label class="switch">
                  <input type="checkbox" id="themeSwitcher">
                  <span class="slider"></span>
                </label>
            </div>

           <div id="remain" class="container66">
              <div class="construction-box">
                <!-- Animated SVG (worker helmet style) -->
                <svg fill="#f8b500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                  <path d="M32 2a14 14 0 0 0-14 14v2H8a2 2 0 0 0-2 2v11a20 20 0 0 0 40 0V20a2 2 0 0 0-2-2h-10v-2A14 14 0 0 0 32 2zM20 16a12 12 0 0 1 24 0v2H20v-2zM10 22h12v8a2 2 0 0 0 4 0v-8h12v8a2 2 0 0 0 4 0v-8h12v9a18 18 0 0 1-36 0v-9z"/>
                  <circle cx="22" cy="50" r="2"/>
                  <circle cx="42" cy="50" r="2"/>
                  <path d="M32 58c-7 0-14-1.5-14-4v-2a2 2 0 0 1 4 0c0 .3 3 2 10 2s10-1.7 10-2a2 2 0 0 1 4 0v2c0 2.5-7 4-14 4z"/>
                </svg>
            
                <div class="message">Section is still under construction..</div>
              </div>

            </div>
          
          

          </div>
      
    


      </div>


      
      `,
      tips: `<h2>Tips</h2>
             <p>Here are some valuable tips. These tips will help you to improve your predictions by learning from data and expert insights.</p>`,
      predicter: `
                  <div class="container33">

        <div class="holder">
          <div id="cencon" class="container-bts">
            <div class="form">
              <div class="cap">TechNified Predictions <span id="M">M</span>.<span id="T">T</span>.<span id="E">E</span></div>
              <label id='label33' for="input"
                >Match:
                <input
                  id="input"
                  placeholder="Liverpool vs Chealsea"
                  type="text"
                  minlength="4"
              /></label>
              <button class="btn btn33" onclick="predict()" >Predict</button>
             
             
            </div>
          </div>
          
          <div>
            <div class="output"></div>
            <div class="progress-container hide">
        <div class="progress-bar" id="progress-bar">50%</div>
    </div>
    <div class="progress-label hide">Progress: <span id="progress-text">50%</span></div>
    
          </div>
        </div>
      </div>`
    };

     if (statec_){
      if (statec=='today'){
        tod.click()

      }
      if (statec_=='analysis'){
         yes.click()


      }
      if (statec_=='predicter'){
      predicter.click()

      }
    }
    
  
    // Function to switch content based on clicked tab
    function switchContent(tab) {
      // Update the content area with the corresponding HTML
      if (tab==statec){
        return false
      }
      if (!(contentMap[tab]==predicter_innerhtml) && tab=='predicter'){
        document.getElementById('contentArea').innerHTML=predicter_innerhtml
        change=true
      }else{
      document.getElementById('contentArea').innerHTML = contentMap[tab]
      change=false;}

  if (tab=='predicter'){
        
        let qry = document.getElementById("input");
        let cont= document.getElementById('contentArea');
        cont.setAttribute('style','')
        let out_ = document.querySelector(".output");
        if (out_.innerHTML==''){
          cont.classList.add('shiningBG')
        }
        if (!change){
        cont.classList.add('shiningBG')}
        let btn33=document.querySelector('.btn33')
        let label33=document.getElementById('label33')
        let M = document.getElementById("M");
        let T = document.getElementById("T");
        let E = document.getElementById("E");
        if (true){
          if(main_state=='individual_matches'){
            
            state2_='individual_matches'
            M.style.color='#007BFF'
            T.style.color='unset'
            E.style.color='unset'
            main_state="individual_matches"
            qry.setAttribute('class', '');
            label33.style.display = 'unset';
            qry.style.display='unset'
            qry.setAttribute("placeholder", "Liverpool vs Chelsea");
            btn33.style.transform = 'scale(1)';
            btn33.textContent = 'Submit';
            btn33.style.marginBottom="unset"
            btn33.style.marginTop="20px"
          }
          if (main_state=='wining_matches'){
           
            state2_='wining_matches'
            E.style.color='#007BFF'
            T.style.color='unset'
            M.style.color='unset'
            main_state='wining_matches'
            qry.setAttribute('class', '');
            label33.style.display = 'unset';
            qry.style.display='unset'
            qry.setAttribute("placeholder", "E.g Country-China");
          
            btn33.style.transform = 'scale(1)';
            btn33.textContent = 'Submit';
            btn33.style.marginBottom="unset"
            btn33.style.marginTop="20px"
          }
          if (main_state=='premium'){
            predicter_innerhtml=cont.innerHTML
            state2_='premium'
            T.style.color='#007BFF'
            M.style.color='unset'
            E.style.color='unset'
            main_state="premium"
            qry.style.display='none'

        
           
            qry.setAttribute("placeholder", "");
            qry.setAttribute('class', 'Removebtn');
          
           
            btn33.textContent = 'Initiate';
            btn33.style.marginBottom="20px"
            btn33.style.marginTop="-4px"
            btn33.style.transform = 'scale(2)';
      
            label33.style.display = 'none';
          }
      }
      
        
        qry.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') { predict();}});
       
       if (!change){
        M.style.color='#007BFF'
       
      }
        M.style.cursor="pointer"
        T.style.cursor="pointer"
        E.style.cursor="pointer"
       
        M.addEventListener('click',()=>{
            predicter_innerhtml=cont.innerHTML
            state2_='individual_matches'
            M.style.color='#007BFF'
            T.style.color='unset'
            E.style.color='unset'
            main_state="individual_matches"
            qry.setAttribute('class', '');
            label33.style.display = 'unset';
            qry.style.display='unset'
            qry.setAttribute("placeholder", "Liverpool vs Chelsea");
            btn33.style.transform = 'scale(1)';
            btn33.textContent = 'Submit';
            btn33.style.marginBottom="unset"
            btn33.style.marginTop="20px"
            // predicter_innerhtml=cont.innerHTML
        })
        E.addEventListener('click',()=>{
          predicter_innerhtml=cont.innerHTML
            state2_='wining_matches'
            E.style.color='#007BFF'
            T.style.color='unset'
            M.style.color='unset'
            main_state='wining_matches'
            qry.setAttribute('class', '');
            label33.style.display = 'unset';
            qry.style.display='unset'
            qry.setAttribute("placeholder", "E.g Country-China");
          
            btn33.style.transform = 'scale(1)';
            btn33.textContent = 'Submit';
            btn33.style.marginBottom="unset"
            btn33.style.marginTop="20px"
        })
        T.addEventListener('click',()=>{
            predicter_innerhtml=cont.innerHTML
            state2_='premium'
            T.style.color='#007BFF'
            M.style.color='unset'
            E.style.color='unset'
            main_state="premium"
            qry.style.display='none'

        
           
            qry.setAttribute("placeholder", "");
            qry.setAttribute('class', 'Removebtn');
          
           
            btn33.textContent = 'Initiate';
            btn33.style.marginBottom="20px"
            btn33.style.marginTop="-4px"
            btn33.style.transform = 'scale(2)';
      
            label33.style.display = 'none';
          
        })
        
        
        

       
      }else{
       
        let cont= document.getElementById('contentArea')
        cont.classList.remove('shiningBG')
     

        if (tab=='analysis'){
          let area= document.getElementById('contentArea')
          area.style.flexDirection='column'
          document.getElementById('themeSwitcher').addEventListener('change', function () {
            if(accessInfo('stmode')=='on'){
              storeInfo('stmode','off')
              
            }else{
              storeInfo('stmode','on')

            }
        if (accessInfo('mode')=='black'){
       
       mode='white'
       storeInfo('mode',mode)
       document.getElementById('gfl').style.backgroundColor='black'
       document.getElementById('c-btn_344').style.backgroundColor='black'
       document.getElementById('contentArea').style.backgroundColor='black'
   

    }else{
  
       mode='black'
       storeInfo('mode',mode)
       document.getElementById('gfl').style.backgroundColor='transparent'
         document.getElementById('c-btn_344').style.backgroundColor='transparent'
   
        document.getElementById('contentArea').style.backgroundColor='transparent'
    

    }
      
  

       
    
      
      });
      if (accessInfo('stmode')){
        if(accessInfo('stmode')=='on'){
          document.getElementById('themeSwitcher').click()
      storeInfo('stmode','on')
        }
      }else{

      document.getElementById('themeSwitcher').click()
      storeInfo('stmode','on')
    }

          // getproducts3(color1,darkBod,darkBod2,darkBack,darkBack2)



  

          // alert('done')
          }else{
            let cont1= document.getElementById('contentArea');
            cont1.setAttribute('style','')
          }
      }
      // Update active styling for header items
      const headers = document.querySelectorAll('.header div');
      headers.forEach(header => {
        if (header.id === tab) {
          header.classList.add('active');
        } else {
          header.classList.remove('active');
        }
      });
    }
    
    function predict() {


  let qry = document.getElementById("input");
  
  let btn = document.querySelector('.btn33');
  let cencon = document.getElementById("cencon");
  let out = document.querySelector(".output");
  let cont= document.getElementById('contentArea')
  if (true){
   
  }
  
    out.innerHTML=''

    
    cont.classList.add('shiningBG')
  

  let holder = document.querySelector(".holder");

  let bordero = out.style.border;
  let inno = out.innerHTML;
   if (main_state == "premium") {
    qry.value='premium'
   }
  
  
  

if (qry.value ) {
    // qry.setAttribute("placeholder","e.g. " + qry.value)
    // qry.value="";
    cont.classList.add('shiningBG')
    let color = btn.style.color;
    let text = btn.textContent;
    let bgcolor = btn.style.backgroundColor;
    let animation = btn.style.animationName
    btn.textContent = "Loading";
    btn.style.color = "#000"
    btn.style.backgroundColor = "#FFFFFF";
    btn.style.animationName = "rotate";
    btn.style.animationDuration = "1s"
    btn.style.timingFunction = "ease-in-out"
    btn.style.animationIterationCount = "infinite"
    btn.style.cursor = "wait"

    //cecon
    let colorc = cencon.style.color;
    let textc = cencon.textContent;
    let bgcolorc = cencon.style.backgroundColor;
    let animationc = cencon.style.animationName

    cencon.style.color = "#000"
    cencon.style.backgroundColor = "#FFFFFFF";
    cencon.style.animationName = "rotate";
    cencon.style.animationDuration = "1s"
    cencon.style.timingFunction = "ease-in-out"
    cencon.style.animationIterationCount = "infinite"
    //holder
    holder.classList.remove("flex")
    //input border

    out.style.border = bordero
    out.innerHTML = inno
    // var data = {

    // message: String(value)

    // };
    


    let http;
    
 
    
    if (main_state == "wining_matches") {
        http = line+ "/receive_message";

    }
    if (main_state == "individual_matches") {
        http = line+"/individual_receive_message";
    }
    if (main_state == "premium") {
        http = line+"/premium";
        qry.value='premium'
     
    
    }
    console.log(http)
    fetch(http, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(qry.value)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("<span id='red'>Something went wrong, Please try again!</span>");



            }
            btn.style.cursor = "pointer"
            btn.style.color = color;
            btn.textContent = text;
            btn.style.backgroundColor = bgcolor;
            btn.style.animationName = animation;
            //holder
            holder.classList.add("flex")

            //ceco
            cencon.style.color = colorc;
            cont.classList.remove('shiningBG')

            cencon.style.backgroundColor = bgcolorc;
            cencon.style.animationName = animationc;
            // out.style.border="2px solid rgba(65,25,65)"
            out.innerHTML = "<span id='green'>Loading (received) Content</span>"
            return response.json();
        })
        .then(data => {
            // console.log("data from server:", data)
            if (main_state == "wining_matches") {
                res = data.results;
                if (res=='<span id="red">You did not login!</span>'){
                  logout()
                }
            }
            if (main_state == "individual_matches" || main_state == "premium") {
                res = data.response;
                if (res=='<span id="red">You did not login!</span>'){
                  logout()
                }

            }


            console.log(res)
            

            btn.style.cursor = "pointer"
            btn.style.color = color;
            btn.textContent = text;
            btn.style.backgroundColor = bgcolor;
            btn.style.animationName = animation;
            //holder
            holder.classList.add("flex")

            //ceco
            cencon.style.color = colorc;

            cencon.style.backgroundColor = bgcolorc;
            cencon.style.animationName = animationc;
            // out.style.border="2px solid rgba(65,25,65)"
        
            out.innerHTML = res
            
            cont.classList.remove('shiningBG')
            predicter_innerhtml=cont.innerHTML
        })
        .catch(error => {
            console.log("something wrong with the response", error)
            if (String(error) == "SyntaxError: Unexpected end of JSON input") {
                error = "Content being updated in the server, please try again later!"
            }
            cont.classList.add('shiningBG')
            btn.style.cursor = "pointer";
            btn.style.color = color;
            btn.textContent = text;
            btn.style.backgroundColor = bgcolor;
            btn.style.animationName = animation;
            //ceco
            cencon.style.color = colorc;
            

            cencon.style.backgroundColor = bgcolorc;
            cencon.style.animationName = animationc;
            // out.style.border="2px solid rgba(65,25,65)"
            out.innerHTML = error;
    
            holder.classList.add("flex");
            
            
        });


}

}
 
function longRunningTask() {
    console.log("Starting task...");
    let pcon = document.querySelector('.progress-container');
    let plabel = document.querySelector('.progress-label');
    let ptext = document.getElementById('progress-text');
    let pbar = document.getElementById('progress-bar');
    let out2 = document.querySelector(".output");
    pcon.classList.add('hide')
    plabel.classList.add('hide')
    ptext.textContent = "0" + '%'
    pbar.textContent = "0" + '%'
    pbar.style.width = "0" + '%'
    
    setTimeout(() => {
        console.log("Task running...");

        let value2=de(accessInfo(en('username',date1)),date1)
        out2.innerHTML=''
        let intervalID = setInterval(() => {

            fetch(line +'/status', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(value2)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("<span id='red'>Something went wrong, Please try again!</span>");
        
        
        
                    }
                   
                
                    return response.json();
                })
                .then(data => {
                     
                  pcon.classList.remove('hide')
                  plabel.classList.remove('hide')
                  ptext.textContent = data.progress + '%'
                  pbar.textContent = data.progress + '%'
                  pbar.style.width = data.progress + '%'
                  if (data.progress=='100'){
                    clearInterval(intervalID);
                    pcon.classList.add('hide')
                    plabel.classList.add('hide')
                    ptext.textContent = '0%'
                    pbar.textContent = '0%'
                    pbar.style.width = '0%'
                  }
    
    
                })
                .catch(error => {
                    clearInterval(intervalID);
                    pcon.classList.add('hide')
                    plabel.classList.add('hide')
                    ptext.textContent = '0%'
                    pbar.textContent = '0%'
                    pbar.style.width = '0%'
                    
                   
            
                });
         
        }
        
        ,   8000);

       
        
    }, 4000); // Runs after 2 seconds, but doesn’t block execution

    console.log("Function call ended, but task is still running.");
}