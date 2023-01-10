import { Box, Stack, Image, Text } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClickUser: (id: number) => void;
};

export const UserCard: FC<Props> = memo((props) => {
  const { id, imageUrl, userName, fullName, onClickUser } = props;
  return (
    <Box
      w="260px"
      h="260px"
      borderRadius="10px"
      bg="white"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClickUser(id)}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          src={imageUrl}
          boxSize="160px"
          alt="プロフィール画像"
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
