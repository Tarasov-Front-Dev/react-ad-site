import { useEffect, useState } from "react"
import MyProductItem from "../UI/MyProductItem"
import { useDispatch, useSelector } from "react-redux"
import { useResultsList } from "../hooks/useResultsList";

let count = 0;

export default function Results__list() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const [resultsList, setResultsList] = useState([]) // Стейтим полученный от ДБ массив объявлений. Потом будем по нему фильтроваться. В реальной ситуации неплохо бы получать от бэка готовый массив объявления по массиву значений (особенно удачно если запрос будем посылать по сабмиту формы с фильтрами) или хотя бы статичный крупно фильтрованный для последющей мелкой фильтрации на фронте

  const filteredResultsList = useResultsList(resultsList, state, dispatch) // Здесь мы собираем наш массив объявлений

  async function getItemList() {
    const response = await fetch('https://mock.pages.academy/store/db')
    const result = await response.json()
    setResultsList(result.products)
  }

  useEffect(() => {
    getItemList()
  }, [])

  console.log('render', ++count)

  return (
    <ul className="results__list">
      {!filteredResultsList.length ? 
        <h1>Loading...</h1> :
        filteredResultsList.map(el => {
          return <MyProductItem key={el['publish-date']}  product={el}/>
        })
      }
    </ul>
  )
}