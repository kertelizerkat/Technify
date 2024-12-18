document.addEventListener('DOMContentLoaded', function() {
    const capitecButtonContainer = document.getElementById('capitec-button-container');
    const tymebankButtonContainer = document.getElementById('tymebank-button-container');
  
    // Capitec Pay button
    const capitecButton = document.createElement('button');
    capitecButton.textContent = 'Pay with Capitec';
    capitecButton.addEventListener('click', function() {
      alert('Capitec Pay integration coming soon!');
      // Add Capitec Pay integration logic here
    });
    capitecButtonContainer.appendChild(capitecButton);
  
    // TymeBank PayShap button
    const tymebankButton = document.createElement('button');
    tymebankButton.textContent = 'Pay with TymeBank';
    tymebankButton.addEventListener('click', function() {
      alert('TymeBank PayShap integration coming soon!');
      // Add TymeBank PayShap integration logic here
    });
    tymebankButtonContainer.appendChild(tymebankButton);
  });
  