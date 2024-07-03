import { FriendListItem } from '../FriendListItem/FriendListItem';
import friends from '/src/friends.json';

export function FriendList() {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <FriendListItem
            key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
}
