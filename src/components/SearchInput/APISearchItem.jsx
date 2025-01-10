import React from "react";
import { Link } from "react-router-dom";

export const movieItemsSearch = [
  "Безхатній Бог - Нораґамі",
  "Ручна поклажа",
  "Дедпул і Росомаха",
  "S.T.A.L.K.E.R. Тінь Зони",
  "Аркейн",
  "Уявні друзі",
  "Гра у кальмара",
  "Батальйон 6888",
  "Монолог травниці",
  "Аватар: Останній захисник",
  <Link to={"/searchDetalic"}> More...</Link>,
];

const APISearchItem = () => {
  return <div>APISearchItem</div>;
};

export default APISearchItem;
