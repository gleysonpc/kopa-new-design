import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .--pulse {
    &:hover {
        animation: pulse 1s infinite;
    }

    @-webkit-keyframes pulse {
        0% {
            -webkit-box-shadow: 0 0 0 0 rgba(255,172,71, 0.3);
        }
        70% {
            -webkit-box-shadow: 0 0 0 10px rgba(255,67,141, 0.3);
        }
        100% {
            -webkit-box-shadow: 0 0 0 0 rgba(255,67,141, 0.3);
        }
        }
        @keyframes pulse {
        0% {
            -moz-box-shadow: 0 0 0 0 rgba(255,172,71, 0.3);
            box-shadow: 0 0 0 0 rgba(255,172,71, 0.3);
        }
        70% {
            -moz-box-shadow: 0 0 0 10px rgba(255,67,141, 0.3);
            box-shadow: 0 0 0 10px rgba(255,67,141, 0.3);
        }
        100% {
            -moz-box-shadow: 0 0 0 0 rgba(255,67,141, 0.3);
            box-shadow: 0 0 0 0 rgba(255,67,141, 0.3);
        }
    }
  }


`;
