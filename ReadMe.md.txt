# Tarjeta de Presentación Interactiva

Este proyecto es una **tarjeta de presentación interactiva** diseñada para mostrar el perfil de un programador web de manera dinámica y profesional. Su propósito es facilitar el acceso a la información de contacto, portafolio y redes sociales, destacando el uso de animaciones y diseño moderno.

---

## 🚀 **Tecnologías Utilizadas**

Este proyecto fue desarrollado utilizando las siguientes herramientas y tecnologías:

- **React**: Biblioteca para construir interfaces de usuario.
- **Vite**: Herramienta de construcción rápida para aplicaciones web modernas.
- **Framer Motion**: Animaciones avanzadas en React.
- **Git**: Control de versiones.
- **TypeScript**: Tipado estático para un código más robusto y mantenible.

---

## 🎨 **Características del Proyecto**

- **Diseño Dinámico e Interactivo**: Animaciones fluidas gracias a **Framer Motion**.
- **Responsividad**: Optimizado para todos los dispositivos, desde móviles hasta pantallas grandes.
- **Acceso Rápido**: Enlaces directos a WhatsApp, correo electrónico, portafolio y GitHub.
- **Código Modular**: Construido con buenas prácticas de desarrollo para facilitar su mantenimiento.

---
## 📂 **Estructura del Proyecto**
tarjetapresentacion/
├── public/
├── src/
│ ├── assets/
│ │ └── images/ 
│ ├── components/
│ │ ├── Card/ 
│ │ │ ├── Card.tsx
│ │ │ ├── Card.module.css
│ │ ├── CardReverse/ 
│ │ │ ├── CardReverse.tsx
│ │ │ ├── CardReverse.module.css
│ │ ├── Screens/ 
│ │ │ ├── Screen.tsx
│ │ │ ├── Screen.module.css
│ ├── App.tsx 
│ ├── index.css 
│ ├── main.tsx 
│ ├── vite-env.d.ts 
├── dist/ 
├── .gitignore 
├── package.json 
├── tsconfig.json 
├── README.md 

### Descripción de los Componentes
- **Card/**: Contiene el diseño y funcionalidad principal de la tarjeta interactiva.
- **CardReverse/**: Versión alternativa del componente `Card`, con diseño inverso.
- **Screens/**: Define las vistas principales de la aplicación (pantallas completas).

---
## 📦 **Instalación y Ejecución**

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/maurogarzia/tarjetaPresentacion
   cd tarjetapresentacion

2. **Instalacion de dependencias**
   npm install

3. **Modo desarrollo**
   npm run dev

4. **Construcción para Producción*
   npm run preview

🌐 Despliegue
El proyecto puede ser desplegado fácilmente en plataformas como Vercel. Configura el comando de construcción como npm run build y el directorio de salida como dist.

🛠️ Contribuciones
¡Las contribuciones son bienvenidas! Si encuentras un problema o tienes una idea para mejorar este proyecto, no dudes en abrir un issue o enviar un pull request.