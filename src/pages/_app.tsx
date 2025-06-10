import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from '../contexts/AuthContext';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <GlobalStyle /> {/* 👈 Aqui você está aplicando os estilos globais */}
      <Component {...pageProps} />
    </AuthProvider>
  );
}
