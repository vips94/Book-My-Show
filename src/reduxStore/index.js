import {configureStore} from "@reduxjs/toolkit";
import show_Slice from "./show_slice";
import ui_Slice from "./ui_slice";

const store = configureStore({
    reducer : {
        ui : ui_Slice.reducer,
        show : show_Slice.reducer
    }
});

export default store;