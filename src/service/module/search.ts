import req from "../index";

export function getSearchDataReq(keyword: string) {
  return req.post({
    url: "keyword_search",
    data: {
      login_token: "INTERVIEW_SIMPLY2021",
      search_phrase: keyword,
    },
  });
}
