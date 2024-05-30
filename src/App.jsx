import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchAdvice = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(response.data.slip);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <>
      <div className="bg-[#202632] w-full h-screen flex justify-center items-center">
        <div className="w-[35%] min-h-[45%] bg-[#313a49] rounded-xl p-5 relative flex flex-col items-center">
          {loading ? (
            <div className="text-[#ccdee7] mt-4 text-center text-[28px]">
              Loading...
            </div>
          ) : (
            <>
              <div className="text-[#53fea9] text-[14px] text-center">
                Advice #{advice.id}
              </div>
              <div className="text-[#ccdee7] mt-4 text-center text-[28px] w-[100%] px-[10%]">
                "{advice.advice}"
              </div>
              <div className="mt-3">
                <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
                    <g transform="translate(212)" fill="#CEE3E9">
                      <rect width="6" height="16" rx="3" />
                      <rect x="14" width="6" height="16" rx="3" />
                    </g>
                  </g>
                </svg>
              </div>
            </>
          )}
          <div
            className="hover:cursor-pointer absolute w-[60px] h-[60px] rounded-full bg-[#53fea9] bottom-[-30px] flex justify-center items-center"
            onClick={fetchAdvice}
          >
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                fill="#202733"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
