import React, { useEffect, useState } from 'react'
import "./Home.css";
import { }


function Home() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = setOffsetY(window.pageXOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const renderContent = () => (
        <>
        <div className='heading'>
        <h1 className='Text'>Lorem.</h1>
        <h2 className='caption'>
                 Lorem ipsum, dolor sit amet consectetur adipisicing.
            </h2>
         </div>
         <div className='cta'>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis!</p>
         </div>
         </>
    )
//     return (
//         <section className='Parallax'>
//             <div className='parallax-background' style={{ transform: 'translateY($-{offsetY * 0.5}px)' }} />
//             <div className='content'>(renderContent())</div>
//          </section>
//     )
// }

export default Home;
