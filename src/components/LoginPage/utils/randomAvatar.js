import { emojiList } from "./emojiList";

function randomAvatar() {
    const avatar = emojiList();
    const randomIndex = Math.floor(Math.random() * avatar.length);
    const randomAvatar = avatar[randomIndex];
    return randomAvatar;
}

export default randomAvatar;

