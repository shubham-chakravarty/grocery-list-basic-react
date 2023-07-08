import { useState } from "react";

const Content = () => {
    const [name, setName] = useState('Shubham')
    const [count, setCount] = useState(0)

    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    }

    const handleClick = ()=>{
        console.log(count);
        setCount((curr) => {
            return curr + 1
        })
    }
    const handleClick1 = (name)=>{
        console.log(`You clicked ${name}`);
    }
    const handleClick2 = (e)=>{
        console.log(e);
    }

    return (
        <main>
            <p>
                Hello {name}!
            </p>
            <button onClick={handleNameChange}> Click it</button>
            <button onClick={handleClick}> Click it</button>
            <button onDoubleClick={(e) => handleClick2(e)}> Click it</button>
        </main>
    )
}

export default Content