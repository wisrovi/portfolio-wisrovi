'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Tipos para las preguntas frecuentes
type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
};

// Categorías de preguntas
const categories = [
  { id: 'all', name: 'Todas' },
  { id: 'services', name: 'Servicios' },
  { id: 'methodology', name: 'Metodología' },
  { id: 'technologies', name: 'Tecnologías' },
  { id: 'hiring', name: 'Contratación' }
];

// Preguntas frecuentes
const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: '¿Qué servicios ofrece Wisrovi Rodriguez?',
    answer: 'Wisrovi Rodriguez ofrece servicios especializados en inteligencia artificial, visión por computadora, desarrollo de software y MLOps. Esto incluye desarrollo de modelos de IA personalizados, implementación de sistemas de visión artificial, creación de librerías y herramientas para simplificar procesos complejos, y diseño de arquitecturas distribuidas para procesamiento de datos a gran escala.',
    category: 'services'
  },
  {
    id: 'faq-2',
    question: '¿Cómo puedo contratar a Wisrovi para un proyecto?',
    answer: 'Puedes contratar a Wisrovi contactándolo directamente a través del formulario en la sección de contacto, enviando un email a wisrovi.rodriguez@gmail.com o conectando con él en LinkedIn. Después de una consulta inicial para entender tus necesidades, Wisrovi te proporcionará una propuesta detallada con alcance, plazos y costos estimados.',
    category: 'hiring'
  },
  {
    id: 'faq-3',
    question: '¿Cuál es la metodología de trabajo de Wisrovi?',
    answer: 'Wisrovi utiliza metodologías ágiles adaptadas a cada proyecto. Típicamente, el proceso incluye: 1) Fase de descubrimiento para entender los requisitos y objetivos, 2) Diseño de la solución y planificación, 3) Desarrollo iterativo con entregas incrementales, 4) Pruebas continuas y validación, 5) Implementación y despliegue, 6) Soporte y mantenimiento posterior. Durante todo el proceso, mantiene una comunicación constante con el cliente para asegurar que la solución cumple con las expectativas.',
    category: 'methodology'
  },
  {
    id: 'faq-4',
    question: '¿Qué tecnologías domina Wisrovi?',
    answer: 'Wisrovi tiene experiencia en múltiples tecnologías, con especialización en: Python para desarrollo de IA y backend, frameworks de deep learning como TensorFlow y PyTorch, tecnologías de visión por computadora como OpenCV y YOLO, sistemas de bases de datos (MongoDB, PostgreSQL, Redis), contenedores y orquestación (Docker, Kubernetes), y desarrollo web moderno. También ha creado varias librerías propias como wkafka, wmongo, wredis, wcontainer y wpostgresql para simplificar el desarrollo.',
    category: 'technologies'
  },
  {
    id: 'faq-5',
    question: '¿Wisrovi trabaja de forma remota o presencial?',
    answer: 'Wisrovi trabaja principalmente de forma remota, lo que le permite colaborar con clientes de todo el mundo. Sin embargo, para proyectos que lo requieran, puede considerar trabajo presencial o híbrido según la ubicación y las necesidades específicas del proyecto.',
    category: 'hiring'
  },
  {
    id: 'faq-6',
    question: '¿Qué es wyoloservice y cómo puede beneficiar a mi empresa?',
    answer: 'wyoloservice es una plataforma desarrollada por Wisrovi que permite entrenar modelos de visión por computadora (específicamente YOLO) sin escribir código. Beneficia a las empresas al democratizar el acceso a la tecnología de visión artificial, permitiendo que equipos sin experiencia técnica profunda puedan implementar soluciones de detección de objetos. Esto reduce significativamente el tiempo y costo de desarrollo, y permite a las empresas adoptar tecnologías avanzadas de IA más rápidamente.',
    category: 'services'
  },
  {
    id: 'faq-7',
    question: '¿Cómo se manejan los derechos de propiedad intelectual en los proyectos?',
    answer: 'Por defecto, todos los derechos de propiedad intelectual del código y soluciones desarrolladas específicamente para un cliente se transfieren al cliente una vez completado el pago. Para librerías o componentes preexistentes que Wisrovi incorpore en la solución, se proporcionan licencias de uso adecuadas. Los términos específicos se detallan en el contrato de cada proyecto para asegurar claridad y protección para ambas partes.',
    category: 'hiring'
  },
  {
    id: 'faq-8',
    question: '¿Qué diferencia a Wisrovi de otros profesionales en IA y desarrollo?',
    answer: 'Wisrovi se distingue por su enfoque integral que combina profundo conocimiento técnico con una visión práctica orientada a resultados. Su experiencia abarca todo el ciclo de vida de los proyectos de IA, desde la investigación hasta la implementación en producción (MLOps). Además, ha desarrollado librerías propias que simplifican procesos complejos, y su proyecto wyoloservice demuestra su capacidad para democratizar tecnologías avanzadas. Su combinación de habilidades técnicas, experiencia en múltiples dominios y capacidad para comunicar conceptos complejos de manera sencilla lo hace especialmente valioso para proyectos desafiantes.',
    category: 'hiring'
  },
  {
    id: 'faq-9',
    question: '¿Cómo funciona la API de reconocimiento facial de Wisrovi?',
    answer: 'La API de reconocimiento facial desarrollada por Wisrovi está disponible como un contenedor Docker, lo que facilita su despliegue en cualquier entorno. Permite detectar rostros en imágenes, analizar atributos como género, edad y emoción, y proporciona tanto una interfaz web para pruebas como una API REST para integración con otros sistemas. Para utilizarla, simplemente se descarga la imagen Docker (wisrovi/api_face_recognition) y se ejecuta siguiendo las instrucciones de la documentación.',
    category: 'technologies'
  },
  {
    id: 'faq-10',
    question: '¿Qué tipo de soporte ofrece Wisrovi después de completar un proyecto?',
    answer: 'Wisrovi ofrece varios niveles de soporte post-proyecto según las necesidades del cliente. Esto puede incluir: mantenimiento correctivo para solucionar bugs, mantenimiento evolutivo para añadir nuevas funcionalidades, monitoreo y optimización de rendimiento, capacitación al equipo del cliente, y soporte técnico continuo. Los términos específicos del soporte se definen en acuerdos de nivel de servicio (SLA) adaptados a cada proyecto.',
    category: 'services'
  }
];

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const router = useRouter();
  
  // Filtrar preguntas por categoría y búsqueda
  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  // Manejar envío de nueva pregunta
  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setNewQuestion('');
      setEmail('');
      
      // Ocultar formulario después de unos segundos
      setTimeout(() => {
        setIsSubmitted(false);
        setShowContactForm(false);
      }, 3000);
    }, 1500);
  };
  
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        Preguntas Frecuentes
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Encuentra respuestas a las preguntas más comunes sobre los servicios, metodología y tecnologías de Wisrovi Rodriguez.
      </p>
      
      {/* Buscador */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar preguntas o respuestas..."
            className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      {/* Categorías */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      {/* Lista de FAQs */}
      <div className="space-y-4 mb-8">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map(faq => (
            <div 
              key={faq.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                className="w-full flex justify-between items-center p-4 text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                  {faq.question}
                </h3>
                <svg 
                  className={`h-5 w-5 text-gray-500 transition-transform ${expandedFAQ === faq.id ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {expandedFAQ === faq.id && (
                <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <svg className="h-12 w-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
              No se encontraron resultados
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              No hay preguntas que coincidan con tu búsqueda o filtro actual.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Restablecer filtros
            </button>
          </div>
        )}
      </div>
      
      {/* Formulario para nuevas preguntas */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
          ¿No encuentras lo que buscas?
        </h3>
        
        {!showContactForm ? (
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Si tienes alguna pregunta que no está respondida aquí, puedes enviarla directamente a Wisrovi.
            </p>
            <button
              onClick={() => setShowContactForm(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Hacer una pregunta
            </button>
          </div>
        ) : isSubmitted ? (
          <div className="text-center py-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">¡Pregunta enviada!</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Gracias por tu pregunta. Wisrovi la responderá a la brevedad.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmitQuestion} className="space-y-4">
            <div>
              <label htmlFor="newQuestion" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Tu pregunta *
              </label>
              <textarea
                id="newQuestion"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                required
                rows={3}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Escribe tu pregunta aquí..."
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Tu email *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="ejemplo@correo.com"
              />
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setShowContactForm(false)}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Cancelar
              </button>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-4 py-2 rounded-md ${
                  isSubmitting
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white transition-colors`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  'Enviar pregunta'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
      
      {/* Enlace a contacto */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Para consultas más específicas o para discutir un proyecto potencial:
        </p>
        <button
          onClick={() => router.push('/contact')}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-md hover:from-blue-700 hover:to-cyan-600 transition-colors"
        >
          Contactar a Wisrovi
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
