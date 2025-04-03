'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  imageUrl = null,
  githubUrl = null,
  demoUrl = null,
  featured = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`project-card overflow-hidden ${featured ? 'col-span-1 md:col-span-2 lg:col-span-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48 md:h-64">
        {imageUrl ? (
          <div className={`transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 z-10"></div>
            <div className="w-full h-full bg-blue-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Tecnologías:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-3">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
          
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
            Proyectos
          </h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto">
            Explora los proyectos desarrollados por Wisrovi Rodriguez, desde soluciones de inteligencia artificial hasta librerías para simplificar el desarrollo.
          </p>
          
          {/* Featured Project - wyoloservice */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              Proyecto Destacado
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl overflow-hidden shadow-lg">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">wyoloservice</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Una plataforma revolucionaria que democratiza el entrenamiento de modelos de visión por computadora. 
                    Permite a cualquier persona, sin conocimientos de programación, entrenar modelos YOLO en un cluster 
                    distribuido, eliminando las barreras técnicas tradicionales en el campo de la visión artificial.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Entrenamiento de modelos sin escribir código</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Arquitectura distribuida para entrenamiento en cluster</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Interfaz intuitiva para gestión de datasets y modelos</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Escalabilidad para múltiples servidores de entrenamiento</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">Docker</span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">Python</span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">YOLO</span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">Computer Vision</span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">Distributed Systems</span>
                  </div>
                  <div className="mt-4">
                    <a 
                      href="https://github.com/wisrovi/wyoloservice" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Ver en GitHub
                    </a>
                  </div>
                </div>
                <div className="lg:w-1/2 bg-blue-600 flex items-center justify-center p-8">
                  <div className="w-full h-64 bg-white/10 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Other Projects */}
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Otros Proyectos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard 
              title="Visión Artificial en Semáforos Inteligentes"
              description="Sistema que optimiza el flujo de tráfico mediante análisis en tiempo real, ajustando dinámicamente los tiempos de los semáforos."
              technologies={['Computer Vision', 'Python', 'TensorFlow', 'IoT']}
              githubUrl="https://github.com/wisrovi"
            />
            
            <ProjectCard 
              title="wkafka"
              description="Librería que simplifica la integración con Apache Kafka usando decoradores en Python para procesar mensajes de manera eficiente."
              technologies={['Python', 'Kafka', 'Messaging', 'Decorators']}
              githubUrl="https://github.com/wisrovi/wkafka"
            />
            
            <ProjectCard 
              title="wmongo"
              description="Facilita el uso de MongoDB en Python con una interfaz simple para operaciones CRUD y validación de datos."
              technologies={['Python', 'MongoDB', 'Database', 'ORM']}
              githubUrl="https://github.com/wisrovi/wmongo"
            />
            
            <ProjectCard 
              title="wredis"
              description="Interacción simple y eficiente con Redis, ofreciendo métodos para operaciones comunes y estructuras avanzadas."
              technologies={['Python', 'Redis', 'Cache', 'Pub/Sub']}
              githubUrl="https://github.com/wisrovi/wredis"
            />
            
            <ProjectCard 
              title="wcontainer"
              description="Simplifica operaciones específicas con contenedores Docker, facilitando la gestión y monitoreo de recursos."
              technologies={['Python', 'Docker', 'DevOps', 'Containers']}
              githubUrl="https://github.com/wisrovi/wcontainer"
            />
            
            <ProjectCard 
              title="wpostgresql"
              description="Simplifica la interacción con bases de datos PostgreSQL, facilitando operaciones CRUD y validación de datos."
              technologies={['Python', 'PostgreSQL', 'Database', 'ORM']}
              githubUrl="https://github.com/wisrovi/wpostgresql"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
