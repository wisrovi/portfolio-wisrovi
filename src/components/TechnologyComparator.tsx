'use client';

import { useState } from 'react';

// Componente para comparador de tecnologías
const TechnologyComparator = () => {
  const [activeTech, setActiveTech] = useState('wkafka');
  
  // Datos de comparación (en una implementación real, estos vendrían de una API o CMS)
  const technologies = {
    wkafka: {
      name: 'wkafka',
      description: 'Librería para simplificar la integración con Apache Kafka en Python mediante decoradores',
      alternatives: [
        {
          name: 'Confluent Kafka Python',
          pros: ['Amplia adopción', 'Soporte oficial de Confluent', 'Documentación extensa'],
          cons: ['Requiere más código boilerplate', 'Curva de aprendizaje más pronunciada', 'Configuración manual de serializadores/deserializadores'],
          comparison: [
            { feature: 'Facilidad de uso', wkafka: 9, alternative: 6 },
            { feature: 'Líneas de código necesarias', wkafka: 9, alternative: 5 },
            { feature: 'Rendimiento', wkafka: 8, alternative: 9 },
            { feature: 'Flexibilidad', wkafka: 7, alternative: 9 },
            { feature: 'Integración con frameworks', wkafka: 8, alternative: 7 }
          ]
        },
        {
          name: 'kafka-python',
          pros: ['Implementación pura en Python', 'Fácil instalación', 'Buena para casos de uso simples'],
          cons: ['Menor rendimiento', 'Menos funcionalidades avanzadas', 'Actualizaciones menos frecuentes'],
          comparison: [
            { feature: 'Facilidad de uso', wkafka: 9, alternative: 7 },
            { feature: 'Líneas de código necesarias', wkafka: 9, alternative: 6 },
            { feature: 'Rendimiento', wkafka: 8, alternative: 6 },
            { feature: 'Flexibilidad', wkafka: 7, alternative: 6 },
            { feature: 'Integración con frameworks', wkafka: 8, alternative: 5 }
          ]
        }
      ]
    },
    wmongo: {
      name: 'wmongo',
      description: 'Librería para simplificar operaciones con MongoDB en Python mediante decoradores y patrones comunes',
      alternatives: [
        {
          name: 'PyMongo',
          pros: ['Cliente oficial de MongoDB', 'Soporte completo para todas las funcionalidades', 'Amplia documentación'],
          cons: ['Más verboso', 'Requiere más código para operaciones comunes', 'Menos abstracciones de alto nivel'],
          comparison: [
            { feature: 'Facilidad de uso', wmongo: 9, alternative: 7 },
            { feature: 'Líneas de código necesarias', wmongo: 8, alternative: 5 },
            { feature: 'Rendimiento', wmongo: 8, alternative: 9 },
            { feature: 'Flexibilidad', wmongo: 7, alternative: 9 },
            { feature: 'Integración con frameworks', wmongo: 8, alternative: 6 }
          ]
        },
        {
          name: 'MongoEngine',
          pros: ['ODM completo', 'Validación de esquemas', 'Integración con frameworks web'],
          cons: ['Sobrecarga de rendimiento', 'Menos flexible para consultas complejas', 'Actualizaciones menos frecuentes'],
          comparison: [
            { feature: 'Facilidad de uso', wmongo: 9, alternative: 8 },
            { feature: 'Líneas de código necesarias', wmongo: 8, alternative: 7 },
            { feature: 'Rendimiento', wmongo: 8, alternative: 6 },
            { feature: 'Flexibilidad', wmongo: 7, alternative: 6 },
            { feature: 'Integración con frameworks', wmongo: 8, alternative: 8 }
          ]
        }
      ]
    },
    wredis: {
      name: 'wredis',
      description: 'Librería para simplificar operaciones con Redis en Python mediante decoradores y patrones comunes',
      alternatives: [
        {
          name: 'redis-py',
          pros: ['Cliente oficial de Redis', 'Soporte completo para comandos Redis', 'Amplia documentación'],
          cons: ['Más verboso', 'Requiere más código para patrones comunes', 'Menos abstracciones de alto nivel'],
          comparison: [
            { feature: 'Facilidad de uso', wredis: 9, alternative: 7 },
            { feature: 'Líneas de código necesarias', wredis: 9, alternative: 6 },
            { feature: 'Rendimiento', wredis: 8, alternative: 9 },
            { feature: 'Flexibilidad', wredis: 7, alternative: 9 },
            { feature: 'Integración con frameworks', wredis: 8, alternative: 6 }
          ]
        },
        {
          name: 'aioredis',
          pros: ['Soporte para asyncio', 'Buen rendimiento en aplicaciones asíncronas', 'API moderna'],
          cons: ['Limitado a aplicaciones asyncio', 'Menos ejemplos disponibles', 'Curva de aprendizaje para programación asíncrona'],
          comparison: [
            { feature: 'Facilidad de uso', wredis: 9, alternative: 7 },
            { feature: 'Líneas de código necesarias', wredis: 9, alternative: 7 },
            { feature: 'Rendimiento', wredis: 8, alternative: 9 },
            { feature: 'Flexibilidad', wredis: 7, alternative: 8 },
            { feature: 'Integración con frameworks', wredis: 8, alternative: 7 }
          ]
        }
      ]
    },
    wyoloservice: {
      name: 'wyoloservice',
      description: 'Plataforma para entrenar modelos de visión por computadora YOLO sin escribir código',
      alternatives: [
        {
          name: 'Roboflow',
          pros: ['Interfaz web pulida', 'Múltiples modelos soportados', 'Buenas herramientas de anotación'],
          cons: ['Modelo de precios por uso', 'Menos control sobre el proceso de entrenamiento', 'Dependencia de servicios en la nube'],
          comparison: [
            { feature: 'Facilidad de uso', wyoloservice: 9, alternative: 9 },
            { feature: 'Control sobre el proceso', wyoloservice: 8, alternative: 6 },
            { feature: 'Costo', wyoloservice: 9, alternative: 5 },
            { feature: 'Personalización', wyoloservice: 8, alternative: 6 },
            { feature: 'Despliegue local', wyoloservice: 9, alternative: 5 }
          ]
        },
        {
          name: 'Ultralytics YOLOv5/v8',
          pros: ['Código abierto', 'Alto rendimiento', 'Comunidad activa'],
          cons: ['Requiere conocimientos de programación', 'Configuración manual', 'Curva de aprendizaje pronunciada'],
          comparison: [
            { feature: 'Facilidad de uso', wyoloservice: 9, alternative: 5 },
            { feature: 'Control sobre el proceso', wyoloservice: 8, alternative: 9 },
            { feature: 'Costo', wyoloservice: 9, alternative: 10 },
            { feature: 'Personalización', wyoloservice: 8, alternative: 10 },
            { feature: 'Despliegue local', wyoloservice: 9, alternative: 8 }
          ]
        }
      ]
    }
  };
  
  // Obtener la tecnología activa
  const activeTechnology = technologies[activeTech];
  
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        Comparador de Tecnologías
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Compara las librerías y herramientas desarrolladas por Wisrovi Rodriguez con alternativas populares.
      </p>
      
      {/* Selector de tecnología */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.keys(technologies).map(tech => (
          <button
            key={tech}
            onClick={() => setActiveTech(tech)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTech === tech
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {technologies[tech].name}
          </button>
        ))}
      </div>
      
      {/* Descripción de la tecnología */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
          {activeTechnology.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          {activeTechnology.description}
        </p>
      </div>
      
      {/* Comparaciones */}
      <div className="space-y-12">
        {activeTechnology.alternatives.map((alternative, index) => (
          <div key={index} className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              {activeTechnology.name} vs {alternative.name}
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Pros y contras */}
              <div>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Ventajas de {alternative.name}
                  </h4>
                  <ul className="space-y-1">
                    {alternative.pros.map((pro, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Desventajas de {alternative.name}
                  </h4>
                  <ul className="space-y-1">
                    {alternative.cons.map((con, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Gráfico de comparación */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Comparación de características (1-10)
                </h4>
                
                <div className="space-y-4">
                  {alternative.comparison.map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-gray-600 dark:text-gray-400">{item.feature}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-24 text-right pr-2">
                          <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                            {activeTechnology.name} ({item.wkafka})
                          </span>
                        </div>
                        
                        <div className="flex-1 h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="flex h-full">
                            <div 
                              className="bg-blue-600 h-full rounded-l-full"
                              style={{ width: `${(item.wkafka / 10) * 50}%` }}
                            ></div>
                            <div 
                              className="bg-gray-400 dark:bg-gray-500 h-full rounded-r-full"
                              style={{ width: `${(item.alternative / 10) * 50}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="w-24 pl-2">
                          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                            {alternative.name} ({item.alternative})
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                ¿Cuándo elegir {activeTechnology.name} sobre {alternative.name}?
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {activeTechnology.name === 'wkafka' && 'Cuando buscas simplificar el código, reducir la curva de aprendizaje y acelerar el desarrollo. wkafka es ideal para equipos que quieren integrar Kafka rápidamente sin profundizar en los detalles de implementación.'}
                {activeTechnology.name === 'wmongo' && 'Cuando necesitas una interfaz más simple y directa para MongoDB, con menos código boilerplate y patrones comunes ya implementados. wmongo es perfecto para proyectos que requieren operaciones MongoDB frecuentes pero no necesitan toda la complejidad de un ODM completo.'}
                {activeTechnology.name === 'wredis' && 'Cuando buscas una forma más sencilla de trabajar con Redis, con abstracciones que simplifican patrones comunes como caché, colas y pub/sub. wredis es ideal para equipos que quieren aprovechar Redis sin escribir código repetitivo.'}
                {activeTechnology.name === 'wyoloservice' && 'Cuando necesitas implementar detección de objetos sin tener experiencia en deep learning o programación. wyoloservice es perfecto para equipos multidisciplinarios donde los no programadores necesitan entrenar y desplegar modelos de visión artificial.'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyComparator;
