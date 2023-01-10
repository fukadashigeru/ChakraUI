import { FC, memo, ReactNode } from "react";
import { Header } from "../organisms/Header";

type Props = {
  children: ReactNode;
};

export const HeaderLayout: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
