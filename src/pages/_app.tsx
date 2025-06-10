import "@/styles/globals.css"; // Seus estilos globais CSS
import type { AppProps } from "next/app";
import { AuthProvider } from '../contexts/AuthContext'; // Importe o AuthProvider

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider> {/* <--- Envolve toda a aplicação com AuthProvider */}
      <Component {...pageProps} /> {/* <--- A página atual é renderizada aqui */}
    </AuthProvider>
  );
}