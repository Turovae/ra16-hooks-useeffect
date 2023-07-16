const User = function User({
  user,
  selected,
  onSelectUser,
}: {
  user: { id: number; name: string };
  selected: true | false;
  onSelectUser: (id: number) => void;
}) {
  let className = "user";
  if (selected) {
    className = className + " selected";
  }
  return (
    <li
      className={className}
      onClick={() => {
        onSelectUser(user.id);
      }}
    >
      {user.name}
    </li>
  );
};

function Users({
  users,
  onSelectUser,
  selectedId,
}: {
  users: { id: number; name: string }[];
  onSelectUser: (id: number) => void;
  selectedId: number | undefined;
}) {
  return (
    <ul className="users">
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          selected={user.id === selectedId}
          onSelectUser={onSelectUser}
        />
      ))}
    </ul>
  );
}

export default Users;
