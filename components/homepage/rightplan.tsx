import { Sparkles, Check } from "lucide-react";
import CustomButton from "@/components/global/Button";

const tickItemsBox1 = [
  "Customize s=hiring strategy",
  "Dedicated recruiter support",
  "Up to 5 job posting per months",
  "Weekly candidate progress reports ",
  "Email and live chart support ",
];

const tickItemsBox2 = [
  "All plan from Basic plan",
  "Advanced candidate sourcing ",
  " Unlimited job postings",
  "Priority onboarding and recrulter support",
  "Comprehensive hiring & perfomance reports    ",
];

const Rightplan = () => {
  return (
    <section className="py-24 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4 text-center">
        <div className="flex items-center justify-center gap-3">
          <Sparkles size={22} className="text-black" />
          <span className="font-semibold text-black">Our Pricing Plans</span>
        </div>

        <h2 className="text-4xl font-bold text-gray-900">
          Choose the right plan for your <br />
          <span className="text-lime-500">recruitment needs</span>
        </h2>

        <p className="text-gray-700 max-w-2xl">
          Whether you need one-time recruitment help or ongoing hiring
          management, we've got flexible plans tailored to your business goals.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-12">
        {/* BOX 1 */}
        <div className="flex flex-col gap-4 bg-stone-100 p-6 rounded-2xl shadow-md w-full md:w-[45%] ">
          <div className="flex gap-3 ">
            <Sparkles size={22} className="text-amber-900" />
            <h1 className="font-semibold text-amber text-lg">Basic Plan</h1>
          </div>

          <p className="text-stone-900 text-sm max-w-[350px]">
            We help businesses and individuals grow by providing meaningful
            recruitment solutions that create long-term success.
          </p>

          <h2 className="text-2xl font-bold mt-2 ">$199/month</h2>

          <div className="mt-3 flex flex-col gap-2 items-start">
            {tickItemsBox1.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center border-2 border-amber-900 rounded-sm">
                  <Check className="w-3 h-3 text-amber-900" />
                </div>

                <span className="text-sm text-stone-700 ml-3">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center w-full">
            <div className="w-full max-w-md">
              <CustomButton
                text="Choose Plan"
                bgColor="bg-lime-500 w-full text-center"
                textColor="text-white"
                hoverColor="hover:bg-lime-600"
              />
            </div>
          </div>
        </div>

        {/* BOX 2 */}
        <div className="flex flex-col gap-4 bg-stone-100 p-6 rounded-2xl shadow-md w-full md:w-[45%] ">
          <div className="flex gap-3 ">
            <Sparkles size={22} className="text-amber-900" />
            <h1 className="font-semibold text-amber text-lg">Pro Plan</h1>
          </div>

          <p className="text-stone-900 text-sm max-w-[350px]">
            Designed for growing agencies and business looking to scale their
            recruitment with advanced tools and dedicated assistance .
          </p>

          <h2 className="text-2xl font-bold mt-2 ">$499/month</h2>

          <div className="mt-3 flex flex-col gap-2 items-start">
            {tickItemsBox1.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center border-2 border-amber-900 rounded-sm">
                  <Check className="w-3 h-3 text-amber-900" />
                </div>
                <span className="text-sm text-stone-700 ml-3">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center w-full">
            <div className="w-full max-w-md">
              <CustomButton
                text="Choose Plan"
                bgColor="bg-lime-500 w-full"
                textColor="text-white"
                hoverColor="hover:bg-lime-600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rightplan;
