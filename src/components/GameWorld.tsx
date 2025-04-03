'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Tipos para los NPCs
type NPC = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  location: string;
  dialogue: string[];
  quest?: {
    title: string;
    description: string;
    completed: boolean;
    reward: number;
  };
};

const NPCComponent = ({ npc, onInteract, onCompleteQuest }) => {
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [showDialogue, setShowDialogue] = useState(false);
  
  const handleInteract = () => {
    setShowDialogue(true);
    onInteract(npc.id);
  };
  
  const handleNextDialogue = () => {
    if (dialogueIndex < npc.dialogue.length - 1) {
      setDialogueIndex(dialogueIndex + 1);
    } else {
      setShowDialogue(false);
      setDialogueIndex(0);
      
      if (npc.quest && !npc.quest.completed) {
        onCompleteQuest(npc.id);
      }
    }
  };
  
  return (
    <div className="relative">
      <div 
        className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
        onClick={handleInteract}
      >
        <span className="text-white font-bold">{npc.name.charAt(0)}</span>
      </div>
      
      {showDialogue && (
        <div className="absolute bottom-full left-0 mb-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-10">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mr-2">
              <span className="text-white font-bold text-xs">{npc.name.charAt(0)}</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">{npc.name}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">{npc.role}</p>
            </div>
          </div>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            {npc.dialogue[dialogueIndex]}
          </p>
          
          <button 
            onClick={handleNextDialogue}
            className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full"
          >
            {dialogueIndex < npc.dialogue.length - 1 ? 'Continuar' : 'Cerrar'}
          </button>
        </div>
      )}
    </div>
  );
};

const GameWorld = () => {
  // Estado para los NPCs
  const [npcs, setNpcs] = useState<NPC[]>([
    {
      id: 'mentor-ia',
      name: 'Dr. Alejandro Vega',
      role: 'Mentor en IA',
      avatar: 'mentor-ia',
      location: 'ai-zone',
      dialogue: [
        "¡Bienvenido al Laboratorio de IA! Soy el Dr. Alejandro Vega, mentor de Wisrovi en inteligencia artificial.",
        "Wisrovi ha desarrollado sistemas fascinantes de visión artificial. Su proyecto más reciente, wyoloservice, es revolucionario.",
        "¿Sabías que wyoloservice permite entrenar modelos YOLO sin escribir código? Democratiza el acceso a la visión por computadora.",
        "Te propongo un desafío: explora la zona de MLOps y aprende cómo Wisrovi implementa flujos de trabajo automatizados para modelos de ML."
      ],
      quest: {
        title: "Exploración de IA",
        description: "Visita la zona de MLOps y descubre cómo Wisrovi implementa flujos de trabajo automatizados.",
        completed: false,
        reward: 100
      }
    },
    {
      id: 'cliente-satisfecho',
      name: 'María Rodríguez',
      role: 'Cliente Satisfecha',
      avatar: 'cliente',
      location: 'dev-zone',
      dialogue: [
        "¡Hola! Soy María Rodríguez, directora de tecnología en una empresa de logística.",
        "Contratamos a Wisrovi para implementar un sistema de visión artificial para nuestro almacén. Los resultados fueron increíbles.",
        "Redujo nuestros errores de inventario en un 78% y aumentó la velocidad de procesamiento en un 45%.",
        "Lo más impresionante fue su capacidad para explicar conceptos complejos de manera sencilla y adaptar la solución a nuestras necesidades específicas."
      ]
    },
    {
      id: 'asistente-lab',
      name: 'Carlos Méndez',
      role: 'Asistente de Laboratorio',
      avatar: 'asistente',
      location: 'db-zone',
      dialogue: [
        "¡Saludos! Soy Carlos, asistente en el Centro de Datos. Trabajo con Wisrovi en proyectos de bases de datos.",
        "¿Te gustaría ver cómo funcionan las librerías wmongo y wpostgresql? Son herramientas muy potentes.",
        "Wisrovi diseñó estas librerías para simplificar operaciones complejas con bases de datos. La validación con Pydantic es especialmente útil.",
        "Te recomiendo visitar la sección de librerías para ver ejemplos de código y casos de uso reales."
      ],
      quest: {
        title: "Exploración de Bases de Datos",
        description: "Visita la sección de librerías y revisa la documentación de wmongo y wpostgresql.",
        completed: false,
        reward: 75
      }
    },
    {
      id: 'desafiante-tecnico',
      name: 'Ing. Laura Sánchez',
      role: 'Desafiante Técnica',
      avatar: 'desafiante',
      location: 'cloud-zone',
      dialogue: [
        "Bienvenido a la Nube de Innovación. Soy la Ing. Laura Sánchez, especialista en sistemas distribuidos.",
        "Wisrovi ha desarrollado arquitecturas impresionantes para entrenamiento en cluster. ¿Crees poder entender cómo funcionan?",
        "Te propongo un reto: descubre cómo wyoloservice permite conectar múltiples servidores para entrenar modelos de forma distribuida.",
        "Si completas este desafío, te recompensaré con información exclusiva sobre los próximos proyectos de Wisrovi."
      ],
      quest: {
        title: "Desafío de Arquitectura Distribuida",
        description: "Descubre cómo wyoloservice conecta múltiples servidores para entrenamiento distribuido.",
        completed: false,
        reward: 150
      }
    },
    {
      id: 'guia-exploracion',
      name: 'Tomás Gutiérrez',
      role: 'Guía de Exploración',
      avatar: 'guia',
      location: 'mlops-zone',
      dialogue: [
        "¡Hey! Soy Tomás, tu guía en la Plataforma MLOps. Estoy aquí para ayudarte a navegar por este mundo virtual.",
        "Wisrovi ha implementado sistemas fascinantes para automatizar el ciclo de vida de modelos de ML, desde el desarrollo hasta el monitoreo.",
        "¿Ves esos puntos brillantes en el mapa? Son áreas de interés donde puedes descubrir más sobre el trabajo de Wisrovi.",
        "Te sugiero visitar todas las zonas y hablar con todos los personajes. Cada uno tiene información valiosa y algunos ofrecen misiones especiales."
      ]
    }
  ]);
  
  const [playerPosition, setPlayerPosition] = useState({ x: 250, y: 150 });
  const [totalPoints, setTotalPoints] = useState(0);
  const [completedQuests, setCompletedQuests] = useState<string[]>([]);
  
  const handleNPCInteract = (npcId: string) => {
    console.log(`Interactuando con NPC: ${npcId}`);
  };
  
  const handleCompleteQuest = (npcId: string) => {
    const npc = npcs.find(n => n.id === npcId);
    if (npc && npc.quest && !npc.quest.completed) {
      // Actualizar estado del NPC
      setNpcs(prev => 
        prev.map(n => 
          n.id === npcId 
            ? { ...n, quest: { ...n.quest, completed: true } } 
            : n
        )
      );
      
      // Añadir a misiones completadas
      setCompletedQuests(prev => [...prev, npcId]);
      
      // Otorgar puntos
      setTotalPoints(prev => prev + npc.quest.reward);
    }
  };
  
  const movePlayer = (dx: number, dy: number) => {
    setPlayerPosition(prev => ({
      x: Math.max(50, Math.min(450, prev.x + dx)),
      y: Math.max(50, Math.min(250, prev.y + dy))
    }));
  };
  
  // Controles de teclado para mover al jugador
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          movePlayer(0, -10);
          break;
        case 'ArrowDown':
          movePlayer(0, 10);
          break;
        case 'ArrowLeft':
          movePlayer(-10, 0);
          break;
        case 'ArrowRight':
          movePlayer(10, 0);
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
        WisBot - Mundo Virtual de Wisrovi
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
        Explora el mundo virtual de Wisrovi, interactúa con personajes, completa misiones y aprende sobre sus proyectos.
      </p>
      
      {/* Panel de estadísticas */}
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Puntos totales</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{totalPoints}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Misiones completadas</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {completedQuests.length}/{npcs.filter(n => n.quest).length}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">NPCs encontrados</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {npcs.length}
            </p>
          </div>
        </div>
      </div>
      
      {/* Mundo del juego */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mb-8">
        <div className="relative w-full h-[300px] bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
          {/* Mapa del mundo */}
          <div className="absolute inset-0">
            {/* Zonas */}
            <div className="absolute top-[15%] left-[30%] w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <span className="text-xs font-bold text-blue-800 dark:text-blue-200">IA Lab</span>
            </div>
            <div className="absolute top-[40%] left-[50%] w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <span className="text-xs font-bold text-green-800 dark:text-green-200">Dev Center</span>
            </div>
            <div className="absolute top-[15%] left-[70%] w-24 h-24 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <span className="text-xs font-bold text-purple-800 dark:text-purple-200">MLOps</span>
            </div>
            <div className="absolute top-[65%] left-[20%] w-24 h-24 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
              <span className="text-xs font-bold text-yellow-800 dark:text-yellow-200">Data Center</span>
            </div>
            <div className="absolute top-[65%] left-[70%] w-24 h-24 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
              <span className="text-xs font-bold text-cyan-800 dark:text-cyan-200">Cloud</span>
            </div>
            
            {/* Conexiones entre zonas */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 300">
              <line x1="150" y1="75" x2="250" y2="150" stroke="#4B5563" strokeWidth="2" />
              <line x1="150" y1="75" x2="100" y2="200" stroke="#4B5563" strokeWidth="2" />
              <line x1="250" y1="150" x2="350" y2="75" stroke="#4B5563" strokeWidth="2" />
              <line x1="250" y1="150" x2="350" y2="225" stroke="#4B5563" strokeWidth="2" />
              <line x1="100" y1="200" x2="350" y2="225" stroke="#4B5563" strokeWidth="2" />
              <line x1="350" y1="75" x2="350" y2="225" stroke="#4B5563" strokeWidth="2" />
            </svg>
            
            {/* NPCs */}
            <div className="absolute top-[20%] left-[25%]">
              <NPCComponent 
                npc={npcs[0]} 
                onInteract={handleNPCInteract} 
                onCompleteQuest={handleCompleteQuest} 
              />
            </div>
            <div className="absolute top-[45%] left-[55%]">
              <NPCComponent 
                npc={npcs[1]} 
                onInteract={handleNPCInteract} 
                onCompleteQuest={handleCompleteQuest} 
              />
            </div>
            <div className="absolute top-[60%] left-[25%]">
              <NPCComponent 
                npc={npcs[2]} 
                onInteract={handleNPCInteract} 
                onCompleteQuest={handleCompleteQuest} 
              />
            </div>
            <div className="absolute top-[70%] left-[65%]">
              <NPCComponent 
                npc={npcs[3]} 
                onInteract={handleNPCInteract} 
                onCompleteQuest={handleCompleteQuest} 
              />
            </div>
            <div className="absolute top-[20%] left-[75%]">
              <NPCComponent 
                npc={npcs[4]} 
                onInteract={handleNPCInteract} 
                onCompleteQuest={handleCompleteQuest} 
              />
            </div>
            
            {/* Jugador */}
            <div 
              className="absolute w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110"
              style={{ 
                top: `${playerPosition.y}px`, 
                left: `${playerPosition.x}px`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className="w-full h-full flex items-center justify-center text-white font-bold text-xs">
                Tú
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Usa las teclas de flecha para moverte por el mundo virtual e interactúa con los personajes haciendo clic en ellos.
          </p>
          <div className="flex justify-center space-x-2">
            <button 
              onClick={() => movePlayer(0, -10)}
              className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              ↑
            </button>
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => movePlayer(-10, 0)}
                className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                ←
              </button>
              <button 
                onClick={() => movePlayer(0, 10)}
                className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                ↓
              </button>
            </div>
            <button 
              onClick={() => movePlayer(10, 0)}
              className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              →
            </button>
          </div>
        </div>
      </div>
      
      {/* Misiones activas */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
          Misiones Activas
        </h3>
        
        <div className="space-y-4">
          {npcs
            .filter(npc => npc.quest && !completedQuests.includes(npc.id))
            .map(npc => (
              <div 
                key={npc.id}
                className="p-4 border border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50 dark:bg-blue-900/20"
              >
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">{npc.quest.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{npc.quest.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Asignada por: {npc.name}</span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                    Recompensa: {npc.quest.reward} pts
                  </span>
                </div>
              </div>
            ))}
          
          {npcs.filter(npc => npc.quest && !completedQuests.includes(npc.id)).length === 0 && (
            <p className="text-gray-600 dark:text-gray-400 text-center py-4">
              No tienes misiones activas. ¡Habla con los NPCs para descubrir nuevas misiones!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameWorld;
