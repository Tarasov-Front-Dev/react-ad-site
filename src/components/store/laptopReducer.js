const defaultState = {
  laptopType: [],
  ram: '',
  diagonal: '',
  processor: [],
}

export const laptopReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'laptopType':
      if (!action.payload) return {...state, laptopType: []}

      if (state.laptopType.includes(action.payload)) {
        return {...state, laptopType: state.laptopType.filter(el => el !== action.payload)}
      }

      return {...state, laptopType: [...state.laptopType, action.payload]}

    case 'ram':
      return {...state, ram: Number(action.payload)}

    case 'diagonal':
      return {...state, diagonal: Number(action.payload)}

    case 'processor':
      if (!action.payload) return {...state, processor: []}
      if (state.processor.includes(action.payload)) {
        return {...state, processor: state.processor.filter(el => el !== action.payload)}
      }
      return {...state, processor: [...state.processor, action.payload]}
    default:
      return state
  }
}