import { Button, Card, Input } from "antd";
import Title from "antd/es/typography/Title";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { http } from "../config/http";
import { Link, useParams } from "react-router-dom";
import { Loading } from "../components/Loading";

export const Request = () => {
  const { id } = useParams();
  const [isPopUpOpen, setIsPopUpOpen] = useState(true);
  const [noCount, setNoCount] = useState(1);
  const [data, setData] = useState("");
  const [response, setResponse] = useState(false);
  const [submitTriggered, setSubmitTriggered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isCreateButtonVisible, setIsCreateButtonVisible] = useState(false);

  const handleNameSubmit = () => {
    if (data.length < 4) {
      toast.error("Name should be at least 4 characters long");
      return;
    }
    setIsPopUpOpen(false);
  };

  const handleSubmit = async (responseValue: boolean) => {
    setIsCreateButtonVisible(true);
    setLoading(true);
    try {
      const res = await http.post(`/request/${id}`, {
        name: data,
        response: responseValue,
      });
      if (res.status !== 200) {
        toast.error("Failed to send request");
        setLoading(false);
        return;
      }
      toast.success("Request sent successfully");
    } catch (error) {
      toast.error("Failed to send request");
    } finally {
      setLoading(false);
    }
  };
  console.log(noCount);

  useEffect(() => {
    if (submitTriggered) {
      handleSubmit(response);
      setSubmitTriggered(false);
    }
  }, [submitTriggered, response]);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#FFC8DD]">
      <Loading loading={loading} />
      <div className={`w-[400px] ${isPopUpOpen ? "block" : "hidden"}`}>
        <Card>
          <div className="flex flex-col gap-4">
            <Title level={3}>Enter your name</Title>
            <Input
              value={data}
              onChange={(e) => setData(e.target.value)}
              size="large"
              placeholder="Eg- Angelina"
            ></Input>
            <Button
              onClick={handleNameSubmit}
              size="large"
              className="w-full"
              type="primary"
            >
              Enter
            </Button>
          </div>
        </Card>
      </div>
      <div
        className={`flex justify-center items-center ${
          isPopUpOpen ? "hidden" : "block"
        }`}
      >
        <div className="w-[300px]">
          <Title level={3} className="text-center">
            {noCount === 1
              ? "Do you wanna go on a date?"
              : noCount === 2
              ? "Please say yes"
              : noCount === 3
              ? "pleaseeeeeeeeeeeeeeee"
              : noCount === 4
              ? ""
              : "Yeahhhhhhhh"}
          </Title>
          <img
            className="w-full"
            src={
              noCount === 1
                ? "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGU3eWFleWViMDBzNDNscXIwMDN3M3EwbzN4eHU2ZWhseTA0azFjMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MApRfYSxNLANDujHOf/giphy.gif"
                : noCount === 2
                ? "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXA4cnp5NXp2ZHFvZnl2YzNtMm41N3o0YmIxcjhhdDllYmZ3ZWppMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/IJjhKO6is7tMA/giphy.gif"
                : noCount === 3
                ? "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGJzcDFmZm9mbmh0d3pmZ3ZydGVxa25xODQzbGd4M2E4azlqZW5kaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/WMWZoUOxOVp10m2FV9/giphy.gif"
                : noCount === 4
                ? "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3VqdGNmZTY5eXkwamJjNjU2a3UyOWpucXJnaXU3YzFxdGZhMzVwZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/bhaKMT3WCAxLdNQBG6/giphy.gif"
                : "https://i.giphy.com/euW6JDwrMn0BqyNC8t.webp"
            }
            alt=""
          />
          <div
            className={`w-full grid grid-cols-2 mt-10 gap-5 ${
              noCount === 4 || noCount === 0 ? "hidden" : "block"
            }`}
          >
            <Button
              size="large"
              onClick={() => {
                setNoCount((prev) => ++prev);
                if (noCount == 3) {
                  console.log("ksksdjfkl");

                  setSubmitTriggered(true);
                } else {
                  ("");
                }
              }}
            >
              No
            </Button>
            <Button
              size="large"
              onClick={() => {
                setResponse(true);
                setNoCount(0);
                setSubmitTriggered(true);
              }}
            >
              Yes
            </Button>
          </div>

          <Link to={"/signup"}>
            <Button
              className={`${
                isCreateButtonVisible ? "block" : "hidden"
              } w-full mt-20`}
              size="large"
            >
              Create Your own request
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
