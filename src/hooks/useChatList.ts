import { useContext } from "react";
import {
  ChatListContext,
  ChatListContextType
} from "../providers/ChatListProvider";

export const useChatList = (): ChatListContextType =>
  useContext(ChatListContext);
