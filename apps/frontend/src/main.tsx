import { ColorModeScript } from '@chakra-ui/react';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app/app';
import {CustomChakraTheme} from './utils/chakra/ChakraTheme'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
     <ColorModeScript initialColorMode={CustomChakraTheme['config'].initialColorMode} />
    <Router>
      <App />
    </Router>
  </StrictMode>
);
