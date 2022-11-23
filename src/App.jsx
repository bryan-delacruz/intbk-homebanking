import { Route, Routes } from "react-router-dom";

import LoginLayout from "./layout/LoginLayout";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginLayout />}>
        <Route index element={<LoginForm />} />
      </Route>
    </Routes>
  );
}

export default App;
