const Channel_ID = (props) => {
    const handleChannelID =(e)=>{
        props.CHANNEL_ID_LOGIN(e.target.value);
    };
    return <input type="text" placeholder="Channel ID" value={props.input} onChange={handleChannelID}></input>
}

export default Channel_ID;