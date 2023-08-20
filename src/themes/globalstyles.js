import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  h5, h3
  {
    font-family: 'Nunito ExtraBold', sans-serif;
    color: ${({ theme }) => theme.textcolor};
  }

  .jumbotron-list{
    background: ${({ theme }) => theme.headercolor};
    background-image: url(${({ theme }) => theme.headerimage});
    color: ${({ theme }) => theme.textcolor};
    background-size: cover;
    background-position: bottom; 
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
    background-image: url(${({ theme }) => theme.backgroundimage});
    background-size: cover;
    background-position: bottom; 
  }

  .footer
  {
    background: ${({ theme }) => theme.headercolor};
    background-image: url(${({ theme }) => theme.headerimage});
    background-size: cover;
    background-position: bottom; 
    padding: 20px;
    color: ${({ theme }) => theme.bodycolor};
  }
  .main
  {
    background-image: url(${({ theme }) => theme.backgroundimage});
    background-size: cover;
    background-position: bottom; 
  }
`;