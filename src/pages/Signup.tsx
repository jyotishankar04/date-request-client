import { Button, Card, Input } from "antd";
import { useState } from "react";
import toast from "react-hot-toast";
import { http } from "../config/http";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";

export const Signup = () => {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    name: "",
    password: "",
  });
  const navigation = useNavigate();
  const handleClick = async () => {
    if (data.name.length < 4) {
      toast.error("Enter a valid name");
      return;
    }
    if (data.password.length < 6) {
      toast.error("Password should be at least 6 characters long");
      return;
    }
    setLoading(true);
    const res = await http.post("/user/signup", {
      name: data.name,
      password: data.password,
    });
    if (res.status != 200) {
      toast.error("Failed to create account");
      setLoading(false);
      return;
    }
    setLoading(false);
    navigation(`/user/${res.data.user.id}`);
    setData({ name: "", password: "" });
    toast.success("Account created successfully");
  };
  return (
    <div className="w-full  h-screen flex justify-center items-center bg-[#FFC8DD]">
      <Loading loading={loading} />
      <div className="lg:w-[400px] w-[95%] flex flex-col gap-3">
        <Card>
          <div className="lg:w-full w-full flex flex-col gap-3">
            <h1 className="lg:text-4xl font-semibold text-2xl">Sign Up</h1>
            <div className="flex gap-2 flex-col">
              <label className="lg:text-lg text-md">Enter your name</label>
              <Input
                onChange={(e) => setData({ ...data, name: e.target.value })}
                type="text"
                value={data.name}
                size="large"
                placeholder="Eg- jhon doe"
              ></Input>
            </div>

            <div className="flex gap-2 flex-col">
              <label className="lg:text-lg text-md">Choose a password</label>
              <Input
                onChange={(e) => setData({ ...data, password: e.target.value })}
                type="password"
                size="large"
                placeholder="*******"
                value={data.password}
              ></Input>
            </div>
            <Button onClick={handleClick} type="primary" size="large">
              Create
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
