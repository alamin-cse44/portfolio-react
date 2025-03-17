import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRoutes";

import "./App.scss";
function App() {
  return (
    <div className="root">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
