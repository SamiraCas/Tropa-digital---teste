import React, { useState } from 'react';
import styled from 'styled-components';
import { FiGrid, FiUsers, FiEdit, FiLogOut, FiSettings } from 'react-icons/fi';

interface ActiveProps {
  active?: boolean;
}

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Wrapper>
      <Sidebar open={sidebarOpen}>
        <Logo onClick={() => setSidebarOpen(!sidebarOpen)} title="Abrir/Fechar menu" open={sidebarOpen}>
          <img src="/imagens/Clip path group.png" alt="Logo" />
        </Logo>

        <Menu>
          <MenuItem active={true} open={sidebarOpen}>
            <FiGrid />
            <span>Dashboard</span>
          </MenuItem>
          <MenuItem open={sidebarOpen}>
            <FiEdit />
            <span>Eventos</span>
          </MenuItem>
          <MenuItem open={sidebarOpen}>
            <FiUsers />
            <span>Equipes</span>
          </MenuItem>
          <MenuItem open={sidebarOpen}>
            <FiSettings />
            <span>Inscrições</span>
          </MenuItem>
        </Menu>

        <UserInfo open={sidebarOpen}>
          <img src="/imagens/Frame 43.png" alt="Kaique Steck" />
          {sidebarOpen && (
            <div>
              <strong>Kaique Steck</strong>
              <span>Administrador</span>
              <UserLinks>
                <a href="#">Alterar dados</a>
                <a href="#" style={{ color: '#ff4d4f' }}>
                  <FiLogOut /> Sair
                </a>
              </UserLinks>
            </div>
          )}
        </UserInfo>
      </Sidebar>

      <Main>
        <Header>
          <h1>Todos eventos</h1>
          <SearchWrapper>
            <input placeholder="Buscar eventos" />
            <button>+ Inserir novo</button>
          </SearchWrapper>
        </Header>

        <Table>
          <thead>
            <tr>
              <th>Nome do evento</th>
              <th>Total de equipes</th>
              <th>Status</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Clube do Laço Coração Pantaneiro</td>
              <td>10</td>
              <td><StatusDot /> Ativo</td>
              <td>09 a 11 de Junho</td>
            </tr>
            <tr>
              <td>Clube do Laço Coração Pantaneiro</td>
              <td>10</td>
              <td><StatusDot /> Ativo</td>
              <td>09 a 11 de Junho</td>
            </tr>
          </tbody>
        </Table>

        <Pagination>
          <button>Anterior</button>
          <PageNumber active>1</PageNumber>
          <PageNumber>2</PageNumber>
          <PageNumber>3</PageNumber>
          <button>Próxima</button>
        </Pagination>
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  font-family: sans-serif;
`;

const Sidebar = styled.aside<{ open: boolean }>`
  width: ${({ open }) => (open ? '260px' : '58px')};
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 1rem;
  border-right: 1px solid #ddd;
  transition: width 0.3s ease;
  overflow: hidden;
`;

const Logo = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 2rem;
  width: 100%;
  min-width: 180px;

  img {
    width: 180px; /* tamanho fixo para a logo ficar inteira */
    height: auto;
    user-select: none;
    pointer-events: none;
  }
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li<ActiveProps & { open: boolean }>`
  padding: 0.8rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  color: ${({ active }) => (active ? '#fff' : '#333')};
  background: ${({ active }) => (active ? '#b45309' : 'transparent')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  justify-content: ${({ open }) => (open ? 'flex-start' : 'center')};
  transition: background 0.3s ease;

  svg {
    width: 20px;     /* tamanho fixo dos ícones */
    height: 20px;
    flex-shrink: 0;
  }

  span {
    display: ${({ open }) => (open ? 'inline' : 'none')};
    white-space: nowrap;
  }

  &:hover {
    background: #f4f4f4;
  }
`;

const UserInfo = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ open }) => (open ? '1rem' : '0')};
  padding-top: 2rem;
  border-top: 1px solid #ddd;
  overflow: hidden;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  div {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    font-size: 0.9rem;
  }
`;

const UserLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;

  a {
    text-decoration: none;
    color: #555;
    margin-top: 0.2rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`;

const Main = styled.main`
  flex: 1;
  padding: 2rem;
  background: #fafafa;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    color: #b45309;
    font-size: 1.5rem;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  input {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    border: 1px solid #ccc;
  }

  button {
    background: #b45309;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 20px;
    cursor: pointer;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #eee;
  }
`;

const StatusDot = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: limegreen;
  margin-right: 0.5rem;
`;

const Pagination = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.5rem;
`;

const PageNumber = styled.button<ActiveProps>`
  background: ${({ active }) => (active ? '#b45309' : '#eee')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  border: none;
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
  cursor: pointer;
`;
