import { isAxiosError } from "axios";
import { axios } from "../utils/axios";
import parseJwt from "../../modules/auth/parseJwt";

const REST_MEMBER_API = "/api/member";

// 일반 로그인
// 로그인에 성공하면 로그인한 회원의 id를 반환한다.
export async function postLogin(id: string, password: string) {
  try {
    const data = await axios.post(REST_MEMBER_API + "/login/origin", {
      memberId: id,
      memberPass: password,
    });

    // Access Token 저장
    const accessToken = data.headers["accesstoken"] || "";
    localStorage.setItem("accessToken", accessToken);

    // 로그인한 회원의 id 반환
    return parseJwt(accessToken).sub;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.status + "");
    }
  }
}

// TODO: 카카오 로그인 함수 구현
export async function getKakaoLogin(code: string) {
  try {
    const data = await axios.get(REST_MEMBER_API + `/login/${code}`);
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// 회원가입
export async function postRegist(
  id: string,
  password: string,
  email: string,
  nickname: string,
  profile: string
) {
  try {
    const data = await axios.post(REST_MEMBER_API + "/join", {
      memberId: id,
      memberPass: password,
      memberEmail: email,
      memberNickname: nickname,
      memberProfile: profile,
    });
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// 아이디, 이메일, 닉네임 중복 검사
// category : id, email, nickname
export async function getDuplicateCheck(category: string, input: string) {
  try {
    const data = await axios.get(
      REST_MEMBER_API + `/check/${category}/${input}`
    );
    return data.data.dupCheck;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// 아이디 찾기
export async function getSearchId(email: string) {
  try {
    const data = await axios.get(REST_MEMBER_API + `/find/id`, {
      params: {
        email: email,
      },
    });
    return data.data.id;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// TODO: 회원 정보 조회
export async function getMemberInfo(memberId: number) {
  try {
    const data = await axios.get(REST_MEMBER_API + `/info/${memberId}`);
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// TODO: 회원 정보 수정
export async function putMemberInfo(
  memberIndex: number = 0,
  memberNickname: string = "",
  memberEmail: string = "",
  memberPass: string = ""
) {
  try {
    const data = await axios.put(REST_MEMBER_API + "/update", {
      memberIndex: memberIndex,
      memberNickname: memberNickname,
      memberEmail: memberEmail,
      memberPass: memberPass,
    });
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}