
let friendAdded = 0;
let totPerson = 1;
const link5 = "https://pay.sumup.com/b2c/Q5ACLDVZ"; //10
const link10 = "https://pay.sumup.com/b2c/QNCWRBHR"; //20
const link15 = "https://pay.sumup.com/b2c/Q038L7V3"; //30
const link20 = "https://pay.sumup.com/b2c/QEOXEFK9"; //40
const link25 = "https://pay.sumup.com/b2c/QYKT3G65"; //50
const link30 = "https://pay.sumup.com/b2c/Q8I71GMC"; //60

const prezzo = 10;
let linkPagamento = link5;
let CardSumUp;
let btnSumup;
const idCheckOut = 'ID_UNICO_' + Date.now();

function initialization(){
  //sizeStyle();

  document.getElementById("pagamento").addEventListener("click", createCheckout);

  let insta = navigator.userAgent.includes("Instagram");
  const isAndroid = navigator.userAgent.toLowerCase().includes('android');
  if(insta && isAndroid){
    document.getElementById("instagram").style.display = "inline-block";
  }
  
  const urlParams = new URLSearchParams(window.location.search);
  const canaleDiVendita = urlParams.get('ncdhsdskfdnd');
  const valoreInEuro = urlParams.get('riekndaocno');

  document.getElementById('vendita').value = canaleDiVendita;
  document.getElementById('valore').value = valoreInEuro;

  window.history.pushState('page2', 'Title', window.location.href.split('?')[0]);
  /**/

  const form = document.getElementById('sheetdb-form');
  form.addEventListener("submit", function(e) {
    var d = new Date();

    const ora = `${d.getHours()}`+"."+`${d.getMinutes()}`+"."+`${d.getSeconds()}`;
    var date = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} ` + ora;

    document.getElementById('Date').value = date;
    //e.preventDefault();
    window.open(linkPagamento, '_blank');
    /*
    
    const data = new FormData(form);
    console.log(data);
    fetch("https://script.google.com/macros/s/AKfycbyxS8JAJJ_AIw88g-DUgHxfNRE8OdArgdVr5LRZAzTk/dev", {
      method: 'POST',
      body: data,
      mode: 'no-cors'
    })
    .then(() => {
      window.open(linkPagamento, '_blank'); 
      alert("Dati inviati con successo!");
    })
    e.preventDefault();
    */
  });
}

function payment(){
  if(!isInputEmpty()){
    document.getElementById("friends-button").remove();
    document.getElementById("pagamento").remove();

    

    //btnSumup = document.getElementsByClassName("sumup-payment-18g68xa");
    //btnSumup.addEventListener("click", getCardDate);
  }

}

function isInputEmpty(){
  for(let i = 0; i < totPerson; i++){
    if(document.getElementById(`input-nome${i}`).value === "" || document.getElementById(`input-cognome${i}`).value === "" || document.getElementById(`input-email${i}`).value === "" || document.getElementById(`input-telefono${i}`).value === ""){
      return true;
    }
  }
  return false;
}

function addFriend(){
    friendAdded++;
    totPerson++;

    let newFormFriend = document.createElement("div");

    newFormFriend.id = `formFriend${friendAdded}`;

    newFormFriend.innerHTML = `<p id="friendNumber${friendAdded}" class="mt-5 mb-3 fw-bold fs-5">Friend number ${friendAdded}:</p>`;
    let a = `<div id="row-nome${friendAdded}" class="row">
              <div id="Nome${friendAdded}">
                <label for="validationDefault01" class="form-label"></label>
                <input id="input-nome${friendAdded}" type="text" class="form-control" name="Nome${friendAdded}" placeholder="Nome" id="validationDefault01" required>
              </div>
            </div>
            <div id="row-cognome${friendAdded}" class="row">
              <div id="Cognome${friendAdded}" class="">
                <label for="validationDefault02" class="form-label"></label>
                <input id="input-cognome${friendAdded}" type="text" class="form-control" name="Cognome${friendAdded}" placeholder="Cognome" id="validationDefault02" required>
              </div>
            </div>
            <div id="Email${friendAdded}" class="row">
              <div class="">
                <label for="validationDefaultUsername" class="form-label"></label>
                <div class="input-group">
                  <span class="input-group-text" id="inputGroupPrepend2">@</span>
                  <input id="input-email${friendAdded}" type="email" class="form-control" name="Email${friendAdded}" placeholder="Email" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required>
                </div>
              </div>
            </div>
            <div id="phoneNumbe${friendAdded}" class="row">
              <div id="Phone" class="mb-3">
                <label for="validationDefault03" class="form-label"></label>
                <div class="input-group">
                  <span class="input-group-text" id="inputGroupPrepend3">+39</span>
                  <input id="input-telefono${friendAdded}" type="tel" class="form-control" name="Telefono${friendAdded}" placeholder="Telefono" id="validationDefault03" aria-describedby="inputGroupPrepend3" required>
                </div>
              </div>
            </div>`;

    newFormFriend.innerHTML += a;

    document.getElementById("formFriend").append(newFormFriend);

    if (friendAdded === 1) {
        document.getElementById("btn-removeFriend").style.display = "inline-block";
    }else if(friendAdded === 5){
      document.getElementById("btn-addFriend").style.display = "none";
    }

    pagamento();
    //sizeStyle();
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

    pagamento();
}

/*
window.addEventListener('resize', function(event) {
  sizeStyle();
});
*/

function pagamento(){
  if(totPerson === 1){
    linkPagamento = link5;
  }else if(totPerson === 2){
    linkPagamento = link10;
  }else if(totPerson === 3){
    linkPagamento = link15;
  }else if(totPerson === 4){
    linkPagamento = link20;
  }else if(totPerson === 5){
    linkPagamento = link25;
  }else if(totPerson === 6){
    linkPagamento = link30;
  }
}

async function getCardDate(){
  const res = await fetch("http://localhost:5500"+"/cardData", {
    method: "get",
    headers: {
      'Content-Type': 'application/json'
    }, body: {
      "description": "Sample one-time payment"
    }
  })
  console.log(res);

}


let checkoutData;
async function createCheckout(){
  try {
    const accessToken = await getAccessToken();
    console.log(accessToken)
    const response = await fetch('https://api.sumup.com/v0.1/checkouts', {
      method: "POST",
      headers: {
        'Authorization': 'Bearer sup_sk_eNAFh7E8QmnNNdi5s8rTzykwNmH9BaFrM',
        'Content-Type': 'application/x-www-form-urlencoded'
      }, 
      body: new URLSearchParams({
        'checkout_reference': idCheckOut,
        'amount': prezzo*totPerson,
        'currency': "EUR",
        "merchant_code": "MRE27XD3",
        'pay_to_email' : "yokes-hearted-0m@icloud.com",
        'description': "Sample one-time payment"
      })
    })
    .then(res => {
      return res.json();
    })
    .then(data =>{
      checkoutData = data;
    })
    console.log(checkoutData)

    CardSumUp = SumUpCard.mount({
      amount: prezzo*totPerson,
      checkoutId: checkoutData.id,
      currency: 'EUR',
      locale: "it-IT",
      onResponse: (type, body) => {
        console.log('Type', type);
        console.log('Body', body);


      }
    });

    return checkoutData;
  } catch (error) {
    console.error('Errore creazione checkout:', error);
    throw error;
  }

}

async function getAccessToken() {
  try {
    const auth = await authorization();
    let at;
    const response = await fetch('https://api.sumup.com/token', {
      method : "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        'grant_type': 'client_credentials',
        'client_id': 'cc_classic_hwM9i0mFynd3mNpprT71nFK3WzrqV',
        'client_secret': 'cc_sk_classic_maXe4rKf8QzL7xq2Gd4r46toDWKr9topAsBtaNCAipjniJjQOR'
      })
    })
    .then(res => {
      return res.json();
    })
    .then(data =>{
      at = data.access_token;
    })
    return at;
  } catch (error) {
    console.error('Errore ottenendo il token di accesso:', error);
    throw error;
  }
}

async function authorization() {
  try {
    const response = await fetch('https://api.sumup.com/v0.1/me', {
      headers: {
        'Authorization': 'Bearer sup_sk_eNAFh7E8QmnNNdi5s8rTzykwNmH9BaFrM'
      }
    })
    .then(res => {
      return res.json();
    })
    .then(data =>{
      console.log(data);
    })
  } catch (error) {
    console.error('Errore ottenendo autorizzazione:', error);
    throw error;
  }
}

