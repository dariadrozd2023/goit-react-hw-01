import s from './Profile.module.css';
// import baseS from './style.css'

export function Profile({
  image,
  name = 'user',
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <div className={s.card}>
      <img className={s.img}
      src={image} alt="User avatar" />
      <p className={s.list_name}>{name}</p>
      <p className={s.list}>{tag}</p>
      <p className={s.list}>{location}</p>

      <ul className={s.dates}>
        <li className={s.items}>
          <span>Followers</span> <span className={s.decor}>{followers}</span>{' '}
        </li>
        <li className={s.items}>
          <span>Views</span> <span className={s.decor}>{views}</span>{' '}
        </li>
        <li className={s.items}>
          <span>Likes</span> <span className={s.decor}>{likes}</span>{' '}
        </li>
      </ul>
    </div>
  );
}
