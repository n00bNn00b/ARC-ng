import { useDrag } from 'react-dnd';

const User = ({ user }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'USER',
    item: { id: user.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {user.name}
    </div>
  );
};

export default User;
