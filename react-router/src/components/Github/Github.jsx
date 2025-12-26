import { useLoaderData } from "react-router-dom";

const Github = () => {
    const data= useLoaderData();

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
export default Github