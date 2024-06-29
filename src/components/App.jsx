import { Profile } from './Profile/Profile';
import userData from '../userData.json';
import friends from '/src/friends.json';
// import { FriendListItem } from '../components/FriendListItem/FriendListItem';
import { FriendList } from './FriendsList/FriendsList';

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
}
