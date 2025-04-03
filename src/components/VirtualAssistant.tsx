'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Tipos para el chatbot
type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

// Tipos para el mundo virtual
type Zone = {
  id: string;
  name: string;
  description: string;
  image: string;
  unlocked: boolean;
  visited: boolean;
  pointsForVisit: number;
  facts: string[];
  connectedZones: string[];
};

const VirtualAssistant = () => {
  // Estado para el chatbot
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Soy WChat, tu guía virtual para explorar el trabajo de Wisrovi Rodriguez. ¿En qué puedo ayudarte?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showChat, setShowChat] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Estado para el mundo virtual
  const [zones, setZones] = useState<Zone[]>([
    {
      id: 'ai-zone',
      name: 'Laboratorio de IA',
      description: 'Un espacio dedicado a la inteligencia artificial y visión por computadora.',
      image: 'ai-lab',
      unlocked: true,
      visited: false,
      pointsForVisit: 50,
      facts: [
        'Wisrovi ha desarrollado sistemas de visión artificial para semáforos inteligentes.',
        'Su proyecto wyoloservice permite entrenar modelos de visión por computadora sin escribir código.',
        'Utiliza redes neuronales para procesamiento de video y audio.',
      ],
      connectedZones: ['dev-zone', 'mlops-zone'],
    },
    {
      id: 'dev-zone',
      name: 'Centro de Desarrollo',
      description: 'Área donde se crean librerías y herramientas de software.',
      image: 'dev-center',
      unlocked: false,
      visited: false,
      pointsForVisit: 50,
      facts: [
        'Wisrovi ha desarrollado múltiples librerías en Python para simplificar tareas complejas.',
        'Sus librerías incluyen wkafka, wmongo, wredis, wcontainer y wpostgresql.',
        'Todas sus librerías están disponibles en PyPI y tienen licencia MIT.',
      ],
      connectedZones: ['ai-zone', 'db-zone'],
    },
    {
      id: 'mlops-zone',
      name: 'Plataforma MLOps',
      description: 'Espacio dedicado a la operacionalización de modelos de machine learning.',
      image: 'mlops-platform',
      unlocked: false,
      visited: false,
      pointsForVisit: 75,
      facts: [
        'Wisrovi implementa flujos de trabajo automatizados para el ciclo de vida de modelos de ML.',
        'Utiliza contenedores Docker para desplegar modelos en producción.',
        'Ha desarrollado sistemas para monitorear y reentrenar modelos automáticamente.',
      ],
      connectedZones: ['ai-zone', 'cloud-zone'],
    },
    {
      id: 'db-zone',
      name: 'Centro de Datos',
      description: 'Área especializada en bases de datos y almacenamiento.',
      image: 'data-center',
      unlocked: false,
      visited: false,
      pointsForVisit: 50,
      facts: [
        'Wisrovi ha desarrollado librerías para simplificar el uso de MongoDB y PostgreSQL.',
        'Utiliza Redis para caché y mensajería en tiempo real.',
        'Ha implementado sistemas de almacenamiento distribuido para grandes volúmenes de datos.',
      ],
      connectedZones: ['dev-zone', 'cloud-zone'],
    },
    {
      id: 'cloud-zone',
      name: 'Nube de Innovación',
      description: 'El centro de operaciones en la nube y sistemas distribuidos.',
      image: 'cloud-innovation',
      unlocked: false,
      visited: false,
      pointsForVisit: 100,
      facts: [
        'Wisrovi ha diseñado arquitecturas distribuidas para entrenamiento en cluster.',
        'Implementa soluciones escalables para procesamiento de datos en tiempo real.',
        'Utiliza tecnologías de contenedores y orquestación para desplegar servicios.',
      ],
      connectedZones: ['mlops-zone', 'db-zone'],
    },
  ]);
  
  const [currentZone, setCurrentZone] = useState<Zone | null>(null);
  const [totalPoints, setTotalPoints] = useState(0);
  const [showZoneModal, setShowZoneModal] = useState(false);
  const [discoveredFacts, setDiscoveredFacts] = useState<string[]>([]);
  const [showMap, setShowMap] = useState(true);

  // Scroll al final de los mensajes cuando se añade uno nuevo
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Función para manejar el envío de mensajes
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Añadir mensaje del usuario
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Generar respuesta del bot
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  // Función para generar respuestas del bot basadas en palabras clave
  const generateBotResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('hola') || input.includes('hi') || input.includes('hey')) {
      return '¡Hola! ¿En qué puedo ayudarte a conocer sobre Wisrovi Rodriguez?';
    }
    
    if (input.includes('wyoloservice') || input.includes('yolo')) {
      return 'wyoloservice es el proyecto más reciente de Wisrovi. Es una plataforma que permite a cualquier persona entrenar modelos de visión por computadora sin escribir código, democratizando el acceso a esta tecnología. ¿Te gustaría saber más detalles?';
    }
    
    if (input.includes('wkafka') || input.includes('kafka')) {
      return 'wkafka es una librería desarrollada por Wisrovi que simplifica la integración con Apache Kafka usando decoradores en Python. Facilita la gestión de productores y consumidores para procesar mensajes de manera eficiente. ¿Quieres conocer sus características principales?';
    }
    
    if (input.includes('wmongo') || input.includes('mongo')) {
      return 'wmongo es una librería que facilita el uso de MongoDB en Python, proporcionando una interfaz simple para operaciones CRUD y validación de datos con Pydantic. ¿Te interesa saber más sobre esta librería?';
    }
    
    if (input.includes('wredis') || input.includes('redis')) {
      return 'wredis hace que la interacción con Redis sea simple y eficiente, con una API intuitiva y funciones para manejar diferentes estructuras de datos como bitmaps, hashes, sets y streams. ¿Necesitas más información?';
    }
    
    if (input.includes('wcontainer') || input.includes('docker') || input.includes('contenedor')) {
      return 'wcontainer simplifica operaciones específicas con contenedores Docker, facilitando la gestión, monitoreo y automatización de contenedores. Incluye funciones para ajustar recursos, escanear vulnerabilidades y generar informes. ¿Quieres conocer más detalles?';
    }
    
    if (input.includes('wpostgresql') || input.includes('postgresql') || input.includes('postgres')) {
      return 'wpostgresql simplifica la interacción con bases de datos PostgreSQL, proporcionando funciones para crear, leer, actualizar y eliminar datos de manera eficiente. Soporta la creación automática de tablas basadas en modelos Pydantic. ¿Te gustaría saber más?';
    }
    
    if (input.includes('ia') || input.includes('inteligencia artificial') || input.includes('ai')) {
      return 'Wisrovi es un experto en inteligencia artificial, especialmente en visión por computadora. Ha desarrollado sistemas de visión artificial para semáforos inteligentes y su proyecto wyoloservice permite democratizar el entrenamiento de modelos YOLO. ¿Quieres explorar la zona de IA en el mundo virtual?';
    }
    
    if (input.includes('contacto') || input.includes('contratar') || input.includes('email')) {
      return 'Puedes contactar a Wisrovi Rodriguez a través de su correo electrónico: wisrovi.rodriguez@gmail.com o visitando la sección de contacto en esta web. ¿Te gustaría que te proporcione más información sobre sus servicios?';
    }
    
    if (input.includes('mundo') || input.includes('virtual') || input.includes('zona') || input.includes('explorar')) {
      return 'En el mundo virtual puedes explorar diferentes zonas que representan las áreas de experiencia de Wisrovi. Cada zona contiene información interesante y puedes ganar puntos al visitarlas y descubrir hechos. ¿Te gustaría que te muestre el mapa?';
    }
    
    // Respuesta por defecto
    return 'Interesante pregunta. Wisrovi Rodriguez es un ingeniero MLOps especializado en inteligencia artificial, visión artificial y desarrollo de software. ¿Hay algo específico sobre su trabajo o proyectos que te gustaría conocer?';
  };

  // Función para visitar una zona
  const visitZone = (zoneId: string) => {
    const zone = zones.find(z => z.id === zoneId);
    if (!zone || !zone.unlocked) return;
    
    setCurrentZone(zone);
    setShowZoneModal(true);
    
    // Si es la primera visita, otorgar puntos
    if (!zone.visited) {
      setTotalPoints(prev => prev + zone.pointsForVisit);
      
      // Actualizar el estado de la zona
      setZones(prev => 
        prev.map(z => 
          z.id === zoneId 
            ? { ...z, visited: true } 
            : z
        )
      );
      
      // Desbloquear zonas conectadas
      setZones(prev => 
        prev.map(z => 
          zone.connectedZones.includes(z.id) 
            ? { ...z, unlocked: true } 
            : z
        )
      );
    }
  };

  // Función para descubrir un hecho
  const discoverFact = (fact: string) => {
    if (!discoveredFacts.includes(fact)) {
      setDiscoveredFacts(prev => [...prev, fact]);
      setTotalPoints(prev => prev + 10);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
        Mundo Virtual de Wisrovi
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
        Explora el mundo virtual de Wisrovi, descubre zonas interesantes, aprende sobre sus proyectos y gana puntos en el camino.
      </p>
      
      {/* Panel de estadísticas */}
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Puntos totales</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{totalPoints}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Zonas visitadas</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {zones.filter(z => z.visited).length}/{zones.length}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Hechos descubiertos</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {discoveredFacts.length}/{zones.reduce((acc, zone) => acc + zone.facts.length, 0)}
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Mapa del mundo virtual */}
        <div className="md:w-2/3">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                Mapa del Mundo
              </h3>
              <button 
                onClick={() => setShowMap(!showMap)}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {showMap ? 'Ocultar mapa' : 'Mostrar mapa'}
              </button>
            </div>
            
            {showMap && (
              <div className="relative w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                {/* Representación visual del mapa */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full max-w-2xl">
                    {/* Conexiones entre zonas */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 300">
                      <line x1="150" y1="75" x2="250" y2="150" stroke="#4B5563" strokeWidth="2" />
                      <line x1="150" y1="75" x2="100" y2="200" stroke="#4B5563" strokeWidth="2" />
                      <line x1="250" y1="150" x2="400" y2="75" stroke="#4B5563" strokeWidth="2" />
                      <line x1="250" y1="150" x2="350" y2="225" stroke="#4B5563" strokeWidth="2" />
                      <line x1="100" y1="200" x2="350" y2="225" stroke="#4B5563" strokeWidth="2" />
                      <line x1="400" y1="75" x2="350" y2="225" stroke="#4B5563" strokeWidth="2" />
                    </svg>
                    
                    {/* Zonas */}
                    {zones.map((zone, index) => {
                      // Posiciones predefinidas para cada zona
                      const positions = [
                        { top: '15%', left: '30%' },  // ai-zone
                        { top: '40%', left: '50%' },  // dev-zone
                        { top: '15%', left: '80%' },  // mlops-zone
                        { top: '65%', left: '20%' },  // db-zone
                        { top: '65%', left: '70%' },  // cloud-zone
                      ];
                      
                      return (
                        <button
                          key={zone.id}
                          onClick={() => visitZone(zone.id)}
                          disabled={!zone.unlocked}
                          className={`absolute w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                            zone.visited 
                              ? 'bg-green-500 text-white' 
                              : zone.unlocked 
                                ? 'bg-blue-500 text-white animate-pulse' 
                                : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                          }`}
                          style={{ 
                            top: positions[index].top, 
                            left: positions[index].left,
                          }}
                        >
                          <span className="text-xs font-bold">{zone.name.split(' ')[0]}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
            
            {/* Lista de zonas */}
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Zonas disponibles:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {zones.map(zone => (
                  <div 
                    key={zone.id}
                    className={`p-4 rounded-lg border ${
                      zone.visited 
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                        : zone.unlocked 
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 cursor-pointer' 
                          : 'border-gray-300 bg-gray-50 dark:bg-gray-800 opacity-60'
                    }`}
                    onClick={() => zone.unlocked && visitZone(zone.id)}
                  >
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">{zone.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{zone.description}</p>
                    {zone.visited && (
                      <span className="text-xs text-green-600 dark:text-green-400">Visitado</span>
                    )}
                    {!zone.visited && zone.unlocked && (
                      <span className="text-xs text-blue-600 dark:text-blue-400">Disponible - {zone.pointsForVisit} pts</span>
                    )}
                    {!zone.unlocked && (
                      <span className="text-xs text-gray-500">Bloqueado</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Chatbot */}
        <div className="md:w-1/3">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden h-[500px] flex flex-col">
            <div className="bg-blue-600 text-white p-4">
              <h3 className="font-bold">WChat - Asistente Virtual</h3>
              <p className="text-sm text-blue-100">Pregúntame sobre Wisrovi y sus proyectos</p>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map(message => (
                <div 
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === 'user' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors"
                >
                  Enviar
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Sugerencias: "wyoloservice", "wkafka", "inteligencia artificial", "mundo virtual"
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal de zona */}
      {showZoneModal && currentZone && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{currentZone.name}</h3>
              <button 
                onClick={() => setShowZoneModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mb-6">
              <div className="w-full h-48 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">{currentZone.description}</p>
              
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Hechos interesantes:</h4>
              <div className="space-y-2">
                {currentZone.facts.map((fact, index) => {
                  const isDiscovered = discoveredFacts.includes(fact);
                  
                  return (
                    <div 
                      key={index}
                      className={`p-3 rounded-lg border ${
                        isDiscovered 
                          ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                          : 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 cursor-pointer'
                      }`}
                      onClick={() => !isDiscovered && discoverFact(fact)}
                    >
                      <p className="text-gray-700 dark:text-gray-300">{fact}</p>
                      {isDiscovered ? (
                        <span className="text-xs text-green-600 dark:text-green-400">Descubierto</span>
                      ) : (
                        <span className="text-xs text-blue-600 dark:text-blue-400">Haz clic para descubrir (+10 pts)</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="flex justify-between">
              <button 
                onClick={() => setShowZoneModal(false)}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Cerrar
              </button>
              
              <div className="flex space-x-2">
                {currentZone.connectedZones.map(zoneId => {
                  const connectedZone = zones.find(z => z.id === zoneId);
                  if (!connectedZone) return null;
                  
                  return (
                    <button 
                      key={zoneId}
                      onClick={() => {
                        setShowZoneModal(false);
                        setTimeout(() => visitZone(zoneId), 300);
                      }}
                      disabled={!connectedZone.unlocked}
                      className={`px-4 py-2 rounded-md transition-colors ${
                        connectedZone.unlocked 
                          ? 'bg-blue-600 text-white hover:bg-blue-700' 
                          : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                      }`}
                    >
                      Ir a {connectedZone.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VirtualAssistant;
