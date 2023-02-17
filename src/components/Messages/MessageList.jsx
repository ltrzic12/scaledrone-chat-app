import Messages from "./Message";
import "./MessageList.css"

const MessageList = (props) => {
    const {currentMember, messages} = props;
    return <div className="container"><div className="lista"><ul className="messages-list">
        {messages.map((item) => (
            <Messages
            data={item.data} id={item.id} member={item.member} currentMember={currentMember}></Messages>

        ))}
    </ul></div></div>
}

export default MessageList;