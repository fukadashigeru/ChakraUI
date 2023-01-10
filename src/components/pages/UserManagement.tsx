/* eslint-disable react-hooks/exhaustive-deps */
import {
  Spinner,
  Center,
  Wrap,
  WrapItem,
  useDisclosure
} from "@chakra-ui/react";
import { FC, memo, useCallback, useContext, useEffect } from "react";

import { useAllUsers } from "../../hooks/useAllUsers";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";
import { LoginUserContext } from "../../providers/LoginUserProvider";

export const UserManagement: FC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { selectedUser, onSelectUser } = useSelectUser();
  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },
    [users]
  );
  useEffect(() => {
    getUsers();
  }, []);

  const { loginUser } = useContext(LoginUserContext);
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <>
          <Wrap p={{ base: 4, md: 10 }}>
            {users.map((user) => (
              <WrapItem key={user.id} mx="auto">
                <UserCard
                  id={user.id}
                  imageUrl="https://source.unsplash.com/random"
                  userName={user.username}
                  fullName={user.name}
                  onClickUser={onClickUser}
                />
              </WrapItem>
            ))}
          </Wrap>
          <UserDetailModal
            isOpen={isOpen}
            onClose={onClose}
            isAdmin={loginUser?.isAdmin ?? false}
            user={selectedUser}
          />
        </>
      )}
    </>
  );
});
