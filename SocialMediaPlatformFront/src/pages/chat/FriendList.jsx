import React from 'react';
import styles from './FriendList.module.css';

const friends = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  // Add more friends as needed
];

function FriendList({ onSelectFriend }) {
  return (
    <div className={styles.friendList}>
      <h3>Friends</h3>
      <ul className="list-group">
        {friends.map(friend => (
          <li
            key={friend.id}
            className="list-group-item list-group-item-action"
            onClick={() => onSelectFriend(friend)}
          >
            {friend.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
