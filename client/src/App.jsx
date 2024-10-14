import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage, PostPage } from "./routes/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/post" element={<PostPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
