
import Link from "next/link";
import styles from './homepage.module.css'
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";
import Pagination from "@/components/pagination/Pagination";
import Card from "@/components/card/Card";
import Category from "@/components/category/Category";
export default function Home() {
  return(
    <div className={styles.container}>
      <Featured />
      <Category />
      <div className={styles.content}>
      <Card />
      <Menu />
      </div>
    </div>
  )
}