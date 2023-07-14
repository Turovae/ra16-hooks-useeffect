function Users({
  users,
  onSelectUser,
  selectedId,
}: {
  users: { id: number; name: string }[];
  onSelectUser: (id: number) => void;
  selectedId: number | undefined;
}) {
  console.log(users);
  return (
    <ul className="users">
      {users.map((user) => (
        <li
          key={user.id}
          className={user.id === selectedId ? "user selected" : "user"}
          onClick={() => {
            console.log("click");
            onSelectUser(user.id);
          }}
        >
          {user.name}
        </li>
      ))}
    </ul>
  );
}

export default Users;
