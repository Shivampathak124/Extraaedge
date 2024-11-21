import { SET_USERS, SET_LOADING } from "./actionTypes";

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});
