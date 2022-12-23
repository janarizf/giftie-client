import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { Col, Container, Row } from 'react-bootstrap';
import jwt_decode from "jwt-decode";
import usersService from "../../services/users.service";
const SignUp = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();


    const googleSuccess = async (response) => {
        console.log(response);
        var userObj = jwt_decode(response.credential);
        console.log(userObj);
        

      
        try {
            if (userObj) {
                await usersService.signUp(userObj)
                    .then((existing) => {
                        if (existing) {
                            console.log(existing);
                            localStorage.setItem('user', JSON.stringify(existing.data));
                            setUser(existing.data[0]);
                            navigate('/list');
                        }
                     
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                 
            }

            //findByEmail
            // dispatch({ type: "AUTH", data: { result, token } });
            //check if existing user
            // if not insert new user
            //else user is already exisitng, sign in
            //get user ID

        } catch (error) {
            console.log(error);
        }
    };

    const googleError = (error) => { console.log(error) };
    return (
        <Container className='signupContainer'>
            <Row>
                <Col className='leftCol'>
                    <h5> Create a free Giftie account.</h5>
                    <GoogleLogin
                        onSuccess={googleSuccess}
                        onError={googleError}
                        cookiePolicy={'single_host_origin'}
                        type={'standard'}
                        theme={'outline '}
                        size={'large'}
                        shape={'rectangular'}
                        width="300px"
                    />

                    {/* <div className="fb-login-button"
                        data-width="400"
                        data-size="large"
                        data-button-type="continue_with"
                        data-layout="default"
                        data-auto-logout-link="false"
                        data-use-continue-as="true">
                    </div> */}
                </Col>
                <Col className='rightCol'>

                </Col>
            </Row>
        </Container>
    )
};
export default SignUp;