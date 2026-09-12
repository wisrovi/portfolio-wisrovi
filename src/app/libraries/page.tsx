'use client';

import { useState } from 'react';
import Link from 'next/link';

type Library = {
  id: string;
  name: string;
  category: 'core' | 'mcp' | 'database' | 'messaging' | 'security' | 'mlops' | 'devops';
  description: string;
  features: string[];
  technologies: string[];
  pypiUrl: string;
  githubUrl: string;
  version: string;
};

const librariesData: Library[] = [
  {
    id: 'wpipe',
    name: 'wpipe',
    category: 'core',
    description: 'Motor de pipelines desacoplado de alto rendimiento (Sync/Async). Soporta persistencia de estado mediante SQLite WAL, bypass de GIL y reanudación granular desde checkpoints.',
    features: [
      'Arquitectura de ejecución DAG síncrona y asíncrona',
      'Persistencia de estado en SQLite con modo Write-Ahead Logging (WAL)',
      'Bypass del Global Interpreter Lock (GIL) para tareas intensivas en CPU/GPU',
      'Puntos de control (checkpoints) automáticos y reanudación tras fallos'
    ],
    technologies: ['Python', 'SQLite WAL', 'AsyncIO', 'DAG', 'Fault Tolerance'],
    pypiUrl: 'https://pypi.org/project/wpipe/',
    githubUrl: 'https://github.com/wisrovi/wpipe',
    version: '0.1.6'
  },
  {
    id: 'wpipe-mcp',
    name: 'wpipe-mcp',
    category: 'mcp',
    description: 'Servidor FastMCP oficial que permite a modelos de lenguaje (Claude, Antigravity, Cursor) inspeccionar, construir, verificar formalmente y ejecutar pipelines wpipe.',
    features: [
      'Exposición de herramientas nativas Model Context Protocol (FastMCP)',
      'Validación de flujo de contexto y verificación formal en tiempo de ejecución',
      'Scaffolding automático de proyectos wpipe para agentes autónomos',
      'Dry-run y optimización de topología DAG asistida por LLMs'
    ],
    technologies: ['Python', 'FastMCP', 'LLM Agents', 'JSON-RPC', 'Context Flow'],
    pypiUrl: 'https://pypi.org/project/wpipe-mcp/',
    githubUrl: 'https://github.com/wisrovi/wpipe-mcp',
    version: '0.1.0'
  },
  {
    id: 'wpipe-steps',
    name: 'wpipe-steps',
    category: 'core',
    description: 'Colección oficial de pasos modulares listos para producción para pipelines wpipe en ingesta, ETL, visión y ML.',
    features: [
      'Pasos estandarizados con tipado fuerte y validación Pydantic',
      'Integración inmediata con almacenamiento S3 y PostgreSQL',
      'Transformaciones de datos optimizadas con bajo consumo de memoria'
    ],
    technologies: ['Python', 'wpipe', 'ETL', 'Modular Steps'],
    pypiUrl: 'https://pypi.org/project/wpipe-steps/',
    githubUrl: 'https://github.com/wisrovi/wpipe-steps',
    version: '0.1.0'
  },
  {
    id: 'wpipe-plugins',
    name: 'wpipe-plugins',
    category: 'core',
    description: 'Repositorio de plugins comunitarios y extensiones especializadas para el ecosistema wpipe.',
    features: [
      'Carga dinámica de plugins en caliente',
      'Aislamiento de dependencias por plugin',
      'Conectores para servicios en la nube'
    ],
    technologies: ['Python', 'wpipe', 'Plugin Architecture'],
    pypiUrl: 'https://pypi.org/project/wpipe-plugins/',
    githubUrl: 'https://github.com/wisrovi/wpipe-plugins',
    version: '0.1.0'
  },
  {
    id: 'wyolo',
    name: 'wyolo',
    category: 'mlops',
    description: 'Wrapper de ciclo de vida completo para modelos YOLO (v8, v11, YOLO26) y RT-DETR con telemetría integrada a MLflow y almacenamiento en MinIO S3.',
    features: [
      'Gestión automática de artefactos y métricas en MLflow',
      'Sincronización transparente de pesos entrenados en MinIO S3',
      'Soporte multi-GPU y cuantización TensorRT/ONNX',
      'Puntos de control (checkpoints) y validación forense'
    ],
    technologies: ['Python', 'YOLO', 'RT-DETR', 'MLflow', 'MinIO S3', 'PyTorch'],
    pypiUrl: 'https://pypi.org/project/wyolo/',
    githubUrl: 'https://github.com/wisrovi/wyolo',
    version: '0.1.4'
  },
  {
    id: 'wyoloservice-mcp',
    name: 'wyoloservice-mcp',
    category: 'mcp',
    description: 'Servidor FastMCP para orquestación agéntica de clusters NeuralForgeAI: validación de datasets, generación de configs Sweeper v2 y despacho de estudios.',
    features: [
      'Despacho de estudios genéticos con Optuna vía herramientas MCP',
      'Validación remota de datasets YOLO (labels, polígonos corruptos)',
      'Monitoreo de colas Celery y estados de invokers de GPU'
    ],
    technologies: ['FastMCP', 'NeuralForgeAI', 'Optuna', 'Celery', 'GPU Hive'],
    pypiUrl: 'https://pypi.org/project/wyoloservice-mcp/',
    githubUrl: 'https://github.com/wisrovi/wyoloservice_mcp',
    version: '0.1.0'
  },
  {
    id: 'wredis',
    name: 'wredis',
    category: 'database',
    description: 'Suite de caché y mensajería Redis de alto rendimiento para Python. Incluye decoradores de caché, colas ordenadas y limitadores de tasa token-bucket distribuidos.',
    features: [
      'Pool de conexiones síncrono y asíncrono optimizado',
      'Decoradores declarativos de caché con expiración granular',
      'Limitadores de tasa distribuidos (Token Bucket)',
      'Manejo de streams, conjuntos ordenados y pub/sub nativo'
    ],
    technologies: ['Python', 'Redis', 'Pub/Sub', 'Rate Limiting', 'Caching'],
    pypiUrl: 'https://pypi.org/project/wredis/',
    githubUrl: 'https://github.com/wisrovi/wredis',
    version: '0.2.2'
  },
  {
    id: 'wredis-mcp',
    name: 'wredis-mcp',
    category: 'mcp',
    description: 'Servidor FastMCP para inspección, profiling de memoria y administración de instancias Redis por agentes LLM.',
    features: [
      'Herramientas MCP para consulta e inspección de claves en tiempo real',
      'Métricas de memoria y fragmentación para agentes de monitoreo',
      'Auditoría segura sin comandos destructivos en producción'
    ],
    technologies: ['FastMCP', 'Redis', 'LLM Tools', 'Observability'],
    pypiUrl: 'https://pypi.org/project/wredis-mcp/',
    githubUrl: 'https://github.com/wisrovi/wredis-mcp',
    version: '0.1.0'
  },
  {
    id: 'wsqlite',
    name: 'wsqlite',
    category: 'database',
    description: 'ORM de alto rendimiento para SQLite con TableSync reactivo, serialización Pydantic v2 y soporte para modo WAL multihilo.',
    features: [
      'Generación automática de esquemas con TableSync',
      'Validación estricta de tipos basada en Pydantic v2',
      'Soporte nativo para modo WAL concurrente',
      'Mixins para soft deletes y marcas temporales'
    ],
    technologies: ['Python', 'SQLite WAL', 'Pydantic v2', 'ORM'],
    pypiUrl: 'https://pypi.org/project/wsqlite/',
    githubUrl: 'https://github.com/wisrovi/wsqlite',
    version: '0.1.5'
  },
  {
    id: 'wsqlite-mcp',
    name: 'wsqlite-mcp',
    category: 'mcp',
    description: 'Servidor FastMCP para análisis semántico e inspección de bases de datos SQLite por modelos de IA.',
    features: [
      'Consultas parametrizadas seguras para agentes LLM',
      'Extracción de esquemas y estadísticas de índices',
      'Integración con pipelines wpipe para auditoría de estado'
    ],
    technologies: ['FastMCP', 'SQLite', 'LLM SQL Agent', 'JSON-RPC'],
    pypiUrl: 'https://pypi.org/project/wsqlite-mcp/',
    githubUrl: 'https://github.com/wisrovi/wsqlite-mcp',
    version: '0.1.0'
  },
  {
    id: 'wpostgresql',
    name: 'wpostgresql',
    category: 'database',
    description: 'Pooler de conexiones empresarial y mapeador ORM para PostgreSQL con actualización dinámica de esquemas y modelos Pydantic.',
    features: [
      'Conexiones agrupadas de alta concurrencia (connection pooling)',
      'Mapeo automático de tablas a partir de modelos Pydantic',
      'Migraciones automáticas seguras de esquemas relacionales',
      'Soporte avanzado para tipos JSONB y arrays'
    ],
    technologies: ['Python', 'PostgreSQL', 'Pydantic', 'Connection Pooling'],
    pypiUrl: 'https://pypi.org/project/wpostgresql/',
    githubUrl: 'https://github.com/wisrovi/wpostgresql',
    version: '0.1.0'
  },
  {
    id: 'wpostgresql-mcp',
    name: 'wpostgresql-mcp',
    category: 'mcp',
    description: 'Servidor FastMCP para integración de agentes de IA con bases de datos relacionales PostgreSQL en entornos corporativos.',
    features: [
      'Inspección de catálogo de base de datos para LLMs',
      'Ejecución controlada de queries con límites de timeout',
      'Validación de permisos de acceso en tiempo real'
    ],
    technologies: ['FastMCP', 'PostgreSQL', 'AI Agent Tools'],
    pypiUrl: 'https://pypi.org/project/wpostgresql-mcp/',
    githubUrl: 'https://github.com/wisrovi/wpostgresql-mcp',
    version: '0.1.0'
  },
  {
    id: 'wkafka',
    name: 'wkafka',
    category: 'messaging',
    description: 'Integración declarativa de Apache Kafka basada en decoradores para consumidores y productores concurrentes en Python.',
    features: [
      'Enfoque declarativo con decoradores @KafkaConsumer',
      'Procesamiento en paralelo con hilos dedicados y backpressure',
      'Soporte nativo para payloads JSON, imágenes y streams binarios',
      'Context manager para productores seguros y auto-flush'
    ],
    technologies: ['Python', 'Apache Kafka', 'Decorators', 'Multithreading'],
    pypiUrl: 'https://pypi.org/project/wkafka/',
    githubUrl: 'https://github.com/wisrovi/wkafka',
    version: '0.2.1'
  },
  {
    id: 'wkafka-mcp',
    name: 'wkafka-mcp',
    category: 'mcp',
    description: 'Servidor FastMCP para streaming de eventos y supervisión de tópicos Kafka mediante agentes inteligentes.',
    features: [
      'Monitoreo de lag y particiones en clusters Kafka',
      'Publicación de mensajes estructurados mediante JSON-RPC',
      'Inspección de metadatos de brokers'
    ],
    technologies: ['FastMCP', 'Apache Kafka', 'Event Streaming'],
    pypiUrl: 'https://pypi.org/project/wkafka-mcp/',
    githubUrl: 'https://github.com/wisrovi/wkafka-mcp',
    version: '0.1.0'
  },
  {
    id: 'wauth',
    name: 'wauth',
    category: 'security',
    description: 'Bóveda criptográfica de credenciales vinculada a huellas de hardware (machine-salted) con cifrado simétrico Fernet AES-256.',
    features: [
      'Derivación de claves basada en huella de hardware del nodo host',
      'Cifrado de configuración sensible y secretos de cluster',
      'Prevención de portabilidad no autorizada de credenciales'
    ],
    technologies: ['Python', 'Cryptography', 'AES-256 Fernet', 'Hardware Salting'],
    pypiUrl: 'https://pypi.org/project/wauth/',
    githubUrl: 'https://github.com/wisrovi/wauth',
    version: '0.1.0'
  },
  {
    id: 'wFabricSecurity',
    name: 'wFabricSecurity',
    category: 'security',
    description: 'Arquitectura de seguridad Zero Trust con verificación criptográfica ECDSA P-256 e integridad de código por SHA-256.',
    features: [
      'Validación de firmas digitales con curvas elípticas ECDSA P-256',
      'Verificación forense de integridad de código y binarios con SHA-256',
      'Diseñado para redes distribuidas y contratos inteligentes'
    ],
    technologies: ['Python', 'Zero Trust', 'ECDSA P-256', 'SHA-256'],
    pypiUrl: 'https://pypi.org/project/wFabricSecurity/',
    githubUrl: 'https://github.com/wisrovi/wFabricSecurity',
    version: '0.1.0'
  },
  {
    id: 'wclickhouse',
    name: 'wclickhouse',
    category: 'database',
    description: 'Mapeador ORM para ClickHouse orientado a analítica OLAP y telemetría columnar de modelos de deep learning.',
    features: [
      'Conexión optimizada con clickhouse-connect',
      'Inserciones masivas en lotes (bulk inserts) ultrarrápidas',
      'Consultas analíticas de latencias y métricas de inferencia'
    ],
    technologies: ['Python', 'ClickHouse', 'OLAP', 'Analytics'],
    pypiUrl: 'https://pypi.org/project/wclickhouse/',
    githubUrl: 'https://github.com/wisrovi/wclickhouse',
    version: '0.1.0'
  },
  {
    id: 'wmongo',
    name: 'wmongo',
    category: 'database',
    description: 'Mapeador documental para MongoDB con modelos Pydantic, caché reactiva en Redis y listeners de eventos.',
    features: [
      'Validación bidireccional estricta con Pydantic',
      'Caché de consultas automática sobre wredis',
      'Operaciones CRUD y agregaciones simplificadas'
    ],
    technologies: ['Python', 'MongoDB', 'Pydantic', 'Redis Cache'],
    pypiUrl: 'https://pypi.org/project/wmongo/',
    githubUrl: 'https://github.com/wisrovi/wmongo',
    version: '0.1.0'
  },
  {
    id: 'wcontainer',
    name: 'wcontainer',
    category: 'devops',
    description: 'Automatización de Docker SDK: gobernador de cuotas VRAM/CPU, escaneo de vulnerabilidades Trivy y gestión de contenedores efímeros.',
    features: [
      'Aislamiento de tareas de entrenamiento en contenedores efímeros',
      'Monitoreo en tiempo real de recursos y límites de VRAM GPU',
      'Escaneo integrado de seguridad de imágenes con Trivy'
    ],
    technologies: ['Python', 'Docker SDK', 'Trivy', 'MLOps Infrastructure'],
    pypiUrl: 'https://pypi.org/project/wcontainer/',
    githubUrl: 'https://github.com/wisrovi/wcontainer',
    version: '0.1.1'
  },
  {
    id: 'ProcessAudio',
    name: 'ProcessAudio',
    category: 'mlops',
    description: 'Transformadores Scikit-learn para espectrogramas de audio, extracción de características acústicas y aumentación.',
    features: [
      'Extracción de espectrogramas Mel y MFCC',
      'Pipelines compatibles con transformadores de Scikit-learn',
      'Técnicas de inyección de ruido y aumentación de audio'
    ],
    technologies: ['Python', 'Signal Processing', 'Scikit-learn', 'Audio ML'],
    pypiUrl: 'https://pypi.org/project/ProcessAudio/',
    githubUrl: 'https://github.com/wisrovi/ProcessAudio',
    version: '0.1.0'
  },
  {
    id: 'wdecorators',
    name: 'wdecorators',
    category: 'core',
    description: 'Colección de decoradores de alto nivel para reintentos exponenciales, mediciones de tiempo y logging reactivo.',
    features: [
      'Manejo de reintentos con backoff exponencial y jitter',
      'Perfilado de latencia y telemetría de funciones',
      'Inyección de logs estructurados con Loguru'
    ],
    technologies: ['Python', 'Decorators', 'Resilience', 'Loguru'],
    pypiUrl: 'https://pypi.org/project/wdecorators/',
    githubUrl: 'https://github.com/wisrovi/wdecorators',
    version: '0.1.0'
  },
  {
    id: 'wutils',
    name: 'wutils',
    category: 'core',
    description: 'Utilidades esenciales de script scheduling, validación de formatos y normalización algorítmica.',
    features: [
      'Planificación de tareas y parseo de cron seguro',
      'Validadores de formatos de datasets y configuraciones',
      'Helpers algorítmicos comunes'
    ],
    technologies: ['Python', 'Scheduling', 'Validators'],
    pypiUrl: 'https://pypi.org/project/wutils/',
    githubUrl: 'https://github.com/wisrovi/wutils',
    version: '0.1.0'
  },
  {
    id: 'wisrovi-python',
    name: 'wisrovi-python',
    category: 'core',
    description: 'Librería fundacional con utilidades matemáticas, estructuras algorítmicas base y tipos compartidos de la wisrovi SUITE.',
    features: [
      'Estructuras de datos optimizadas para inferencia y ML',
      'Tipos compartidos entre los paquetes del ecosistema',
      'Constantes y algoritmos de optimización matemática'
    ],
    technologies: ['Python', 'Algorithms', 'Core Types'],
    pypiUrl: 'https://pypi.org/project/wisrovi-python/',
    githubUrl: 'https://github.com/wisrovi/wisrovi-python',
    version: '0.1.0'
  }
];

const Libraries = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Todas (23)' },
    { id: 'core', label: 'Pipeline & Core' },
    { id: 'mcp', label: 'Model Context Protocol (FastMCP)' },
    { id: 'database', label: 'Bases de Datos & Caché' },
    { id: 'messaging', label: 'Streaming & Mensajería' },
    { id: 'security', label: 'Seguridad & Zero Trust' },
    { id: 'mlops', label: 'MLOps & Computer Vision' },
    { id: 'devops', label: 'DevOps & Docker' }
  ];

  const filteredLibraries = librariesData.filter(lib => {
    const matchesCategory = selectedCategory === 'all' || lib.category === selectedCategory;
    const matchesSearch = lib.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          lib.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          lib.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 text-xs font-semibold mb-4">
              Ecosistema wisrovi SUITE
            </div>
            <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Catálogo de Librerías Oficiales
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              23 paquetes de software abiertos y publicados en PyPI (37 módulos del ecosistema), diseñados para orquestación de datos de alto rendimiento, servidores agénticos FastMCP, MLOps y seguridad criptográfica.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-10 space-y-4">
            <div className="max-w-md mx-auto">
              <input
                type="text"
                placeholder="Buscar por nombre, tecnología o caso de uso..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Libraries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLibraries.map(lib => (
              <div 
                key={lib.id} 
                id={lib.id}
                className="library-card flex flex-col justify-between border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-all p-6 rounded-xl bg-white dark:bg-gray-800/80 shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 font-mono">
                      {lib.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-md border border-blue-200 dark:border-blue-800">
                        v{lib.version}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {lib.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                      Capacidades Clave:
                    </h4>
                    <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-300 list-disc pl-4">
                      {lib.features.slice(0, 3).map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {lib.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-[11px] rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t border-gray-100 dark:border-gray-700/60">
                  <a 
                    href={lib.pypiUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 px-3 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    PyPI Package
                  </a>
                  <a 
                    href={lib.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 px-3 text-xs font-semibold rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredLibraries.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 dark:text-gray-400">
                No se encontraron librerías que coincidan con la búsqueda.
              </p>
            </div>
          )}

          {/* Unified CLI Banner */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-950 text-white shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Instala y Gestiona la Suite con w-cli</h3>
                <p className="text-blue-200 text-sm max-w-xl">
                  Usa la herramienta de línea de comandos unificada para instalar cualquiera de los 23 paquetes con autodetección de entorno (pip, poetry o pipenv).
                </p>
                <div className="mt-4 font-mono text-sm bg-slate-900/80 px-4 py-2.5 rounded-lg border border-white/10 inline-block text-cyan-300">
                  pip install w-cli && w install pipe
                </div>
              </div>
              <a 
                href="https://github.com/wisrovi/w-cli" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-cta bg-white text-blue-900 hover:bg-blue-50 font-bold whitespace-nowrap"
              >
                Ver w-cli en GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Libraries;
