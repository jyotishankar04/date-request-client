import { Button, Card, Input } from "antd";
import Title from "antd/es/typography/Title";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { http } from "../config/http";
import toast from "react-hot-toast";
import { Loading } from "../components/Loading";

interface Patners {
  name: string;
  isApproved: boolean;
}
export const User = () => {
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState<{
    id: string;
    name: string;
    username: string;
    patners: Patners[];
  }>();

  const fetchUser = async () => {
    setLoading(true);
    const user = await http.get("/user/" + id);
    if (user.status != 200) {
      toast.error("User not found");
      setLoading(false);
      return;
    }
    setUserInfo(user.data);
    setLink(`https://daterequest.devsuvam.xyz/request/${user.data.id}`);
    toast.success(`${user.data.name} Welcome to your profile`);
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, [id]);
  const [copySuccess, setCopySuccess] = useState("Copy Link");
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }

    setTimeout(() => setCopySuccess("Copy Link"), 2000);
  };
  return (
    <div className="bg-[#FFC8DD] overflow-auto flex-col lg:gap-10 gap-2 flex justify-start lg:py-10 items-center w-full h-screen ">
      <div>
        <Loading loading={loading}></Loading>
        <Card>
          <div className="flex justify-center items-center flex-col">
            <Title level={2}>Your Profile</Title>
            <Title level={4}>Welcome! {userInfo && userInfo.name}</Title>
            <Title level={4}>
              Username :{" "}
              <span className="text-blue-800 ">
                {userInfo && userInfo.username}
              </span>
            </Title>
          </div>
          <div className="mt-4 flex flex-col justify-center rounded-md p-4 bg-red-600 text-white items-center">
            <h1 className="text-lg font-bold ">***Note***</h1>
            <p className="text-center">
              Please note your username and password to visit this site again
            </p>
          </div>
        </Card>
      </div>
      <div className="flex justify-center items-center gap-10">
        <Card className="">
          <div className="flex flex-col justify-center items-center">
            <div>
              <p className="text-lg font-semibold text-gray-900">
                Share this link with your crush and invite them to join the
                website
              </p>
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-center mt-4 items-center gap-5">
              <Input value={link} size="large"></Input>
              <Button onClick={copyToClipboard} type="primary" size="large">
                {copySuccess}
              </Button>
            </div>
          </div>
        </Card>
      </div>
      <div>
        <Card>
          <Title level={2}>Your approval and rejection</Title>
          <div className="flex flex-col gap-3 text-xl">
            {Array.isArray(userInfo?.patners) &&
              userInfo.patners.map((partner: Patners) => (
                <PatnersCard key={partner.name} patner={partner} />
              ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

const PatnersCard: React.FC<{ patner: Patners }> = ({ patner }) => {
  return (
    <div
      className={`p-2 flex justify-between items-center border-2 rounded-md ${
        !patner.isApproved ? "border-red-600" : "border-gray-700 bg-green-500"
      }`}
    >
      <h1>{patner.name}</h1>
      <p>{patner.isApproved ? "Approved" : "Rejected"}</p>
    </div>
  );
};
