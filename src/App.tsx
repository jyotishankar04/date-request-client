import { Toaster } from "react-hot-toast";
import { RoutesConfig } from "./routes/routeConfig";

function App() {
  return (
    <div>
      <RoutesConfig></RoutesConfig>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
