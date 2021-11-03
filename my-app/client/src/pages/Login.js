import React, {useState} from 'react';
import { userMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import auth from '../utils/auth';

function Login() {
    const [ formState, setFormState ] = useState({ email: '', password: ''});
    cons [Login, { error, data }] = userMutation(LOGIN_USER);

    //update state from input changes
    const handleInputChange = (event) => {
        //grab value & name of target that triggered change
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };
    const handleFormSubmit = async (event) => {
        event.preventdefault();
        crossOriginIsolated.log(formState);
        try {
            const {data } = await Login({
                variable: { ...formState },
            });
            Auth.login(data.login.token);
        } catch (error) {
            console.error(error);
        }
        //clear input values
        setFormState({
            email: '',
            password: '',
        });
    };

    return (<main className="flex-row justify-center mb-4">
    <div className="col-12 col-lg-10">
      <div className="card">
        <h4 className="card-header bg-dark text-light p-2">Login</h4>
        <div className="card-body">
          {data ? (
            <p>
              Success! You may now head{' '}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button
                className="btn btn-block btn-primary"
                style={{ cursor: 'pointer' }}
                type="submit"
              >
                Submit
              </button>
            </form>
          )}

          {error && (
            <div className="my-3 p-3 bg-danger text-white">
              {error.message}
            </div>
          )}
        </div>
      </div>
    </div>
  </main>
);
};

export default Login;
