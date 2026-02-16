export const clinic = {
  name: "CENTRO INTEGRAL ESTÉTICA VANESA LÓPEZ",
  logo: "/images/logo.png",
  tagline: "Tu belleza en las mejores manos de Ciudad Real",
  description: "Centro Integral Estética Vanesa López es tu centro de referencia en Ciudad Real con más de 19 años cuidando la belleza de nuestras clientas. Especializadas en depilación, manicura y pedicura profesional, tratamientos faciales y maquillaje. Con 4.7 estrellas en Google y clientas que confían en nosotras desde hace más de una década, ofrecemos resultados visibles con un trato excepcional y personalizado.",
  colors: {
    primary: "#a97b61",
    secondary: "#33251d",
    accent: "#b7a7a6",
    neutral: "#f8f4f2"
  },
  phone: "616 29 97 01",
  whatsapp: "+34616299701",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de estética.",
  email: "",
  address: {
    street: "C. Estación Vía Crucis, 2, 13003 Ciudad Real, España",
    city: "Ciudad Real",
    province: "",
    postalCode: "13003",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=18419953488790193623&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=CENTRO%20INTEGRAL%20EST%C3%89TICA%20VANESA%20L%C3%93PEZ%20%4038.9897%2C-3.9288&z=16&output=embed",
  coordinates: {
    lat: 38.9897,
    lng: -3.9288
  },
  schedule: [
    {
      days: "lunes",
      hours: "Cerrado"
    },
    {
      days: "martes - viernes",
      hours: "10:00–14:00, 16:00–20:00"
    },
    {
      days: "sábado",
      hours: "10:00–14:00"
    },
    {
      days: "domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 4.7,
    count: 47,
    url: "https://maps.google.com/?cid=18419953488790193623&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    featured: [
      {
        author: "Nieves Del",
        rating: 5,
        text: "Maravilla de trabajo el que hacen aquí, llevo viniendo a este centro 19 años y cada día estoy más contenta de el resultado de cada experiencia. El mejor centro para cuidar de tu belleza. Son las mejores manos que me han tratado. Gracias por cuidar de nuestra piel día tras día",
        date: "Hace un año"
      },
      {
        author: "Sara Naranjo",
        rating: 5,
        text: "Unas profesionales de manual. Llevo en sus manos más de 10 años y pese a no vivir ya en ciudad real siempre que voy paso a hacerme algún trabajo. Son excelentes, tanto en depilación, manicura y pedicura, maquillajes y cualquier tratamiento.",
        date: "Hace 2 años"
      },
      {
        author: "saray lopez",
        rating: 5,
        text: "Vanesa es una gran profesional en el sector, todos los servicios son de 10. Raquel es una maravilla con sus manicuras y pedicuras. Trato excelente de ambas, siempre ofreciendo lo mejor de ellas y de la marca.",
        date: "Hace 2 años"
      },
      {
        author: "Laura Cabrera Caballero",
        rating: 5,
        text: "Fui a dar forma y depilar cejas y no pude salir más contenta con el servicio. Existen un montón de servicios que hacen de manera excepcional. Centro de belleza que recomiendo en Ciudad Real.",
        date: "Hace un año"
      },
      {
        author: "diana gomez",
        rating: 5,
        text: "Las chicas son súper agradables y profesionales.\nSi buscas un sitio del que salir radiante, este es el adecuado :)",
        date: "Hace 6 meses"
      }
    ]
  },
  services: [
    {
      id: "depilacion",
      name: "Depilación Profesional",
      description: "Técnicas de depilación avanzadas con resultados impecables y duraderos. Especialistas en diseño y depilación de cejas, consiguiendo la forma perfecta para tu rostro. Tratamientos adaptados a cada tipo de piel con productos de alta calidad.",
      benefits: [
        "Resultados profesionales y duraderos",
        "Diseño personalizado de cejas",
        "Técnicas suaves y efectivas"
      ],
      icon: "Flower2"
    },
    {
      id: "manicura-pedicura",
      name: "Manicura y Pedicura",
      description: "Cuidado completo de manos y pies con acabados impecables que perduran. Nuestras manicuras y pedicuras son reconocidas por su calidad excepcional y atención al detalle. Utilizamos esmaltes premium y técnicas profesionales para un resultado de 10.",
      benefits: [
        "Acabados profesionales de larga duración",
        "Cuidado integral de uñas y cutículas",
        "Productos y esmaltes de primera calidad"
      ],
      icon: "Hand"
    },
    {
      id: "tratamientos-faciales",
      name: "Tratamientos Faciales",
      description: "Cuidados personalizados para cada tipo de piel con productos premium. Tratamientos de hidratación profunda, antiedad y luminosidad que transforman tu rostro. Protocolos específicos diseñados para conseguir una piel radiante y saludable.",
      benefits: [
        "Diagnóstico personalizado de tu piel",
        "Productos profesionales de alta gama",
        "Resultados visibles desde la primera sesión"
      ],
      icon: "Sparkles"
    },
    {
      id: "maquillaje",
      name: "Maquillaje Profesional",
      description: "Servicio de maquillaje para eventos especiales, bodas y ocasiones importantes. Técnicas profesionales que realzan tu belleza natural con acabados impecables. Asesoramiento personalizado para conseguir el look perfecto para tu evento.",
      benefits: [
        "Maquillaje adaptado a cada ocasión",
        "Productos de larga duración",
        "Asesoramiento de imagen personalizado"
      ],
      icon: "Eye"
    },
    {
      id: "tratamientos-corporales",
      name: "Tratamientos Corporales",
      description: "Tratamientos reductores, reafirmantes y anticelulíticos con tecnología avanzada. Protocolos personalizados que combinan técnicas manuales y aparatología de última generación. Resultados medibles para conseguir la silueta que deseas.",
      benefits: [
        "Tecnología de última generación",
        "Planes personalizados y efectivos",
        "Seguimiento continuo de resultados"
      ],
      icon: "Zap"
    },
    {
      id: "micropigmentacion",
      name: "Micropigmentación",
      description: "Maquillaje semipermanente para cejas, labios y ojos con resultados naturales y armoniosos. Técnicas precisas que realzan tus rasgos de forma sutil y elegante. Despierte cada día perfectamente maquillada sin esfuerzo.",
      benefits: [
        "Resultados naturales y duraderos",
        "Diseño personalizado según tus facciones",
        "Ahorro de tiempo en tu rutina diaria"
      ],
      icon: "Heart"
    },
    {
      id: "extensiones-pestanas",
      name: "Extensiones de Pestañas",
      description: "Mirada impactante con extensiones pelo a pelo aplicadas con técnica profesional. Conseguimos un efecto natural o más voluminoso según tus preferencias. Productos hipoalergénicos de máxima calidad para un resultado espectacular.",
      benefits: [
        "Mirada más intensa y expresiva",
        "Aplicación pelo a pelo profesional",
        "Duración prolongada con cuidados adecuados"
      ],
      icon: "Eye"
    },
    {
      id: "depilacion-laser",
      name: "Depilación Láser",
      description: "Eliminación definitiva del vello con tecnología láser de última generación. Tratamientos seguros y efectivos adaptados a cada tipo de piel y vello. Di adiós al vello no deseado con resultados permanentes y piel suave.",
      benefits: [
        "Eliminación permanente del vello",
        "Tecnología láser avanzada y segura",
        "Sesiones rápidas y resultados duraderos"
      ],
      icon: "Zap"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta con Nosotras",
      description: "Llámanos al 616 29 97 01 o escríbenos por WhatsApp para reservar tu cita. Te asesoraremos sobre el tratamiento más adecuado para ti y resolveremos todas tus dudas."
    },
    {
      step: 2,
      title: "Consulta Personalizada",
      description: "En tu primera visita analizamos tus necesidades específicas y el estado actual de tu piel o zona a tratar. Diseñamos un plan personalizado con los tratamientos más efectivos para conseguir tus objetivos."
    },
    {
      step: 3,
      title: "Tratamiento Profesional",
      description: "Realizamos tu tratamiento con técnicas avanzadas, productos premium y la experiencia de más de 19 años cuidando la belleza. Cada sesión es una experiencia relajante donde te sentirás en las mejores manos."
    },
    {
      step: 4,
      title: "Resultados y Seguimiento",
      description: "Disfruta de resultados visibles y duraderos que superarán tus expectativas. Te acompañamos con un seguimiento personalizado y consejos profesionales para mantener y potenciar los resultados obtenidos."
    }
  ],
  whyUs: [
    {
      title: "Más de 19 Años de Experiencia",
      description: "Llevamos casi dos décadas cuidando la belleza en Ciudad Real con resultados excepcionales. Nuestras clientas confían en nosotras año tras año, muchas desde hace más de una década, porque saben que están en las mejores manos. La experiencia se nota en cada tratamiento.",
      icon: "Sparkles"
    },
    {
      title: "Valoración 4.7★ en Google",
      description: "Con 47 reseñas en Google y una valoración de 4.7 estrellas, nuestras clientas avalan la calidad excepcional de nuestros servicios. Destacan especialmente nuestra profesionalidad, el trato excelente y los resultados visibles en cada tratamiento. Tu satisfacción es nuestra mejor carta de presentación.",
      icon: "Heart"
    },
    {
      title: "Equipo Profesional Especializado",
      description: "Vanesa y Raquel forman un equipo de profesionales altamente cualificadas, cada una especializada en su área. Vanesa es experta en tratamientos de estética integral y depilación, mientras que Raquel destaca por sus manicuras y pedicuras excepcionales. Juntas ofrecen un servicio completo de máxima calidad.",
      icon: "Hand"
    },
    {
      title: "Especialistas en Depilación y Manicura",
      description: "Somos reconocidas en Ciudad Real por la excelencia de nuestros servicios de depilación, especialmente diseño de cejas, y por nuestras manicuras y pedicuras de calidad superior. Utilizamos técnicas avanzadas y productos premium que garantizan resultados impecables y duraderos que superan las expectativas.",
      icon: "Flower2"
    }
  ],
  team: [
    {
      name: "Vanesa López",
      role: "Directora y Especialista en Estética",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionadas por la belleza y el cuidado personal. En CENTRO INTEGRAL ESTÉTICA VANESA LÓPEZ nos dedicamos a realzar la belleza natural de cada clienta con tratamientos de calidad."
    },
    {
      name: "Raquel",
      role: "Especialista en Manicura y Pedicura",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionadas por la belleza y el cuidado personal. En CENTRO INTEGRAL ESTÉTICA VANESA LÓPEZ nos dedicamos a realzar la belleza natural de cada clienta con tratamientos de calidad."
    }
  ],
  gallery: [
    {
      src: "/images/gallery/1.webp",
      alt: "CENTRO INTEGRAL ESTÉTICA VANESA LÓPEZ - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "CENTRO INTEGRAL ESTÉTICA VANESA LÓPEZ - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "CENTRO INTEGRAL ESTÉTICA VANESA LÓPEZ - Imagen 3"
    },
    {
      src: "/images/hero.webp",
      alt: "CENTRO INTEGRAL ESTÉTICA VANESA LÓPEZ - Imagen 4"
    },
    {
      src: "/images/gallery/5.webp",
      alt: "CENTRO INTEGRAL ESTÉTICA VANESA LÓPEZ - Imagen 5"
    },
    {
      src: "/images/gallery/6.webp",
      alt: "CENTRO INTEGRAL ESTÉTICA VANESA LÓPEZ - Imagen 6"
    },
    {
      src: "/images/gallery/7.webp",
      alt: "CENTRO INTEGRAL ESTÉTICA VANESA LÓPEZ - Imagen 7"
    },
    {
      src: "/images/gallery/8.webp",
      alt: "CENTRO INTEGRAL ESTÉTICA VANESA LÓPEZ - Imagen 8"
    },
    {
      src: "/images/gallery/9.webp",
      alt: "CENTRO INTEGRAL ESTÉTICA VANESA LÓPEZ - Imagen 9"
    }
  ],
  faq: [
    {
      question: "¿Por qué elegir Centro Integral Estética Vanesa López?",
      answer: "Con más de 19 años de experiencia y una valoración de 4.7 estrellas en Google con 47 reseñas, somos el centro de estética de referencia en Ciudad Real. Nuestras clientas nos eligen por la calidad excepcional de nuestros servicios, especialmente en depilación, manicura y pedicura, y por el trato profesional y cercano de Vanesa y Raquel. Muchas de nuestras clientas llevan más de 10 años confiando en nosotras, e incluso vienen desde otras ciudades para seguir cuidando su belleza con nuestro equipo."
    },
    {
      question: "¿Cómo puedo reservar mi cita?",
      answer: "Reservar tu cita es muy sencillo. Puedes llamarnos directamente al 616 29 97 01 o escribirnos por WhatsApp al mismo número. Te atenderemos personalmente para encontrar el mejor horario según tu disponibilidad y el tratamiento que desees. Recomendamos reservar con antelación, especialmente para servicios como manicura, pedicura y maquillaje profesional, ya que tenemos alta demanda."
    },
    {
      question: "¿Qué servicios son los más demandados en el centro?",
      answer: "Nuestros servicios estrella son la depilación profesional, especialmente el diseño y depilación de cejas, y nuestras manicuras y pedicuras realizadas por Raquel, que tienen una demanda excepcional por su calidad y duración. También destacamos en tratamientos faciales personalizados y maquillaje profesional para eventos. Todos nuestros servicios cuentan con valoraciones excelentes de nuestras clientas."
    },
    {
      question: "¿Qué diferencia a vuestras manicuras y pedicuras?",
      answer: "Nuestras manicuras y pedicuras son reconocidas por su calidad excepcional y atención al detalle. Raquel, nuestra especialista, utiliza técnicas profesionales y productos premium que garantizan acabados impecables y de larga duración. El cuidado integral incluye tratamiento de cutículas, hidratación profunda y aplicación perfecta de esmaltes de alta gama. Muchas clientas destacan que son las mejores que han probado en Ciudad Real."
    },
    {
      question: "¿Ofrecéis tratamientos faciales personalizados?",
      answer: "Sí, en Centro Integral Estética Vanesa López realizamos un análisis completo de tu tipo de piel para diseñar tratamientos faciales totalmente personalizados. Utilizamos productos profesionales de marcas premium adaptados a las necesidades específicas de cada piel: hidratación, antiedad, luminosidad o tratamiento de imperfecciones. Nuestro objetivo es que tu piel luzca radiante y saludable con protocolos que realmente funcionan."
    },
    {
      question: "¿Realizáis depilación láser?",
      answer: "Sí, ofrecemos depilación láser con tecnología de última generación para la eliminación definitiva del vello. Este tratamiento es seguro, efectivo y se adapta a diferentes tipos de piel y vello. Las sesiones son rápidas y los resultados son permanentes, permitiéndote disfrutar de una piel suave sin preocuparte por la depilación tradicional. Te asesoraremos sobre el número de sesiones necesarias según tu caso particular."
    },
    {
      question: "¿Qué incluye el servicio de maquillaje profesional?",
      answer: "Nuestro servicio de maquillaje profesional incluye asesoramiento personalizado, preparación de la piel y aplicación de maquillaje adaptado a tu evento especial: bodas, celebraciones o cualquier ocasión importante. Utilizamos productos de alta gama de larga duración para garantizar que tu maquillaje se mantenga impecable durante horas. También ofrecemos pruebas previas para bodas y eventos importantes para que estés completamente segura del resultado."
    },
    {
      question: "¿Cuánto tiempo lleváis cuidando de la belleza en Ciudad Real?",
      answer: "Centro Integral Estética Vanesa López lleva más de 19 años siendo referencia en belleza y estética en Ciudad Real. Esta amplia experiencia nos ha permitido perfeccionar nuestras técnicas y construir relaciones de confianza duraderas con nuestras clientas. Muchas de ellas llevan más de 10 años viniendo al centro, y algunas incluso se desplazan desde otras ciudades porque valoran la calidad de nuestro trabajo y el trato profesional que ofrecemos."
    }
  ],
  seo: {
    titleTemplate: "%s | CENTRO INTEGRAL ESTÉTICA VANESA LÓPEZ",
    defaultTitle: "Centro Estética Vanesa López | Ciudad Real",
    defaultDescription: "Centro de estética en Ciudad Real con +19 años de experiencia. Especialistas en depilación, manicura, pedicura y tratamientos faciales. Valoración 4.7★. Llama al 616 29 97 01",
    keywords: [
      "centro estética Ciudad Real",
      "depilación Ciudad Real",
      "manicura Ciudad Real",
      "pedicura Ciudad Real",
      "tratamientos faciales Ciudad Real",
      "Vanesa López Ciudad Real",
      "depilación cejas Ciudad Real",
      "maquillaje profesional Ciudad Real",
      "micropigmentación Ciudad Real",
      "depilación láser Ciudad Real",
      "estética Ciudad Real",
      "centro belleza Ciudad Real"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "CENTRO INTEGRAL ESTÉTICA VANESA LÓPEZ",
    cif: "",
    registeredAddress: "C. Estación Vía Crucis, 2, 13003 Ciudad Real, España, Ciudad Real"
  },
  heroHeadline: [
    "Tu Centro de",
    "Belleza",
    "en Ciudad Real"
  ],
  heroDescription: "En pleno corazón de Ciudad Real, Vanesa López y su equipo transforman tu belleza con tratamientos profesionales y personalizados. Más de 19 años de experiencia nos avalan como el centro de estética de confianza donde cada detalle cuenta para que salgas radiante.",
  specialty: "Depilación y Manicura",
  ctaLabel: "Realza tu Belleza",
  ctaHeadline: "¿Lista para verte y sentirte radiante?",
  ctaDescription: "Reserva tu cita en el centro de estética con mejor valoración de Ciudad Real. Llámanos al 616 29 97 01 y descubre por qué nuestras clientas confían en nosotras desde hace años.",
  statsLabel: "Clientas",
  schemaType: "BeautySalon",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Técnicas avanzadas de estética y belleza para realzar tu imagen y cuidar de ti.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la belleza en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu belleza, nuestra pasión",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para realzar tu belleza natural.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestras clientas",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestro centro",
    galleryDescription: "Un espacio diseñado para tu bienestar y relajación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestras clientas.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializadas",
    teamDescription: "Experiencia y pasión al servicio de tu belleza"
  }
}

export type Clinic = typeof clinic
