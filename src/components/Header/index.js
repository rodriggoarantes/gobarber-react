import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img
            src="https://api.adorable.io/avatars/50/avatar.png"
            alt="GoBarber"
          />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Rodrigo Arantes</strong>
              <Link to="/profile">Meu peffil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/avatar.png"
              alt="Rodrigo Arantes"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
