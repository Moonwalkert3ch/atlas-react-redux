import React from "react";
// import { DeleteListButton } from "./DeleteListButton";

export const Card: React.FC = () => {
  const handleDelete = () => {
    alert("Delete card")
  };

  return(
      <div className="card group/card m-3 flex min-h-24 flex-col items-start rounded bg-off-white-light px-4 py-2 text-blue">
        <h5 className="my-2 flex w-full items-end justify-between text-xl font-black">
          <span>Lorem ipsum dolor</span>
            
          </h5>
          <p className="mt-0 text-left">
            Sed viverra, diam eu facilisis bibendum, ante orci placerat quam
          </p>
        </div>
    )
}