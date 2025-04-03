'use client';

import { useState } from 'react';

// Componente para testimonios en video
const VideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  
  // Datos de testimonios (en una implementación real, estos vendrían de una API o CMS)
  const testimonials = [
    {
      id: 1,
      name: 'Carlos Mendoza',
      role: 'CTO, TechVision Inc.',
      company: 'TechVision Inc.',
      quote: 'Wisrovi transformó nuestra capacidad de procesamiento de imágenes. Su implementación de visión artificial redujo nuestros costos operativos en un 35% y mejoró la precisión en un 42%.',
      videoUrl: '/videos/testimonial-carlos.mp4',
      thumbnailUrl: '/images/testimonials/carlos-thumbnail.jpg',
      logoUrl: '/images/testimonials/techvision-logo.png'
    },
    {
      id: 2,
      name: 'Laura Sánchez',
      role: 'Lead Data Scientist',
      company: 'DataCore Solutions',
      quote: 'La librería wkafka de Wisrovi simplificó enormemente nuestra arquitectura de streaming. Lo que antes requería cientos de líneas de código ahora se hace con unos pocos decoradores.',
      videoUrl: '/videos/testimonial-laura.mp4',
      thumbnailUrl: '/images/testimonials/laura-thumbnail.jpg',
      logoUrl: '/images/testimonials/datacore-logo.png'
    },
    {
      id: 3,
      name: 'Miguel Ángel Rodríguez',
      role: 'Director de Innovación',
      company: 'InnovateTech',
      quote: 'Implementamos wyoloservice en nuestro proceso de control de calidad y los resultados fueron inmediatos. La capacidad de entrenar modelos sin código permitió que nuestro equipo de operaciones tomara el control del proceso.',
      videoUrl: '/videos/testimonial-miguel.mp4',
      thumbnailUrl: '/images/testimonials/miguel-thumbnail.jpg',
      logoUrl: '/images/testimonials/innovatetech-logo.png'
    }
  ];
  
  // Función para reproducir video
  const playVideo = (id) => {
    setActiveVideo(id);
    
    // En una implementación real, aquí se iniciaría la reproducción del video
    console.log(`Reproduciendo video ${id}`);
  };
  
  // Función para cerrar video
  const closeVideo = () => {
    setActiveVideo(null);
  };
  
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        Lo que dicen nuestros clientes
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map(testimonial => (
          <div 
            key={testimonial.id}
            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Thumbnail con botón de reproducción */}
            <div 
              className="relative h-48 bg-gray-200 dark:bg-gray-700 cursor-pointer"
              onClick={() => playVideo(testimonial.id)}
            >
              {/* En una implementación real, aquí iría la imagen de miniatura */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              {/* Logo de la empresa */}
              <div className="absolute bottom-2 right-2 bg-white dark:bg-gray-800 rounded-md p-1 shadow-sm">
                <div className="w-8 h-8 flex items-center justify-center">
                  {/* En una implementación real, aquí iría el logo de la empresa */}
                  <div className="text-xs font-bold text-gray-800 dark:text-gray-200">
                    {testimonial.company.substring(0, 2)}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Información del testimonio */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {testimonial.role}, {testimonial.company}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                "{testimonial.quote}"
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal de video */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-3xl w-full p-2">
            <div className="flex justify-end mb-2">
              <button 
                onClick={closeVideo}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg">
              {/* En una implementación real, aquí iría el reproductor de video */}
              <div className="flex items-center justify-center h-full text-white">
                <p>Reproduciendo testimonio de {testimonials.find(t => t.id === activeVideo)?.name}</p>
                <p className="text-sm text-gray-400 mt-2">
                  (En una implementación real, aquí se reproduciría el video)
                </p>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                {testimonials.find(t => t.id === activeVideo)?.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {testimonials.find(t => t.id === activeVideo)?.role}, 
                {testimonials.find(t => t.id === activeVideo)?.company}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                "{testimonials.find(t => t.id === activeVideo)?.quote}"
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoTestimonials;
