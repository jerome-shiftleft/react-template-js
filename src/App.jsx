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
  return (
    <>      
      <RouterProvider router={router}  />
    </>
  );
}

export default App;
