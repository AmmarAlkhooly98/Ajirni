import React, { Fragment } from "react";
import ItemDetail from "./components/itemDetails";
import { Provider } from "react-redux";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import store from "./store";
// import SportForm from "./components/SportForm.js";
import RealEstate from "./components/realEstate.js";
import Tools from "./components/tools.js";
import Header from "./components/newheader";
import Home from "./components/home.js";
import Footer from "./components/footer.js";
import UserItems from "./components/userItems.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserProfile from "./components/userProfile";
import { connect } from "react-redux";
import {NotificationContainer} from 'react-notifications';
import Signup from "./components/signup";
import SignIn from "./components/signin";
import ItemsList from "./components/itemsList";
import CarsForm from "./components/CarsForm";
import Likes from "./components/likes";
import chat from "./components/chat";
import chat2 from "./components/chat2";
import ProtectedRoute from "./components/protect";
import SimpleSlider from "./components/slider";
import Alerts from "./components/alerts";
import Chat from "./components/newChat"
import 'bootstrap/dist/css/bootstrap.css';
import 'react-notifications/lib/notifications.css';
import Reviews from "./components/reviews";
import RandomUsers from './components/randomUsers'
var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const alertOptions = {
  position: positions.UP_CENTER,
  timeout: 50000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE
};
 

 
class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
        <NotificationContainer />
          <Router>
            <Header />
            <Alerts />
            
              <Route path="/" exact component={Home} />
              <ProtectedRoute
                token={this.props.token}
                userId={this.props.user_id}
                path="/user"
                exact
                component={UserProfile}
              />
              <ProtectedRoute
                token={this.props.token}
                userId={this.props.user_id}
                path="/addcar"
                exact
                component={CarsForm}
              />
               <ProtectedRoute
                token={this.props.token}
                userId={this.props.user_id}
                path="/chat"
                exact
                component={Chat}
              />
              <ProtectedRoute
                token={this.props.token}
                userId={this.props.user_id}
                path="/addrealestate"
                exact
                component={RealEstate}
              />
              <ProtectedRoute
                token={this.props.token}
                userId={this.props.user_id}
                path="/others"
                exact
                component={Tools}
              />
              
              <Route path="/slider" component={SimpleSlider} />
              <Route path="/Category" component={ItemsList} />
              <Route path="/itemDetail" component={ItemDetail} />
              <Route path="/carsForm" exact component={CarsForm} />
              <Route path="/itemsList" exact component={ItemsList} />
              <Route path="/RealEstate" exact component={RealEstate} />
              <Route path="/userItems" exact component={UserItems} />
              <Route path="/likes" exact component={Likes} />
              <Route path="/signin" exact component={SignIn} />
              {/* <Route path="/categorySlides" exact component={Carousel} /> */}
              <Route path="/tools" exact component={Tools} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/allusers" exact component={RandomUsers} />
              <Route path="/reviews" exact component={Reviews} />
            
            <Footer />
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
  user_id: state.signin.userId,
  token: state.signin.token,
  username: state.signin.username
});

export default connect(mapStateToProps)(App);
