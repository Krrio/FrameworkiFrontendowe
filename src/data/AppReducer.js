// src/data/AppReducer.js
export default function AppReducer(state, action) {
    switch (action.type) {
        case "edit":
            console.log("Edited item with ID:", action.id);
            return state;
  
      case "delete":
        return state.filter(item => item.id !== action.id);
  
      case "rate": {
        return state.map(item => 
          item.id === action.id ? { ...item, rating: action.rating } : item
        );
      }
  
      default:
        return state;
    }
  }
  