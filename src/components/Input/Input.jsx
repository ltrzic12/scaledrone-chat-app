import { useRef, useState } from "react";
import Button from "./Button";
import InputError from "./InputError";

const Input = (props) => {
    const enteredTextRef = useRef();
    const [error, setError] = useState(null);
    const errorHandler = () => setError(null);

    const onSubmitHandler = (e) => {
        const enteredText = enteredTextRef.current.value;

        if (enteredText.trim().length === 0) {
            e.preventDefault();

            setError(1);

            return;
        } else {
            e.preventDefault();

            props.sendMessage(enteredText);

            enteredTextRef.current.value = "";
        }
    };

    return (
        <div className="input__error">
            {error && <InputError />}
            <div className="input">
                <form onSubmit={onSubmitHandler}>
                    <input
                        style={{
                            borderColor: error ? "red" : "black",
                            backgroundColor: error ? "gray" : "transparent"
                        }}
                        type="text"
                        placeholder="What's on your mind"
                        autoFocus={true}
                        ref={enteredTextRef}
                        onChange={errorHandler}
                    />
                    <Button disabled={error} type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Input;
