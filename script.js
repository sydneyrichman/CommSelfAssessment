function updateAndReveal() {
  // Your existing updateCounter() logic here
  updateCounter();

  // Reveal the counter container
  const counterContainer = document.getElementById('counterContainer');
  counterContainer.style.display = 'block';
}

function updateCounter() {
  const checkboxes = document.querySelectorAll('.multi-select-checkbox');
  let styleOne = 0;
  let styleTwo = 0;
  let styleThree = 0;
  let styleFour = 0;
  
  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      if (index % 80 === 1 || index % 80 === 8 || index % 80 === 9 || index % 80 === 13 || index % 80 === 17 || index % 80 === 24 || index % 80 === 26 || index % 80 === 31 || index % 80 === 33 || index % 80 === 40 || index % 80 === 41 || index % 80 === 48 || index % 80 === 50 || index % 80 === 53 || index % 80 === 57 || index % 80 === 63 || index % 80 === 65 || index % 80 === 70 || index % 80 === 74 || index % 80 === 79) {
        styleOne++;
      } 
      else if(index % 80 === 2 || index % 80 === 7 || index % 80 === 10 || index % 80 === 14 || index % 80 === 18 || index % 80 === 23 || index % 80 === 25 || index % 80 === 30 || index % 80 === 34 || index % 80 === 37 || index % 80 === 42 || index % 80 === 47 || index % 80 === 51 || index % 80 === 55 || index % 80 === 58 || index % 80 === 62 || index % 80 === 66 || index % 80 === 69 || index % 80 === 75 || index % 80 === 78){
        styleTwo++;
      }
      else if(index % 80 === 3 || index % 80 === 6 || index % 80 === 11 || index % 80 === 15 || index % 80 === 19 || index % 80 === 22 || index % 80 === 27 || index % 80 === 29 || index % 80 === 35 || index % 80 === 38 || index % 80 === 43 || index % 80 === 46 || index % 80 === 49 || index % 80 === 56 || index % 80 === 59 || index % 80 === 64 || index % 80 === 67 || index % 80 === 7 || index % 80 === 76 || index % 80 === 0){
        styleThree++;
      }
      else {
        styleFour++;
      }
    }
  });
  
  document.getElementById('styleOne').textContent = styleOne;
  document.getElementById('styleTwo').textContent = styleTwo;
  document.getElementById('styleThree').textContent = styleThree;
  document.getElementById('styleFour').textContent = styleFour;
}
