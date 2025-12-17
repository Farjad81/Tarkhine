export default function Footer(){
    return(
        <>
            <div className="relative w-full h-[310px] bg-gray-200 flex items-center justify-center mt-2">
                <div className="w-full h-[310px] flex items-center justify-center bg-cover bg-center text-white" style={{backgroundImage: `url(/footerbg.jpg)`}}>
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute w-full h-full flex justify-center items-center">
                        <div className="w-1/4 h-full flex flex-col p-10 gap-4 justify-center items-stretch">
                            <h2 className="font-extrabold text-3xl">دسترسی آسان</h2>
                            <a href="">پرسش‌های متداول</a>
                            <a href="">قوانین ترخینه</a>
                            <a href="">حریم خصوصی</a>
                            <div className="w-full flex gap-4">
                                <img src="/icon/tell.png" alt="" />
                                <img src="/icon/insta.png" alt="" />
                                <img src="/icon/tweeter.png" alt="" />
                            </div>
                        </div>
                        <div className="w-1/4 h-full flex flex-col p-10 gap-4 justify-center items-stretch">
                            <h2 className="font-extrabold text-3xl">شعبه‌های ترخینه</h2>
                            <a href="">شعبه اکباتان</a>
                            <a href="">شعبه چالوس</a>
                            <a href="">شعبه اقدسیه</a>
                            <a href="">شعبه ونک</a>
                        </div>
                        <div className="w-2/4 h-full flex p-10 gap-4 justify-center">
                            <div className="w-1/2 h-full flex flex-col p-10 gap-4 justify-center items-stretch">
                                <h2 className="font-extrabold text-3xl">پیام به ترخینه </h2>
                                <input type="text" placeholder="نام و نام خانوادگی" name="" id=""  className="border border-gray-500 h-[200px] w-[260px] p-2 rounded-l"/>
                                <input type="text" placeholder="شماره تماس" name="" id=""  className="border border-gray-500 h-[200px] w-[260px] p-2 rounded-l"/>
                                <input type="text" placeholder="آدرس ایمیل" name="" id=""  className="border border-gray-500 h-[200px] w-[260px] p-2 rounded-l"/>
                            </div>
                            <div className="w-1/2 h-full flex flex-col p-10 gap-4 justify-center items-center">
                                <textarea name="" id="" placeholder="پیام شما" className="w-[260px] h-[220px] border border-gray-500 p-2 rounded-l"></textarea>
                                <a href="" className="w-40 h-30 flex justify-center items-center rounded-l border border-gray-500">ارسال پیام</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}