'use client';

import { useState } from 'react';

// Componente para modo "Elevator Pitch"
const ElevatorPitch = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timer, setTimer] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Definición de las diapositivas para el elevator pitch
  const slides = [
    {
      id: 'intro',
      title: 'Wisrovi Rodriguez',
      subtitle: 'Ingeniero MLOps & Especialista en IA',
      content: 'Experto en inteligencia artificial, visión por computadora y desarrollo de software con enfoque en soluciones empresariales de alto impacto.',
      color: 'bg-blue-600'
    },
    {
      id: 'expertise',
      title: 'Experiencia Clave',
      subtitle: 'Áreas de especialización',
      content: 'Desarrollo de librerías para simplificar procesos complejos, implementación de sistemas de visión artificial y arquitecturas MLOps para despliegue continuo de modelos de IA.',
      color: 'bg-indigo-600'
    },
    {
      id: 'projects',
      title: 'Proyecto Destacado',
      subtitle: 'wyoloservice',
      content: 'Plataforma revolucionaria que permite a cualquier persona entrenar modelos de visión artificial sin escribir código, democratizando el acceso a tecnologías avanzadas.',
      color: 'bg-purple-600'
    },
    {
      id: 'libraries',
      title: 'Librerías Propias',
      subtitle: 'Soluciones elegantes',
      content: 'Creador de wkafka, wmongo, wredis y otras librerías que simplifican la integración con tecnologías complejas mediante decoradores y patrones intuitivos.',
      color: 'bg-red-600'
    },
    {
      id: 'impact',
      title: 'Resultados Medibles',
      subtitle: 'Impacto real',
      content: 'Reducción del 78% en tiempo de procesamiento, mejora del 42% en precisión y disminución del 35% en costos operativos en proyectos implementados.',
      color: 'bg-orange-600'
    },
    {
      id: 'value',
      title: 'Propuesta de Valor',
      subtitle: '¿Por qué trabajar conmigo?',
      content: 'Combino profundo conocimiento técnico con visión práctica orientada a resultados. Transformo problemas complejos en soluciones elegantes que generan valor real.',
      color: 'bg-green-600'
    },
    {
      id: 'contact',
      title: 'Hablemos',
      subtitle: 'Próximos pasos',
      content: 'Contacta conmigo para discutir cómo puedo ayudarte a implementar soluciones de IA que transformen tu negocio: wisrovi.rodriguez@gmail.com',
      color: 'bg-teal-600'
    }
  ];
  
  // Iniciar/pausar el temporizador
  const toggleTimer = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      startTimer();
    }
  };
  
  // Función para el temporizador
  const startTimer = () => {
    if (timer > 0 && currentSlide < slides.length - 1) {
      setTimeout(() => {
        setTimer(timer - 1);
        
        // Cambiar de diapositiva cada ~5 segundos
        if (timer % 5 === 0 && currentSlide < slides.length - 1) {
          setCurrentSlide(currentSlide + 1);
        }
        
        if (isPlaying) {
          startTimer();
        }
      }, 1000);
    } else {
      setIsPlaying(false);
    }
  };
  
  // Navegar a la siguiente diapositiva
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  // Navegar a la diapositiva anterior
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  
  // Reiniciar la presentación
  const resetPresentation = () => {
    setCurrentSlide(0);
    setTimer(30);
    setIsPlaying(false);
  };
  
  // Si el modo no está activo, mostrar solo el botón para activarlo
  if (!isActive) {
    return (
      <button
        onClick={() => setIsActive(true)}
        className="fixed bottom-20 right-4 z-40 p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all"
        title="Elevator Pitch"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </button>
    );
  }
  
  // Modo elevator pitch activo
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75" onClick={() => setIsActive(false)}></div>
      
      {/* Contenido principal */}
      <div className="relative w-full max-w-2xl mx-auto z-10">
        {/* Diapositiva actual */}
        <div className={`rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform ${isPlaying ? 'scale-100' : 'scale-95'}`}>
          <div className={`${slides[currentSlide].color} p-8 text-white`}>
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold">{slides[currentSlide].title}</h2>
              <button 
                onClick={() => setIsActive(false)}
                className="text-white/80 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <h3 className="text-xl text-white/90 mb-6">{slides[currentSlide].subtitle}</h3>
            <p className="text-lg leading-relaxed">{slides[currentSlide].content}</p>
            
            {/* Temporizador */}
            {isPlaying && (
              <div className="mt-6 pt-4 border-t border-white/20">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/70">Tiempo restante</span>
                  <span className="text-xl font-mono">{timer}s</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-1.5 mt-2">
                  <div 
                    className="bg-white h-1.5 rounded-full transition-all duration-1000" 
                    style={{ width: `${(timer / 30) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Controles */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`p-2 rounded-full ${
                currentSlide === 0 
                  ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={toggleTimer}
              className={`p-2 rounded-full ${
                isPlaying
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-green-500 text-white hover:bg-green-600'
              }`}
            >
              {isPlaying ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </button>
            
            <button
              onClick={resetPresentation}
              className="p-2 rounded-full bg-white text-gray-800 hover:bg-gray-100"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`p-2 rounded-full ${
                currentSlide === slides.length - 1 
                  ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="text-white text-sm">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
        
        {/* Miniaturas */}
        <div className="mt-4 flex space-x-2 overflow-x-auto pb-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              className={`flex-shrink-0 w-12 h-2 rounded-full transition-colors ${
                currentSlide === index
                  ? slide.color
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              title={slide.title}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElevatorPitch;
