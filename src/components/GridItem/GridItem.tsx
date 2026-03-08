import style from "./GridItem.module.css";
interface GridItemPropse {
  children: React.ReactNode;
}

export default function GridItem({ children }: GridItemPropse) {
  return <li className={style.item}>{children}</li>;
}
