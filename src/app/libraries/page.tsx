'use client';

import { useState } from 'react';
import Link from 'next/link';

const LibraryCard = ({ 
  name, 
  description, 
  features, 
  technologies, 
  pypiUrl, 
  githubUrl, 
  version,
  releaseDate
}) => {
  return (
    <div className="library-card mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{name}</h3>
        <div className="flex items-center mt-2 md:mt-0">
          <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
            v{version}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
            {releaseDate}
          </span>
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        {description}
      </p>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Características principales:</h4>
        <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Tecnologías:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex space-x-4">
        <a 
          href={pypiUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Ver en PyPI
        </a>
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          Ver en GitHub
        </a>
      </div>
    </div>
  );
};

const Libraries = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
            Librerías
          </h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto">
            Wisrovi Rodriguez ha desarrollado varias librerías en Python para simplificar tareas complejas y mejorar la productividad de los desarrolladores.
          </p>
          
          <div className="space-y-12">
            <div id="wkafka">
              <LibraryCard 
                name="wkafka"
                description="Simplifica la integración de Kafka con decoradores en Python, facilitando la gestión de productores y consumidores para procesar mensajes de manera eficiente."
                features={[
                  "Enfoque basado en decoradores para definir consumidores de Kafka",
                  "Soporte para diferentes tipos de datos: JSON, archivos e imágenes",
                  "Manejo de mensajes en paralelo con hilos separados",
                  "Funciona como contexto de productor para asegurar el cierre correcto de conexiones",
                  "Fácil deserialización de mensajes a JSON o imágenes",
                  "Documentado en detalle en un artículo técnico en Medium"
                ]}
                technologies={["Python", "Apache Kafka", "Multithreading", "JSON", "OpenCV"]}
                pypiUrl="https://pypi.org/project/wkafka/"
                githubUrl="https://github.com/wisrovi/wkafka"
                version="0.2.1"
                releaseDate="Feb 28, 2025"
              />
              <div className="mt-4 mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Artículo técnico destacado:</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Wisrovi ha publicado un artículo detallado sobre cómo utilizar wkafka para integrar Apache Kafka en Python de manera sencilla utilizando decoradores.
                </p>
                <a 
                  href="https://wisrovi.medium.com/wkafka-la-forma-m%C3%A1s-simple-de-integrar-apache-kafka-en-python-con-decoradores-9e04e7a3a63d" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <span>Leer artículo en Medium</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div id="wmongo">
              <LibraryCard 
                name="wmongo"
                description="Facilita la gestión de productores y consumidores de MongoDB usando un enfoque simplificado para interactuar con bases de datos MongoDB en Python."
                features={[
                  "Operaciones CRUD simplificadas",
                  "Soporte para validación de datos con Pydantic",
                  "Gestión de permisos de acceso",
                  "Integración con Redis para caché",
                  "Notificaciones de cambios en la base de datos"
                ]}
                technologies={["Python", "MongoDB", "Redis", "Pydantic", "JSON"]}
                pypiUrl="https://pypi.org/project/wmongo/"
                githubUrl="https://github.com/wisrovi/wmongo"
                version="0.1.0"
                releaseDate="Feb 1, 2025"
              />
            </div>
            
            <div id="wredis">
              <LibraryCard 
                name="wredis"
                description="Hace que la interacción con Redis sea simple y eficiente, con una API intuitiva y funciones para manejar diferentes estructuras de datos."
                features={[
                  "Métodos para operaciones comunes (SET, GET, DELETE)",
                  "Soporte para diferentes estructuras: bitmaps, hashes, sets, streams",
                  "Sistema de publicación y suscripción",
                  "Gestión de colas y conjuntos ordenados",
                  "Soporte para loguru y gestión de logs"
                ]}
                technologies={["Python", "Redis", "Pub/Sub", "Caching", "Loguru"]}
                pypiUrl="https://pypi.org/project/wredis/"
                githubUrl="https://github.com/wisrovi/wredis"
                version="0.2.2"
                releaseDate="Feb 11, 2025"
              />
            </div>
            
            <div id="wcontainer">
              <LibraryCard 
                name="wcontainer"
                description="Simplifica operaciones específicas con contenedores Docker, facilitando la gestión, monitoreo y automatización de contenedores."
                features={[
                  "Gestión de contenedores: listar, iniciar, ajustar recursos",
                  "Monitoreo de uso de recursos en tiempo real",
                  "Escaneo de imágenes en busca de vulnerabilidades",
                  "Autoajuste dinámico de recursos y escalado",
                  "Generación de informes de errores"
                ]}
                technologies={["Python", "Docker", "Trivy", "Monitoring", "Automation"]}
                pypiUrl="https://pypi.org/project/wcontainer/"
                githubUrl="https://github.com/wisrovi/wcontainer"
                version="0.1.1"
                releaseDate="Feb 14, 2025"
              />
            </div>
            
            <div id="wpostgresql">
              <LibraryCard 
                name="wpostgresql"
                description="Simplifica la interacción con bases de datos PostgreSQL, proporcionando funciones para crear, leer, actualizar y eliminar datos de manera eficiente."
                features={[
                  "Creación automática de tablas basadas en modelos Pydantic",
                  "Operaciones CRUD simplificadas",
                  "Soporte para restricciones y validación de datos",
                  "Actualización dinámica de esquemas",
                  "Integración con tipos de datos avanzados de PostgreSQL"
                ]}
                technologies={["Python", "PostgreSQL", "Pydantic", "ORM", "Database"]}
                pypiUrl="https://pypi.org/project/wpostgresql/"
                githubUrl="https://github.com/wisrovi/wpostgresql"
                version="0.1.0"
                releaseDate="Feb 6, 2025"
              />
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              ¿Necesitas una solución personalizada?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Wisrovi puede desarrollar librerías y herramientas a medida para resolver problemas específicos de tu empresa o proyecto.
            </p>
            <Link href="/contact" className="btn-cta">
              Contactar para consultas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Libraries;
