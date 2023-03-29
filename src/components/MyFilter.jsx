import MyFilterForm from "./MyFilterForm";

export default function MyAsideFilter() {
  return (
    <section className="onlineshop-app__filter filter">
      <h2 className="title filter__title">Фильтр</h2>
      <MyFilterForm/>
    </section>
  )
}