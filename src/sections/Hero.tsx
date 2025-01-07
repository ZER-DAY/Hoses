"use client";

import Link from "next/link";
import houseDetails from "@/data/houses";

const Hero = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(houseDetails).map(([id, house]) => (
          <Link key={id} href={`/details/${id}`}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer">
              <img
                src={house.images[0]}
                alt={house.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold">{house.title}</h2>
                <p>{house.specs.area}</p>
                <p>{house.specs.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hero;
