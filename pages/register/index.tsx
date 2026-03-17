import cookie from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { userTokenKey } from "@/constants/user";
import RegisterForm from "@/components/RegisterForm/RegisterForm";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { register, validateJwtToken } from "@/api/user";

const Register = () => {
  const router = useRouter();

  const [name, setName] = useState("");
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
      name: name,
      email: email,
      password: password,
    };

    setError(null);

    try {
      const response = await register(data);

      if (response.status === 200) {
        cookie.set(userTokenKey, response.data.jwt_token); // išsaugojamas JWT token browsery;
        router.push("/");
      }

      console.log("response", response);
    } catch (err) {
      console.log(err);
      setError("Registration failed. Please check your details and try again.");
    }
  };

  return (
    <PageTemplate>
      <RegisterForm
        name={name}
        setName={setName}
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

export default Register;
