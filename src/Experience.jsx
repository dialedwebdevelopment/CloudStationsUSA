import { Suspense, useEffect, useState } from 'react'
import { OrbitControls, Environment, Float, SoftShadows } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Model from './Model'
gsap.registerPlugin(ScrollTrigger)

export default function Experience() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    // Add event listener to listen for window resize
    window.addEventListener('resize', handleResize);

    // Initial check for mobile device on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(isMobile)
  

  return (
    <>
      <SoftShadows intensity={ 20 } />
      <Suspense fallback >
        <Float rotationIntensity={ 0.5 } floatIntensity={ 0.5 } speed={ 2 } >
          <Model rotation={ [ 0, Math.PI * -0.1, 0 ] } scale={ isMobile ? 4 : 5 } />
        </Float>
      </Suspense>
      <ambientLight />  
      <Environment preset='sunset' />
      </>
  )
}