import { Sparkles, MoveUp, ChevronDown } from "lucide-react";

const Question = () => {
  return (
    <section className="py-24  bg-gray-200 w-full">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4 text-center">
        <div className="flex items-center justify-center gap-3">
          <Sparkles size={22} className="text-black" />
          <span className="font-semibold text-black">FAQ's</span>
        </div>

        <h2 className="text-4xl font-bold text-gray-900">
          Got Questions? <br />
          <span className="text-lime-500">We're Here to Help</span>
        </h2>

        <p className="text-gray-700 max-w-2xl">
          Whether you're looking for your next career opportunity or seeking the
          perfect candidate, our FAQ section provides clear answers and helpful
          guidance to make the process smooth & simple.
        </p>

        <div className="w-full max-w-5xl flex gap-6 justify-center mt-2">
          {/* BOX 1 */}
          <div className="flex flex-col gap-4  p-6 rounded-2xl  w-[48%]">
            <div className="flex items-center justify-between bg-gradient-to-b from-lime-500 to-lime-900 rounded-xl shadow px-5 py-3 w-full">
              <p className="text-sm font-medium text-white">
                How does your recruitment process work?
              </p>
              <MoveUp size={22} className="text-white" />
            </div>

            <p className="text-stone-900 text-sm text-left px-2">
              <span className="block">
                We start by understanding your business needs, then source,
                screen, and shortlist candidates who best match the job
                requirements. Finally, we coordinate interviews and ensure a{" "}
              </span>
              smooth hiring process.
            </p>

            <div className="flex items-center justify-between bg-gradient-to-b from-lime-500 to-lime-900 rounded-xl shadow px-5 py-3 w-full">
              <p className="text-sm font-medium text-white">
                Do you charge candidates any fees?
              </p>
              <ChevronDown size={22} className="text-white" />
            </div>

            <div className="flex items-center justify-between bg-gradient-to-b from-lime-500 to-lime-900 rounded-xl shadow px-5 py-3 w-full">
              <p className="text-sm font-medium text-white">
                Which industries do you specialize in?
              </p>
              <ChevronDown size={22} className="text-white" />
            </div>

            <div className="flex items-center justify-between bg-gradient-to-b from-lime-500 to-lime-900 rounded-xl shadow px-5 py-3 w-full">
              <p className="text-sm font-medium text-white">
                Do you offer remote or international job placement?
              </p>
              <ChevronDown size={22} className="text-white" />
            </div>
          </div>

          {/* BOX 2 */}
          <div className="flex flex-col gap-4  p-6 rounded-2xl  w-[48%]">
            <div className="flex items-center justify-between bg-gradient-to-b from-lime-500 to-lime-900 rounded-xl shadow px-5 py-3 w-full">
              <p className="text-sm font-medium text-white">
                What steps do you follow to find the right candidates?
              </p>
              <MoveUp size={22} className="text-white" />
            </div>

            <p className="text-stone-900 text-sm text-left px-2">
              We being by analyzing your company's goals and job requirements
              then identity and evalute potential candidate.After careful
              screeing, we connect you with the most suitbale professionals and
              manage the entire interview process seamlessly.
            </p>

            <div className="flex items-center justify-between bg-gradient-to-b from-lime-500 to-lime-900 rounded-xl shadow px-5 py-3 w-full">
              <p className="text-sm font-medium text-white">
                Can you help with temporary or contract staffing?
              </p>
              <ChevronDown size={22} className="text-white" />
            </div>

            <div className="flex items-center justify-between bg-gradient-to-b from-lime-500 to-lime-900 rounded-xl shadow px-5 py-3 w-full">
              <p className="text-sm font-medium text-white">
                What makes your agnecy different from others?
              </p>
              <ChevronDown size={22} className="text-white" />
            </div>
            <div className="flex items-center justify-between bg-gradient-to-b from-lime-500 to-lime-900 rounded-xl shadow px-5 py-3 w-full">
              <p className="text-sm font-medium text-white">
                How can I register as a candidate?
              </p>
              <ChevronDown size={22} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
