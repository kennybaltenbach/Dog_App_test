let dogApp = (function () {
  
  return {
    loadImage: function () {
      return fetch('https://dog.ceo/api/breeds/image/random')
        .then(function (response) {
          return response.json();
        })
        .then(function (image) {
          let dogImage = image.message; // URL des Bildes
          console.log(dogImage); // URL in der Konsole anzeigen
          return dogImage; // URL zurückgeben
        });
    },

    fetchButton: function () {
      let fetchButton = document.querySelector('.fetch_button'); // Button auswählen
      let image = document.querySelector('.dog_image'); // Bild-Element auswählen

      fetchButton.addEventListener('click', function () {
        // Lädt ein neues Bild, wenn der Button geklickt wird
        dogApp.loadImage().then(function (dogImageUrl) {
          image.src = dogImageUrl; // Bildquelle des Bildes ändern
        });
      });
    },

    initialImg: function() {
      let image = document.querySelector('.dog_image');
      dogApp.loadImage().then(function(initialImage) {
        image.src = initialImage;
      }).then(function(){
        let imgContainer = document.querySelector('.dog_image');
        imgContainer.classList.remove('hidden');
        })
    }
      
  };
})();
// Button und initiale Bild-Logik initialisieren
dogApp.initialImg();
dogApp.fetchButton();





let user = {
  name: 'Benny',
  age: 37,
  location: 'Berlin'
}


function test(a,b){
result = a+b;
return result;
}

function test2(a) {
 let futureAge = user.age + a;
 console.log((`In ${a} Jahren bist du ${futureAge} Jahre alt`))

}

test2(15);






