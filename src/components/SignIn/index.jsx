import React, {Component} from 'react';
import './style.css'
import '../common.css'
import img from '../resources/Thor.jpg'

class SignIn extends Component {
    render() {
        return (
            <div className='in-container main'>
                <h1>Welcome Back</h1>
                <p className='title'>Login back into your account</p>
                <div className="wrapper">
                    <h1 className='inner-title'>Log In</h1>
                    <img src={img} className='profile' alt="rasm"/>
                    <input type="email" placeholder='E-mail'/>
                    <input id={'password'} type="password" placeholder='Password'/>
                    <p className='forget'>Forgot password ?</p>
                    <button>LOGIN</button>
                </div>
                <p className={'text'}>Don't have an account yet ? <span onClick={this.props.onClick}>Join now</span></p>
            </div>
        );
    }
}

export default SignIn;