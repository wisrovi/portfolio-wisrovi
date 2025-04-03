'use client';

import { useState } from 'react';
import Link from 'next/link';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío de formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    }, 1500);
  };
  
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
            Contacto
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>¿Interesado en trabajar con Wisrovi Rodriguez?</h2>
                <p>
                  Si estás buscando un experto en inteligencia artificial, visión por computadora y desarrollo de software para liderar tus proyectos tecnológicos, has llegado al lugar correcto.
                </p>
                
                <p>
                  Wisrovi Rodriguez puede ayudarte a:
                </p>
                
                <ul>
                  <li>Desarrollar soluciones de inteligencia artificial para problemas complejos</li>
                  <li>Implementar sistemas de visión por computadora para aplicaciones industriales</li>
                  <li>Crear flujos de trabajo MLOps para el ciclo de vida completo de modelos de ML</li>
                  <li>Diseñar arquitecturas distribuidas para procesamiento de datos a gran escala</li>
                  <li>Desarrollar librerías y herramientas para simplificar procesos complejos</li>
                </ul>
                
                <p>
                  Completa el formulario para iniciar una conversación sobre cómo Wisrovi puede contribuir al éxito de tu proyecto o empresa.
                </p>
                
                <h3>Información de contacto directo</h3>
                <p>
                  Si prefieres contactar directamente, puedes hacerlo a través de:
                </p>
                
                <ul>
                  <li>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:wisrovi.rodriguez@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                      wisrovi.rodriguez@gmail.com
                    </a>
                  </li>
                  <li>
                    <strong>LinkedIn:</strong>{' '}
                    <a href="https://www.linkedin.com/in/wisrovi-rodriguez/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                      linkedin.com/in/wisrovi-rodriguez
                    </a>
                  </li>
                  <li>
                    <strong>GitHub:</strong>{' '}
                    <a href="https://github.com/wisrovi/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                      github.com/wisrovi
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">¡Mensaje enviado!</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Gracias por tu interés. Wisrovi se pondrá en contacto contigo a la brevedad.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-primary"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                      Envía un mensaje
                    </h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
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
                          onChange={handleChange}
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
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Mensaje *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full btn-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Enviando...
                            </span>
                          ) : (
                            'Enviar mensaje'
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
