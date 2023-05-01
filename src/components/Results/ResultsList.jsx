import { useEffect, useState } from "react"
import MyProductItem from "../UI/MyProductItem"
import { useDispatch, useSelector } from "react-redux"
import { useResultsList } from "../hooks/useResultsList";
import axios from "axios";


export default function ResultsList() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const category = {
    'Недвижимость': state.estate,
    'Ноутбук': state.laptop,
    'Фотоаппарат': state.camera,
    'Автомобиль': state.car,
  }
  const [resultsList, setResultsList] = useState([])

  const filteredResultsList = useResultsList(  // Здесь мы собираем наш массив объявлений
    dispatch,
    resultsList, 
    state.type, 
    state.minMax, 
    state.sort,
    category[state.type.categories],
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