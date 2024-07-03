import { FriendListItem } from '../FriendListItem/FriendListItem';
import friends from '/src/friends.json';
import s from '../FriendsList/FriendList.module.css';
export function FriendList() {
  return (
    <ul className={s.wrapperFriendList}>
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
