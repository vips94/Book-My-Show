import { createSlice } from "@reduxjs/toolkit";

var showsList = [
  {
    show: "Show1",
    seats: [
      {
        list: [
          { seatNo: 1, isBooked: false,isAvilable:true },
          { seatNo: 2, isBooked: false,isAvilable:true },
          { seatNo: 3, isBooked: false,isAvilable:true },
          { seatNo: 4, isBooked: false,isAvilable:true },
          { seatNo: 5, isBooked: false,isAvilable:true },
          { seatNo: 6, isBooked: false,isAvilable:true },
          { seatNo: 7, isBooked: false,isAvilable:true },
          { seatNo: 8, isBooked: false,isAvilable:true },
          { seatNo: 9, isBooked: false,isAvilable:true },
        ],
        price: 320,
      },
      {
        list: [
          { seatNo: 1, isBooked: false,isAvilable:true },
          { seatNo: 2, isBooked: false,isAvilable:true },
          { seatNo: 3, isBooked: false,isAvilable:true },
          { seatNo: 4, isBooked: false,isAvilable:true },
          { seatNo: 5, isBooked: false,isAvilable:true },
          { seatNo: 6, isBooked: false,isAvilable:true },
        ],
        price: 280,
      },
      {
        list: [
          { seatNo: 2, isBooked: false,isAvilable:true },
          { seatNo: 3, isBooked: false,isAvilable:true },
          { seatNo: 4, isBooked: false,isAvilable:true },
          { seatNo: 5, isBooked: false,isAvilable:true },
          { seatNo: 6, isBooked: false,isAvilable:true },
          { seatNo: 7, isBooked: false,isAvilable:true },
        ],
        price: 240,
      },
    ],
    currentShowBill:0.0,
  },
  {
    show: "Show2",
    seats: [
      {
        list: [
          { seatNo: 1, isBooked: false,isAvilable:true },
          { seatNo: 2, isBooked: false,isAvilable:true },
          { seatNo: 3, isBooked: false,isAvilable:true },
          { seatNo: 4, isBooked: false,isAvilable:true },
          { seatNo: 5, isBooked: false,isAvilable:true },
          { seatNo: 6, isBooked: false,isAvilable:true },
          { seatNo: 7, isBooked: false,isAvilable:true },
        ],
        price: 320,
      },
      {
        list: [
          { seatNo: 2, isBooked: false,isAvilable:true },
          { seatNo: 3, isBooked: false,isAvilable:true },
          { seatNo: 4, isBooked: false,isAvilable:true },
          { seatNo: 5, isBooked: false,isAvilable:true },
          { seatNo: 6, isBooked: false,isAvilable:true },
        ],
        price: 280,
      },
      {
        list: [
          { seatNo: 1, isBooked: false,isAvilable:true },
          { seatNo: 2, isBooked: false,isAvilable:true },
          { seatNo: 3, isBooked: false,isAvilable:true },
          { seatNo: 4, isBooked: false,isAvilable:true },
          { seatNo: 5, isBooked: false,isAvilable:true },
          { seatNo: 6, isBooked: false,isAvilable:true },
          { seatNo: 7, isBooked: false,isAvilable:true },
        ],
        price: 240,
      },
    ],
    currentShowBill:0.0,
  },
  {
    show: "Show3",
    seats: [
      {
        list: [
          { seatNo: 1, isBooked: false,isAvilable:true },
          { seatNo: 2, isBooked: false,isAvilable:true },
          { seatNo: 3, isBooked: false,isAvilable:true },
          { seatNo: 4, isBooked: false,isAvilable:true },
          { seatNo: 5, isBooked: false,isAvilable:true },
          { seatNo: 6, isBooked: false,isAvilable:true },
          { seatNo: 7, isBooked: false,isAvilable:true },
        ],
        price: 320,
      },
      {
        list: [
          { seatNo: 1, isBooked: false,isAvilable:true },
          { seatNo: 2, isBooked: false,isAvilable:true },
          { seatNo: 3, isBooked: false,isAvilable:true },
          { seatNo: 4, isBooked: false,isAvilable:true },
          { seatNo: 5, isBooked: false,isAvilable:true },
          { seatNo: 6, isBooked: false,isAvilable:true },
          { seatNo: 7, isBooked: false,isAvilable:true },
          { seatNo: 8, isBooked: false,isAvilable:true },
        ],
        price: 280,
      },
      {
        list: [
          { seatNo: 1, isBooked: false,isAvilable:true },
          { seatNo: 2, isBooked: false,isAvilable:true },
          { seatNo: 3, isBooked: false,isAvilable:true },
          { seatNo: 4, isBooked: false,isAvilable:true },
          { seatNo: 5, isBooked: false,isAvilable:true },
          { seatNo: 6, isBooked: false,isAvilable:true },
          { seatNo: 7, isBooked: false,isAvilable:true },
          { seatNo: 8, isBooked: false,isAvilable:true },
          { seatNo: 9, isBooked: false,isAvilable:true },
        ],
        price: 240,
      },
    ],
    currentShowBill:0.0,
  },
];

const initialState = {
  showsList: showsList,
  showSelected: "",
  seats: [
    {
      list: [],
      price: 320,
    },
    {
      list: [],
      price: 280,
    },
    {
      list: [],
      price: 240,
    },
  ],
  currentShowBill:0.0,
  serviceTax:0.0,
  SwachhBharatCess:0.0,
  KrishiKalyanCess:0.0,
  totalAmount:0.0

};

const show_Slice = createSlice({
  name: "show",
  initialState: initialState,
  reducers: {
    showSelectedShow(state, action) {
      state.showSelected = action.payload;
      const index = state.showsList.findIndex(x=>x.show === action.payload)
      if(index>-1)
        state.seats = state.showsList[index].seats
        
    },

    selectSeat(state, action) {
      const { show,category, seatNo } = action.payload;
      state.seats[category].list = state.seats[category].list.map((item)=>{
          if(item.seatNo === seatNo)
            item.isBooked = !item.isBooked
          return(
             item
          );
      })
      const index = state.showsList.findIndex(x=>x.show === show)
      state.showsList[index].seats = state.seats;

    },

    bookSeat(state){
        state.seats.forEach((item)=>{
            item.list.forEach((seat)=>{
                if(seat.isBooked)
                    seat.isAvilable = false
            }
            )
        })

        //add the current amount to total revenue
        const index = state.showsList.findIndex(x=>x.show === state.showSelected)
        state.showsList[index].seats = state.seats;
        state.showsList[index].currentShowBill += state.currentShowBill
    },

    showBookingBill(state,action){
        let totalAmount=0
        state.seats.forEach(item => {
            item.list.forEach(p=>{
                if(p.isBooked && p.isAvilable)
                    totalAmount+= item.price;
            })
        });
        state.currentShowBill = totalAmount
        state.serviceTax = parseFloat(totalAmount*(14/100)).toFixed(2)
        state.SwachhBharatCess = parseFloat(totalAmount*(0.5/100)).toFixed(2)
        state.KrishiKalyanCess = parseFloat(totalAmount*(0.5/100)).toFixed(2)
        state.totalAmount = (parseFloat(state.currentShowBill) + parseFloat(state.serviceTax) + parseFloat(state.SwachhBharatCess) + parseFloat(state.KrishiKalyanCess)).toFixed(2)
    },

    totalRevenue(state,action){
        let totalRevenue=0
        state.showsList.forEach(item => {
            totalRevenue+= item.currentShowBill
        });
        
        state.currentShowBill = totalRevenue
        state.serviceTax = parseFloat(totalRevenue*(14/100)).toFixed(2)
        state.SwachhBharatCess = parseFloat(totalRevenue*(0.5/100)).toFixed(2)
        state.KrishiKalyanCess = parseFloat(totalRevenue*(0.5/100)).toFixed(2)
        state.totalAmount = (parseFloat(state.currentShowBill) + parseFloat(state.serviceTax) + parseFloat(state.SwachhBharatCess) + parseFloat(state.KrishiKalyanCess)).toFixed(2)
    }

  },
});

export const showAction = show_Slice.actions;
export default show_Slice;
