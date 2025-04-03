'use client';

import { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const libraries = [
  {
    name: 'wkafka',
    description: 'Simplifica la integración con Apache Kafka usando decoradores en Python.',
    examples: [
      {
        title: 'Consumidor básico',
        code: `from wkafka import KafkaConsumer

# Decorador para consumir mensajes de un topic
@KafkaConsumer(topic="mi-topic", group_id="mi-grupo")
def procesar_mensaje(mensaje):
    print(f"Mensaje recibido: {mensaje}")
    # Procesar el mensaje
    return True  # Confirmar procesamiento exitoso`,
        explanation: 'Este ejemplo muestra cómo crear un consumidor de Kafka con un simple decorador.'
      },
      {
        title: 'Productor con contexto',
        code: `from wkafka import KafkaProducer

# Usar el productor como contexto
with KafkaProducer(bootstrap_servers="localhost:9092") as producer:
    producer.send("mi-topic", {"key": "valor"})
    
# El productor se cierra automáticamente al salir del contexto`,
        explanation: 'Ejemplo de cómo enviar mensajes a Kafka usando el contexto de productor.'
      }
    ]
  },
  {
    name: 'wmongo',
    description: 'Facilita el uso de MongoDB en Python con una interfaz simple para operaciones CRUD.',
    examples: [
      {
        title: 'Conexión y consulta básica',
        code: `from wmongo import MongoClient

# Conectar a MongoDB
client = MongoClient("mongodb://localhost:27017")
db = client.mi_base_datos

# Consultar documentos
resultados = db.mi_coleccion.find({"estado": "activo"})
for doc in resultados:
    print(doc)`,
        explanation: 'Muestra cómo conectarse a MongoDB y realizar una consulta simple.'
      },
      {
        title: 'Modelo con validación',
        code: `from wmongo import MongoModel
from pydantic import BaseModel, Field

# Definir modelo con Pydantic
class Usuario(BaseModel):
    nombre: str
    edad: int = Field(gt=0)
    activo: bool = True

# Crear modelo MongoDB
usuarios = MongoModel("usuarios", Usuario)

# Insertar documento validado
nuevo_usuario = Usuario(nombre="Ana", edad=28)
resultado = usuarios.insert_one(nuevo_usuario)
print(f"ID insertado: {resultado.inserted_id}")`,
        explanation: 'Ejemplo de cómo usar validación de datos con Pydantic al insertar documentos.'
      }
    ]
  },
  {
    name: 'wredis',
    description: 'Interacción simple y eficiente con Redis, ofreciendo métodos para operaciones comunes.',
    examples: [
      {
        title: 'Operaciones básicas',
        code: `from wredis import RedisClient

# Conectar a Redis
redis = RedisClient(host="localhost", port=6379)

# Operaciones básicas
redis.set("clave", "valor")
valor = redis.get("clave")
print(valor)  # "valor"

# Expiración
redis.set("temporal", "expira pronto", expire=60)  # 60 segundos`,
        explanation: 'Muestra operaciones básicas de Redis como set y get con expiración.'
      },
      {
        title: 'Publicación y suscripción',
        code: `from wredis import RedisPubSub

# Crear cliente pub/sub
pubsub = RedisPubSub(host="localhost")

# Definir manejador de mensajes
@pubsub.subscribe("canal-noticias")
def recibir_noticia(mensaje):
    print(f"Nueva noticia: {mensaje}")
    
# Publicar mensaje
pubsub.publish("canal-noticias", "¡Nueva actualización disponible!")

# Iniciar escucha (en otro hilo)
pubsub.start_listening()`,
        explanation: 'Ejemplo del sistema de publicación y suscripción de Redis.'
      }
    ]
  },
  {
    name: 'wcontainer',
    description: 'Simplifica operaciones específicas con contenedores Docker.',
    examples: [
      {
        title: 'Gestión de contenedores',
        code: `from wcontainer import DockerManager

# Inicializar gestor
docker = DockerManager()

# Listar contenedores
contenedores = docker.list_containers(status="running")
for c in contenedores:
    print(f"ID: {c.id}, Nombre: {c.name}, Imagen: {c.image}")
    
# Iniciar contenedor
docker.start_container("mi-contenedor")

# Ajustar recursos
docker.update_resources("mi-contenedor", cpu_limit=2, memory="1g")`,
        explanation: 'Muestra cómo gestionar contenedores Docker: listar, iniciar y ajustar recursos.'
      },
      {
        title: 'Monitoreo de recursos',
        code: `from wcontainer import DockerMonitor
import time

# Inicializar monitor
monitor = DockerMonitor()

# Monitorear uso de recursos
@monitor.watch("mi-contenedor", interval=5)  # cada 5 segundos
def revisar_recursos(stats):
    cpu_uso = stats["cpu_percent"]
    mem_uso = stats["memory_usage_mb"]
    print(f"CPU: {cpu_uso}%, Memoria: {mem_uso}MB")
    
    # Alerta si uso de CPU es alto
    if cpu_uso > 80:
        print("¡Alerta! Uso de CPU elevado")
        
# Iniciar monitoreo
monitor.start()
time.sleep(60)  # Monitorear por 1 minuto
monitor.stop()`,
        explanation: 'Ejemplo de cómo monitorear el uso de recursos de un contenedor en tiempo real.'
      }
    ]
  },
  {
    name: 'wpostgresql',
    description: 'Simplifica la interacción con bases de datos PostgreSQL.',
    examples: [
      {
        title: 'Conexión y consulta',
        code: `from wpostgresql import PostgresClient

# Conectar a PostgreSQL
db = PostgresClient(
    host="localhost",
    database="mi_db",
    user="usuario",
    password="contraseña"
)

# Ejecutar consulta
resultados = db.query("SELECT * FROM usuarios WHERE activo = %s", [True])
for fila in resultados:
    print(fila)`,
        explanation: 'Muestra cómo conectarse a PostgreSQL y ejecutar una consulta parametrizada.'
      },
      {
        title: 'Modelo con ORM',
        code: `from wpostgresql import PostgresModel
from pydantic import BaseModel, Field

# Definir modelo
class Producto(BaseModel):
    nombre: str
    precio: float = Field(gt=0)
    stock: int = 0
    
# Crear modelo PostgreSQL
productos = PostgresModel("productos", Producto)

# Crear tabla automáticamente
productos.create_table()

# Insertar producto
nuevo = Producto(nombre="Laptop", precio=999.99, stock=10)
productos.insert(nuevo)

# Consultar productos
laptops = productos.find({"nombre": "Laptop"})
print(f"Encontrados: {len(laptops)}")`,
        explanation: 'Ejemplo de cómo usar el ORM para definir modelos y crear tablas automáticamente.'
      }
    ]
  }
];

const InteractiveConsole = () => {
  const [selectedLibrary, setSelectedLibrary] = useState(libraries[0]);
  const [selectedExample, setSelectedExample] = useState(0);
  const [consoleOutput, setConsoleOutput] = useState('# La salida de la ejecución aparecerá aquí');
  const [isExecuting, setIsExecuting] = useState(false);
  
  const handleLibraryChange = (libraryName) => {
    const library = libraries.find(lib => lib.name === libraryName);
    setSelectedLibrary(library);
    setSelectedExample(0);
    setConsoleOutput('# La salida de la ejecución aparecerá aquí');
  };
  
  const handleExampleChange = (index) => {
    setSelectedExample(index);
    setConsoleOutput('# La salida de la ejecución aparecerá aquí');
  };
  
  const executeCode = () => {
    setIsExecuting(true);
    
    // Simulación de ejecución
    setTimeout(() => {
      const example = selectedLibrary.examples[selectedExample];
      let output = '';
      
      // Generar salida simulada basada en la librería y ejemplo
      switch (selectedLibrary.name) {
        case 'wkafka':
          if (selectedExample === 0) {
            output = `Conectando a Kafka en localhost:9092...
Suscrito al topic "mi-topic" con grupo "mi-grupo"
Esperando mensajes...
Mensaje recibido: {"id": 1, "data": "Ejemplo de mensaje", "timestamp": 1648756892}
Procesamiento exitoso
Mensaje recibido: {"id": 2, "data": "Otro mensaje", "timestamp": 1648756895}
Procesamiento exitoso`;
          } else {
            output = `Conectando a Kafka en localhost:9092...
Productor inicializado
Enviando mensaje a "mi-topic"...
Mensaje enviado correctamente
Offset: 42, Partición: 0
Cerrando productor...`;
          }
          break;
          
        case 'wmongo':
          if (selectedExample === 0) {
            output = `Conectando a MongoDB en mongodb://localhost:27017...
Conexión establecida
Ejecutando consulta en mi_coleccion...
Documento encontrado: {"_id": "60d21b4667d0d8992e610c85", "nombre": "Juan", "estado": "activo", "edad": 28}
Documento encontrado: {"_id": "60d21b4667d0d8992e610c86", "nombre": "María", "estado": "activo", "edad": 34}
Documento encontrado: {"_id": "60d21b4667d0d8992e610c87", "nombre": "Carlos", "estado": "activo", "edad": 45}
Total documentos: 3`;
          } else {
            output = `Validando modelo Usuario...
Modelo válido
Conectando a MongoDB...
Validando documento: {"nombre": "Ana", "edad": 28, "activo": true}
Documento válido
Insertando en colección usuarios...
Documento insertado correctamente
ID insertado: 60d21b4667d0d8992e610c88`;
          }
          break;
          
        case 'wredis':
          if (selectedExample === 0) {
            output = `Conectando a Redis en localhost:6379...
Conexión establecida
SET clave valor
OK
GET clave
"valor"
SET temporal "expira pronto" EX 60
OK
TTL temporal
60`;
          } else {
            output = `Inicializando cliente Redis PubSub...
Suscrito a canal: canal-noticias
Publicando mensaje en canal-noticias...
Mensaje publicado
Escuchando mensajes...
Nueva noticia: ¡Nueva actualización disponible!`;
          }
          break;
          
        case 'wcontainer':
          if (selectedExample === 0) {
            output = `Inicializando Docker Manager...
Listando contenedores en ejecución...
ID: 7f2d55a73b8e, Nombre: postgres-db, Imagen: postgres:13
ID: 9a8b3c2d1e0f, Nombre: redis-cache, Imagen: redis:6
ID: 5e4f3c2b1a0d, Nombre: mi-contenedor, Imagen: nginx:latest
Iniciando contenedor: mi-contenedor
Contenedor iniciado correctamente
Actualizando recursos para mi-contenedor...
Recursos actualizados: CPU=2, Memoria=1g`;
          } else {
            output = `Inicializando Docker Monitor...
Configurando monitoreo para contenedor: mi-contenedor
Intervalo: 5 segundos
Iniciando monitoreo...
CPU: 12.5%, Memoria: 256MB
CPU: 15.2%, Memoria: 258MB
CPU: 85.7%, Memoria: 512MB
¡Alerta! Uso de CPU elevado
CPU: 78.3%, Memoria: 498MB
Deteniendo monitoreo...
Monitoreo finalizado`;
          }
          break;
          
        case 'wpostgresql':
          if (selectedExample === 0) {
            output = `Conectando a PostgreSQL en localhost...
Conexión establecida a base de datos: mi_db
Ejecutando consulta: SELECT * FROM usuarios WHERE activo = True
Fila: (1, 'admin', 'admin@ejemplo.com', True)
Fila: (2, 'usuario1', 'usuario1@ejemplo.com', True)
Fila: (5, 'usuario4', 'usuario4@ejemplo.com', True)
Consulta completada: 3 filas encontradas`;
          } else {
            output = `Inicializando modelo PostgreSQL para tabla: productos
Validando esquema...
Esquema válido
Creando tabla si no existe...
Tabla creada correctamente
Validando producto: {"nombre": "Laptop", "precio": 999.99, "stock": 10}
Producto válido
Insertando producto...
Producto insertado correctamente
ID: 42
Buscando productos con nombre = "Laptop"...
Encontrados: 1
Producto: {"id": 42, "nombre": "Laptop", "precio": 999.99, "stock": 10}`;
          }
          break;
          
        default:
          output = 'Ejemplo ejecutado correctamente';
      }
      
      setConsoleOutput(output);
      setIsExecuting(false);
    }, 1500);
  };
  
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        Consola Interactiva
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Prueba las librerías de Wisrovi Rodriguez directamente en tu navegador. Selecciona una librería y un ejemplo para ver cómo funciona.
      </p>
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/4">
          <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Librerías</h3>
          <div className="space-y-2">
            {libraries.map(lib => (
              <button
                key={lib.name}
                onClick={() => handleLibraryChange(lib.name)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  selectedLibrary.name === lib.name
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {lib.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="lg:w-3/4">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
              {selectedLibrary.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {selectedLibrary.description}
            </p>
            
            <div className="flex mb-4 border-b border-gray-200 dark:border-gray-700">
              {selectedLibrary.examples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleChange(index)}
                  className={`px-4 py-2 ${
                    selectedExample === index
                      ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                  }`}
                >
                  {example.title}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Código de ejemplo:
            </h4>
            <div className="rounded-lg overflow-hidden">
              <SyntaxHighlighter
                language="python"
                style={tomorrow}
                customStyle={{
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.9rem',
                  lineHeight: '1.5'
                }}
              >
                {selectedLibrary.examples[selectedExample].code}
              </SyntaxHighlighter>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              {selectedLibrary.examples[selectedExample].explanation}
            </p>
          </div>
          
          <div className="flex justify-end mb-4">
            <button
              onClick={executeCode}
              disabled={isExecuting}
              className={`px-4 py-2 rounded-md ${
                isExecuting
                  ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800'
              } text-white transition-colors`}
            >
              {isExecuting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Ejecutando...
                </span>
              ) : (
                'Ejecutar código'
              )}
            </button>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Salida de la consola:
            </h4>
            <div className="bg-gray-900 text-gray-200 rounded-lg p-4 font-mono text-sm whitespace-pre-wrap h-64 overflow-y-auto">
              {consoleOutput}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <strong>Nota:</strong> Esta es una simulación para fines demostrativos. El código no se ejecuta realmente en el servidor.
          Para probar estas librerías en un entorno real, instálalas con pip: <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">pip install {selectedLibrary.name}</code>
        </p>
      </div>
    </div>
  );
};

export default InteractiveConsole;
