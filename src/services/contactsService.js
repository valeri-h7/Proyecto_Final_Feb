export const getContacts = () => [
  {
    id: 1,
    name: "Tony Stark",
    avatar: "https://www.pngkey.com/png/detail/201-2019866_icons-de-tony-stark-.png",
    messages: [
      { id: 1, text: "Necesito reparación inmediata de la Torre Stark.", send_by_me: false, created_at: "2012-05-27T09:15:00Z", is_read: true },
      { id: 2, text: "Buenas tardes. Daño estructural o superficial?", send_by_me: true, created_at: "2012-05-27T09:17:00Z", is_read: true },
      { id: 3, text: "Digamos... que hubo una invasión alienígena con portal interdimensional.", send_by_me: false, created_at: "2012-05-27T09:19:00Z", is_read: true },
      { id: 4, text: "Okay.... Incluye laboratorio y piso de energía?", send_by_me: true, created_at: "2012-05-27T09:21:00Z", is_read: true },
      { id: 5, text: "Sí, y ventanales blindados esta vez. Nada de sorpresas.", send_by_me: false, created_at: "2012-05-27T09:23:00Z", is_read: true },
      { id: 6, text: "Diagnóstico preliminar en 2 horas.", send_by_me: true, created_at: "2012-05-27T09:25:00Z", is_read: true }
    ]
  },
  {
    id: 2,
    name: "Thor",
      avatar: "https://i.pinimg.com/originals/38/b2/5d/38b25df484621b2cf0b62a5bdc50d209.png",
    messages: [
      { id: 1, text: "El piso superior huele a quemado por rayos recientes.", send_by_me: false, created_at: "2012-05-27T09:40:00Z", is_read: true },
      { id: 2, text: "Confirmamos sobrecarga eléctrica. Se revisan sistemas de ventilación.", send_by_me: true, created_at: "2012-05-27T09:42:00Z", is_read: true },
      { id: 3, text: "Que ningún rayo futuro lo afecte.", send_by_me: false, created_at: "2012-05-27T09:44:00Z", is_read: true },
      { id: 4, text: "Todo controlado.", send_by_me: true, created_at: "2012-05-27T09:46:00Z", is_read: true }
    ]
  },
  {
    id: 3,
    name: "Hulk",
    avatar: "https://i.pinimg.com/736x/5f/04/92/5f0492b310743ddd5b72db51de193054.jpg",
    messages: [
      { id: 1, text: "Hulk vio escombros pesados.", send_by_me: false, created_at: "2012-05-27T09:30:00Z", is_read: true },
      { id: 2, text: "Sí, reforzamos columnas y retiramos escombros peligrosos.", send_by_me: true, created_at: "2012-05-27T09:32:00Z", is_read: true },
      { id: 3, text: "HULK ayuda si necesitan fuerza extra.", send_by_me: false, created_at: "2012-05-27T09:34:00Z", is_read: true },
      { id: 4, text: "Gracias, Hulk, pero tenemos maquinaria para eso 😅", send_by_me: true, created_at: "2012-05-27T09:35:00Z", is_read: true }
    ]
  },
  {
    id: 4,
    name: "Natasha",
    avatar: "https://i.pinimg.com/736x/00/d9/ee/00d9ee8d4c975611c429889aab654593.jpg",
    messages: [
      { id: 1, text: "Zona oeste tiene restos de tecnología alienígena.", send_by_me: false, created_at: "2012-05-27T09:50:00Z", is_read: true },
      { id: 2, text: "Aislada y segura, nadie entra sin autorización.", send_by_me: true, created_at: "2012-05-27T09:52:00Z", is_read: true },
      { id: 3, text: "Bien. Mantener vigilancia hasta que llegue el equipo de análisis.", send_by_me: false, created_at: "2012-05-27T09:55:00Z", is_read: true }
    ]
  },
  {
    id: 5,
    name: "Steve Rogers",
    avatar: "https://toppng.com/uploads/preview/free-icons-captain-america-11553541790llhrflvlzz.png",
    messages: [
      { id: 1, text: "¿Cómo va la reparación del cuartel general?", send_by_me: false, created_at: "2012-05-27T10:00:00Z", is_read: true },
      { id: 2, text: "En progreso, con refuerzos estructurales.", send_by_me: true, created_at: "2012-05-27T10:05:00Z", is_read: true },
      { id: 3, text: "Excelente, necesitamos estar preparados.", send_by_me: false, created_at: "2012-05-27T10:10:00Z", is_read: true }
    ]
  },
  {
    id: 6,
    name: "Clint",
    avatar: "https://i.pinimg.com/474x/cd/5c/0e/cd5c0e6f266b17e730fced873cd0083a.jpg",
    messages: [
      {id: 1, 
      text: "Stark me dijo que ustedes están coordinando las reparaciones externas.", 
      send_by_me: false, 
      created_at: "2012-05-27T10:15:00Z", 
      is_read: true 
    },
    { 
      id: 2, 
      text: "Así es. Estamos evaluando daños en fachadas y estructuras altas.", 
      send_by_me: true, 
      created_at: "2012-05-27T10:17:00Z", 
      is_read: true 
    },
    { 
      id: 3, 
      text: "Hay restos del portal incrustados en varios edificios. No sería buena idea que alguien los toque.", 
      send_by_me: false, 
      created_at: "2012-05-27T10:19:00Z", 
      is_read: true 
    },
    { 
      id: 4, 
      text: "Recibido. Enviaremos equipo con protocolo de contención.", 
      send_by_me: true, 
      created_at: "2012-05-27T10:21:00Z", 
      is_read: true 
    },
    { 
      id: 5, 
      text: "Perfecto. Prefiero dispararle a algo en movimiento que a un edificio inestable.", 
      send_by_me: false, 
      created_at: "2012-05-27T10:23:00Z", 
      is_read: true
    }
  ]
  },

  {
   id: 7,
    name: "Nick Fury",
    avatar: "https://p7.hiclipart.com/preview/570/227/591/nick-fury-black-widow-thor-s-h-i-e-l-d-marvel-cinematic-universe-eagle-security-logo.jpg",
    messages: [
      { id: 1, 
      text: "Stark me dio su contacto. Necesitamos evaluación inmediata en Manhattan.", 
      send_by_me: false, 
      created_at: "2012-05-28T08:10:00Z", 
      is_read: true 
    },
    { 
      id: 2, 
      text: "Buenos días. Daños estructurales o tecnológicos?", 
      send_by_me: true, 
      created_at: "2012-05-28T08:12:00Z", 
      is_read: true 
    },
    { 
      id: 3, 
      text: "Ambos. Restos de tecnología alienígena siguen activos en algunas zonas.", 
      send_by_me: false, 
      created_at: "2012-05-28T08:14:00Z", 
      is_read: true 
    },
    { 
      id: 4, 
      text: "Entendido. Enviaremos equipo especializado y protocolo de contención.", 
      send_by_me: true, 
      created_at: "2012-05-28T08:16:00Z", 
      is_read: true 
    },
    { 
      id: 5, 
      text: "Mantengan discreción. Esto no debe llegar a la prensa.", 
      send_by_me: false, 
      created_at: "2012-05-28T08:18:00Z", 
      is_read: true 
    }
  ]
},
{
    id: 8,
    name: "Maria Hill",
    avatar: "https://p7.hiclipart.com/preview/570/227/591/nick-fury-black-widow-thor-s-h-i-e-l-d-marvel-cinematic-universe-eagle-security-logo.jpg",
    messages: [
      {id: 1, 
      text: "Tenemos reportes de estructuras inestables cerca de la 42nd Street.", 
      send_by_me: false, 
      created_at: "2012-05-28T09:05:00Z", 
      is_read: true 
    },
    { 
      id: 2, 
      text: "Riesgo inmediato para civiles?", 
      send_by_me: true, 
      created_at: "2012-05-28T09:07:00Z", 
      is_read: true 
    },
    { 
      id: 3, 
      text: "Evacuación parcial ya realizada. Necesitamos refuerzo estructural urgente.", 
      send_by_me: false, 
      created_at: "2012-05-28T09:09:00Z", 
      is_read: true 
    },
    { 
      id: 4, 
      text: "Enviamos equipo técnico en 30 minutos.", 
      send_by_me: true, 
      created_at: "2012-05-28T09:11:00Z", 
      is_read: true 
    },
    { 
      id: 5, 
      text: "Perfecto. Fury quiere resultados antes del anochecer.", 
      send_by_me: false, 
      created_at: "2012-05-28T09:13:00Z", 
      is_read: true 
    }
  ]
},
{
    id: 9,
    name: "Erik Selvig",
    avatar: "https://w7.pngwing.com/pngs/755/833/png-transparent-night-sky-circle-astronomical-object-astronomy-watercolor-sky-blue-astronomical-object-space.png",
    messages: [
      {id: 1, 
      text: "Necesito ayuda para trasladar equipo científico desde Stark Tower.", 
      send_by_me: false, 
      created_at: "2012-05-28T10:20:00Z", 
      is_read: true 
    },
    { 
      id: 2, 
      text: "Equipo delicado o contaminado?", 
      send_by_me: true, 
      created_at: "2012-05-28T10:22:00Z", 
      is_read: true 
    },
    { 
      id: 3, 
      text: "Posible radiación residual del portal. Prefiero no correr riesgos.", 
      send_by_me: false, 
      created_at: "2012-05-28T10:24:00Z", 
      is_read: true 
    },
    { 
      id: 4, 
      text: "Entendido. Activamos protocolo de transporte seguro.", 
      send_by_me: true, 
      created_at: "2012-05-28T10:26:00Z", 
      is_read: true 
    },
    { 
      id: 5, 
      text: "Gracias. Esta vez intentaremos no abrir nada interdimensional.", 
      send_by_me: false, 
      created_at: "2012-05-28T10:28:00Z", 
      is_read: true 
    }
  ]
}
];