//Danh sách tìm kiếm
export const userSearchSelector = (state) => {
   return state.getUserByNameReducers.data;
};
//Tất cả người dùng
export const allUserSelector = (state) => {
   return state.allUserReducers.data;
};
//Người dùng đang hoạt động
export const activeUserSelector = (state) => {
   return state.activeUserReducers.data;
};
//Người dùng được khuyến nghị
export const recommendUserSelector = (state) => {
   return state.recommendUserReducer.data;
};
//Người dùng đang theo dõi
export const followingUserSelector = (state) => {
   return state.followingUserReducer.data;
};
