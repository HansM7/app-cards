import Card_01 from "./ui/cards/card_01";
import Card_02 from "./ui/cards/card_02";
import Card_03 from "./ui/cards/card_03";
import Card_04 from "./ui/cards/card_04";

export default function Home() {
  return (
    <div className="flex w-full px-20 py-10 flex-col">
      <h1 className="text-2xl font-semibold text-center mb-10 text-gray-700">
        My cards - Hans Melchor{" "}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-8 ">
        <Card_01 />
        <Card_02 />
        <Card_03 />
        <Card_04 />
      </div>
    </div>
  );
}
