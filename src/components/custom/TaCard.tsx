import React from "react";
import Link from "next/link";
import { Star, User2Icon } from "lucide-react";

interface TaCardProps {
  name: string,
  major: string,
  email: string,
  stars: string,
  img: string 
}

const TaCard: React.FC<TaCardProps> = ({ name, major, email, stars, img }) => {
  return (
    <div className="flex flex-col w-full min-w-0 border border-gray-700 rounded-lg dark:border-gray-800 overflow-hidden hover:opacity-80 transition-all">
      <Link className="flex-1 min-h-[200px]" href="#">
        <img
          alt="Image"
          className="object-cover w-full h-40"
          height="200"
          src={img}
          style={{
            aspectRatio: "400/200",
            objectFit: "cover",
          }}
          width="400"
        />
        <div className="p-4 grid gap-1">
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{major}</p>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </Link>
      <div className="flex items-center justify-between p-4 border-t text-sm">
        <div className="flex flex-row items-between gap-1">
          <div className="flex flex-row">
            <Star className="w-4 h-4 fill-primary" />
            <span className="mx-2">Total stars: {stars}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaCard;
