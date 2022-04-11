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
          <div className={styles._column}> 
            <div className={styles._itemParent}>
              <div className={styles._item}>
                <img src='images/portfolio/grid-1.png' alt='image' />
              </div>
            </div>

            <div className={styles._itemParent}>
              <div className={styles._item}>
                <img src='images/portfolio/grid-1.png' alt='image' />
              </div>
            </div>
          </div>

          <div className={styles._column}> 
            <div className={styles._itemParent}>
              <div className={styles._item}>
                <img src='images/portfolio/grid-2.png' alt='image' />
              </div>
            </div>

            <div className={styles._itemParent}>
              <div className={styles._item}>
                <img src='images/portfolio/grid-2.png' alt='image' />
              </div>
            </div>
          </div>

          <div className={styles._column}> 
            <div className={styles._itemParent}>
              <div className={styles._item}>
                <img src='images/portfolio/grid-1.png' alt='image' />
              </div>
            </div>

            <div className={styles._itemParent}>
              <div className={styles._item}>
                <img src='images/portfolio/grid-1.png' alt='image' />
              </div>
            </div>
          </div>

          <div className={styles._column}>
            <div className={styles._itemParent}>
              <div className={styles._item}>
                <img src='images/portfolio/grid-2.png' alt='image' />
              </div>
            </div>

            <div className={styles._itemParent}>
              <div className={styles._item}>
                <img src='images/portfolio/grid-2.png' alt='image' />
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Grid