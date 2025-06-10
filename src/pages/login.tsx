'use client'; // Indica que este componente é um Client Component

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image'; // Para o logo
import { useAuth } from '../contexts/AuthContext'; // Correção do caminho

// --- Componentes Reutilizáveis (Para replicar o Button e Input do Figma) ---
// É uma boa prática ter componentes como Button e Input separados em `src/components`,
// mas para este exemplo direto, vou incluí-los aqui.
// Para um projeto real, mova-os para `src/components/Button/index.tsx` e `src/components/Input/index.tsx`
// e seus respectivos `styles.ts`.

const InputField = styled.input`
  width: 100%;
  padding: 12px 16px; /* Ajustado conforme Figma */
  border: 1px solid #D5D5D5; /* Cor da borda do Figma */
  border-radius: 4px; /* Raio da borda do Figma */
  font-size: 16px;
  color: #333333; /* Cor do texto */
  background-color: #FFFFFF; /* Fundo branco */
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &::placeholder {
    color: #A0A0A0; /* Cor do placeholder do Figma */
  }

  &:focus {
    border-color: #007bff; /* Cor de foco, similar à primária */
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2); /* Sombra suave no foco */
  }
`;

const PrimaryButton = styled.button`
  width: 100%;
  padding: 12px 20px; /* Ajustado conforme Figma */
  background-color: #3A55F5; /* Cor primária do botão no Figma */
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600; /* Bold conforme Figma */
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2F4BE6; /* Um tom um pouco mais escuro para hover */
  }

  &:disabled {
    background-color: #CCCCCC;
    cursor: not-allowed;
  }
`;
// --- Fim dos Componentes Reutilizáveis ---


// --- Estilos da Página de Login ---

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #E5E5E5; /* Cor de fundo da tela no Figma */
  padding: 20px; /* Adiciona um padding para telas muito pequenas */
`;

const LoginForm = styled.form`
  background-color: #FFFFFF; /* Fundo branco do card */
  padding: 40px; /* Ajustado conforme Figma */
  border-radius: 8px; /* Raio da borda do card */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Sombra do card no Figma */
  width: 100%;
  max-width: 400px; /* Largura máxima do card */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza itens no formulário */
  text-align: center;

  @media (max-width: 480px) {
    padding: 30px 20px; /* Menos padding em telas menores */
  }
`;

const LogoWrapper = styled.div`
  margin-bottom: 30px; /* Espaçamento abaixo do logo */
  width: 150px; /* Defina a largura do logo para controle */
  height: auto;
  
  img {
    max-width: 100%;
    height: auto;
  }
`;

const Title = styled.h2`
  font-family: 'Inter', sans-serif; /* Usar a fonte Inter do Figma */
  font-weight: 700; /* Bold */
  font-size: 28px; /* Tamanho da fonte do título */
  color: #333333; /* Cor do título */
  margin-bottom: 30px; /* Espaçamento abaixo do título */
`;

const InputGroup = styled.div`
  width: 100%;
  margin-bottom: 20px; /* Espaçamento entre os campos de input */
`;

const LinkContainer = styled.div`
  width: 100%;
  text-align: right; /* Alinha o link à direita */
  margin-top: -10px; /* Ajusta o espaçamento para ficar mais próximo do input */
  margin-bottom: 20px; /* Espaçamento antes do botão */

  a {
    font-size: 14px;
    color: #3A55F5; /* Cor do link primária */
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover {
      text-decoration: underline;
      color: #2F4BE6;
    }
  }
`;

const RegisterPrompt = styled.p`
  margin-top: 25px; /* Espaçamento acima do texto de "Não tem conta?" */
  font-size: 14px;
  color: #666666;

  a {
    color: #3A55F5; /* Cor do link */
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      text-decoration: underline;
      color: #2F4BE6;
    }
  }
`;

// --- Componente da Página de Login ---

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Renomeado para 'password' para consistência
  const { login, isAuthenticated } = useAuth(); // Usando o hook de autenticação

  // Redireciona se o usuário já estiver autenticado
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/sistema/dashboard'); // Redireciona para a página interna do sistema
    }
  }, [isAuthenticated, router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulação de login:
    // A validação de email e senha pode ser mais robusta aqui se desejar (ex: email.includes('@') e senha.length > 5)
    if (email && password) {
      login(); // Chama a função de login do contexto
      router.push('/sistema/dashboard'); // Redireciona para a tela interna do sistema
    } else {
      alert('Por favor, preencha todos os campos.'); // Mensagem de erro mais amigável
    }
  };

  return (
    <LoginPageContainer>
      <LoginForm onSubmit={handleLogin}>
        <LogoWrapper>
          {/* Certifique-se de que o logo esteja em `public/images/logo_tropa_digital.svg` (ou .png) */}
          <Image
            src="/images/logo_tropa_digital.svg" // Ajuste o caminho conforme onde você colocou o logo
            alt="Logo Tropa Digital"
            width={150} // Largura original do logo no Figma
            height={40} // Altura original do logo no Figma
            priority // Otimiza o carregamento se for o LCP (Largest Contentful Paint)
          />
        </LogoWrapper>

        <Title>Faça seu login</Title>

        <InputGroup>
          <InputField
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </InputGroup>

        <InputGroup>
          <InputField
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </InputGroup>

        <LinkContainer>
          <a href="#">Esqueci minha senha</a> {/* Adicione o link real se existir */}
        </LinkContainer>

        <PrimaryButton type="submit">Entrar</PrimaryButton>

        <RegisterPrompt>
          Não tem uma conta? <a href="#">Crie sua conta</a> {/* Adicione o link real se existir */}
        </RegisterPrompt>
      </LoginForm>
    </LoginPageContainer>
  );
}