import { useState } from "react";
import randomColor from "../../utils/randomColor";
import Input from "../Input/Input";
import Login from "../LoginPage/Login";

import MessageList from "../Messages/MessageList";
import Header from "./Header";
import Welcome from "./Welcome";

const ChatApp = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentMember, setCurrentMember] = useState({});
    const [drone, setDrone] = useState(null);
    const [messages, setMessages] = useState([]);

    const logInHandler = (username, emoji, channel_ID) => {
        const member = {
            name: username,
            avatar: emoji,
            color: randomColor(),
        };
        const drone = new window.Scaledrone(channel_ID, {
            data: member,
        });
        drone.on("open", (error) => {
            if (error) {
                setLoggedIn(false);
                setDrone(null);
                alert(`${error} Try again please.`);
                return console.error(error);
            }
        });

        const room = drone.subscribe("observable-room");
        room.on("data", (data, member) => {
            const messageList = messages;
            messageList.push({ data: data, id: member?.id, member: member });
            setMessages( [...messageList]);
        });

        setLoggedIn(true);
        setCurrentMember(member);
        setDrone(drone);
    };
    
    const sendMessage = (message) => {
        drone.publish({
            room: "observable-room",
            message: message,
        });
    };

    return (
        <div className="chatapp">
            {!loggedIn && <Welcome />}
            {loggedIn && <Header username={currentMember.name} />}
            {!loggedIn && <Login onLogin={logInHandler} />}
            {loggedIn && <MessageList messages={messages} currentMember={currentMember} />}
            {loggedIn && <Input sendMessage={sendMessage}/>}
        </div>
    );
};

export default ChatApp;
