export const getGlobalStore = ({ auth }) => auth;
export const getUser = ({ auth }) => auth.user;
export const getIsLogin = ({ auth }) => auth.isUserLogin;
export const getLoading = ({ auth }) => auth.loading;
export const getError = ({ auth }) => auth.error;