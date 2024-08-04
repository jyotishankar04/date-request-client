import { Card, Spin } from "antd";

export const Loading: React.FC<{ loading: boolean }> = ({ loading }) => {
  return (
    <div
      className={`w-full bg-gray-700 z-50 h-screen flex justify-center items-center absolute top-0 left-0 ${
        loading ? "block" : "hidden"
      }`}
    >
      <Card>
        <Spin size="large"></Spin>
      </Card>
    </div>
  );
};
