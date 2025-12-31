export default function AboutMain() {
  const symbol = ">";
  return (
    <>
      <div className="relative w-full h-auto md:h-[400px] bg-gray-200 flex items-center justify-center mt-2 overflow-hidden">
        <div
          className="w-full h-full flex flex-wrap items-center justify-center bg-cover bg-center text-white relative"
          style={{ backgroundImage: `url(/bg.jpg)` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="w-full md:w-1/2 md:absolute md:inset-0 h-auto md:h-full flex flex-col justify-center items-center text-white">
            <div className="w-full h-auto md:h-3/4 md:mr-30 mt-4 md:mt-10 p-4 md:p-10">
              <h1 className="mb-4 md:mb-8 text-lg md:text-2xl font-extrabold">
                رستوران‌های زنجیره‌ای ترخینه
              </h1>
              <p className="text-sm md:text-xl">
                مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
                ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
                رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل
                بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و
                درخور شان شما عزیزان ارائه دهیم.
              </p>
            </div>
            <div className="w-full h-auto flex justify-end mt-2 md:mt-0">
              <a
                href=""
                className="rounded-sm px-4 py-2 md:w-40 md:h-9 border-white border flex justify-center items-center hover:border-0 hover:bg-white hover:text-black transition-all duration-700"
              >
                اطلاعات بیشتر {symbol}{" "}
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:absolute md:left-0 md:top-0 h-auto md:h-full flex flex-wrap p-4 md:p-10 mt-4 md:mt-5 items-center justify-center md:justify-start">
            <div className="w-1/2 md:w-1/2 h-32 md:h-auto flex flex-col gap-3 justify-center items-center">
              <img
                src="/icon/user.png"
                alt=""
                className="w-12 h-12 md:w-auto md:h-auto object-contain hover:cursor-pointer hover:-translate-y-2 transition-transform duration-300"
              />
              <p className="text-xs md:text-base text-center">
                پرسنلی مجرب و حرفه‌ای
              </p>
            </div>
            <div className="w-1/2 md:w-1/2 h-32 md:h-auto flex flex-col gap-3 justify-center items-center">
              <img
                src="/icon/diagram.png"
                alt=""
                className="w-12 h-12 md:w-auto md:h-auto object-contain hover:cursor-pointer hover:-translate-y-2 transition-transform duration-300"
              />
              <p className="text-xs md:text-base text-center">
                کیفیت بالای غذاها
              </p>
            </div>
            <div className="w-1/2 md:w-1/2 h-32 md:h-auto flex flex-col gap-3 justify-center items-center">
              <img
                src="/icon/home-wifi.png"
                alt=""
                className="w-12 h-12 md:w-auto md:h-auto object-contain hover:cursor-pointer hover:-translate-y-2 transition-transform duration-300"
              />
              <p className="text-xs md:text-base text-center">
                محیطی دلنشین و آرام
              </p>
            </div>
            <div className="w-1/2 md:w-1/2 h-32 md:h-auto flex flex-col gap-3 justify-center items-center">
              <img
                src="/icon/menu-board.png"
                alt=""
                className="w-12 h-12 md:w-auto md:h-auto object-contain hover:cursor-pointer hover:-translate-y-2 transition-transform duration-300"
              />
              <p className="text-xs md:text-base text-center">منوی متنوع</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
