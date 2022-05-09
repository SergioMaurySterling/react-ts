import { useState } from 'react';

interface User {
  uid: string;
  name: string;
}

export const Usuario = () => {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: 'ABC123',
      name: 'Sergio Maury',
    });
  }

  return (
    <div className="mt-5">
      <h3>Usuario</h3>
      <button
        className='btn btn-outline-primary mb-5'
        onClick={login}
      >
        Login
      </button>
      {
        (!user)
          ? <pre>No hay usuario</pre>
          : <pre>{JSON.stringify(user)}</pre>
      }
    </div>
  )
}