import { useDrop } from 'react-dnd';

const Role = ({ role, onAddUser }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'USER',
    drop: (item) => {
      onAddUser(item.id, role.id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} style={{ backgroundColor: isOver ? 'yellow' : 'transparent' }}>
      {role.name}
    </div>
  );
};

export default Role;
