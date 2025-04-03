'use client';

import Link from 'next/link';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
            Sobre Wisrovi Rodriguez
          </h1>
          
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="md:w-1/3">
              <div className="sticky top-24">
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-6">
                  <span className="text-8xl font-bold text-white">WR</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Nombre completo</h3>
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200">William Rodriguez</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Especialidad</h3>
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200">MLOps Engineer & AI Developer</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h3>
                    <a href="mailto:wisrovi.rodriguez@gmail.com" className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline">
                      wisrovi.rodriguez@gmail.com
                    </a>
                  </div>
                  
                  <div className="pt-4">
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.linkedin.com/in/wisrovi-rodriguez/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      
                      <a 
                        href="https://github.com/wisrovi/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      
                      <a 
                        href="https://wisrovi.medium.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Perfil Profesional</h2>
                <p>
                  Wisrovi Rodriguez es un ingeniero MLOps especializado en inteligencia artificial, visión artificial y desarrollo de software con amplia experiencia en la creación de soluciones innovadoras para la industria. Su enfoque se centra en democratizar tecnologías complejas, haciendo que herramientas avanzadas sean accesibles para usuarios sin conocimientos técnicos profundos.
                </p>
                
                <p>
                  Con una sólida formación en ingeniería y un enfoque práctico para resolver problemas, Wisrovi ha desarrollado múltiples librerías en Python que simplifican tareas complejas y mejoran la productividad de los desarrolladores. Su trabajo más reciente, wyoloservice, permite a cualquier persona entrenar modelos de visión por computadora sin escribir una línea de código, eliminando barreras técnicas importantes en el campo de la inteligencia artificial.
                </p>
                
                <h2>Trayectoria Profesional</h2>
                <p>
                  A lo largo de su carrera, Wisrovi ha liderado proyectos tecnológicos en diversas industrias, desde sistemas de visión artificial para semáforos inteligentes hasta plataformas distribuidas para entrenamiento de modelos de machine learning. Su capacidad para combinar conocimientos técnicos con visión estratégica le ha permitido desarrollar soluciones que no solo resuelven problemas inmediatos sino que también establecen bases sólidas para futuras innovaciones.
                </p>
                
                <p>
                  Como desarrollador de software, ha creado una serie de librerías que facilitan la integración con tecnologías como Apache Kafka, MongoDB, Redis, Docker y PostgreSQL. Estas herramientas, disponibles públicamente en PyPI, reflejan su compromiso con la comunidad de código abierto y su habilidad para identificar y resolver puntos de fricción comunes en el desarrollo de software.
                </p>
                
                <h2>Filosofía de Trabajo</h2>
                <p>
                  La filosofía de trabajo de Wisrovi se basa en tres principios fundamentales:
                </p>
                
                <ol>
                  <li>
                    <strong>Democratización de la tecnología:</strong> Crear herramientas que permitan a personas sin conocimientos técnicos profundos aprovechar tecnologías avanzadas.
                  </li>
                  <li>
                    <strong>Simplicidad en la complejidad:</strong> Desarrollar interfaces intuitivas para sistemas complejos, reduciendo la curva de aprendizaje y aumentando la productividad.
                  </li>
                  <li>
                    <strong>Innovación con propósito:</strong> Enfocar el desarrollo tecnológico en resolver problemas reales con soluciones escalables y sostenibles.
                  </li>
                </ol>
                
                <h2>Educación y Formación</h2>
                <p>
                  Wisrovi cuenta con una sólida formación en ingeniería y ciencias de la computación, complementada con especialización en inteligencia artificial y aprendizaje automático. Su enfoque en el aprendizaje continuo le ha permitido mantenerse a la vanguardia de las tecnologías emergentes y aplicarlas de manera efectiva en contextos prácticos.
                </p>
                
                <h2>Intereses Personales</h2>
                <p>
                  Más allá de su trabajo profesional, Wisrovi mantiene un interés activo en la divulgación tecnológica, compartiendo sus conocimientos a través de artículos técnicos en plataformas como Medium. También participa en comunidades de desarrollo y contribuye a proyectos de código abierto, reforzando su compromiso con el avance colectivo del conocimiento tecnológico.
                </p>
                
                <div className="mt-8">
                  <Link href="/contact" className="btn-primary">
                    Contactar con Wisrovi
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
