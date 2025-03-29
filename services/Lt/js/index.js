let dmcon = accessInfo(access_)
let givendt = accessInfo('domContentdate')
let pmain_state = accessInfo('main_state')
if (givendt) {
    checkTimeDifference(givendt, onThresholdMet);
}
if (dmcon & online) {

    document.body.innerHTML = dmcon
}



let menu_img = document.querySelector(".menu");
let menu = document.querySelector(".closed");
let qry = document.getElementById("input");
let holder = document.querySelector(".holder");
let state = document.querySelector(".state");
let self = document.getElementById("main_js");
let status_heading = document.querySelector(".status_heading");
let caption = document.querySelector(".cap");
let premium = document.querySelector(".pversion");
let main_state = "wining_matches";
if (pmain_state) {
    main_state = pmain_state
}

let label = document.querySelector("label")
document.addEventListener('DOMContentLoaded', function () {




    let date2 = 18
    let date1 = 17

    // let prev_state_s = accessInfo(de('state',date2))
    storeInfo(en('state', date2), 'cost')
    let curentAmount = 0;
    if (accessInfo(en('logged', date1))) {
        // alert('logged '+ accessInfo(en('logged',date1)))
    } else {
        // window.location.assign('../../login')
    }



})



let theme = accessInfo('theme_+-----')
if (theme) {
    if (theme == 'Dark') {
        window.location.assign('../Dk')
    }

}
let cmst = main_state
premium.addEventListener("click", () => {
    if (main_state == "premium") {
        qry.setAttribute('class', '');
        label.style.display = 'unset';
        main_state = "wining_matches";
        state.textContent = "Get more info about an individual match";
        status_heading.textContent = "obvious winining matches";
        caption.textContent = "Enter two seperate teams";
        qry.setAttribute("placeholder", "e.g country-england");
        premium.textContent = "Premium";
        btn.style.transform = 'scale(1)';
        btn.textContent = 'Submit';

    } else {
        main_state = "premium";
        premium.textContent = "Normal";
        qry.setAttribute("placeholder", "");
        qry.setAttribute('class', 'Removebtn');
        status_heading.textContent = "Current due matches";
        caption.textContent = "Click Initiate!";
        btn.textContent = 'Initiate';
        btn.style.transform = 'scale(2)';
        state.textContent = "";
        label.style.display = 'none';
    }
})


state.addEventListener("click", () => {
    if (main_state == "wining_matches") {
        qry.setAttribute('class', '')
        label.style.display = 'unset';
        main_state = "individual_matches";
        state.textContent = "Get Predictable Matches";
        status_heading.textContent = "Compare 2 Teams";
        caption.textContent = "Enter two seperate teams";
        qry.setAttribute("placeholder", "Liverpool vs Chelsea ");
        btn.textContent = 'Submit';
    } else {
        qry.setAttribute('class', '')
        label.style.display = 'unset';
        main_state = "wining_matches";
        state.textContent = "Compare 2 Teams";
        status_heading.textContent = "Predictable Matches";
        caption.textContent = "Team or Country Name";
        qry.setAttribute("placeholder", "e.g country-england");
        btn.textContent = 'Submit';
    }
    if (main_state == "premium") {
        qry.setAttribute('class', '');
        label.style.display = 'unset';
        main_state = "individual_matches";
        state.textContent = "Get Predictable matches";
        status_heading.textContent = "Compare 2 Teams";
        caption.textContent = "Enter two seperate teams";
        qry.setAttribute("placeholder", "Liverpool vs Chelsea");
        btn.textContent = 'Submit';
    }



})



menu_img.addEventListener("click", () => {
    if (menu_img.textContent == "Menu") {
        menu_img.textContent = "Close";
    } else {
        menu_img.textContent = "Menu";
    }
    menu_img.classList.toggle("pink");

    menu.classList.toggle("open");


})

let btn = document.querySelector(".btn");
let cencon = document.getElementById("cencon");
let out = document.querySelector(".output");


let bordero = out.style.border;
let inno = out.innerHTML


qry.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') { runPythonScript(); }
}
);
function runPythonScript() {

    value = qry.value;
    if (value.length > 0 || main_state == "premium") {
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
        
        if (main_state == "wining_matches") {
            http = line+ "/receive_message";
        }
        if (main_state == "individual_matches") {
            http = line+"/individual_receive_message";
        }
        if (main_state == "premium") {
            http = line+"/premium";
        }
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

// Example usage
// const text = "exampleText";
// const key = "12345";
// const encryptedText = en(text, key);
// console.log("Encrypted Text:", encryptedText);

function storeInfo(key, value) {
    localStorage.setItem(key, value);
    // console.log(`Data stored: ${key} = ${value}`);
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

function waitForEnter(input, callbackFunction) {
    const inputElement = input;

    inputElement.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {  // Check if the pressed key is "Enter"
            callbackFunction(); // Call the provided function
        }
    });
}

// Example usage:
// Define the function to execute when "Enter" is pressed
function onEnterPressed() {
    console.log('Enter key was pressed!');
}

// Call waitForEnter, passing the ID of the input and the function to call
waitForEnter(qry, onEnterPressed);


function saveDOMBeforeReload() {
    window.addEventListener('beforeunload', function () {
        try {
            // Get the current DOM content
            const domContent = document.body.innerHTML;
            const exampleDate = new Date();
            // Save it in local storage
            localStorage.setItem('domContent', domContent);
            localStorage.setItem('domContentdate', exampleDate);
            localStorage.setItem('main_state', main_state);

            console.log('DOM content saved before reload!');
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

    // Check if the time difference is 10 minutes or more (10 minutes = 600,000 milliseconds)
    if (timeDifference >= 120000) {
        ; // Call the provided function
        localStorage.setItem('domContent', '')
        localStorage.setItem('domContentdate', '')
    } else {
        console.log('The 10-minute threshold has not yet been reached.');
    }
}

// Example usage:
// Define the function to execute
function onThresholdMet() {
    console.log('10 minutes have passed since the given date!');
}

// Provide a specific date to test


