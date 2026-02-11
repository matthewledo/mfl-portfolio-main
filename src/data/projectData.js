import imgNote from "../assets/img-projects/note-app.png";
import urbanStyle from "../assets/img-projects/urbanStyle.png";
import legalWeb from "../assets/img-projects/legalweb.webp";
import mediCare from "../assets/img-projects/medicare.jpg";
import astroFit from "../assets/img-projects/Astrofit.jpg";
import Verbenas from "../assets/img-projects/challenge-newyze.png";
import ReactEcommerce from "../assets/img-projects/ecommers.jpg";
import PortfolioDev from "../assets/img-projects/PortfolioDev.jpg";
import VintageTone from "../assets/img-projects/vintageToneApp.jpg";
import AstroEcommers from "../assets/img-projects/astroEcommers.jpg";
import CvBuilder from "../assets/img-projects/CvBuilder.png";

export const projects = [
  {
    title: "Homepage Redesign",
    description:
      "New design for homepage.",
    image: VintageTone.src,
    technologies: ["HTML", "CSS", "JavaScript"],
    demo: "https://vintage-tone-front-vue.vercel.app",
    code: "https://github.com/Lautaro-R-collins/VintageTone-Front-Vue.git",
    category: "fullstack",
    moreDetails: "/pages/case-studies/homepage-redesign",
  },
  {
    title: "React Tiendita",
    description:
      "E-commerce full stack desarrollado con React, Node.js y MongoDB. Incluye autenticación, carrito de compras, búsqueda, categorías, reseñas, etc.",
    image: ReactEcommerce.src,
    technologies: ["React", "Tailwind", "Express", "MongoDB"],
    demo: "https://react-e-commerce-three-phi.vercel.app",
    code: "https://github.com/Lautaro-R-collins/React-E-commerce.git",
    category: "fullstack",
  },
  {
    title: "Astro Ecommerce",
    description:
      "E-commerce frontend desarrollado con Astro y React. Incluye carrito de compras, categorías, y diseño responsivo.",
    image: AstroEcommers.src,
    technologies: ["React", "Astro", "Tailwind", "daisyUI"],
    demo: "https://e-commer-astro.vercel.app",
    code: "https://github.com/Lautaro-R-collins/E-commer-Astro.git",
    category: "frontend",
  },
  {
    title: "App organizacion",
    description:
      "App full-stack con funciones CRUD, creacion de tableros y listas, autentificacion de usuarios, desarrollada con MERN stack.",
    image: imgNote.src,
    technologies: ["React", "Tailwind", "Express", "MongoDB"],
    demo: "https://front-react-todo.onrender.com",
    code: "https://github.com/Lautaro-R-collins/Front-react-todo",
    category: "fullstack",
  },
  {
    title: "CV Builder",
    description:
      "Generador de Currículum multi-idioma profesional siguiendo el formato recomendado por Harvard y amigable con los ATS. ",
    image: CvBuilder.src,
    technologies: ["React", "contextAPI", "tailwind", "i18n"],
    demo: "https://cv-builder-pi-three.vercel.app",
    code: "https://github.com/Lautaro-R-collins/CV-Builder.git",
    category: "frontend",
  },
  {
    title: "E-commerce Urban Style",
    description:
      "E-commerce funcional de ropa y accesorios, con carrito de compras categorys y pasarela de pago desarrollado en React.",
    image: urbanStyle.src,
    technologies: ["React", "Tailwind", "Firebase"],
    demo: "https://proyecto-final-rodriguez-sable.vercel.app/",
    code: "https://github.com/Lautaro-R-collins/ProyectoFinal-Rodriguez.git",
    category: "fullstack",
  },
  {
    title: "Tienda Artesana",
    description:
      "Ecommerce Full-Stack para ver, comprar y vender tus productos, con login para usuarios y vendedores.",
    image:
      "https://i.pinimg.com/736x/c9/70/bf/c970bfbc24489e39418b2c1b1f8f74ef.jpg",
    technologies: ["React", "Node", "Express", "MongoDB"],
    demo: "https://c21-05-ft-node-react-mirror-frontend-64qbwssi2-muyvisual.vercel.app/",
    code: "https://github.com/No-Country-simulation/c21-05-ft-node-react",
    category: "fullstack",
  },
  {
    title: "Traker Ingresos-Gastos",
    description:
      "App que realiza operaciones CRUD para agregar, ver, editar y eliminar ingresos/gastos.",
    image:
      "https://i.pinimg.com/736x/a4/85/c4/a485c4da3e78f4f518ddbcdb6637bacf.jpg",
    technologies: ["React", "contextAPI"],
    demo: "https://traker-gastos-ingresos.onrender.com/",
    code: "https://github.com/Lautaro-R-collins/Traker-Gastos-Ingresos",
    category: "frontend",
  },
  {
    title: "App-clima",
    description:
      "Aplicación hecha con React que utiliza una API para mostrar el clima en tiempo real.",
    image:
      "https://i.pinimg.com/736x/10/6e/cd/106ecd1bfe5ed1c3defb83ea0f87a334.jpg",
    technologies: ["React", "contextAPI", "tailwind"],
    demo: "https://app-clima-om19.onrender.com/",
    code: "https://github.com/Lautaro-R-collins/app-clima",
    category: "frontend",
  },
  {
    title: "Portfolio developers astro",
    description:
      "This is a modern, responsive developer portfolio built with Astro and Tailwind CSS.",
    image: PortfolioDev.src,
    technologies: ["Astro", "tailwind", "JavaScript"],
    demo: "https://portfolio-developers-astro.vercel.app/",
    code:
      "https://github.com/Lautaro-R-collins/Portfolio-developers-astro.git",
    category: "frontend",
  },

  {
    title: "Legal Staff",
    description:
      "Web desarrollada con Astro y Tailwind, embudo de marketing para estudios jurídicos.",
    image: legalWeb.src,
    technologies: ["Astro", "tailwind", "JavaScript"],
    demo: "https://legal-staff.vercel.app/",
    code: "https://github.com/Lautaro-R-collins/legal-staff",
    category: "frontend",
  },
  {
    title: "Medicare",
    description:
      "Web desarrollada con Astro y Tailwind, embudo de marketing para Obras Sociales.",
    image: mediCare.src,
    technologies: ["Astro", "tailwind", "JavaScript"],
    demo: "https://obra-social-landing.vercel.app/",
    code: "https://github.com/Lautaro-R-collins/obra-social-landing.git",
    category: "frontend",
  },
  {
    title: "AstroFit",
    description:
      "Web desarrollada con Astro y Tailwind, embudo de marketing para asesorias fitness.",
    image: astroFit.src,
    technologies: ["Astro", "tailwind", "JavaScript"],
    demo: "https://gym-page-sandy.vercel.app/",
    code: "https://github.com/Lautaro-R-collins/GymPage.git",
    category: "frontend",
  },
  {
    title: "API REST para Ecommerce",
    description:
      "API RESTful construida con Node.js, Express y MongoDB para gestionar tareas con operaciones CRUD, Registro de usuarios y login con JWT.",
    image: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    technologies: ["Express", "Node.js", "MongoDB", "Mongoose"],
    demo: "https://react-e-commerce-three-phi.vercel.app",
    code: "https://github.com/Lautaro-R-collins/ApiRest-Ecommerce.git",
    category: "backend",
  },
  {
    title: "API REST Vintage Tone App",
    description:
      "API RESTful construida con Node.js, Express y MongoDB para gestionar tareas con operaciones CRUD, Registro de usuarios y login con JWT.",
    image: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    technologies: ["Express", "Node.js", "MongoDB", "Cloudinary"],
    demo: "https://vintage-tone-front-vue.vercel.app",
    code: "https://github.com/Lautaro-R-collins/VintageTone-API-REST.git",
    category: "backend",
  },
  {
    title: "API REST",
    description:
      "API RESTful construida con Express y MongoDB para gestionar tareas con operaciones CRUD, Registro de usuarios y login con JWT.",
    image: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    technologies: ["Express", "Node.js", "MongoDB", "Mongoose"],
    demo: "https://back-express-todo.onrender.com",
    code: "https://github.com/Lautaro-R-collins/Back-express-todo.git",
    category: "backend",
  },
  {
    title: "PlaniFy",
    description:
      "App Web para organizar tus proyectos, hecha con React + Vite, TypeScript y Tailwind para los estilos.",
    image:
      "https://i.pinimg.com/736x/8f/f0/bb/8ff0bbd0e5844ed254bede44522c8338.jpg",
    technologies: ["React", "Vite", "TypeScript", "Tailwind"],
    demo: "https://planify-1tu6.onrender.com/",
    code: "https://github.com/Lautaro-R-collins/PlaniFy-organization-app",
    category: "frontend",
  },
  {
    title: "Verbenas Paisajes",
    description:
      "Pagina estatica desarrollada con Astro y tailwind como reto para una startup.",
    image: Verbenas.src,
    technologies: ["Astro", "Tailwind", "JavaScript"],
    demo: "https://challenge-neowyze.onrender.com/",
    code: "https://github.com/Lautaro-R-collins/challenge-Neowyze.git",
    category: "frontend",
  },

  {
    title: "100 days coding in Js",
    description: "100 proyectos, realizados con HTML, CSS y JavaScript.",
    image:
      "https://i.pinimg.com/736x/3b/4f/4e/3b4f4e170fcb1795b88f4941f49df0a2.jpg",
    technologies: ["Next.js", "Tailwind", "GraphQL"],
    demo: "https://one00-proyects-web.onrender.com/",
    code: "https://github.com/Lautaro-R-collins/100-days-of-coding-in-JS",
    category: "frontend",
  },
];
