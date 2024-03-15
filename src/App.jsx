import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Basket from './Pages/Basket'
import ChooseImg from './Pages/ChooseImg'

function App() {

  return (
    <>
      <Router>
            <Switch>
                <Route exact path="/" component={<Home />} />
                <Route path="/basket" component={<Basket />} />
                <Route path="/chooseimg" component={<ChooseImg />} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    </>
  )
}

export default App
