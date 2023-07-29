import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateLayout from "./layouts/PrivateLayout";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import Unauthorized from "./pages/Unauthorized";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* public  */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} index />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin />} />
        </Route>

        {/* private */}
        <Route element={<PrivateLayout />}>
          <Route path="/dashboard" element={<Dashboard roles={["user", "admin"]}/>} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/unauthorized" element={<Unauthorized/>} />
        <Route path="*" element={<PageNotFound/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
