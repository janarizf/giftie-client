import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
export default class Login extends Component {

  render() {

    return (
      <div className="login-bg">
      <Container>
        <Row>
          <Col sm={8}>
            <div className="container">
              <h1 className="display-4">Wishcart.</h1>
              <p className="lead">Always there for you to manage and</p>
              <p>organize for any occasion.</p>
            </div>
          </Col>
          <Col sm={4} className="login-card ">
            <Container>
            <h3>Login to your Account</h3>
            <div className="d-grid gap-2">
              <div className="g-signin2" data-onsuccess="onSignIn"></div>
              <div className="fb-login-button" data-width="" data-size="large" data-button-type="login_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div>
              <p className="forgot-password text-right">
                Don't have an account? <a href="#">sign-up</a>
              </p>
            </div>
            </Container>
          </Col>
        </Row>


      </Container>
      </div>
    )
  }
}
