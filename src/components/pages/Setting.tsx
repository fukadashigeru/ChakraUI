import { FC, memo } from "react";
import { ChatListProvider } from "../../providers/ChatListProvider";

import { ChatList } from "../organisms/setting/ChatList";
import { ChatForm } from "../organisms/setting/ChatForm";

export const Setting: FC = memo(() => {
  return (
    <>
      <ChatListProvider>
        <ChatList />
        <ChatForm />
      </ChatListProvider>
    </>
  );
});
