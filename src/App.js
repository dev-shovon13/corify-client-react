import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import TopBar from './Pages/Header/TopBar/TopBar';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import About from './Pages/About/About';
import Products from './Pages/Products/Products';
import Review from './Pages/Review/Review';
import Footer from './Pages/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <TopBar />
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/home">
            <TopBar />
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route exact path="/about">
            <TopBar />
            <Header />
            <About />
            <Footer />
          </Route>
          <PrivateRoute exact path="/products">
            <TopBar />
            <Header />
            <Products />
            <Footer />
          </PrivateRoute>
          <PrivateRoute exact path="/placeOrder/:id">
            <TopBar />
            <Header />
            <PlaceOrder />
            <Footer />
          </PrivateRoute>
          <Route path="/review">
            <TopBar />
            <Header />
            <Review />
            <Footer />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
