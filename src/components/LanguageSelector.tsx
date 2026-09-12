'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Tipos para el componente de idiomas
type Language = {
  code: string;
  name: string;
  flag: string;
};

type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

// Idiomas disponibles
const languages: Language[] = [
  {
    code: 'es',
    name: 'Español',
    flag: '🇪🇸'
  },
  {
    code: 'en',
    name: 'English',
    flag: '🇬🇧'
  }
];

// Traducciones para elementos comunes
const translations: Translations = {
  // Navegación
  'nav.home': {
    es: 'Inicio',
    en: 'Home'
  },
  'nav.projects': {
    es: 'Proyectos',
    en: 'Projects'
  },
  'nav.libraries': {
    es: 'Librerías',
    en: 'Libraries'
  },
  'nav.about': {
    es: 'Sobre Mí',
    en: 'About Me'
  },
  'nav.contact': {
    es: 'Contacto',
    en: 'Contact'
  },
  'nav.resources': {
    es: 'Recursos',
    en: 'Resources'
  },
  'nav.faq': {
    es: 'Preguntas Frecuentes',
    en: 'FAQ'
  },
  
  // Botones comunes
  'button.learn_more': {
    es: 'Saber más',
    en: 'Learn more'
  },
  'button.view_project': {
    es: 'Ver proyecto',
    en: 'View project'
  },
  'button.download': {
    es: 'Descargar',
    en: 'Download'
  },
  'button.contact': {
    es: 'Contactar',
    en: 'Contact'
  },
  'button.send': {
    es: 'Enviar',
    en: 'Send'
  },
  
  // Secciones de la página principal
  'home.hero.title': {
    es: 'Wisrovi Rodriguez',
    en: 'Wisrovi Rodriguez'
  },
  'home.hero.subtitle': {
    es: 'Ingeniero MLOps & Especialista en IA',
    en: 'MLOps Engineer & AI Specialist'
  },
  'home.hero.description': {
    es: 'Experto en inteligencia artificial, visión por computadora y desarrollo de software.',
    en: 'Expert in artificial intelligence, computer vision, and software development.'
  },
  'home.projects.title': {
    es: 'Proyectos Destacados',
    en: 'Featured Projects'
  },
  'home.libraries.title': {
    es: 'Librerías Desarrolladas',
    en: 'Developed Libraries'
  },
  'home.game.title': {
    es: 'Explora el Talento de Wisrovi',
    en: 'Explore Wisrovi\'s Talent'
  },
  'home.game.description': {
    es: 'Descubre las habilidades y proyectos de Wisrovi Rodriguez de forma interactiva. Completa desafíos, gana puntos y desbloquea insignias mientras aprendes sobre su trabajo.',
    en: 'Discover Wisrovi Rodriguez\'s skills and projects interactively. Complete challenges, earn points, and unlock badges while learning about his work.'
  },
  
  // Formulario de contacto
  'contact.title': {
    es: 'Contacto',
    en: 'Contact'
  },
  'contact.subtitle': {
    es: '¿Interesado en trabajar con Wisrovi Rodriguez?',
    en: 'Interested in working with Wisrovi Rodriguez?'
  },
  'contact.form.name': {
    es: 'Nombre completo',
    en: 'Full name'
  },
  'contact.form.email': {
    es: 'Email',
    en: 'Email'
  },
  'contact.form.company': {
    es: 'Empresa',
    en: 'Company'
  },
  'contact.form.message': {
    es: 'Mensaje',
    en: 'Message'
  },
  'contact.form.submit': {
    es: 'Enviar mensaje',
    en: 'Send message'
  },
  
  // Mensajes comunes
  'common.loading': {
    es: 'Cargando...',
    en: 'Loading...'
  },
  'common.error': {
    es: 'Ha ocurrido un error',
    en: 'An error has occurred'
  },
  'common.success': {
    es: '¡Operación exitosa!',
    en: 'Operation successful!'
  }
};

import { createContext, useContext, ReactNode } from 'react';

type LanguageContextType = {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: 'es',
  setLanguage: () => {},
  t: (key: string) => key
});

export const useLanguage = () => useContext(LanguageContext);

// Proveedor de idioma
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState('es');
  const router = useRouter();
  
  // Detectar idioma del navegador al cargar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('preferredLanguage');
      if (savedLang && languages.some(lang => lang.code === savedLang)) {
        setCurrentLanguage(savedLang);
      } else {
        // Detectar idioma del navegador
        const browserLang = navigator.language.split('-')[0];
        if (languages.some(lang => lang.code === browserLang)) {
          setCurrentLanguage(browserLang);
        }
      }
    }
  }, []);
  
  // Función para cambiar el idioma
  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    localStorage.setItem('preferredLanguage', lang);
    
    // Recargar la página para aplicar los cambios
    router.refresh();
  };
  
  // Función para obtener traducciones
  const t = (key: string): string => {
    if (translations[key] && translations[key][currentLanguage]) {
      return translations[key][currentLanguage];
    }
    
    // Fallback al español si no se encuentra la traducción
    if (translations[key] && translations[key]['es']) {
      return translations[key]['es'];
    }
    
    // Devolver la clave si no hay traducción
    return key;
  };
  
  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Selector de idioma
const LanguageSelector = () => {
  const { currentLanguage, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        <span className="text-lg">
          {languages.find(lang => lang.code === currentLanguage)?.flag}
        </span>
        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
          {languages.find(lang => lang.code === currentLanguage)?.code.toUpperCase()}
        </span>
        <svg className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm ${
                  currentLanguage === lang.code
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                } transition-colors`}
                role="menuitem"
              >
                <div className="flex items-center">
                  <span className="text-lg mr-2">{lang.flag}</span>
                  <span>{lang.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
