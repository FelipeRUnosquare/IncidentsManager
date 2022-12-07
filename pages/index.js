import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import AuthContext from "../store/auth-context";

export default function Login() {
  const authCtx = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (authCtx.isLoggedIn) {
      router.push("/home");
    } else {
      router.push("/login");
    }
  }, []);

  return <React.Fragment></React.Fragment>;
}
