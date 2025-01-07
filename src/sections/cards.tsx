"use client";

import Card from "@/components/Card";
import houseDetails from "@/data/houses";
import { useRouter } from "next/navigation";

const Cards = () => {
  const router = useRouter();

  return (
    <section className="pt-8 pb-20 md:pt-10 md:pb-16 bg-gray-100">
      {/* الحاوية الرئيسية */}
      <div className="container mx-auto max-w-6xl bg-white shadow-md rounded-lg overflow-hidden p-6">
        {/* عنوان القسم */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">
            Популярные проекты
          </h1>
          <p className="text-gray-600 mt-2">
            В разделе представлен{" "}
            <span className="text-blue-500 font-semibold">ТОП-20</span> проектов
            сезона 2024.
          </p>
        </div>

        {/* البطاقات */}
        <div className="flex flex-row flex-wrap justify-start gap-6">
          {Object.entries(houseDetails).map(([id, house]) => (
            <Card
              key={id}
              id={id}
              title={house.title}
              rooms={house.specs.rooms}
              size={`${house.specs.area} м²`}
              price={`${house.specs.price} руб.`}
              imageUrl={house.images[0]}
              label="ВЕНТИЛЯЦИЯ В ПОДАРОК"
              labelColor="bg-[#FFD76F] text-[#1C1C1C]"
              onClick={() => router.push(`/details/${id}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
