import "./app.scss";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Leftbar from "./components/left/Leftbar";
import Dashboard from "./pages/dashboard/Dashboard";
import UserPage from "./pages/user/UserPage";
import Login from "./pages/login/Login";
import UserDetail from "./pages/userdetail/UserDetail";

const App = () => {
interface UserStateProp  {
  count: boolean;
};

  const Layout: React.FC = () => {
    return (
      <div className="layout">
        <Navbar />
        <div className="layout__wrapper">
          <Leftbar />
          <div className="outlet" >
            <Outlet />
          </div>
        </div>
      </div>
    );
  };
  let currentUser: boolean = true;

  interface ProtectedRouteProps {
    children: React.ReactNode;
  }
console.log(currentUser)
  const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return <>{children}</>;
  };
    const router = createBrowserRouter([
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "/",
            element: <Dashboard />,
          },
          {
            path: "/users",
            element: <UserPage />,
          },
          {
            path: "/user/:id",
            element: <UserDetail />,
          },
          {
            path: "*",
            element: <div>Page not found</div>,
          },
        ],
      },
      {
        path: "/login",
        element: <Login onLogin={() => currentUser = false} />,
      },
    ]);
  return <div className="app">
     <RouterProvider router={router} />
  </div>;
};

export default App;
