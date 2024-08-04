import { Button } from "antd";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="w-full flex-col gap-10 text-white h-screen flex justify-center items-center bg-[#ffabcb]">
      <h1 className="text-5xl font-bold">Apne pyar se puchho pyar hai kya</h1>
      <div className="w-[600px] grid grid-cols-2 gap-5">
        <Link to={"/signup"}>
          <Button
            className="w-full  bg-pink-500 hover:bg-pink-700 "
            size="large"
            type="primary"
          >
            Create Your Request
          </Button>
        </Link>
        <Link to={"/login"}>
          <Button className="w-full " size="large">
            Check Your existing request
          </Button>
        </Link>
      </div>
      <p className="text-lg hover:bg-pink-700 p-2 rounded-lg">
        By <Link to={"https://devsuvam.xyz"}>Devsuvam</Link>
      </p>
    </div>
  );
};
