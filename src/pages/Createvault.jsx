import React from 'react'

export const Createvault = () => {
  return (
    <>
  {/* Required meta tags*/}
  <meta charSet="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  {/* Title Page*/}
  <title>Case-vault creation</title>
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
          <h2 className="title">Case-Vault Creation Form</h2>
          <form id="vault" action="">
            <div id="alert" className="alert alert-success" role="alert">
              Successfully Created case-vault.
            </div>
            {/* Additional inputs for Registry Officer Id */}
            <label htmlFor="casetype">Case Type:</label>
            <select id="casetype">
              <option value="civil">Civil</option>
              <option value="criminal">Criminal</option>
            </select>
            <label htmlFor="registry_off_id">Registry Officer Id:</label>
            <input
              type="number"
              id="registry_off_id"
              name="registry_off_id"
              required=""
            />
            {/* Additional inputs for Court */}
            <label htmlFor="name_court">Name of Court:</label>
            <input type="text" id="name_court" name="name_court" required="" />
            {/* Additional inputs for Judge*/}
            <label htmlFor="name_judge">Name of Judge:</label>
            <input type="text" id="name_judge" name="name_judge" required="" />
            {/* Additional inputs for Plaintiff */}
            <label htmlFor="name_plaintiff">Name of Plaintiff:</label>
            <input
              type="text"
              id="name_plaintiff"
              name="name_plaintiff"
              required=""
            />
            <label htmlFor="name_plaintiff_lawyer">
              Name of Plaintiff Lawyer:
            </label>
            <input
              type="text"
              id="name_plaintiff_lawyer"
              name="name_plaintiff_lawyer"
              required=""
            />
            {/* Additional inputs for Dependent */}
            <label htmlFor="name_dependent">Name of Defendent:</label>
            <input
              type="text"
              id="name_dependent"
              name="name_dependent"
              required=""
            />
            <label htmlFor="name_dependent_lawyer">
              Name of Defendent Lawyer:
            </label>
            <input
              type="text"
              id="name_dependent_lawyer"
              name="name_dependent_lawyer"
              required=""
            />
            {/* Additional inputs for Suit Id */}
            <label htmlFor="Suit_id">Suit Id:</label>
            <input type="number" id="Suit_id" name="Suit_id" />
            <label htmlFor="court_id">Court Id:</label>
            <input type="number" id="court_id" name="court_id" />
            <label htmlFor="judge_id">Judge Id:</label>
            <input type="number" id="judge_id" name="judge_id" />
            <label htmlFor="lawyer_id">Lawyer Id:</label>
            <input type="number" id="lawyer_id" name="lawyer_id" />
            <label htmlFor="plaintiff_adhar">Plaintiff Adhar Number :</label>
            <input type="number" id="plaintiff_adhar" name="plaintiff_adhar" />
            <label htmlFor="defendant_adhar">Defendant Adhar Number :</label>
            <input type="number" id="defendant_adhar" name="defendant_adhar" />
            {/* Additional inputs for address */}
            <label htmlFor="plaintiff_address">Plaintiff Address:</label>
            <input
              type="text"
              id="plaintiff_address"
              name="plaintiff_address"
            />
            <label htmlFor="defendant_address">Defendant Address:</label>
            <input
              type="text"
              id="defendant_address"
              name="defendant_address"
            />
            {/* Additional inputs for Date of filing */}
            <label htmlFor="Date_filing">Date of Filing:</label>
            <input type="date" id="Date_filing" name="Date_filing" />
            {/* Additional inputs for charges filed */}
            <label htmlFor="charges">Charges Filed:</label>
            <input type="text" id="charges" name="charges" />
            {/* Additional inputs for facts leading to jurisdiction of the court */}
            <label htmlFor="facts">
              Facts leading to Jurisdiction of the court:
            </label>
            <input type="text" id="facts" name="facts" />
            {/* Additional inputs for claim of relief */}
            <label htmlFor="relief">Plaintiff's claim of relief:</label>
            <input type="text" id="relief" name="relief" />
            <button id="mybtn" type="submit">
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

  )
}
