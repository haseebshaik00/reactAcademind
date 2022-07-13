const UserItem = (props) => {

    const deleteHandler = () => {
        props.onClickDelete(props.id);
    }
    
    return( 
    <li onClick={deleteHandler}>
        {props.children}
    </li> 
    );
};

export default UserItem;