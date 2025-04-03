'use client';

import { useState } from 'react';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';

// Tipos para los certificados
type Certificate = {
  id: string;
  title: string;
  description: string;
  image: string;
  requirements: string[];
  points: number;
  unlocked: boolean;
};

const VirtualCertificates = () => {
  // Estado para los certificados
  const [certificates, setCertificates] = useState<Certificate[]>([
    {
      id: 'ai-expert',
      title: 'Experto en IA con Wisrovi',
      description: 'Certifica conocimientos avanzados en inteligencia artificial y visión por computadora.',
      image: 'ai-certificate',
      requirements: [
        'Completar el recorrido por el Laboratorio de IA',
        'Interactuar con el Dr. Alejandro Vega',
        'Descubrir 3 hechos sobre wyoloservice'
      ],
      points: 300,
      unlocked: false
    },
    {
      id: 'library-master',
      title: 'Maestro de Librerías Python',
      description: 'Certifica conocimientos sobre las librerías desarrolladas por Wisrovi.',
      image: 'library-certificate',
      requirements: [
        'Probar ejemplos de 3 librerías diferentes en la consola interactiva',
        'Visitar la sección de librerías',
        'Leer el artículo de Medium sobre wkafka'
      ],
      points: 250,
      unlocked: false
    },
    {
      id: 'mlops-specialist',
      title: 'Especialista en MLOps',
      description: 'Certifica conocimientos en operacionalización de modelos de machine learning.',
      image: 'mlops-certificate',
      requirements: [
        'Completar el recorrido por la Plataforma MLOps',
        'Interactuar con la Ing. Laura Sánchez',
        'Descubrir cómo Wisrovi implementa flujos de trabajo automatizados'
      ],
      points: 350,
      unlocked: false
    },
    {
      id: 'explorer',
      title: 'Explorador del Mundo Virtual',
      description: 'Certifica la exploración completa del mundo virtual de Wisrovi.',
      image: 'explorer-certificate',
      requirements: [
        'Visitar todas las zonas del mundo virtual',
        'Interactuar con todos los NPCs',
        'Completar todas las misiones disponibles'
      ],
      points: 500,
      unlocked: true // Este certificado estará desbloqueado para demostración
    }
  ]);
  
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [userName, setUserName] = useState('');
  
  // Función para desbloquear un certificado (simulación)
  const unlockCertificate = (id: string) => {
    setCertificates(prev => 
      prev.map(cert => 
        cert.id === id 
          ? { ...cert, unlocked: true } 
          : cert
      )
    );
  };
  
  // Función para generar y descargar el certificado
  const generateCertificate = async () => {
    if (!selectedCertificate) return;
    
    const certificateElement = document.getElementById('certificate-preview');
    if (!certificateElement) return;
    
    try {
      const canvas = await html2canvas(certificateElement, {
        scale: 2,
        backgroundColor: null,
        logging: false
      });
      
      canvas.toBlob((blob) => {
        if (blob) {
          saveAs(blob, `${selectedCertificate.title.replace(/\s+/g, '_')}_Certificate.png`);
        }
      });
    } catch (error) {
      console.error('Error generating certificate:', error);
    }
  };
  
  // Función para compartir en redes sociales
  const shareCertificate = (platform: 'twitter' | 'linkedin' | 'facebook') => {
    if (!selectedCertificate) return;
    
    const text = `¡He obtenido el certificado "${selectedCertificate.title}" explorando el trabajo de Wisrovi Rodriguez! Descubre sus increíbles proyectos en IA y desarrollo de software.`;
    const url = window.location.href;
    
    let shareUrl = '';
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(selectedCertificate.title)}&summary=${encodeURIComponent(text)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
        break;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
    setShowShareModal(false);
  };
  
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        Certificados Virtuales
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Demuestra tu conocimiento sobre el trabajo de Wisrovi Rodriguez obteniendo estos certificados virtuales. Completa los requisitos para desbloquearlos y compártelos en tus redes sociales.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {certificates.map(cert => (
          <div 
            key={cert.id}
            className={`rounded-lg overflow-hidden border ${
              cert.unlocked 
                ? 'border-green-500 dark:border-green-700' 
                : 'border-gray-300 dark:border-gray-700 opacity-75'
            } transition-all hover:shadow-lg`}
          >
            <div className="h-40 bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <div className="text-white text-center p-4">
                <div className="text-3xl mb-2">🏆</div>
                <h3 className="font-bold">{cert.title}</h3>
              </div>
            </div>
            
            <div className="p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {cert.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-2">Requisitos:</h4>
                <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  {cert.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-green-500">✓</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                  {cert.points} puntos
                </span>
                
                {cert.unlocked ? (
                  <button 
                    onClick={() => {
                      setSelectedCertificate(cert);
                      setShowShareModal(true);
                    }}
                    className="text-xs bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md transition-colors"
                  >
                    Ver certificado
                  </button>
                ) : (
                  <button 
                    onClick={() => unlockCertificate(cert.id)}
                    className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    Desbloquear
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal para compartir certificado */}
      {showShareModal && selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Tu Certificado</h3>
              <button 
                onClick={() => setShowShareModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mb-4">
              <label htmlFor="userName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Tu nombre (aparecerá en el certificado):
              </label>
              <input
                type="text"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Ingresa tu nombre completo"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Vista previa del certificado */}
            <div className="mb-6">
              <div 
                id="certificate-preview"
                className="relative w-full aspect-[1.4] bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg border-8 border-double border-blue-200 dark:border-blue-800 p-8 flex flex-col items-center justify-center text-center"
              >
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl text-blue-300 dark:text-blue-700">
                    WR
                  </div>
                </div>
                
                <div className="text-4xl mb-2">🏆</div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Certificado de Logro</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  {selectedCertificate.title}
                </p>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Otorgado a
                </p>
                
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                  {userName || 'Tu Nombre'}
                </p>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Por demostrar conocimientos excepcionales sobre el trabajo de
                </p>
                
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-6">
                  Wisrovi Rodriguez
                </p>
                
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={generateCertificate}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Descargar certificado
              </button>
              
              <div className="flex space-x-2">
                <button 
                  onClick={() => shareCertificate('twitter')}
                  className="p-2 bg-[#1DA1F2] text-white rounded-md hover:bg-opacity-90 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
                
                <button 
                  onClick={() => shareCertificate('linkedin')}
                  className="p-2 bg-[#0A66C2] text-white rounded-md hover:bg-opacity-90 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
                
                <button 
                  onClick={() => shareCertificate('facebook')}
                  className="p-2 bg-[#1877F2] text-white rounded-md hover:bg-opacity-90 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VirtualCertificates;
