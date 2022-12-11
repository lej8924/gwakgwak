const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
  let lastHole;
  let timeUp = false;
  let score = 0;

  function randTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function randHole(holes) {
    const randIndex = Math.floor(Math.random() * holes.length);
    const hole = holes[randIndex];
    if (hole === lastHole) {
      return randHole(holes);
    }

    lastHole = hole;
    return hole;
  }

  function peep() {
    const time = randTime(500, 1000);
    const hole = randHole(holes);
    hole.classList.add('up');

    setTimeout(() => {
      hole.classList.remove('up');
      if(!timeUp) {
        peep();
      }
    }, time);
  }

  function startGame() {
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    peep();
 

    setTimeout(function(){timeUp = true;  fetch("http://localhost:8080/api/game", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ score:scoreBoard.textContent })
      }).then(response => {
          console.log(response.ok);
      }).catch(error => {
          console.warn(error);
      })}, 10000).then(
     
    );
    // sendPost('http://localhost:8080/api/game',{score:score});
  }

  function retryGame(){   
    console.log("retry!")
    window.location.reload(true);
    startGame();
   }

  function bonk(e) {
    if (!e.isTrusted) return;   // isTrusted is a property that tells whether mouse event is fake or not
    
    this.classList.remove('up');
    score++;
    scoreBoard.textContent = score;
  }

  moles.forEach(mole => mole.addEventListener('click', bonk));

  function sendPost(url, params) {
    var form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('target', '_blank');
    form.setAttribute('action', url);

    for (var key in params) {
      var hiddenField = document.createElement('input');
      hiddenField.setAttribute('type', 'hidden');
      hiddenField.setAttribute('name', key);
      hiddenField.setAttribute('value', params[key]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
  }
