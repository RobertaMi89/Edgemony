import { useState } from "react";
import Equilibrium from "../nft-preview-card-component-main/images/image-equilibrium.jpg";
import IconEthereum from "./components/IconEthereum.jsx";
import IconClock from "./components/IconClock.jsx";
import Avatar from "../nft-preview-card-component-main/images/image-avatar.png";
import IconView from "./components/IconView.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex w-full h-screen items-center justify-center bg-Verydarkblue">
        <a
          className="font-sans p-8 max-w-lg rounded-2xl flex flex-col items-center bg-Verydarkbluecard w-96"
          href="#"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img src={Equilibrium} className="rounded-lg" />
            <div className="absolute inset-0 bg-Cyan rounded-lg opacity-0 hover:opacity-50 transition-opacity duration-300 w-full h-full flex items-center justify-center">
              <IconView className="opacity-100" />
            </div>
          </div>
          <div className="mt-5 w-full">
            <h4 className="text-xl text-White cursor-pointer hover:text-Cyan">
              Equilibrium #3429
            </h4>
            <p className="mt-2 text-gray-600 text-Softblue">
              Our Equilibrium collection promotes balance and calm
            </p>
            <div className="mt-5 mb-5 flex justify-between w-full ">
              <div className="flex items-center">
                <IconEthereum />
                <span className="ms-2 text-Cyan font-bold">0.041 ETH</span>
              </div>
              <div className="flex text-right items-center text-Softblue">
                <IconClock />
                <span className="ms-2">3 days left</span>
              </div>
            </div>
            <div className="border-t border-Verydarkblueline"></div>
            <div className="mt-5 flex items-center">
              <img
                src={Avatar}
                className="border rounded-full w-10  mr-5"
                alt="avatar"
              />
              <span className="text-Softblue mr-2">Creation of </span>
              <span className="text-White hover:text-Cyan"> Roberta Miosi</span>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default App;
