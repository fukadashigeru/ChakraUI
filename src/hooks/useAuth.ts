import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();

  const { setLoginUser } = useLoginUser();

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({ ...res.data, isAdmin });
            history.push("/home");
            showMessage({ title: "ログインしました。", status: "success" });
          } else {
            showMessage({
              title: "ユーザーが見つかりません。",
              status: "warning"
            });
            setLoading(false);
          }
        })
        .catch(() => {
          showMessage({
            title: "ログインできませんでした。",
            status: "warning"
          });
          setLoading(false);
        });
    },
    [history, showMessage, setLoginUser]
  );
  return { login, loading };
};
