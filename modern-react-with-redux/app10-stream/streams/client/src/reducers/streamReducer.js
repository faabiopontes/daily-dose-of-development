import {
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from '../actions/types';

export default (state, {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
    case CREATE_STREAM:
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

// Array-based approach
// const streamReducer = (state=[], action) => {
//   switch (action.type) {
//     case EDIT_STREAM:
//       return state.map(stream => {
//         if(stream.id === action.payload.id) {
//           return action.payload;
//         } else {
//           return stream;
//         }
//       });
//     default:
//       return state;
//   }
// }

// Object-base approach
// const streamReducer = (state={}, action) => {
//   switch(action.type) {
//     case EDIT_STREAM:
//       Old
//       const newState = { ...state };
//       newState[action.payload.id] = action.payload;
//       return newState;

//       ES6 with key-interpolation
//       return { ...state, [action.payload.id]: action.payload };
//     default:
//       return state;
//   }
// };
