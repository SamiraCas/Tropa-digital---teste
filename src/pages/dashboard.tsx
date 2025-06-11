import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

interface ActiveProps {
  active?: boolean;
}

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();

  const menuItems = [
    { label: 'Dashboard', icon: '/icons/dashboard.svg' },
    { label: 'Eventos', icon: '/icons/edit.svg', active: true },
    { label: 'Equipes', icon: '/icons/users.svg' },
    { label: 'Inscrições', icon: '/icons/settings.svg' },
  ];

  return (
    <Wrapper>
      <Sidebar open={sidebarOpen}>
        <TopSection>
          <Logo
            onClick={() => setSidebarOpen(!sidebarOpen)}
            title="Abrir/Fechar menu"
            open={sidebarOpen}
          >
            <img src="/imagens/Clip path group.png" alt="Logo" />
          </Logo>

          <Menu>
            {menuItems.map((item, index) => (
              <MenuItem key={index} open={sidebarOpen} active={item.active}>
                <IconImg src={item.icon} alt={item.label} />
                <span>{item.label}</span>
              </MenuItem>
            ))}
          </Menu>
        </TopSection>

        <UserInfo open={sidebarOpen}>
  <img src="/imagens/Frame 43.png" alt="Kaique Steck" />
  {sidebarOpen && (
    <UserContent>
      <UserDetails>
        <strong>Kaique Steck</strong>
        <span>Administrador</span>
      </UserDetails>

      <UserLinks>
        <a href="#" style={{ color: '#252525' }}>
          <IconImg
            src="/icons/dados.svg"
            alt="Alterar dados"
            style={{ width: '18px', height: '18px', marginRight: '0.4rem', verticalAlign: 'middle' }}
          />
          Alterar dados
        </a>
        <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    router.push('/');
  }}
  style={{ color: '#252525' }}
>
  <IconImg
    src="/icons/logout.svg"
    alt="Sair"
    style={{
      width: '16px',
      height: '16px',
      marginRight: '0.4rem',
      verticalAlign: 'middle',
    }}
  />
  Sair
</a>
      </UserLinks>
    </UserContent>
  )}
</UserInfo>

      </Sidebar>

      <Main>
        <Header>
          <h1>Todos eventos</h1>
          <SearchWrapper>
        <SearchInputWrapper>
  <img src="/icons/search.svg" alt="Buscar" />
  <input placeholder="Buscar eventos" />
</SearchInputWrapper>
            <button>
  <img src="/icons/plus.svg" alt="Inserir" className="icon" />
  Inserir novo
</button>
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
              <td>
                <StatusDot /> Ativo
              </td>
              <td>09 a 11 de Junho</td>
            </tr>
            <tr>
              <td>Clube do Laço Coração Pantaneiro</td>
              <td>10</td>
              <td>
                <StatusDot /> Ativo
              </td>
              <td>09 a 11 de Junho</td>
            </tr>
          </tbody>
        </Table>

        <Pagination>
          <NavButton>Anterior</NavButton>
          <PageNumber active={true}>1</PageNumber>
          <PageNumber>2</PageNumber>
          <PageNumber>3</PageNumber>
          <NavButton>Próxima</NavButton>
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
  width: ${({ open }) => (open ? '260px' : '68px')};
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 25px; /* laterais com 25px */
  border-right: 1px solid #ddd;
  transition: width 0.3s ease;
  overflow: hidden;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 30px;
  width: 100%;
  min-width: 180px;

  img {
    width: 180px;
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
  background: ${({ active }) => (active ? '#CC6237' : 'transparent')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  justify-content: ${({ open }) => (open ? 'flex-start' : 'center')};
  transition: background 0.3s ease;

  span {
    display: ${({ open }) => (open ? 'inline' : 'none')};
    white-space: nowrap;
  }

  &:hover {
    background: #f4f4f4;
  }
`;

const IconImg = styled.img`
  width: 22px;
  height: 22px;
  flex-shrink: 0;
`;

const UserInfo = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-top: 2rem;
  border-top: 1px solid #ddd;
  gap: 1rem;
  overflow: visible;

  img {
    width: ${({ open }) => (open ? '48px' : '32px')};
    height: ${({ open }) => (open ? '48px' : '32px')};
    flex-shrink: 0;
    transition: width 0.3s ease, height 0.3s ease;
  }
`;
const UserContent = styled.div`
  display: flex;
  flex-direction: column;
`;


const UserDetails = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-weight: bold;
    font-size: 1rem;
    white-space: nowrap; 
  }

  span {
    font-size: 0.9rem;
    color: #666;
    margin-top: 0.2rem;
  }
`;

const UserLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 56px; 

  a {
    font-size: 15px;
    text-decoration: none;
    color: #555;
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-family: 'Roboto', sans-serif;   
    font-weight: 500;                    
    padding-left: 0; 
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
    color: #cc6237;
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
    display: flex;
    align-items: center;
    gap: 0.5rem; /* Espaço entre o ícone e o texto */

  img.icon {
    width: 16px;
    height: 16px;
  }
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
  background-color: #4DEF00;
  margin-right: 0.5rem;
`;

const Pagination = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
`;

const NavButton = styled.button`
  background: #CC6237;
  color: #fff;
  border: none;
  padding: 0.5rem 0.75rem;
  border-radius:  20px;
  cursor: pointer;
`;

const PageNumber = styled.button<ActiveProps>`
  background: ${({ active }) => (active ? '#CC6237' : '#eee')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  border: none;
  padding: 0.5rem 0.75rem;
  border-radius: 100%;
  cursor: pointer;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #F6F6F6;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 0.1rem 0.2rem;

  img {
    width: 18px;
    height: 18px;
    margin-left: 10px;
  }

  input {
    border: none;
    outline: none;
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    background: transparent;
  }
`;
