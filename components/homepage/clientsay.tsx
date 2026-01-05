import { Sparkles } from "lucide-react";

const leftImages = [
  { src: "/images/men1.jpg", top: "-40px", left: "-80px" },
  { src: "/images/men2.jpg", top: "80px", left: "-170px" },
  { src: "/images/men3.jpg", top: "200px", left: "-80px" },
];

const rightImages = [
  { src: "/images/women1.jpg", top: "-50px", right: "-80px" },
  { src: "/images/women2.jpg", top: "80px", right: "-170px" },
  { src: "/images/women3.jpg", top: "200px", right: "-80px" },
];

const Clientsay = () => {
  return (
    <section
      className="relative py-24 mt-10 bg-cover bg-center rounded-3xl overflow-hidden"
      style={{ backgroundImage: "url('/images/meeting.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Sparkles size={22} className="text-amber-400" />
          <h1 className="font-semibold text-lg">Client Testimonial</h1>
        </div>

        <h2 className="text-4xl font-bold mb-4">
          What Our Clients Say About Us
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto mb-16">
          We've helped businesses find the perfect talent and candidates land
          their dream jobs. Here's <br />
          what our clients have to say about working with us.
        </p>

        <div className="flex items-center justify-center gap-10 relative">
          <div className="relative w-16 h-[300px]">
            {leftImages.map((item, i) => (
              <div
                key={i}
                className="w-16 h-16 rounded-full overflow-hidden border-2 border-lime-500 shadow-lg absolute"
                style={{ top: item.top, left: item.left }}
              >
                <img
                  src={item.src}
                  alt={`client-left-${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="relative w-full max-w-3xl h-[290px]">
            <div className="absolute top-10 left-6 w-[94%] h-[240px] bg-white rounded-2xl shadow-lg"></div>
            <div className="absolute top-5 left-3 w-[97%] h-[240px] bg-white rounded-2xl shadow-xl"></div>

            <div className="relative w-full h-[240px] bg-gradient-to-b from-lime-900 to-lime-500 rounded-2xl shadow-2xl p-10 flex flex-col justify-between text-left">
              <p className="text-lg font-medium leading-relaxed">
                This team went above and beyond in finding the right talent for
                our organization. They are extremely attentive and professional
                in their approach. Each candidate matched not just the skills
                but also our company values. We could not be happier with the
                results and the seamless hiring experience.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src="/images/men.jpg"
                      alt="client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Sarah Mitchell</h4>
                    <p className="text-sm">Founder & CEO</p>
                  </div>
                </div>

                <div className="text-white/80 text-7xl leading-none">”</div>
              </div>
            </div>
          </div>

          <div className="relative w-16 h-[300px]">
            {rightImages.map((item, i) => (
              <div
                key={i}
                className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-900 shadow-lg absolute"
                style={{ top: item.top, right: item.right }}
              >
                <img
                  src={item.src}
                  alt={`client-right-${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clientsay;
