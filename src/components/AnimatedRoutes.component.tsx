import React, { useState, useEffect, useCallback } from 'react'; 
import { Routes, Route, useNavigate, To } from "react-router-dom";
// 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
import { motion } from 'framer-motion'; 

import LandingPage from '../pages/LandingPage.component';
import { SynergyGame } from '../pages/SynergyGame.component';
import { Visualiser } from '../pages/Visualiser.component';
import { GeneticSimulation } from '../pages/GeneticSimulation.component';

function AnimatedRoutes()
{
    const navigate = useNavigate();

    const [isFading, setIsFading] = useState(false); 

    const fade = useCallback((url: To, state=undefined) => 
    {
        setIsFading(true); 
        setTimeout(() => 
        {
            if (state === undefined)
                navigate(url)
            else
                navigate (url, { state });

            setIsFading(false); 
        }, 200); 
    }, [navigate]);


    // Use useEffect such that when the page is reloaded, the page will automatically be rerouted to /pi-day/
    useEffect(() => {
        fade('/pi-day/');
    }, []);

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: isFading ? 0 : 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <Routes>
                <Route path="/pi-day/" element={<LandingPage fade={fade} />} />
                <Route path="/pi-day/simulation" element={<GeneticSimulation fade={fade} />} />
                <Route path="/pi-day/visualiser" element={<Visualiser fade={fade} />} />
                <Route path="/pi-day/synergy" element={<SynergyGame fade={fade} />} />
                <Route path="*" element={<LandingPage fade={fade} />} />
            </Routes>
        </motion.div>
    )
}

export default AnimatedRoutes; 