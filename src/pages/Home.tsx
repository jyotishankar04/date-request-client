import { Button } from "antd";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="bg-homePageImage bg-center bg-cover ">
      <div className="w-full flex-col gap-10 text-white h-screen  bg-gradient-to-b from-purple-500/40  to-pink-500/40   flex justify-center items-center bg-transparent">
        <h1 className="lg:text-5xl text-3xl w-[90%] text-center  font-bold font-customFont">
          Just Ask: The App That Makes Dates Simple
        </h1>
        <div className="lg:w-[600px] w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-5">
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
    </div>
  );
};
