import Head from 'next/head';
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
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Roboto&display=swap" 
          rel="stylesheet" 
        />
      </Head>
      <GlobalStyle /> {/* estilos globais */}
      <Component {...pageProps} />
    </AuthProvider>
  );
}
