// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

export const getAllData = createAsyncThunk('appCourses/getAllData', async () => {
  const response = await axios.get('/api/course/list/all-data')
  return response.data
})

export const getData = createAsyncThunk('appCourses/getData', async params => {
  const response = await axios.get('/api/course/list/data', params)
  return {
    params,
    data: response.data.users,
    totalPages: response.data.total
  }
})

export const getUser = createAsyncThunk('appCourses/getUser', async id => {
  const response = await axios.get('/api/course/user', { id })
  return response.data.user
})

export const addUser = createAsyncThunk('appCourses/addUser', async (user, { dispatch, getState }) => {
  await axios.post('/apps/course/add-user', user)
  await dispatch(getData(getState().users.params))
  await dispatch(getAllData())
  return user
})

export const deleteUser = createAsyncThunk('appCourses/deleteUser', async (id, { dispatch, getState }) => {
  await axios.delete('/apps/course/delete', { id })
  await dispatch(getData(getState().users.params))
  await dispatch(getAllData())
  return id
})

export const appUsersSlice = createSlice({
  name: 'appCourses',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: [],
    selectedUser: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.allData = action.payload
        // state.data = action.payload
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.data = action.payload.data
        state.params = action.payload.params
        state.total = action.payload.totalPages
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.selectedUser = action.payload
      })
  }
})

export default appUsersSlice.reducer
