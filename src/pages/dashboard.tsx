import styled from 'styled-components';
import { useRouter } from 'next/router'; // <-- ESTE É O CORRETO PARA PAGES ROUTER
import { useAuth } from '../contexts/AuthContext'; // <-- ESTE É O CAMINHO CORRETO PARA CONTEXTS

export default function Dashboard() {
  return (
    <Wrapper>
      <Sidebar>
        <h3>Menu</h3>
        <ul>
          <li>Início</li>
          <li>Configurações</li>
        </ul>
      </Sidebar>
      <Main>
        <h1>Bem-vindo ao sistema!</h1>
        <p>Essa é sua tela interna.</p>
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.aside`
  width: 240px;
  background: #eee;
  padding: 1rem;
`;

const Main = styled.main`
  flex: 1;
  padding: 2rem;
`;
