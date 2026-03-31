"use client";
import DomeGallery from "@/components/DomeGallery";
import Header from "@/components/Header";
import { TattooImages } from "@/contants/tattoo_images";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="w-screen h-[90vh]">
        <DomeGallery
          images={TattooImages}
          fit={0.8}
          minRadius={600}
          maxVerticalRotationDeg={0}
          segments={34}
          dragDampening={2}
          grayscale
        />
      </main>
    </div>
  );
}
