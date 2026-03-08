import style from "./Grid.module.css";
interface GridPropse {
  children: React.ReactNode;
}

export default function Grid({ children }: GridPropse) {
  return <ul className={style.list}>{children}</ul>;
}
