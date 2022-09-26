import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  Box,
  Button,
  Input,
  Portal
} from "@chakra-ui/react";

function ModifytTask(props) {

  const {id,editFunc} = props;

  const initRef = React.useRef();

  const [text, setText] = React.useState("")

  const displayFunc = (e) => {
    setText(e.target.value);
}

   const handleClick = () => {
    editFunc(id,text)
     console.log(text)
     setText("")
}

  return (
    <Popover closeOnBlur={false} placement="bottom" initialFocusRef={initRef}>
      {({onClose }) => (
        <>
          <PopoverTrigger>
            <Button colorScheme='teal' variant='solid' size='sm' margin="10px">Modify Task</Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverHeader>Enter The New task</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Box>
                  <Input type="text" placeholder="Enter New Task" value={text} onChange={displayFunc} />
                </Box>
                <Button
                  mt={4}
                  colorScheme="blue"
                  onClick={() => {onClose(); handleClick()}}
                  ref={initRef}
                >
                  Change
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
  );
}

export default ModifytTask;
