import { useState } from "react";
import AddCard from "../card/AddCard";
import Card from "../card/Card";

export default function DoubleTab() {
  const [index, setIndex] = useState(0);
  // TODO 해당 인덱스를 전역관리 할지?
  // TODO 탭에서 정해진 인덱스를 데이터에도 출력하여 보여주는 방식을 취할지?

  const disabled =
    "flex items-center justify-center w-1/2 shadow-md h-full duration-300 text-xl font-semibold";
  const activated =
    "flex items-center justify-center w-1/2 shadow-md h-full bg-secondary duration-300 text-xl font-semibold";

  return (
    <div className="flex flex-col w-2/3 m-3 h-3/4">
      <div className="flex flex-row w-full h-1/10">
        <div
          className={index === 0 ? activated : disabled}
          onClick={() => setIndex(0)}
        >
          내 프로필
        </div>
        <div
          className={index === 1 ? activated : disabled}
          onClick={() => setIndex(1)}
        >
          VIP
        </div>
      </div>
      {index === 0 ? (
        <div className="box-border flex flex-1 w-full p-2">프로필</div>
      ) : (
        <div className="box-border flex w-full p-2 overflow-y-auto">
          {/* TODO VIP map돌려서 넣고 그 다음에 Addcard 위치시키기, 아래는 예시 */}
          <div className="flex flex-wrap justify-start w-full h-full">
            <Card />
            <Card />
            <Card />
            <Card />
            <AddCard />
          </div>

        </div>
      )}
    </div>
  );
}