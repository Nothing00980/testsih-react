import { Main } from './pages/Main';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import { Createvault } from './pages/Createvault';
import { Login } from './pages/Login';
import { Others } from './pages/Others';
import { Signup } from './pages/Signup';
import { Registry } from "./pages/Registry";
import 'bootstrap/dist/css/bootstrap.css'


function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path='/' element={<Main />} ></Route>
          <Route path='/About' element={<About />} ></Route>
          <Route path='/Contact' element={<Contact />} ></Route>
          <Route path='/Createvault' element={<Createvault />} ></Route>
          <Route path='/Login' element={<Login />} ></Route>
          <Route path='/Registry' element={<Registry />} ></Route>
          <Route path='/signup' element={<Signup />} ></Route>
          <Route path='/Others' element={<Others />} ></Route>
          {/* <Redirect to="/" /> */}


        </Switch>
    </Router>
    </>
  )
}

export default App
