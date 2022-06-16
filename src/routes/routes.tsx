import { useRoutes } from "react-router-dom";
import EmailVerification from "../view/EmailVerification";
import Home from "../view/Home";
import Login from "../view/Login";
import Question from "../view/Question";
import Registration from "../view/Registration";
import { Navigate } from "react-router-dom";
import CreateQuestion from "../view/Question/CreateQuestion";

export function MainRoutes() {
  const token = localStorage.getItem("codequiztoken");
  const elements = useRoutes([
    {
      path: "/",
      element: !token ? <Home /> : <Navigate to="/main" replace />,
    },

    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/main",
      element: token ? <Question /> : <Navigate to="/login" replace />,
      children: [
        {
          path: "create",
          element: <CreateQuestion />,
        },
      ],
    },

    {
      path: "/registration",
      element: <Registration />,
    },
    {
      path: "/user_activation/:uid/:token",
      element: <EmailVerification />,
    },
    {
      path: "/create",
      element: <CreateQuestion />,
    },
    {
      path: "*",
      element: <p>There's nothing here: 404!</p>,
    },
  ]);

  return elements;
}
