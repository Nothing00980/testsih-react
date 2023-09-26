import React, { useRef, useState } from 'react';
import "/css/main2.css";
// import { Helmet } from "react-helmet";
// import  firebase  from "https://cdnjs.cloudflare.com/ajax/libs/firebase/7.14.1-0/firebase.js";
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import 'firebase/compat/database';
import { useNavigate } from 'react-router-dom';


export const Signup = () => {
  const navigate = useNavigate();
  const Profession = useRef();
  const DynamicForm = useRef(null); 
  const Name = useRef(null);
  const Adhar = useRef(null);
  const Phone = useRef(null);
  const Email = useRef(null);
  const Password1 = useRef(null);
  const License = useRef(null);
  const Registration = useRef(null);
  const Employeeid = useRef(null);
  const Organisation = useRef(null);

  const Alert = useRef();

  const [profession, updateprofession] = useState("");




    // todo connect database

    const firebaseConfig = {
        apiKey: "AIzaSyBQBetMo7sP6DV_YvANseKDPb7qSIRCChQ",
        authDomain: "electrovault-e2de8.firebaseapp.com",
        databaseURL: "https://electrovault-e2de8-default-rtdb.firebaseio.com",
        projectId: "electrovault-e2de8",
        storageBucket: "electrovault-e2de8.appspot.com",
        messagingSenderId: "420518165356",
        appId: "1:420518165356:web:95e635bde6a650d6885149",
        measurementId: "G-BNPVWXGC0W"
  };
  
    firebase.initializeApp(firebaseConfig);

//   function updateForm(e) {
//   const dynamicForm = DynamicForm.current;
    
//     // Reset the form
//     dynamicForm.textContent = '';

//     // Add inputs based on selected profession
//     if (profession === "lawyer") {
//         dynamicForm.innerhtml = `
//             <label for="name">Name:</label>
//             <input type="text" ref={Name} name="name" required>
//             <label for="license_number">License Number:</label>
//             <input type="text" ref={License} name="license_number" required>
//             <label for="email">Email Id:</label>
//             <input type="email" ref={Email} name="email" required>
//             <label for="password">Password : </label>
//             <input type="password" ref={Password1} name="password" required>
//             <button type="submit" id = "mybtn">Submit</button>


//         `;
//     } else if (profession === "registration") {
//         dynamicForm.textContent = `
//             <label for="name">Name:</label>
//             <input type="text" ref={Name} name="name" required>
//             <label for="registration_number">Registry Office ID :</label>
//             <input type="text" ref={Registration} name="registration_number" required>
//             <label for="email">Email Id:</label>
//             <input type="email" ref={Email} name="email" required>
//             <label for="password">Password : </label>
//             <input type="password" ref={Password1} name="password" required>
//             <button type="submit" id = "mybtn">Submit</button>

//         `;
//     } else if (profession === "govt_employee") {
//         dynamicForm.textContent = `
//             <label for="name">Name:</label>
//             <input type="text" ref={Name} name="name" required>
//             <label for="employee_id">Employee ID:</label>
//             <input type="text" ref={Employeeid} name="employee_id" required>
//             <label for="email">Email Id:</label>
//             <input type="email" ref={Email} name="email" required>
//             <label for="password">Password : </label>
//             <input type="password" ref={Password1} name="password" required>
//             <button type="submit" id = "mybtn">Submit</button>
//         `;
//     }
//  else if (profession === "govt_agencies") {
//         dynamicForm.textContent = `
//             <label for="name">Name:</label>
//             <input type="text" ref={Name} name="name" required>
//             <label for="organisation">Organisation:</label>
//             <input type="text" ref={Organisation} name="organisation" required>
//             <label for="employee_id">Employee ID:</label>
//             <input type="text" ref={Employeeid} name="employee_id" required>
//             <label for="email">Email Id:</label>
//             <input type="email" ref={Email} name="email" required>
//             <label for="password">Password : </label>
//             <input type="password" ref={Password1} name="password" required>
//             <button type="submit" id = "mybtn">Submit</button>

//         `;
//     }
//     else if (profession === "citizen") {
//         dynamicForm.textContent = `
//             <label for="name">Name:</label>
//             <input type="text" ref={Name} name="name" required>
//             <label for="adhar">Adhar : </label>
//             <input type="text" ref={Adhar} name="adhar" required>
//             <label for="phone">Phone No:</label>
//             <input type="phone" ref={Phone} name="phone" required>
//             <label for="email">Email Id:</label>
//             <input type="email" ref={Email} name="email" required>
//             <label for="password">Password : </label>
//             <input type="password" ref={Password1} name="password" required>
//             <button type="submit" id = "mybtn">Submit</button>



//         `;
        
//     }
//   }
  // updateForm();
// Initially, call the updateForm() to set up the default form



// redfrence for database
var registerinfodb = firebase.database().ref('registrationinfo')

// window.addEventListener("submit", submitform);

  // DynamicForm.current.addEventListener("submit", submitform);

  function test() {
    console.log(profession);
}

  function submitform() {
  
    console.log(profession)
    if (profession == "citizen") {
        
        var name = Name.current.value;
        var adhar = Adhar.current.value;
        var phone = Phone.current.value;
        var email = Email.current.value;
        var password = Password1.current.value ;
        const ssoid = email.substring(0, email.indexOf("@"));
        
        console.log(name, ssoid,email, phone, adhar);
        var newregistration = registerinfodb.push();
        newregistration.set({
            "Name": name,
            "Adhar_number": adhar,
            "Phone_number": phone,
            "Email_id": email,
            "Ssoid": ssoid,
            "Password" : password,
            "Profession": profession,
        });
        Alert.current.style.display = "block";
        // alert("Successful !!,Your ssoid and Password are sent by Email");
        setTimeout(() => {
            
          Alert.current.style.display = "none";
          
            DynamicForm.current.reset();
          // navigate("/Login")

        }, 3000);
        

    }
    else if (profession == "registration") {
        
        var name = Name.current.value;
        var registration_no = Registration.current.value;
        var email = Email.current.value;
        var password = Password1.current.value;
        const ssoid = email.substring(0, email.indexOf("@"));

        console.log(name, registration_no);
        var newregistration = registerinfodb.push();
        newregistration.set({
            "Name": name,
            "Registration": registration_no,
            "Email_id": email,
            "Ssoid": ssoid,

            "Password" : password,
            "Profession": profession,
        })
        // alert("Successful !!,Your ssoid and Password are sent by Email");
      Alert.current.style.display = "block";
        // alert("Successful !!,Your ssoid and Password are sent by Email");
        setTimeout(() => {
            
            Alert.current.style.display = "none";
            DynamicForm.reset();
            // navigate("/Login")

        }, 3000);

    }
    else if (profession == "lawyer") {
        var name = Name.current.value;
        var license_no = License.current.value;
        var email = Email.current.value;
        var Password = Password1.current.value;
        const ssoid = email.substring(0, email.indexOf("@"));

        console.log(name, license_no, email);
        var newregistration = registerinfodb.push();
        newregistration.set({
            "Name": name,
            "License": license_no,
            "Email_id": email,
            "Ssoid": ssoid,

            "Password" : password,
            "Profession": profession,
        })
        // alert("Successful !!,Your ssoid and Password are sent by Email");
        Alert.style.display = "block";
        // alert("Successful !!,Your ssoid and Password are sent by Email");
        setTimeout(() => {

            Alert.style.display = "none";
            DynamicForm.reset();
          // navigate("/Login");

        }, 3000);
    }
    else if (profession == "govt_employee") {
        var name = Name.current.value;
        var employee_id = Employeeid.current.value;
        var email = Email.current.value;
        var Password = Password1.current.value;
        const ssoid = email.substring(0, email.indexOf("@"));


        console.log(name, employee_id);
        var newregistration = registerinfodb.push();
        newregistration.set({
            "Name": name,
            "Employee_id": employee_id,
            "Email_id": email,
            "Ssoid": ssoid,

            "Password" : password,
            "Profession": profession,
        })
        // alert("Successful !!,Your ssoid and Password are sent by Email");
        Alert.style.display = "block";
        // alert("Successful !!,Your ssoid and Password are sent by Email");
        setTimeout(() => {
            
            Alert.current.style.display = "none";
            DynamicForm.reset();
            // navigate("/Login")

        }, 3000);
    }
    else if (profession == "govt_agencies") {
        var name = Name.current.value;
        var employee_id = Employeeid.current.value;
        var organisation = Organisation.current.value;
        var email = Email.current.value;
        var Password = Password1.current.value;
        const ssoid = email.substring(0, email.indexOf("@"));


        console.log(name, employee_id, organisation);
        var newregistration = registerinfodb.push();
        newregistration.set({
            "Name": name, 
            "Employee_id": employee_id,
            "Organisation": organisation,
            "Email_id": email,
            "Ssoid": ssoid,

            "Password" : password,
            "Profession": profession,
        })
        // alert("Successful !!,Your ssoid and Password are sent by Email");
        Alert.current.style.display = "block";
        // alert("Successful !!,Your ssoid and Password are sent by Email");
        setTimeout(() => {
            
            Alert.current.style.display = "none";
            DynamicForm.reset();
            // navigate("/Login")
            

        }, 3000);
    }
    
    
 


}




const getelementval = (id) => {
    return document.getElementById(id).value;
}


  return (
    <div><>
          {/* Required meta tags*/}
          
    <meta charSet="UTF-8" />
    <meta 
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    {/* Title Page*/}
    <title>Registration Form</title>
    {/* Icons font CSS*/}
    <link
      href="vendor/mdi-font/css/material-design-iconic-font.min.css"
      rel="stylesheet"
      media="all"
    />
    <link
      href="vendor/font-awesome-4.7/css/font-awesome.min.css"
      rel="stylesheet"
      media="all"
    />
    {/* Font special for pages*/}
    <link
      href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
      rel="stylesheet"
    />
    {/* Vendor CSS*/}
    <link href="vendor/select2/select2.min.css" rel="stylesheet" media="all" />
    <link
      href="vendor/datepicker/daterangepicker.css"
      rel="stylesheet"
      media="all"
    />
    {/* Main CSS*/}
    <link href="css/main2.css" rel="stylesheet" media="all" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
      crossOrigin="anonymous"
          />
          {/* <Helmet>
              
    <script src="https://cdnjs.cloudflare.com/ajax/libs/firebase/7.14.1-0/firebase.js"></script>
          </Helmet> */}
          
    <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
      <div className="wrapper wrapper--w680">
        <div className="card card-4">
          <div className="card-body">
            <h2 className="title">Registration Form</h2>
            <div  id='alert' className="alert alert-success" role="alert">
              Successfully registerd .. redirecting. ...
            </div>
            <label htmlFor="profession">Select Profession:</label>
              <form  ref={DynamicForm} id='dynamicform' method="post">
              <select ref={Profession} value={profession} onChange={(e) => {
                updateprofession(e.target.value);
              }}>
              <option value="citizen">Citizen</option>
              <option value="lawyer">Lawyer</option>
              <option value="registration">Registry</option>
              <option value="govt_employee">Government Employee</option>
              <option value="govt_agencies">Government Agencies</option>
            </select>
            <div>
          <label >Name:</label>
          <input type="text"  ref={Name} required />
        {/* Add other common fields here */}
       </div>

       {profession === 'citizen' && (
          <div>
            <label>Adhar Number:</label>
            <input type="text" ref={Adhar} required />
            {/* Add other registration-specific fields here */}
          </div>
                )}
                
         {profession === 'registration' && (
          <div>
            <label>Registry Officer Id:</label>
            <input type="text" ref={Registration} required />
            {/* Add other registration-specific fields here */}
          </div>
        )}

        {profession === 'lawyer' && (
          <div>
            <label>License Number:</label>
            <input type="text" ref={License}  required/>
            {/* Add other lawyer-specific fields here */}
          </div>
        )}

        {profession === 'govt_employee' && (
          <div>
            <label>Employee ID:</label>
            <input type="text" ref={Employeeid}  required/>
            {/* Add other govt_employee-specific fields here */}
          </div>
        )}

        {profession === 'govt_agencies' && (
          <div>
            <label>Organisation:</label>
            <input type="text" ref={Organisation} />
            {/* Add other govt_agencies-specific fields here */}
          </div>
                )}

                <div>
            <label htmlFor="email">Email Id:</label>
            <input type="email" ref={Email} name="email" required></input>
            <label htmlFor="password">Password : </label>
           <input type="password" ref={Password1} name="password" required></input>
                </div> 
                <button id="mybtn"  onClick={() => {
                  // submitform();
                  test();
              }}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* Jquery JS*/}
    {/* Vendor JS*/}
    {/* Main JS*/}
    {/* This templates was made by Colorlib (https://colorlib.com) */}
    {/* end document*/}
  </>
  </div>
  )
}
// todo this is the changes that we will do

// import React, { useRef } from 'react';
// import firebase from 'firebase'; // Make sure to import Firebase properly

// const RegistrationForm = () => {
//   // Initialize Firebase here using your configuration
//   const firebaseConfig = {
//     apiKey: "...",
//     authDomain: "...",
//     // Add the rest of your Firebase configuration here
//   };

//   firebase.initializeApp(firebaseConfig);

//   // Reference for the database
//   const registerinfodb = firebase.database().ref('registrationinfo');

//   const professionRef = useRef(null);
//   const nameRef = useRef(null);
//   const adharRef = useRef(null);
//   const phoneRef = useRef(null);
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);
//   const registrationNumberRef = useRef(null);
//   const licenseNumberRef = useRef(null);
//   const employeeIdRef = useRef(null);
//   const organisationRef = useRef(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const profession = professionRef.current.value;
//     const name = nameRef.current.value;
//     const adhar = adharRef.current.value;
//     const phone = phoneRef.current.value;
//     const email = emailRef.current.value;
//     const password = passwordRef.current.value;
//     const registrationNumber = registrationNumberRef.current.value;
//     const licenseNumber = licenseNumberRef.current.value;
//     const employeeId = employeeIdRef.current.value;
//     const organisation = organisationRef.current.value;
    
//     // Rest of your code remains the same
//     // ...
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Profession:
//           <select ref={professionRef}>
//             <option value="citizen">Citizen</option>
//             <option value="registration">Registration</option>
//             <option value="lawyer">Lawyer</option>
//             <option value="govt_employee">Government Employee</option>
//             <option value="govt_agencies">Government Agencies</option>
//           </select>
//         </label>
        
//         <div>
//           <label>Name:</label>
//           <input type="text" ref={nameRef} />
//           {/* Add other common fields here */}
//         </div>

//         {professionRef.current.value === 'registration' && (
//           <div>
//             <label>Registration Number:</label>
//             <input type="text" ref={registrationNumberRef} />
//             {/* Add other registration-specific fields here */}
//           </div>
//         )}

//         {professionRef.current.value === 'lawyer' && (
//           <div>
//             <label>License Number:</label>
//             <input type="text" ref={licenseNumberRef} />
//             {/* Add other lawyer-specific fields here */}
//           </div>
//         )}

//         {professionRef.current.value === 'govt_employee' && (
//           <div>
//             <label>Employee ID:</label>
//             <input type="text" ref={employeeIdRef} />
//             {/* Add other govt_employee-specific fields here */}
//           </div>
//         )}

//         {professionRef.current.value === 'govt_agencies' && (
//           <div>
//             <label>Organisation:</label>
//             <input type="text" ref={organisationRef} />
//             {/* Add other govt_agencies-specific fields here */}
//           </div>
//         )}

//         <button type="submit">Submit</button>
//       </form>
//       <div id="alert" style={{ display: "none" }}>
//         {/* Display your alert message here */}
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;
