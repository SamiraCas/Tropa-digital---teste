'use client';

import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

// Fonte global Roboto
const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login bem-sucedido!');
        console.log(data.token);
        // Redireciona para dashboard (ou qualquer página)
        router.push('/dashboard');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro inesperado ao tentar fazer login.');
    }
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <GlobalStyle />

      <LoginPageContainer>
        <LoginCard>
          {/* Coloque o handleLogin no onSubmit do form */}
          <LeftContent onSubmit={handleLogin}>
            <LogoWrapper>
              <Image
                src="/imagens/Clip path group.png"
                alt="Logo Tropa Digital"
                width={161}
                height={30}
                priority
              />
            </LogoWrapper>
            <TitleGroup>
              <Title>Bem-vindo de volta</Title>
              <Subtitle>Entre com sua conta para acessar o painel.</Subtitle>
            </TitleGroup>

            <InputGroup>
              <Label htmlFor="email">E-mail</Label>
              <InputField
                id="email"
                type="email"
                placeholder="seunome@seuservidor.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="password">Senha</Label>
              <InputWrapper>
                <InputField
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Digite aqui"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
                <EyeIconButton
                  type="button"
                  onClick={() => setShowPassword(prev => !prev)}
                  aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#b54e1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#b54e1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M2 12c2-4 6-7 10-7s8 3 10 7c-2 4-6 7-10 7s-8-3-10-7z" />
                      <path d="M15 12a3 3 0 0 1-6 0" />
                    </svg>
                  )}
                </EyeIconButton>
              </InputWrapper>
            </InputGroup>

            <PrimaryButton type="submit">Enviar</PrimaryButton>
          </LeftContent>

          <RightContent>
            <ImageWrapper>
              <Image
                src="/imagens/monitoring 1.png"
                alt="Ilustração"
                fill
                style={{ objectFit: 'contain' }}
              />
            </ImageWrapper>
          </RightContent>
        </LoginCard>
      </LoginPageContainer>
    </>
  );
}


// Styled Components

const LoginPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f7fa;
  min-height: 100vh;
  padding: 20px;
`;

const LoginCard = styled.div`
  display: flex;
  flex-direction: row;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftContent = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px 40px;
  gap: 24px;

  @media (max-width: 768px) {
    padding: 32px 20px;
    gap: 20px;
  }
`;


const RightContent = styled.div`
  flex: 1;
  background: #cc5a2e;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 357px;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px; /* controla o espaço entre título e subtítulo */
`;

const Title = styled.h2`
  font-size: 34px;
  font-weight: bold;
  color: #b54e1c;
  margin: 0;
`;

const Subtitle = styled.p`
  margin-bottom: 30px;
  color: #546e91;
  font-size: 16px;
`;

const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  text-align: left;
  width: 100%;
  font-size: 14px;
  color: #b54e1c;
  font-weight: 600;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: none;
  border-radius: 25px;
  background: #f2f2f2;
  font-size: 14px;
  margin-top: 4px;
  color: #b54e1c; /* Cor do texto digitado */

  &::placeholder {
    color: #657593; /* Cor do placeholder */
    opacity: 1; /* Garante visibilidade total */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(181, 78, 28, 0.2); /* Opcional: efeito ao focar */
  }
`;
const EyeIconButton = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #b54e1c;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PrimaryButton = styled.button`
  padding: 12px;
  border-radius: 25px;
  border: none;
  background-color: #cc5a2e;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-top: 16px;

  &:hover {
    background-color: #b14e28;
  }
`;
