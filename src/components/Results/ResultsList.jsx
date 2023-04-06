import { useEffect, useState } from "react"
import MyProductItem from "../UI/MyProductItem"
import { useDispatch, useSelector } from "react-redux"
import { useResultsList } from "../hooks/useResultsList";
import axios from "axios";

export default function ResultsList() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  console.log(state.camera)

  const [resultsList, setResultsList] = useState([]) // Стейтим полученный от ДБ массив объявлений. Потом будем по нему фильтроваться. В реальной ситуации неплохо бы получать от бэка готовый массив объявления по массиву значений (особенно удачно если запрос будем посылать по сабмиту формы с фильтрами) или хотя бы статичный крупно фильтрованный для последющей мелкой фильтрации на фронте

  const filteredResultsList = useResultsList(  // Здесь мы собираем наш массив объявлений
    dispatch,
    resultsList, 
    state.type, 
    state.minMax, 
    state.sort,
    state.estate,
    state.laptop,
    state.camera,
    )

  async function getItemList() {
    const response = await axios('https://mock.pages.academy/store/db')
    setResultsList(response.data.products)
    console.log(response.data.products)
  }

  useEffect(() => {
    getItemList()
  }, [])

  return (
    <ul className="results__list">
      {!filteredResultsList.length ?
        <>
          <p>Нет подходящих объявлений.</p>
          <p>Попробуйте изменить фильтры или сбросить.</p>
        </>
        :
        filteredResultsList.map(el => {
          return <MyProductItem key={el['publish-date']}  product={el}/>
        })
      }
    </ul>
  )
}