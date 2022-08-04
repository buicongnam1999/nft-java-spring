import React from 'react';
import './LoginHome.scss';

export default function LoginHome() {
    return (
        <div style={{background: '#08090c', padding: '50px',}}>
           <div className="panel shadow1">
                <form className="login-form">
                    <div className="panel-switch animated fadeIn">
                        <button type="button" id="sign_up" className="active-button" style={{ fontFamily: 'Odibee Sans'}}>Sign Up</button>
                        <button type="button" id="log_in" className=""  style={{ fontFamily: 'Odibee Sans'}} disabled>Log in</button>
                    </div>
                    <h1 className="animated fadeInUp animate1" id="title-login" style={{ fontFamily: 'Odibee Sans'}}>Welcome Back !</h1>
                    <h1 className="animated fadeInUp animate1 hidden" id="title-signup" style={{ fontFamily: 'Odibee Sans'}}>Welcome !</h1>
                    <fieldset id="login-fieldset">
                        <input className="login animated fadeInUp animate2" name="username" type="textbox"  required   placeholder="Username" value=""/>
                        <input className="login animated fadeInUp animate3" name="password" type="password" required placeholder="Password" value=""/>
                    </fieldset>
                    <fieldset id="signup-fieldset" class="hidden">
                        <input className="login animated fadeInUp animate2" name="username" type="textbox"  required   placeholder="Username" value=""/>
                        <input className="login animated fadeInUp animate3" name="password" type="password" placeholder="Choose password"  required  value=""/>
                    </fieldset>
                    <div>
                        <div style={{ fontFamily: 'Odibee Sans'}}>
                            <input style={{ fontFamily: 'Odibee Sans'}} type="submit" id="login-form-submit" className="login_form button animated fadeInUp animate4" value="Log in"/>
                            <input style={{ fontFamily: 'Odibee Sans'}} type="submit" id="signup-form-submit" className="login_form button animated fadeInUp animate4 hidden" value="Sign up"/>
                        </div>
                    </div>
                    <p><a id="lost-password-link" href="" className="animated fadeIn animate5" style={{ fontFamily: 'Odibee Sans'}}>I forgot my  login or password (!)</a></p>
                </form>
            </div>
        </div>
    )
}
