import React from 'react';
import { useHistory } from 'react-router-dom';


function Login({ toggleAuth }) {
  const history = useHistory();

  function signIn() {
    toggleAuth(true);
    history.push('/');
  }

  return (
    <section>
      <h1>Inicio de pagina</h1>
      <p>Entra en la pagina</p>
      <button type="button" onClick={signIn}>
        Ingresar
      </button>
    </section>
  );
}

export default Login;