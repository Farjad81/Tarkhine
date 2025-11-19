export default function MenuHomeSection() {
  return (
    <>
      <div className="container w-full h-96 flex flex-col items-center justify-center">
        <h2 className="font-extrabold">منوی رستوران</h2>
        <div className="w-full h-9/12 flex justify-center gap-4 items-end">
          <a href="" className="w-60 h-35 bg-green-700 rounded-lg relative">
            <img
              src="/1.png"
              alt=""
              className="-translate-y-33 hover:-translate-y-38 after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700"
            />
            <div className="items-center flex justify-center bg-white w-30 h-12 absolute bottom-0 left-0 translate-x-15 translate-y-4 rounded-md shadow-gray-700 shadow">
              <h2>غذای اصلی</h2>
            </div>
          </a>
          <a href="" className="w-60 h-35 bg-green-700 rounded-lg relative">
            <img
              src="/2.png"
              alt=""
              className="-translate-y-33 hover:-translate-y-38 after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700"
            />
            <div className="items-center flex justify-center bg-white w-30 h-12 absolute bottom-0 left-0 translate-x-15 translate-y-4 rounded-md shadow-gray-700 shadow">
              <h2>پیش غذا</h2>
            </div>
          </a>
          <a href="" className="w-60 h-35 bg-green-700 rounded-lg relative">
            <img
              src="/3.png"
              alt=""
              className="-translate-y-33 hover:-translate-y-38 after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700"
            />
            <div className="items-center flex justify-center bg-white w-30 h-12 absolute bottom-0 left-0 translate-x-15 translate-y-4 rounded-md shadow-gray-700 shadow">
              <h2>دسر</h2>
            </div>
          </a>
          <a href="" className="w-60 h-35 bg-green-700 rounded-lg relative">
            <img
              src="/4.png"
              alt=""
              className="-translate-y-47 hover:-translate-y-52 after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700"
            />
            <div className="items-center flex justify-center bg-white w-30 h-12 absolute bottom-0 left-0 translate-x-15 translate-y-4 rounded-md shadow-gray-700 shadow">
              <h2>نوشیدنی</h2>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
