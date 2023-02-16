import Messages from "./Message";

const MessageList = (props) => {
    const {currentMember, messages} = props;
    return <ul className="messages-list">
        {messages.map((item) => (
            <Messages
            data={item.data} id={item.id} member={item.member} currentMember={currentMember}></Messages>

        ))}
    </ul>
}

export default MessageList;