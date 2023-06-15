import { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import User from './User';
import Role from './Role';

const DragAndDrop = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'User 1', roles: [1, 2] },
    { id: 2, name: 'User 2', roles: [2] },
  ]);
  const [roles, setRoles] = useState([
    { id: 1, name: 'Role 1' },
    { id: 2, name: 'Role 2' },
    { id: 3, name: 'Role 3' },
    { id: 4, name: 'Role 4' },
    { id: 5, name: 'Role 5' },
    { id: 6, name: 'Role 6' },
  ]);
  

  // Load user and role data from local storage on initial render
//   useEffect(() => {
//     const storedUsers = localStorage.getItem('users');
//     const storedRoles = localStorage.getItem('roles');

//     if (storedUsers) {
//       setUsers(JSON.parse(storedUsers));
//     }

//     if (storedRoles) {
//       setRoles(JSON.parse(storedRoles));
//     }
//   }, []);

//   // Update local storage whenever user or role data changes
//   useEffect(() => {
//     localStorage.setItem('users', JSON.stringify(users));
//   }, [users]);

//   useEffect(() => {
//     localStorage.setItem('roles', JSON.stringify(roles));
//   }, [roles]);

//   const handleAddUser = (userId, roleId) => {
//     // Find the user and role objects based on their IDs
//     const selectedUser = users.find((user) => user.id === userId);
//     const selectedRole = roles.find((role) => role.id === roleId);

//     // Check if both user and role are found
//     if (selectedUser && selectedRole) {
//       // Check if the role is already assigned to the user
//       if (!selectedUser.roles.includes(selectedRole.role)) {
//         // Add the role to the user's roles array
//         const updatedUsers = users.map((user) => {
//           if (user.id === userId) {
//             return {
//               ...user,
//               roles: [...user.roles, selectedRole.id],
//             };
//           }
//           return user;
//         });

//         // Update the state with the updated users
//         setUsers(updatedUsers);
//       }
//     }
//   };
const handleAddUser = (userId, roleId) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        if (!user.roles.includes(roleId)) {
          return {
            ...user,
            roles: [...user.roles, roleId],
          };
        }
      }
      return user;
    });

    setUsers(updatedUsers);
  };
  console.log(users);
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  // Load users from local storage on initial render
  useEffect(() => {
    const storedUsers = localStorage.getItem('users');

    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <div className="grid grid-cols-3 gap-4">
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
        <h1 className="text-2xl font-bold mt-8 mb-4">Roles</h1>
        <div className="grid grid-cols-3 gap-4">
          {roles.map((role) => (
            <Role key={role.id} role={role} onAddUser={handleAddUser} />
          ))}
        </div>
        <h1 className="text-2xl font-bold mt-8 mb-4">User-Role Relationship</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> -
              {user.roles.length > 0 ? (
                <ul>
                  {user.roles.map((roleId) => {
                    const role = roles.find((role) => role.id === roleId);
                    return <li key={roleId}>{role.name}</li>;
                  })}
                </ul>
              ) : (
                'No roles assigned'
              )}
            </li>
          ))}
        </ul>
      </div>
    </DndProvider>
  );
};

export default DragAndDrop;
