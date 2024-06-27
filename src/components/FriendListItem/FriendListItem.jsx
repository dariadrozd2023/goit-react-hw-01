import friends from '../friends.json';

export function FriendListItem({}) {
  return (
    <ul>
      {friends.map((friend) => {
        <li>
          <img src={friend.avatar} alt="Avatar" width="48" />
          <p>{friend.name}</p>
          <p>{friend.isOnline}</p>
        </li>;
      })}
    </ul>
  );
}
// <div>
// <img src={friends.avatar} alt="Avatar" width="48" />
// <p>{friends.name}</p>
// <p>{friends.isOnline}</p>
// </div>
