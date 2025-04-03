'use client';

import { useState } from 'react';

// Componente para métricas de impacto
const ImpactMetrics = () => {
  const [activeTab, setActiveTab] = useState('performance');
  
  // Datos de métricas (en una implementación real, estos vendrían de una API o CMS)
  const metrics = {
    performance: [
      {
        id: 'metric-1',
        title: 'Reducción de tiempo de procesamiento',
        value: '78%',
        description: 'Mejora en el tiempo de procesamiento de imágenes utilizando la API de reconocimiento facial',
        project: 'api_face_recognition',
        icon: 'clock'
      },
      {
        id: 'metric-2',
        title: 'Aumento de precisión',
        value: '42%',
        description: 'Incremento en la precisión de detección de objetos con wyoloservice',
        project: 'wyoloservice',
        icon: 'target'
      },
      {
        id: 'metric-3',
        title: 'Reducción de código',
        value: '65%',
        description: 'Disminución en la cantidad de código necesario utilizando las librerías wkafka y wmongo',
        project: 'wkafka, wmongo',
        icon: 'code'
      }
    ],
    cost: [
      {
        id: 'metric-4',
        title: 'Reducción de costos operativos',
        value: '35%',
        description: 'Ahorro en costos de infraestructura utilizando wcontainer para optimizar despliegues',
        project: 'wcontainer',
        icon: 'dollar'
      },
      {
        id: 'metric-5',
        title: 'Optimización de recursos',
        value: '53%',
        description: 'Mejora en la utilización de recursos de hardware con modelos optimizados',
        project: 'wyoloservice',
        icon: 'server'
      },
      {
        id: 'metric-6',
        title: 'Reducción de tiempo de desarrollo',
        value: '40%',
        description: 'Disminución en el tiempo necesario para implementar soluciones de IA',
        project: 'Todas las librerías',
        icon: 'calendar'
      }
    ],
    scalability: [
      {
        id: 'metric-7',
        title: 'Aumento de capacidad de procesamiento',
        value: '10x',
        description: 'Incremento en la capacidad de procesamiento de datos en tiempo real',
        project: 'wkafka',
        icon: 'chart'
      },
      {
        id: 'metric-8',
        title: 'Mejora en concurrencia',
        value: '250%',
        description: 'Aumento en la capacidad de manejar peticiones concurrentes',
        project: 'wredis',
        icon: 'users'
      },
      {
        id: 'metric-9',
        title: 'Reducción de latencia',
        value: '68%',
        description: 'Disminución en el tiempo de respuesta para consultas a bases de datos',
        project: 'wmongo, wpostgresql',
        icon: 'bolt'
      }
    ]
  };
  
  // Función para renderizar icono según tipo
  const renderIcon = (iconType) => {
    switch (iconType) {
      case 'clock':
        return (
          <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'target':
        return (
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'code':
        return (
          <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'dollar':
        return (
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'server':
        return (
          <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        );
      case 'calendar':
        return (
          <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'chart':
        return (
          <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'users':
        return (
          <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'bolt':
        return (
          <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };
  
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        Métricas de Impacto
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Resultados medibles obtenidos en proyectos reales utilizando las soluciones desarrolladas por Wisrovi Rodriguez.
      </p>
      
      {/* Tabs */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-8">
        <button
          onClick={() => setActiveTab('performance')}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === 'performance'
              ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          }`}
        >
          Rendimiento
        </button>
        <button
          onClick={() => setActiveTab('cost')}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === 'cost'
              ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          }`}
        >
          Costos
        </button>
        <button
          onClick={() => setActiveTab('scalability')}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === 'scalability'
              ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          }`}
        >
          Escalabilidad
        </button>
      </div>
      
      {/* Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics[activeTab].map(metric => (
          <div 
            key={metric.id}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {renderIcon(metric.icon)}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  {metric.title}
                </h3>
                <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                  {metric.value}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {metric.description}
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-500">
                  Proyecto: <span className="font-medium">{metric.project}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Estas métricas representan resultados reales obtenidos en proyectos implementados. Los resultados pueden variar según el contexto específico de cada implementación.
        </p>
        <a 
          href="/contact"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Consulta cómo obtener resultados similares
        </a>
      </div>
    </div>
  );
};

export default ImpactMetrics;
