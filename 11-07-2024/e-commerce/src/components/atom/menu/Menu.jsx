import styles from "./menu.module.css";
const menu = ["Collection", "Men", "Women", "About", "Contact"];

function Menu() {
  return (
    <div className={styles.menuContainer}>
      <ul className={styles.menuList}>
        {menu.map((listItem) => {
          return (
            <li key={listItem} className={styles.menuItem}>
              <a href="#">{listItem}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Menu;
