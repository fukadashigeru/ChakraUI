import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { FC, memo } from "react";
import { useChatList } from "../../../hooks/useChatList";

export const ChatList: FC = memo(() => {
  const { chats } = useChatList();
  // const { } = props;
  return (
    <List backgroundColor="white" spacing={3}>
      {chats.map((chat) => (
        <ListItem key={chat}>
          <ListIcon as={MdCheckCircle} color="green.500" />
          {chat}
        </ListItem>
      ))}
    </List>
  );
});
