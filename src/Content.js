const Content = () => {
    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    const handleClick = ()=>{
        console.log('You clicked it');
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
                Hello {handleNameChange()}!
            </p>
            <button onClick={() => handleClick()}> Click it</button>
            <button onClick={() => handleClick1('Shubham')}> Click it</button>
            <button onDoubleClick={(e) => handleClick2(e)}> Click it</button>
        </main>
    )
}

export default Content