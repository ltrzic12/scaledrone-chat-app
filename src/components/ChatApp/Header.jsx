import "./Header.css"
const Header = (props) => {
    return <div className="header"><h2>Hello {props.username}</h2></div>
}

export default Header;