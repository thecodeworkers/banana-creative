import styles from './styles.module.scss'

const Grid = () => {
  return (
    <div className={styles._main}>
      <div className={styles._filters}>
        <ul className={styles._list}>
          <li> All </li>
          <li> Brand </li>
          <li> Productions </li>
          <li> UI/UX </li>
          <li> Moda </li>
          <li> Mograph </li>
          <li> packaging </li>
        </ul>
      </div>

      <div className={styles._grid}>
        <div className={styles._gridChild}>
          <div className={styles._box2}>
            <img src='images/portfolio/grid-1.png' ></img>
          </div>

          <div className={styles._box2}>
            <img src='images/portfolio/grid-2.png'></img>
          </div>

          <div className={styles._box2}>
            <img src='images/portfolio/grid-1.png' ></img>
          </div>

          <div className={styles._box2}>
            <img src='images/portfolio/grid-2.png'></img>
          </div>

          <div className={styles._box2}>
            <img src='images/portfolio/grid-1.png' ></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Grid