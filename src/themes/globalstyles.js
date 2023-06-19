import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  h5, h3
  {
    font-family: 'Nunito ExtraBold', sans-serif;
    color: ${({ theme }) => theme.colors.text};
  }

  .jumbotron-list{
    background: ${({ theme }) => theme.colors.body};
    background-image: url(${({ theme }) => theme.colors.background});
    color: ${({ theme }) => theme.colors.text};
    background-size: cover;
    text-align: center;
    text-align:left;
  
  }
  .container-list
    {
    background: #f3f3f3;
    }
`;