import React from "react";

function StatCard({ desc, stat }) {
  return (
    <div>
      <div className="m-10 w-32 rounded-xl bg-blue-600 ring-6 hover:cursor-pointer hover:bg-yellow-500">
        <p className="ml-3 pt-2 text-sm">{desc}</p>
        <div className="flex">
          <p className="ml-4 pb-2 text-2xl font-extrabold">{stat}</p>
          <div className="m-5 my-2 h-4 w-4 rounded-full border-2 border-white bg-green-400"></div>
        </div>
      </div>
    </div>
  );
}

export default StatCard;