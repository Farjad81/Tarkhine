import Cards from "../cards/HomeCard";
export default function HomeCard() {
  return (
    <>
      <div className="container w-full h-auto md:h-116 flex flex-col items-center justify-center gap-4 md:gap-6 px-4 md:px-0">
        <h1 className="text-xl md:text-3xl h-auto md:h-1/12 mt-6">
          ترخینه گردی
        </h1>
        <div className="w-full h-auto md:h-9/12 flex items-center justify-center gap-4 md:gap-6 flex-wrap">
          <Cards img={undefined} title={undefined} par={undefined} />
          <Cards img={undefined} title={undefined} par={undefined} />
          <Cards img={undefined} title={undefined} par={undefined} />
          <Cards img={undefined} title={undefined} par={undefined} />
        </div>
      </div>
    </>
  );
}
