import { useState } from "react";
import Equilibrium from "../nft-preview-card-component-main/images/image-equilibrium.jpg";
import IconEthereum from "./components/IconEthereum.jsx";
import IconClock from "./components/IconClock.jsx";
import Avatar from "../nft-preview-card-component-main/images/image-avatar.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex w-full h-screen items-center justify-center bg-Verydarkblue">
        <a
          className="font-sans p-8 max-w-lg rounded-2xl flex flex-col items-center bg-Verydarkbluecard w-96"
          href="#"
        >
          <img
            src={Equilibrium}
            className="shadow rounded-lg overflow-hidden"
          />
          <div className="mt-5 w-full">
            <h4 className="text-xl text-White">Equilibrium #3429</h4>
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
              <span className="text-White"> Roberta Miosi</span>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default App;
