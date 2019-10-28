import {
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from '../actions/types';
import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    // The Lodash (_) mapKeys function, takes an array of objects, and use a attribute of each object as the key
    case FETCH_STREAM:
    case CREATE_STREAM:
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    // Omit creates an object with the elements on the first parameter that doesn't appear in the first parameter
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
