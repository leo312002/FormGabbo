

const url = "https://script.google.com/macros/s/AKfycby4CuB_AaVw_op8OJZMApmqMiKIH49vGieM74BJlso/dev";
//document.getElementById("form").action = url;

var friendAdded = 0;
var formFriend = 0;




function addFriend(){
    friendAdded++;

    var newFormFriend = document.createElement("div");

    newFormFriend.id = `formFriend${friendAdded}`;

    newFormFriend.innerHTML = `<p id="friendNumber" class="mt-4 mb-3 fw-bold fs-5">Friend number ${friendAdded}:</p>`;
    newFormFriend.innerHTML += '<div class="row-sm mb-4 mt-4"><div class="col-lg-3 col-md-2"></div><div class="col-lg-3 col-md-4 col-sm-6 mx-5"><label for="validationDefault01" class="form-label">Nome</label><input type="text" class="form-control" id="validationDefault01" value="" required></div><div class="col-lg-3 col-md-4 col-sm-6 mx-5"><label for="validationDefault02" class="form-label">Cognome</label><input type="text" class="form-control" id="validationDefault02" value="" required></div><div class="col-lg-3 col-md-2"></div></div><div id="phoneNumber" class="row-sm mb-5"><div class="col-md-4 col-2"></div><div class="col-md-4 col-sm-8 mx-5"><label for="validationDefault03" class="form-label">Telefono</label><div class="input-group"><span class="input-group-text" id="inputGroupPrepend3">+39</span><input type="tel" class="form-control" id="validationDefault03" aria-describedby="inputGroupPrepend3" required></div></div><div class="col-md-4 col-2"></div></div>';
    
    document.getElementById("formFriend").append(newFormFriend);

    if (friendAdded === 1) {
        document.getElementById("btn-removeFriend").style.display = "inline-block";
    }
}

function removeFriend() {
    document.getElementById(`formFriend${friendAdded}`).remove();
    friendAdded--;

    if (friendAdded === 0) {
        document.getElementById("btn-removeFriend").style.display = "none";
    }
}

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

//document.getElementById("btn-addFriend").addEventListener("click",addFriend())

