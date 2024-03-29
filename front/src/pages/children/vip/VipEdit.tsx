import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import Input from "../../../components/common/Input";
import MenuCard from "../../../components/card/MenuCard";
import ButtonAsset from "../../../components/Button/ButtonAsset";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { nextTick } from "process";

export default function VipEdit() {
  const [vipData, setVipdata] = useState({
    nickname: "",
    imageIndex: 0,
  });
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const { id, vipId } = useParams();
  const [index, setIndex] = useState(0);
  const handleClick = () => {
    setVipdata({ nickname: text, imageIndex: index });
    // TODO 구조 변경 필요성
    console.log(vipData);
    navigate(`/mypage/${id}/vip/${vipId}`);
    // TODO vipData가 바뀌지 않는것 조치.
  };
  useEffect(() => {
    setVipdata((vipData) => ({
      ...vipData,
      nickname: text,
      imageIndex: index,
    }));
  }, [text, index]);

  const arr = Array.from({ length: 8 }, (v, i) => i);

  return (
    <div className="box-border flex flex-col justify-between w-3/5 h-[85vh]">
      <div className="flex justify-between w-full my-2 text-3xl font-semibold">
        VIP 수정
        <Link to={`/mypage/${id}/vip/${vipId}`}>
          <ArrowBackIcon fontSize="large" />
        </Link>
      </div>
      <div className="flex w-3/4 m-2">
        <Input
          id="nickname"
          label="닉네임"
          inputHandler={(event) => setText(event.target.value)}
        />
      </div>
      <div className="m-2 font-semibold">프로필 사진</div>
      <div className="flex w-full">
        <img
          src={`/test/picture${index}.jpg`}
          alt="empty"
          className="mx-3 w-[108px] h-[108px]"
        />
        <div className="grid grid-cols-4 gap-3">
          {arr.map((x) => (
            <img
              key={x}
              src={`/test/picture${x}.jpg`}
              alt="empty"
              onClick={() => setIndex(x)}
            />
          ))}
        </div>
      </div>
      <div className="box-border flex m-2 font-semibold">선호 음식</div>
      <div className="flex w-full h-[64vh] p-2 overflow-auto">
        <div className="grid w-full h-full grid-cols-5 gap-3">
          <MenuCard />
        </div>
      </div>
      <div className="flex flex-row justify-center gap-2 mt-3">
        <ButtonAsset
          text="취소"
          variant="outlined"
          onClick={() => navigate(`/mypage/${id}/vip/${vipId}`)}
        />
        <ButtonAsset text="저장" onClick={handleClick} />
      </div>
    </div>
  );
}