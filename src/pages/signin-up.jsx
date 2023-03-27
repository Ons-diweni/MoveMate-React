import { useNavigate } from 'react-router-dom';
import './signin-up.css'
import { useRef , useState , useEffect } from 'react';
import {useForm  } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as Yup from 'yup';


//****************************************************************************************/

export const Signinup = () => {

useEffect(()=>{console.log(window.location)}, [])

const navigate = useNavigate()
const Redirecthome = () => {navigate('/')}


//************************************* Sign In ******************************************************/
//schema signin validation 
const signupSchema  = Yup.object().shape({

username : Yup.string().matches(/^[a-zA-Z\s]+$/ , 'Please enter a valid username').min(3).max(20).required(),
email : Yup.string().email('Please enter a valid email').matches(new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/) , 'Please enter a valid email').required() ,
password : Yup.string().matches(new RegExp(/^(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*()_+=\-{}\[\]|\\:;"'<>,.?\/]{8,30}$/) , 'Password must be between 8 and 30 alphanumeric characters, with at least one uppercase letter').required() ,
confirmedPassword : Yup.string().oneOf([Yup.ref('password'), null], 'Password do not match').required('Please re-enter your password'),
cin : Yup.number().integer('Please enter a valid cin').min(10000000 , 'Please enter a valid cin').max(99999999 , 'Please enter a valid cin').required('Please enter your cin') 

}) 

//errors is an object contains each of the fields in the form and their errors
const {register: registerup, handleSubmit : handleSubmitup , formState : {errors : errorsup}} = useForm ({resolver : yupResolver(signupSchema ) });


const onSubmitUp = (data) => { console.log(data)}


//************************************* Sign Up ******************************************************/

const signinSchema  = Yup.object().shape({

  email : Yup.string().email('Please enter a valid email').matches(new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/) , 'Please enter a valid email').required('Email is required') ,
  password : Yup.string().required('Password is a required') ,
  
  }) 

//errors is an object contains each of the fields in the form and their errors
const { register: registerin, handleSubmit: handleSubmitin ,formState : {errors: errorsin }} = useForm({resolver : yupResolver(signinSchema)});

const onSubmitIn = (data) => { console.log(data)

}

//********************************************************************************************/

    return (
       <div>
         <div className="container">          
            <div className="logo-container">
                <h3 className="logo">Move<span>Mate</span></h3>
                <br/>
                <button  onClick={Redirecthome} > Back to Home </button>
            </div>
            
        </div>
        <div className="login-wrap">
          <div className="login-html">
            <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Sign In</label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label htmlFor="tab-2" className="tab">Sign Up</label>
            <div className="login-form">
             {/********************* Sign in form  *******************/}
             <form   onSubmit={handleSubmitin(onSubmitIn)}>
              <div className="sign-in-htm">
                <div className="group">
                  <label htmlFor="email" className="label">Email</label>
                  <input id="email" type="text" className="input" {...registerin("email")} />
                  <div className="error-container">
                  {errorsin.email && <span className="error-message">{errorsin.email.message}</span>}
                  </div>
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">Password</label>
                  <input id="pass" type="password" className="input" data-type="password" {...registerin("password")} />
                  <div className="error-container">
                  {errorsin.password && <span className="error-message">{errorsin.password.message}</span>}
                  </div>
                </div>
                <div className="group">
                  <input id="check" type="checkbox" className="check" defaultChecked />
                  <label htmlFor="check"><span className="icon" /> Keep me Signed in</label>
                </div>
                <div className="group">
                  <input type="submit" className="button" defaultValue="Sign In" />
                </div>
                <div className="hr" />
                <div className="foot-lnk">
                  <a href="#forgot">Forgot Password?</a>
                </div>
              </div>
              </form>
              {/********************* Sign Up form  *******************/}
              <form onSubmit={handleSubmitup(onSubmitUp)} >
              <div className="sign-up-htm">
                <div className="group">
                  <label htmlFor="username" className="label">Username</label>
                  <input id="username" type="text" className="input" {...registerup("username")} />
                  <div className="error-container">
                  {errorsup.username && <span className="error-message">{errorsup.username.message}</span>}
                  </div>
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">Password</label>
                  <input id="pass" type="password" className="input" data-type="password" {...registerup("password")} />
                  <div className="error-container">
                  {errorsup.password && <span className="error-message">{errorsup.password.message}</span>}
                  </div>
                </div>
                <div className="group">
                  <label htmlFor="confpass" className="label">Confirm Password</label>
                  <input id="confpass" type="password" className="input" data-type="password" {...registerup("confirmedPassword")} />
                  <div className="error-container">
                  {errorsup.confirmedPassword && <span className="error-message">{errorsup.confirmedPassword.message}</span>}
                  </div>
                </div>
                <div className="group">
                  <label htmlFor="email" className="label">Email Address</label>
                  <input id="email" type="text" className="input" {...registerup("email")} />
                  <div className="error-container">
                  {errorsup.email && <span className="error-message">{errorsup.email.message}</span>}
                  </div>
                </div>
                <div className="group">
                  <label htmlFor="cin" className="label">Numèro cin </label>
                  <input id="cin" type="number" className="input" required  minLength={8} {...registerup("cin")}/>
                  <div className="error-container">
                  {errorsup.cin && <span className="error-message">{errorsup.cin.message}</span>}
                  </div>
                </div>
                {/* <div className="group">
                  <label htmlFor="pass" className="label">Carte d'identitè</label>
                  <input id="pass" type="file" className="input" accept="image/*" required />
                </div> */}
                <br/>
                <div className="group">
                  <input type="submit" className="button" defaultValue="Sign Up" />
                </div>
               
                <div className="hr" />
                <div className="foot-lnk">
                  <label htmlFor="tab-1">Already Member?
                  </label></div>
              </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      );
}