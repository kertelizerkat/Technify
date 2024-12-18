document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const quantity = document.getElementById('quantity').value;
    const costPerNSPanel = 1200; // Assuming the cost per NSPanel is R600
    const totalCost = quantity * costPerNSPanel;
    
    document.getElementById('totalCost').textContent ='R'+ totalCost.toFixed(2);
  });
  


const username=accessInfo(en('username',date1))
if (username){
      const username_= document.querySelector('.Uname')
      username_.textContent= de(username,date1)
}
else{
  window.location.assign("../login/index.html")
}
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
let dt= document.querySelector('.date')
dt.textContent= currentYear