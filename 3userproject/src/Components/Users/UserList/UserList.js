import UserItem from '../UserItem/UserItem';

const UserList = (props) => {

    const onClickDelete = (id) => {
        props.onDeleteItem(id);
    }

    const users = props.users;
    return (
      <div>
          <ul>
              {users.map( user => 
                  (<UserItem
                    key={user.id}
                    id={user.id}
                    onClickDelete={onClickDelete}>
                    {user.name + ' ' + user.age}
                    </UserItem>)
              )}
          </ul>
      </div>  
    );
};

export default UserList;