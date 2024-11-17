const MiddlePart = () => {
    const linkImg = ["image.jpg", "vite.svg", "mqdefault.jpg"];
  
    return (
      <section className="bg-gray-100 py-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
            Transforming Businesses
          </h1>
          <p className="text-gray-600 text-lg">
            Explore our journey in revolutionizing industries with innovation.
          </p>
        </div>
        <main className="flex justify-center gap-6 p-4">
          {linkImg.map((item, index) => (
            <div
              className="w-[300px] md:w-[400px] lg:w-[500px] bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              key={index}
            >
              <img
                className="w-full h-[300px] md:h-[400px] lg:h-[540px] rounded-t-lg object-cover"
                src={`/${item}`}
                alt={`Image ${index + 1}`}
              />
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  Image {index + 1}
                </h2>
                <p className="text-gray-600">
                  A brief description or highlight of the image.
                </p>
              </div>
            </div>
          ))}
        </main>
      </section>
    );
  };
  
  export default MiddlePart;
  