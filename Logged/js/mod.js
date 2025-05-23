let date2=18
let date1=17
let state__p='leave'

function renderMatchCard(category, key, matchData) {
      let container = document.getElementById("c_1");

      const {
        match,
        prediction,
        prediction_p,
        score_p,
        real_score,
        ["actual results"]: actualResults,
        ["correct_prediction "]: correct
      } = matchData;

      const isCorrect = !!correct;
      const borderColor = isCorrect ? 'border-green-500' : 'border-red-500';
      const bgColor = isCorrect ? 'bg-green-50' : 'bg-red-50';
      const badgeColor = isCorrect ? 'text-green-700' : 'text-red-700';
      const badgeBg = isCorrect ? 'bg-green-100' : 'bg-red-100';

      const card = document.createElement("div");
      card.className = `c_1s fade-in transform hover:scale-[1.015] transition-all duration-300 ease-out border-l-4 ${borderColor} ${bgColor} shadow-md rounded-lg p-5`;

      card.innerHTML = `
       <div class="text-sm text-gray-500 mb-1 uppercase tracking-wide">Match</div>
      <div class="font-semibold text-lg mb-3">${match}</div>
        <div class="space-y-1">
         <p><span class="font-medium">Prediction:</span> ${prediction}</p>
        <p><span class="font-medium">Prediction %:</span> ${prediction_p}%</p>
        <p><span class="font-medium">Score Match :</span> ${real_score}</p>
        <p><span class="font-medium">Actual Result:</span> ${actualResults}</p>
        </div>
       <div class="mt-4 inline-block px-3 py-1 text-sm font-semibold rounded-full ${badgeColor} ${bgColor}">
        ${isCorrect ? '✅ Correct Prediction' : '❌ Wrong Prediction'}
        </div>
      `;

      container.appendChild(card);
    }



function storeInfo(key, value) {
    localStorage.setItem(key, value);
    // console.log(`Data stored: ${key} = ${value}`);
  }
  function accessInfo(key) {
    const value = localStorage.getItem(key);
    if (value) {
        // console.log(`Data retrieved: ${key} = ${value}`);
        return value;
    } else {
        // console.log(`No data found for key: ${key}`);
        return null;
    }
  }
  function en(text, key) {
    const symbols = "~!@#$%^&*()_+=-{}[]\\|'\"<>,.?/;:` \n";
    const letters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    const numbers = "1234567890";
    const characters = symbols + letters + numbers;
  
    const knowledgeBase = {};
    let x = 0;
    const allTk = [];
    let counter = 0;
  
    for (let c of characters) {
      x += 1;
      let y = (x ** 2) + (x * text.length) - parseFloat(key);
      y=parseInt(y)
      if (allTk.includes(y)) {
        counter += 1;
        
      } else {
        allTk.push(y);
      }
      try {
        knowledgeBase[c] = String(y);
      } catch (e) {
        // Handle error if needed
      }
    }
   
  
    const newText = [];
  
    for (let letter of text) {
      letter = knowledgeBase[letter];
      newText.push(letter);
    }
  
    let ntext = newText.join("..423..");
    const ftype = 'text';
  
    let codename;
    if (ftype === "text") {
      codename = "123456789009876543211234567890";
    } else {
      codename = "0987654321112345678900987654321";
    }
  
    ntext = ntext + "..423.." + codename;
  
    const encryptedText = ntext;
    return encryptedText;
  }


  function logout(){
    storeInfo(en('state',date2),'')
    storeInfo(en('password',date1),'')
    storeInfo(en('phone',date1),'')
    storeInfo(en('username',date1),'')
    storeInfo(en('email',date1),'')
    storeInfo(en('logged',date1),'')
    storeInfo('domContent2',''),
    storeInfo('domContentdate2',''),
    storeInfo('main_state2',''),


    
      window.location.assign("../index.html")
    }


function de(encryptedText, key) {
  let dtext = encryptedText.split("..423..");
  let codename;

  if (dtext[dtext.length - 1] === "123456789009876543211234567890") {
    codename = "text";
  } else if (dtext[dtext.length - 1] === "0987654321112345678900987654321") {
    return "Cannot accept bytes";
  } else {
    return "Unable to identify Character Type--";
  }

  dtext.pop(); // Remove the last element
  const length = dtext.length;
  const symbols = "~!@#$%^&*()_+=-{}[]\\|'\"<>,.?/;:` \n";
  const letters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  const numbers = "1234567890";
  const characters = symbols + letters + numbers;

  const knowledgeBase = {};
  let x = 0;

  for (let c of characters) {
    x += 1;
    let y = (x ** 2) + (x * length) - parseFloat(key);
    try {
      knowledgeBase[c] = String(y);
    } catch (e) {
      // Handle error if needed
    }
  }

  const newText = [];

  for (let value of dtext) {
    for (let char in knowledgeBase) {
      if (knowledgeBase[char] === value) {
        newText.push(char);
        break;
      }
    }
  }

  const decryptedText = newText.join("");
  return decryptedText;
}

function getproducts2(){
    storeInfo('late','busy')
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


              

          //  console.log(data.message)
        //    alert('data recieved')
        let cards_data=data.message
        if (cards_data=='<span id="red">You did not login!</span>'){
          logout()

        }
        // console.log(cards_data)
        // console.log(cards_data)
        // console.log(cards_data)
        console.log(cards_data)
        // console.log('hey')
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
        <div class="time_ prediction_ " style="font-size:small">Prediction: ${cards_data[r].prediction_}</div>
        <div class="time_">${cards_data[r].time}</div>
        
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
    
    cards.innerHTML=`<div id='tday_dt' style='display:none'>${r_data}</div><div onclick='show()' id='idt_show'>show Matches</div>`
    storeInfo('late','done')
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
        storeInfo('late','failed')

     
            
    });
}


function getPredictionAccuracyChartConfig(color1,darkBod,darkBod2,darkBack,darkBack2, accurateData, inaccurateData, labels) {
  return {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Accurate Predictions',
          data: accurateData,
          borderColor: darkBod ,
          backgroundColor: darkBack ,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: 'transparent',//darkbod
          pointBorderColor: 'transparent',// fff
          pointHoverBackgroundColor: 'transparent',//  ff
          pointHoverBorderColor: 'transparent' //darkbod
        },
        {
          label: 'Inaccurate Predictions',
          data: inaccurateData,
          borderColor: darkBod2 ,
          backgroundColor: darkBack2 ,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: 'transparent',//darkbod2
          pointBorderColor: 'transparent',// #fff
          pointHoverBackgroundColor: 'rgba(255,0,0,0.1)',//  #ff2
          pointHoverBorderColor: 'rgba(255,0,0,0.1)' //darkbod2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          min: 0,
          max: 100,
          ticks: {
            color: color1,
            callback: value => value + '%'
          },
          title: {
            display: true,
            text: 'Prediction Accuracy (%)',
            color: color1 
          }
        },
        x: {
          ticks: {
            color: color1,
          },
          title: {
            display: true,
            text: 'Match Number',
            color: color1
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: color1
          }
        },
        tooltip: {
          callbacks: {
            label: context => context.parsed.y + '%'
          }
        }
      }
    }
  };
}




function generateStringNumbers(n) {
  return Array.from({ length: n }, (_, i) => (i + 1).toString());
}


    function getChartConfig(dark) {

      return {
        type: 'line',
        data: {
          labels: ['1', '2', '3','4', '5', '6','7','8','9'],
          datasets: [{
            label: 'Prediction Accuracy',
            data: [34, 59, 43,34, 62, 33,54, 83, 33],
            borderColor: dark ? '#90CAF9' : '#4A90E2',
            backgroundColor: dark ? 'rgba(144, 202, 249, 0.2)' : 'rgba(74, 144, 226, 0.1)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: dark ? '#90CAF9' : '#4A90E2',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: dark ? '#90CAF9' : '#4A90E2'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              min: 0,
              max: 100,
              ticks: {
                color: dark ? '#eee' : '#333',
                callback: value => value + '%'
              },
              title: {
                display: true,
                text: 'Prediction(%)',
                color: dark ? '#eee' : '#333'
              }
            },
            x: {
              ticks: {
                color: dark ? '#eee' : '#333',
              },
              title: {
                display: true,
                text: 'Matches(Win)',
                color: dark ? '#eee' : '#333'
              }
            }
          },
          plugins: {
            legend: {
              labels: {
                color: dark ? '#eee' : '#333'
              }
            },
            tooltip: {
              callbacks: {
                label: context => context.parsed.y + '%'
              }
            }
          }
        }
      };
    }
    function getChartConfig2(dark,dtas,c) {

      return {
        type: 'line',
        data: {
          labels: c,
          datasets: [{
            label: 'Match Predicted Accurately',
            data: dtas,
            borderColor: dark ? '#90CAF9' : '#4A90E2',
            backgroundColor: dark ? 'rgba(144, 202, 249, 0.2)' : 'rgba(74, 144, 226, 0.1)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: dark ? '#90CAF9' : '#4A90E2',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: dark ? '#90CAF9' : '#4A90E2'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              min: 0,
              max: 100,
              ticks: {
                color: dark ? '#eee' : '#333',
                callback: value => value + '%'
              },
              title: {
                display: true,
                text: 'Prediction(%)',
                color: dark ? '#eee' : '#333'
              }
            },
            x: {
              ticks: {
                color: dark ? '#eee' : '#333',
              },
              title: {
                display: true,
                text: 'Number Of Matches',
                color: dark ? '#eee' : '#333'
              }
            }
          },
          plugins: {
            legend: {
              labels: {
                color: dark ? '#eee' : '#333'
              }
            },
            tooltip: {
              callbacks: {
                label: context => context.parsed.y + '%'
              }
            }
          }
        }
      };
    }


  function updatecontent(){
      console.log(statec)
     
      if ( statec=='today'){
        if( document.querySelector('.products-grid').innerHTML==`<div class="loading-dots"><div></div><div></div><div></div></div>`){
      
        
        // location.reload(false)
        let count_=0
        let state__int= setInterval(()=>{

          count_=count_+1
          let do_;
          let st=accessInfo('late')
          if (count_==1){
              do_=true
              storeInfo('late',null)
              console.log('Requesting')

            }
          
          if (st=='done'){
            if (count_==1){
              do_=true
              storeInfo('late',null)
            

            }else{
              do_=false
              clearInterval(state__int)
            }

          }else{
            if(st=='failed'){
            do_=true
            storeInfo('late',null)
            count_=0
            console.log('Retrying..')

                 
            }else{
              if(st=='busy'){
                console.log('Busy..')
                do_=false
              }else{
                do_=true
              }
            }
          }
          if(document.querySelector('.products-grid')){
              if(document.querySelector('.products-grid').innerHTML==`<div class="loading-dots"><div></div><div></div><div></div></div>`){
              if (do_){
              getproducts2()}
            
            
            }else{
              clearInterval(state__int)
            }
          }else{
            clearInterval(state__int)
          }
          
        },4000)

        

 
     

      }else{
        return false
      }
    }else{
      return false
    }
  }
 

 function getproducts_2_3(){
    // alert('fetching')
    storeInfo('late2','busy')
    fetch(line+ '/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({message:'analysis'})
    })
    .then(response => response.json())
    .then(data3 => {
        let data= data3.message
        storeInfo('late2','done')
        console.log(data)
        const toggleButton = document.getElementById("toggle-dark-mode");
        toggleButton.addEventListener("click", function () {

          document.documentElement.classList.toggle("dark");
        });
    
    // --- Helper function to animate numbers ---
    function animateNumber(id, start, end, duration, suffix = '') {
      const element = document.getElementById(id);
      let startTime = null;
      function updateNumber(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = progress * (end - start) + start;
        if (id=='total-matches'){
            element.textContent = Math.floor((suffix ? Math.floor(value) : value.toFixed(2)) + suffix);
        }else{
             element.textContent = (suffix ? Math.floor(value) : value.toFixed(2)) + suffix;
        }
       
        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        }
      }
      requestAnimationFrame(updateNumber);
    }
    
    // --- Aggregating Data for Summary and Table ---
    const allMatches = [];
    for (const category in data) {
      if (data.hasOwnProperty(category)) {
        const catData = data[category];
        for (const key in catData) {
          if (catData.hasOwnProperty(key)) {
            allMatches.push(catData[key]);
          }
        }
      }
    }
    
    // --- Summary Calculations ---
    const totalMatches = Math.floor(allMatches.length);
    const correctCount = allMatches.filter(match => match["correct_prediction "]).length;
    const avgConfidence = allMatches.reduce((sum, match) => sum + match.prediction_p, 0) / totalMatches;

    // Animate summary counters over 2000ms.
    animateNumber("total-matches", 0, totalMatches, 6000);
    animateNumber("accuracy", 0, (correctCount / totalMatches) * 100, 10000, '%');
    animateNumber("avg-confidence", 0, avgConfidence, 10000, '%');
    
    // --- Pie Chart Data Calculations ---
    // Draws:
    //   - "drawW" holds draws predicted correctly.
    //   - "drawL" holds draws lost.
    const drawsCorrect = data.drawW ? Object.values(data.drawW).filter(match => match["correct_prediction "]).length : 0;
    const drawsLost = data.drawL ? Object.values(data.drawL).length : 0;
    
    // Wins:
    //   - "win" holds wins predicted correctly.
    //   - "loss" holds win predictions lost.
    // For "loss", subdivide into:
    //      winLostByDraw: where actual result equals "draw" (case-insensitive)
    //      winLost: remainder.
    const winCorrect = data.win ? Object.values(data.win).filter(match => match["correct_prediction "]).length : 0;
    const losses = data.loss ? Object.values(data.loss) : [];
    const winLostByDraw = losses.filter(match => match["actual results"].toLowerCase() === "draw").length;
    const winLost = losses.length - winLostByDraw;
    
    const finalPieData = [drawsCorrect, drawsLost, winCorrect, winLost, winLostByDraw];
    
    // --- Create Pie Chart with initial zero data ---
    const pieCtx = document.getElementById('pieChart').getContext('2d');
    const pieChart = new Chart(pieCtx, {
      type: 'pie',
      data: {
        labels: ['Draws Correct', 'Draws Lost', 'Win Correct', 'Win Lost', 'Win Lost by Draw'],
        datasets: [{
          data: [0, 0, 0, 0, 0],
          backgroundColor: ['#60A5FA', '#FBBF24', '#10B981', '#EF4444', '#8B5CF6']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
    
    // Animate pie chart values over 40 frames (~2000ms total)
    let pieFrame = 0;
    const totalPieFrames = 40;
    const pieInterval = setInterval(() => {
      pieFrame++;
      const newData = finalPieData.map(val => Math.floor(val * (pieFrame / totalPieFrames)));
      pieChart.data.datasets[0].data = newData;
      pieChart.update();
      if (pieFrame >= totalPieFrames) clearInterval(pieInterval);
    }, 50);
    
    // --- Line Chart Animation ---
    // Extract the win and loss datasets.
    const winMatches = data.win ? Object.values(data.win) : [];
    const lossMatches = data.loss ? Object.values(data.loss) : [];
    const finalWinData = winMatches.map((match, i) => ({ x: i + 1, y: match.prediction_p }));
    const finalLossData = lossMatches.map((match, i) => ({ x: i + 1, y: match.prediction_p }));
    
    // Create line chart with empty datasets.
    const lineCtx = document.getElementById('lineChart').getContext('2d');
    const lineChart = new Chart(lineCtx, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Win',
            data: [],
            borderColor: '#10B981',
            fill: false,
            tension: 0.1,
            pointRadius: 0
          },
          {
            label: 'Loss',
            data: [],
            borderColor: '#EF4444',
            fill: false,
            tension: 0.1,
            pointRadius: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            title: { display: true, text: 'Match Number' },
            ticks: { stepSize: 1 }
          },
          y: {
            title: { display: true, text: 'Prediction Percentage (%)' }
          }
        }
      }
    });
    
    // Animate the line chart by adding data points one at a time.
    let currentIndex = 0;
    const maxPoints = Math.max(finalWinData.length, finalLossData.length);
    const lineInterval = setInterval(() => {
      if (currentIndex < finalWinData.length) {
        lineChart.data.datasets[0].data.push(finalWinData[currentIndex]);
      }
      if (currentIndex < finalLossData.length) {
        lineChart.data.datasets[1].data.push(finalLossData[currentIndex]);
      }
      lineChart.update();
      currentIndex++;
      if (currentIndex >= maxPoints) clearInterval(lineInterval);
    }, 200); // Adjust delay (in ms) per data point as needed.
    
    // --- Populate the Matches Table ---
    const tbody = document.getElementById('match-table');
    allMatches.forEach(match => {
      tbody.innerHTML += `
        <tr class="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700">
          <td class="px-4 py-2 border">${match.match}</td>
          <td class="px-4 py-2 border">${match.prediction}</td>
          <td class="px-4 py-2 border">${match["actual results"]}</td>
          <td class="px-4 py-2 border">${match["correct_prediction "] ? '✅' : '❌'}</td>
          <td class="px-4 py-2 border">${match.prediction_p}%</td>
          <td class="px-4 py-2 border">${match.real_score}</td>
        </tr>
      `;
    });

    

    }).catch(error => {
        storeInfo('late2','failed')
        console.log('failed to recieve data:' + error)
            
    });
}
   
 function updatecontent_2_3(){
    
     
      if ( true){
        if(true){
      
        
        // location.reload(false)
        let count_=0
        let state__int2= setInterval(()=>{

          count_=count_+1
          let do_;
          let st=accessInfo('late2')
          if (count_==1){
              do_=true
              storeInfo('late2',null)
              console.log('Requesting')

            }
          
          if (st=='done'){
            if (count_==1){
              do_=true
              storeInfo('late2',null)
            

            }else{
              do_=false
              clearInterval(state__int2)
            }

          }else{
            if(st=='failed'){
            do_=true
            storeInfo('late2',null)
            count_=0
            console.log('Retrying..')

                 
            }else{
              if(st=='busy'){
                console.log('Busy..')
                do_=false
              }else{
                do_=true
              }
            }
          }
          if(true){
             
              if (do_){
              getproducts_2_3()}
            
            
           
          }
      
          
        },3000)

        

 
     

      }
    }
  }

  function updatecontent3(){
      console.log(statec)
      if ( statec=='today'){
        if( document.querySelector('.products-grid').innerHTML==`<div class="loading-dots"><div></div><div></div><div></div></div>`){
        setTimeout(() => {
        
        // location.reload(false)
        let state__int= setInterval(()=>{
          if(document.querySelector('.products-grid')){
              if(document.querySelector('.products-grid').innerHTML==`<div class="loading-dots"><div></div><div></div><div></div></div>`){

              getproducts3()
            }else{
              clearInterval(state__int)
            }
          }else{
            clearInterval(state__int)
          }
          
        },7000)

        
    } 
    , 3000)
     

      }else{
        return false
      }
    }else{
      return false
    }
  }


  function show(){
    let bt= document.getElementById('idt_show')
    // bt.style.display='none'
    let view= document.getElementById('tday_dt')
    let gg= document.querySelector('.products-grid')
    gg.innerHTML= view.innerHTML  +`<div onclick='hide_()' class='mide'  id='idt_hide'>Hide Matches</div>`
    
    


  }

   function hide_(){
        let gg= document.querySelector('.products-grid')
        let bt= document.getElementById('idt_hide')
        bt.remove()

        gg.innerHTML= `<div id='tday_dt' style='display:none'>${gg.innerHTML}</div><div onclick='show()' id='idt_show'>show Matches</div>`
   }