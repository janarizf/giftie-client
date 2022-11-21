import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { Col, Container, Button, Row } from 'react-bootstrap';

const SignUp = () => {
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const switchMode = () => {
        // setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        // setShowPassword(false);
    };

    const googleSuccess = async (response) => {
        console.log(response);
    //    const result = res?.profileObj;
      //  const token = res?.tokenId;
      localStorage.setItem('user', JSON.stringify(response));
      const { clientId, name, imageUrl } = response;
      const doc = {
        _id: clientId,
        _type: 'user',
        userName: name,
        image: imageUrl,
      };

        try {
           // dispatch({ type: "AUTH", data: { result, token } });

            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    const googleError = (error) => { console.log(error) };
    return (
        <Container >
            <Row>
                <Col sm={8}>
                    <div className="container">
                        <h1 className="display-4">Wishcart.</h1>
                        <p className="lead">Always there for you to manage and</p>
                        <p>organize for any occasion.</p>
                    </div>
                </Col>
                <Col sm={4} >
                    <GoogleLogin
                        onSuccess={googleSuccess}
                        onError={googleError}
                        cookiePolicy={'single_host_origin'}
                        type= {'standard'}
                        theme={'outline '}
                        size={'large'}
                        shape={'rectangular'}
                    />
                    <Row>
                        <Col>
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
};
export default SignUp;