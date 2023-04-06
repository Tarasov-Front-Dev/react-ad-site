const defaultState = {
  cameraType: [],
  matrixRes: 'any',
  supporting: 'any',
}

export const cameraReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'camera-type':
      if (!action.payload) return {...state, cameraType: []}
      if(state.cameraType.includes(action.payload)) {
        return {...state, cameraType: state.cameraType.filter(el => el !== action.payload)}
      }
      return {...state, cameraType: [...state.cameraType, action.payload]}

    case 'resolution-matrix':
      return {...state, matrixRes: Number(action.payload)}

    case 'resolution-video':
      return {...state, supporting: action.payload}

    default:
      return state
  }
}