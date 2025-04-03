'use client';

import { useState } from 'react';

// Componente para integración con Calendly
const CalendlyIntegration = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  
  // Servicios disponibles (en una implementación real, estos vendrían de una API o CMS)
  const services = [
    {
      id: 'consultation',
      name: 'Consulta Inicial',
      duration: '30 min',
      description: 'Conversación inicial para entender tus necesidades y explorar posibles soluciones.',
      calendlyUrl: 'https://calendly.com/wisrovi/consulta-inicial'
    },
    {
      id: 'technical-assessment',
      name: 'Evaluación Técnica',
      duration: '60 min',
      description: 'Análisis detallado de tu proyecto actual y recomendaciones técnicas específicas.',
      calendlyUrl: 'https://calendly.com/wisrovi/evaluacion-tecnica'
    },
    {
      id: 'project-planning',
      name: 'Planificación de Proyecto',
      duration: '90 min',
      description: 'Sesión para definir alcance, plazos y recursos necesarios para tu proyecto.',
      calendlyUrl: 'https://calendly.com/wisrovi/planificacion-proyecto'
    }
  ];
  
  // Función para abrir el modal de Calendly
  const openCalendly = (service) => {
    setSelectedService(service);
    setIsLoading(true);
    setIsOpen(true);
    
    // Simular carga del widget de Calendly
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };
  
  // Función para cerrar el modal
  const closeModal = () => {
    setIsOpen(false);
    setSelectedService(null);
  };
  
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        Agenda una Reunión
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Selecciona el tipo de reunión que te gustaría agendar con Wisrovi Rodriguez.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map(service => (
          <div 
            key={service.id}
            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                {service.name}
              </h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                Duración: {service.duration}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                {service.description}
              </p>
              <button
                onClick={() => openCalendly(service)}
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center justify-center"
              >
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Agendar
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal de Calendly */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-4xl w-full h-3/4 p-2">
            <div className="flex justify-between items-center mb-4 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                {selectedService.name}
              </h3>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="h-full">
              {isLoading ? (
                <div className="flex justify-center items-center h-full">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-700 rounded-lg">
                  {/* En una implementación real, aquí se cargaría el widget de Calendly */}
                  <div className="text-center p-8">
                    <svg className="h-16 w-16 text-blue-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      Widget de Calendly
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      En una implementación real, aquí se cargaría el widget de Calendly para {selectedService.name}.
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      URL: {selectedService.calendlyUrl}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          ¿Prefieres contactar directamente? Envía un email a <a href="mailto:wisrovi.rodriguez@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">wisrovi.rodriguez@gmail.com</a> o utiliza el <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">formulario de contacto</a>.
        </p>
      </div>
    </div>
  );
};

export default CalendlyIntegration;
