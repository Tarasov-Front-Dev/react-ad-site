import MyAsideFilter from "./MyAsideFilter";
import MyResults from "./MyResults";

export default function MyOnlineShopApp() {
  return (
    <section className="onlineshop-app">
      <h1 className="visually-hidden">Главная</h1>
      <div className="onlineshop-app__blueline"></div>
      <div className="onlineshop-app__wrapper">
        <MyAsideFilter/>
        <MyResults/>
      </div>
    </section>
  )
}