import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { Col, Container, Button, Row } from 'react-bootstrap';
import jwt_decode from "jwt-decode";
const SignUp = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const switchMode = () => {
        // setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        // setShowPassword(false);
    };

    const googleSuccess = async (response) => {
        console.log(response);
        var userObj = jwt_decode(response.credential);
        console.log(userObj);
        setUser(userObj);

        localStorage.setItem('user', JSON.stringify(userObj));
        try {
            // dispatch({ type: "AUTH", data: { result, token } });

            navigate('/lists');
        } catch (error) {
            console.log(error);
        }
    };

    const googleError = (error) => { console.log(error) };
    return (
        <Container className='loginContainer'>
            <Row>
                <Col className='leftCol'>
                    <h5> Ready for Great Gifts?</h5>
                    <h1>Log In to Giftie</h1>

                    <h5> Dont have an account? Create one now.</h5>
                    <GoogleLogin
                        onSuccess={googleSuccess}
                        onError={googleError}
                        cookiePolicy={'single_host_origin'}
                        type={'standard'}
                        theme={'outline '}
                        size={'large'}
                        shape={'rectangular'}
                        width="400"
                    />
                   
                    <div class="fb-login-button" 
                        data-width="400" 
                        data-size="large" 
                        data-button-type="continue_with" 
                        data-layout="default" 
                        data-auto-logout-link="false" 
                        data-use-continue-as="true">
                    </div>
                </Col>
                <Col className='rightCol'>

                </Col>
            </Row>
        </Container>
    )
};
export default SignUp;