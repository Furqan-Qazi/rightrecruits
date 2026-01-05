import Image from "next/image";
import { Eclipse, Wrench, Info, Briefcase, Blend } from "lucide-react";
import CustomButton from "@/components/global/Button";

const SuccessfulStories: React.FC = () => {
  return (
    <>
      <section className="relative w-full h-[700px]">
        <Image
          src="/images/success-bg.jpg"
          alt="Successful Stories Background"
          fill
          className="object-cover object-top z-0"
          priority
        />

        <div className="absolute inset-0 max-w-6xl mx-auto px-6 flex justify-between items-center z-10">
          <div className="w-full md:w-1/2 lg:w-2/5 text-left">
            <p className="ml-7 text-white">500+ satisfied clients worldwide</p>
            <h2 className="text-4xl font-bold mb-4 mt-5 text-white">
              Turning Job Seekers into{" "}
              <span className="text-lime-300">Success Stories</span>
            </h2>
            <p className="mt-7 text-white">
              We connect business with skilled professionals through{" "}
              <strong>data-driven</strong> <br />
              hiring strategies and personalized recruitment service that <br />
              deliver real results
            </p>

            <div className="flex justify-between items-center mt-4">
              <CustomButton
                text="Get Started"
                bgColor="bg-lime-500"
                textColor="text-black"
                hoverColor="hover:bg-lime-400"
              />

              <div className="flex flex-col items-start gap-1 text-lg font-medium">
                <h4 className="font-semibold text-white ml-10">Call Us Now</h4>
                <div className="flex items-center gap-2">
                  <span className="text-lime-300 text-2xl">📞</span>
                  <span className="text-white">+1 234 567 890</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative ml-20">
            <div className="flex flex-col mt-20 md:flex-row items-center gap-6 max-w-4xl mx-auto bg-gradient-to-b from-lime-500 to-lime-900 p-6 rounded-lg overflow-hidden z-10">
              <div className="w-[50%] flex flex-col justify-start text-white">
                <h3 className="text-2xl font-semibold mb-2">Our Achievers</h3>
                <p className="text-lg leading-7">
                  Successfully connected over 2,000 companies with exceptional
                  talent.
                </p>
                <div className="mt-6">
                  <p className="text-white/80">
                    Reduce hiring time by 40% and build stronger, future-ready
                    teams across industries.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-0 w-[300px] h-[400px] rounded-lg overflow-hidden z-20">
              <Image
                src="/images/men.jpg"
                alt="Our Achiever"
                fill
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-gradient-to-b from-lime-400 to-lime-800 py-6 rounded-b-3xl -mt-16 z-10 relative">
        <div className="max-w-6xl mx-auto px-6">
          <ul className="flex justify-center gap-20 text-white font-bold">
            <li className="flex items-center gap-2">
              <Eclipse size={18} />
              <span>logopisum</span>
            </li>
            <li className="flex items-center gap-2">
              <Wrench size={18} />
              <span>logopisum</span>
            </li>
            <li className="flex items-center gap-2">
              <Info size={18} />
              <span>logopisum</span>
            </li>
            <li className="flex items-center gap-2">
              <Briefcase size={18} />
              <span>logopisum</span>
            </li>
            <li className="flex items-center gap-2">
              <Blend size={18} />
              <span>logopisum</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SuccessfulStories;
