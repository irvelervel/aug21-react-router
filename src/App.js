import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import Home from './components/Home'
import Reservations from './components/Reservations'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  // advanced stuff!
  // const myFunction = () => console.log('hello')
  return (
    <div>
      <Router>
        <MyNavbar brand="Strivestaurant" />
        <Route path="/" exact component={Home} />
        <Route path="/reservations" exact component={Reservations} />
      </Router>
    </div>
  )
}

export default App

// 1)
// for loading a specific component on a specific route, we'll need to use
// a Route component from react-router-dom

// 2)
// For putting Route components into our application, they need on their own
// to be wrapped inside a Router
