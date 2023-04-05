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
      return arr.sort(() => Math.floor(Math.random() * 2 - 1).toString())
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

    if (Number(rooms)) resultArr = resultArr.filter(i => i.filters['rooms-count'] === rooms)

    if (square) resultArr = resultArr.filter(i => i.filters.area >= square)
    
  return resultArr
}


// ОСНОВНАЯ ФУНКЦИЯ-СБОРЩИК
export const useResultsList = (
  dispatch,
  resultsList, 
  {categories}, 
  {rangeMIN, rangeMAX},
  {sort},
  {type, rooms, square},
  ) => {
  let typeSortedResults = useTypeSortedResults(resultsList, categories, dispatch)

  if (categories === 'Недвижимость') {
    typeSortedResults = getEstateSorted(typeSortedResults, type, rooms, square)
  }

  const minMaxSortedResuls = useMinMaxSorterResults(typeSortedResults, rangeMIN, rangeMAX)
  useSortesResults(minMaxSortedResuls, sort)

  return minMaxSortedResuls
}
//   const typeSortedResults = useTypeSortedResults(resultsList, categories, dispatch)
//   const minMaxSortedResuls = useMinMaxSorterResults(typeSortedResults, rangeMIN, rangeMAX)
//   useSortesResults(minMaxSortedResuls, sort)

//   if (categories === 'Недвижимость') {
//     const estateSorted = getEstateSorted(minMaxSortedResuls, type, rooms, square)
//     return estateSorted
//   }

//   return minMaxSortedResuls
// }