let counter = 1;
setInterval(function(){
  if ( document.getElementById('radio' + counter)) {
    document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
  }{
  }
}, 5000); // Change slide every 5 seconds




