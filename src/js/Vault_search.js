const firebaseConfig = {
  apiKey: "AIzaSyBQBetMo7sP6DV_YvANseKDPb7qSIRCChQ",
  authDomain: "electrovault-e2de8.firebaseapp.com",
  databaseURL: "https://electrovault-e2de8-default-rtdb.firebaseio.com",
  projectId: "electrovault-e2de8",
  storageBucket: "electrovault-e2de8.appspot.com",
  messagingSenderId: "420518165356",
  appId: "1:420518165356:web:95e635bde6a650d6885149",
  measurementId: "G-BNPVWXGC0W",
};


firebase.initializeApp(firebaseConfig);

const button = document.getElementById('reg_search');
button.addEventListener('click', submitform);

// var registerinfodb = firebase.database().ref('Case-vault')

function submitform(e) {
  e.preventDefault();
  var plainphone,defphone;
  
  var Suitid = document.getElementById("form_suit").value;
  console.log(Suitid);
  
  firebase.database().ref().child("Case-vault").orderByChild("Suit_id").equalTo(Suitid).once("value", function (snapshot) {
    
    var usersData = snapshot.val();
      if (usersData != null) {

        snapshot.forEach(function (childsnapshot) {
          var casetype = childsnapshot.child("Casetype").val();
          var registeryofficerid = childsnapshot
          .child("Registery_officer_id")
          .val();
          var courtname = childsnapshot.child("Court_name").val();
          var namejudge = childsnapshot.child("Judge_name").val();
          var plaintiffname = childsnapshot.child("Plaintiff_name").val();
          var namedefendant = childsnapshot.child("Defendant_name").val();
          var plaintifflawyer = childsnapshot.child("Plaintiff_lawyer").val();
          var defendantlawyer = childsnapshot.child("Defendant_lawyer").val();
          var suitid = childsnapshot.child("Suit_id").val();
          var courtid = childsnapshot.child("Court_id").val();
          var judgeid = childsnapshot.child("Judge_id").val();
          var lawyerid = childsnapshot.child("Lawyer_id").val();
          var plaintiffadhar = childsnapshot.child("Plaintiff_adhar").val();
          var defendantadhar = childsnapshot.child("Defendant_adhar").val();
          var plaintiffaddress = childsnapshot.child("Plaintiff_address").val();
          var defendantaddress = childsnapshot.child("Defendant_address").val();
          var datefiling = childsnapshot.child("Date_filing").val();
          var charges = childsnapshot.child("Charges").val();
          var facts = childsnapshot.child("Facts").val();
          var releif = childsnapshot.child("Relief").val();
          firebase.database().ref().child("registrationinfo").orderByChild("Adhar_number").equalTo(plaintiffadhar).once("value", function (snapshot2) {

            let plaintiffdata = snapshot2.val();
            if (plaintiffdata != null) {
              snapshot2.forEach(function (childsnapshot2) {

                plainphone = childsnapshot2.child("Phone_number").val();

              
              });
            }
            
          });
          firebase.database().ref().child("registrationinfo").orderByChild("Adhar_number").equalTo(defendantadhar).once("value", function (snapshot2) {

          
          let defendantdata = snapshot2.val();
          if (defendantdata != null) {
            snapshot2.forEach(function (childsnapshot2) {
              
              defphone = childsnapshot2.child("Phone_number").val();

              
            });
          }
          
        });

        document.querySelector(".card-header").innerHTML =
            `<div class="card_flex">

            <div class="card">
                <h5 class="card-header"> ` +suitid +`</h5>
                <div class="card-body">
                  <h5 class="card-title">Case Summary </h5>

                  <p class="card-text">Courtname: `+ courtname+ `</p>
                    <p class="card-text">Casetype: `+ casetype+ `</p>
                    <p class="card-text">Suitid: `+ suitid+ `</p>
                    <p class="card-text">Courtid: `+ courtid+ `</p>
                    <p class="card-text">Judgeid: `+ judgeid+ `</p>
                    <p class="card-text">RegisteryOfficerid: `+ registeryofficerid+ `</p>
                    <p class="card-text">NameJudge: `+ namejudge+ `</p>
                    <p class="card-text">Plaintiffname: `+ plaintiffname+ `</p>
                    <p class="card-text">Namedefendant: `+ namedefendant+ `</p>
                    <p class="card-text">Plaintifflawyer: `+ plaintifflawyer+ `</p>
                    <p class="card-text">Defendantlawyer: `+ defendantlawyer+ `</p>
                    <p class="card-text">Plaintiffadhar: `+ plaintiffadhar+ `</p>
                    <p class="card-text">Defendantadhar: `+ defendantadhar+ `</p>
                    <p class="card-text">Plaintiffaddress: `+ plaintiffaddress+ `</p>
                    <p class="card-text">Defendantaddress: `+ defendantaddress+ `</p>
                    <p class="card-text">Datefiling: `+ datefiling+ `</p>
                    <p class="card-text">Charges: `+ charges+ `</p>
                    <p class="card-text">Facts: `+ facts+ `</p>
                    <p class="card-text">Releif: `+ releif+ `</p>
                </div>
            </div>

                <div class="card">
                    <h5 class="card-header"> Plaintiff</h5>
                    <div class="card-body">
                      <p class="card-text"></p>
                      <form id="dataform" action = "/upload" method="POST" enctype="multipart/form-data">
                      <input type="file" id="myfile" name="myfile">
                      <button id="upload_button" onclick = "upload()" >Upload</button>
                      </form>
                    </div>
                </div>  

                <div class="card">
                <h5 class="card-header">Defendant</h5>
                <div class="card-body">
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">view</a>
                  </div>
            </div>

            <div class="card">
            <h5 class="card-header">Plaintiff - Lawyer</h5>
            <div class="card-body">
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">view</a>
            </div>
        </div>

        <div class="card">
        <h5 class="card-header">Defendant - Lawyer</h5>
        <div class="card-body">
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">view</a>
        </div>
    </div>

        <div class="card">
        <h5 class="card-header">Judge</h5>
        <div class="card-body">
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">view</a>
        </div>
        </div>
        </div>`;
      });
    } else {
        //no user
        document.querySelector("#alert").style.display = "block";
        setTimeout(() => {
          document.querySelector("#alert").style.display = "none";
        }, 3000);
      }
    });
}

function uploadFile() { 
    location.replace("https://m3hy47.csb.app/src/App.js:19:47")
}



// import Web3Storage from 'web3.storage';

// async function fileupload() {
//   console.log("inside the fn");
//   const fileInput = document.getElementById('dataform');
//   // console.log(fileInput);
//   const file = fileInput.files[0];

//   if (file) {
//       try {
//           const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQxNjdDNzNjNzk2OTkxRDVlRWVDQ2ViOThhOUFEMThEYmQ4MGQwNzIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTQ5NDA1MTMxNDEsIm5hbWUiOiJFbGVjdHJvdmF1bHQifQ.0gge0hCQfm2KmN40LjubYxu35H56CT5zSpOFtuXNIOc'; // Replace with your Web3.storage API key
//           const client = new Web3Storage({ token: apiKey });

//           const { cid } = await client.put([file]);

//           alert(`File uploaded to Web3.storage with CID: ${cid}`);
//       } catch (error) {
//           console.error('Error:', error);
//           alert('Error uploading file to Web3.storage.');
//       }
//   } else {
//       alert('Please select a file to upload.');
//             }
// }
