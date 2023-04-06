import { useMemo } from "react";
import { getMinMax } from "../Utilities/getMinMax";

const useTypeSortedResults = (resultsList, categories, dispatch) => {
  const sortByType = useMemo(() => { // Мемоизируемся, чтобы не фильтроваться по каждому чиху
    if (!resultsList.length) return [] // При первичном рендере (до момента получения массива объявлений от ДБ) возвращает пустой массив объявлений

    if (categories === 'Все') { // Если показывается весь массив объявлений (дефолтное состояние), то развернуть дефолтный массив в новый и вернуть его. Задать мин/макс значения слайдера и его ползунков
      getMinMax(resultsList, dispatch)
      return [...resultsList] // Разорачиваем массив чтобы получить немемоизированное значение от функции useMinMaxSorterResults
    }

    // Отфильтровать массив объявлений по типу, задать мин/макс слайдера и его ползунков
    const filteredResultsList = [...resultsList
      .filter(el => categories === el.category)]

    getMinMax(filteredResultsList, dispatch)
    return filteredResultsList

  }, [resultsList, categories])

  return sortByType
}

const useMinMaxSorterResults = (resultsList, rangeMIN, rangeMAX) => {
  const sortByMinMax = useMemo(() => { // Мемоизируемся, чтобы не фильтроваться по каждому чекбоксу

    // в случае непредвиденных значений вернуть массив без фильтрации. Можно выдавать ошибку и просить пользователя перезагрузить приложение
    if (rangeMIN < 0 || rangeMAX < 0 || Number.isNaN(+rangeMIN) || Number.isNaN(+rangeMAX)) return

    // отфильтровать массив объявления по предельным значениям стоимости
    const filteredResultsList = [...resultsList
      .filter(el => el.price >= rangeMIN && el.price <= rangeMAX)]
    
    return filteredResultsList
  }, [resultsList, rangeMIN, rangeMAX])

  return sortByMinMax
}

const useSortesResults = (arr, value) => {
  switch (value) {
    case 'popular': {
      return arr.sort((a, b) => a.seller.rating - b.seller.rating)
      // return arr.sort(() => Math.floor(Math.random() * 2 - 1).toString())
    }
    case 'cheap': {
      return arr.sort((a, b) => a.price - b.price)
    }
    case 'new': {
      return arr.sort((a, b) => b['publish-date'] - a['publish-date'])
    }
  }
}

const getEstateSorted = (arr, type, rooms, square) => {
  let resultArr = arr
    if (type.length) resultArr = type
      .reduce((acc, el) => acc = [...acc, ...resultArr
      .filter(i => i.filters.type === el)], [])

    if (Number(rooms) > 0) resultArr = resultArr.filter(i => i.filters['rooms-count'] === rooms)

    if (Number(square) > 0) resultArr = resultArr.filter(i => i.filters.area >= square)
    
  return resultArr
}


const getLaptopSorted = (arr, laptopType, ram, diagonal, processor) => {
    if (laptopType.length) arr = laptopType
      .reduce((acc, el) => acc = [...acc, ...arr
      .filter(i => i.filters.type === el)], [])

    if (Number(ram) > 0) arr = arr.filter(i => i.filters['ram-value'] >= ram)

    if (Number(diagonal) > 0) arr = arr.filter(i => i.filters['screen-size'] >= diagonal)

    if (processor.length) arr = processor
      .reduce((acc, el) => acc = [...acc, ...arr
      .filter(i => i.filters['cpu-type'] === el)], [])
    
  return arr
}


const getCameraSorted = (arr, cameraType, matrixRes, supporting) => {
  if (cameraType.length) arr = cameraType
    .reduce((acc, el) => acc = [...acc, ...arr
    .filter(i => i.filters.type === el)], [])

  if (Number(matrixRes) > 0) arr = arr.filter(i => i.filters['matrix-resolution'] >= matrixRes)
  
  if (supporting !== 'any') arr = arr.filter(i => i.filters.supporting === supporting)
  
return arr
}

// ОСНОВНАЯ ФУНКЦИЯ-СБОРЩИК
export const useResultsList = (
  dispatch,
  resultsList, 
  {categories}, 
  {rangeMIN, rangeMAX},
  {sort},
  {type, rooms, square},
  {laptopType, ram, diagonal, processor},
  {cameraType, matrixRes, supporting},
  ) => {
  let typeSortedResults = useTypeSortedResults(resultsList, categories, dispatch)

  switch (categories) {
    case 'Недвижимость':
      typeSortedResults = getEstateSorted(typeSortedResults, type, rooms, square)      
      break;

    case 'Ноутбук':
      typeSortedResults = getLaptopSorted(typeSortedResults, laptopType, ram, diagonal, processor)
      break;

    case 'Фотоаппарат':
      typeSortedResults = getCameraSorted(typeSortedResults, cameraType, matrixRes, supporting)
      break;
  
    default:
      break;
  }

  const minMaxSortedResuls = useMinMaxSorterResults(typeSortedResults, rangeMIN, rangeMAX)
  useSortesResults(minMaxSortedResuls, sort)

  return minMaxSortedResuls
}