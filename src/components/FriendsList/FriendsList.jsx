import { FriendListItem } from '../FriendListItem/FriendListItem';
import friends from '/src/friends.json'

export function FriendList() {
  return (
    <ul>
      {friends.map(({id,name,avatar,isOnline}) => {
        <li key={id}>
          <FriendListItem
            name={name}
            avatar={avatar}
            isOnline={isOnline}
          />
        </li>;
      })}
    </ul>
  );

}
