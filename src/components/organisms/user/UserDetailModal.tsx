import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Stack,
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useEffect, useState } from "react";
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/PrimaryButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  isAdmin: boolean;
  user: User | null;
};

export const UserDetailModal: FC<Props> = memo((props) => {
  const { isOpen, onClose, isAdmin = false, user } = props;
  const onClickUpdate = () => alert("hoge");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setName(user?.name ?? "");
    setUsername(user?.username ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input value={name} onChange={onChangeName} readOnly={!isAdmin} />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input
                value={username}
                onChange={onChangeUsername}
                readOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>メール</FormLabel>
              <Input
                value={email}
                onChange={onChangeEmail}
                readOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input
                value={phone}
                onChange={onChangePhone}
                readOnly={!isAdmin}
              />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
});
