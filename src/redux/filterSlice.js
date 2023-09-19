import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

//======Selector======//
export const getFilter = state => state.filter.filter;

// import { createAction, createReducer } from '@reduxjs/toolkit';

// export const filterContacts = createAction('filter/filterContacts');

// const filterInitialState = '';

// export const filterReducer = createReducer(filterInitialState, builder =>
//   builder.addCase(filterContacts, (state, action) => (state = action.payload))
// );
