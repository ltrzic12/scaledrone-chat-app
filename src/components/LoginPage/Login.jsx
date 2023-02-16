import "./Login.css"
import { useState } from "react";
import Avatar from "./Avatar";
import Channel_ID from "./Channel_ID";
import Username from "./Username";





const Login = (props) => {
    const [username, setUsername] = useState("");
    const [channel_ID, setChannel_ID] = useState("reqm5mn8xW1i15Af")
    const [avatar, setAvatar] = useState("")

    const usernameHandler = (username) => {
        setUsername(username);
    };

    const avatarChangeHandler=(avatar)=>{
        setAvatar(avatar);
    };

    const handleChannelId = (channel) => {
        setChannel_ID(channel);
    }

    const onEnterChat =()=> {
        const selectedUsername = username;
        const selectedAvatar = avatar;
        const selectedChannel = channel_ID;

        if (selectedAvatar.length === 0 || selectedUsername.length === 0){
            alert("Please enter username and select an avatar.")
            return;
        }

        if (channel_ID.length !== 16){
            alert("Please enter valid channel id.")
            return;
        }

        else props.onLogin(selectedUsername, selectedAvatar, selectedChannel);
    }
   

    return <div className="login-page">
        <div className="login"><Username 
        input={username}
        onLogin={usernameHandler}
        />
        <Avatar 
        selected={avatar}
        onSelectedAvatar={avatarChangeHandler}
        />
        <Channel_ID
        input={channel_ID} 
        CHANNEL_ID_LOGIN={handleChannelId} />
        <button onClick={onEnterChat}>Enter Chat</button></div>
    </div>
}

export default Login;