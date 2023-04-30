import { About } from '@components/About/About';
import { Entradas } from '@components/Entradas/Entradas';
import { Galeria } from '@components/Galeria';
import { Productos } from '@components/Productos/Productos';
import React from 'react';

const Home = () => {
    
    return(
        <div>
            <Galeria/>
            <About/>
            <Entradas/>
            <Productos cantidad='4'/>
        </div>
    );
};

export default Home;