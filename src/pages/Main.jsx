import React from 'react'
import '/css/styles.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

export const Main = () => {
  return (
    <div><>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>ElectroVault based on blockchain</title>
    {/* Favicon*/}
    <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
    {/* Bootstrap icons*/}
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
      rel="stylesheet"
      type="text/css"
    />
    {/* Google fonts*/}
    <link
      href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic"
      rel="stylesheet"
      type="text/css"
    />
    {/* Core theme CSS (includes Bootstrap)*/}
    <link href="css/styles.css" rel="stylesheet" />
    {/* Navigation*/}
    <nav className="navbar navbar-light bg-light static-top">
      <div className="container">
        <Link className="navbar-brand" to="">
          ElectroVault
        </Link>
        <div className="sub-container">
          <Link className="btn btn-primary" to="/signup">
            Sign Up
          </Link>
          <Link className="btn btn-primary" to="/Login">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
    <div className=" heading" id="heading">
      <ul>
        <li>
          <Link to="index.html">Home</Link>
        </li>
        <li>
          <Link to="about.html">About Us</Link>
        </li>
        <li>
          <Link to="">Contact</Link>
        </li>
      </ul>
    </div>
    {/* Masthead*/}
    <header className="masthead">
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="text-center text-white">
              {/* Page heading*/}
              <h1 className="mb-5">
                "Empowering Legal Precision Through Digital Excellence"
              </h1>
              {/* Signup form*/}
              {/* * * * * * * * * * * * * * * **/}
              {/* * * SB Forms Contact Form * **/}
              {/* * * * * * * * * * * * * * * **/}
              {/* This form is pre-integrated with SB Forms.*/}
              {/* To make this form functional, sign up at*/}
              {/* https://startbootstrap.com/solution/contact-forms*/}
              {/* to get an API token!*/}
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* Icons Grid*/}
    <section className="features-icons bg-light text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div className="features-icons-icon d-flex">
                <i className="bi bi-shield-fill-check m-auto text-primary" />
              </div>
              <h3>Blockchain-Powered Security</h3>
              <p className="lead mb-0">
                Benefit from the unparalleled security offered by blockchain
                technology, which ensures that your documents are protected
                against unauthorized access, tampering, and data breaches. Your
                documents are stored across a decentralized network of nodes,
                eliminating single points of failure.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div className="features-icons-icon d-flex">
                <i className="bi-layers m-auto text-primary" />
              </div>
              <h3>Immutability and Transparency</h3>
              <p className="lead mb-0">
                Enjoy the peace of mind that comes with document immutability.
                Once your documents are stored on the blockchain, they cannot be
                altered or deleted without your permission. This level of
                transparency ensures the integrity of your records.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-0 mb-lg-3">
              <div className="features-icons-icon d-flex">
                <i className="bi-terminal m-auto text-primary" />
              </div>
              <h3>End-to-End Encryption</h3>
              <p className="lead mb-0">
                Your document contents are encrypted from end to end, ensuring
                that even in transit, your data remains confidential and secure.
                This level of encryption is vital for protecting sensitive and
                confidential information
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Image Showcases*/}
    <section className="showcase">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div
            className="col-lg-6 order-lg-2 text-white showcase-img"
            style={{
              backgroundImage:
                'url("https://blog.smartprint.com/hubfs/Imported_Blog_Media/secure-document-storage-digital-document-security-3.jpg")'
            }}
          />
          <div className="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>Secure Document Storage</h2>
            <p className="lead mb-0">
              At the core of our service is an unwavering commitment to
              safeguarding your valuable legal documents. We employ
              state-of-the-art security measures, including robust data
              encryption, strict access controls, and regular data backups. Rest
              assured that your case-related information is stored with the utmost
              care and confidentiality.
            </p>
          </div>
        </div>
        <div className="row g-0">
          <div
            className="col-lg-6 text-white showcase-img"
            style={{ backgroundImage: 'url("/19728.jpg")' }}
          />
          <div className="col-lg-6 my-auto showcase-text">
            <h2>User Permissions and Access Control</h2>
            <p className="lead mb-0">
              Empower your team with precise control over document access. Our
              platform allows registry offices to grant and manage permissions for
              lawyers and authorized personnel, ensuring that only those with
              legitimate reasons can access specific case documents. We understand
              the importance of data security in the legal field.
            </p>
          </div>
        </div>
        <div className="row g-0">
          <div
            className="col-lg-6 order-lg-2 text-white showcase-img"
            style={{ backgroundImage: 'url("/648.jpg")' }}
          />
          <div className="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>Efficient Case Management</h2>
            <p className="lead mb-0">
              Efficiency is key when dealing with civil cases. Our system
              streamlines case management by offering features such as document
              categorization, powerful search functionality, and easy case editing
              capabilities. Say goodbye to time-consuming manual processes and
              welcome a more productive workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* dfsf       */}
    <section className="features-icons bg-light text-center">
      <div className="container">
        <h2>Why Choose Us</h2>
        <div className="row">
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div className="features-icons-icon d-flex">
                <i className="bi bi-person-vcard" />
              </div>
              <h3>Unique SSOID</h3>
              <p className="lead mb-0">
                Our exclusive Single Sign-On Identifier (SSOID) simplifies the
                user experience, allowing you to access our services seamlessly
                and securely with a single identifier
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div className="features-icons-icon d-flex">
                <i className="bi bi-person-bounding-box m-auto text-primary" />
              </div>
              <h3>Privileged and Secure Access</h3>
              <p className="lead mb-0">
                We offer privileged access controls, ensuring that only authorized
                users can access sensitive information. Your data's security is
                our top priority, and we go the extra mile to protect it
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-0 mb-lg-3">
              <div className="features-icons-icon d-flex">
                <i className="bi bi-person-fill-lock " />
              </div>
              <h3>Data Security</h3>
              <p className="lead mb-0">
                Your data's security is our top priority. We use industry-leading
                encryption and security measures to protect your information
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Call to Action*/}
    {/* Footer*/}
    <footer className="footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
            <ul className="list-inline mb-2">
              <li className="list-inline-item">
                <a href="#!">About</a>
              </li>
              <li className="list-inline-item">⋅</li>
              <li className="list-inline-item">
                <a href="#!">Contact</a>
              </li>
              <li className="list-inline-item">⋅</li>
              <li className="list-inline-item">
                <a href="#!">Terms of Use</a>
              </li>
              <li className="list-inline-item">⋅</li>
              <li className="list-inline-item">
                <a href="#!">Privacy Policy</a>
              </li>
            </ul>
            <p className="text-muted small mb-4 mb-lg-0">
              © Your Website 2023. All Rights Reserved.
            </p>
          </div>
          <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
            <ul className="list-inline mb-0">
              <li className="list-inline-item me-4">
                <a href="#!">
                  <i className="bi-facebook fs-3" />
                </a>
              </li>
              <li className="list-inline-item me-4">
                <a href="#!">
                  <i className="bi-twitter fs-3" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!">
                  <i className="bi-instagram fs-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    {/* Bootstrap core JS*/}
    {/* Core theme JS*/}
    {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
    {/* * *                               SB Forms JS                               * **/}
    {/* * * Activate your form at https://startbootstrap.com/solution/contact-forms * **/}
    {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
  </>
  </div>
  )
}
