import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { Col, Container, Row } from 'react-bootstrap';
import FacebookLogin from '@greatsumini/react-facebook-login';
import jwt_decode from "jwt-decode";
import usersService from "../../services/users.service";
import { AddUserToGroup } from "../../helper"
const SignUp = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const params = useParams();
    const groups = params.id ? params.id.toString() : params.id;

    const fbSuccess = async (response) => {
        console.log('Get FB Profile Success!', response);
        var userObj = {
            name: response.name,
            firstname: response.name,
            lastname: response.name,
            email: response.email,
            photo: response.picture.data.url
        };
        console.log(userObj);
        try {
            if (userObj) {
                await usersService.signUp(userObj)
                    .then((existing) => {
                        alert("User Existing. Logging In");
                        if (existing) {
                            console.log("existing");
                            localStorage.setItem('user', JSON.stringify(existing.data));
                            setUser(existing.data);
                            navigate('/account');
                            window.location.reload(true);
                        }

                    })
                    .catch(function (error) {
                        console.log(error);
                    })

            }

        } catch (error) {
            console.log(error);
        }
    };
    const googleSuccess = async (response) => {
        console.log(response);
        var userObj = jwt_decode(response.credential);
        console.log(userObj);
        try {
            if (userObj) {
                await usersService.findByEmail(userObj.email)
                    .then((existing) => {
                        if (existing.data.length > 0) {
                            console.log("existing");
                            localStorage.setItem('user', JSON.stringify(existing.data[0]));
                            setUser(existing.data[0]);
                            alert("User Existing. Logging In");
                            navigate('/account');

                        }
                        else {
                            usersService.signUp(userObj)
                                .then((user) => {
                                    if (user.data) {
                                        console.log(user.data);
                                        localStorage.setItem('user', JSON.stringify(user.data));
                                        setUser(user.data);
                                        navigate('/account');
                                    }

                                })
                                .catch(function (error) {
                                    console.log(error);
                                })
                        }
                        window.location.reload(true);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })



            }

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
                        shape={'pill'}
                        width="300px"
                    />
                    <FacebookLogin
                        appId="1020487169127522"
                        style={{
                            backgroundColor: '#4267b2',
                            color: '#fff',
                            fontSize: '16px',
                            padding: '12px 24px',
                            margin: '10px 0 0 0',
                            border: 'none',
                            borderRadius: '25px',
                            width: '300px'
                        }}
                        onSuccess={(response) => {
                            console.log('Login Success!', response);
                        }}
                        onFail={(error) => {
                            console.log('Login Failed!', error);
                        }}
                        onProfileSuccess={fbSuccess}
                    />
                </Col>
                <Col className='rightCol'>

                </Col>
            </Row>
        </Container>
    )
};
export default SignUp;