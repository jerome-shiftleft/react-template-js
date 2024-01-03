import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MasterLayout from "./layout/MasterLayout";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ErrorPage from "./pages/Error";
import "./sass/app.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  //const [currentTheme, setCurrentTheme] = useState("light");

  // const toggleTheme = () => {
  //   console.log('toggling theme');
  //   setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  // };

  // const theme = useMemo(() => {
  //   return currentTheme === "light" ? lightTheme : darkTheme;
  // }, [currentTheme]);

  return (
    <>      
      <RouterProvider router={router}  />
    </>
  );
}

export default App;
