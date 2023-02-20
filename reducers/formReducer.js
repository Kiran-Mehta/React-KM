const formReducer=(state, action)=>{
    switch (action.type){
      case "Change input text":
        return {
            ...state,
            [action.field]: action.value,
        }
    default: 
     return state;
    }

};

export default formReducer;