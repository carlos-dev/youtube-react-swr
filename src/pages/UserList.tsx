import React from 'react';

import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

interface User {
  id: number;
  name: string;
}

const UserList: React.FC = () => {
  const {data} = useFetch<User[]>('http://localhost:3333/users')

  if (!data) {
    return <p>Loading...</p>;
  }
 
  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>
            {user.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default UserList;