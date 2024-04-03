import { ArrowForward } from "@mui/icons-material";
import TopicBox from "../components/topic/TopicBox";
import useLoginStore from "../store/useLoginStore";
import useScrollFadeIn from "../modules/hook/useScrollFadeIn";
import { useEffect } from "react";

export default function LandingPage() {
  const { getIsLogin } = useLoginStore();

  const scrollUpAnimation1 = useScrollFadeIn({ threshold: 0.1 });
  const scrollUpAnimation2 = useScrollFadeIn();
  const scrollUpAnimation3 = useScrollFadeIn({ direction: "right" });
  const scrollUpAnimation4 = useScrollFadeIn({ direction: "left" });
  const scrollUpAnimation5 = useScrollFadeIn({ direction: "right" });

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full">
        <div className="w-[1200px] h-[650px] mx-auto my-0 flex flex-col justify-center items-center">
          <div {...scrollUpAnimation1}>
            <div className="text-[42px] font-bold">
              오늘은 어떤 <span className="text-primary">추억</span>을
              나눠볼까요?
            </div>
            <div className="text-[30px] text-center">
              가족 공유 관심사 추천 서비스, 효도깨비
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FFF3E0] whitespace-pre-wrap">
        <div className="w-[1200px] h-[650px] mx-auto my-0 flex flex-col justify-center items-center">
          <div {...scrollUpAnimation2}>
            <div className="text-[42px] font-bold text-primary text-center">
              {"효도깨비는 VIP님과 함께 \n대화할 수 있는 주제를 추천해줍니다."}
            </div>
            <div className="text-[20px] text-center my-3">
              {
                "VIP는 저희 서비스가 추천한 관심사를 공유하는 분을 뜻합니다.\n여러분의 VIP를 등록하고 관심사를 찾아보세요."
              }
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-[1200px] h-[650px] mx-auto my-0 flex justify-between items-center">
          <div {...scrollUpAnimation3} className="w-[500px]">
            <div className="text-[42px] font-bold text-primary">
              대화 주제를 추천해드려요.
            </div>
            <div className="text-[24px]">오늘의 대화 주제를 확인해보세요.</div>
          </div>
          <div>
            <TopicBox isLogin={getIsLogin()} />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FFF3E0]">
        <div className="w-[1200px] h-[650px] mx-auto my-0 flex justify-between flex-row-reverse items-center">
          <div className="flex flex-col">
            <div {...scrollUpAnimation4} className="w-[500px] break-keep">
              <div className="text-[42px] font-bold text-primary">
                함께 외식하기 좋은 음식 메뉴를 추천해드려요.
              </div>
              <div className="text-[24px]">음식 추천 기능을 소개하는 글</div>
              <div className="mt-5">
                <button className="flex items-center justify-center px-4 py-2 text-white rounded-full bg-primary">
                  <span className="pr-2">추천 받기</span>
                  <ArrowForward fontSize="small" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-[1200px] h-[650px] mx-auto my-0 flex justify-between items-center">
          <div className="flex flex-col">
            <div {...scrollUpAnimation5} className="w-[500px] break-keep">
              <div className="text-[42px] font-bold text-primary">
                과거에 유행했던 노래를 추천해드려요.
              </div>
              <div className="text-[24px]">노래 추천 기능을 소개하는 글.</div>
              <div className="mt-5">
                <button className="flex items-center justify-center px-4 py-2 text-white rounded-full bg-primary">
                  <span className="pr-2">추천 받기</span>
                  <ArrowForward fontSize="small" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}