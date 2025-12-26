import React, { useEffect, useState } from "react";

const Github = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/smarikaa17")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setdata(data);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-center m-4 bg-gray-400 p-4  text-2xl text-white">
      Github followers:{data.followers}
      <img
        className="p-3"
        src={data.avatar_url}
        alt="Git profile"
        width={300}
      />
    </div>
  );
};

export default Github;
