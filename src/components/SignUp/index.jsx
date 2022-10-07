import React, {Component} from 'react';
import './style.css'
import '../common.css'

class SignUp extends Component {
    render() {
        return (
            <div className='up-container main'>
                <h1>Welcome</h1>
                <p className='title'>Signup into your account</p>
                <div className="wrapper">
                    <h1 className='inner-title'>Sign Up</h1>
                    <div className='profile'/>
                    <input type="text" placeholder='Full Name'/>
                    <input type="email" placeholder='E-mail'/>
                    <input id={'password'} type="password" placeholder='Password'/>
                    <button>SIGN UP</button>
                </div>
                <p className={'text'}>Already have an account ? <span onClick={this.props.onClick}>Log in</span></p>
            </div>
        );
    }
}

export default SignUp;