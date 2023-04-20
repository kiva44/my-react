import { createRoot } from "react-dom/client";
import TicTackToe from "./components/ticTackToe"

import Shop from "./components/shop"
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import ShopCard from './components/ShopCard';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Shop />
    ),
  },
  {
    path: "game",
    element: <TicTackToe />,
  },
  {
    path: "greeting",
    element: <Greeting />,
  }
  ,
  {
    path: "counter",
    element: <Counter />,
  }
]);

<Route path="/" element={<Shop />}>
  <Route path={`product/1`} element={<ShopCard />} />
</Route>;


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);



