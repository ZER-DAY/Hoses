"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";

export default function SwiperGallery({ images }: { images: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null);

  return (
    <div className="w-full max-w-[490px] p-6 mx-auto">
      {/* معرض الصور الرئيسي */}
      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        className="gallery-top mb-4 w-[500px]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt={`House image ${index + 1}`}
              width={800}
              height={400}
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* الصور المصغرة */}
      <div className="grid grid-cols-2 gap-4 w-[500px] h-[400px]">
        {images.slice(0, 4).map((image, index) => (
          <div key={index} className="rounded-md overflow-hidden shadow-md">
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={500} // عرض الصورة بحجم أكبر
              height={400} // ارتفاع أكبر لجودة أفضل
              quality={90} // تحسين جودة الصورة إلى 90%
              className="w-full h-full object-cover cursor-pointer border border-gray-300 hover:border-blue-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
