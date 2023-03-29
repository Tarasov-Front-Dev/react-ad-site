import { useState } from "react";
import MyCostRange from "./UI/MyCostRange";
import MySelector from "./UI/MySelector";

export default function MyFilterForm() {
  const [queue, setQueue] = useState('all')

  return (
    <form className="filter__form" action="#" method="post">
      <MySelector/>
      <MyCostRange/>
    </form>
  )
}