import cookie from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { userTokenKey } from "@/constants/user";
import LoginForm from "@/components/LoginForm/LoginForm";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { login, validateJwtToken } from "@/api/user";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState<string | null>(null);

  const validateJwt = async () => {
    const token = cookie.get(userTokenKey);

    if (!token) return;

    try {
      const response = await validateJwtToken(token!, router);

      if (response?.status === 200) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    validateJwt();
  }, []);

  const onFormSubmit = async () => {
    const data = {
      email: email,
      password: password,
    };

    setError(null);

    try {
      const response = await login(data);

      if (response.status === 200) {
        cookie.set(userTokenKey, response.data.jwt_token); // išsaugojamas JWT token browsery;
        router.push("/");
      }

      console.log("response", response);
    } catch (err) {
      console.log(err);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <PageTemplate>
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onFormSubmit={onFormSubmit}
        error={error}
      />
    </PageTemplate>
  );
};

export default Login;
