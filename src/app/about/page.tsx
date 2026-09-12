'use client';

import Link from 'next/link';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
            Sobre William Steve Rodriguez (wisrovi)
          </h1>
          
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="md:w-1/3">
              <div className="sticky top-24">
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 flex flex-col items-center justify-center mb-6 shadow-xl p-6 text-center text-white">
                  <span className="text-6xl font-black tracking-wider">WR</span>
                  <span className="text-xs uppercase tracking-widest text-cyan-200 font-semibold mt-2">wisrovi</span>
                  <span className="text-xs text-white/80 font-mono mt-1">Badajoz, Spain</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Nombre Oficial</h3>
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200">William Steve Rodriguez Villamizar</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Rol Profesional & Científico</h3>
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      Principal AI Engineer & Solutions Architect | Scientific Researcher
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">ORCID Oficial</h3>
                    <a 
                      href="https://orcid.org/0009-0005-0710-1861" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-emerald-600 dark:text-emerald-400 hover:underline font-mono"
                    >
                      0009-0005-0710-1861
                    </a>
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
                        title="LinkedIn"
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
                        title="GitHub"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>

                      <a 
                        href="https://pypi.org/user/wisrovi/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        title="PyPI Profile"
                      >
                        <span className="font-bold text-sm bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded">PyPI</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Perfil Profesional & Científico</h2>
                <p>
                  William Steve Rodriguez Villamizar (wisrovi) es un Ingeniero Principal de Inteligencia Artificial, Arquitecto de Soluciones e Investigador Científico con sede en Badajoz, España. Su labor se ubica en la intersección exacta entre la <strong>ingeniería de sistemas de producción de misión crítica</strong> y el <strong>rigor matemático de la investigación doctoral</strong> en IA Confiable (Trustworthy AI).
                </p>
                <p>
                  Es el creador y arquitecto del ecosistema <strong>wisrovi SUITE</strong>, compuesto por <strong>23+ paquetes publicados en PyPI y 37 módulos integrados</strong> (incluyendo el motor DAG <code>wpipe</code> y sus herramientas FastMCP), así como de la plataforma distribuida de MLOps <strong>NeuralForge AI (wyoloservice2)</strong>.
                </p>
                
                <h2>Agenda de Investigación Doctoral (Ph.D. Pillars)</h2>
                <p>
                  Como aspirante a programa de doctorado y beca de investigación, su línea de trabajo aborda tres interrogantes científicos fundamentales en visión artificial y sistemas agénticos autónomos:
                </p>
                
                <ol>
                  <li>
                    <strong>Regularización Causal de Salience (Causal Saliency Regularization):</strong> Formulación analítica de penalizaciones durante el descenso de gradiente para mitigar atajos espurios (efecto Clever Hans) en detectores de una sola etapa (YOLOv8/11/26), optimizando el frente de Pareto entre velocidad de inferencia ($mAP_{50}$) y fidelidad explicativa (Deletion/Insertion AUC).
                  </li>
                  <li>
                    <strong>Predicción Conforme & Descomposición de Incertidumbre Epistémica:</strong> Establecimiento de garantías de cobertura finita libre de distribución bajo deriva de dominio y degradación sensórica severa en hardware edge heterogéneo.
                  </li>
                  <li>
                    <strong>Verificación Formal de Flujos Agénticos (LTL Model Checking):</strong> Síntesis de monitores en tiempo de ejecución basados en Lógica Temporal Lineal para garantizar matemáticamente seguridad, ausencia de interbloqueos y vivacidad en la ejecución autónoma de herramientas mediante Model Context Protocol (FastMCP).
                  </li>
                </ol>

                <h2>Formación Académica Oficial</h2>
                <ul>
                  <li>
                    <strong>Máster Universitario en Inteligencia Artificial (2023 - 2024):</strong> Universidad Internacional de Valencia (VIU), España. Énfasis en redes neuronales profundas, visión artificial avanzada e inferencia probabilística.
                  </li>
                  <li>
                    <strong>Ingeniería Electrónica (2010 - 2016):</strong> Universidad de Investigación y Desarrollo (UDI), Colombia. Énfasis en instrumentación electrónica, automatización y procesamiento digital de señales.
                  </li>
                </ul>

                <h2>Producción Científica & Preprints (Zenodo / CERN)</h2>
                <p>
                  Investigador Principal de la <strong>wisrovi-suit AI Research Initiative</strong>. Su registro oficial en <strong>ORCID: 0009-0005-0710-1861</strong> reúne 26 preprints científicos revisados formalmente con cota bootstrap, código reproducible y DOIs citable emitidos por CERN/Zenodo.
                </p>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/projects" className="btn-primary">
                    Ver Proyectos & Arquitectura
                  </Link>
                  <Link href="/libraries" className="btn-secondary">
                    Explorar 23 Librerías PyPI
                  </Link>
                  <a 
                    href="https://orcid.org/0009-0005-0710-1861" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-cta"
                  >
                    Ver Preprints en ORCID
                  </a>
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
