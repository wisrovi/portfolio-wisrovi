'use client';

import { useEffect } from 'react';

// Componente para habilitar funcionalidad PWA
const PWAInstaller = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  
  // Detectar si la app ya está instalada
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Verificar si se está ejecutando como PWA
      if (window.matchMedia('(display-mode: standalone)').matches || 
          window.navigator.standalone === true) {
        setIsInstalled(true);
      }
      
      // Escuchar evento beforeinstallprompt
      window.addEventListener('beforeinstallprompt', (e) => {
        // Prevenir que Chrome muestre automáticamente el prompt
        e.preventDefault();
        // Guardar el evento para usarlo después
        setDeferredPrompt(e);
        setIsInstallable(true);
      });
      
      // Escuchar evento appinstalled
      window.addEventListener('appinstalled', () => {
        // Limpiar el prompt guardado
        setDeferredPrompt(null);
        setIsInstallable(false);
        setIsInstalled(true);
        
        // Registrar evento de instalación (en una implementación real, esto podría enviar analíticas)
        console.log('PWA fue instalada');
      });
    }
  }, []);
  
  // Función para mostrar el prompt de instalación
  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    
    // Mostrar el prompt de instalación
    deferredPrompt.prompt();
    
    // Esperar a que el usuario responda al prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    // Registrar resultado (en una implementación real, esto podría enviar analíticas)
    console.log(`Usuario ${outcome === 'accepted' ? 'aceptó' : 'rechazó'} la instalación`);
    
    // Limpiar el prompt guardado - solo se puede usar una vez
    setDeferredPrompt(null);
    
    if (outcome === 'accepted') {
      setIsInstallable(false);
    }
  };
  
  // Si no es instalable o ya está instalada, no mostrar nada
  if (!isInstallable || isInstalled) return null;
  
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700 max-w-sm">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <svg className="h-10 w-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="ml-3 flex-1">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Instalar aplicación
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Instala esta aplicación en tu dispositivo para acceder más rápido y usarla sin conexión.
            </p>
            <div className="mt-4 flex">
              <button
                type="button"
                onClick={handleInstallClick}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Instalar
              </button>
              <button
                type="button"
                onClick={() => setIsInstallable(false)}
                className="ml-3 inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Ahora no
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PWAInstaller;
