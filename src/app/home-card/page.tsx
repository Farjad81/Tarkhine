import Cards from "../cards/HomeCard";
export default function HomeCard() {
  return (
    <>
      <div className="container w-full h-116 flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl h-1/12 mt-6">ترخینه گردی</h1>
        <div className="w-full h-9/12 flex items-center justify-center gap-6">
          <Cards img={undefined} title={undefined} par={undefined} />
          <Cards img={undefined} title={undefined} par={undefined} />
          <Cards img={undefined} title={undefined} par={undefined} />
          <Cards img={undefined} title={undefined} par={undefined} />
        </div>
      </div>
    </>
  );
}
