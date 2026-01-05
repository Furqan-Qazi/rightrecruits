import Image from "next/image";
import {
  Sparkles,
  Wrench,
  MessageCircle,
  Eye,
  ArrowUpRight,
} from "lucide-react";
import CustomButton from "@/components/global/Button";

const Innovating: React.FC = () => {
  return (
    <section className="relative w-full min-h-[580px] flex items-start justify-center pt-10 md:pt-0 mt-10">
      <div className="max-w-6xl w-full px-6 flex flex-col md:flex-row items-start justify-center gap-20">
        <div className="relative w-full md:w-1/2 h-[530px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/men.jpg"
            alt="Innovating"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute mt-10 top-0 right-0 -translate-y-1/2 text-black p-5 shadow-lg z-20 w-44 rounded-l-2xl flex items-center justify-between bg-gradient-to-b from-lime-500 to-lime-900">
            <Wrench size={24} />
            <div className="flex flex-col items-end">
              <h4 className="font-bold text-lg mr-12 text-white">85%</h4>
              <p className="text-sm text-white">Sales Growth</p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 bg-lime-400 text-black p-3 shadow-lg z-20 w-44 rounded-tr-2xl flex items-center justify-between bg-gradient-to-b from-lime-500 to-lime-900">
            <MessageCircle size={24} className="text-white ml-4" />
            <div className="flex flex-col items-end">
              <h4 className="font-bold text-lg text-white mr-10 mt-4">
                2,000+
              </h4>
              <p className="text-sm text-white/80 mr-14">Clients</p>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 bg-green-900 text-white p-10 shadow-lg z-20 w-52 rounded-tl-2xl rounded-br-2xl flex flex-col items-start gap-3 bg-gradient-to-b from-lime-500 to-lime-900">
            <h4 className="font-bold text-lg">10K+</h4>
            <h4 className="font-bold text-lg">Fast Hiring</h4>
            <div className="flex items-center -space-x-3">
              <img
                src="/images/men.jpg"
                alt="Team member 1"
                className="relative z-10 w-11 h-11 rounded-full border-2 border-white shadow-md object-cover hover:scale-110 transition-all duration-200"
              />
              <img
                src="/images/men.jpg"
                alt="Team member 2"
                className="relative z-20 w-11 h-11 rounded-full border-2 border-white shadow-md object-cover hover:scale-110 transition-all duration-200"
              />
              <img
                src="/images/men.jpg"
                alt="Team member 3"
                className="relative z-30 w-11 h-11 rounded-full border-2 border-white shadow-md object-cover hover:scale-110 transition-all duration-200"
              />
              <div
                className="relative z-40 w-11 h-11 rounded-full bg-lime-900 border-2 border-white shadow-md flex items-center justify-center hover:scale-110 transition-all duration-200"
                aria-label="Add more"
              >
                <span className="text-black font-bold leading-none">+</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-start gap-5 text-left mt-0">
          <div className="flex items-center gap-3 text-lime-500">
            <Sparkles size={22} className="text-black" />
            <span className="font-semibold text-black">About Us</span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900">
            Innovating Recruitment for a <br />
            <span className="text-lime-500">Better Tomorrow Together</span>
          </h2>

          <p className="text-gray-600">
            With years of experience, we help businesses grow and individuals
            find their dream careers with confidence. Our dedicated team ensures
            every placement creates long-term success for both employers and
            candidates.
          </p>

          <div className="flex gap-6 w-full max-w-5xl mx-auto">
            <div className="flex flex-col items-start bg-stone-100 text-black p-6 rounded-2xl shadow-lg w-64">
              <div
                className="relative w-12 h-12 rounded-full bg-amber-900 border-2 border-white shadow-md flex items-center justify-center mb-4"
                aria-label="Add more"
              >
                <Eye size={24} className=" text-black" />
              </div>
              <h4 className="font-semibold text-lg text-amber-900 mb-2">
                Our Vision
              </h4>
              <p className="text-stone-700 text-sm">
                To empower business and individuals by creating meaningful
                solutions that drive growth and long-term success.
              </p>
            </div>

            <div className="flex flex-col items-start bg-stone-100 text-white p-6 rounded-2xl shadow-lg w-64">
              <div
                className="relative w-12 h-12 rounded-full bg-amber-900 border-2 border-white shadow-md flex items-center justify-center mb-4"
                aria-label="Add more"
              >
                <span className="text-black font-bold text-lg">+</span>
              </div>

              <h4 className="font-semibold text-lg text-amber-900 mb-2">
                Our Mission
              </h4>
              <p className="text-stone-700 text-sm">
                To deliver trusted recruitment solutions that match the right
                talent with the right opportunities for lasting impact.
              </p>
            </div>
          </div>

          <CustomButton
            text="More About Us"
            icon={ArrowUpRight}
            iconPosition="right"
            bgColor="bg-lime-500"
            textColor="text-white"
            hoverColor="hover:bg-lime-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Innovating;
