import React, {Component} from "react";
import './App.css';
import './components/SignUp'
import './components/SignIn'
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        const change = () => {
            this.setState({
                isLoggedIn: !this.state.isLoggedIn
            })
        }

        return (
            <div className='container'>
                {this.state.isLoggedIn ? <SignUp onClick={change}/> : <SignIn onClick={change}/>}
            </div>
        );
    }
}
