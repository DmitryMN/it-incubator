import React, {useState} from "react";

const NewMessagesCounter = (props: {count: number}) => {
    return(
        <div>{props.count}</div>
    );
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log("Users")
    return(
        <div>
            {props.users.map((user, index) => <div key={index}>{user}</div>)}
        </div>
    );
}

const Users = React.memo(UsersSecret);

export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState<Array<string>>(["Ann", "Bob", "Alex", "Den"]);

    const counterHandler = () => {
        setCounter(counter+1);
    }

    const addUserHandler = () => {
        setUsers([...users, "Kevin"]);
    }

    return(
        <div>
            <button onClick={counterHandler}>+</button>
            <button onClick={addUserHandler}>add user</button>
            <NewMessagesCounter count={counter} />
            <Users users={users} />
        </div>
    );
}