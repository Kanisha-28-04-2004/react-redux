import { combineReducers } from 'redux';
import { SET_FILTER, SET_SORT } from './actions';

const initialState = {
  filter: '',
  sort: {
    sortKey: 'sno',
    sortOrder: 'asc',
  },
  studentsData: [
    { sno: 1, rollNumber: '76', name: 'Kanisha', marks: 85 },
    { sno: 2, rollNumber: '176', name: 'Anand', marks: 90 },
    { sno: 3, rollNumber: '80', name: 'Karthick', marks: 70 },
    { sno: 4, rollNumber: '180', name: 'Rajan', marks: 60 },
  ],
};

const filterReducer = (state = initialState.filter, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
};

const sortReducer = (state = initialState.sort, action) => {
  switch (action.type) {
    case SET_SORT:
      return action.payload;
    default:
      return state;
  }
};

const studentsReducer = (state = initialState.studentsData, action) => {
  return state;
};

const rootReducer = combineReducers({
  filter: filterReducer,
  sort: sortReducer,
  studentsData: studentsReducer,
});

export default rootReducer;
