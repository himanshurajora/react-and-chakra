// eslint-disable-next-line @typescript-eslint/no-unused-vars

import '@fontsource/raleway/100.css';
import '@fontsource/raleway/100-italic.css';
import '@fontsource/raleway/200.css';
import '@fontsource/raleway/200-italic.css';
import '@fontsource/raleway/300.css';
import '@fontsource/raleway/300-italic.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/400-italic.css';
import '@fontsource/raleway/500.css';
import '@fontsource/raleway/500-italic.css';
import '@fontsource/raleway/600.css';
import '@fontsource/raleway/600-italic.css';
import '@fontsource/raleway/700.css';
import '@fontsource/raleway/700-italic.css';
import '@fontsource/raleway/800.css';
import '@fontsource/raleway/800-italic.css';
import '@fontsource/raleway/900.css';
import '@fontsource/raleway/900-italic.css';

import styles from './app.module.css';
import { Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import AppRoutes from '../routes/AppRoutes';
import { CustomChakraTheme } from '../utils/chakra/ChakraTheme';
export function App() {
  return (
    <ChakraProvider theme={CustomChakraTheme}>
        <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
