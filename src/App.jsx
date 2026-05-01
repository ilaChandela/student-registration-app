import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import StudentDetails from "./pages/StudentDetails";
import ThemeProvider from "./store/theme/themeContext";
import UserProvider from "./store/user/userContext";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <ThemeProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/register" element={<Registration />}></Route>
              <Route
                path="/student-details"
                element={<StudentDetails />}
              ></Route>
            </Routes>
          </Layout>
        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
