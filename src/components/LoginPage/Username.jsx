
const Username = (props) => {
    const usernameChangeHandler = (e) => {
      props.onLogin(e.target.value);
    };
  
    return (<>
      <label htmlFor="username" className="label">Username</label>
    <input
        type="text"
        placeholder="Enter username"
        value={props.input}
        onChange={usernameChangeHandler}
        name="username"
      /></>
      
    );
  };
  
  export default Username;
  