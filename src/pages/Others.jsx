import React from 'react'

export const Others = () => {
  return (
    <>
  {/* Coding by CodingLab | www.codinglabweb.com */}
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/*--======== CSS ======== */}
  <link rel="stylesheet" href="css/mainpages.css" />
  {/*--===== Boxicons CSS ===== */}
  <link
    href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
    rel="stylesheet"
  />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
    crossOrigin="anonymous"
  />
  <title>home page</title>
  <nav className="sidebar close">
    <header>
      <div className="image-text">
        <span className="image">
          <img src="profile.png" alt="" />
        </span>
        <div className="text logo-text">
          <span className="name">user name</span>
          <span className="profession">profession</span>
        </div>
      </div>
      <i className="bx bx-chevron-right toggle" />
    </header>
    <div className="menu-bar">
      <div className="menu">
        <ul className="menu-links">
          <li className="nav-link">
            <a href="editprofile.html">
              <i className="bx bx-home-alt icon" />
              <span className="text nav-text">Edit Profile</span>
            </a>
          </li>
          {/* <li class="nav-link">
                  <a href="#">
                      <i class='bx bx-bar-chart-alt-2 icon' ></i>
                      <span class="text nav-text">Create evault</span>
                  </a>
              </li> */}
        </ul>
      </div>
      <div className="bottom-content">
        <li className="">
          <a href="#">
            <i className="bx bx-log-out icon" />
            <span className="text nav-text">Logout</span>
          </a>
        </li>
        <li className="mode">
          <div className="sun-moon">
            <i className="bx bx-moon icon moon" />
            <i className="bx bx-sun icon sun" />
          </div>
          <span className="mode-text text">Dark mode</span>
          <div className="form-check form-switch " id="checkbox">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            {/* <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label> */}
          </div>
        </li>
      </div>
    </div>
  </nav>
  <section className="home">
    <div className="container">
      <div className="row height d-flex justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="form">
            <i className="fa fa-search" />
            <input
              type="text"
              id="form_suit"
              className="form-control form-input"
              placeholder="Search CaseID"
            />
            <button id="reg_search" type="submit" />
          </div>
          <div className="card-header"></div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}
