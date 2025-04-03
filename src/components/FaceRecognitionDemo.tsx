'use client';

import { useState, useRef } from 'react';

const FaceRecognitionDemo = () => {
  const [image, setImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Función para manejar la carga de imágenes
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Validar que sea una imagen
    if (!file.type.startsWith('image/')) {
      setError('Por favor, sube un archivo de imagen válido (JPG, PNG, etc.)');
      return;
    }
    
    setError(null);
    
    // Leer el archivo como URL de datos
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
      setResults(null);
    };
    reader.readAsDataURL(file);
  };
  
  // Función para procesar la imagen (simulación)
  const processImage = () => {
    if (!image) return;
    
    setIsProcessing(true);
    
    // Simulación de procesamiento de reconocimiento facial
    setTimeout(() => {
      // Generar resultados simulados
      const simulatedResults = {
        faces_detected: Math.floor(Math.random() * 3) + 1,
        processing_time: (Math.random() * 0.5 + 0.2).toFixed(2),
        faces: Array(Math.floor(Math.random() * 3) + 1).fill(0).map((_, index) => ({
          id: `face_${index + 1}`,
          confidence: (Math.random() * 20 + 80).toFixed(2),
          position: {
            x: Math.floor(Math.random() * 300) + 50,
            y: Math.floor(Math.random() * 200) + 50,
            width: Math.floor(Math.random() * 100) + 100,
            height: Math.floor(Math.random() * 100) + 100
          },
          attributes: {
            gender: Math.random() > 0.5 ? 'male' : 'female',
            age: Math.floor(Math.random() * 50) + 18,
            emotion: ['neutral', 'happy', 'serious', 'surprised'][Math.floor(Math.random() * 4)]
          }
        }))
      };
      
      setResults(simulatedResults);
      setIsProcessing(false);
    }, 2000);
  };
  
  // Función para reiniciar la demo
  const resetDemo = () => {
    setImage(null);
    setResults(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        Demostración de Reconocimiento Facial
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Prueba la API de reconocimiento facial desarrollada por Wisrovi Rodriguez. Sube una imagen para ver cómo el sistema detecta rostros y analiza atributos.
      </p>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
              Sube una imagen
            </h3>
            
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-gray-50 dark:bg-gray-800">
              {image ? (
                <div className="relative w-full">
                  <img 
                    src={image} 
                    alt="Imagen subida" 
                    className="max-w-full h-auto rounded-lg mx-auto"
                  />
                  
                  {/* Overlay para mostrar cajas de detección */}
                  {results && (
                    <div className="absolute top-0 left-0 w-full h-full">
                      {results.faces.map((face: any) => (
                        <div 
                          key={face.id}
                          className="absolute border-2 border-green-500"
                          style={{
                            left: `${face.position.x}px`,
                            top: `${face.position.y}px`,
                            width: `${face.position.width}px`,
                            height: `${face.position.height}px`
                          }}
                        >
                          <div className="absolute -top-6 left-0 bg-green-500 text-white text-xs px-2 py-1 rounded">
                            {face.attributes.gender}, {face.attributes.age} años
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Arrastra y suelta una imagen aquí, o haz clic para seleccionar
                  </p>
                </>
              )}
              
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className={image ? "hidden" : "absolute inset-0 w-full h-full opacity-0 cursor-pointer"}
              />
              
              {image && (
                <div className="flex space-x-3 mt-4">
                  <button
                    onClick={resetDemo}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    Cambiar imagen
                  </button>
                  
                  <button
                    onClick={processImage}
                    disabled={isProcessing}
                    className={`px-3 py-1 rounded-md transition-colors ${
                      isProcessing
                        ? 'bg-blue-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    {isProcessing ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Procesando...
                      </span>
                    ) : (
                      'Procesar imagen'
                    )}
                  </button>
                </div>
              )}
            </div>
            
            {error && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                {error}
              </p>
            )}
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
              Sobre esta API
            </h3>
            <div className="prose prose-sm dark:prose-invert">
              <p>
                La API de reconocimiento facial desarrollada por Wisrovi Rodriguez está disponible como un contenedor Docker, lo que facilita su despliegue en cualquier entorno.
              </p>
              <p>
                Características principales:
              </p>
              <ul>
                <li>Detección precisa de rostros en imágenes</li>
                <li>Análisis de atributos (género, edad, emoción)</li>
                <li>Alta velocidad de procesamiento</li>
                <li>Interfaz web para pruebas y visualización</li>
                <li>API REST para integración con otros sistemas</li>
              </ul>
              <p>
                Para utilizar esta API en tu propio proyecto, puedes descargar la imagen Docker con el siguiente comando:
              </p>
              <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded">docker pull wisrovi/api_face_recognition</pre>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
            Resultados del análisis
          </h3>
          
          {results ? (
            <div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600 dark:text-gray-400">Rostros detectados:</span>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">{results.faces_detected}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tiempo de procesamiento:</span>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">{results.processing_time} segundos</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {results.faces.map((face: any) => (
                  <div 
                    key={face.id}
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm"
                  >
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Rostro #{face.id.split('_')[1]}
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Confianza:</span>
                        <span className="font-medium text-gray-800 dark:text-gray-200">{face.confidence}%</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Género:</span>
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          {face.attributes.gender === 'male' ? 'Masculino' : 'Femenino'}
                        </span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Edad estimada:</span>
                        <span className="font-medium text-gray-800 dark:text-gray-200">{face.attributes.age} años</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Emoción:</span>
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          {face.attributes.emotion === 'happy' && 'Feliz'}
                          {face.attributes.emotion === 'neutral' && 'Neutral'}
                          {face.attributes.emotion === 'serious' && 'Serio'}
                          {face.attributes.emotion === 'surprised' && 'Sorprendido'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                      <h5 className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                        Posición en la imagen:
                      </h5>
                      <div className="grid grid-cols-4 gap-2 text-xs">
                        <div className="flex flex-col">
                          <span className="text-gray-500 dark:text-gray-400">X:</span>
                          <span className="font-medium text-gray-800 dark:text-gray-200">{face.position.x}px</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-500 dark:text-gray-400">Y:</span>
                          <span className="font-medium text-gray-800 dark:text-gray-200">{face.position.y}px</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-500 dark:text-gray-400">Ancho:</span>
                          <span className="font-medium text-gray-800 dark:text-gray-200">{face.position.width}px</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-500 dark:text-gray-400">Alto:</span>
                          <span className="font-medium text-gray-800 dark:text-gray-200">{face.position.height}px</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Respuesta JSON de la API
                </h4>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-xs text-gray-800 dark:text-gray-200">
                    {JSON.stringify(results, null, 2)}
                  </pre>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                No hay resultados aún
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Sube una imagen y haz clic en "Procesar imagen" para ver los resultados del análisis de reconocimiento facial.
              </p>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <strong>Nota:</strong> Esta es una demostración simulada para fines ilustrativos. Para utilizar la API real, descarga la imagen Docker y sigue las instrucciones de implementación en la documentación.
        </p>
      </div>
    </div>
  );
};

export default FaceRecognitionDemo;
