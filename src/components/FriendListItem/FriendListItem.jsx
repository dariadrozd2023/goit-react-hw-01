export function FriendListItem({avatar, name='user', isOnline}) {
  return (
        <li>
          <img src={avatar} alt="Avatar" width="48" />
          <p>{name}</p>
          <p>{isOnline}</p>
        </li>
  );
}

