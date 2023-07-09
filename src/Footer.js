const Footer = (props) => {
    const count = props.count;
    const today = new Date();

    return (
        <footer>
            <p>{count} List Items</p>
            <p>Copyright &copy; {today.getFullYear()}</p>
        </footer>
    )
}

export default Footer