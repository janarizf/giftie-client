import React from "react";
import logo from "../../../img/giftie_logo_white.png";
import {
  Container,
  Logo,
  Wrapper,
  LeftContainer,
  RightContainer,
  FormContainer,
  GoogleSignInButton,
  TextWithLines,
  StyledForm,
  FormFooter
} from "./Login.styled";
import {
  Typography,
  GooglePlusIcon,
  FormInput,
  Button,
  Link
} from "../../../shared/elements";
import { COLORS } from "../../../constants/colors";

const Login = () => {
  return (
    <Container>
      <Logo src={logo} alt='logo' />
      <Wrapper>
        <LeftContainer className='text-white'>
          <Typography
            component='h1'
            color={COLORS.WHITE}
            fontSize={65}
            fontWeight='bold'
          >
            Manage your website
            <br />
            with ease
          </Typography>
        </LeftContainer>
        <RightContainer>
          <FormContainer>
            <Typography
              fontSize={30}
              fontWeight='bold'
              customMargin={"0 0 15px"}
            >
              Welcome Admin
            </Typography>
            <Typography customMargin={"0 0 5px"}>Sign in with</Typography>
            <GoogleSignInButton>
              <GooglePlusIcon width='30px' height='30px' />
              Sign in with Google
            </GoogleSignInButton>
            <TextWithLines>or</TextWithLines>
            <StyledForm>
              <FormInput placeholder='Enter username' label='Username' />
              <FormInput
                placeholder='Enter password'
                label='Password'
                type='password'
              />
              <Button style={{ marginTop: 10 }}>Login</Button>
            </StyledForm>
            <FormFooter>
              <Link>FAQ</Link>
            </FormFooter>
          </FormContainer>
        </RightContainer>
      </Wrapper>
    </Container>
  );
};

export default Login;
