import {createSlice} from "@reduxjs/toolkit";

const ui_Slice = createSlice({
    name : 'ui',
    initialState : {
        paymentPopup:false,
        darkMode : false,
        notification : false,
        notificationMessage : ""
    },
    reducers:{
        togglePaymentPopup(state){
            state.paymentPopup = !state.paymentPopup
        },

        toggleTheme(state){
            state.darkMode = !state.darkMode
        },

        toggleNotification(state,action){
            state.notification = !state.notification
            state.notificationMessage = action.payload
        },
    }
});

export const uiAction = ui_Slice.actions;
export default ui_Slice;