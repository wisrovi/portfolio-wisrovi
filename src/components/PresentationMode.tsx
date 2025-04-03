'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Componente para el modo presentación
const PresentationMode = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const router = useRouter();
  
  // Definición de las diapositivas/secciones para el modo presentación
  const slides = [
    {
      id: 'intro',
      title: 'Wisrovi Rodriguez',
      subtitle: 'Ingeniero MLOps & Especialista en IA',
      route: '/',
      description: 'Experto en inteligencia artificial, visión por computadora y desarrollo de software'
    },
    {
      id: 'skills',
      title: 'Habilidades Técnicas',
      subtitle: 'Especialidades y competencias',
      route: '/about',
      description: 'Inteligencia Artificial, MLOps, Visión Artificial, Desarrollo de Software, Arquitectura de Sistemas'
    },
    {
      id: 'wyoloservice',
      title: 'wyoloservice',
      subtitle: 'Entrenamiento de modelos YOLO sin código',
      route: '/projects',
      description: 'Plataforma que democratiza el acceso a la visión artificial permitiendo entrenar modelos sin escribir código'
    },
    {
      id: 'libraries',
      title: 'Librerías Desarrolladas',
      subtitle: 'Herramientas para simplificar procesos complejos',
      route: '/libraries',
      description: 'wkafka, wmongo, wredis, wcontainer, wpostgresql - Soluciones elegantes para problemas comunes'
    },
    {
      id: 'face-recognition',
      title: 'API de Reconocimiento Facial',
      subtitle: 'Solución containerizada lista para usar',
      route: '/projects',
      description: 'API Docker para detección y análisis de rostros en imágenes con interfaz web y REST'
    },
    {
      id: 'methodology',
      title: 'Metodología de Trabajo',
      subtitle: 'Enfoque ágil y orientado a resultados',
      route: '/about',
      description: 'Descubrimiento, Diseño, Desarrollo Iterativo, Pruebas Continuas, Implementación, Soporte'
    },
    {
      id: 'contact',
      title: 'Trabajemos Juntos',
      subtitle: 'Contacto y próximos pasos',
      route: '/contact',
      description: 'Email: wisrovi.rodriguez@gmail.com | LinkedIn: linkedin.com/in/wisrovi-rodriguez'
    }
  ];
  
  // Función para entrar/salir del modo de pantalla completa
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error al intentar mostrar pantalla completa: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };
  
  // Navegar a la siguiente diapositiva
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      router.push(slides[currentSlide + 1].route);
    }
  };
  
  // Navegar a la diapositiva anterior
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      router.push(slides[currentSlide - 1].route);
    }
  };
  
  // Manejar eventos de teclado para navegación
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isActive) return;
      
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          prevSlide();
          break;
        case 'f':
          toggleFullscreen();
          break;
        case 'Escape':
          if (isFullscreen) {
            document.exitFullscreen();
            setIsFullscreen(false);
          } else {
            setIsActive(false);
          }
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActive, currentSlide, isFullscreen]);
  
  // Si el modo presentación no está activo, mostrar solo el botón para activarlo
  if (!isActive) {
    return (
      <button
        onClick={() => setIsActive(true)}
        className="fixed bottom-4 right-4 z-50 p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        title="Modo Presentación"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      </button>
    );
  }
  
  // Modo presentación activo
  return (
    <div className={`fixed inset-0 z-50 ${isActive ? 'block' : 'hidden'}`}>
      {/* Overlay semi-transparente */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Barra de navegación superior */}
      <div className="absolute top-0 left-0 right-0 bg-gray-900 bg-opacity-80 text-white p-2 flex justify-between items-center">
        <div className="flex items-center">
          <button
            onClick={() => setIsActive(false)}
            className="p-1 rounded-full hover:bg-gray-700 transition-colors mr-4"
            title="Salir del modo presentación"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <span className="text-sm font-medium">
            Modo Presentación: {currentSlide + 1} / {slides.length}
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleFullscreen}
            className="p-1 rounded-full hover:bg-gray-700 transition-colors"
            title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
          >
            {isFullscreen ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V4.5M9 9H4.5M15 9H19.5M15 9V4.5M9 15v4.5M9 15H4.5M15 15h4.5M15 15v4.5" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Controles de navegación */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-2 rounded-full ${
            currentSlide === 0 
              ? 'bg-gray-500 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700'
          } text-white transition-colors`}
          title="Diapositiva anterior"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="bg-gray-800 bg-opacity-80 text-white px-4 py-2 rounded-full">
          {currentSlide + 1} / {slides.length}
        </div>
        
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`p-2 rounded-full ${
            currentSlide === slides.length - 1 
              ? 'bg-gray-500 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700'
          } text-white transition-colors`}
          title="Siguiente diapositiva"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Panel lateral con información de la diapositiva actual */}
      <div className="absolute top-16 right-4 w-64 bg-gray-900 bg-opacity-80 text-white p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold mb-1">{slides[currentSlide].title}</h3>
        <h4 className="text-sm text-blue-300 mb-3">{slides[currentSlide].subtitle}</h4>
        <p className="text-xs text-gray-300">{slides[currentSlide].description}</p>
        
        <div className="mt-4 pt-4 border-t border-gray-700">
          <h5 className="text-xs font-medium mb-2">Navegación rápida:</h5>
          <div className="space-y-1 max-h-40 overflow-y-auto">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => {
                  setCurrentSlide(index);
                  router.push(slide.route);
                }}
                className={`w-full text-left text-xs px-2 py-1 rounded ${
                  currentSlide === index
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                } transition-colors`}
              >
                {index + 1}. {slide.title}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-4 text-xs text-gray-400">
          <p>Teclas de navegación:</p>
          <ul className="mt-1 space-y-1">
            <li>→ o ↓ o Espacio: Siguiente</li>
            <li>← o ↑: Anterior</li>
            <li>F: Pantalla completa</li>
            <li>ESC: Salir</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PresentationMode;
