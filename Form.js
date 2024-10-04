
var friendAdded = 0;
var formFriend = 0;

function addFriend(){
    friendAdded++;

    var newFormFriend = document.createElement("div");

    newFormFriend.id = `formFriend${friendAdded}`;

    newFormFriend.innerHTML = `<p id="friendNumber${friendAdded}" class="mt-5 mb-3 fw-bold fs-5">Friend number ${friendAdded}:</p>`;
    var a = `<div id="row-nome-cognome${friendAdded}" class="row mb-4 mt-4">`+
              '<div class="col-lg-3 col-md-2"></div>'+
              `<div id="Nome${friendAdded}" class="col-lg-3 col-md-4 col-sm-6 mb-3">`+
                '<label for="validationDefault01" class="form-label">Nome</label>'+
                '<input type="text" class="form-control" id="validationDefault01" value="" required>'+
              '</div>'+
              `<div id="Cognome${friendAdded}" class="col-lg-3 col-md-4 col-sm-6">`+
                '<label for="validationDefault02" class="form-label">Cognome</label>'+
                '<input type="text" class="form-control" id="validationDefault02" value="" required>'+
              '</div>'+
              '<div class="col-lg-3 col-md-2"></div>'+
            '</div>'+
            `<div id="phoneNumber${friendAdded}" class="row mb-5">`+
              '<div class="col-md-4 col-2"></div>'+
              `<div id="Phone${friendAdded}" class="col-md-4 col-sm-8">`+
                '<label for="validationDefault03" class="form-label">Telefono</label>'+
                '<div class="input-group">'+
                  '<span class="input-group-text" id="inputGroupPrepend3">+39</span>'+
                  '<input type="tel" class="form-control" id="validationDefault03" aria-describedby="inputGroupPrepend3" required>'+
                '</div>'+
              '</div>'+
              '<div class="col-md-4 col-2"></div>'+
            '</div>';

    newFormFriend.innerHTML += a;

    document.getElementById("formFriend").append(newFormFriend);

    if (friendAdded === 1) {
        document.getElementById("btn-removeFriend").style.display = "inline-block";
    }

    sizeStyle();
}

function removeFriend() {
    document.getElementById(`formFriend${friendAdded}`).remove();
    friendAdded--;

    if (friendAdded === 0) {
        document.getElementById("btn-removeFriend").style.display = "none";
    }
}

function initialization(){
  sizeStyle();
  
  const urlParams = new URLSearchParams(window.location.search);
  const canaleDiVendita = urlParams.get('canale_di_vendita');
  const valoreInEuro = urlParams.get('valore_in_euro');

  document.getElementById('vendita').setAttribute('value', canaleDiVendita);
  document.getElementById('valore').setAttribute('value', valoreInEuro);

  window.history.pushState('page2', 'Title', window.location.href.split('?')[0]);
}


function sizeStyle(){
  if(window.innerWidth < 576){
    document.getElementById("row-nome-cognome").classList.remove("row");
    document.getElementById('Nome').classList.add('mx-5');
    document.getElementById('Cognome').classList.add('mx-5');
    document.getElementById("phoneNumber").classList.remove("row");
    document.getElementById('Phone').classList.add('mx-5');
    for(var i = friendAdded; i > 0; i--){
      document.getElementById(`row-nome-cognome${i}`).classList.remove("row");
      document.getElementById(`Nome${i}`).classList.add('mx-5');
      document.getElementById(`Cognome${i}`).classList.add('mx-5');
      document.getElementById(`phoneNumber${i}`).classList.remove("row");
      document.getElementById(`Phone${i}`).classList.add('mx-5');
    }
  }else if(window.innerWidth >= 576){
    document.getElementById("row-nome-cognome").classList.add("row");
    document.getElementById('Nome').classList.remove('mx-5');
    document.getElementById('Cognome').classList.remove('mx-5');
    document.getElementById("phoneNumber").classList.add("row");
    document.getElementById('Phone').classList.remove('mx-5');
    for(var i = friendAdded; i > 0; i--){
      document.getElementById(`row-nome-cognome${i}`).classList.add("row");
      document.getElementById(`Nome${i}`).classList.remove('mx-5');
      document.getElementById(`Cognome${i}`).classList.remove('mx-5');
      document.getElementById(`phoneNumber${i}`).classList.add("row");
      document.getElementById(`Phone${i}`).classList.remove('mx-5');
    }
  }
}

window.addEventListener('resize', function(event) {
  sizeStyle();
});


/*
SumUpCard.mount({
    id: 'sumup-card',
    checkoutId: '2ceffb63-cbbe-4227-87cf-0409dd191a98',
    onResponse: function (type, body) {
      console.log('Type', type);
      console.log('Body', body);
    },
  });

  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Raccogli i dati del form
    const formData = new FormData(this);

    // Invia i dati al server per creare il pagamento
    fetch('/create-payment', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.checkout_url) {
          // Reindirizza alla pagina di pagamento SumUp
          window.location.href = data.checkout_url;
        } else {
          alert('Errore nella creazione del pagamento');
        }
      })
      .catch((error) => {
        console.error('Errore:', error);
      });
  });
*/

