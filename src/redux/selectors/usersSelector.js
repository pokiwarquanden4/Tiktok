//Người dùng đang hoạt động
export const activeUserSelector = (state) => {
   return state.activeUserReducers.data;
};
export const loginUserSelector = (state) => {
   return state.activeUserReducers.login;
};
export const loginWrongSelector = (state) => {
   return state.activeUserReducers.wrong;
};
export const activeUserJWT = (state) => {
   return state.activeUserReducers.data.jwt;
};
export const activeUserLoadingSelector = (state) => {
   return state.activeUserReducers.isLoading;
};
//Người dùng được khuyến nghị
export const recommendUserSelector = (state) => {
   return state.recommendUserReducer.data;
};
