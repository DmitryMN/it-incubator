import React, {useCallback, useMemo, useState} from "react";

type BooksSecretPropsType = {
    books: Array<string>
    addBooksHandler: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log("BooksSecret");
    const onClickHandler = () => {
        props.addBooksHandler();
    }

    return(
        <div>
            <button onClick={onClickHandler}>add user</button>
            {props.books.map((book, index) => <div key={index}>{book}</div>)}
        </div>
    );
}

const Books = React.memo(BooksSecret);

export const UseUseCallBack = () => {
    console.log("UseUseCallBack");
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState<Array<string>>(["React", "JS", "Python", "NodeJS"]);

    const counterHandler = () => {
        setCounter(counter+1);
    }

    // const addBooksHandler = () => {
    //     setBooks([...books, "Copy"]);
    // }

    const addBooksHandler = useCallback(() => {
        setBooks([...books, "Copy"]);
    }, [books]);

    const newArray = useMemo(() => {
       return books.filter(book => book.toLowerCase().indexOf("o") > -1);
    }, [books]);

    return(
        <div>
            <button onClick={counterHandler}>+</button>
            {counter}
            <Books books={newArray} addBooksHandler={addBooksHandler}/>
        </div>
    );
}