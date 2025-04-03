'use client';

import { useState, useEffect } from 'react';
import VirtualAssistant from './VirtualAssistant';

// Tipos para el sistema de gamificación
type Challenge = {
  id: string;
  title: string;
  description: string;
  points: number;
  completed: boolean;
  type: 'discover' | 'interact' | 'quiz';
  difficulty: 'easy' | 'medium' | 'hard';
};

type GameState = {
  totalPoints: number;
  level: number;
  completedChallenges: string[];
  badges: string[];
  currentStreak: number;
};

const TalentExplorer = () => {
  // Estado del juego
  const [gameState, setGameState] = useState<GameState>({
    totalPoints: 0,
    level: 1,
    completedChallenges: [],
    badges: [],
    currentStreak: 0,
  });

  // Lista de desafíos disponibles
  const [challenges, setChallenges] = useState<Challenge[]>([
    {
      id: 'lib-wkafka',
      title: 'Descubre wkafka',
      description: 'Explora la librería wkafka y sus características principales',
      points: 50,
      completed: false,
      type: 'discover',
      difficulty: 'easy',
    },
    {
      id: 'lib-wmongo',
      title: 'Explora wmongo',
      description: 'Conoce cómo wmongo simplifica la interacción con MongoDB',
      points: 50,
      completed: false,
      type: 'discover',
      difficulty: 'easy',
    },
    {
      id: 'lib-wredis',
      title: 'Analiza wredis',
      description: 'Descubre las funcionalidades de wredis para Redis',
      points: 50,
      completed: false,
      type: 'discover',
      difficulty: 'easy',
    },
    {
      id: 'lib-wcontainer',
      title: 'Investiga wcontainer',
      description: 'Aprende sobre la gestión de contenedores Docker con wcontainer',
      points: 50,
      completed: false,
      type: 'discover',
      difficulty: 'easy',
    },
    {
      id: 'lib-wpostgresql',
      title: 'Conoce wpostgresql',
      description: 'Explora cómo wpostgresql facilita el trabajo con bases de datos PostgreSQL',
      points: 50,
      completed: false,
      type: 'discover',
      difficulty: 'easy',
    },
    {
      id: 'ai-vision',
      title: 'Visión Artificial',
      description: 'Descubre el trabajo de Wisrovi en visión artificial para semáforos inteligentes',
      points: 100,
      completed: false,
      type: 'discover',
      difficulty: 'medium',
    },
    {
      id: 'quiz-tech',
      title: 'Quiz de Tecnologías',
      description: 'Pon a prueba tus conocimientos sobre las tecnologías que domina Wisrovi',
      points: 150,
      completed: false,
      type: 'quiz',
      difficulty: 'medium',
    },
    {
      id: 'connect-dots',
      title: 'Conecta Proyectos',
      description: 'Relaciona cada proyecto con la tecnología principal utilizada',
      points: 200,
      completed: false,
      type: 'interact',
      difficulty: 'hard',
    },
  ]);

  // Estado para mostrar el desafío actual
  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(null);
  
  // Estado para mostrar la notificación de puntos
  const [showPointsNotification, setShowPointsNotification] = useState(false);
  const [pointsEarned, setPointsEarned] = useState(0);

  // Cargar estado del juego desde localStorage al iniciar
  useEffect(() => {
    const savedGameState = localStorage.getItem('talentExplorerState');
    const savedChallenges = localStorage.getItem('talentExplorerChallenges');
    
    if (savedGameState) {
      setGameState(JSON.parse(savedGameState));
    }
    
    if (savedChallenges) {
      setChallenges(JSON.parse(savedChallenges));
    }
  }, []);

  // Guardar estado del juego en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('talentExplorerState', JSON.stringify(gameState));
    localStorage.setItem('talentExplorerChallenges', JSON.stringify(challenges));
  }, [gameState, challenges]);

  // Función para completar un desafío
  const completeChallenge = (challengeId: string) => {
    const challenge = challenges.find(c => c.id === challengeId);
    
    if (challenge && !challenge.completed) {
      // Actualizar el desafío como completado
      setChallenges(prevChallenges => 
        prevChallenges.map(c => 
          c.id === challengeId ? { ...c, completed: true } : c
        )
      );
      
      // Actualizar el estado del juego
      const points = challenge.points;
      setPointsEarned(points);
      
      setGameState(prevState => {
        const newTotalPoints = prevState.totalPoints + points;
        const newLevel = Math.floor(newTotalPoints / 500) + 1;
        const newCompletedChallenges = [...prevState.completedChallenges, challengeId];
        
        // Verificar si se gana una insignia
        let newBadges = [...prevState.badges];
        
        // Insignia por completar todas las librerías
        const libraryIds = ['lib-wkafka', 'lib-wmongo', 'lib-wredis', 'lib-wcontainer', 'lib-wpostgresql'];
        if (libraryIds.every(id => newCompletedChallenges.includes(id)) && 
            !newBadges.includes('library-master')) {
          newBadges.push('library-master');
        }
        
        // Insignia por alcanzar nivel 3
        if (newLevel >= 3 && !newBadges.includes('talent-scout')) {
          newBadges.push('talent-scout');
        }
        
        return {
          totalPoints: newTotalPoints,
          level: newLevel,
          completedChallenges: newCompletedChallenges,
          badges: newBadges,
          currentStreak: prevState.currentStreak + 1,
        };
      });
      
      // Mostrar notificación de puntos
      setShowPointsNotification(true);
      setTimeout(() => {
        setShowPointsNotification(false);
      }, 3000);
    }
    
    // Cerrar el desafío activo
    setActiveChallenge(null);
  };

  // Función para abrir un desafío
  const openChallenge = (challengeId: string) => {
    const challenge = challenges.find(c => c.id === challengeId);
    if (challenge) {
      setActiveChallenge(challenge);
    }
  };

  // Calcular progreso general
  const progress = Math.round((gameState.completedChallenges.length / challenges.length) * 100);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 my-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-600 dark:text-blue-400">
        Explorador de Talento
      </h2>
      
      {/* Panel de estadísticas del jugador */}
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">Nivel</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{gameState.level}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">Puntos</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{gameState.totalPoints}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">Desafíos</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {gameState.completedChallenges.length}/{challenges.length}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">Insignias</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{gameState.badges.length}</p>
          </div>
        </div>
        
        {/* Barra de progreso */}
        <div className="mt-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Progreso general: {progress}%</p>
          <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
            <div 
              className="bg-gradient-to-r from-blue-600 to-cyan-400 h-2.5 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* Insignias */}
      {gameState.badges.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Tus Insignias</h3>
          <div className="flex flex-wrap gap-2">
            {gameState.badges.map(badge => (
              <div 
                key={badge} 
                className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium"
              >
                {badge === 'library-master' && '🏆 Maestro de Librerías'}
                {badge === 'talent-scout' && '🔍 Cazatalentos'}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Lista de desafíos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {challenges.map(challenge => (
          <div 
            key={challenge.id}
            className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
              challenge.completed 
                ? 'bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700' 
                : 'bg-white dark:bg-gray-800 hover:shadow-md border-gray-200 dark:border-gray-700'
            } border`}
            onClick={() => openChallenge(challenge.id)}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-gray-800 dark:text-gray-200">{challenge.title}</h3>
              <span className={`px-2 py-1 rounded text-xs font-bold ${
                challenge.difficulty === 'easy' ? 'bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200' :
                challenge.difficulty === 'medium' ? 'bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200' :
                'bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200'
              }`}>
                {challenge.difficulty === 'easy' ? 'Fácil' : 
                 challenge.difficulty === 'medium' ? 'Medio' : 'Difícil'}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{challenge.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{challenge.points} pts</span>
              {challenge.completed && (
                <span className="text-green-600 dark:text-green-400">✓ Completado</span>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal de desafío activo */}
      {activeChallenge && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{activeChallenge.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{activeChallenge.description}</p>
            
            {/* Contenido específico del desafío según su tipo */}
            {activeChallenge.type === 'discover' && (
              <div className="mb-6">
                <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Información</h4>
                {activeChallenge.id === 'lib-wkafka' && (
                  <div>
                    <p className="mb-2">wkafka es una librería que simplifica la integración con Apache Kafka usando decoradores en Python.</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Facilita la gestión de productores y consumidores de Kafka</li>
                      <li>Usa decoradores para procesar mensajes de manera eficiente</li>
                      <li>Soporta diferentes tipos de datos: JSON, archivos e imágenes</li>
                      <li>Manejo de mensajes en paralelo con hilos separados</li>
                    </ul>
                  </div>
                )}
                {activeChallenge.id === 'lib-wmongo' && (
                  <div>
                    <p className="mb-2">wmongo simplifica el uso de MongoDB en Python, proporcionando una interfaz sencilla para operaciones de base de datos.</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Operaciones CRUD simplificadas</li>
                      <li>Soporte para validación de datos con Pydantic</li>
                      <li>Gestión de permisos de acceso</li>
                      <li>Integración con Redis para caché</li>
                    </ul>
                  </div>
                )}
                {activeChallenge.id === 'lib-wredis' && (
                  <div>
                    <p className="mb-2">wredis hace que la interacción con Redis sea simple y eficiente, con una API intuitiva.</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Métodos para operaciones comunes (SET, GET, DELETE)</li>
                      <li>Soporte para diferentes estructuras: bitmaps, hashes, sets, streams</li>
                      <li>Sistema de publicación y suscripción</li>
                      <li>Gestión de colas y conjuntos ordenados</li>
                    </ul>
                  </div>
                )}
                {activeChallenge.id === 'lib-wcontainer' && (
                  <div>
                    <p className="mb-2">wcontainer facilita operaciones específicas con contenedores Docker, simplificando su uso.</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Gestión de contenedores: listar, iniciar, ajustar recursos</li>
                      <li>Monitoreo de uso de recursos en tiempo real</li>
                      <li>Escaneo de imágenes en busca de vulnerabilidades</li>
                      <li>Autoajuste dinámico de recursos y escalado</li>
                    </ul>
                  </div>
                )}
                {activeChallenge.id === 'lib-wpostgresql' && (
                  <div>
                    <p className="mb-2">wpostgresql simplifica la interacción con bases de datos PostgreSQL, facilitando operaciones CRUD.</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Creación automática de tablas basadas en modelos Pydantic</li>
                      <li>Operaciones CRUD simplificadas</li>
                      <li>Soporte para restricciones y validación de datos</li>
                      <li>Actualización dinámica de esquemas</li>
                    </ul>
                  </div>
                )}
                {activeChallenge.id === 'ai-vision' && (
                  <div>
                    <p className="mb-2">Wisrovi ha trabajado en sistemas de visión artificial para semáforos inteligentes, aplicando técnicas avanzadas de IA.</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Detección y seguimiento de vehículos en tiempo real</li>
                      <li>Análisis de flujo de tráfico para optimización de señales</li>
                      <li>Implementación de redes neuronales para reconocimiento de objetos</li>
                      <li>Sistemas de decisión basados en datos para mejorar la movilidad urbana</li>
                    </ul>
                  </div>
                )}
              </div>
            )}
            
            {activeChallenge.type === 'quiz' && (
              <div className="mb-6">
                <h4 className="font-medium mb-4 text-gray-800 dark:text-gray-200">Responde correctamente:</h4>
                {activeChallenge.id === 'quiz-tech' && (
                  <div className="space-y-4">
                    <div>
                      <p className="mb-2">¿Qué tecnología utiliza Wisrovi para el procesamiento de mensajes distribuidos?</p>
                      <div className="space-y-2">
                        <button 
                          className="w-full text-left px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                          onClick={() => completeChallenge(activeChallenge.id)}
                        >
                          Apache Kafka
                        </button>
                        <button className="w-full text-left px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                          RabbitMQ
                        </button>
                        <button className="w-full text-left px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                          ActiveMQ
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {activeChallenge.type === 'interact' && (
              <div className="mb-6">
                <h4 className="font-medium mb-4 text-gray-800 dark:text-gray-200">Conecta los proyectos con su tecnología:</h4>
                {activeChallenge.id === 'connect-dots' && (
                  <div className="space-y-4">
                    <p className="text-center mb-4">Arrastra las tecnologías a los proyectos correspondientes</p>
                    <div className="flex justify-center">
                      <button 
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        onClick={() => completeChallenge(activeChallenge.id)}
                      >
                        Simular completado
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            <div className="flex justify-between">
              <button 
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                onClick={() => setActiveChallenge(null)}
              >
                Cerrar
              </button>
              
              {!activeChallenge.completed && activeChallenge.type === 'discover' && (
                <button 
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  onClick={() => completeChallenge(activeChallenge.id)}
                >
                  Completar
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Notificación de puntos */}
      {showPointsNotification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg animate-bounce">
          +{pointsEarned} puntos ganados!
        </div>
      )}
    </div>
  );
};

export default TalentExplorer;
