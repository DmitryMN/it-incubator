import React, {useMemo, useState} from "react";

const UsersSecret = (props: {users: Array<string>}) => {
    console.log("UsersSecret")
    return(
        <div>
            {props.users.map((user, index) => <div key={index}>{user}</div>)}
        </div>
    );
}

const Users = React.memo(UsersSecret);

export const HelpsUseMemoForReactMemo = () => {
    console.log("HelpsUseMemo");
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState<Array<string>>(["Ann", "Bob", "Alex", "Den"]);

    const counterHandler = () => {
        setCounter(counter+1);
    }

    const newUsers = useMemo( () => {
       return users.filter(user => user.toLowerCase().indexOf("a") > -1)
    } , [users]);

    return(
        <div>
            <button onClick={counterHandler}>+</button>
            {counter}
            <Users users={newUsers} />
        </div>
    );
}