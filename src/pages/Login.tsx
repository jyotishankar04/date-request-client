import { Button, Card, Input } from "antd";
import { useState } from "react";
import toast from "react-hot-toast";
import { http } from "../config/http";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const navigation = useNavigate();
  const handleClick = async () => {
    if (data.username.length < 4) {
      toast.error("Enter a valid username");
      return;
    }
    if (data.password.length < 6) {
      toast.error("Password should be at least 8 characters long");
      return;
    }
    setLoading(true);
    const res = await http.post("/user/login", data);
    if (res.status != 200) {
      toast.error("Error in login");
      setLoading(false);
      return;
    }
    setLoading(false);
    navigation(`/user/${res.data.id}`);
    setData({ username: "", password: "" });
    toast.success("Logged in successfully");
  };
  return (
    <div className="w-full  h-screen flex justify-center items-center bg-[#FFC8DD]">
      <Loading loading={loading} />
      <div className="lg:w-[400px] w-[95%] flex flex-col gap-3">
        <Card>
          <div className="lg:w-[400px] w-full flex flex-col gap-3">
            <h1 className="lg:text-4xl font-semibold text-2xl">Login</h1>

            <div className="flex gap-2 flex-col">
              <label className="lg:text-lg text-md">Enter your name</label>
              <Input
                onChange={(e) => setData({ ...data, username: e.target.value })}
                value={data.username}
                type="text"
                size="large"
                placeholder="Eg- jhon doe"
              ></Input>
            </div>

            <div className="flex gap-2 flex-col">
              <label className="lg:text-lg text-md">Choose a password</label>
              <Input
                onChange={(e) => setData({ ...data, password: e.target.value })}
                type="password"
                value={data.password}
                size="large"
                placeholder="*******"
              ></Input>
            </div>
            <Button onClick={handleClick} type="primary" size="large">
              Login
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
