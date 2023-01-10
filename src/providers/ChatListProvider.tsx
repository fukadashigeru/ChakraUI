import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";

// import { User } from "../types/api/user";

// type LoginUser = User & { isAdmin: boolean };
export type ChatListContextType = {
  chats: string[];
  setChats: Dispatch<SetStateAction<string[]>>;
};

export const ChatListContext = createContext<ChatListContextType>(
  {} as ChatListContextType
);

export const ChatListProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [chats, setChats] = useState<string[]>([]);
  return (
    <ChatListContext.Provider value={{ chats, setChats }}>
      {children}
    </ChatListContext.Provider>
  );
};
