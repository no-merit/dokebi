import { NavLink } from "react-router-dom";

interface VipProps {
  id: number;
  name: string;
  imagePath: string;
  imageIndex: string;
}

export default function VipCard({ VipProps }: { VipProps: VipProps }) {
  return (
    <NavLink
      className="flex flex-col justify-around w-full p-2 m-2 border-2 border-gray-300 shadow-md h-[60vh] rounded-xl"
      to={`${VipProps.id + 1}`}
    >
      {/* ALERT width와 height는 확인용으로 넣은 것으로 추후 수정. */}
      <div className="flex justify-end">
        {/* <CloseIcon onClick={() => console.log("닫기")} /> */}
      </div>
      <div className="flex justify-center w-full">
        <img
          src={`/test/picture${[VipProps.imageIndex]}.jpg`}
          alt="empty"
          className="w-[208px] h-[208px]"
        />
      </div>
      <div className="flex flex-col justify-center gap-3">
        <div className="flex justify-center text-2xl font-semibold">
          {VipProps.name}
        </div>
      </div>
    </NavLink>
  );
}