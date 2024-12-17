interface UserCardProps {
  user: {
    name: {
      first: string;
      last: string;
    };
    email: string;
    picture: {
      medium: string;
    };
  };
}
 

function UserCard({ user }: UserCardProps) {
  return (
    <figure className='display-user'>
      <img src={user.picture.medium} alt={user.name.first} />
      <figcaption>
        <strong>{user.name.first} {user.name.last}</strong>
        {user.email}
      </figcaption>
    </figure>
  );
}

export default UserCard;