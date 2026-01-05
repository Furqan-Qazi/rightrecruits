import {
  Sparkles,
  ArrowUpRight,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";
import CustomButton from "@/components/global/Button";

const jobs = [
  {
    name: "Mark Renyolds",
    rank: "Recruiter Manager",
    image: "/images/men1.jpg",
    bgColor: "bg-gray-300",
  },
  {
    name: "Emma Davis",
    rank: "Talent lead",
    image: "/images/women1.jpg",
    bgColor: "bg-gray-300",
  },
  {
    name: "Alex Carter",
    rank: "HR Executive",
    image: "/images/men3.jpg",
    bgColor: "bg-gray-300",
  },
];

const socials = [Facebook, Twitter, Youtube, Linkedin];

const Dedicated = () => {
  return (
    <section className="py-24 mt-10">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-6">
        <div className="flex gap-3 items-center">
          <Sparkles size={22} />
          <span className="font-semibold">Our Team</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="text-4xl font-bold text-gray-900">
            Meet Our Dedicated <br />
            <span className="text-lime-500">Expert Team Member</span>
          </h2>

          <p className="text-gray-700 max-w-md">
            Our experienced recruiters and HR specialists connect the right
            talent with the right opportunity.
          </p>

          <CustomButton
            text="View All Member"
            icon={ArrowUpRight}
            bgColor="bg-lime-500"
            textColor="text-white"
            hoverColor="hover:bg-lime-600"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto px-6 mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
          >
            {/* Card Background Color */}
            <div
              className={`absolute inset-0 ${job.bgColor} z-0 rounded-2xl`}
            ></div>

            {/* Image Section */}
            <div className="relative h-64 z-10 m-4 rounded-2xl overflow-hidden">
              <img
                src={job.image}
                alt={job.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />

              {/* Social Icons */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                {socials.map((Icon, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 bg-amber-900 rounded-full flex items-center justify-center text-white hover:bg-lime-600 cursor-pointer"
                  >
                    <Icon size={16} />
                  </div>
                ))}
              </div>
            </div>

            {/* Content Box BELOW Image */}
            <div className="m-4 border border-gray-300 rounded-xl p-4 flex items-center justify-between bg-white shadow-sm relative z-20">
              <div>
                <h3 className="font-semibold text-gray-900">{job.name}</h3>
                <p className="text-gray-600 text-sm">{job.rank}</p>
              </div>
              <div className="w-10 h-10 bg-amber-900 rounded-full flex items-center justify-center text-white">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative w-11/12 max-w-6xl h-[22rem] rounded-2xl mt-20 mx-auto ">
        <img
          src="/images/meeting2.jpg"
          alt="Background"
          className="absolute inset-0 m-auto w-full h-full object-cover z-0"
        />
        <div className="absolute top-1/2 left-12 z-10 max-w-md transform -translate-y-1/2">
          <h2 className="text-4xl font-bold text-white leading-snug">
            Ready to Take Next Step in Your <br />
            Career?
          </h2>

          <p className="text-white">
            Find the right talent faster and build a stronger team with us.{" "}
            <br />
            Let's make your hiring process simple, smart, and successful.
          </p>

          <CustomButton
            text="Apply Now"
            icon={ArrowUpRight}
            bgColor="bg-lime-500 mt-4"
            textColor="text-white"
            hoverColor="hover:bg-lime-600"
          />
        </div>

        <div className="absolute bottom-0 -right-10 w-[60%] z-20">
          <img
            src="/images/without_background.png"
            alt="Team Member"
            className="h-[200%] w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Dedicated;
