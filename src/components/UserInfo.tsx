interface DetailProps {
  city: string;
  company: string;
  position: string;
}

interface UserProps {
  id: number;
  name: string;
  avatar: string;
  details: DetailProps;
}

function UserInfo({ user }: { user: UserProps }) {
  return (
    <div className="user-info">
      <div className="user-avatar">
        <img src={user.avatar} alt={user.name} />
      </div>
      <div className="user-details user-name">{user.name}</div>
      <div className="user-details">City: {user.details.city}</div>
      <div className="user-details">Company: {user.details.company}</div>
      <div className="user-details">Position: {user.details.position}</div>
    </div>
  );
}

export default UserInfo;
