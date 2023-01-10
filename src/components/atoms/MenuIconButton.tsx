import { FC, memo } from "react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {
  onOpen: () => void;
};

export const MenuIconButton: FC<Props> = memo((props) => {
  const { onOpen } = props;
  // return <p>ホーム画面です。</p>;
  return (
    <IconButton
      aria-label="メニューボンタ"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  );
});
