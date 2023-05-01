import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { Col, Container, Row, Button } from 'react-bootstrap';
import FacebookLogin from '@greatsumini/react-facebook-login';
import jwt_decode from "jwt-decode";
import usersService from "../../services/users.service";
const Login = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();


    const guestLogin = () => {
        var guestData = {
            _id: Math.floor(100000 + Math.random() * 900000),
            name: "Guest",
            firstname: "Guest",
            lastname: "",
            photo: require('../../img/giftie_question.png')
        }
        console.log(guestData);
        localStorage.setItem('user', JSON.stringify(guestData));
        setUser(guestData);
        navigate('/account');
    }

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
                await usersService.findByEmail(userObj.email)
                    .then((existing) => {
                        if (existing.data.length > 0) {
                            localStorage.setItem('user', JSON.stringify(existing.data[0]));
                            setUser(existing.data[0]);
                            navigate('/account');
                        }
                        else {
                            navigate('/signup');
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
                            localStorage.setItem('user', JSON.stringify(existing.data));
                            setUser(existing.data);
                            navigate('/list');
                        }
                        else {
                            navigate('/signup');
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
        <Container className='loginContainer'>
            <Row>
                <Col className='leftCol'>
                    <h5> Ready for Great Gifts?</h5>
                    <h1>Log In to Giftie</h1>

                    <h5> Dont have an account?  <Link to={'/signup'}>
                        Create one now.
                    </Link></h5>
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
                        appId="1787998954935008"
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
                    <br />

                    <Button size="md" variant="custom" onClick={guestLogin}
                        style={{width: '300px'}}>Guest</Button>

                </Col>
                <Col className='rightCol'>

                </Col>
            </Row>
        </Container>
    )
};
export default Login;