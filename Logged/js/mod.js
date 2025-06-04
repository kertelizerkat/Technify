let date2 = 18
let date1 = 17
let steps_to_remove_loader = 0
let state__p = ''
// storeInfo('lastStoredTime','')
// --- Helper function to animate numbers ---


function retrieveSum2() {

  let summery = JSON.parse(accessInfo('matchSummary2'))
  if (summery) {
    let r_data;
    let r_data_ended = summery.r_data_ended;
    let r_data_live = summery.r_data_live;
    let r_data_upcoming = summery.r_data_upcoming;
    let rl = summery.rl
    let rup = summery.rup
    let ren = summery.ren


    if (!r_data_live) {
      r_data_live = `<style>
              :root {
                --white: #ffffff;
                --red: #e63946;
                --dark-red: #b91c1c;
                --light-red: #feca57;
              }

              

              .container9 {
                text-align: center;
              
                width:100%;
                height:100%;
                display: flex;
                justify-content: center;
                align-items:center;
                z-index: 20; /* High z-index to ensure visibility */
              }

              .message9 {
                font-size: 3rem;
                font-weight: bold;
                color: var(--red);
                opacity: 0;
                animation: fadeIn9 1.5s ease-in-out forwards;
                display: inline-block;
                white-space: nowrap;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Enhance readability */
              }

              .typewriter9 {
                overflow: hidden;
                animation: typewriter9 3s steps(40) 0.5s 1 normal both;
              }

              @keyframes fadeIn9 {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }

              @keyframes typewriter9 {
                from { width: 0; }
                to { width: 100%; }
              }

              .pulse-circle9 {
                
                top: 50%;
                left: 50%;
                width: 100px;
                height: 100px;
                background: radial-gradient(circle, var(--red) 10%, transparent 70%);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                animation: pulse9 2s infinite ease-in-out;
                z-index: 10; /* Below message */
              }

              @keyframes pulse9 {
                0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
                50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.3; }
                100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
              }

              #particle-canvas9 {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 0; /* Behind everything */
                opacity: 0.2;
              }

              .fallback-message9 {
                font-size: 1.5rem;
                color: var(--dark-red);
                display: none;
              }

              @media (max-width: 768px) {
                .message9 {
                  font-size: 2rem;
                }
                .pulse-circle9 {
                  width: 80px;
                  height: 80px;
                }
              }
            </style>
                <div class="container9">
              <div class="pulse-circle9"></div>
              <div class="message9 typewriter9">No Data!</div>
              <div class="fallback-message9">No Data!</div>
            </div>
            <canvas id="particle-canvas9"></canvas>`
      rl = true

    }
    if (!r_data_upcoming) {
      r_data_upcoming = `<style>
              :root {
                --white: #ffffff;
                --blue: #0056b3;
                --dark-blue: #0056b3;
                --light-blue: #00bcd4;
              }

              

              .container92 {
                text-align: center;
              
                width:100%;
                height:100%;
                display: flex;
                justify-content: center;
                align-items:center;
                z-index: 20; /* High z-index to ensure visibility */
              }

              .message92 {
                font-size: 3rem;
                font-weight: bold;
                color: var(--blue);
                opacity: 0;
                animation: fadeIn92 1.5s ease-in-out forwards;
                display: inline-block;
                white-space: nowrap;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Enhance readability */
              }

              .typewriter92 {
                overflow: hidden;
                animation: typewriter92 3s steps(40) 0.5s 1 normal both;
              }

              @keyframes fadeIn92 {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }

              @keyframes typewriter92 {
                from { width: 0; }
                to { width: 100%; }
              }

              .pulse-circle92 {
                
                top: 50%;
                left: 50%;
                width: 100px;
                height: 100px;
                background: radial-gradient(circle, var(--blue) 10%, transparent 70%);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                animation: pulse92 2s infinite ease-in-out;
                z-index: 10; /* Below message */
              }

              @keyframes pulse92 {
                0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
                50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.3; }
                100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
              }

              #particle-canvas92 {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 0; /* Behind everything */
                opacity: 0.2;
              }

              .fallback-message92 {
                font-size: 1.5rem;
                color: var(--dark-blue);
                display: none;
              }

              @media (max-width: 768px) {
                .message92 {
                  font-size: 2rem;
                }
                .pulse-circle92 {
                  width: 80px;
                  height: 80px;
                }
              }
            </style>
                <div class="container92">
              <div class="pulse-circle92"></div>
              <div class="message92 typewriter92">No Data!</div>
              <div class="fallback-message92">No Data!</div>
            </div>
            <canvas id="particle-canvas92"></canvas>`
      rup = true

    }
    if (!r_data_ended) {
      r_data_ended = `<style>
              :root {
                --white: #ffffff;
                --black: #000;
                --dark-black: #000;
                --light-black: rgba(0,0,0,0.5);
              }

              

              .container93 {
                text-align: center;
              
                width:100%;
                height:100%;
                display: flex;
                justify-content: center;
                align-items:center;
                z-index: 20; /* High z-index to ensure visibility */
              }

              .message93 {
                font-size: 3rem;
                font-weight: bold;
                color: var(--black);
                opacity: 0;
                animation: fadeIn93 1.5s ease-in-out forwards;
                display: inline-block;
                white-space: nowrap;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Enhance readability */
              }

              .typewriter93 {
                overflow: hidden;
                animation: typewriter93 3s steps(40) 0.5s 1 normal both;
              }

              @keyframes fadeIn93 {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }

              @keyframes typewriter93 {
                from { width: 0; }
                to { width: 100%; }
              }

              .pulse-circle93 {
                
                top: 50%;
                left: 50%;
                width: 100px;
                height: 100px;
                background: radial-gradient(circle, var(--black) 10%, transparent 70%);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                animation: pulse93 2s infinite ease-in-out;
                z-index: 10; /* Below message */
              }

              @keyframes pulse93 {
                0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
                50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.3; }
                100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
              }

              #particle-canvas93 {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 0; /* Behind everything */
                opacity: 0.2;
              }

              .fallback-message93 {
                font-size: 1.5rem;
                color: var(--dark-black);
                display: none;
              }

              @media (max-width: 768px) {
                .message93 {
                  font-size: 2rem;
                }
                .pulse-circle93 {
                  width: 80px;
                  height: 80px;
                }
              }
            </style>
                <div class="container93">
              <div class="pulse-circle93"></div>
              <div class="message93 typewriter93">No Data!</div>
              <div class="fallback-message93">No Data!</div>
            </div>
            <canvas id="particle-canvas93"></canvas>`
      ren = true

    }


    let cards = document.querySelector(".products-grid")
    r_data = `  <div class="tab-container">
    <!-- Tab Headers -->
    <div class="tab-header">
      <div id='live-tab1' class="tab live-tab active">Live</div>
      <div id='upcoming-tab1' class="tab upcoming-tab">Upcoming</div>
      <div id='ended-tab1' class="tab ended-tab">Ended</div>
    </div>
    
    <!-- Tab Content -->
  
      <div class="tab-content">
        <div class="content live-content active">
       
          <div  class='tab_holder_1'>${r_data_live}</div>
        </div>
        <div  class="content upcoming-content">
        
          <div class='tab_holder_1'>${r_data_upcoming}</div>
        </div>
        <div  class="content ended-content">
          
          <div class='tab_holder_1'>${r_data_ended}</div>
        </div>
      </div>
  
  </div>`


    cards.innerHTML = r_data


    const tabs = document.querySelectorAll('.tab-header div');
    const contents = document.querySelectorAll('.tab-content > div');

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        // Remove active state from all tabs and contents
        tabs.forEach(item => item.classList.remove('active'));
        contents.forEach(item => item.classList.remove('active'));

        // Activate clicked tab and its content panel
        tab.classList.add('active');
        contents[index].classList.add('active');
      });

    });
    if (rl) {
      if (!rup) {

        let lr = document.getElementById('upcoming-tab1')
        if (lr) {
          lr.click()
        }

      } else {
        message992()
        let lr = document.getElementById('ended-tab1')
        if (lr) {
          lr.click()
        }
        if (ren) {
          message993()

        }

      }

      message99()
    }


    const suggestionList = summery.suggestionList
    let suggestionObject = summery.suggestionObject
    // let seeIfClosed=document.getElementById('tday_dt')

    // Get references to the search input and suggestion container
    let inputField = document.querySelector('.search-input');
    document.getElementById('conttt').setAttribute('style', '')

    const suggestionsContainer = document.getElementById('suggestions');

    // Filter suggestions from the list based on the query (case-insensitive)
    function filterSuggestions(query) {
      query = query.toLowerCase();
      const filtered = suggestionList.filter(item => item.toLowerCase().includes(query));
      return filtered.slice(0, 3); // only return top 3 results
    }

    // Update the suggestions list in the DOM
    inputField.addEventListener('input', function (e) {
      const query = e.target.value;
      const results = filterSuggestions(query);

      // Clear any existing suggestions
      suggestionsContainer.innerHTML = '';

      // If the query isn't empty and there are suggestions, display them
      if (query.trim() !== '' && results.length > 0) {
        const ul = document.createElement('ul');
        results.forEach(suggestion => {
          const li = document.createElement('li');
          li.textContent = suggestion;
          li.addEventListener('click', function () {
            inputField.value = suggestion;
            let tge = document.getElementById(suggestionObject[suggestion.trim()])
            let livep = document.getElementById('live-tab1')
            let upp = document.getElementById('upcoming-tab1')
            let endp = document.getElementById('ended-tab1')


            if (tge) {
              if (tge.getAttribute('data') == 'upcoming') {

                if (upp) {
                  upp.click()

                }
              } else {
                if (tge.getAttribute('data') == 'live') {
                  if (livep) {
                    livep.click()

                  }
                } else {
                  if (tge.getAttribute('data') == 'ended') {
                    if (endp) {
                      endp.click()

                    }
                  }
                }
              }
            }


            scrollAndHighlight(suggestionObject[suggestion.trim()])

            suggestionsContainer.innerHTML = '';
            suggestionsContainer.classList.remove('visible');
          });
          ul.appendChild(li);
        });
        suggestionsContainer.appendChild(ul);
        suggestionsContainer.classList.add('visible');
      } else {
        suggestionsContainer.classList.remove('visible');
      }
    });

    inputField.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { // Detect Enter key press
        e.preventDefault(); // Prevent default form submission (if applicable)

        // Get the first suggestion element
        const firstSuggestion = suggestionsContainer.querySelector('ul li');

        // If a suggestion exists, scroll and highlight it
        if (firstSuggestion) {
          const selectedText = firstSuggestion.textContent.trim();
          inputField.value = selectedText; // Autofill input with first suggestion



          scrollAndHighlight(suggestionObject[selectedText]); // Scroll and highlight the element

          // Clear suggestions
          suggestionsContainer.innerHTML = '';
          suggestionsContainer.classList.remove('visible');
        }
      }
    })

      ;


    // Optional: Hide suggestions when the input loses focus
    inputField.addEventListener('blur', function () {
      // Delay hiding so that click events on suggestions can be captured
      setTimeout(() => {
        suggestionsContainer.classList.remove('visible');
      }, 150);
    });
  }
}

function animateNumber(id, start, end, duration, suffix = '') {
  const element = document.getElementById(id);
  let startTime = null;
  function updateNumber(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = progress * (end - start) + start;
    if (id == 'total-matches') {
      element.textContent = Math.floor((suffix ? Math.floor(value) : value.toFixed(2)) + suffix);
    } else {
      element.textContent = (suffix ? Math.floor(value) : value.toFixed(2)) + suffix;
    }

    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    }
  }
  requestAnimationFrame(updateNumber);
}
function storeCurrentTime() {
  const now = Date.now(); // Get the current timestamp in milliseconds
  localStorage.setItem("lastStoredTime", now);
  console.log('Current time stored')
}
function checkTimeElapsed() {
  const lastStoredTime = localStorage.getItem("lastStoredTime");

  if (lastStoredTime) {
    const elapsedMinutes = (Date.now() - parseInt(lastStoredTime)) / (1000 * 60);

    if (elapsedMinutes >= 90) {
      // Run the specific function
      console.log('90 minutes has passed')
      updatecontent_2_3();
      // Store the new current time
    } else {
      console.log('90 minutes has not passed')
      storeInfo('late2', 'done')




      const summary = JSON.parse(localStorage.getItem("matchSummary"));
      if (summary) {

      } else {
        storeInfo('matchSummary', '')
        storeInfo('lastStoredTime', '')
        window.location.reload()

      }
      let allMatches = summary.allMatches


      // start

      const totalMatches = Math.floor(allMatches.length);
      const correctCount = summary.correctCount;
      const avgConfidence = summary.avgConfidence;

      if (avgConfidence && correctCount && totalMatches && allMatches) {

      } else {
        storeInfo('matchSummary', '')
        storeInfo('lastStoredTime', '')
        window.location.reload()

      }
      //remove the loader


      let ptagstate3 = document.getElementById('state_loader')
      ptagstate3.textContent = 'Are you TechNifyied?'
      let ldata2 = document.getElementById('ldata')
      ldata2.classList.add('checked')
      let loader = document.querySelector('.loading-container')

      loader.style.display = 'none'

      // Animate summary counters over 2000ms.
      animateNumber("total-matches", 0, totalMatches, 6000);
      animateNumber("accuracy", 0, (correctCount / totalMatches) * 100, 10000, '%');
      animateNumber("avg-confidence", 0, avgConfidence, 10000, '%');

      const finalPieData = summary.finalPieData
      if (finalPieData) {

      } else {
        storeInfo('matchSummary', '')
        storeInfo('lastStoredTime', '')
        window.location.reload()

      }

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
      //  const summaryData = { finalPieData, allMatches, avgConfidence,correctCount, totalMatches,winMatches,lossMatches,finalWinData,finalLossData};
      // --- Line Chart Animation ---
      // Extract the win and loss datasets.
      const winMatches = summary.winMatches;
      const lossMatches = summary.lossMatches;
      const finalWinData = summary.finalWinData;
      const finalLossData = summary.finalLossData;
      if (finalWinData && finalLossData) {

      } else {
        storeInfo('matchSummary', '')
        storeInfo('lastStoredTime', '')
        window.location.reload()

      }

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
      tbody.innerHTML = summary.tbdinner


      if (summary.tbdinner) {

      } else {
        storeInfo('matchSummary', '')
        storeInfo('lastStoredTime', '')
        window.location.reload()

      }


      //end
      updatecontent()




    }
  } else {
    console.log('Time was not stored')

    updatecontent_2_3();

  }
}

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
    y = parseInt(y)
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


function logout() {
  storeInfo(en('state', date2), '')
  storeInfo(en('password', date1), '')
  storeInfo(en('phone', date1), '')
  storeInfo(en('username', date1), '')
  storeInfo(en('email', date1), '')
  storeInfo(en('logged', date1), '')
  // storeInfo('lastStoredTime','')
  //   storeInfo('matchSummary','')
  storeInfo('domContent2', ''),
    storeInfo('domContentdate2', ''),
    storeInfo('main_state2', ''),



    window.location.assign("../login/index.html")
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

function getTextContentsByClass(className) {
  // Select all elements with the provided class name
  const elements = document.querySelectorAll(`.${className}`);

  // Map over the NodeList and extract the trimmed textContent of each element
  const textContents = Array.from(elements, element => element.textContent.trim());

  return textContents;
}

function getTextContentIdMapping(className) {
  // Get all elements with the given class name
  const elements = document.querySelectorAll(`.${className}`);

  // Create an object to store the mapping
  const mapping = {};

  // Iterate through each element
  elements.forEach(element => {
    // Use the trimmed text content as the key
    const key = element.textContent.trim();
    // Use the id attribute as the value
    mapping[key] = element.id;
  });

  return mapping;
}


function scrollAndHighlight(targetId) {
  // Get the target element
  const targetElement = document.getElementById(targetId);

  if (!targetElement) return; // Exit if element doesn't exist

  // Scroll to the target element smoothly
  targetElement.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });

  // Apply temporary highlighting effect
  targetElement.style.transition = "background-color 0.5s ease-in-out";
  targetElement.style.backgroundColor = "#ffeb3b"; // Yellow highlight

  // Remove highlight after a few seconds
  setTimeout(() => {
    targetElement.style.backgroundColor = "";
  }, 2000); // Highlight disappears after 2 seconds
}
function message99() {
  try {
    const canvas = document.getElementById('particle-canvas9');
    const message = document.querySelector('.message9');
    const fallback = document.querySelector('.fallback-message9');

    // Check if elements exist
    if (!canvas) {
      console.error('Canvas element not found');
      fallback.style.display = 'block';
      return;
    }
    if (!message) {
      console.error('Message element not found');
      fallback.style.display = 'block';
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Canvas context not available');
      fallback.style.display = 'block';
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = '#e63946';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function initParticles() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    // Force animation restart if not visible
    setTimeout(() => {
      if (window.getComputedStyle(message).opacity === '0') {
        console.warn('Message not visible, restarting animation');
        message.style.animation = 'none';
        message.offsetHeight; // Trigger reflow
        message.style.animation = 'fadeIn 1.5s ease-in-out forwards, typewriter 3s steps(40) 0.5s 1 normal both';
      }
    }, 3000);
  } catch (error) {
    console.error('Error initializing animation:', error);
    document.querySelector('.fallback-message').style.display = 'block';
  }
};
function message992() {
  try {
    const canvas = document.getElementById('particle-canvas92');
    const message = document.querySelector('.message92');
    const fallback = document.querySelector('.fallback-message92');

    // Check if elements exist
    if (!canvas) {
      console.error('Canvas element not found');
      fallback.style.display = 'block';
      return;
    }
    if (!message) {
      console.error('Message element not found');
      fallback.style.display = 'block';
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Canvas context not available');
      fallback.style.display = 'block';
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = '#00d2ff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function initParticles() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    // Force animation restart if not visible
    setTimeout(() => {
      if (window.getComputedStyle(message).opacity === '0') {
        console.warn('Message not visible, restarting animation');
        message.style.animation = 'none';
        message.offsetHeight; // Trigger reflow
        message.style.animation = 'fadeIn 1.5s ease-in-out forwards, typewriter 3s steps(40) 0.5s 1 normal both';
      }
    }, 3000);
  } catch (error) {
    console.error('Error initializing animation:', error);
    document.querySelector('.fallback-message').style.display = 'block';
  }
};
function message993() {
  try {
    const canvas = document.getElementById('particle-canvas93');
    const message = document.querySelector('.message93');
    const fallback = document.querySelector('.fallback-message93');

    // Check if elements exist
    if (!canvas) {
      console.error('Canvas element not found');
      fallback.style.display = 'block';
      return;
    }
    if (!message) {
      console.error('Message element not found');
      fallback.style.display = 'block';
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Canvas context not available');
      fallback.style.display = 'block';
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = '#111';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function initParticles() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    // Force animation restart if not visible
    setTimeout(() => {
      if (window.getComputedStyle(message).opacity === '0') {
        console.warn('Message not visible, restarting animation');
        message.style.animation = 'none';
        message.offsetHeight; // Trigger reflow
        message.style.animation = 'fadeIn 1.5s ease-in-out forwards, typewriter 3s steps(40) 0.5s 1 normal both';
      }
    }, 3000);
  } catch (error) {
    console.error('Error initializing animation:', error);
    document.querySelector('.fallback-message').style.display = 'block';
  }
};


function getproducts2() {
  storeInfo('late', 'busy')
  let loader888=document.querySelector('.loader88')
  if (loader888){
    loader888.setAttribute('style','border:3px solid #007BFF;border-top-color: transparent;')
 
  

    
  }
  // alert('fetching')
  fetch(line + '/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: 'Logged' })
  })
    .then(response => response.json())
    .then(data => {
      if (true) {
        if (data.message) {



          console.log(data.message)
          //    alert('data recieved')
          let cards_data = data.message
          if (cards_data == '<span id="red">You did not login!</span>') {
            logout()

          }
          let r_data = '';
          let r_data_ended = '';
          let r_data_live = '';
          let r_data_upcoming = '';
          let rl = false
          let rup = false
          let ren = false
          for (r in cards_data) {
            if (cards_data[r].state == 'live') {
              r_data_live = r_data_live + `  <div style='min-width:300px;min-height:250px; gap: 20px; margin-left:auto;
      margin-right:auto;'  class="relative _move_1 rounded-2xl shadow-xl bg-cover bg-center min-h-[320px] flex flex-col justify-between p-4 text-gray-900 animate-fade-in" >
        <div class="bg-white/80 w-full h-full p-4 flex flex-col justify-between backdrop-blur-sm rounded-2xl">
          <div class="mb-3">
            <h2 class="text-xl font-bold text-indigo-600 mb-1">${cards_data[r].type_}</h2>
            <div class="flex flex-wrap items-start justify-between gap-2 sm:flex-nowrap mb-2">
              <!-- Match Status Component Placeholder -->
              <div class="text-sm font-semibold">
                <div style='gap:10px; ' class="flex   text-right">
                  ${cards_data[r].where}
                </div>
              </div>
            </div>
            <div id='match_${r}' data='live' class="text-center matchids text-lg font-extrabold text-gray-800 animate-zoom-in mb-2">
              ${cards_data[r].match}
            </div>
            <div class="text-center text-sm font-medium text-gray-700 bg-lime-100 px-3 py-1 rounded-full w-fit mx-auto max-w-full truncate">
              Prediction: ${cards_data[r].prediction_}
            </div>
            <div class="text-sm font-semibold">
                <div class="flex flex-col items-center text-center">
                ${cards_data[r].time}
                </div>
              </div>
          </div>


          <div class="grid grid-cols-3 gap-2">
            <div class="flex flex-col gap-1">
              <button class="text-xs font-medium uppercase px-2 py-1 rounded-lg shadow-md bg-green-600 text-white hover:bg-green-700"><span class='winp_'>${cards_data[r].win}%</span> Win</button>
              <div class="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <span class="absolute left-1 top-[-1.5rem] text-[10px] text-green-700 font-medium">${cards_data[r].win}%</span>
                <div class="h-full bg-green-400 transition-all duration-700 ease-out" style="width: ${cards_data[r].win}%;"></div>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <button class="text-xs font-medium uppercase px-2 py-1 rounded-lg shadow-md bg-yellow-400 text-gray-800 hover:bg-yellow-500"><span class='drawp_'>${cards_data[r].draw}%</span> Draw</button>
              <div class="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <span class="absolute left-1 top-[-1.5rem] text-[10px] text-yellow-700 font-medium">${cards_data[r].draw}%</span>
                <div class="h-full bg-yellow-300 transition-all duration-700 ease-out" style="width: ${cards_data[r].draw}%;"></div>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <button class="text-xs font-medium uppercase px-2 py-1 rounded-lg shadow-md bg-red-500 text-white hover:bg-red-600"><span class='losep_'>${cards_data[r].lose}%</span> Win</button>
              <div class="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <span id='red' class="absolute red left-1 top-[-1.5rem] text-[10px] text-red-700 font-medium">${cards_data[r].lose}%</span>
                <div class="h-full bg-red-400 transition-all duration-700 ease-out" style="width: ${cards_data[r].lose}%;"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
                  `
            }
            if (cards_data[r].state == 'ended') {
              r_data_ended = r_data_ended + `  <div class="relative _move_2 rounded-2xl shadow-xl bg-cover bg-center min-h-[320px] flex flex-col justify-between p-4 text-gray-900 animate-fade-in" >
        <div class="bg-white/80 w-full h-full p-4 flex flex-col justify-between backdrop-blur-sm rounded-2xl">
          <div class="mb-3">
            <h2 class="text-xl font-bold text-indigo-600 mb-1">${cards_data[r].type_}</h2>
            <div class="flex flex-wrap items-start justify-between gap-2 sm:flex-nowrap mb-2">
              <!-- Match Status Component Placeholder -->
              <div class="text-sm font-semibold">
                <div style='gap:10px; ' class="flex   text-right">
                  ${cards_data[r].where}
                </div>
              </div>
            </div>
            <div id='match_${r}' data='ended' class="text-center matchids text-lg font-extrabold text-gray-800 animate-zoom-in mb-2">
              ${cards_data[r].match}
            </div>
            <div class="text-center text-sm font-medium text-gray-700 bg-lime-100 px-3 py-1 rounded-full w-fit mx-auto max-w-full truncate">
              Prediction: ${cards_data[r].prediction_}
            </div>
            <div class="text-sm font-semibold">
                <div class="flex flex-col items-center text-center">
                ${cards_data[r].time}
                </div>
              </div>
          </div>


          <div class="grid grid-cols-3 gap-2">
            <div class="flex flex-col gap-1">
              <button class="text-xs font-medium uppercase px-2 py-1 rounded-lg shadow-md bg-green-600 text-white hover:bg-green-700"><span class='winp_'>${cards_data[r].win}%</span>  Win</button>
              <div class="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <span class="absolute left-1 top-[-1.5rem] text-[10px] text-green-700 font-medium">${cards_data[r].win}%</span>
                <div class="h-full bg-green-400 transition-all duration-700 ease-out" style="width: ${cards_data[r].win}%;"></div>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <button class="text-xs font-medium uppercase px-2 py-1 rounded-lg shadow-md bg-yellow-400 text-gray-800 hover:bg-yellow-500"><span class='drawp_'>${cards_data[r].draw}%</span> Draw</button>
              <div class="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <span class="absolute left-1 top-[-1.5rem] text-[10px] text-yellow-700 font-medium">${cards_data[r].draw}%</span>
                <div class="h-full bg-yellow-300 transition-all duration-700 ease-out" style="width: ${cards_data[r].draw}%;"></div>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <button class="text-xs font-medium uppercase px-2 py-1 rounded-lg shadow-md bg-red-500 text-white hover:bg-red-600"><span class='losep_'>${cards_data[r].lose}%</span> Win</button>
              <div class="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <span id='red' class="absolute red left-1 top-[-1.5rem] text-[10px] text-red-700 font-medium">${cards_data[r].lose}%</span>
                <div class="h-full bg-red-400 transition-all duration-700 ease-out" style="width: ${cards_data[r].lose}%;"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
                  `
            }
            if (cards_data[r].state == 'upcoming') {
              r_data_upcoming = r_data_upcoming + `  <div class="relative _move_ rounded-2xl shadow-xl bg-cover bg-center min-h-[320px] flex flex-col justify-between p-4 text-gray-900 animate-fade-in" >
        <div class="bg-white/80 w-full h-full p-4 flex flex-col justify-between backdrop-blur-sm rounded-2xl">
          <div class="mb-3">
            <h2 class="text-xl font-bold text-indigo-600 mb-1">${cards_data[r].type_}</h2>
            <div class="flex flex-wrap items-start justify-between gap-2 sm:flex-nowrap mb-2">
              <!-- Match Status Component Placeholder -->
              <div class="text-sm font-semibold">
                <div style='gap:10px; ' class="flex   text-right">
                  ${cards_data[r].where}
                </div>
              </div>
            </div>
            <div id='match_${r}' data='upcoming' class="text-center matchids text-lg font-extrabold text-gray-800 animate-zoom-in mb-2">
              ${cards_data[r].match}
            </div>
            <div class="text-center text-sm font-medium text-gray-700 bg-lime-100 px-3 py-1 rounded-full w-fit mx-auto max-w-full truncate">
              Prediction: ${cards_data[r].prediction_}
            </div>
            <div class="text-sm font-semibold">
                <div class="flex flex-col items-center text-center">
                ${cards_data[r].time}
                </div>
              </div>
          </div>


          <div class="grid grid-cols-3 gap-2">
            <div class="flex flex-col gap-1">
              <button class="text-xs font-medium uppercase px-2 py-1 rounded-lg shadow-md bg-green-600 text-white hover:bg-green-700"><span class='winp_'>${cards_data[r].win}%</span>  Win</button>
              <div class="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <span class="absolute left-1 top-[-1.5rem] text-[10px] text-green-700 font-medium">${cards_data[r].win}%</span>
                <div class="h-full bg-green-400 transition-all duration-700 ease-out" style="width: ${cards_data[r].win}%;"></div>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <button class="text-xs font-medium uppercase px-2 py-1 rounded-lg shadow-md bg-yellow-400 text-gray-800 hover:bg-yellow-500"><span class='drawp_'>${cards_data[r].draw}%</span> Draw</button>
              <div class="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <span class="absolute left-1 top-[-1.5rem] text-[10px] text-yellow-700 font-medium">${cards_data[r].draw}%</span>
                <div class="h-full bg-yellow-300 transition-all duration-700 ease-out" style="width: ${cards_data[r].draw}%;"></div>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <button class="text-xs font-medium uppercase px-2 py-1 rounded-lg shadow-md bg-red-500 text-white hover:bg-red-600"><span class='losep_'>${cards_data[r].lose}%</span> Win</button>
              <div class="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <span id='red' class="absolute red left-1 top-[-1.5rem] text-[10px] text-red-700 font-medium">${cards_data[r].lose}%</span>
                <div class="h-full bg-red-400 transition-all duration-700 ease-out" style="width: ${cards_data[r].lose}%;"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
                  `
            }















          }

          if (!r_data_live) {
            r_data_live = `<style>
    :root {
      --white: #ffffff;
      --red: #e63946;
      --dark-red: #b91c1c;
      --light-red: #feca57;
    }

    

    .container9 {
      text-align: center;
    
      width:100%;
      height:100%;
      display: flex;
      justify-content: center;
      align-items:center;
      z-index: 20; /* High z-index to ensure visibility */
    }

    .message9 {
      font-size: 3rem;
      font-weight: bold;
      color: var(--red);
      opacity: 0;
      animation: fadeIn9 1.5s ease-in-out forwards;
      display: inline-block;
      white-space: nowrap;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Enhance readability */
    }

    .typewriter9 {
      overflow: hidden;
      animation: typewriter9 3s steps(40) 0.5s 1 normal both;
    }

    @keyframes fadeIn9 {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes typewriter9 {
      from { width: 0; }
      to { width: 100%; }
    }

    .pulse-circle9 {
      
      top: 50%;
      left: 50%;
      width: 100px;
      height: 100px;
      background: radial-gradient(circle, var(--red) 10%, transparent 70%);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: pulse9 2s infinite ease-in-out;
      z-index: 10; /* Below message */
    }

    @keyframes pulse9 {
      0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
      50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.3; }
      100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
    }

    #particle-canvas9 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0; /* Behind everything */
      opacity: 0.2;
    }

    .fallback-message9 {
      font-size: 1.5rem;
      color: var(--dark-red);
      display: none;
    }

    @media (max-width: 768px) {
      .message9 {
        font-size: 2rem;
      }
      .pulse-circle9 {
        width: 80px;
        height: 80px;
      }
    }
  </style>
      <div class="container9">
    <div class="pulse-circle9"></div>
    <div class="message9 typewriter9">No Data!</div>
    <div class="fallback-message9">No Data!</div>
  </div>
  <canvas id="particle-canvas9"></canvas>`
            rl = true

          }
          if (!r_data_upcoming) {
            r_data_upcoming = `<style>
    :root {
      --white: #ffffff;
      --blue: #0056b3;
      --dark-blue: #0056b3;
      --light-blue: #00bcd4;
    }

    

    .container92 {
      text-align: center;
    
      width:100%;
      height:100%;
      display: flex;
      justify-content: center;
      align-items:center;
      z-index: 20; /* High z-index to ensure visibility */
    }

    .message92 {
      font-size: 3rem;
      font-weight: bold;
      color: var(--blue);
      opacity: 0;
      animation: fadeIn92 1.5s ease-in-out forwards;
      display: inline-block;
      white-space: nowrap;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Enhance readability */
    }

    .typewriter92 {
      overflow: hidden;
      animation: typewriter92 3s steps(40) 0.5s 1 normal both;
    }

    @keyframes fadeIn92 {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes typewriter92 {
      from { width: 0; }
      to { width: 100%; }
    }

    .pulse-circle92 {
      
      top: 50%;
      left: 50%;
      width: 100px;
      height: 100px;
      background: radial-gradient(circle, var(--blue) 10%, transparent 70%);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: pulse92 2s infinite ease-in-out;
      z-index: 10; /* Below message */
    }

    @keyframes pulse92 {
      0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
      50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.3; }
      100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
    }

    #particle-canvas92 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0; /* Behind everything */
      opacity: 0.2;
    }

    .fallback-message92 {
      font-size: 1.5rem;
      color: var(--dark-blue);
      display: none;
    }

    @media (max-width: 768px) {
      .message92 {
        font-size: 2rem;
      }
      .pulse-circle92 {
        width: 80px;
        height: 80px;
      }
    }
  </style>
      <div class="container92">
    <div class="pulse-circle92"></div>
    <div class="message92 typewriter92">No Data!</div>
    <div class="fallback-message92">No Data!</div>
  </div>
  <canvas id="particle-canvas92"></canvas>`
            rup = true

          }
          if (!r_data_ended) {
            r_data_ended = `<style>
    :root {
      --white: #ffffff;
      --black: #000;
      --dark-black: #000;
      --light-black: rgba(0,0,0,0.5);
    }

    

    .container93 {
      text-align: center;
    
      width:100%;
      height:100%;
      display: flex;
      justify-content: center;
      align-items:center;
      z-index: 20; /* High z-index to ensure visibility */
    }

    .message93 {
      font-size: 3rem;
      font-weight: bold;
      color: var(--black);
      opacity: 0;
      animation: fadeIn93 1.5s ease-in-out forwards;
      display: inline-block;
      white-space: nowrap;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Enhance readability */
    }

    .typewriter93 {
      overflow: hidden;
      animation: typewriter93 3s steps(40) 0.5s 1 normal both;
    }

    @keyframes fadeIn93 {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes typewriter93 {
      from { width: 0; }
      to { width: 100%; }
    }

    .pulse-circle93 {
      
      top: 50%;
      left: 50%;
      width: 100px;
      height: 100px;
      background: radial-gradient(circle, var(--black) 10%, transparent 70%);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: pulse93 2s infinite ease-in-out;
      z-index: 10; /* Below message */
    }

    @keyframes pulse93 {
      0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
      50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.3; }
      100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
    }

    #particle-canvas93 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0; /* Behind everything */
      opacity: 0.2;
    }

    .fallback-message93 {
      font-size: 1.5rem;
      color: var(--dark-black);
      display: none;
    }

    @media (max-width: 768px) {
      .message93 {
        font-size: 2rem;
      }
      .pulse-circle93 {
        width: 80px;
        height: 80px;
      }
    }
  </style>
      <div class="container93">
    <div class="pulse-circle93"></div>
    <div class="message93 typewriter93">No Data!</div>
    <div class="fallback-message93">No Data!</div>
  </div>
  <canvas id="particle-canvas93"></canvas>`
            ren = true

          }


          let cards = document.querySelector(".products-grid")
          r_data = `  <div class="tab-container">
    <!-- Tab Headers -->
    <div class="tab-header">
      <div id='live-tab1' class="tab live-tab active">Live</div>
      <div id='upcoming-tab1' class="tab upcoming-tab">Upcoming</div>
      <div id='ended-tab1' class="tab ended-tab">Ended</div>
    </div>
    
    <!-- Tab Content -->
  
      <div class="tab-content">
        <div class="content live-content active">
       
          <div  class='tab_holder_1'>${r_data_live}</div>
        </div>
        <div  class="content upcoming-content">
        
          <div class='tab_holder_1'>${r_data_upcoming}</div>
        </div>
        <div  class="content ended-content">
          
          <div class='tab_holder_1'>${r_data_ended}</div>
        </div>
      </div>
  
  </div>`


          cards.innerHTML = r_data



          storeInfo('late', 'done')
          const tabs = document.querySelectorAll('.tab-header div');
          const contents = document.querySelectorAll('.tab-content > div');

          tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
              // Remove active state from all tabs and contents
              tabs.forEach(item => item.classList.remove('active'));
              contents.forEach(item => item.classList.remove('active'));

              // Activate clicked tab and its content panel
              tab.classList.add('active');
              contents[index].classList.add('active');
            });

          });
          if (rl) {
            if (!rup) {

              let lr = document.getElementById('upcoming-tab1')
              if (lr) {
                lr.click()
              }

            } else {
              message992()
              let lr = document.getElementById('ended-tab1')
              if (lr) {
                lr.click()
              }
              if (ren) {
                message993()

              }

            }

            message99()
          }


          const suggestionList = getTextContentsByClass('matchids')
          let suggestionObject = getTextContentIdMapping('matchids')
          // let seeIfClosed=document.getElementById('tday_dt')

          // Get references to the search input and suggestion container
          let inputField = document.querySelector('.search-input');
          document.getElementById('conttt').setAttribute('style', '')

          const suggestionsContainer = document.getElementById('suggestions');

          // Filter suggestions from the list based on the query (case-insensitive)
          function filterSuggestions(query) {
            query = query.toLowerCase();
            const filtered = suggestionList.filter(item => item.toLowerCase().includes(query));
            return filtered.slice(0, 3); // only return top 3 results
          }

          // Update the suggestions list in the DOM
          inputField.addEventListener('input', function (e) {
            const query = e.target.value;
            const results = filterSuggestions(query);

            // Clear any existing suggestions
            suggestionsContainer.innerHTML = '';

            // If the query isn't empty and there are suggestions, display them
            if (query.trim() !== '' && results.length > 0) {
              const ul = document.createElement('ul');
              results.forEach(suggestion => {
                const li = document.createElement('li');
                li.textContent = suggestion;
                li.addEventListener('click', function () {
                  inputField.value = suggestion;
                  let tge = document.getElementById(suggestionObject[suggestion.trim()])
                  let livep = document.getElementById('live-tab1')
                  let upp = document.getElementById('upcoming-tab1')
                  let endp = document.getElementById('ended-tab1')


                  if (tge) {
                    if (tge.getAttribute('data') == 'upcoming') {

                      if (upp) {
                        upp.click()

                      }
                    } else {
                      if (tge.getAttribute('data') == 'live') {
                        if (livep) {
                          livep.click()

                        }
                      } else {
                        if (tge.getAttribute('data') == 'ended') {
                          if (endp) {
                            endp.click()

                          }
                        }
                      }
                    }
                  }


                  scrollAndHighlight(suggestionObject[suggestion.trim()])

                  suggestionsContainer.innerHTML = '';
                  suggestionsContainer.classList.remove('visible');
                });
                ul.appendChild(li);
              });
              suggestionsContainer.appendChild(ul);
              suggestionsContainer.classList.add('visible');
            } else {
              suggestionsContainer.classList.remove('visible');
            }
          });

          inputField.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') { // Detect Enter key press
              e.preventDefault(); // Prevent default form submission (if applicable)

              // Get the first suggestion element
              const firstSuggestion = suggestionsContainer.querySelector('ul li');

              // If a suggestion exists, scroll and highlight it
              if (firstSuggestion) {
                const selectedText = firstSuggestion.textContent.trim();
                inputField.value = selectedText; // Autofill input with first suggestion



                scrollAndHighlight(suggestionObject[selectedText]); // Scroll and highlight the element

                // Clear suggestions
                suggestionsContainer.innerHTML = '';
                suggestionsContainer.classList.remove('visible');
              }
            }
          });


          // Optional: Hide suggestions when the input loses focus
          inputField.addEventListener('blur', function () {
            // Delay hiding so that click events on suggestions can be captured
            setTimeout(() => {
              suggestionsContainer.classList.remove('visible');
            }, 150);
          });

          let matchSummary2 = { suggestionList, suggestionObject, r_data_ended, r_data_live, r_data_upcoming, rl, rup, ren }
          localStorage.setItem("matchSummary2", JSON.stringify(matchSummary2));
          let loader88=document.querySelector('.loader88')
          if (loader88){
            loader88.style.display= 'none'
          }













        }

      } else {


      }


    })
    .catch(error => {
      storeInfo('late', 'failed')



    });
}


function getPredictionAccuracyChartConfig(color1, darkBod, darkBod2, darkBack, darkBack2, accurateData, inaccurateData, labels) {
  return {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Accurate Predictions',
          data: accurateData,
          borderColor: darkBod,
          backgroundColor: darkBack,
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
          borderColor: darkBod2,
          backgroundColor: darkBack2,
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
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      datasets: [{
        label: 'Prediction Accuracy',
        data: [34, 59, 43, 34, 62, 33, 54, 83, 33],
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
function getChartConfig2(dark, dtas, c) {

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


function updatecontent() {
  // console.log(statec)

  if (statec == 'today') {
    if (document.querySelector('.products-grid')) {


      // location.reload(false)
      let count_ = 0
      let state__int = setInterval(() => {

        count_ = count_ + 1
        let do_;
        let st = accessInfo('late')
        if (count_ == 1) {
          do_ = true
          storeInfo('late', null)
          // console.log('Requesting')

        }

        if (st == 'done') {
          if (count_ == 1) {
            do_ = true
            storeInfo('late', null)


          } else {
            do_ = false
            clearInterval(state__int)
          }

        } else {
          if (st == 'failed') {
            do_ = true
            storeInfo('late', null)
            count_ = 0
            // console.log('Retrying..')


          } else {
            if (st == 'busy') {
              // console.log('Busy..')
              do_ = false
            } else {
              do_ = true
            }
          }
        }
        if (document.querySelector('.products-grid')) {
          if (true) {
            if (do_) {
              if (true) {
                console.log('requested content')
                getproducts2()
              }
            }


          }
        } else {
          clearInterval(state__int)
        }

      }, 6000)






    } else {
      return false
    }
  } else {
    return false
  }
}


function getproducts_2_3() {
  // alert('fetching')
  storeInfo('late2', 'busy')
  let ptagstate = document.getElementById('state_loader')
  ptagstate.textContent = 'Fetching TechNify Data...'
  let fdata__ = document.getElementById('fdata__')
  fdata__.classList.remove('hide_bx')
  fetch(line + '/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: 'analysis' })
  })
    .then(response => {
      let ldata = document.getElementById('ldata')
      ldata.classList.remove('hide_bx')
      let ptagstate2 = document.getElementById('state_loader')
      ptagstate2.textContent = 'Loading Data...'
      let fdata__2 = document.getElementById('fdata__')
      fdata__2.classList.add('checked')


      return response.json()
    })
    .then(data3 => {
      let data = data3.message;



      storeInfo('late2', 'done')



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


      //remove the loader


      let ptagstate3 = document.getElementById('state_loader')
      ptagstate3.textContent = 'Are you TechNifyied?'
      let ldata2 = document.getElementById('ldata')
      ldata2.classList.add('checked')
      let loader = document.querySelector('.loading-container')

      loader.style.display = 'none'

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
      allMatches.reverse().forEach(match => {
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
      let tbdinner = tbody.innerHTML
      const summaryData = { finalPieData, allMatches, avgConfidence, correctCount, totalMatches, winMatches, lossMatches, finalWinData, finalLossData, tbdinner };
      localStorage.setItem("matchSummary", JSON.stringify(summaryData));
      storeCurrentTime()
      steps_to_remove_loader = 2
      updatecontent()







    }).catch(error => {
      steps_to_remove_loader = 1
      storeInfo('lastStoredTime', '')
      storeInfo('matchSummary', '')
      storeInfo('late2', 'failed')
      console.log('failed to recieve data:' + error)

    });
}

function updatecontent_2_3() {


  if (true) {
    if (true) {


      // location.reload(false)
      let count_ = 0
      let state__int2 = setInterval(() => {

        count_ = count_ + 1
        let do_;
        let st = accessInfo('late2')
        if (count_ == 1) {
          do_ = true
          storeInfo('late2', null)
          // console.log('Requesting')

        }

        if (st == 'done') {
          if (count_ == 1) {
            do_ = true
            storeInfo('late2', null)


          } else {
            do_ = false


            clearInterval(state__int2)
          }

        } else {
          if (st == 'failed') {
            do_ = true
            storeInfo('late2', null)
            count_ = 0
            // console.log('Retrying..')


          } else {
            if (st == 'busy') {
              // console.log('Busy..')
              do_ = false
            } else {
              do_ = true
            }
          }
        }
        if (true) {

          if (do_) {
            if (steps_to_remove_loader == 1) {
              getproducts_2_3()
            } else {
              console.log('validation has not taken place..')
            }
          }



        }


      }, 5000)






    }
  }
}

function updatecontent3() {
  // console.log(statec)
  if (statec == 'today') {
    if (document.querySelector('.products-grid').innerHTML == `<div class="loading-dots"><div></div><div></div><div></div></div>`) {
      setTimeout(() => {

        // location.reload(false)
        let state__int = setInterval(() => {
          if (document.querySelector('.products-grid')) {
            if (document.querySelector('.products-grid').innerHTML == `<div class="loading-dots"><div></div><div></div><div></div></div>`) {

              getproducts3()
            } else {
              clearInterval(state__int)
            }
          } else {
            clearInterval(state__int)
          }

        }, 7000)


      }
        , 3000)


    } else {
      return false
    }
  } else {
    return false
  }
}






