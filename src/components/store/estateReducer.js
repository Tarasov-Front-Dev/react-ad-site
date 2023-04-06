const defaultState = {
  type: [],
  rooms: '',
  square: '',
}

export const estateReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'estate-type':
      if (!action.payload) return {...state, type: []}
      if (state.type.includes(action.payload)) {
        return {...state, type: state.type.filter((el) => el !== action.payload)}
      }

      // state.type.push(action.payload)
      return {...state, type: [...state.type, action.payload]}

    case 'rooms':
      return {...state, rooms: +action.payload}
      
    case 'square':
      return {...state, square: action.payload}

    default:
      return state
  }
}