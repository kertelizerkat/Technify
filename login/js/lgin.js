function validateForm() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  reg_h=document.querySelector('.reg_h')
  // Check if fields are empty
  if (email === '' || password === '') {
    alert('All fields are required!');
    return false;
  }

  // Username validation (example: check if it's an email)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    reg_h.textContent='Invalid Email'
    reg_h.style.color='red'
    
    return false;
  }

  // Password validation (example: minimum 8 characters, at least one number and one special character)
  const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  

  // Additional security measure: sanitize input to prevent XSS
  const sanitizedEmail = email.replace(/[^\w\s@.-]/gi, '');
  const sanitizedPassword = password.replace(/[^\w\s!@#$%^&*.-]/gi, '');

  // Use sanitizedUsername and sanitizedPassword for further processing
  console.log('Sanitized Username:', sanitizedEmail);
  console.log('Sanitized Password:', sanitizedPassword);

  data = { data: `${(en(sanitizedEmail,date2))}(@)${en(password,date2)}(@)` }
  sendFormData(data)
  // alert('Login successful!');
  return false;
}


   

  function sendFormData(data) {
    // Send data to Flask application using fetch

    const http = "https://sculpin-charming-directly.ngrok-free.app/login";
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
                reg_h.textContent='Invalid Credentials'
                reg_h.style.color='red'

                const c_btn = document.getElementById('btn_l')
                c_btn.textContent = 'Failed'
                c_btn.style.backgroundColor = 'red'
                // c_btn.setAttribute('type','')
                
                setTimeout(()=>{
                  c_btn.textContent='Try again';
                  c_btn.style.backgroundColor='#007bff';
                  reg_h.textContent='Register'
                  reg_h.style.color='#ADD8E6'
              }, 2000);
              }
            }else{
                  

              const ps=data['password']
              const p=data['phone']
              const us=data['username']
              const em=data['email']
              storeInfo(en('password',date1),ps)
              storeInfo(en('phone',date1),p)
              storeInfo(en('username',date1),us)
              storeInfo(en('email',date1),em)

              const c_btn = document.getElementById('btn_l')
              c_btn.textContent='Done';
              c_btn.style.backgroundColor='#28a745';
              reg_h.textContent='Register';
              reg_h.style.color='#ADD8E6';
              // c_btn.textContent = 'Failed'
              // c_btn.style.backgroundColor = 'red'
              // c_btn.setAttribute('type','')
              
              setTimeout(()=>{
               
                window.location.assign("../cost/index.html")


                
            }, 2000);
            }

        })
        .catch(error => {
            console.log("Something went wrong with the response", error);

            reg_h.textContent='An error occured'
            reg_h.style.color='red'

            const c_btn = document.getElementById('btn_l')
            c_btn.textContent = 'Failed'
            c_btn.style.backgroundColor = 'red'
            // c_btn.setAttribute('type','')
            
            setTimeout(()=>{
              c_btn.textContent='Try again';
              c_btn.style.backgroundColor='#007bff';
              reg_h.textContent='Register'
              reg_h.style.color='#ADD8E6'
          }, 2000);
         

        });

    // return "passed"// Prevent form from submitting the traditional way n Incorrect2007@
      }