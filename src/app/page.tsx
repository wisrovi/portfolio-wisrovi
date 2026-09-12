import Link from 'next/link';
import TalentExplorer from '@/components/TalentExplorer';
import VirtualAssistant from '@/components/VirtualAssistant';
import GameWorld from '@/components/GameWorld';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Doctoral Fellowship Banner */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Aspiring Ph.D. Candidate | Autonomous Verification & Causal XAI</span>
            <a 
              href="https://orcid.org/0009-0005-0710-1861" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-300 hover:text-white underline font-semibold ml-1"
            >
              ORCID: 0009-0005-0710-1861
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                William Steve Rodriguez
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-cyan-200">
                Principal AI Engineer & Applied AI Solutions Architect | Scientific Researcher
              </h2>
              <p className="text-lg mb-8 max-w-lg text-slate-100 leading-relaxed">
                Ingeniería de sistemas críticos y rigor matemático. Arquitecto de plataformas MLOps distribuidas (NeuralForgeAI), creador de la suite de 23 paquetes en PyPI y autor de 26 preprints científicos revisados por pares.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/projects" className="btn-cta">
                  Ver Proyectos & MLOps
                </Link>
                <Link href="/libraries" className="btn-secondary bg-white/20 hover:bg-white/30 text-white">
                  23 Librerías PyPI
                </Link>
                <a 
                  href="https://orcid.org/0009-0005-0710-1861" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary bg-emerald-600/80 hover:bg-emerald-600 text-white"
                >
                  26 Preprints ORCID
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-5xl font-extrabold text-white mb-2 tracking-wider">wisrovi</span>
                  <span className="text-xs uppercase tracking-widest text-cyan-200 font-semibold">AI Solutions Architect</span>
                  <span className="text-xs text-white/80 mt-2 font-mono">23 PyPI · 26 Preprints</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
            Áreas de Especialización
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-neomorphism p-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Inteligencia Artificial</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Desarrollo de modelos de machine learning y redes neuronales para procesamiento de video y audio, con enfoque en visión artificial para aplicaciones industriales.
              </p>
            </div>
            <div className="card-neomorphism p-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Desarrollo de Software</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creación de aplicaciones y librerías en Python para simplificar procesos complejos, con experiencia en desarrollo web, móvil y sistemas embebidos.
              </p>
            </div>
            <div className="card-neomorphism p-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">MLOps</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Implementación de flujos de trabajo automatizados para el ciclo de vida de modelos de ML, desde el desarrollo hasta el despliegue y monitoreo en producción.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Libraries Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
              Librerías Destacadas de la wisrovi SUITE
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              23+ paquetes publicados en PyPI y 37 módulos que potencian la arquitectura MLOps empresarial.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="library-card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">wpipe & wpipe-mcp</h3>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-mono px-2 py-0.5 rounded">PyPI</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                Motor DAG desacoplado con persistencia WAL SQLite y servidor FastMCP que permite a LLMs construir y auditar pipelines de forma segura.
              </p>
              <Link href="/libraries#wpipe" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                Ver detalles →
              </Link>
            </div>
            <div className="library-card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">wredis & wsqlite</h3>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-mono px-2 py-0.5 rounded">PyPI</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                Gestión de colas por prioridad Celery, rate-limiting distribuido token-bucket y ORM Pydantic v2 con TableSync reactivo.
              </p>
              <Link href="/libraries#wredis" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                Ver detalles →
              </Link>
            </div>
            <div className="library-card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">wyolo & wauth</h3>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-mono px-2 py-0.5 rounded">PyPI</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                Wrapper de ciclo de vida completo de modelos YOLO en MLflow/S3 y bóveda criptográfica Fernet AES-256 vinculada a hardware machine-salted.
              </p>
              <Link href="/libraries#wyolo" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                Ver detalles →
              </Link>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/libraries" className="btn-primary">
              Explorar Catálogo Completo (23 Paquetes)
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
            Plataforma MLOps Insignia
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl overflow-hidden shadow-lg">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">NeuralForge AI (wyoloservice2)</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Plataforma distribuida empresarial para entrenamiento de Computer Vision (YOLOv8, YOLOv11, YOLO26), optimización bayesiana con Optuna y validación forense con XAI Cuantitativo (Grad-CAM, Deletion/Insertion AUC).
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Arquitectura desacoplada Invoker-Executor con contenedores Docker efímeros</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Pipeline post-entrenamiento de 22 pasos con wpipe y reportes LLM</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">FastMCP Agentic Server para control autónomo por modelos de lenguaje</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/projects" className="btn-primary">
                    Ver arquitectura de NeuralForge AI
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 bg-gradient-to-br from-blue-700 to-indigo-900 flex items-center justify-center p-8 text-white">
                <div className="w-full bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="font-mono text-xs text-cyan-300 mb-2">// Distributed Topology</div>
                  <div className="space-y-2 font-mono text-xs">
                    <div className="p-2 bg-slate-900/60 rounded">NeuralForge Frontend (React 19) :23442</div>
                    <div className="p-2 bg-slate-900/60 rounded">Optuna Evolutionary Manager (TPESampler)</div>
                    <div className="p-2 bg-slate-900/60 rounded">GPU Invoker Daemon + Samba Storage</div>
                    <div className="p-2 bg-slate-900/60 rounded">Worker Engine: 22-step wpipe lifecycle</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Explorer Game Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
            Explora el Talento de Wisrovi
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Descubre las habilidades, arquitectura de librerías y preprints científicos de Wisrovi Rodriguez de forma interactiva. Completa desafíos, gana puntos y desbloquea insignias.
          </p>
          <TalentExplorer />
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
              Mundo Virtual y Asistente Interactivo
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Explora el mundo virtual de Wisrovi, conversa con su asistente inteligente WChat y descubre más sobre sus proyectos.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <GameWorld />
              <VirtualAssistant />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
            Recomendaciones Profesionales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">JL</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">José Luis Salvador Rufo</h3>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic">
                &quot;William demostró un altísimo entusiasmo que supo contagiar al resto del equipo. Predisposición a aprender, mejorar y enfrentarse a nuevos retos. Resolutivo. Supo adaptarse en muy poco tiempo a un proyecto cuya temática nunca antes había visto; así como a las dinámicas de equipo en las diferentes etapas del desarrollo.&quot;
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">MS</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">Miguel Sanchez Bautista</h3>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic">
                &quot;Tuve la oportunidad de trabajar con el Ing. William y puedo decir que es una persona directa, asertiva y competitiva, con ímpetu para asumir desafíos complejos y retadores, con la capacidad de alcanzar objetivos propuestos a nivel de desarrollo. En lo personal es un gran compañero con la voluntad de ayudar a las personas que lo necesitan.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Investigación Doctoral & Arquitectura de Soluciones de IA</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Abierto a colaboraciones de investigación científica doctoral, desarrollo de infraestructura MLOps y consultoría especializada de alto nivel.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-cta bg-white text-blue-600 hover:bg-gray-100">
              Contactar ahora
            </Link>
            <a 
              href="https://orcid.org/0009-0005-0710-1861" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary bg-transparent border-2 border-white hover:bg-white/10"
            >
              Consultar ORCID
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
