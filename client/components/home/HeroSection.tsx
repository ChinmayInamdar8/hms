import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center mt-20">
        <Image
          src={"/banner.jpg"}
          alt=""
          className="object-cover -z-10"
          fill
          priority
        />
        <div className="w-150 flex flex-col justify-center items-center bg-black/40 p-2 md:p-6 rounded-lg">
          <h1 className="text-2xl md:text-4xl text-center text-white">
            Protect Your Health
          </h1>
          <p className=" hidden md:block mt-5 text-center text-white">
            Our medical clinic provides quality care for the entire family while maintaining a personable atmosphere best services.
          </p>
        </div>
      </div>
    </div>
  );
}
