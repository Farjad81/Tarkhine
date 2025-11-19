export default async function Card() {
  const res = await fetch('https://fakerestaurantapi.runasp.net/api/Restaurant/5/menu?sortbyprice=desc');
  const data: { imageUrl: string; itemName: string; itemDescription: string; itemPrice: number }[] = await res.json();

  return (
    <div className="card-container w-full h-180 p-3 flex flex-col pr-20">
      <h2 className="text-lg font-bold w-2xs mt-8 mb-3">پیشنهاد ویژه</h2>

      <div className="w-full h-10/12 flex gap-4 flex-wrap">
        {data.map((item, index) => (
          <div
            key={index}
            className="card-content w-1/4 h-full flex flex-col items-center justify-center border border-gray-500 rounded-2xl"
          >
            <img
              className="w-full h-2/3 rounded-t-2xl object-cover"
              src={item.imageUrl}
              alt={item.itemName}
            />
            <div className="w-full h-1/3 flex flex-col items-center justify-center p-1.5 gap-3">
              <h3 className="font-semibold">{item.itemName}</h3>
              <div className="text-center">
                <p className="text-sm text-gray-600">{item.itemDescription}</p>
                <p className="text-sm text-green-700 font-bold">{item.itemPrice} تومان</p>
              </div>
              <button className="px-4 py-2 rounded bg-green-700 hover:bg-green-600 cursor-pointer text-white w-50">
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
