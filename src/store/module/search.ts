import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSearchDataReq } from "../../service/module/search";

interface initialStateType {
  keyWord: string; //搜索的关键字
  productTrends: any[]; //展示的数据
  isMain: boolean; //是否在首页
  loading: boolean; //面积图是否处于loading状态
}

const initialState: initialStateType = {
  keyWord: "",
  productTrends: new Array(5),
  isMain: true,
  loading: true,
};

export const getRequestData = createAsyncThunk(
  "searchData",
  async function (_, { dispatch, getState }: any) {
    const { keyWord } = getState().search;
    const res = await getSearchDataReq(keyWord);
    const data = res.data.product_trends;
    dispatch(changeProductTrendsAction(data));
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    changeKeyWordAction(state, { payload }) {
      state.keyWord = payload;
    },
    changeProductTrendsAction(state, { payload }) {
      state.productTrends = payload;
    },
    changeIsMainAction(state, { payload }) {
      state.isMain = payload;
    },
    changeKeyWord(state, { payload }) {
      state.keyWord = payload;
    },
    changeLoadingAction(state, { payload }) {
      state.loading = payload;
    },
  },
});

export const {
  changeKeyWordAction,
  changeProductTrendsAction,
  changeIsMainAction,
  changeLoadingAction,
} = searchSlice.actions;
export default searchSlice.reducer;
