// Store
document.querySelector('#submit').addEventListener('submit', function (event) {
    event.preventDefault();
    var initials = document.querySelector('#initials').value;
    localStorage.setItem(initials, timer);
    displayScores();
  });
  
  // Retrieve
  document.querySelector('#resultsDIV').style.display = 'none';
  document.querySelector('#scoresDIV').style.display = 'none';
  
  document.querySelector('#viewScores').addEventListener('click', displayScores);
  function displayScores() {
    document.querySelector('#scoresDIV').style.display = 'block';
    Object.keys(localStorage).forEach(function (key) {
      console.log(localStorage.getItem(key));
  
      var li = document.createElement('li');
      li.textContent = key + '-' + localStorage.getItem(key);
      document.querySelector('#scoreslist').appendChild(li);
    });
    document.querySelector('.container').style.display = 'none';
    document.querySelector('#resultsDIV').style.display = 'none';
  }
  