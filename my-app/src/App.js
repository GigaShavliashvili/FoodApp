import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.scss";
import Header from "./Components/Header/Header";
import BottomMenu from "./Components/BottomMenu/BottomMenu";
import Home from "./Pages/Home/Home";
import Favorite from "./Pages/Favorite/Favorite";
import Chat from "./Pages/chat/Chat";
import Wallet from "./Pages/Wallet/Wallet";

const App = () => {
  const ThemMode = useSelector((state) => state.Them.mode);
  const Color = useSelector((state) => state.FoodCard);
  console.log(Color);
  console.log("---No Error Has Occurred----");
  return (
    <div>
      <BrowserRouter>
        <Header ThemMode={ThemMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
        <BottomMenu ThemMode={ThemMode} Color={Color} />
      </BrowserRouter>
    </div>
  );
};

export default App;
