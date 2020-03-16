import React, {Component} from "react";
import MainPageNavBar from "./MainPageNavBar";
import MainPageBody from "./MainPageBody";

class MainPage extends Component{
    render() {
        return (
            <div>
                <MainPageNavBar/>
                <MainPageBody/>
            </div>
        );
    }
}

export default MainPage;
