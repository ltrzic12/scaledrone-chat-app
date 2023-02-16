const MemberUsername = (props) => {
    const {username, color} = props;

    return (<div className="username" style={{color: color}}>
        {username}
    </div>)
}

export default MemberUsername