import { Profile } from './Profile/Profile';
import userData from '../userData.json';
import friends from "../friends.json";
import {FriendListItem} from './FriendListItem/FriendListItem'
// import {FriendList}  from './FriendList/FriendList';

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
 <FriendListItem  />

  </>
  );
}
