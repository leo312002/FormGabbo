
let friendAdded = 0;
let totPerson = 1;

function initialization(){
  sizeStyle();
  
  const urlParams = new URLSearchParams(window.location.search);
  const canaleDiVendita = urlParams.get('canale_di_vendita');
  const valoreInEuro = urlParams.get('valore_in_euro');

  document.getElementById('vendita').setAttribute('value', canaleDiVendita);
  document.getElementById('valore').setAttribute('value', valoreInEuro);

  window.history.pushState('page2', 'Title', window.location.href.split('?')[0]);
}

function addFriend(){
    friendAdded++;
    totPerson++;

    let newFormFriend = document.createElement("div");

    newFormFriend.id = `formFriend${friendAdded}`;

    newFormFriend.innerHTML = `<p id="friendNumber${friendAdded}" class="mt-5 mb-3 fw-bold fs-5">Friend number ${friendAdded}:</p>`;
    let a = `<div id="row-nome-cognome${friendAdded}" class="row mb-4 mt-4">`+
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
    }else if(friendAdded === 5){
      document.getElementById("btn-addFriend").style.display = "none";
    }

    if(totPerson === 1){
      document.getElementById("link-pagamento").href = "https://pay.sumup.com/b2c/QL1VNRLV";
    }else if(totPerson === 2){
      document.getElementById("link-pagamento").href = "https://pay.sumup.com/b2c/Q8KCKOTF";
    }else if(totPerson === 3){
      document.getElementById("link-pagamento").href = "https://pay.sumup.com/b2c/QL1VNRLV";
    }else if(totPerson === 4){
      document.getElementById("link-pagamento").href = "https://pay.sumup.com/b2c/Q8KCKOTF";
    }else if(totPerson === 5){
      document.getElementById("link-pagamento").href = "https://pay.sumup.com/b2c/QL1VNRLV";
    }else if(totPerson === 6){
      document.getElementById("link-pagamento").href = "https://pay.sumup.com/b2c/Q8KCKOTF";
    }

    sizeStyle();
}

function removeFriend() {
    document.getElementById(`formFriend${friendAdded}`).remove();
    friendAdded--;
    totPerson--;

    if (friendAdded === 0) {
        document.getElementById("btn-removeFriend").style.display = "none";
    }else if(friendAdded === 4){
      document.getElementById("btn-addFriend").style.display = "inline-block";
    }

    if(totPerson === 1){
      document.getElementById("link-pagamento").href = "https://pay.sumup.com/b2c/QL1VNRLV";
    }else if(totPerson === 2){
      document.getElementById("link-pagamento").href = "https://pay.sumup.com/b2c/Q8KCKOTF";
    }else if(totPerson === 3){
      document.getElementById("link-pagamento").href = "https://pay.sumup.com/b2c/QL1VNRLV";
    }else if(totPerson === 4){
      document.getElementById("link-pagamento").href = "https://pay.sumup.com/b2c/Q8KCKOTF";
    }else if(totPerson === 5){
      document.getElementById("link-pagamento").href = "https://pay.sumup.com/b2c/QL1VNRLV";
    }else if(totPerson === 6){
      document.getElementById("link-pagamento").href = "https://pay.sumup.com/b2c/Q8KCKOTF";
    }
}


function sizeStyle(){
  if(window.innerWidth < 576){
    document.getElementById("row-nome-cognome").classList.remove("row");
    document.getElementById('Nome').classList.add('mx-5');
    document.getElementById('Cognome').classList.add('mx-5');
    document.getElementById("phoneNumber").classList.remove("row");
    document.getElementById('Phone').classList.add('mx-5');
    for(let i = friendAdded; i > 0; i--){
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
    for(let i = friendAdded; i > 0; i--){
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
{
  "application_type": "web",
  "client_id": "cc_classic_3VBCzfd6xdNxR5BdrlWsAyP95SeYZ",
  "client_secret": "cc_sk_classic_F6HEKbAdRXUEKZLNQDtYdPVZej1hjSAGZmoDzRdWvtkjx6EXso",
  "cors_uris": [
    ""
  ],
  "id": "CCCNPS42D",
  "name": "Registrazione Eventi",
  "redirect_uris": [
    "https://leo312002.github.io/FormGabbo/"
  ]
}


const axios = require('axios');

async function getAccessToken() {
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');

  const response = await axios.post('https://api.sumup.com/token', params, {
    auth: {
      username: "cc_classic_3VBCzfd6xdNxR5BdrlWsAyP95SeYZ",
      password: "cc_sk_classic_F6HEKbAdRXUEKZLNQDtYdPVZej1hjSAGZmoDzRdWvtkjx6EXso"
    }
  });

  return response.data.access_token;
}



async function createPaymentLink(amount, currency, description) {
    const accessToken = await getAccessToken();
  
    const response = await axios.post('https://api.sumup.com/v0.1/me/payment-links', {
      amount: amount,
      currency: currency,
      description: description
    }, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
  
    return response.data.short_url;
  }
  
*/
/*
// Funzione per creare il checkout
async function initializePayment() {
  try {
    // Effettua una chiamata al tuo server per ottenere un checkoutId
    const response = await fetch('/create-checkout');
    const data = await response.json();
    const checkoutId = data.checkoutId;

    // Inizializza il widget SumUp
    SumUpCard.mount({
      checkoutId: checkoutId,
      onResponse: function (type, body) {
        if (type === 'success') {
          // Pagamento completato con successo
          window.location.href = '/successo';
        } else {
          // Gestione degli errori
          alert('Errore durante il pagamento: ' + body.error.message);
        }
      },
    });
  } catch (error) {
    console.error('Errore durante l\'inizializzazione del pagamento:', error);
  }
}

// Chiama la funzione per inizializzare il pagamento
initializePayment();
*/




