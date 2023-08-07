import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  h5, h3
  {
    font-family: 'Nunito ExtraBold', sans-serif;
    color: ${({ theme }) => theme.colors.text};
  }

  .jumbotron-list{
    background: ${({ theme }) => theme.colors.body};
    background-image: url(${({ theme }) => theme.images.header});
    color: ${({ theme }) => theme.colors.text};
    background-size: cover;
    text-align: center;
    text-align:left;
  
  }
  .container-list
    {
    background: #f3f3f3;
    }

  .container-main
  {
    background: #000000;
    background-color: rgba(0, 0, 0, .001);
  }

  .footer
  {
    background: ${({ theme }) => theme.colors.body};
    background-image: url(${({ theme }) => theme.images.header});
    background-size: cover;
    padding: 20px;
    color: #ffffff;
  }
  .main
  {
    background-image: url(${({ theme }) => theme.images.background});
    background-size: cover;
  }
`;