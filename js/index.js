let prev_state_s = accessInfo(de('state',date2))
storeInfo(en('state',date2), 'index.html')
let st= document.querySelector('style')
st.innerHTML=''
function isIphone() {
    // Check the user agent string for 'iPhone'
    return /iPhone/.test(navigator.userAgent);
}


// Function to show and hide the notification
function showNotification() {
    const notification = document.getElementById("notification");
    notification.classList.add("show"); // Add 'show' class for visibility
  
    // Hide the notification after 3 seconds
    setTimeout(() => {
      notification.classList.remove("show"); // Remove 'show' class
    }, 19000);
  }
  
  // Call the function to trigger the notification
  
  

// Example usage
let ip = 'none'
if (isIphone()) {
    ip = true
} else {
    ip = false
};
function detectDeviceType2() {
    const userAgent = navigator.userAgent;

    if (/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        if (/iPad|tablet|Kindle|PlayBook|Silk|Android/i.test(userAgent) && !/Mobile/i.test(userAgent)) {
            return 'Tablet';
        } else {
            return 'Mobile Device';
        }
    } else {
        return 'Laptop/Desktop';
    }
}

// Example usage
const dtype = detectDeviceType2();
//   alert(`The device is a: ${dtype}`);


function detectDeviceType1() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /android|webos|iphone|ipod|blackberry|iemobile|opera mini/.test(userAgent);
    const isTablet = /ipad|android(?!.*mobile)/.test(userAgent);

    if (isTablet) {
        return 'Tablet';
    } else if (isMobile) {
        return 'Mobile';
    } else {
        return 'Desktop/Laptop';
    }
}

// Example usage
const deviceType = detectDeviceType1();
// alert( deviceType);









let logged=accessInfo(en('logged',date1))
let btn = document.querySelector('.searchButton');
let inpt = document.querySelector('.searchInput');
let btn_txt = document.querySelector('.material-icons');
let sbox = document.querySelector('.searchBox ');
let images_h = document.querySelector('.images');
let prev_btn_h = document.querySelector('.prev');
let next_btn_h = document.querySelector('.next');
let ts = document.querySelectorAll('select');
let con2_s5 = document.querySelector('.container5');
let inf_nsp = document.querySelectorAll('.inf_txt_nsp');
let inf_h_nsp = document.querySelectorAll('.nsp_h')


if(logged){
    tp_lg= document.querySelector('.status')
    let usname= de(accessInfo(en('username',date1)),date1)
    tp_lg.innerHTML=`
    <p>
        <span class="status-head">Welcome, <span class="username">${usname}</span></span> <span id="status-info"> We're glad to have you here.</span>
    </p>
    `
    if(theme=='Light'){
        let uslname= document.querySelector('.username');
        uslname.style.color='#1E3A8A'
    }
}

if (ip) {
    next_btn_h.style.opacity = 0
    next_btn_h.style.visibility = 'hidden'
    next_btn_h.style.maxWidth = '0px'
}

if (theme == 'Light') {
    inf_h_nsp.forEach(element => {
        element.style.color = "#1E3A8A"
    })



    ts.forEach(element => {
        element.style.color = 'black'
    })
    con2_s5.style.backgroundColor = 'white'

} else {
    con2_s5.style.backgroundColor = 'black'
    inf_nsp.forEach(element => {
        element.style.color = 'white'
        element.style.fontWeight = 500
    })

}

let category_s4 = document.querySelector('.category_con');
let category_s4_head = document.querySelector('.cathead');

let containers_s3 = document.querySelector('.containers');
let hd = document.querySelector('.m1');

let tr = 0

let snum = 5


let state_h = 1
const data = {
    1: {
        item: "Latest NSPanel Lite",
        amount: "R600.00",
        type_: "Trading item",
        src: "sources/NSPanel-PRO.jpg",
        description: "Latest Modern NSPanel image",
        tp: "img"
    },
    2: {
        item: "Latest NSPanel Lite",
        amount: "R600.00",
        type_: "Trading item",
        src: "sources/v1.webm",
        description: "Latest Modern NSPanel image",
        tp: "vid"
    },


};


if (ip) {
    images_h.innerHTML = `<img  class="item img js1" alt="Product image" id="active"
src="${data[1]['src']}"/>
`
} else {

    images_h.innerHTML = `<video autoplay loop  class="item img js1" alt="Product image" id="active"
    src="${data[2]['src']}"video/>`
}

// if(deviceType=='Tablet'){
//     images_h.innerHTML= `<video autoplay loop muted  class="item img js1" alt="Product image" id="active"
//     src="${data[2]['src']}"video/>`
// }



let tnt = document.querySelector('.tent');
tnt.innerHTML = `<div class="Action ct1">${data[1]['type_']}</div>
        <div class="Action ct2">${data[1]['item']}</div>
        <div class="Action ct3">Starting at <span class="amount_">${data[1]['amount']}</span></div>
        <div class="button">Shop Now</div>`
let ct1 = document.querySelector('.ct1');
let ct2 = document.querySelector('.ct2');
let amount_h_ct = document.querySelector('.amount_');
let shopNowBtn = document.querySelector('.button');
// light theme edits
let sthead = document.querySelector('.status-head');
let com_name = document.querySelector('.com-name');


let main_navs = document.querySelectorAll('.main_navs');
let head_f = document.getElementById('h1');
let cons4 = document.querySelectorAll('.container_s4');
let hars = document.querySelectorAll(".arhead")



const data2 = {
    1: {
        src_js: "sources/pns1out.jpg",
        type_info_js: "NSPanel Pro",
        left_info_js: "(55)",
        vw: "Get One"
    },
    2: {
        src_js: "sources/nss.jpg",
        type_info_js: "NSPanel Lite",
        left_info_js: "(36)",
        vw: "Get One"
    },



}

let data2_length = Object.keys(data2).length;
{/* <div class="container_">
<div class="img_s3">
    <img src="sources/output_image.png" alt="">

</div>
<div class="info">
    <div class="info-head">
        <div class="type-info">Smart Watches & Rings</div>
        <div class="left-info">(84)</div>
    </div>
    <div class="view" id="s3_p1">
        Show All
    </div>

</div>

</div> */}

containers_s3.innerHTML = ` <div class="container_" id='s3_h_p1'>
<div class="img_s3">
    <img src="${data2[1]['src_js']}" alt="">

</div>
<div class="info">
    <div class="info-head">
        <div class="type-info">${data2[1]['type_info_js']}</div>
        <div class="left-info">${data2[1]['left_info_js']}</div>
    </div>
    <div class="view" id="s3_p1">
        ${data2[1]['vw']}
    </div>

</div>

</div> `


let cons3 = document.getElementById('scrollable');

for (let i = 1; i <= (data2_length - 1); i++) {
    m = i + 1;
    // alert(m)
    cons3.innerHTML = cons3.innerHTML + ` <div class="container_" id='s3_h_p${m}'>
<div class="img_s3">
    <img src="${data2[m]['src_js']}" alt="">

</div>
<div class="info">
    <div class="info-head">
        <div class="type-info">${data2[m]['type_info_js']}</div>
        <div class="left-info">${data2[m]['left_info_js']}</div>
    </div>
    <div class="view" id="s3_p${m}">
        ${data2[m]['vw']}
    </div>

</div>

</div> `




}
let cons = document.querySelectorAll('.container_')
let t_info = document.querySelectorAll('.type-info');
let vall = document.querySelectorAll('.view');














if (theme == 'Light') {
    hd.innerHTML = `<span class="com-name comp2">Technify</span> Your Surroundings`;



} else {
}
// hd.innerHTML=`Elevate Your Innovations with <span class="com-name comp2">TechNify</span>`
// }}


let item_length = Object.keys(data).length;




// Number of iterations


// For loop to iterate the specified number of times
// for (let i = 1; i <= (item_length-1); i++) {
//     m=i+  1
//     if (data[m].tp=='img'){
//         '\n' + '<img src="#" class="item img js'+ String(m) +'" alt="Product image" id="unactive">'
//     }else{
//     images_h.innerHTML+= '\n' + '<video autoplay loop src="#" class="item img js'+ String(m) +'" alt="Product image" id="unactive">'}

// }js




function playvid() {
    var video = document.querySelector('video');
    // Force video play on load for all devices
    if (deviceType == 'Desktop/Laptop') {
        video.play().catch(function (error) {
            console.log('Autoplay was prevented:', error); // Fallback code here if autoplay is blocked

            ; video.play()
        }
        )
    };
}




prev_btn_h.style.visibility = 'hidden'

{/* <img src="s1.jpg" class="item img" alt="Product" id="active">
        <img src="none" class="item img" alt="Product" id="unactive">
        <img src="none" class="item img" alt="Product" id="unactive"></img> */}





btn.addEventListener('click', () => {
    alert('Field not yet TechNyfied')
});


{/* <img src="s1.jpg" class="item img js1" alt="Product" id="active">
        <img src="none" class="item img js1" alt="Product" id="unactive">
        <img src="none" class="item img js1" alt="Product" id="unactive"></img> */}

let ch = 'none'

next_btn_h.addEventListener('click', () => {
    if (!(ch == 'none')) {
        if (state_h == (item_length - 1)) {
            next_btn_h.style.visibility = 'hidden'
            prev_btn_h.style.visibility = 'visible'
        }
        else {
            next_btn_h.style.visibility = 'visibility'
            prev_btn_h.style.visibility = 'visible'
        }
        if (state_h < (item_length)) {

            let select = '.js' + String(state_h)
            let img = document.querySelector(select)
            // console.log(img)
            img.setAttribute('id', 'unactive')

            state_h++;
            // console.log(state_h)
            select = '.js' + String(state_h)
            img = document.querySelector(select)

            if (img.getAttribute('src') == '#') {
                img.setAttribute('src', data[state_h]['src'])
                img.setAttribute('id', 'active')


            } else {
                img.setAttribute('id', 'active')
            }
            ct1.textContent = data[state_h]['type_']
            ct2.textContent = data[state_h]['item']
            amount_h_ct.textContent = data[state_h]['amount']
            // ct1.textContent= data[state_h]['type_']



        }
    }
}
)

prev_btn_h.addEventListener('click', () => {
    if (!(ch == 'none')) {
        if (state_h == 2) {
            prev_btn_h.style.visibility = 'hidden'
            next_btn_h.style.visibility = 'visible'
        }
        else {
            prev_btn_h.style.visibility = 'visibility'
            next_btn_h.style.visibility = 'visible'

        }

        if (state_h > 1) {

            let select = '.js' + String(state_h)
            let img = document.querySelector(select)
            // console.log(img)
            img.setAttribute('id', 'unactive')
            state_h--;
            // console.log(state_h)
            select = '.js' + String(state_h)
            img = document.querySelector(select)

            if (img.getAttribute('src') == '#') {
                img.setAttribute('src', data[state_h]['src'])
                img.setAttribute('id', 'active')


            } else {
                img.setAttribute('id', 'active')
            }

            ct1.textContent = data[state_h]['type_']
            ct2.textContent = data[state_h]['item']
            amount_h_ct.textContent = data[state_h]['amount']

        }
    }
}
);

// light theme edits 1
let ops = document.querySelector('style');


// light theme edits 2
let opimg = document.querySelectorAll('.img');
let com2_ = document.querySelector('.comp2');

let mainn = document.querySelector('.main');
let nones = document.querySelectorAll('#none');



if (theme == 'Light') {
    mainn.style.color = '#1E3A8A'
    mainn.style.fontWeight=600

    nones.forEach(element => {
        element.style.fontWeight = 600
        element.style.color='#000'

    })
    ops.innerHTML = ops.innerHTML + `.op1{
        color: black
    }
    
    .op11{
        color:white
    }`
    head_f.style.borderBottom = '1px solid black';


    pagbody2.style.color = 'black';
    sthead.style.color = 'black';
    com_name.style.color = 'black';
    com_name.style.animationName = 'colorFlow2';
    inpt.style.color = 'black';
    sbox.style.borderBottom = '2px solid black'
    sbox.style.borderTop = '2px solid black';
    prev_btn_h.style.color = 'white';
    next_btn_h.style.color = 'white';
    shopNowBtn.style.color = 'black';
    shopNowBtn.style.fontWeight = '700';
    shopNowBtn.style.backgroundColor = 'white';
    shopNowBtn.style.animationName = 'rotate2';
    shopNowBtn.style.borderLeft = '4px solid black';
    shopNowBtn.style.borderRight = '4px solid black';
    shopNowBtn.style.borderBottom = '4px solid transparent';
    shopNowBtn.style.borderTop = '4px solid transparent';
    // cons3.style.borderBottom='2px solid black';
    // containers_s3.style.borderTop='2px solid black';


    category_s4.style.border = '2px solid black';
    category_s4_head.style.color = 'black';
    category_s4_head.style.fontWeight = '900';




    main_navs.forEach(element => {
        if (element.getAttribute('id') == 'main') {


            element.style.fontWeight = 1000
        } else {
            // element.style.color='black'
        }
        element.style.fontWeight = 1000

        element.addEventListener('mouseover', () => {
            element.style.textDecoration = 'underline rgba(44, 61, 115, 0.7)'
        })
        element.addEventListener('mouseout', () => {
            element.style.textDecoration = 'none'
        })
    })
    cons4.forEach(element => {
        element.style.border = '1px solid black'

    })
    hars.forEach(element => {
        element.style.borderBottom = '1px solid black'
    })



    // alert('het')
    pagbody2.style.backgroundColor = 'white'
    t_info.forEach(element => {
        element.style.color = 'black'
        element.style.color = 'black';
        element.style.fontWeight = 1000
        element.style.opacity = 1;
    })
    vall.forEach(element => {

        element.classList.add('view2')


    })

    cons.forEach(element => {

        element.style.backgroundColor = 'white';
        element.style.border = '2px solid black ';
        element.style.boxShadow = ` 0 5px 5px rgba(48, 150, 233, 0.7), 0 10px 10px rgba(44, 61, 115, 0.7), 0 10px 10px rgba(0, 0, 0, 1)`;



    });
} else {
    cons.forEach(element => {
        // element.style.backgroundColor='rgba(0,0,1)';
        // element.style.border='1px solid black';
        element.style.boxShadow = ` 0 5px 5px rgba(48, 150, 233, 0.7), 0 10px 10px rgba(44, 61, 115, 0.7), 0 10px 10px rgba(0, 0, 0, 1)`;


    });
}
if (!ip) {
    let bid = document.querySelector('.js1')
    bid.pause()
    next_btn_h.addEventListener('click', () => {
        let vid = document.querySelector('.js1')
        vid.play()
        if (next_btn_h.textContent == 'Play') {
            next_btn_h.textContent = 'Pause';

        } else {
            next_btn_h.textContent = 'Play';
            vid.pause()
        }
        // alert('played')
    })
}





function getDeviceWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

function displayDeviceWidth() {
    const deviceWidth = getDeviceWidth();
    let st = 0
    if (deviceWidth <= 236 & !(deviceType == 'Desktop/Laptop')) {
        window.location.replace("test2.html");

    }



    // console.log(`The current device width is: ${deviceWidth}px`);
    st = btn.style.transform
    if (322 <= deviceWidth <= 359) {
        // btn.style.transform= 'translateY(-100%)'
    } else {
        //    btn.style.transform= 'translateY(100%)'
    }

}

// Initial check
displayDeviceWidth();

// Add an event listener to detect window resize
window.addEventListener('resize', displayDeviceWidth);

shopNowBtn.addEventListener('click', () => {
        window.location.assign("login/");       
})

let ov = document.querySelector('.overlay')
ov.style.opacity = 0.5




// window.addEventListener('load', () => {
//     showNotification();
// })

{/* <p>
    <span class="status-head">Welcome, <span class="username">User</span>!</span> <span id="status-info">We're glad to have you here.</span>
</p> */}