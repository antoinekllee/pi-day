import * as FaIcons from "react-icons/fa"

import classes from './LandingPage.module.css'

function LandingPage (props: { fade: (arg0: string) => void; })
{
    return <div className={classes.container}> 
        <div className={classes.mainContainer}>
            <h1 className={classes.title}>PI Day<FaIcons.FaChartPie className={classes.icon} /></h1>
            <p>Welcome to PI Day 2023 at UWCSEA! We aim to celebrate math with a variety of activities, presentations, and performances. Organized by Project 0 Lab and the Maths Department. The festival features topics such as topology, music and Fourier transform, decision making, genetic simulation, AI ethics, and more. The event offers opportunities to explore the beauty and importance of mathematics in our daily lives.</p>
            <div className={classes.buttons}>
                <button onClick={() => props.fade('/pi-day/simulation')}><FaIcons.FaDesktop className={classes.buttonIcon} />Simulation</button>
                <button onClick={() => props.fade('/pi-day/visualiser')}><FaIcons.FaHeadphones className={classes.buttonIcon} />Visualiser</button>
                <button onClick={() => props.fade('/pi-day/synergy')}><FaIcons.FaLightbulb className={classes.buttonIcon} />Synergy</button>
            </div>
        </div>
    </div> 
}

export default LandingPage; 