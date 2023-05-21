import {configureStore} from '@reduxjs/toolkit';
import appChatReducer from './reducers/appChatReducer';
import userReducer from './reducers/userReducer';
import quanLyPhimReducer from './reducers/quanLyPhimReducer';

export const store = configureStore({
    reducer: {
     appChatReducer,
     userReducer:userReducer,
     quanLyPhimReducer:quanLyPhimReducer
    }
})