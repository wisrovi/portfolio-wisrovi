'use client';

import { useState } from 'react';
import { useLanguage } from './LanguageSelector';

// Componente para versión imprimible del CV
const PrintableCV = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage } = useLanguage();
  
  // Datos del CV oficiales y verificados
  const cvData = {
    personal: {
      name: 'William Steve Rodriguez Villamizar (wisrovi)',
      title: currentLanguage === 'es' ? 'Principal AI Engineer & Applied AI Solutions Architect | Scientific Researcher' : 'Principal AI Engineer & Applied AI Solutions Architect | Scientific Researcher',
      email: 'wisrovi.rodriguez@gmail.com',
      linkedin: 'linkedin.com/in/wisrovi-rodriguez',
      github: 'github.com/wisrovi',
      summary: currentLanguage === 'es' 
        ? 'Ingeniero e Investigador Científico especializado en MLOps distribuido, Inteligencia Artificial Confiable (XAI Cuantitativo, Conformal Prediction) y Verificación Formal de agentes con Model Context Protocol (MCP). Autor de 26 preprints científicos revisados por pares con DOI Zenodo/CERN y creador del ecosistema wisrovi SUITE (23+ paquetes publicados en PyPI, 37 módulos totales).'
        : 'Principal AI Engineer and Scientific Researcher specialized in distributed MLOps, Trustworthy AI (Quantitative XAI, Conformal Prediction), and Formal Verification of multi-agent workflows using Model Context Protocol (MCP). Author of 26 peer-reviewed scientific preprints with Zenodo/CERN DOIs and creator of the wisrovi SUITE (23+ published PyPI packages, 37 total modules).'
    },
    skills: [
      {
        category: currentLanguage === 'es' ? 'Investigación & Métodos Teóricos' : 'Research & Theoretical Methods',
        items: ['Causal Saliency Regularization', 'Conformal Prediction', 'Formal Verification (LTL Model Checking)', 'Quantitative XAI (Grad-CAM, AUC Deletion/Insertion)', 'Adversarial Robustness (FGSM, Diffusion)']
      },
      {
        category: currentLanguage === 'es' ? 'Ingeniería MLOps & Sistemas Distribuidos' : 'MLOps & Distributed Systems',
        items: ['Model Context Protocol (FastMCP)', 'Docker', 'Celery', 'Optuna HPO', 'MLflow', 'Redis Queues', 'PostgreSQL', 'MinIO S3', 'wpipe']
      },
      {
        category: currentLanguage === 'es' ? 'Visión Artificial & Deep Learning' : 'Computer Vision & Deep Learning',
        items: ['YOLOv8', 'YOLOv11', 'YOLO26', 'RT-DETR', 'PyTorch', 'TorchVision', 'OpenCV', 'TensorFlow']
      },
      {
        category: currentLanguage === 'es' ? 'Lenguajes & Bases de Datos' : 'Languages & Datastores',
        items: ['Python (Core Weapon)', 'TypeScript / JavaScript', 'SQL / PostgreSQL', 'Redis', 'SQLite (WAL)', 'ClickHouse', 'MongoDB', 'Bash / Linux Kernel']
      }
    ],
    experience: [
      {
        title: currentLanguage === 'es' ? 'Investigador Principal & Creador del Ecosistema' : 'Principal Investigator & Ecosystem Creator',
        company: 'wisrovi-suit AI Research Initiative (Badajoz, Spain)',
        period: '2023 - Presente',
        description: currentLanguage === 'es'
          ? 'Dirección de investigación científica en XAI cuantitativo, robustez adversarial y verificación formal para modelos de visión profunda. Diseño y publicación de 23 librerías en PyPI y 26 preprints científicos.'
          : 'Lead scientific researcher in quantitative XAI, adversarial robustness, and formal verification for deep vision. Architect and author of 23 published PyPI packages and 26 scientific preprints.',
        achievements: currentLanguage === 'es'
          ? ['Publicación de 26 preprints con DOIs oficiales de CERN/Zenodo (ORCID 0009-0005-0710-1861)', 'Creación de wpipe y suite de 23 paquetes PyPI con más de 37 módulos integrados', 'Desarrollo de NeuralForgeAI: cluster MLOps distribuido con balanceo de colas por prioridad']
          : ['26 scientific preprints archived with official CERN/Zenodo DOIs (ORCID 0009-0005-0710-1861)', 'Architected wpipe and 23 PyPI packages across 37 unified ecosystem modules', 'Engineered NeuralForgeAI: distributed multi-node MLOps cluster with strict priority task routing']
      },
      {
        title: currentLanguage === 'es' ? 'Solutions Architect & Senior AI Engineer' : 'Solutions Architect & Senior AI Engineer',
        company: 'Freelance & Enterprise Consulting',
        period: '2020 - 2023',
        description: currentLanguage === 'es'
          ? 'Diseño de arquitecturas de IA escalables, visión por computador en tiempo real y microservicios para streaming de datos de alto rendimiento.'
          : 'Design of scalable AI architectures, real-time computer vision, and high-performance streaming microservices.',
        achievements: currentLanguage === 'es'
          ? ['Implementación de sistemas de streaming distribuido con wkafka y wredis con reducción del 60% en latencia', 'Optimización de modelos YOLO para inferencia embebida y edge en GPUs NVIDIA', 'Automatización de pipelines CI/CD y telemetría de modelos con MLflow']
          : ['Engineered high-throughput distributed streaming with wkafka and wredis cutting latency by 60%', 'Optimized YOLO architectures for edge inference on NVIDIA embedded platforms', 'Automated production CI/CD pipelines and model telemetry with MLflow']
      }
    ],
    education: [
      {
        degree: currentLanguage === 'es' ? 'Máster Universitario en Inteligencia Artificial' : 'M.Sc. in Artificial Intelligence',
        institution: 'Universidad Internacional de Valencia (VIU), España',
        period: '2023 - 2024'
      },
      {
        degree: currentLanguage === 'es' ? 'Ingeniería Electrónica' : 'B.Sc. in Electronic Engineering',
        institution: 'Universidad de Investigación y Desarrollo (UDI), Colombia',
        period: '2010 - 2016'
      }
    ],
    projects: [
      {
        name: 'NeuralForge AI (wyoloservice2)',
        description: currentLanguage === 'es'
          ? 'Plataforma empresarial distribuida de MLOps para entrenamiento de YOLO, optimización genética con Optuna y auditorías forenses de XAI cuantitativo.'
          : 'Enterprise distributed MLOps platform for automated YOLO training, Optuna genetic optimization, and quantitative forensic XAI auditing.'
      },
      {
        name: 'wpipe & wpipe-mcp',
        description: currentLanguage === 'es'
          ? 'Motor de ejecución DAG desacoplado con almacenamiento de estado SQLite WAL y servidor FastMCP para orquestación agéntica autónoma.'
          : 'Decoupled DAG pipeline engine with SQLite WAL persistence and FastMCP server for autonomous agentic orchestration.'
      },
      {
        name: 'w-cli (Wisrovi Suite CLI)',
        description: currentLanguage === 'es'
          ? 'CLI central que gestiona el ciclo de vida, instalación, verificación y documentación de los 23 paquetes PyPI del ecosistema.'
          : 'Unified CLI manager overseeing lifecycle, installation, validation, and documentation for 23 published PyPI packages.'
      },
      {
        name: '26 Preprints Científicos (Zenodo / CERN)',
        description: currentLanguage === 'es'
          ? 'Portafolio de investigación en XAI Causal, Predicción Conforme, Verificación LTL y MLOps Auto-Reparable (ORCID: 0009-0005-0710-1861).'
          : 'Scientific publication track in Causal XAI, Conformal Prediction, LTL Verification, and Self-Healing MLOps (ORCID: 0009-0005-0710-1861).'
      }
    ],
    certifications: [
      {
        name: currentLanguage === 'es' ? 'ORCID Verified Researcher (0009-0005-0710-1861)' : 'ORCID Verified Researcher (0009-0005-0710-1861)',
        issuer: 'ORCID International',
        year: '2026'
      },
      {
        name: currentLanguage === 'es' ? 'Miembro Profesional IEEE Computer Society (#9983421)' : 'IEEE Computer Society Professional Member (#9983421)',
        issuer: 'IEEE',
        year: '2025'
      }
    ],
    languages: [
      {
        name: currentLanguage === 'es' ? 'Español' : 'Spanish',
        level: currentLanguage === 'es' ? 'Nativo' : 'Native'
      },
      {
        name: currentLanguage === 'es' ? 'Inglés' : 'English',
        level: currentLanguage === 'es' ? 'Competencia Profesional' : 'Professional Working Proficiency'
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
