import { useState } from 'react'
import { useRef } from 'react';
import './App.css'
import './index.css'
import backg from './pexels-aleksandar-pasaric-2411688.jpg'
import {Experience} from './components/Experience'

import {Parallax, ParallaxLayer} from '@react-spring/parallax';



function App() {
  const ref = useRef();
  return (
    <div>
        
       <Parallax pages={4} ref={ref}>

            
          <ParallaxLayer offset={0} factor={4} style={{ backgroundImage: `url(${backg})`, backgroundSize: 'cover'  }}  >
           <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
              <img src="https://tallerdigital.cl/wp-content/uploads/2020/06/andres_barrera_byn.jpg" class="max-w-sm mask mask-parallelogram-4 opacity-90" />
              <div>
                <h1 class="text-5xl font-bold">Hola!</h1>
                <p class="py-6">Bienvenido a mi portafolio, mi nombre es Andrés y soy un programador Fullstack.</p>
              </div>
            </div>
          </div>
          </ParallaxLayer>

          <ParallaxLayer speed={0.5} offset={1} >
            <div class="hero min-h-screen ">
              <div class="hero-content text-center bg-black bg-opacity-60">
                <div class="max-w-md">

                  <h1 class="text-5xl font-bold" >Sobre mí</h1>
                  <p class="py-6">Soy alguien muy adepto a estudiar y conocer tecnologías nuevas. Estoy dispuesto a trabajar en equipos diversos con diferentes roles y me encanta lo que hago. </p>
                </div>

              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer speed={0.5} offset={2}  >
            <div class="hero min-h-screen ">
              <div class="hero-content text-center bg-black bg-opacity-60">
                <div class="max-w">

                  <h1 class="text-5xl font-bold">Experiencia y proyectos</h1>
                  <Experience />

                </div>

              </div>
            </div>
          </ParallaxLayer>

         

          <ParallaxLayer speed={0.5} offset={3} >
           <div class="hero min-h-screen ">
              <div class="hero-content text-center bg-black bg-opacity-60">
                <div class="max-w">

                  <h1 class="text-5xl font-bold">Actualmente</h1>
                   <p class="py-6">Me encuentro estudiando nuevas herramientas de manera autodidacta para utilizarlas tanto en mi actual trabajo como en proyectos independientes . </p>
                   <ul class="menu menu-horizontal text-5xl rounded-box">
                     <li class="tooltip" data-tip="React">
                       <a class="devicon-react-plain" >
                       </a>
                     </li>
                     <li class="tooltip" data-tip="Express">
                       <a class="devicon-express-original">
                       </a>
                     </li>
                     <li class="tooltip" data-tip="MongoDB">
                       <a class="devicon-mongodb-plain">
                       </a>
                     </li>
                     <li class="tooltip" data-tip="Flutter">
                       <a class="devicon-flutter-plain">
                       </a>
                     </li>
                   </ul>
                </div>

              </div>
            </div>
          </ParallaxLayer>

         
           


       </Parallax>
         <div class="navbar">
           <div class="navbar-start">
             <div class="dropdown">
               <label tabindex="0" class="btn btn-ghost btn-circle ">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
               </label>
               <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 ">
                <li><span class="fill-current" onClick={() => ref.current.scrollTo(0)}>Inicio</span></li>
                 <li><span class="fill-current" onClick={() => ref.current.scrollTo(1)}>Sobre mi</span></li>
                 <li><span class="fill-current" onClick={() => ref.current.scrollTo(2)}>Experiencia y proyectos</span></li>
                 <li><span class="fill-current" onClick={() => ref.current.scrollTo(3)}>Actualmente</span></li>
               </ul>
             </div>
            
           </div>
           <div class="navbar-end relative ">
             <label tabindex="0" class="btn btn-ghost btn-circle">
               <a href="https://www.linkedin.com/in/andrés-barrera-soza-b12713141" target="_blank"><span class="fill-current w-24 h-24 text-3xl"><i class="fa-brands fa-linkedin"></i></span></a>
             </label>
             <button class="btn btn-ghost btn-circle">
               <a href="https://github.com/frontier7x" target="_blank"><span class="fill-current w-24 h-24 text-3xl"><i class="fa-brands fa-github"></i></span></a>    
             </button>
             <button class="btn btn-ghost btn-circle">
                 <a href="mailto:andres.bs.94@gmail.com" target="_blank"><span class="fill-current w-24 h-24 text-3xl"><i class="fa fa-envelope"></i></span></a>  
             </button>
           </div>
         </div>
    </div>
  )
}

export default App
