export default function Cards({ img, title, par }) {
  const symbol = ">";
  return (
    <div className=" group relative overflow-hidden shadow-lg cursor-pointer w-1/5 h-70 border border-gray-300 hover:border-green-300 rounded-lg bg-white">

      {/* بخش تصویر (ارتفاع تغییر می‌کند) */}
      <div className="w-full h-2/3 overflow-hidden transition-all duration-500 group-hover:h-1/2">
        <img
          src={img || "/Image.png"}
          alt={title || "image"}
          className="w-full h-full object-cover transition-all duration-500 
          group-hover:blur-sm group-hover:scale-95"
        />
      </div>

      {/* بخش متن + دکمه (ارتفاع ثابت و بدون بیرون‌زدگی) */}
      <div className="absolute bottom-0 w-full p-4 bg-white h-1/2 overflow-hidden flex flex-col justify-center items-center">
        <h1 className="text-black text-2xl font-bold">
          شعبه ونک
        </h1>
        {/* متن – هرگز از کارت بیرون نمی‌زند */}
        <p 
          className="text-gray-500 text-sm transition-all duration-500 
          line-clamp-1 group-hover:line-clamp-none
          overflow-y-hidden"
        >
          {par || "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶"}
        </p>

        {/* دکمه – از پایین ظاهر می‌شود */}
        <a
          href="#"
          className="
            block w-fit mt-4 hover:text-green-300 border border-gray-300 hover:border-green-300 px-4 py-2 rounded-md 
            opacity-0 translate-y-4 
            group-hover:opacity-100 group-hover:translate-y-0 
            transition-all duration-500
          "
        >
          صفحه شعبه {symbol}
        </a>
      </div>
    </div>
  );
}
