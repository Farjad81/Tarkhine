export default function AboutMain(){
    const symbol = ">";
    return(
        <>
              <div className="relative w-full h-[400px] bg-gray-200 flex items-center justify-center mt-2">
                <div className="w-full h-full flex items-center justify-center bg-cover bg-center text-white" style={{backgroundImage: `url(/bg.jpg)`}}>
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className=" w-1/2 h-full flex flex-col justify-center items-center text-white absolute inset-0">
                        <div className="w-full h-3/4 mr-30 mt-10 p-10">
                            <h1 className="mb-8 text-2xl font-extrabold">رستوران‌های زنجیره‌ای ترخینه</h1>
                            <p className="text-xl">
                                مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.
                            </p>
                        </div>
                        <div className="w-full h-1/4 flex justify-end">
                            <a href="" className="rounded-sm w-40 h-9 border-white border flex justify-center items-center hover:border-0 hover:bg-white hover:text-black after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700">اطلاعات بیشتر {symbol} </a>
                        </div>
                    </div>
                    <div className="absolute w-1/2 left-0 h-full flex flex-wrap p-10 mt-5">
                        <div className="w-1/2 h-1/2 flex flex-col gap-3 justify-center items-center">
                            <img src="/icon/user.png" alt="" className="hover:cursor-pointer hover:-translate-y-4 after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700" />
                            <p>پرسنلی مجرب و حرفه‌ای</p>
                        </div>
                        <div className="w-1/2 h-1/2 flex flex-col gap-3 justify-center items-center">
                            <img src="/icon/diagram.png" alt="" className="hover:cursor-pointer hover:-translate-y-4 after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700" />
                            <p>کیفیت بالای غذاها</p>
                        </div>
                        <div className="w-1/2 h-1/2 flex flex-col gap-3 justify-center items-center">
                            <img src="/icon/home-wifi.png" alt="" className="hover:cursor-pointer hover:-translate-y-4 after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700" />
                            <p>محیطی دلنشین و آرام</p>                        
                        </div>
                        <div className="w-1/2 h-1/2 flex flex-col gap-3 justify-center items-center">
                            <img src="/icon/menu-board.png" alt="" className="hover:cursor-pointer hover:-translate-y-4 after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700" />
                            <p>منوی متنوع</p>                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}