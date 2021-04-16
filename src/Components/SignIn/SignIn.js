import React, { useState } from 'react';
import { login } from '../../Routes/Auth';
import { Button, TextField, Box, Grid } from '@material-ui/core';

const SignIn = (props) => {

    const [loginCreds, setLoginCreds] = useState({
        username: '',
        password: '',
    });

    const handleLogin = () => {
        const user = 'admin';
        const pass = 'password';

        if (user === loginCreds.username && pass === loginCreds.password) {
            login();
            props.history.push('/Dashboard');
        } else {
            alert('Username and Password is incorrect');
        }
    }

    return (
        <>
            <Grid className="sign_in_wrapper" container justify="center" alignItems="center">
                <div className="form_container">
                    <h1 className="first_heading">Sign In</h1>
                    <Grid container justify="center" alignItems="center" spacing={3}>
                        <Grid item md={12} xs={12}>
                            <TextField type="text" className="field_wrapper" label="Username" variant="outlined" onChange={e => setLoginCreds({ ...loginCreds, username: e.target.value })} />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <TextField type="password" className="field_wrapper" label="Password" variant="outlined" onChange={e => setLoginCreds({ ...loginCreds, password: e.target.value })} />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <Button variant="contained" color="primary" className="btn" onClick={handleLogin}>Click Here To Login</Button>
                        </Grid>
                    </Grid>
                    <div className="form_footer">
                        <p><a href="javascript::">Forget Password</a></p>
                        <p><a href="javascript::">Not a registered user? Sign Up Here</a></p>
                    </div>
                </div>
            </Grid>
        </>
    );
};

export default SignIn;