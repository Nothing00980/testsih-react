import React from 'react'

export const About = () => {
  return (
    <>
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
  <nav>
    <div className=" heading" id="heading">
      <ul>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
  {/* Masthead*/}
  <header className="masthead">
    <div className="container position-relative">
      <div className="row justify-content-center">
        <div className="col-xl-9">
          <div className="text-center text-white">
            {/* Page heading*/}
            <h2 className="mb-5">ABOUT US</h2>
            <p>
              In an increasingly digital world, where the confidentiality and
              security of sensitive documents are paramount,
              <br /> ElectroVault stands as your trusted partner in safeguarding
              your most critical information. We understand that government
              officials, lawyers, and government employees handle documents of
              utmost importance, and the need for a secure, decentralized, and
              technologically advanced solution has never been more crucial. At
              Electrovault, we are dedicated to revolutionizing document storage
              and management by harnessing the power of blockchain technology.
              Our platform is purpose-built to cater to the unique needs of
              individuals and organizations within the public sector, legal
              professions, and government service. Here, you will find a
              sanctuary for your documents, where security is not just a feature
              but a fundamental principle. Our cutting-edge blockchain
              technology ensures that your documents are protected with the
              highest level of security and immutability, safeguarding them from
              unauthorized access and tampering. With end-to-end encryption and
              decentralized storage, we provide an unparalleled level of trust
              and reliability in the digital realm{" "}
            </p>
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
  {/* Call to Action*/}
  <section className="call-to-action text-white text-center" id="signup">
    <div className="container position-relative">
      <div className="row justify-content-center">
        <div className="col-xl-6">
          <h2 className="mb-4">Mail Us</h2>
          {/* Signup form*/}
          {/* * * * * * * * * * * * * * * **/}
          {/* * * SB Forms Contact Form * **/}
          {/* * * * * * * * * * * * * * * **/}
          {/* This form is pre-integrated with SB Forms.*/}
          {/* To make this form functional, sign up at*/}
          {/* https://startbootstrap.com/solution/contact-forms*/}
          {/* to get an API token!*/}
          <form
            className="form-subscribe"
            id="contactFormFooter"
            data-sb-form-api-token="API_TOKEN"
          >
            {/* Email address input*/}
            <div className="row">
              <div className="col">
                <input
                  className="form-control form-control-lg"
                  id="emailAddressBelow"
                  type="email"
                  placeholder="Email Address"
                  data-sb-validations="required,email"
                />
                <div
                  className="invalid-feedback text-white"
                  data-sb-feedback="emailAddressBelow:required"
                >
                  Email Address is required.
                </div>
                <div
                  className="invalid-feedback text-white"
                  data-sb-feedback="emailAddressBelow:email"
                >
                  Email Address Email is not valid.
                </div>
              </div>
              <div className="col-auto">
                <button
                  className="btn btn-primary btn-lg disabled"
                  id="submitButton"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
            {/* Submit success message*/}
            {/**/}
            {/* This is what your users will see when the form*/}
            {/* has successfully submitted*/}
            <div className="d-none" id="submitSuccessMessage">
              <div className="text-center mb-3">
                <div className="fw-bolder">Form submission successful!</div>
                <p>To activate this form, sign up at</p>
                <a
                  className="text-white"
                  href="https://startbootstrap.com/solution/contact-forms"
                >
                  https://startbootstrap.com/solution/contact-forms
                </a>
              </div>
            </div>
            {/* Submit error message*/}
            {/**/}
            {/* This is what your users will see when there is*/}
            {/* an error submitting the form*/}
            <div className="d-none" id="submitErrorMessage">
              <div className="text-center text-danger mb-3">
                Error sending message!
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
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

  )
}
