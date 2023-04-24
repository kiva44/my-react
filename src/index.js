import ReactDOM from "react-dom/client";
import TicTackToe from "./components/ticTackToe"
// import { ReactDOM } from 'react';
import App from "./App"

import Shop from "./components/shop"
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Link,
} from "react-router-dom";
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import ShopCard from "./components/ShopCard"


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <Shop />
//     ),
//   },
//   {
//     path: "game",
//     element: <TicTackToe />,
//   },
//   {
//     path: "greeting",
//     element: <Greeting />,
//   }
//   ,
//   {
//     path: "counter",
//     element: <Counter />,
//   }
// ]);

// <Route path="/" element={<Shop />}>
//   <Route path={`product/1`} element={<ShopCard />} />
// </Route>;


// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );


const root = ReactDOM.createRoot(document.getElementById("root"))

function Root() {
  return (
    <>
      <h1>Iam Root</h1>
      <Link to="game">Game</Link><br></br>
      <Link to="shop">Shop</Link><br></br>
      <Link to="greetings">Greeting</Link><br></br>
    </>
  )
}


const router = createBrowserRouter(
  createRoutesFromElements(

    <>
      <Route path="/" element={<Root />}></Route>
      <Route path="shop" element={<Shop />} />
      <Route path="game" element={<TicTackToe />} />
      <Route path="greetings" element={<Greeting />} />
      <Route path="shop/:productId" element={<ShopCard />} />
    </>
  )
);


root.render(
  <RouterProvider router={router} />
)

// root.render(<App />)