import react from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import Home from './pages/Home'
import FindBranch from './pages/FindBranch'
import HelpCenter from './pages/HelpCenter'
import Account from './pages/Account'
import OpenAnAccount from './pages/OpenAnAccount'
import Banking from './pages/Banking'
import BusinessServices from './pages/BusinessServices'
import About from './pages/About'
import Contact from './pages/Contact'
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/find-branch">
          <FindBranch />
        </Route>

        <Route path="/help">
          <HelpCenter />
        </Route>

        <Route path="/account">
          <Account />
        </Route>

        <Route path="/open-an-account">
          <OpenAnAccount />
        </Route>

        <Route path="/banking">
          <Banking />
        </Route>

        <Route path="/business-services">
          <BusinessServices />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
        
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <BottomNav />
      <Footer />
    </div>
  );
}

export default App;
