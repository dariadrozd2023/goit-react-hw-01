import s from './FriendListItem.module.css'
import clsx from 'clsx';
export function FriendListItem({ name = 'user', avatar, isOnline }) {
  return (
    <li className={clsx(s.card)}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={clsx(s.title)}>{name}</p>

      {/* <p className={clsx(isOnline && s.isOnline)}>{isOnline}</p> */}
    </li>
  );
}
