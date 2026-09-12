'use client';

import { useState } from 'react';

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  imageUrl = null,
  githubUrl = null,
  demoUrl = null,
  featured = false,
  badge = null
}: {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string | null;
  githubUrl?: string | null;
  demoUrl?: string | null;
  featured?: boolean;
  badge?: string | null;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`project-card overflow-hidden bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-all flex flex-col justify-between ${featured ? 'col-span-1 md:col-span-2 lg:col-span-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <div className="relative overflow-hidden h-48 md:h-56 bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center p-6">
          <div className={`transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'} w-full flex items-center justify-center`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white/90 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          
          {badge && (
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
              {badge}
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900/80 to-transparent">
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">{description}</p>
          
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Tecnologías Clave:</h4>
            <div className="flex flex-wrap gap-1.5">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-2.5 py-0.5 bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-md border border-blue-100 dark:border-blue-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 pt-0 flex items-center justify-between border-t border-gray-100 dark:border-gray-700 mt-2">
        <div className="flex space-x-3 pt-4">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Código
            </a>
          )}
          
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Ver Portal
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
              Producción e Investigación Científica
            </span>
            <h1 className="text-4xl font-bold mt-2 mb-4 text-gray-900 dark:text-gray-100">
              Proyectos de Alta Ingeniería & MLOps
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Sistemas distribuidos de gran escala, plataformas agénticas con Model Context Protocol (MCP) y pipelines de computación científica validados en entornos reales.
            </p>
          </div>
          
          {/* Flagship Project - NeuralForgeAI */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100 flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-ping"></span>
              Plataforma Insignia: NeuralForge AI (wyoloservice2)
            </h2>
            <div className="bg-gradient-to-r from-blue-50 via-indigo-50/40 to-cyan-50 dark:from-blue-950/40 dark:via-indigo-950/30 dark:to-cyan-950/30 rounded-2xl overflow-hidden shadow-xl border border-blue-100 dark:border-blue-900/50">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-7/12 p-8 lg:p-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase">Enterprise MLOps</span>
                    <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 text-xs font-semibold rounded-full">FastAPI + React 19</span>
                  </div>
                  <h3 className="text-3xl font-extrabold mb-4 text-gray-900 dark:text-white">
                    Distributed Computer Vision Lifecycle & XAI Forensics
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Plataforma MLOps distribuida de grado empresarial para entrenamiento masivo, optimización genética de hiperparámetros con <strong>Optuna TPESampler</strong> y validación forense explicable (XAI). Automatiza un pipeline post-entrenamiento de <strong>22 pasos secuenciales</strong> integrando mapas de calor Grad-CAM/Eigen-CAM, pruebas de estrés adversario (FGSM/PGD) y reportes científicos generados por LLMs locales.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700 dark:text-gray-300">Orquestación Celery con colas priorizadas por GPU</span>
                    </div>
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700 dark:text-gray-300">Ejecución en contenedores efímeros aislados (wtrain)</span>
                    </div>
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700 dark:text-gray-300">Auditoría cuantitativa de fidelidad XAI (Deletion/Insertion AUC)</span>
                    </div>
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700 dark:text-gray-300">Telemetría de grado de producción en MinIO S3 y MLflow</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-lg">Python 3.11</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-lg">PyTorch / YOLOv8 / YOLOv11 / YOLO26</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-lg">Optuna TPESampler</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-lg">Celery & Redis</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-lg">PostgreSQL & MinIO S3</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-lg">React 19 & Tailwind</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <a 
                      href="https://github.com/wisrovi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center px-6 py-3"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Explorar Ecosistema en GitHub
                    </a>
                  </div>
                </div>

                <div className="lg:w-5/12 bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-900 p-8 flex flex-col justify-center text-white">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-blue-300 font-semibold mb-3">Métricas de Arquitectura</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-3xl font-black text-white">22</div>
                        <div className="text-xs text-blue-200">Pasos del Pipeline Forense</div>
                      </div>
                      <div>
                        <div className="text-3xl font-black text-cyan-300">100%</div>
                        <div className="text-xs text-blue-200">Contenedores Efímeros Aislados</div>
                      </div>
                      <div>
                        <div className="text-3xl font-black text-amber-300">3</div>
                        <div className="text-xs text-blue-200">Colas Celery Dinámicas</div>
                      </div>
                      <div>
                        <div className="text-3xl font-black text-green-300">S3/MinIO</div>
                        <div className="text-xs text-blue-200">Almacenamiento Confiable</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-blue-200/90 leading-relaxed italic">
                    &quot;Diseñado para garantizar reproducibilidad matemática y auditoría forense rigurosa en modelos de visión artificial desplegados en producción crítica.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Systems Grid */}
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Ecosistema de Software y Publicaciones Científicas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard 
              title="26 Artículos Científicos Preprints"
              description="Cartera de 26 preprints con DOIs oficiales de Zenodo/CERN y registro ORCID, abarcando XAI cuantitativo, robustez adversarial, verificación formal con LTL y MLOps auto-reparable."
              technologies={['XAI Causal', 'Conformal Prediction', 'Verificación Formal LTL', 'Zenodo DOIs']}
              demoUrl="https://orcid.org/0009-0005-0710-1861"
              badge="CERN / Zenodo DOIs"
            />

            <ProjectCard 
              title="wpipe & FastMCP Tool Ecosystem"
              description="Pipeline declarativo con inyección contextual y servidores FastMCP (wpipe-mcp, wyolo-mcp, wredis-mcp) que permiten a agentes LLM orquestar entrenamiento distribuido de manera autónoma."
              technologies={['FastMCP', 'Python', 'JSON-RPC', 'Agentic AI', 'Pipelines']}
              githubUrl="https://github.com/wisrovi"
              badge="MCP Server Suite"
            />

            <ProjectCard 
              title="w-cli: Developer Command Center"
              description="CLI interactiva y modular con TUI Rich para gestionar 23 librerías PyPI, scaffolds de proyectos y agentes autónomos desde una única terminal unificada."
              technologies={['CLI', 'Rich TUI', 'Python', 'PyPI', 'Scaffolding']}
              githubUrl="https://github.com/wisrovi/w-cli"
              badge="PyPI Package"
            />

            <ProjectCard 
              title="wkafka: Reactive Event Streaming"
              description="Abstracción elegante con decoradores en Python para Apache Kafka, integrando esquemas Avro, heartbeat resiliente y reintentos exponenciales."
              technologies={['Apache Kafka', 'Decorators', 'Event Streaming', 'Distributed']}
              githubUrl="https://github.com/wisrovi/wkafka"
            />
            
            <ProjectCard 
              title="wmongo & wpostgresql: High-Performance Data"
              description="Adaptadores unificados con pool de conexiones de alto rendimiento, transacciones ACID seguras y telemetría de latencia integrada."
              technologies={['PostgreSQL', 'MongoDB', 'ACID', 'Connection Pooling']}
              githubUrl="https://github.com/wisrovi"
            />
            
            <ProjectCard 
              title="wcontainer: Docker Orchestration SDK"
              description="Gestión automatizada de contenedores efímeros Docker, gobernanza dinámica de GPU y monitoreo de recursos en tiempo de ejecución."
              technologies={['Docker SDK', 'GPU Governance', 'DevOps', 'Containers']}
              githubUrl="https://github.com/wisrovi/wcontainer"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
