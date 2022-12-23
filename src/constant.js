export const INIT_STATE = {
   inputZone: {
      loginSignUp: true,
      editUser: {
         visible: true,
         user: null,
      },
      comingSoon: true
   },
   activeUser: {
      data: {},
      jwt: null,
      login: false,
      wrong: null,
      isLoading: false,
   },
   recommendUser: {
      data: {
         suggestAccount: [],
         followingAccount: [],
      },
      isLoading: false,
   },
   socketIO: {
      socket: null,
   },
   video: {
      nickName: [],
      video: [],
      isLoading: false,
   },
   message: {
      messageList: [],
      isLoading: false,
   },
   lazyLoading: {
      loading: false,
      maxVideo: 1,
      currentVideo: 1,
      pending: false,
   },
};
