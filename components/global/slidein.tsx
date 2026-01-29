export function SlideIn({ children, isOpen, heading }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-full md:w-1/3 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <h1>{heading}</h1>
      {children}
    </div>
  );
}

export function NewFile() {
  return (
    <>
      <SlideIn isOpen={true} heading="Filters">
        <input type="checkbox" />
      </SlideIn>
    </>
  );
}
