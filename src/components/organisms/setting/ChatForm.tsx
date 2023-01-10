import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { FC, memo, useState } from "react";
import { useChatList } from "../../../hooks/useChatList";

export const ChatForm: FC = memo(() => {
  const [input, setInput] = useState("");
  const { chats, setChats } = useChatList();
  const addChat = () => {
    setChats([...chats, input]);
    setInput("");
  };
  return (
    <Flex p={2} border="1px" borderColor="gray.200" backgroundColor="white">
      <Box w="50%">
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
      </Box>
      <Button ml={3} colorScheme="blue" onClick={addChat}>
        Button
      </Button>
    </Flex>
  );
});
