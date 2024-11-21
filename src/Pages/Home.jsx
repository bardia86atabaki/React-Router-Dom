import React from "react";
import Navbar from "../Commponent/Navbar";

function Home() {

  
  return (
    <div>
      <Navbar />
      <div className="mt-[100px] flex justify-center">
        <div className="w-[50%] ml-36">
          <h1 className="text-[40px]">
            <span className="text-[#13AAF8] font-medium">AIR</span>JORDAN
          </h1>
          <h3 className="font-normal mt-3">
            AIR JORDAN 1 MID LIGHT{" "}
            <span className="text-[#13AAF8] font-medium">Sky</span>
          </h3>
          <p className="text-justify mt-5 w-[300px] text-[15px] font-light">
            The popularity of Jordan 1s haven’t changed since their release in
            1984. The classic silhouette has been seen in countless colorways
            over the years. Sneakerheads in their teens and twenties also love
            to wear Air Jordan 1s, in their eyes the original AJ1s are already
            part of sneaker history. This is proof of being truly iconic, isn’t
            it?
          </p>
          <button className="buy w-[120px] h-[35px] rounded-[8px] bg-[#13AAF8] mt-5 text-[16px] transition duration-1000 hover:bg-transparent hover:border-[2px] hover:border-[#13AAF8]">
            Buy
          </button>
          <button className="number w-[120px] h-[35px] rounded-[8px] bg-transparent mt-5 text-[16px] transition duration-1000 border-[2px] border-[#13AAF8] hover:bg-[#13AAF8]">
            360$
          </button>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <img
            src="src/assets/Group 44.png"
            id="one"
            alt=""
            className="w-[500px]"
          />
          <img
            src="src/assets/logo.jpg"
            id="two"
            alt=""
            className="hidden w-[500px]"
          />
        </div>
      </div>

<div>
            
            <h1 className="text-6xl mt-40 ml-[530px] font-medium animate-leAboundTop">More Shoes</h1>
            <div className="mt-60 max-w-[900px] mx-auto h-full">
              <div className="flex justify-between gap-5 ">
                <div>
                  <img
                    src="src/assets/Frame 570.png"
                    id="one"
                    alt=""
                    className="w-200"
                  />
                  <h1 className="" >HAVIT HV-G92 Gamepad</h1>
                  <p className="font-medium">$180</p>
                </div>
                <div>
                  <img
                    src="src/assets/Frame 570.png"
                    id="one"
                    alt=""
                    className="w-200"
                  />
                  <h1>HAVIT HV-G92 Gamepad</h1>
                  <p className="font-medium">$180</p>
                </div>
                <div>
                  <img
                    src="src/assets/Frame 570 (1).png"
                    id="one"
                    alt=""
                    className="w-200"
                  />
                  <h1>HAVIT HV-G92 Gamepad</h1>
                  <p className="font-medium">$180</p>
                </div>
                <div>
                  <img
                    src="src/assets/Frame 571.png"
                    id="one"
                    alt=""
                    className="w-200"
                  />
                  <h1>HAVIT HV-G92 Gamepad</h1>
                  <p className="font-medium">$180</p>
                </div>
              </div>
              <div className="flex justify-between gap-5 ">
                <div>
                  <img
                    src="src/assets/Frame 570.png"
                    id="one"
                    alt=""
                    className="w-200"
                  />
                  <h1>HAVIT HV-G92 Gamepad</h1>
                  <p className="font-medium ">$180</p>
                </div>
                <div>
                  <img
                    src="src/assets/Frame 570.png"
                    id="one"
                    alt=""
                    className="w-200"
                  />
                  <h1>HAVIT HV-G92 Gamepad</h1>
                  <p className="font-medium">$180</p>
                </div>
                <div>
                  <img
                    src="src/assets/Frame 570 (1).png"
                    id="one"
                    alt=""
                    className="w-200"
                  />
                  <h1>HAVIT HV-G92 Gamepad</h1>
                  <p className="font-medium">$180</p>
                </div>
                <div>
                  <img
                    src="src/assets/Frame 571.png"
                    id="one"
                    alt=""
                    className="w-200"
                  />
                  <h1>HAVIT HV-G92 Gamepad</h1>
                  <p className="font-medium">$180</p>
                </div>
              </div>
            </div>
              </div>


              <div className="mt-72 max-w-[900px] mx-auto h-full">
          <h1 className="text-6xl mt-40 ml-80 font-medium animate-lePeek">All Shoes</h1>
          <img
              src="src/assets/Frame 712.png"
              id="one"
              alt=""
              className="w-full"
          />
      </div>




      {/* Search Section */}
      <div>
      <div className="mt-60 max-w-[900px] mx-auto h-full ">
        <div className="flex justify-between gap-5 text-center items-center">
          <div className="flex flex-col items-center">
            <img
              src="src/assets/Services (1).png"
              id="one"
              alt=""
               className="w-200 animate-lePeek "
            />
               <h1 className="font-medium animate-lePeek ">FREE AND FAST DELIVERY</h1>
               <p className=" animate-lePeek ">Free delivery for all orders over $140</p>
          </div>
          <div className="flex flex-col items-center ">
            <img 
              src="src/assets/Services (2).png"
              id="one"
              alt=""
              className="w-200 animate-lePeek"
            />
               <h1 className="font-medium animate-lePeek ">FREE AND FAST DELIVERY</h1>
               <p className=" animate-lePeek ">Free delivery for all orders over $140</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="src/assets/Services.png"
              id="one"
              alt=""
            className="w-200 animate-lePeek"
            />
            <h1 className="font-medium animate-lePeek ">FREE AND FAST DELIVERY</h1>
            <p className=" animate-lePeek ">Free delivery for all orders over $140</p>
          </div>
        </div>
      </div>      
    </div>


    </div>

  );
}

export default Home;
