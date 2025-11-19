"use client";

import { useState } from "react";
export default function Header(){
      const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };
  function HideMenu(){
    setOpenMenu(null);
  }
    return(
        <>
        <header className="flex justify-center items-center p-4 text-gray-500">
            <div className="flex justify-center items-center p-2.5 w-1/4">
                <img src="/logo.png" />
            </div>
            <div className="w-2/4">
                <nav className="flex justify-center items-center">
                    <ul className="flex space-x-6">
                        <li>
                            <a href="#" className="text-gray-500 text-2xl  hover:text-green-700 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full">صفحه اصلی</a>
                        </li>
                        <li>
                            <div className="relative">
                                <button onMouseOver={() => toggleMenu("branch")} className="text-gray-500 text-2xl hover:text-green-700 cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full">
                                    شعبه ⇣
                                </button>
                                {openMenu === "branch" && (
                                    <ul className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-50" onMouseLeave={HideMenu}>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">اکباتان</li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">چالوس</li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">اقدسیه</li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">ونک</li>
                                    </ul>
                                )}
                            </div>
                        </li>
                        <li>
                            <div className="relative">
                                <button onMouseOver={() => toggleMenu("menu")} className="text-gray-500 text-2xl hover:text-green-700 cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full">
                                    منو ⇣
                                </button>
                                {openMenu === "menu" && (
                                    <ul className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-50" onMouseLeave={HideMenu}>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">غذای اصلی</li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">پیش غذا</li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">دسر</li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">نوشیدنی</li>
                                    </ul>
                                )}
                            </div>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 text-2xl hover:text-green-700 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full">اعطای نمایندگی</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 text-2xl hover:text-green-700 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full">درباره ما</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 text-2xl hover:text-green-700 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full">تماس با ما</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="w-1/4 p-4 flex justify-center items-center gap-2">
                <a className="rounded-[4px] w-10 h-10 cursor-pointer p-2 hover:translate-y-[-2px] hover:shadow-md transition-all duration-200" style={{backgroundColor: "#E5F2E9"}}>
                    <img src="/search-normal.png" alt="" />
                </a>
                <a className="rounded-[4px] w-10 h-10 cursor-pointer p-2 hover:translate-y-[-2px] hover:shadow-md transition-all duration-200" style={{backgroundColor: "#E5F2E9"}}>
                    <img src="/shopping-cart.png" alt="" />
                </a>
                <a className="rounded-[4px] w-10 h-10 cursor-pointer p-2 hover:translate-y-[-2px] hover:shadow-md transition-all duration-200" style={{backgroundColor: "#E5F2E9"}}>
                    <img src="/user.png" alt="" />
                </a>
            </div>
        </header>
        </>
    )
}