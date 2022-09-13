import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    html {
      height: -webkit-fill-available;
    }
    body {
      height: 100vh;
      height: -webkit-fill-available;
      background-color: ${(props) => props.bodyColor};
    }

    #root {
      height: 100vh;
      height: -webkit-fill-available;
    }

    h1, h2, h3, h4, h5, p, span, button {
      font-family: 'Inter', sans-serif;
      padding: 0;
      margin: 0;
    }
    h1 {
      font-weight: 600;
      font-size: 3rem;
      color: white;
    }
    h2 {
      font-size: 2rem;
      font-weight: 400;
      color: white;
      line-height: 1.4;
    }
    h3 {
      font-size: 1.6rem;
      font-weight: 600;
      color: white;
      line-height: 1.4;
    }
    h4 {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.4;
    }
    h5 {
      font-size: 1.1rem;
      font-weight: 400;
      color: white;
      line-height: 1.4;
    }
    span {
      font-weight: 600;
      font-size: 1.2rem;
    }
    p {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.4;
      color: white;
    }
    button {
      border: 0;
      background-color: unset;
      font-size: 1.1rem;
      &:active {
        outline: none;
      }
    }
`

export default function Global(props) {
  return <GlobalStyles bodyColor={props.bodyColor} />
}
