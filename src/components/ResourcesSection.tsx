'use client';

import { useState } from 'react';

// Tipos para los recursos
type Resource = {
  id: string;
  title: string;
  description: string;
  type: 'guide' | 'notebook' | 'cheatsheet' | 'template' | 'ebook';
  tags: string[];
  downloadUrl: string;
  imageUrl: string;
  featured: boolean;
};

const resources: Resource[] = [
  {
    id: 'resource-1',
    title: 'Guía de Inicio Rápido: Reconocimiento Facial con Docker',
    description: 'Aprende a implementar la API de reconocimiento facial de Wisrovi en tu propio entorno utilizando Docker. Esta guía paso a paso te llevará desde la instalación hasta la integración con tus aplicaciones.',
    type: 'guide',
    tags: ['docker', 'reconocimiento facial', 'api', 'implementación'],
    downloadUrl: '/resources/guia-reconocimiento-facial-docker.pdf',
    imageUrl: '/images/resources/facial-recognition-guide.jpg',
    featured: true
  },
  {
    id: 'resource-2',
    title: 'Notebook: Análisis de Datos con wkafka y wmongo',
    description: 'Jupyter Notebook con ejemplos prácticos de cómo utilizar las librerías wkafka y wmongo para crear pipelines de datos eficientes. Incluye casos de uso reales y ejemplos de código.',
    type: 'notebook',
    tags: ['python', 'kafka', 'mongodb', 'análisis de datos'],
    downloadUrl: '/resources/analisis-datos-wkafka-wmongo.ipynb',
    imageUrl: '/images/resources/data-analysis-notebook.jpg',
    featured: false
  },
  {
    id: 'resource-3',
    title: 'Cheatsheet: Comandos Esenciales para wcontainer',
    description: 'Referencia rápida con los comandos más útiles para gestionar contenedores Docker utilizando la librería wcontainer. Perfecta para tener a mano durante el desarrollo.',
    type: 'cheatsheet',
    tags: ['docker', 'contenedores', 'devops', 'referencia'],
    downloadUrl: '/resources/wcontainer-cheatsheet.pdf',
    imageUrl: '/images/resources/container-cheatsheet.jpg',
    featured: false
  },
  {
    id: 'resource-4',
    title: 'Plantilla: Proyecto MLOps con wyoloservice',
    description: 'Estructura de proyecto lista para usar que implementa mejores prácticas de MLOps utilizando wyoloservice. Incluye configuración de CI/CD, monitoreo y despliegue automatizado.',
    type: 'template',
    tags: ['mlops', 'yolo', 'visión artificial', 'devops'],
    downloadUrl: '/resources/mlops-wyoloservice-template.zip',
    imageUrl: '/images/resources/mlops-template.jpg',
    featured: true
  },
  {
    id: 'resource-5',
    title: 'E-book: Introducción a la Visión Artificial con Python',
    description: 'Guía completa para principiantes sobre visión artificial utilizando Python. Cubre conceptos fundamentales, bibliotecas populares y ejemplos prácticos para comenzar tus propios proyectos.',
    type: 'ebook',
    tags: ['visión artificial', 'python', 'aprendizaje', 'principiantes'],
    downloadUrl: '/resources/introduccion-vision-artificial-python.pdf',
    imageUrl: '/images/resources/vision-ebook.jpg',
    featured: true
  },
  {
    id: 'resource-6',
    title: 'Notebook: Optimización de Modelos YOLO para Producción',
    description: 'Aprende técnicas avanzadas para optimizar modelos YOLO y desplegarlos en entornos de producción con recursos limitados. Incluye ejemplos de cuantización, poda y optimización de inferencia.',
    type: 'notebook',
    tags: ['yolo', 'optimización', 'producción', 'deep learning'],
    downloadUrl: '/resources/optimizacion-yolo-produccion.ipynb',
    imageUrl: '/images/resources/yolo-optimization.jpg',
    featured: false
  },
  {
    id: 'resource-7',
    title: 'Guía: Implementación de Sistemas Distribuidos con wredis',
    description: 'Aprende a diseñar e implementar sistemas distribuidos escalables utilizando Redis y la librería wredis. Incluye patrones de diseño, ejemplos de código y mejores prácticas.',
    type: 'guide',
    tags: ['redis', 'sistemas distribuidos', 'escalabilidad', 'arquitectura'],
    downloadUrl: '/resources/sistemas-distribuidos-wredis.pdf',
    imageUrl: '/images/resources/distributed-systems.jpg',
    featured: false
  },
  {
    id: 'resource-8',
    title: 'Plantilla: Dashboard de Monitoreo para Modelos de IA',
    description: 'Plantilla de dashboard para monitorear el rendimiento de modelos de IA en producción. Compatible con TensorBoard, MLflow y herramientas personalizadas.',
    type: 'template',
    tags: ['monitoreo', 'dashboard', 'mlops', 'producción'],
    downloadUrl: '/resources/ia-monitoring-dashboard.zip',
    imageUrl: '/images/resources/monitoring-dashboard.jpg',
    featured: false
  }
];

// Tipos de recursos para filtrado
const resourceTypes = [
  { id: 'all', name: 'Todos' },
  { id: 'guide', name: 'Guías' },
  { id: 'notebook', name: 'Notebooks' },
  { id: 'cheatsheet', name: 'Cheatsheets' },
  { id: 'template', name: 'Plantillas' },
  { id: 'ebook', name: 'E-books' }
];

// Etiquetas para filtrado
const allTags = Array.from(new Set(resources.flatMap(resource => resource.tags)));

const ResourcesSection = () => {
  const [activeType, setActiveType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [downloadingResource, setDownloadingResource] = useState<Resource | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Filtrar recursos por tipo, etiquetas y búsqueda
  const filteredResources = resources.filter(resource => {
    const matchesType = activeType === 'all' || resource.type === activeType;
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => resource.tags.includes(tag));
    const matchesSearch = searchQuery === '' || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesType && matchesTags && matchesSearch;
  });
  
  // Manejar cambio de etiquetas seleccionadas
  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };
  
  // Manejar cambios en el formulario
  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Simular descarga del recurso
      setTimeout(() => {
        // En una implementación real, aquí se redigiría a la URL de descarga
        console.log(`Descargando: ${downloadingResource.title}`);
        
        // Reiniciar estado
        setIsSubmitted(false);
        setShowLeadForm(false);
        setDownloadingResource(null);
        setFormData({
          name: '',
          email: '',
          company: '',
          consent: false
        });
      }, 2000);
    }, 1500);
  };
  
  // Iniciar proceso de descarga
  const initiateDownload = (resource: Resource) => {
    setDownloadingResource(resource);
    setShowLeadForm(true);
  };
  
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        Recursos Gratuitos
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Descarga guías, notebooks, plantillas y otros recursos creados por Wisrovi Rodriguez para ayudarte en tus proyectos de IA y desarrollo de software.
      </p>
      
      {/* Buscador */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar recursos..."
            className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filtros */}
        <div className="lg:w-1/4">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
              Tipo de recurso
            </h3>
            <div className="space-y-2">
              {resourceTypes.map(type => (
                <button
                  key={type.id}
                  onClick={() => setActiveType(type.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeType === type.id
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {type.name}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
              Etiquetas
            </h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedTags.includes(tag)
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Lista de recursos */}
        <div className="lg:w-3/4">
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredResources.map(resource => (
                <div 
                  key={resource.id}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-40 bg-gray-200 dark:bg-gray-700 relative">
                    {/* En una implementación real, aquí iría la imagen del recurso */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                      {resource.type === 'guide' && (
                        <svg className="h-16 w-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      )}
                      {resource.type === 'notebook' && (
                        <svg className="h-16 w-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      )}
                      {resource.type === 'cheatsheet' && (
                        <svg className="h-16 w-16 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                      )}
                      {resource.type === 'template' && (
                        <svg className="h-16 w-16 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                      )}
                      {resource.type === 'ebook' && (
                        <svg className="h-16 w-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      )}
                    </div>
                    
                    {resource.featured && (
                      <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                        Destacado
                      </div>
                    )}
                    
                    <div className="absolute bottom-2 left-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        resource.type === 'guide' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                        resource.type === 'notebook' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                        resource.type === 'cheatsheet' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                        resource.type === 'template' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}>
                        {resource.type === 'guide' && 'Guía'}
                        {resource.type === 'notebook' && 'Notebook'}
                        {resource.type === 'cheatsheet' && 'Cheatsheet'}
                        {resource.type === 'template' && 'Plantilla'}
                        {resource.type === 'ebook' && 'E-book'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {resource.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {resource.tags.map(tag => (
                        <span 
                          key={tag}
                          className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button
                      onClick={() => initiateDownload(resource)}
                      className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center justify-center"
                    >
                      <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Descargar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                No se encontraron recursos
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                No hay recursos que coincidan con tus filtros actuales.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveType('all');
                  setSelectedTags([]);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Restablecer filtros
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Modal de formulario para descarga */}
      {showLeadForm && downloadingResource && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Descargar recurso</h3>
              <button 
                onClick={() => {
                  setShowLeadForm(false);
                  setDownloadingResource(null);
                }}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {isSubmitted ? (
              <div className="text-center py-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">¡Gracias!</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Tu descarga comenzará automáticamente en unos segundos.
                </p>
                <div className="animate-pulse">
                  <svg className="h-8 w-8 text-blue-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
              </div>
            ) : (
              <>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Completa el siguiente formulario para descargar <strong>{downloadingResource.title}</strong>
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleFormChange}
                      required
                      className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="consent" className="ml-2 block text-sm text-gray-600 dark:text-gray-400">
                      Acepto recibir ocasionalmente información sobre nuevos recursos, artículos y servicios de Wisrovi Rodriguez. Puedo darme de baja en cualquier momento. *
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2 rounded-md ${
                      isSubmitting
                        ? 'bg-blue-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700'
                    } text-white transition-colors`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Procesando...
                      </span>
                    ) : (
                      'Descargar ahora'
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourcesSection;
