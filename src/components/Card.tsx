import { DeleteCardButton } from "./DeleteCardButton";

type CardPropTypes = {
  title: string;
  description: string;
};


export function Card({title, description}: CardPropTypes) {
  return(
      <div className="card group/card m-3 flex min-h-24 flex-col items-start rounded bg-off-white-light px-4 py-2 text-blue">
        <h5 className="my-2 flex w-full items-end justify-between text-xl font-black">
          <span>{title}</span>
          <DeleteCardButton />            
          </h5>
          <p className="mt-0 text-left">
            {description}
          </p>
        </div>
  );
}