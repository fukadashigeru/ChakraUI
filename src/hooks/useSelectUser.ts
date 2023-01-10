import { useCallback, useState } from "react";
import { User } from "../types/api/user";

type Props = {
  id: number;
  users: User[];
  onOpen: () => void;
};

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const user = users.find((user) => user.id === id);
    setSelectedUser(user ?? null);
    onOpen();
  }, []);
  return { selectedUser, onSelectUser };
};
