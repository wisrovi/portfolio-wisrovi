# Portfolio de Wisrovi Rodriguez

Este proyecto es un sitio web interactivo que muestra el perfil profesional, proyectos y habilidades de Wisrovi Rodriguez, un ingeniero MLOps especializado en inteligencia artificial, visión artificial y desarrollo de software.

## Características

- **Diseño moderno y responsivo** con Next.js y Tailwind CSS
- **Modo claro/oscuro** adaptable a las preferencias del usuario
- **Componentes interactivos** que muestran los proyectos y habilidades de Wisrovi
- **Sistema de gamificación** con desafíos, puntos e insignias
- **Mundo virtual** con NPCs que enseñan sobre el trabajo de Wisrovi
- **Chatbot interactivo** (WChat) que responde preguntas sobre Wisrovi y sus proyectos
- **Secciones detalladas** sobre proyectos, librerías y experiencia profesional

## Tecnologías utilizadas

- **Next.js**: Framework de React para aplicaciones web
- **TypeScript**: Superset tipado de JavaScript
- **Tailwind CSS**: Framework de CSS utilitario
- **React**: Biblioteca JavaScript para construir interfaces de usuario

## Requisitos previos

- Node.js 18.0.0 o superior
- npm 9.0.0 o superior

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/portfolio-wisrovi.git
cd portfolio-wisrovi
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el sitio.

## Estructura del proyecto

```
portfolio-wisrovi/
├── public/             # Archivos estáticos
├── src/                # Código fuente
│   ├── app/            # Páginas de la aplicación
│   │   ├── about/      # Página "Sobre mí"
│   │   ├── contact/    # Página de contacto
│   │   ├── libraries/  # Página de librerías
│   │   ├── projects/   # Página de proyectos
│   │   └── ...
│   ├── components/     # Componentes reutilizables
│   │   ├── GameWorld.tsx       # Mundo virtual con NPCs
│   │   ├── Navbar.tsx          # Barra de navegación
│   │   ├── TalentExplorer.tsx  # Sistema de gamificación
│   │   ├── ThemeProvider.tsx   # Proveedor de tema claro/oscuro
│   │   ├── VirtualAssistant.tsx # Chatbot interactivo
│   │   └── ...
│   └── ...
├── .gitignore
├── next.config.js
├── package.json
├── README.md
└── ...
```

## Despliegue

### Opción 1: Despliegue en Vercel

La forma más sencilla de desplegar esta aplicación es utilizando la plataforma [Vercel](https://vercel.com), creada por los mismos desarrolladores de Next.js:

1. Crea una cuenta en [Vercel](https://vercel.com/signup)
2. Instala Vercel CLI:
```bash
npm install -g vercel
```
3. Ejecuta el comando de despliegue:
```bash
vercel
```

### Opción 2: Despliegue estático

También puedes generar una versión estática del sitio:

1. Construye la aplicación:
```bash
npm run build
```
2. Los archivos estáticos se generarán en la carpeta `out/`
3. Puedes desplegar estos archivos en cualquier servidor web estático como Netlify, GitHub Pages, etc.

## Personalización

Para personalizar el sitio con tu propia información:

1. Modifica los archivos en `src/app/` para actualizar el contenido de las páginas
2. Actualiza los componentes en `src/components/` para cambiar la funcionalidad
3. Ajusta los estilos en `src/app/globals.css` para cambiar la apariencia

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## Contacto

Para cualquier consulta o sugerencia, puedes contactar a través de:
- Email: wisrovi.rodriguez@gmail.com
- LinkedIn: [linkedin.com/in/wisrovi-rodriguez](https://www.linkedin.com/in/wisrovi-rodriguez/)
- GitHub: [github.com/wisrovi](https://github.com/wisrovi/)
