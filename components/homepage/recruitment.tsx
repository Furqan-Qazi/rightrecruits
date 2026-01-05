import {
  CardSim,
  Sparkles,
  Factory,
  BetweenHorizontalStart,
} from "lucide-react";

const Recruitment: React.FC = () => {
  return (
    <section className="w-full mt-10 flex justify-center">
      <div className="w-full max-w-5xl flex flex-col gap-10 items-center">
        <div className="flex items-center justify-center gap-3">
          <Sparkles size={22} className="text-black" />
          <span className="font-semibold text-black">Why Choose Us</span>
        </div>

        <h2 className="text-4xl font-bold text-gray-900 text-center">
          Why Businesses <br />
          <span className="text-lime-500">Choose Our Expertise</span>
        </h2>

        <div className="flex gap-8 justify-center w-full">
          {/* BOX 1 */}
          <div className="flex flex-col gap-3 bg-stone-100 p-6 rounded-2xl shadow-md w-1/2 text-center">
            <h1 className="text-2xl font-bold mt-7">
              We Make Recruitment Simple
            </h1>

            <p className="text-stone-900 text-sm">
              We help businesses and individuals grow by providing meaningful
              recruitment solutions that create long-term success.
            </p>
            <div className="flex justify-center mt-8">
              <div className="flex items-center relative">
                <img
                  src="/images/men.jpg"
                  alt="Team member 1"
                  className="w-40 h-49 rounded-2xl object-cover shadow-lg border-2 border-lime-500 -rotate-6 translate-x-8"
                />

                <div className="relative z-10">
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-lime-500 text-white rounded-xl shadow-lg px-6 py-2 min-w-[150px] flex flex-col items-center text-center">
                    <h6 className="text-sm font-bold leading-tight">
                      James Miller
                    </h6>
                    <p className="text-[11px] opacity-90">
                      Senior Hiring Consultant
                    </p>
                  </div>
                  <img
                    src="/images/men.jpg"
                    alt="Team member 2"
                    className="w-40 h-49 rounded-2xl object-cover shadow-xl border-2 border-lime-600"
                  />
                </div>
                <img
                  src="/images/men.jpg"
                  alt="Team member 3"
                  className="w-40 h-49 rounded-2xl object-cover shadow-lg border-2 border-lime-500 rotate-6 -translate-x-8"
                />
              </div>
            </div>
          </div>

          {/* BOX 2 */}
          <div className="bg-stone-100 p-6 rounded-2xl shadow-md w-1/2">
            <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow mb-3 ml-8">
              <div className="w-10 h-10 bg-lime-500 rounded-full flex items-center justify-center">
                <CardSim size={22} className="text-black" />{" "}
              </div>
              <p className="text-sm font-medium text-stone-700">
                Trusted Recruitment Process
              </p>
            </div>

            <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow mb-3 ml-16">
              <div className="w-10 h-10 bg-lime-500 rounded-full flex items-center justify-center">
                <BetweenHorizontalStart size={22} className="text-black" />{" "}
              </div>
              <p className="text-sm font-medium text-stone-700">
                Experienced Hiring Consultants
              </p>
            </div>

            <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow mb-5 ml-8">
              <div className="w-10 h-10 bg-lime-500 rounded-full flex items-center justify-center">
                <Factory size={22} className="text-black" />{" "}
              </div>
              <p className="text-sm font-medium text-stone-700">
                Fast & Reliable Talent Matching
              </p>
            </div>

            <h1 className="text-2xl font-bold ml-12  mt-7">
              Streamline Your Hiring Process
            </h1>

            <p className="text-stone-700 text-sm text-center mt-3">
              Our trolled solutions simplfy recruitment, helping you top talent
              quickly and efficiently while ensuring a perfect for your team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recruitment;
