import { FriendListItem } from '../FriendListItem/FriendListItem';
import friends from '/src/friends.json'

export function FriendList() {
  return (
    <ul>
      {friends.map((friend) => {
        return(
        <li key={friend.id}>
          <FriendListItem
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}/>
        </li>)
      })}
    </ul>
  );

}
