const defaultState = {
  carType: [],
  carYear: 2008,
  transmission: '',
}

export const carReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'car-body':
      if (!action.payload) return {...state, carType: []}
      if(state.carType.includes(action.payload)) {
        return {...state, carType: state.carType.filter(el => el !== action.payload)}
      }
      return {...state, carType: [...state.carType, action.payload]}

    case 'car_year':
      return {...state, carYear: Number(action.payload)}

    case 'transmission':
      return {...state, transmission: action.payload}

    default:
      return state
  }
}