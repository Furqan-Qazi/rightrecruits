import {
  Sparkles,
  ArrowUpRight,
  User,
  FolderOpen,
  Phone,
  Mail,
} from "lucide-react";
import CustomButton from "@/components/global/Button";

const jobs = [
  {
    iconname1: "anik",
    iconname2: "Uncategorized",
    heading:
      "Remote Hiring: Connecting Global Talent with Local Opportunities ",
    description: "The world of work is now truly borderless Discover...",
    image: "/images/men1.jpg",
    bgColor: "bg-white-300",
    date: "22",
    month: "Dec",
  },
  {
    iconname1: "anik",
    iconname2: "Uncategorized",
    heading: "How Recruitmnet Agencies Save Time and Boost Efficiency ",
    description:
      "Partnering with a recruitment agency can transform your hiring...",
    image: "/images/women1.jpg",
    bgColor: "bg-white-300",
    date: "15",
    month: "Nov",
  },
  {
    iconname1: "anik",
    iconname2: "Uncategorized",
    heading: "Build a Stronger Employer Brand in a Competitive...",
    description: "In today's job landscape, Your brand speaks louder then... ",
    image: "/images/men3.jpg",
    bgColor: "bg-white-300",
    date: "30",
    month: "Oct",
  },
];

const Hiring = () => {
  return (
    <section className="py-24  relative">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <div className="flex gap-3 items-center">
          <Sparkles size={22} />
          <span className="font-semibold">Blog & News</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="text-4xl font-bold text-gray-900">
            From Hiring Trends to <br /> Career Growth
            <span className="text-lime-500"> Blog</span>
          </h2>

          <p className="text-gray-700 max-w-md">
            Explore our blog for expert advice on job searching <br /> interview
            preparation, hiring trends, and everything <br /> you needs to
            advice your career or find the right talent .
          </p>

          <CustomButton
            text="View All"
            icon={ArrowUpRight}
            bgColor="bg-lime-500"
            textColor="text-white"
            hoverColor="hover:bg-lime-600"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="mt-7">
        <div className="bg-gray-50 max-w-6xl mx-auto px-6 py-7 rounded-2xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow hover:shadow-xl transition bg-white flex flex-col h-full"
              >
                {/* Background */}
                <div
                  className={`absolute inset-0 ${job.bgColor} z-0 rounded-2xl`}
                ></div>

                {/* Image */}
                <div className="relative h-64 z-10 m-4 rounded-2xl overflow-hidden">
                  <img
                    src={job.image}
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-2xl" />

                  {/* Date Badge */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 flex items-center">
                    <div className="bg-lime-600 shadow-lg px-4 py-2 flex flex-col items-center ">
                      <span className="text-sm font-bold text-white">
                        {job.date}
                      </span>
                      <span className="text-xs text-white">{job.month}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="m-4 p-5 bg-white relative z-20 flex flex-col flex-grow">
                  <div className="flex items-center gap-8 mb-4">
                    <div className="flex items-center gap-2 text-lime-500">
                      <User size={18} />
                      <span className="font-semibold">{job.iconname1}</span>
                    </div>

                    <div className="flex items-center gap-2 text-lime-500">
                      <FolderOpen size={18} />
                      <span className="font-semibold">{job.iconname2}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {job.heading}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {job.description}
                  </p>

                  <button className="mt-auto self-start bg-lime-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-lime-600 transition">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative w-full h-[26rem] rounded-2xl mt-20 border overflow-hidden">
        <img
          src="/images/meeting2.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="ml-9 absolute top-1/2 left-12 transform -translate-y-1/2 w-1/3 max-w-md bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 px-6 py-4 flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
            We Help Build <br />
            Bright Careers?
          </h2>

          <p className="text-white text-sm md:text-base">
            By connecting ambition with opportunity, we empower <br />
            individuals to achieve their professional goals and help <br />
            companies discover the right talent to grow their <br /> teams.
          </p>

          <div className="flex gap-4 mt-2">
            <CustomButton
              text="Find Jobs"
              icon={ArrowUpRight}
              bgColor="bg-lime-500"
              textColor="text-white"
              hoverColor="hover:bg-lime-600"
            />
            <CustomButton
              text="Explore Service"
              icon={ArrowUpRight}
              bgColor="bg-amber-800"
              textColor="text-white"
              hoverColor="hover:bg-gray-200"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-9 relative">
        {/* BOX 1 */}
        <div className="flex flex-col gap-4  p-6  w-full md:w-[45%] h-full">
          <div className="flex gap-3 ">
            <Sparkles size={22} className="text-amber-900" />
            <h1 className="font-semibold text-amber text-lg">Contact Us</h1>
          </div>
          <h2 className="text-2xl font-bold  ">
            {" "}
            Let's Talk About your hiring needs.
          </h2>

          <p className="text-stone-900 text-sm max-w-[500px] leading-6">
            Weather you're looking to hire top talent or explore new career
            opportunities
            <br />
            we'd love to hear from you. Fill out the form below and our
            recruitment team
            <br />
            will get in touch shortly.
          </p>

          <div className=" flex items-center gap-8 bg-lime-500 p-4 rounded-xl">
            {/* Item 1 */}
            <div className="flex items-center gap-3 ml-3">
              <div className="w-10 h-10 rounded-full bg-amber-900 flex items-center justify-center">
                <Phone className="text-white" size={18} />
              </div>

              <div className="text-white">
                <p className="font-semibold text-sm">Call Us Now</p>
                <p className="text-xs opacity-90">+(234) 567 -8912</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex  gap-3 ml-16">
              <div className="w-10 h-10 rounded-full bg-amber-900 flex items-center justify-center">
                <Mail className="text-white" size={18} />
              </div>

              <div className="text-white">
                <p className="font-semibold text-sm">Email Address</p>
                <p className="text-xs opacity-90">Support@domain.com</p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className=" w-full rounded-2xl overflow-hidden border border-stone-300">
            <iframe
              src="https://www.google.com/maps?q=Lahore,Pakistan&output=embed"
              className="w-full h-64 border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* BOX 2 */}
        <div className="flex flex-col gap-4 bg-stone-100 p-6 rounded-2xl shadow-md w-full md:w-[45%] min-h-[42rem] -mt-30 bg-gradient-to-b from-lime-500 to-lime-900">
          <div className="flex  mt-6 ml-6">
            <h1 className="font-bold text-white text-3xl ">
              Get In Touch With Us
            </h1>
          </div>

          <p className="text-white text-sm max-w-[500px] ml-8 mt-3">
            Have a question or need assistance with recruitment?Drop us a <br />
            meassage - we're here to help with your hiring or career journey.
          </p>

          <form className="flex flex-col gap-4 text-white mt-4">
            <div className="flex gap-4  mt-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-1/2 bg-white/10 border border-white/30 rounded-lg px-4 py-2 placeholder-white/70 text-white focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-1/2 bg-white/10 border border-white/30 rounded-lg px-4 py-2 placeholder-white/70 text-white focus:outline-none"
              />
            </div>

            <div className="flex gap-4  mt-3">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-1/2 bg-white/10 border border-white/30 rounded-lg px-4 py-2 placeholder-white/70 text-white focus:outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-1/2 bg-white/10 border border-white/30 rounded-lg px-4 py-2 placeholder-white/70 text-white focus:outline-none"
              />
            </div>

            <div className="relative  mt-3">
              <select className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-2 text-white focus:outline-none appearance-none">
                <option className="text-black">Select Your Country</option>
                <option className="text-black">Pakistan</option>
                <option className="text-black">India</option>
                <option className="text-black">UAE</option>
                <option className="text-black">USA</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white">
                ▼
              </span>
            </div>

            <textarea
              rows={6}
              placeholder="Comment / Questions"
              className="mt-3 w-full bg-white/10 border border-white/30 rounded-lg px-4 py-2 placeholder-white/70 text-white focus:outline-none resize-none"
            ></textarea>
          </form>

          <div className=" mt-3 flex justify-center w-full">
            <div className=" max-w-md">
              <CustomButton
                text="Send Meassage"
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

export default Hiring;
