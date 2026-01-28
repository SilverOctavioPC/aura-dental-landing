import {
  SmilePlus,
  ScanFace,
  Activity,
  Sparkles,
  Bone,
  Baby,
  Stethoscope,
  HeartHandshake,
  ShieldCheck,
  Award
} from 'lucide-react';

export const siteContent = {
  general: {
    brandName: "Aura",
    brandNameHighlight: "Dental",
    whatsappNumber: "+529513081091",
    whatsappMessage:
      "Hola, vi su sitio web y me gustaría agendar una valoración dental.",
    phoneDisplay: "951 308 1091",
    phoneSecondary: "",
    address: {
      line1: "C. Violetas 401, Reforma",
      line2: "68050 Oaxaca de Juárez, Oax.",
      googleMapsLink: "https://share.google/S81WBDbxf1PlgOP0Z",
      mapEmbedUrl: "https://maps.google.com/maps?width=100%25&height=600&hl=es&q=C.%20Violetas%20401,%20Reforma,%2068050%20Oaxaca%20de%20Ju%C3%A1rez,%20Oax.&t=&z=16&ie=UTF8&iwloc=B&output=embed"
    },
    schedule: {
      weekdays: "Lunes a Viernes · 09:00 AM – 08:00 PM",
      saturday: "Sábados · 09:00 AM – 03:00 PM"
    }
  },

  hero: {
    title: "Odontología integral de alto nivel en",
    titleHighlight: "Oaxaca",
    subtitle:
      "Diagnóstico preciso, tratamientos personalizados y un entorno clínico diseñado para tu tranquilidad.",
    ctaCall: "Llamar a clínica",
    ctaWhatsapp: "Agendar valoración",
    image: "/assets/hero/portada.jpeg"
  },

  about: {
    sectionTitle: "Quiénes Somos",
    mainHeading: "Cuidado dental con enfoque profesional",
    description:
      "Aura Dental es una clínica enfocada en la prevención, el diagnóstico avanzado y el tratamiento odontológico integral. Nuestro compromiso es ofrecer atención segura, ética y basada en evidencia clínica.",
    cards: [
      {
        icon: HeartHandshake,
        title: "Trato humano y cercano",
        description:
          "Acompañamos al paciente en todo su proceso con claridad, empatía y atención personalizada."
      },
      {
        icon: ShieldCheck,
        title: "Control clínico e higiene",
        description:
          "Protocolos estrictos de esterilización, desinfección y seguridad en cada consulta."
      },
      {
        icon: Award,
        title: "Atención especializada",
        description:
          "Especialistas capacitados que aplican técnicas modernas y tratamientos actualizados."
      }
    ]
  },

  services: {
    title: "Servicios Odontológicos",
    description:
      "Atención dental integral orientada a la salud, función y estética bucal.",
    items: [
      {
        title: "Ortodoncia",
        description:
          "Corrección de alineación dental y mordida mediante tratamientos personalizados.",
        icon: SmilePlus
      },
      {
        title: "Periodoncia",
        description:
          "Tratamiento y prevención de enfermedades de encías y tejidos de soporte.",
        icon: ScanFace
      },
      {
        title: "Endodoncia",
        description:
          "Eliminación de infecciones dentales preservando la estructura del diente.",
        icon: Activity
      },
      {
        title: "Rehabilitación Oral",
        description:
          "Restauración funcional y estética de piezas dentales dañadas o perdidas.",
        icon: Sparkles
      },
      {
        title: "Implantes Dentales",
        description:
          "Soluciones fijas y duraderas para la reposición de dientes ausentes.",
        icon: Bone
      },
      {
        title: "Odontología Infantil",
        description:
          "Atención preventiva y correctiva para niños en un entorno seguro y amigable.",
        icon: Baby
      },
      {
        title: "Cirugía Bucal",
        description:
          "Procedimientos quirúrgicos controlados con tecnología y diagnóstico previo.",
        icon: Stethoscope
      }
    ]
  },

  team: {
    title: "Equipo Clínico",
    description:
      "Profesionales comprometidos con la salud bucal y la confianza del paciente.",
    members: [
      {
        name: "Dr. Alejandro Morales",
        role: "Cirujano Dentista",
        bio:
          "Especialista en rehabilitación oral y diagnóstico clínico con enfoque integral.",
        image: "/assets/team/dr-alejandro.jpeg"
      },
      {
        name: "Dra. Fernanda López",
        role: "Odontopediatra",
        bio:
          "Experiencia en atención dental infantil enfocada en prevención y educación.",
        image: "/assets/team/dra-fernanda.jpeg"
      },
      {
        name: "Dr. Ricardo Sánchez",
        role: "Endodoncista",
        bio:
          "Especialista en tratamientos de conductos y control del dolor dental.",
        image: "/assets/team/dr-ricardo.jpeg"
      }
    ]
  },

  contact: {
    sectionTitle: "Contacto",
    heading: "Agenda tu consulta con nosotros",
    ctaButton: "Agendar por WhatsApp"
  }
};
