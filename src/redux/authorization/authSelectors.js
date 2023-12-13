export const selectUserEmail = state => state.authorization.user.email;

export const selectIsLoggedin = state => state.authorization.isLoggedin;

export const selectIsRefreshing = state => state.authorization.isRefreshing;

export const selectToken = state => state.authorization.token;
