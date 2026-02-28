export const getContacts = () => [
  {
    id: 1,
    name: "Juan",
    lastMessage: "Hola, ¿cómo estás?",
    messages: [
      { id: 1, text: "Hola, ¿cómo estás?", send_by_me: false, created_at: "2024-06-01T12:00:00Z", is_read: true },
      { id: 2, text: "Bien, gracias!", send_by_me: true, created_at: "2024-06-01T12:05:00Z", is_read: true },
    ]
  },
  {
    id: 2,
    name: "Maria",
    lastMessage: "¿Qué tal?",
    messages: [
      { id: 1, text: "¿Qué tal?", send_by_me: false, created_at: "2024-06-02T09:00:00Z", is_read: true }
    ]
  },
  {
    id: 3,
    name: "Pedro",
    lastMessage: "Adiós!",
    messages: [
      { id: 1, text: "Adiós!", send_by_me: false, created_at: "2024-06-03T18:00:00Z", is_read: true }
    ]
  }
];