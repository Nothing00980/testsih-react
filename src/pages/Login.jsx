import React from 'react'

export const Login = () => {
  return (
    <>
  {/* Hello world */}
  {/* Required meta tags*/}
  <meta charSet="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta name="description" content="Colorlib Templates" />
  <meta name="author" content="Colorlib" />
  <meta name="keywords" content="Colorlib Templates" />
  {/* Title Page*/}
  <title>Login Page</title>
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
  <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
    <div className="wrapper wrapper--w680">
      <div className="card card-4">
        <div className="card-body">
          <h2 className="title">Login Page</h2>
          <div id="alert" className="alert alert-warning" role="alert">
            Wrong Username or password
          </div>
          <div id="alert2" className="alert alert-success" role="alert">
            logged in redirecting .....
          </div>
          <label htmlFor="profession">Select Privileged Acess:</label>
          <select id="profession" onchange="updateForm()">
            <option value="citizen">Citizen</option>
            <option value="lawyer">Lawyer</option>
            <option value="registration">Registration</option>
            <option value="govt_employee">Government Employee</option>
          </select>
          <form id="dynamicForm">
            {/* Default inputs for Citizen */}
            <label htmlFor="ssoid">Ssoid : </label>
            <input type="text" id="ssoid" name="ssoid" required="" />
            {/* Additional inputs for Lawyers */}
            <label htmlFor="bar_number">Password:</label>
            <input type="password" id="password" name="password" />
            {/* Additional inputs for Registration */}
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

  )
}
