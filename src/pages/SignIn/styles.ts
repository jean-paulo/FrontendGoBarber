import styled from 'styled-components';
import { shade } from 'polished';

import SignInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;

  /* Faz com que o conteudo do container ocupe toda a pagina */
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Todo conteudo da div vai ficar no centro */
  place-content: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  /*estiliza todos a que vem diretamente dentro do conten, não um nivel pra dentro, para não prejudicar o outro a */
  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${SignInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
