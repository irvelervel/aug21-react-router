import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import Home from './components/Home'
import Reservations from './components/Reservations'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from './components/Menu'
import DishDetails from './components/DishDetails'

// for using a Route, you have to be inside a Router

function App() {
  // advanced stuff!
  // const myFunction = () => console.log('hello')
  return (
    <div>
      <Router>
        <MyNavbar brand="Strivestaurant" />
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <Home {...routerProps} subTitle="We can only serve pasta" />}
          />
          <Route path="/reservations" exact component={Reservations} />
          <Route path="/menu" exact component={Menu} />
          {/* Route is taking our component as a prop, and returning something new! */}
          {/* it's creating a HOC - Higher-order component */}

          <Route path="/details/:pastaId" component={DishDetails} />
          {/* valid routes can be /details/0, /details/strive, /details/whatever */}

          {/* with the render prop (instead of component) you can pass your own props to the component! */}
          {/* the render prop takes a function and returns a component Tag */}
          {/* but now this component is not receiving automatically history, location and match anymore! */}
          {/* luckily, those props are safely stored in the only argument the render function is accepting */}
          {/* so we can safely spread the content of that parameter in the props of our component */}
          <Route component={() => <h1>404</h1>} />
          {/* the Switch statement will stop whenever a specific route is found, */}
          {/* it's the simplest way of defining a fallback case for displaying like */}
          {/* a 404 page when a url does not match any route */}
        </Switch>
      </Router>
    </div>
  )
}

export default App

// --> for loading a specific component on a specific route, we'll need to use
// a Route component from react-router-dom

// --> but for putting Route components into our application, they need on their own
// to be wrapped inside a Router

// history, location and match are additional props given to wrapped components
// thanks to the Route component

// if you pass a Component into the component prop of a Route we're achieving 2 things:
// 1) we're mounting that component just on the specified path
// 2) we're enriching the said component with history, location and match

// if you just want 2), you can wrap its export with the withRouter function
// just like we did with MyNavbar

// STEPS!
// - npm i react-router-dom for installing the package
// - import BrowserRouter in App.js and wrap everything inside of it
// - import Route as well and wrap your components into different routes, they will load
// just on the path you specify
// - if you need to pass your own props as well, use the 'render' route prop instead of 'component'
// - to redirect your components into these different URLs, don't use traditional anchor tags
// but the Link component from the library or use history.push()
// - if you need a dynamic route, use : to assign a name to the portion of the URL; whatever
// will be inserted in that spot will be assigned to that route parameter, and you'll be able
// to retrieve its value from the routed component using match.params.THE_NAME_YOU_PUT_IN_THE_ROUTE
