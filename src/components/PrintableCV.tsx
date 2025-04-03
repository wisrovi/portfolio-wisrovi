'use client';

import { useState } from 'react';
import { useLanguage } from './LanguageSelector';

// Componente para versión imprimible del CV
const PrintableCV = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, currentLanguage } = useLanguage();
  
  // Datos del CV (en una implementación real, estos vendrían de una API o CMS)
  const cvData = {
    personal: {
      name: 'Wisrovi Rodriguez',
      title: currentLanguage === 'es' ? 'Ingeniero MLOps & Especialista en IA' : 'MLOps Engineer & AI Specialist',
      email: 'wisrovi.rodriguez@gmail.com',
      linkedin: 'linkedin.com/in/wisrovi-rodriguez',
      github: 'github.com/wisrovi',
      summary: currentLanguage === 'es' 
        ? 'Ingeniero especializado en inteligencia artificial, visión por computadora y desarrollo de software con enfoque en soluciones empresariales de alto impacto. Creador de múltiples librerías de código abierto que simplifican la integración con tecnologías complejas.'
        : 'Engineer specialized in artificial intelligence, computer vision, and software development with a focus on high-impact business solutions. Creator of multiple open-source libraries that simplify integration with complex technologies.'
    },
    skills: [
      {
        category: currentLanguage === 'es' ? 'Lenguajes de Programación' : 'Programming Languages',
        items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'SQL']
      },
      {
        category: currentLanguage === 'es' ? 'Tecnologías de IA' : 'AI Technologies',
        items: ['TensorFlow', 'PyTorch', 'OpenCV', 'YOLO', 'Scikit-learn', 'NLP']
      },
      {
        category: currentLanguage === 'es' ? 'DevOps & MLOps' : 'DevOps & MLOps',
        items: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Azure', 'GCP', 'MLflow']
      },
      {
        category: currentLanguage === 'es' ? 'Bases de Datos' : 'Databases',
        items: ['MongoDB', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Kafka']
      },
      {
        category: currentLanguage === 'es' ? 'Desarrollo Web' : 'Web Development',
        items: ['React', 'Next.js', 'Node.js', 'Flask', 'FastAPI', 'Django']
      }
    ],
    experience: [
      {
        title: currentLanguage === 'es' ? 'Ingeniero MLOps Senior' : 'Senior MLOps Engineer',
        company: 'AI Solutions Inc.',
        period: '2020 - Presente',
        description: currentLanguage === 'es'
          ? 'Liderazgo en el diseño e implementación de arquitecturas MLOps para el despliegue continuo de modelos de IA. Desarrollo de librerías internas para simplificar la integración con tecnologías complejas.'
          : 'Leadership in the design and implementation of MLOps architectures for continuous deployment of AI models. Development of internal libraries to simplify integration with complex technologies.',
        achievements: currentLanguage === 'es'
          ? ['Reducción del 65% en tiempo de despliegue de modelos', 'Mejora del 42% en precisión de modelos en producción', 'Creación de framework interno de MLOps adoptado por toda la empresa']
          : ['65% reduction in model deployment time', '42% improvement in production model accuracy', 'Creation of internal MLOps framework adopted company-wide']
      },
      {
        title: currentLanguage === 'es' ? 'Especialista en Visión Artificial' : 'Computer Vision Specialist',
        company: 'TechVision Corp.',
        period: '2018 - 2020',
        description: currentLanguage === 'es'
          ? 'Desarrollo de soluciones de visión artificial para clientes en sectores de manufactura, retail y seguridad. Implementación de sistemas de detección y reconocimiento en tiempo real.'
          : 'Development of computer vision solutions for clients in manufacturing, retail, and security sectors. Implementation of real-time detection and recognition systems.',
        achievements: currentLanguage === 'es'
          ? ['Implementación de sistema de control de calidad que redujo defectos en un 78%', 'Desarrollo de API de reconocimiento facial con 99.2% de precisión', 'Optimización de modelos para ejecución en dispositivos edge']
          : ['Implementation of quality control system that reduced defects by 78%', 'Development of facial recognition API with 99.2% accuracy', 'Optimization of models for execution on edge devices']
      },
      {
        title: currentLanguage === 'es' ? 'Desarrollador de Software' : 'Software Developer',
        company: 'DataCore Systems',
        period: '2016 - 2018',
        description: currentLanguage === 'es'
          ? 'Desarrollo de aplicaciones backend y servicios de procesamiento de datos. Implementación de soluciones para integración con sistemas legacy y bases de datos heterogéneas.'
          : 'Development of backend applications and data processing services. Implementation of solutions for integration with legacy systems and heterogeneous databases.',
        achievements: currentLanguage === 'es'
          ? ['Creación de sistema ETL que procesaba más de 10TB diarios', 'Desarrollo de API REST para integración con sistemas externos', 'Implementación de arquitectura de microservicios']
          : ['Creation of ETL system that processed more than 10TB daily', 'Development of REST API for integration with external systems', 'Implementation of microservices architecture']
      }
    ],
    education: [
      {
        degree: currentLanguage === 'es' ? 'Maestría en Inteligencia Artificial' : 'Master\'s Degree in Artificial Intelligence',
        institution: 'Universidad Tecnológica',
        period: '2014 - 2016'
      },
      {
        degree: currentLanguage === 'es' ? 'Ingeniería en Sistemas Computacionales' : 'Computer Systems Engineering',
        institution: 'Universidad Nacional',
        period: '2010 - 2014'
      }
    ],
    projects: [
      {
        name: 'wyoloservice',
        description: currentLanguage === 'es'
          ? 'Plataforma para entrenar modelos de visión por computadora YOLO sin escribir código, permitiendo a cualquier persona implementar soluciones de detección de objetos.'
          : 'Platform for training YOLO computer vision models without writing code, allowing anyone to implement object detection solutions.'
      },
      {
        name: 'wkafka',
        description: currentLanguage === 'es'
          ? 'Librería para simplificar la integración con Apache Kafka en Python mediante decoradores, reduciendo significativamente la cantidad de código necesario.'
          : 'Library to simplify integration with Apache Kafka in Python using decorators, significantly reducing the amount of code required.'
      },
      {
        name: 'wmongo',
        description: currentLanguage === 'es'
          ? 'Librería para simplificar operaciones con MongoDB en Python mediante decoradores y patrones comunes, facilitando el desarrollo de aplicaciones.'
          : 'Library to simplify operations with MongoDB in Python using decorators and common patterns, facilitating application development.'
      },
      {
        name: 'api_face_recognition',
        description: currentLanguage === 'es'
          ? 'API de reconocimiento facial empaquetada como contenedor Docker, fácil de desplegar y escalar en diferentes entornos.'
          : 'Facial recognition API packaged as a Docker container, easy to deploy and scale in different environments.'
      }
    ],
    certifications: [
      {
        name: currentLanguage === 'es' ? 'Certificación en TensorFlow Developer' : 'TensorFlow Developer Certification',
        issuer: 'Google',
        year: '2021'
      },
      {
        name: currentLanguage === 'es' ? 'AWS Certified Machine Learning Specialist' : 'AWS Certified Machine Learning Specialist',
        issuer: 'Amazon Web Services',
        year: '2020'
      },
      {
        name: currentLanguage === 'es' ? 'Professional Data Engineer' : 'Professional Data Engineer',
        issuer: 'Google Cloud',
        year: '2019'
      }
    ],
    languages: [
      {
        name: currentLanguage === 'es' ? 'Español' : 'Spanish',
        level: currentLanguage === 'es' ? 'Nativo' : 'Native'
      },
      {
        name: currentLanguage === 'es' ? 'Inglés' : 'English',
        level: currentLanguage === 'es' ? 'Fluido' : 'Fluent'
      }
    ]
  };
  
  // Función para generar PDF
  const generatePDF = () => {
    // En una implementación real, aquí se generaría el PDF utilizando una librería como jsPDF
    console.log('Generando PDF del CV');
    
    // Simular descarga
    setTimeout(() => {
      alert(currentLanguage === 'es' 
        ? 'CV descargado correctamente' 
        : 'CV downloaded successfully');
    }, 1500);
  };
  
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-40 p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
        title={currentLanguage === 'es' ? 'Versión imprimible del CV' : 'Printable CV version'}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-4xl w-full p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                {currentLanguage === 'es' ? 'Currículum Vitae' : 'Curriculum Vitae'}
              </h2>
              <div className="flex space-x-2">
                <button
                  onClick={generatePDF}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  {currentLanguage === 'es' ? 'Descargar PDF' : 'Download PDF'}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Contenido del CV */}
            <div className="space-y-8 print:space-y-6">
              {/* Información personal */}
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6 print:pb-4">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1 print:text-2xl">
                  {cvData.personal.name}
                </h1>
                <p className="text-xl text-blue-600 dark:text-blue-400 mb-4 print:text-lg">
                  {cvData.personal.title}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 print:text-sm">
                  {cvData.personal.summary}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 print:text-xs">
                  <span className="flex items-center">
                    <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {cvData.personal.email}
                  </span>
                  <span className="flex items-center">
                    <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {cvData.personal.linkedin}
                  </span>
                  <span className="flex items-center">
                    <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    {cvData.personal.github}
                  </span>
                </div>
              </div>
              
              {/* Experiencia */}
              <div className="print:break-inside-avoid">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 print:text-lg">
                  {currentLanguage === 'es' ? 'Experiencia Profesional' : 'Professional Experience'}
                </h2>
                <div className="space-y-6 print:space-y-4">
                  {cvData.experience.map((exp, index) => (
                    <div key={index} className="print:break-inside-avoid">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 print:text-base">
                          {exp.title} - {exp.company}
                        </h3>
                        <span className="text-sm text-gray-600 dark:text-gray-400 print:text-xs">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-2 print:text-sm">
                        {exp.description}
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 print:text-xs">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Habilidades */}
              <div className="print:break-inside-avoid">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 print:text-lg">
                  {currentLanguage === 'es' ? 'Habilidades Técnicas' : 'Technical Skills'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2 print:gap-2">
                  {cvData.skills.map((skillGroup, index) => (
                    <div key={index} className="print:break-inside-avoid">
                      <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2 print:text-sm">
                        {skillGroup.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, i) => (
                          <span 
                            key={i}
                            className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 print:bg-gray-100 print:text-gray-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Proyectos */}
              <div className="print:break-inside-avoid">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 print:text-lg">
                  {currentLanguage === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}
                </h2>
                <div className="space-y-4 print:space-y-2">
                  {cvData.projects.map((project, index) => (
                    <div key={index} className="print:break-inside-avoid">
                      <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-1 print:text-sm">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 print:text-xs">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Educación y Certificaciones */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2 print:gap-4">
                <div className="print:break-inside-avoid">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 print:text-lg">
                    {currentLanguage === 'es' ? 'Educación' : 'Education'}
                  </h2>
                  <div className="space-y-4 print:space-y-2">
                    {cvData.education.map((edu, index) => (
                      <div key={index} className="print:break-inside-avoid">
                        <div className="flex justify-between items-start">
                          <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 print:text-sm">
                            {edu.degree}
                          </h3>
                          <span className="text-sm text-gray-600 dark:text-gray-400 print:text-xs">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 print:text-xs">
                          {edu.institution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="print:break-inside-avoid">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 print:text-lg">
                    {currentLanguage === 'es' ? 'Certificaciones' : 'Certifications'}
                  </h2>
                  <div className="space-y-4 print:space-y-2">
                    {cvData.certifications.map((cert, index) => (
                      <div key={index} className="print:break-inside-avoid">
                        <div className="flex justify-between items-start">
                          <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 print:text-sm">
                            {cert.name}
                          </h3>
                          <span className="text-sm text-gray-600 dark:text-gray-400 print:text-xs">
                            {cert.year}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 print:text-xs">
                          {cert.issuer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Idiomas */}
              <div className="print:break-inside-avoid">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 print:text-lg">
                  {currentLanguage === 'es' ? 'Idiomas' : 'Languages'}
                </h2>
                <div className="flex flex-wrap gap-4">
                  {cvData.languages.map((lang, index) => (
                    <div key={index} className="flex items-center">
                      <span className="font-medium text-gray-800 dark:text-gray-200 print:text-sm">
                        {lang.name}:
                      </span>
                      <span className="ml-1 text-gray-600 dark:text-gray-400 print:text-xs">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PrintableCV;
