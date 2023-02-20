import { configureStore } from "@reduxjs/toolkit";
import {
  useSelector,
  useDispatch,
  TypedUseSelectorHook,
  shallowEqual,
} from "react-redux";

import searchReducer from "./module/search";

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

type GetStateFnType = typeof store.getState;
export type IRootState = ReturnType<GetStateFnType>;
type DispatchType = typeof store.dispatch;

//封装类型，可以让编辑器起提示作用
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch: () => DispatchType = useDispatch;
export const shallowEqualApp = shallowEqual;

export default store;
