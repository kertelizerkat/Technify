
    // Object to store HTML content for each tab
    let mcont=document.querySelector('.container22')
    

    let tod= document.getElementById('today')
    let yes= document.getElementById('yesterday')
    
    let predicter= document.getElementById('predicter')
    let statec= 'today'
    let on=''
    let mstate='main'
    let main=document.getElementById('Dashboard')
    let bts=document.getElementById('BTS')
    let main_state="individual_matches"
    let state2_='individual_matches'
    
    tod.addEventListener('click',()=>{
      statec= 'today'
    
      updatecontent()
      
      

    })
    yes.addEventListener('click',()=>{
      statec='yesterday'
     

    })
  
    predicter.addEventListener('click',()=>{
      statec='predicter'
    
    })
   
    let contentMap = {
      today: `<div  class="products-grid c1"><div class="loading-dots"><div></div><div></div><div></div></div></div>`,
      yesterday: `
`,
      tips: `<h2>Tips</h2>
             <p>Here are some valuable tips. These tips will help you to improve your predictions by learning from data and expert insights.</p>`,
      predicter: `
                  <div class="container33">

        <div class="holder">
          <div id="cencon" class="container-bts">
            <div class="form">
              <div class="cap">TechNified Predictions <span id="M">M</span>.<span id="T">T</span>.<span id="E">E</span></div>
              <label for="input"
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
            <div class="output">
              <!-- info -->
                
  
              <!-- end of info -->
            </div>
            <div class="progress-container hide">
        <div class="progress-bar" id="progress-bar">50%</div>
    </div>
    <div class="progress-label hide">Progress: <span id="progress-text">50%</span></div>
    
          </div>
        </div>
      </div>`
    };
    
    function updatecontent(){
      console.log(statec)
      if ( statec=='today'){
        if( document.querySelector('.products-grid').innerHTML==`<div class="loading-dots"><div></div><div></div><div></div></div>`){
        setTimeout(() => {
        
        // location.reload(false)
        getproducts2()
    } 
    , 3000)
     

      }else{
        return false
      }
    }else{
      return false
    }
  }
    // Function to switch content based on clicked tab
    function switchContent(tab) {
      // Update the content area with the corresponding HTML
      if (tab==statec){
        return false
      }
      
      document.getElementById('contentArea').innerHTML = contentMap[tab];
  if (tab=='predicter'){
        let qry = document.getElementById("input");
        qry.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') { predict();}});
        let M = document.getElementById("M");
        let T = document.getElementById("T");
        let E = document.getElementById("E");
        M.style.color='#007BFF'
        M.style.cursor="pointer"
        T.style.cursor="pointer"
        E.style.cursor="pointer"
        main_state="individual_matches"
        M.addEventListener('click',()=>{
            state2_='individual_matches'
            M.style.color='#007BFF'
            T.style.color='unset'
            E.style.color='unset'
            main_state="individual_matches"
        })
        E.addEventListener('click',()=>{
            state2_='wining_matches'
            E.style.color='#007BFF'
            T.style.color='unset'
            M.style.color='unset'
            main_state='wining_matches'
        })
        T.addEventListener('click',()=>{
            state2_='premium'
            T.style.color='#007BFF'
            M.style.color='unset'
            E.style.color='unset'
            main_state="premium"
        })

        

       
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
  if (main_state=='premium'){}else{
    out.innerHTML=''
  }
  let holder = document.querySelector(".holder");

  let bordero = out.style.border;
  let inno = out.innerHTML;
  
  

value = qry.value;
if (value.length ) {
    // qry.setAttribute("placeholder","e.g. " + qry.value)
    // qry.value="";
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
    longRunningTask();

    
    if (main_state == "wining_matches") {
        http = line+ "/receive_message";
    }
    if (main_state == "individual_matches") {
        http = line+"/individual_receive_message";
    }
    if (main_state == "premium") {
        http = line+"/premium";
        value=de(accessInfo(en('username',date1)),date1) +"percentage"
    }
    console.log(http)
    fetch(http, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(value)
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
            }
            if (main_state == "individual_matches" || main_state == "premium") {
                res = data.response;
            }


            // console.log(res)


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

        })
        .catch(error => {
            console.log("something wrong with the response", error)
            if (String(error) == "SyntaxError: Unexpected end of JSON input") {
                error = "Content being updated in the server, please try again later!"
            }
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
                    
                   
            
                });
         
        }
        
        ,   8000);

       
        
    }, 2000); // Runs after 2 seconds, but doesn’t block execution

    console.log("Function call ended, but task is still running.");
}