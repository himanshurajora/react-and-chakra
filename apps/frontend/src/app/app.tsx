// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
