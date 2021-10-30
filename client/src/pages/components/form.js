import React, { useState } from 'react';
import 'my-app/client/src/pages/components/form.css'
import { checkPassword, validateEmail } from '../utils';

function Form() {
    //create state vars for form fields, set initial val to empty array
    const [ email, setEmail ] = useState('');
    const [ userName, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');

    const handleInputChange = (e) => {
        //grab value & name of target that triggered change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if ( inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUsername('inputValue');
        } else {
            setPassword(inputValue);
        }       
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        //check if email/username are invalid
        if (!validateEmail(email) || !userName) {
            setErrorMessage('Unable to validate. Please check your credentials!');
            return;
        }
        if (!checkPassword(password)) {
            setErrorMessage(`Please choose a more secure password for the account: ${userName}`);
            return;
        }
        alert(`Welcome ${userName}`);
        //clear inputs
        setUsername('');
        setPassword('');
        setEmail('');
    };

    return (
        <div>
            <p>Welcome {userName}!</p>
            <form className="form">
                <input value = {email} name="email"
                 onChange={handleInputChange}
                 type="email"
                 placeholder="email"
               />
               <input
                 value={userName}
                 name="userName"
                 onChange={handleInputChange}
                 type="text"
                 placeholder="username"
               />
               <input
                 value={password}
                 name="password"
                 onChange={handleInputChange}
                 type="password"
                 placeholder="Password"
               />
               <button type="button" onClick={handleFormSubmit}>Submit</button>
             </form>
             {errorMessage && (
               <div>
                 <p className="error-text">{errorMessage}</p>
               </div>
             )}
        </div>
         );
       }
       
       export default Form;
       
