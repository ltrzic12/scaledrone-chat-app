import UserAvatar from "./MsgHelpers/Avatar";
import Text from "./MsgHelpers/Text";
import MemberUsername from "./MsgHelpers/Username";

const Messages = (props) => {
    const { data, id, member, currentMember } = props;

    const deliveredMessage =
        member?.clientData.name === currentMember?.name &&
        member?.clientData.avatar === currentMember?.avatar &&
        member?.clientData.color === currentMember?.color
            ? "Messages-message currentMember"
            : "Messages-message";

    return (
        <li className={deliveredMessage} key={id}>
            <UserAvatar avatar={member?.clientData.avatar}/>
            <div className="message-content">
                <MemberUsername
                    username={member?.clientData.name}
                    color={member?.clientData.color}/>

                <Text text={data}/>
            </div>
        </li>
    );
};

export default Messages;
