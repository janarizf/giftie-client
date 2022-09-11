import React, { Component } from 'react'
export default class Login extends Component {
  
  render() {

    return (
      <form>
        <h3>Login to your Account</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
            <button className="btn btn-primary" size="lg">
                Block level button
            </button>
            <button className="btn btn-primary" size="lg">
                Block level button
            </button>
            <div class="g-signin2" data-onsuccess="onSignIn"></div>
            <div class="fb-login-button" data-width="" data-size="large" data-button-type="login_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div>
            <button className="btn btn-primary" size="lg">
            </button>
        </div>

        <p className="forgot-password text-right">
          Don't have an account? <a href="#">sign-up</a>
        </p>
      </form>

    )
  }
}
