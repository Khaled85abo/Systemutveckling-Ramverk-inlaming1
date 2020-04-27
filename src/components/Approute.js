import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Book from "./Book";
import Booking from "./Booking";
import Account from "./Account";
import "../style/_main.scss";

const Approute = () =>{

    return(
        <BrowserRouter>
                 <Navbar/>
                 <Switch>
                    <Route path="/Home" component= {Home} exact ></Route>
                    <Route path="/Book" component= {Book} exact ></Route>
                    <Route path="/Booking" component= {Booking} exact></Route>
                    <Route path="/Account" component= {Account} exact></Route>
                 </Switch>
        </BrowserRouter>
    )


}

export default Approute;