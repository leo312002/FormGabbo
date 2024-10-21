

let checkoutId;
let result;
let totPerson;

async function initialization(){
  const urlParams = new URLSearchParams(window.location.search);
  checkoutId = urlParams.get('session_id');
  totPerson = localStorage.getItem("totPerson")

  sheetdb();

  localStorage.clear();
  //removeFormData();
}


function sheetdb(){
  console.log(totPerson)
  for(let i = 0; i < totPerson; i++){
    console.log(i)
    fetch('https://sheetdb.io/api/v1/70kkrjloojdhb', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          data: [{
                  "Date": localStorage.getItem("Date"),
                  "Nome": localStorage.getItem(`Nome${i}`),
                  "Cognome": localStorage.getItem(`Cognome${i}`),
                  "Email": localStorage.getItem(`Email${i}`),
                  "Telefono": localStorage.getItem(`Telefono${i}`),
                  "canale_di_vendita": localStorage.getItem(`Canale${i}`),
                  "valore_in_euro": localStorage.getItem(`Valore${i}`)
              }]
      })
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
  }
}


function removeFormData(){
  for(let i = 0; i < totPerson; i++){
    localStorage.removeItem("Date"),
    localStorage.removeItem(`Nome${i}`)
    localStorage.removeItem(`Cognome${i}`)
    localStorage.removeItem(`Email${i}`)
    localStorage.removeItem(`Telefono${i}`)
    localStorage.removeItem(`Canale${i}`)
    localStorage.removeItem(`Valore${i}`)
  }
  localStorage.removeItem("totPerson");
}


