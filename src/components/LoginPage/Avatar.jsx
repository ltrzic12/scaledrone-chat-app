import { emojiList } from "./utils/emojiList";
import randomAvatar from "./utils/randomAvatar";

const Avatar = (props) => {
    const avatars = emojiList();
    const randomAvatars = randomAvatar();
    const avatarChangeHandler = (e) => {
        props.onSelectedAvatar(e.target.value);
    }
    return <select onChange={avatarChangeHandler} >
        <option id="randomAvatar" value={randomAvatars} key="First Key">Pick an avatar</option>

        {avatars.map(a => (
            <option value={a} key={a}>{a}</option>
        ))}
    </select>
}

export default Avatar;