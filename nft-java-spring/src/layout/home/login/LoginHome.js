import React, { useEffect, useState } from 'react';
import './LoginHome.scss';
import { useForm } from "react-hook-form";
import Storage from 'ultis/storage';
import { useNavigate } from 'react-router-dom';

export default function LoginHome() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const token = Storage.get('token');
    const [tokenApi, setTokenApi] = useState(
        token !== null? token: ""
    )
    const onSubmit = data =>  {
        console.log(data);
    }

    useEffect(() => {
        const checkToken = () => {
            if (tokenApi) {
                navigate("/");
            }
        }
    
        return () => {
            checkToken();
        }
    }, [])

    return (
        <div className='login-padding'>
           <div className="panel shadow1">
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="panel-switch animated fadeIn">
                        <button type="button" id="sign_up" className="active-button" style={{ fontFamily: 'Odibee Sans'}}>Sign Up</button>
                        <button type="button" id="log_in" className=""  style={{ fontFamily: 'Odibee Sans'}} disabled>Log in</button>
                    </div>
                    <h1 className="animated fadeInUp animate1" id="title-login" style={{ fontFamily: 'Odibee Sans'}}>Welcome Back !</h1>
                    <h1 className="animated fadeInUp animate1 hidden" id="title-signup" style={{ fontFamily: 'Odibee Sans'}}>Welcome !</h1>
                    <fieldset id="login-fieldset">
                        <input style={{display: 'block'}} 
                            className="login animated fadeInUp animate2" 
                            name="username" 
                            type="textbox" 
                            placeholder="Username"
                            {...register("username", { required: true, min: 1, max: 50 })}
                        />
                        <p style={{color: 'red'}}>{errors.username?.type === 'required' && "Username is required"}</p>
                        <input style={{display: 'block'}} 
                            className="login animated fadeInUp animate3" 
                            name="password" 
                            type="password" 
                            placeholder="Password"
                            {...register("password", { required: true, min: 8, max: 50 })}
                        />
                        <p style={{color: 'red'}}>{errors.password?.type === 'required' && "Password is required"}</p>
                    </fieldset>
                    <fieldset id="signup-fieldset" className="hidden">
                        <input className="login animated fadeInUp animate2" name="username" type="textbox" placeholder="Username"/>
                        <input className="login animated fadeInUp animate3" name="password" type="password" placeholder="Choose password"/>
                    </fieldset>
                    <div>
                        <div style={{ fontFamily: 'Odibee Sans'}}>
                            <input style={{ fontFamily: 'Odibee Sans', display: 'block'}} type="submit" id="login-form-submit" className="login_form button animated fadeInUp animate4" value="Log in"/>
                            {/* <input style={{ fontFamily: 'Odibee Sans', display: 'block'}} type="submit" id="signup-form-submit" className="login_form button animated fadeInUp animate4" value="Sign up"/> */}
                        </div>
                    </div>
                    <p className='forgot-account'><a id="lost-password-link" href="" className="animated fadeIn animate5" style={{ fontFamily: 'Odibee Sans'}}>I forgot my  login or password (!)</a></p>
                </form>
            </div>
        </div>
    )
}
