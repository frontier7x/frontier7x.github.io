import { useState } from 'react'
import { useRef } from 'react';


export function Experience() {
	return(
		<div>
			<div class="collapse pointer-events-auto" >
			  <input type="checkbox" /> 
			  <div class="collapse-title font-medium text-xl py-16">
			    Backend Developer - ETpay (2023 - Present) <i class="fa fa-toggle-down"></i>
			  </div>
			  <div class="collapse-content"> 
			    <div class="mockup-window border bg-base-300">
			  	  <div class="flex md:justify-center px-4 py-16 bg-base-200">
			  	  	  	<ul class="list-inside list-disc">
			  	  	  	    <li class="md:text-justify">Desarrollo nuevas funciones para sistemas transaccionales .  </li>
			  	  	  	    <li class="md:text-justify">Desarrollo nuevos productos transaccionales .  </li>
							<ul class="menu menu-horizontal text-5xl rounded-box m-3">
			  	  	  	      <li>
			  	  	  	        <a class="devicon-nodejs-plain">
			  	  	  	        </a>
			  	  	  	      </li>
			  	  	  	      <li>
			  	  	  	        <a class="devicon-python-plain-wordmark">
			  	  	  	        </a>
			  	  	  	      </li>
			  	  	  	      <li>
			  	  	  	        <a class="devicon-amazonwebservices-plain">
			  	  	  	        </a>
			  	  	  	      </li>
			  	  	  	      <li>
			  	  	  	        <a class="devicon-git-plain">
			  	  	  	        </a>
			  	  	  	      </li>
			  	  	  	      <li>
			  	  	  	        <a class="devicon-gitlab-plain">
			  	  	  	        </a>
			  	  	  	      </li>
			  	  	  	      <li>
			  	  	  	        <a class="devicon-mongodb-plain">
			  	  	  	        </a>
			  	  	  	      </li>
							  <li>
								<a class="devicon-redis-plain"></a>
							  </li>
			  	  	  	    </ul>
			  	  	  	</ul>
			  	  </div>
			  	</div>
			  </div>
			</div>
			
			<div class="collapse pointer-events-auto" >
			  <input type="checkbox" /> 
			  <div class="collapse-title font-medium text-xl py-16">
			    Este portafolio <i class="fa fa-toggle-down"></i> 
			  </div>
			  <div class="collapse-content"> 
			  	<div class="mockup-window border bg-base-300">
			  	  <div class="flex md:justify-center px-4 py-16 bg-base-200">
			  	  	<p class="md:text-justify">Utiliza Vite, React, TailwindCSS principalmente; además se agregan los plugins React-spring/parallax y DaisyUI para el diseño. La imagen de fondo esta en <a href="https://www.pexels.com/photo/urban-photo-of-an-alley-2411688/" class="hover:text-sky-800" target="_blank">Pexels</a>  y el tutorial utilizado es de <a href="https://www.youtube.com/watch?v=UgIwjLg4ONk" class="hover:text-sky-800" target="_blank">Fireship</a> 
			  	  
			  	  	</p>
			  	  	
			  	  </div>
			  	</div>
			  </div>
			</div>


			<div class="collapse pointer-events-auto" >
			  <input type="checkbox" /> 
			  <div class="collapse-title font-medium text-xl py-16">
			    Lead Developer - Taller Digital (2018 - 2023) <i class="fa fa-toggle-down"></i> 
			  </div>
			  <div class="collapse-content"> 
			  	<div class="mockup-window border bg-base-300">
			  	  <div class="flex md:justify-center px-4 py-16 bg-base-200">
			  	  	  	<ul class="list-inside list-disc ">
			  	  	  	      <li class="md:text-justify">Diseño e implementación <a href="http://fidelizaleads.cl" class="hover:text-sky-800" target="_blank">Fidelizaleads</a> V1, diseño V2.
			  	  	  	        Plataforma para clasificar leads de ventas inmobiliarias.
			  	  	  	      </li>
			  	  	  	      <li class="md:text-justify">Diseño implementación y mejoras <a href="https://www.monocontact.com" class="hover:text-sky-800" target="_blank">MonoContact</a>. 
			  	  	  	        Plataforma de email marketing, gestión de contactos y formularios en la nube.
			  	  	  	      </li>
			  	  	  	      <li class="md:text-justify">Implementación CRM  - <a href="https://www.monocontact.com" class="hover:text-sky-800" target="_blank">MonoContact</a>, Municipalidad de Lo Barnechea. 
			  	  	  	        Módulo CRM realizado para la Municipalidad de Lo Barnechea, manejo de solicitudes de vecinos mediante formularios externos.
			  	  			  </li>
			  	  			  	<ul class="menu menu-horizontal text-5xl rounded-box m-3">
			  	  			  	  <li>
			  	  			  	    <a class="devicon-php-plain">
			  	  			  	    </a>
			  	  			  	  </li>
			  	  			  	  <li class="tooltip" data-tip="Yii 1.1">
			  	  			  	    <a class="devicon-yii-plain-wordmark">
			  	  			  	    </a>
			  	  			  	  </li>
			  	  			  	  <li class="tooltip" data-tip="Javascript">
			  	  			  	    <a class="devicon-javascript-plain">
			  	  			  	    </a>
			  	  			  	  </li>
								  <li class="tooltip" data-tip="NodeJS">
			  	  			  	    <a class="devicon-nodejs-plain">
			  	  			  	    </a>
			  	  			  	  </li>
								  <li class="tooltip" data-tip="TypeScript">
			  	  			  	    <a class="devicon-typescript-plain">
			  	  			  	    </a>
			  	  			  	  </li>
			  	  			  	  <li class="tooltip" data-tip="Git">
			  	  			  	    <a class="devicon-git-plain">
			  	  			  	    </a>
			  	  			  	  </li>
			  	  			  	  <li class="tooltip" data-tip="Jquery">
			  	  			  	    <a class="devicon-jquery-plain">
			  	  			  	    </a>
			  	  			  	  </li>
			  	  			  	  <li class="tooltip" data-tip="MySQL">
			  	  			  	    <a class="devicon-mysql-plain">
			  	  			  	    </a>
			  	  			  	  </li>
			  	  			  	  <li class="tooltip" data-tip="Html5">
			  	  			  	    <a class="devicon-html5-plain">
			  	  			  	    </a>
			  	  			  	  </li>
								  <li class="tooltip" data-tip="Python">
			  	  			  	    <a class="devicon-python-plain">
			  	  			  	    </a>
			  	  			  	  </li>
			  	  			  	</ul>
			  	  	  	</ul>
			  	  </div>
			  	</div>
			  </div>
			</div>

			<div class="collapse pointer-events-auto" >
			  <input type="checkbox" /> 
			  <div class="collapse-title font-medium text-xl py-16">
			    Backend Developer - Workmate (2017 - 2018) <i class="fa fa-toggle-down"></i>
			  </div>
			  <div class="collapse-content"> 
			    <div class="mockup-window border bg-base-300">
			  	  <div class="flex md:justify-center px-4 py-16 bg-base-200">
			  	  	  	<ul class="list-inside list-disc">
			  	  	  	    <li class="md:text-justify">Desarrollo versión de prueba para sistema de Abastecimiento, acreditación de solicitudes.  </li>
			  	  	  	    <ul class="menu menu-horizontal text-5xl rounded-box m-3">
			  	  	  	      <li>
			  	  	  	        <a class="devicon-php-plain">
			  	  	  	        </a>
			  	  	  	      </li>
			  	  	  	      <li>
			  	  	  	        <a class="devicon-laravel-plain-wordmark">
			  	  	  	        </a>
			  	  	  	      </li>
			  	  	  	      <li>
			  	  	  	        <a class="devicon-javascript-plain">
			  	  	  	        </a>
			  	  	  	      </li>
			  	  	  	      <li>
			  	  	  	        <a class="devicon-git-plain">
			  	  	  	        </a>
			  	  	  	      </li>
			  	  	  	      <li>
			  	  	  	        <a class="devicon-mysql-plain">
			  	  	  	        </a>
			  	  	  	      </li>
			  	  	  	      <li>
			  	  	  	        <a class="devicon-html5-plain">
			  	  	  	        </a>
			  	  	  	      </li>
			  	  	  	    </ul>
			  	  	  	</ul>
			  	  </div>
			  	</div>
			  </div>
			</div>


		</div>
	);
}
