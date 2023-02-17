import "./Id.css"
const Channel_ID = (props) => {
    const handleChannelID =(e)=>{
        props.CHANNEL_ID_LOGIN(e.target.value);
    };
    return <>
        <label htmlFor="id" className="label">Channel ID</label>
        <input type="text" placeholder="Channel ID" value={props.input} onChange={handleChannelID} className="id" name="id"></input></>
}

export default Channel_ID;