import styles from "./GeneticSimulation.module.css"
import * as FaIcons from "react-icons/fa"

const GeneticSimulation = (props: any) =>
{
    const { fade } = props;
    
    return (<div className={styles.container}>
        <h1 className={styles.title}>Genetic Simulation<FaIcons.FaDesktop className={styles.icon} /></h1>
        <p>Link to our genetic simulation:</p>
        <a href="https://aagrawal05.github.io/Genetic-Evolution-Project/" target="_blank" rel="noreferrer">Genetic Simulation</a>
        <button className={styles.menuButton} onClick={() => fade('/pi-day/')}><FaIcons.FaHamburger className={styles.menuIcon} />Menu</button>
      </div>
    )
}

export { GeneticSimulation };