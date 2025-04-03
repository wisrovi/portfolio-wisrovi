'use client';

import { useState } from 'react';

// Componente para casos de uso por industria
const IndustryCaseStudies = () => {
  const [activeIndustry, setActiveIndustry] = useState('manufacturing');
  
  // Datos de industrias y casos de uso (en una implementación real, estos vendrían de una API o CMS)
  const industries = {
    manufacturing: {
      name: 'Manufactura',
      icon: 'factory',
      color: 'blue',
      description: 'Soluciones de visión artificial e IA para optimizar procesos de producción, control de calidad y mantenimiento predictivo.',
      caseStudies: [
        {
          title: 'Control de calidad automatizado',
          client: 'Empresa líder en fabricación de componentes electrónicos',
          challenge: 'Detectar defectos microscópicos en placas de circuito impreso con mayor precisión y velocidad que la inspección manual.',
          solution: 'Implementación de sistema de visión artificial basado en wyoloservice, entrenado para identificar más de 20 tipos de defectos diferentes.',
          results: [
            'Reducción del 78% en el tiempo de inspección',
            'Mejora del 42% en la tasa de detección de defectos',
            'Disminución del 35% en devoluciones de clientes',
            'ROI en menos de 6 meses'
          ],
          technologies: ['wyoloservice', 'api_face_recognition', 'wcontainer']
        },
        {
          title: 'Mantenimiento predictivo',
          client: 'Fabricante de maquinaria industrial',
          challenge: 'Predecir fallos en equipos críticos para evitar costosas paradas de producción no planificadas.',
          solution: 'Sistema de análisis de datos en tiempo real utilizando wkafka para procesar datos de sensores y modelos predictivos para identificar patrones de fallo.',
          results: [
            'Reducción del 65% en tiempo de inactividad no planificado',
            'Aumento del 28% en la vida útil de los equipos',
            'Ahorro anual estimado de $1.2M en costos de mantenimiento',
            'Mejora del 40% en la planificación de recursos'
          ],
          technologies: ['wkafka', 'wmongo', 'wredis']
        }
      ]
    },
    healthcare: {
      name: 'Salud',
      icon: 'hospital',
      color: 'green',
      description: 'Aplicaciones de IA para diagnóstico asistido, análisis de imágenes médicas y optimización de procesos clínicos.',
      caseStudies: [
        {
          title: 'Análisis de imágenes radiológicas',
          client: 'Red de hospitales regional',
          challenge: 'Asistir a radiólogos en la detección temprana de anomalías en radiografías de tórax para mejorar la precisión diagnóstica.',
          solution: 'Sistema de visión artificial entrenado con wyoloservice para identificar y marcar áreas de interés en radiografías, priorizando casos según la probabilidad de anomalías.',
          results: [
            'Reducción del 45% en el tiempo de análisis por imagen',
            'Mejora del 32% en la detección temprana de anomalías',
            'Aumento del 28% en la productividad de radiólogos',
            'Priorización efectiva de casos urgentes'
          ],
          technologies: ['wyoloservice', 'wpostgresql', 'wcontainer']
        },
        {
          title: 'Optimización de flujos de trabajo clínicos',
          client: 'Centro médico especializado',
          challenge: 'Reducir tiempos de espera y mejorar la experiencia del paciente mediante la optimización de procesos clínicos.',
          solution: 'Implementación de sistema de análisis de datos en tiempo real con wkafka y wmongo para monitorear y optimizar flujos de trabajo.',
          results: [
            'Reducción del 38% en tiempos de espera de pacientes',
            'Mejora del 25% en la utilización de recursos',
            'Aumento del 30% en la satisfacción del paciente',
            'Optimización de la programación de citas'
          ],
          technologies: ['wkafka', 'wmongo', 'wredis']
        }
      ]
    },
    retail: {
      name: 'Retail',
      icon: 'shopping',
      color: 'purple',
      description: 'Soluciones de IA para análisis de comportamiento del consumidor, gestión de inventario y personalización de la experiencia de compra.',
      caseStudies: [
        {
          title: 'Análisis de comportamiento en tienda',
          client: 'Cadena de tiendas de moda',
          challenge: 'Comprender patrones de movimiento y comportamiento de clientes en tienda para optimizar layout y estrategias de merchandising.',
          solution: 'Sistema de visión artificial con api_face_recognition para analizar flujos de clientes, puntos calientes y tiempos de permanencia en diferentes secciones.',
          results: [
            'Aumento del 22% en conversión de ventas',
            'Mejora del 35% en efectividad de displays promocionales',
            'Optimización del layout de tienda basada en datos',
            'Insights valiosos sobre comportamiento del consumidor'
          ],
          technologies: ['api_face_recognition', 'wkafka', 'wmongo']
        },
        {
          title: 'Gestión inteligente de inventario',
          client: 'Distribuidor mayorista',
          challenge: 'Optimizar niveles de inventario para reducir costos de almacenamiento mientras se mantiene alta disponibilidad de productos.',
          solution: 'Sistema predictivo utilizando datos históricos y tendencias de mercado para optimizar pedidos y distribución de inventario.',
          results: [
            'Reducción del 28% en costos de almacenamiento',
            'Disminución del 45% en roturas de stock',
            'Mejora del 32% en rotación de inventario',
            'Optimización de la cadena de suministro'
          ],
          technologies: ['wpostgresql', 'wredis', 'wkafka']
        }
      ]
    },
    finance: {
      name: 'Finanzas',
      icon: 'chart',
      color: 'yellow',
      description: 'Aplicaciones de IA para detección de fraude, análisis de riesgo y automatización de procesos financieros.',
      caseStudies: [
        {
          title: 'Detección de fraude en tiempo real',
          client: 'Institución financiera',
          challenge: 'Identificar transacciones fraudulentas en tiempo real para minimizar pérdidas y proteger a los clientes.',
          solution: 'Sistema de análisis en tiempo real con wkafka para procesar flujos de transacciones y modelos de IA para detectar patrones anómalos.',
          results: [
            'Reducción del 65% en pérdidas por fraude',
            'Disminución del 80% en falsos positivos',
            'Detección en tiempo real (menos de 50ms)',
            'Mejora continua mediante aprendizaje adaptativo'
          ],
          technologies: ['wkafka', 'wredis', 'wmongo']
        },
        {
          title: 'Automatización de análisis de documentos',
          client: 'Empresa de servicios financieros',
          challenge: 'Procesar y extraer información relevante de miles de documentos financieros para agilizar procesos de aprobación de créditos.',
          solution: 'Sistema de visión artificial para reconocimiento y extracción de información de documentos, integrado con flujos de trabajo existentes.',
          results: [
            'Reducción del 75% en tiempo de procesamiento de documentos',
            'Mejora del 40% en precisión de extracción de datos',
            'Aumento del 50% en productividad del equipo',
            'Experiencia de cliente mejorada con tiempos de respuesta más rápidos'
          ],
          technologies: ['api_face_recognition', 'wyoloservice', 'wpostgresql']
        }
      ]
    }
  };
  
  // Obtener la industria activa
  const activeIndustryData = industries[activeIndustry];
  
  // Función para renderizar icono según tipo
  const renderIcon = (iconType) => {
    switch (iconType) {
      case 'factory':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 'hospital':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 'shopping':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        );
      case 'chart':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };
  
  // Función para obtener color según tipo
  const getColorClass = (colorType, element) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-100 dark:bg-blue-900/20',
        text: 'text-blue-800 dark:text-blue-200',
        border: 'border-blue-200 dark:border-blue-800',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      green: {
        bg: 'bg-green-100 dark:bg-green-900/20',
        text: 'text-green-800 dark:text-green-200',
        border: 'border-green-200 dark:border-green-800',
        button: 'bg-green-600 hover:bg-green-700'
      },
      purple: {
        bg: 'bg-purple-100 dark:bg-purple-900/20',
        text: 'text-purple-800 dark:text-purple-200',
        border: 'border-purple-200 dark:border-purple-800',
        button: 'bg-purple-600 hover:bg-purple-700'
      },
      yellow: {
        bg: 'bg-yellow-100 dark:bg-yellow-900/20',
        text: 'text-yellow-800 dark:text-yellow-200',
        border: 'border-yellow-200 dark:border-yellow-800',
        button: 'bg-yellow-600 hover:bg-yellow-700'
      }
    };
    
    return colorMap[colorType][element];
  };
  
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        Casos de Uso por Industria
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Descubre cómo las soluciones desarrolladas por Wisrovi Rodriguez pueden aplicarse en diferentes sectores industriales.
      </p>
      
      {/* Selector de industria */}
      <div className="flex flex-wrap gap-3 mb-8">
        {Object.keys(industries).map(industry => (
          <button
            key={industry}
            onClick={() => setActiveIndustry(industry)}
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeIndustry === industry
                ? `${getColorClass(industries[industry].color, 'bg')} ${getColorClass(industries[industry].color, 'text')}`
                : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <span className="mr-2">
              {renderIcon(industries[industry].icon)}
            </span>
            {industries[industry].name}
          </button>
        ))}
      </div>
      
      {/* Descripción de la industria */}
      <div className={`p-6 mb-8 rounded-lg ${getColorClass(activeIndustryData.color, 'bg')} ${getColorClass(activeIndustryData.color, 'border')} border`}>
        <div className="flex items-start">
          <div className={`p-3 rounded-full ${getColorClass(activeIndustryData.color, 'bg')} mr-4`}>
            {renderIcon(activeIndustryData.icon)}
          </div>
          <div>
            <h3 className={`text-xl font-semibold mb-2 ${getColorClass(activeIndustryData.color, 'text')}`}>
              Soluciones para {activeIndustryData.name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {activeIndustryData.description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Casos de estudio */}
      <div className="space-y-8">
        {activeIndustryData.caseStudies.map((caseStudy, index) => (
          <div 
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm"
          >
            <div className={`p-4 ${getColorClass(activeIndustryData.color, 'bg')} ${getColorClass(activeIndustryData.color, 'text')}`}>
              <h3 className="text-lg font-semibold">
                {caseStudy.title}
              </h3>
              <p className="text-sm opacity-90">
                {caseStudy.client}
              </p>
            </div>
            
            <div className="p-6">
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Desafío
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {caseStudy.challenge}
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Solución
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {caseStudy.solution}
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Resultados
                </h4>
                <ul className="space-y-1">
                  {caseStudy.results.map((result, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tecnologías utilizadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <a 
                href="/contact"
                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${getColorClass(activeIndustryData.color, 'button')}`}
              >
                Consultar sobre este caso
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          ¿Tu industria no está listada o tienes un caso específico? Contacta para discutir cómo las soluciones de Wisrovi pueden adaptarse a tus necesidades.
        </p>
        <a 
          href="/contact"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Contactar para más información
        </a>
      </div>
    </div>
  );
};

export default IndustryCaseStudies;
