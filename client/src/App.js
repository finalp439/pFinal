import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Detail from "./Pages/Detail";
import Footer from "./componets/Footer";
import Navbar from "./componets/NavBar";
import Home from './Pages/home'
import Products from './Pages/Products'
import ShoppingCart from "./Pages/ShoppingCart"
import Profile from "./componets/Profile";



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path={"/profile"} component={Profile} /> 
        <Route exact path={"/detail/:productId"} component={Detail}/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/products' component={Products}/>
        <Route exact path='/shoppingcart' component={ShoppingCart}/>
      </Switch>
      <Footer/>  
    </BrowserRouter>
  );
}

export default App;
