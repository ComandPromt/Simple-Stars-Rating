function limpiar_estrellas(){

  for(var i =1;i<=5;i++){
    document.getElementsByClassName('r'+i)[0].classList.remove("fullstar");
  }
  
}

(function() {

  var ratings = {
    1: 'Nicht gut',
    2: 'Naja',
    3: 'Ok',
    4: 'Cool',
    5: 'Wohooo!'
  };

  var stars = document.getElementsByClassName('star');

  function fillStars(mynode) {
    // Is it a node or already a rating?
    var num;
    if(Number.isInteger(mynode)) {
      num = mynode;
    } else {
      num = mynode.className.match(/\d+/)[0];
    }

    emptyStars()
    .then(function() {
      for(var i = 1; i <= num; i++) {
        document.getElementsByClassName('r'+i)[0].classList.add("fullstar");
      }
      document.getElementById("rate-string").textContent = ratings[num];
    })

  }

  function getRating(id) {
    fetch(host+'/rater.php?id='+id)
    .then(function(result) {
      result.json()
      .then(function(data) {
        return new Promise(function(resolve, reject) {
          fillStars(data.rating);
          resolve();
        })
        .then(function() {
          var bewstring = "";
          if(data.votes > 1) {
            bewstring = "Bewertungen";
          }
          else if(data.votes === 0) {
            bewstring = "Bewertungen";
          }
          else {
            bewstring = "Bewertung";
          }
          document.getElementById("rate-string").textContent = data.votes + " " + bewstring;
        });
      });
    });
  }

  function emptyStar(mynode) {
	  
	  if(mynode!=undefined){
		var num = mynode.className.match(/\d+/)[0];
		document.getElementsByClassName('r'+num)[0].classList.remove("fullstar");
	}
	
  }

  function emptyStars() {
    return new Promise(function(resolve, reject) {
      for(var i = 0; i < stars.length; i++) {
        stars[i].classList.remove("fullstar");
      }
      document.getElementById("rate-string").textContent = "";
      resolve(true);
    });
  }

function pintar(numero){

  if(numero>0){

    for(var i=1;i<=numero;i++){
      document.getElementsByClassName('r'+i)[0].classList.add("fullstar");
    }

  }

}



  pintar(0); // cambia el 0 por el número de estrellas por defecto

  for(var i = 0; i < stars.length; i++) {

   stars[i].addEventListener('mouseover', fillStars.bind(this, stars[i]));
 
  }

})();
