import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

interface ActiveProps {
  active?: boolean;
}

interface Event {
  nome: string;
  totalEquipes: number;
  status: string;
  data: string;
}

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const router = useRouter();
  

  // Lista original de eventos
  const [events] = useState<Event[]>([
    {
      nome: 'Clube do Laço Coração Pantaneiro',
      totalEquipes: 10,
      status: 'Ativo',
      data: '09 a 11 de Junho',
    },
    {
      nome: 'Festa Junina Campo Alegre',
      totalEquipes: 5,
      status: 'Ativo',
      data: '20 a 22 de Junho',
    },
    {
      nome: 'Festival da Cultura',
      totalEquipes: 8,
      status: 'Inativo',
      data: '15 a 17 de Julho',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const menuItems = [
    { label: 'Dashboard', icon: '/icons/dashboard.svg' },
    { label: 'Eventos', icon: '/icons/edit.svg', active: true },
    { label: 'Equipes', icon: '/icons/users.svg' },
    { label: 'Inscrições', icon: '/icons/settings.svg' },
  ];

  // Filtra os eventos pelo nome conforme o termo de busca
  const filteredEvents = events.filter((event) =>
    event.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Wrapper>
      <Sidebar open={sidebarOpen}>
        <TopSection>
          <Logo
            onClick={() => setSidebarOpen(!sidebarOpen)}
            title={sidebarOpen ? 'Fechar menu' : 'Abrir menu'}
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
                    style={{ width: '16px', height: '16px', marginRight: '0.4rem', verticalAlign: 'middle' }}
                  />
                  Sair
                </a>
              </UserLinks>
            </UserContent>
          )}
        </UserInfo>
      </Sidebar>

      <Main open={sidebarOpen}>
  {/* Título fora do retângulo */}
  <div style={{ marginBottom: '0.5rem' }}>
    <span>
      Bem vindo de volta, <strong>Kaique Steck</strong>
    </span>
  </div>

  <h1
  style={{
    color: '#D36F4A',
    marginBottom: '1rem',
    marginTop: '13px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '23px',
    letterSpacing: '0',
  }}
>
  Todos eventos
</h1>
  <div
    style={{
      background: '#fff',
      padding: '1.5rem',
      borderRadius: '10px',
      boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)',
      border: '1px solid #09428F2B',
    }}
  >
    <Header>
      <SearchWrapper>
        <SearchInputWrapper>
          <img src="/icons/search.svg" alt="Buscar" />
          <input
            placeholder="Buscar eventos"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchInputWrapper>
        <button>
          <img src="/icons/plus.svg" alt="Inserir" className="icon" />
          Inserir novo
        </button>
      </SearchWrapper>
    </Header>

  <MobileTableHeader>
    <span>Nome do evento</span>
    <span>Total de equipes</span>
    <span>Status</span>
    <span>Data</span>
  </MobileTableHeader>

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
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event, index) => (
          <tr key={index} style={{ borderBottom: '1px solid #CC6237' }}>
            <td>{event.nome}</td>
            <td>{event.totalEquipes}</td>
            <td>
              <StatusDot
                style={{
                  backgroundColor:
                    event.status.toLowerCase() === 'ativo'
                      ? '#4DEF00'
                      : '#FF6347',
                }}
              />{' '}
              {event.status}
            </td>
            <td>{event.data}</td>
            <DotsCell>
              <DotsContainer>
                <Dot />
                <Dot />
                <Dot />
              </DotsContainer>
            </DotsCell>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={5} style={{ textAlign: 'center', padding: '2rem' }}>
            Nenhum evento encontrado.
          </td>
        </tr>
      )}
    </tbody>
  </Table>
  <Pagination>
  <NavButton variant="previous">Anterior</NavButton>
  <PageNumber active={true}>1</PageNumber>
  <PageNumber>2</PageNumber>
  <PageNumber>3</PageNumber>
  <NavButton>Próxima</NavButton>
</Pagination>
  </div>
</Main>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  font-family: sans-serif;

    @media (max-width: 768px) {
    position: relative;
  }
`;

const Sidebar = styled.aside<{ open: boolean }>`
  width: ${({ open }) => (open ? '260px' : '68px')};
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 25px;
  border-right: 1px solid #ddd;
  transition: width 0.3s ease;
  overflow: hidden;

  @media (max-width: 768px) {
    position: fixed;
    height: 100vh;
    z-index: 1000;
    top: 0;
    left: 0;
    width: ${({ open }) => (open ? '260px' : '68px')};
    box-shadow: ${({ open }) => (open ? '2px 0 5px rgba(0,0,0,0.1)' : 'none')};
  }
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

interface MainProps {
  open: boolean;
}
const Main = styled.main<MainProps>`
  flex: 1;
  padding: 2rem;
  background: #fafafa;
  transition: filter 0.3s ease;
  

  @media (max-width: 768px) {
    margin-left: ${({ open }) => (open ? '260px' : '38px')};
  }
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
  justify-content: flex-end; /* alinhamento à direita */
  width: 100%; /* para ocupar toda a largura do container */

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
    gap: 0.5rem;

    img.icon {
      width: 16px;
      height: 16px;
    }
  }
    @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;

    button {
      width: 100%;
      justify-content: center;
      margin-top: 0.5rem;
    }
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

    th {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #eee;
    font-family: 'Poppins', sans-serif; 
    font-weight: 600;
    color: #333;
    font-weight: 500;
  font-size: 13px;
  color: #CC623780;
  }

  td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #eee;
    font-weight: 500;
    font-size: 13px;
    color: #657593;
  }

  @media (max-width: 768px) {
    thead {
      display: none;
    }

    tbody, tr, td {
      display: block;
      width: 100%;
    }

    tr {
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 0.5rem 1rem;
      background: #fff;
    }

    td {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: none;
      border-bottom: 1px solid #eee;
      padding: 12px 0;
      position: relative;
    }

    td:last-child {
      border-bottom: none;
    }

    td::before {
      content: attr(data-label);
      font-weight: 600;
      color: #CC623780;
      text-transform: uppercase;
      font-size: 12px;
      flex-basis: 40%;
      flex-shrink: 0;
    }
  }
`;

const StatusDot = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #4DEF00;
  margin-right: 0.5rem;

  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
  }
`;

const Pagination = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
`;

interface NavButtonProps {
  variant?: 'default' | 'previous';
}

const NavButton = styled.button<NavButtonProps>`
  background: ${({ variant }) => (variant === 'previous' ? '#F5F5F5' : '#CC6237')};
  color: ${({ variant }) => (variant === 'previous' ? '#000000' : '#fff')};
  border: none;
  padding: 0.5rem 0.75rem;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const PageNumber = styled.button<ActiveProps>`
  background: ${({ active }) => (active ? '#CC6237' : '#eee')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  transition: background-color 0.3s;

  &:hover {
    background: ${({ active }) => (active ? '#b25529' : '#ddd')};
  }
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f6f6f6;
  border-radius: 30px;
  padding: 0.4rem 1rem;
  width: 300px; /* largura mínima garantida */

  img {
    width: 18px;
    height: 18px;
  }

  input {
    border: none;
    outline: none;
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    background: transparent;
    flex: 1;
    min-width: 0;
    color: #333;
  }
`;

const Dot = styled.span`
  width: 3.33px;
  height: 3.33px;
  background-color: #cc6237;
  border-radius: 50%;
  display: block;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 8px;
    height: 8px;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
  height: 100%;
`;
const DotsCell = styled.td`
  width: 24px;
  padding: 0;
  text-align: center;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-top: 8px;
  }
`;
const MobileTableHeader = styled.div`
  display: none;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #CC6237;
  margin-bottom: 0.5rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

