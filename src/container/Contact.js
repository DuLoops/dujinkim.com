import { Box } from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function Contact() {
  const [enteredName, setEnteredName] = useState("");
  const nameInputRef = useRef();
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
  };

  return (
    <Box backgroundColor="whit"
    color={'black'}>
      <form onSubmit={formSubmissionHandler}>
        <div className="form-control">
          <label htmlFor="name" color="black">
            Your Name
          </label>
          <input
            ref={nameInputRef}
            type="text"
            id="name"
            onChange={nameInputChangeHandler}
          />
        </div>
        <div >
          <button>Submit</button>
        </div>
      </form>
    </Box>
  );
}
