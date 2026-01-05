import {
  Briefcase,
  MapPin,
  Clock,
  Check,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import CustomButton from "@/components/global/Button";

const jobs = [
  {
    title: "CloudWave",
    rank: "Senior Manager",
    salary: "Salary;$95k-130k",
    location: "Austin,TX",
    type: ["Full Time", "Remote", "OnSite"],
  },
  {
    title: "NovaHire",
    rank: "Marketing Specialist",
    salary: "Salary;$60k-90k",
    location: "Chicage, lt",
    type: ["Full Time", "Hybrid", "SEO"],
  },
  {
    title: "TalentBridge",
    rank: "Junior Financial Advisor",
    salary: "Salary;$50k-110k",
    location: "Boston,MA",
    type: ["Full Time", "Remote", "Finance"],
  },
  {
    title: "Atica Ltd",
    rank: "Digital Marketer",
    salary: "Salary;$75k-120k",
    location: "San Diego,CA",
    type: ["Full Time", "Hybrid", "Branding"],
  },
  {
    title: "PixelForge",
    rank: "Web Developer",
    salary: "Salary;$95k-120k",
    location: "Seattle,WA   ",
    type: ["Full Time", "Remote", "Creative"],
  },
  {
    title: "CodeSphere",
    rank: "UI/UX Designer",
    salary: "Salary;$85k-130k",
    location: "Denver,CO",
    type: ["Full Time", "Remote", "Product"],
  },
];

const buttonColors = ["bg-lime-950"];

const LatestJob = () => {
  return (
    <section className="py-24 bg-gray-100 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-6">
        <div className="flex gap-3">
          <Sparkles size={22} className="text-black" />
          <span className="font-semibold text-black">Latest job</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-4xl font-bold text-gray-900 flex-shrink-0">
            Find Your
            <span className="text-lime-500"> Latest Job</span>
          </h2>

          <p className="text-gray-700 flex-1 text-left md:mx-6">
            Explore exciting opportunities from trusted companies and take the
            next step in your career today.
          </p>

          <div className="flex-shrink-0">
            <CustomButton
              text="Explore More"
              icon={ArrowUpRight}
              bgColor="bg-lime-500"
              textColor="text-white"
              hoverColor="hover:bg-lime-600"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job, i) => (
            <div key={i} className="bg-white rounded-3xl p-4 shadow-inner">
              <div className="relative rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
                <div className="absolute top-0 right-0 flex items-center gap-2 bg-green-600 px-3 py-2 shadow text-white text-xs font-semibold rounded-bl-xl z-10">
                  <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-600" />
                  </span>
                  Verified
                </div>

                <div className="bg-gradient-to-b from-lime-500 to-lime-900 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-amber-900 rounded-full flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-lg text-white">
                      {job.title}
                    </h4>
                  </div>

                  <p className="text-sm text-white mb-4">{job.rank}</p>

                  <div className="flex gap-3">
                    {job.type.map((btn, idx) => (
                      <button
                        key={idx}
                        className={`${
                          buttonColors[idx % buttonColors.length]
                        } text-white text-xs py-2 rounded-xl flex-1 shadow`}
                      >
                        {btn}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-4 mt-2 flex justify-between items-center rounded-b-2xl shadow-inner">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-lime-600" />
                      <span className="text-sm font-medium text-stone-700">
                        {job.salary}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-lime-600" />
                      <span className="text-sm text-stone-500">
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <button className="bg-lime-500 text-white text-xs px-3 py-2 rounded-lg font-semibold shadow hover:bg-lime-600 transition">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestJob;
