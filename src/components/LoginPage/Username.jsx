const Username = (props) => {
    const usernameChangeHandler = (e) => {
      props.onLogin(e.target.value);
    };
  
    return (
      <input
        type="text"
        placeholder="Enter username"
        value={props.input}
        onChange={usernameChangeHandler}
      />
    );
  };
  
  export default Username;
  