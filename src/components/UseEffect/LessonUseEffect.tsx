import React, {useState, useEffect} from "react";


const LessonUseEffect = () => {

    const [fake, setFake] = useState<number>(1);
    const [count, setCount] = useState<number>(1);

    useEffect(() => {
        console.log("use effect every render");
        document.title = count.toString();
    });

    useEffect(() => {
        console.log("use effect only first render");
        document.title = count.toString();
    }, []);

    useEffect(() => {
        console.log("use effect render with counter");
        document.title = count.toString();
    }, [count]);

    return(
        <div>
            <div>
                Count: {count}
                Fake: {fake}
            </div>
            <button onClick={() => {setCount(count + 1)}}>count +</button>
            <button onClick={() => {setFake(fake + 1)}}> fake +</button>             
        </div>
    );
}

export default LessonUseEffect;