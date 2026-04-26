import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  de: {
    translation: {
      nav: {
        templates: 'Vorlagen',
        pricing: 'Preise',
        howItWorks: 'So funktioniert\'s',
        start: 'Jetzt starten'
      },
      hero: {
        overline: 'Digitale Hochzeitseinladungen',
        title: 'Dein Jawort. Unvergesslich.',
        subtitle: 'Personalisierte digitale Hochzeitseinladungen mit RSVP, interaktiven Karten und deiner eigenen Hochzeitsseite.',
        ctaPrimary: 'Vorlagen entdecken',
        ctaSecondary: 'Demo ansehen'
      },
      socialProof: 'Bereits {{count}} Paare haben mit Jawort eingeladen',
      howItWorks: {
        title: 'So funktioniert\'s',
        step1: {
          title: 'Vorlage wählen',
          desc: 'Wähle aus unserer exklusiven Kollektion.'
        },
        step2: {
          title: 'Personalisieren',
          desc: 'Füge Namen, Datum, Ort und Fotos hinzu.'
        },
        step3: {
          title: 'Teilen & genießen',
          desc: 'Teile per WhatsApp, Email oder Link.'
        }
      },
      templates: {
        title: 'Exklusive Vorlagen',
        subtitle: 'Wähle aus unseren kuratierten Designs, die eure Persönlichkeit perfekt widerspiegeln.',
        demo: 'Demo ansehen'
      },
      features: {
        title: 'Unsere Features',
        rsvp: 'RSVP Management — Gästeantworten in Echtzeit',
        map: 'Interaktive Karte — Anfahrtsbeschreibung integriert',
        music: 'Musik — Euer Lieblingssong als Hintergrund',
        domain: 'Eigene Domain — paare.jawort.digital',
        multilingual: 'Mehrsprachig — Deutsch & Englisch',
        gdpr: 'DSGVO-konform — Datenschutz garantiert'
      },
      pricing: {
        title: 'Wähle dein Paket',
        compare: 'Detaillierter Vergleich',
        select: 'Auswählen',
        feature: 'Feature',
        featuresList: {
          guests: 'Unbegrenzte Gäste',
          rsvp: 'Echtzeit RSVP',
          maps: 'Google Maps Integration',
          music: 'Hintergrundmusik',
          domain: 'Eigene Subdomain',
          bilingual: 'Mehrsprachig (DE/EN)',
          support: 'Priority Support',
          updates: 'Unbegrenzte Updates'
        },
        starter: {
          name: 'Starter',
          price: '99',
          features: ['1 Vorlage', 'RSVP', 'Teilbarer Link']
        },
        premium: {
          name: 'Premium',
          price: '149',
          features: ['Eigene Domain', 'Musik', 'Interaktive Karte', 'Gästeliste']
        },
        deluxe: {
          name: 'Deluxe',
          price: '199',
          features: ['Alles Inklusive', 'Zweisprachig', 'Priority Support', 'Unbegrenzte Updates']
        }
      },
      templatesPage: {
        title: 'Unsere Vorlagen',
        subtitle: 'Entdecke Designs, die so einzigartig sind wie eure Liebe. Jede Vorlage ist vollständig personalisierbar.',
        liveDemo: 'Live Demo'
      },
      howItWorksPage: {
        title: 'So funktioniert\'s',
        subtitle: 'In wenigen Schritten zu eurer perfekten digitalen Hochzeitseinladung.',
        ready: 'Bereit loszulegen?',
        start: 'Jetzt Design wählen',
        step1: {
          title: 'Design auswählen',
          desc: 'Wähle aus unserer exklusiven Kollektion von minimalistischen und luxuriösen Vorlagen.'
        },
        step2: {
          title: 'Inhalte anpassen',
          desc: 'Füge eure Namen, das Datum, die Location und eure persönliche Liebesgeschichte hinzu.'
        },
        step3: {
          title: 'Besondere Features',
          desc: 'Wähle euren Song, füge eine interaktive Karte hinzu und aktiviere das RSVP-Management.'
        },
        step4: {
          title: 'Link teilen',
          desc: 'Erhalte euren persönlichen Link (z.B. sarah-marc.jawort.digital) und teile ihn per WhatsApp.'
        },
        step5: {
          title: 'Antworten erhalten',
          desc: 'Behalte den Überblick über alle Zu- und Absagen in eurem privaten Dashboard in Echtzeit.'
        },
        step6: {
          title: 'Stressfrei feiern',
          desc: 'Konzentriert euch auf das Wesentliche, während wir die digitale Koordination übernehmen.'
        }
      },
      contactPage: {
        title: 'Kontaktiere uns',
        subtitle: 'Habt ihr Fragen zu unseren Vorlagen oder benötigt ihr eine individuelle Lösung? Wir sind für euch da.',
        name: 'Eure Namen',
        email: 'Email Adresse',
        message: 'Nachricht',
        placeholderName: 'Sarah & Marc',
        placeholderEmail: 'beispiel@mail.de',
        placeholderMessage: 'Wie können wir euch helfen?',
        send: 'Nachricht senden',
        office: 'Office',
        location: 'Berlin, Deutschland'
      },
      testimonials: {
        title: 'Was Paare sagen',
        sarah: 'Die beste Entscheidung für unsere Planung. Unsere Gäste waren begeistert von der digitalen Einladung!',
        lukas: 'So einfach zu bedienen und das Design ist einfach nur Premium. Absolut empfehlenswert.',
        thomas: 'RSVP in Echtzeit zu sehen hat uns so viel Stress erspart. Danke Jawort!'
      },
      finalCTA: {
        title: 'Bereit für euer Jawort?',
        subtitle: 'Einmalige Zahlung. Kein Abo. Für immer online.',
        button: 'Jetzt Einladung erstellen'
      },
      footer: {
        madeIn: 'Mit Liebe in Deutschland gemacht',
        platform: 'Plattform',
        legal: 'Rechtliches',
        rights: 'Alle Rechte vorbehalten.',
        imprint: 'Impressum',
        privacy: 'Datenschutz',
        terms: 'AGB'
      },
      cookie: {
        text: 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies gemäß unserer Datenschutzrichtlinie zu.',
        accept: 'Akzeptieren',
        decline: 'Ablehnen'
      }
    }
  },
  en: {
    translation: {
      nav: {
        templates: 'Templates',
        pricing: 'Pricing',
        howItWorks: 'How it works',
        start: 'Get started'
      },
      hero: {
        overline: 'Digital Wedding Invitations',
        title: 'Jawort. Unforgettable.',
        subtitle: 'Personalized digital wedding invitations with RSVP, interactive maps, and your own wedding page.',
        ctaPrimary: 'Explore Templates',
        ctaSecondary: 'View Demo'
      },
      socialProof: 'Already {{count}} couples have invited with Jawort',
      howItWorks: {
        title: 'How It Works',
        step1: {
          title: 'Choose Template',
          desc: 'Select from our exclusive collection.'
        },
        step2: {
          title: 'Personalize',
          desc: 'Add names, date, venue, and photos.'
        },
        step3: {
          title: 'Share & Enjoy',
          desc: 'Share via WhatsApp, Email, or Link.'
        }
      },
      templates: {
        title: 'Exclusive Templates',
        subtitle: 'Choose from our curated designs that perfectly reflect your personality.',
        demo: 'View Demo'
      },
      features: {
        title: 'Our Features',
        rsvp: 'RSVP Management — Real-time guest responses',
        map: 'Interactive Map — Integrated directions',
        music: 'Music — Your favorite song as background',
        domain: 'Custom Domain — couples.jawort.digital',
        multilingual: 'Bilingual — German & English',
        gdpr: 'GDPR Compliant — Data protection guaranteed'
      },
      pricing: {
        title: 'Choose your package',
        compare: 'Detailed Comparison',
        select: 'Select',
        feature: 'Feature',
        featuresList: {
          guests: 'Unlimited Guests',
          rsvp: 'Real-time RSVP',
          maps: 'Google Maps Integration',
          music: 'Background Music',
          domain: 'Custom Subdomain',
          bilingual: 'Bilingual (DE/EN)',
          support: 'Priority Support',
          updates: 'Unlimited Updates'
        },
        starter: {
          name: 'Starter',
          price: '99',
          features: ['1 Template', 'RSVP', 'Shareable Link']
        },
        premium: {
          name: 'Premium',
          price: '149',
          features: ['Custom Domain', 'Music', 'Interactive Map', 'Guest List']
        },
        deluxe: {
          name: 'Deluxe',
          price: '199',
          features: ['Everything Included', 'Bilingual', 'Priority Support', 'Unlimited Updates']
        }
      },
      templatesPage: {
        title: 'Our Templates',
        subtitle: 'Discover designs as unique as your love. Every template is fully personalizable.',
        liveDemo: 'Live Demo'
      },
      howItWorksPage: {
        title: 'How It Works',
        subtitle: 'Your perfect digital wedding invitation in just a few steps.',
        ready: 'Ready to get started?',
        start: 'Choose Design Now',
        step1: {
          title: 'Choose Design',
          desc: 'Select from our exclusive collection of minimalist and luxury templates.'
        },
        step2: {
          title: 'Customize Content',
          desc: 'Add your names, date, location, and your personal love story.'
        },
        step3: {
          title: 'Special Features',
          desc: 'Select your song, add an interactive map, and enable RSVP management.'
        },
        step4: {
          title: 'Share Link',
          desc: 'Get your personal link (e.g. sarah-marc.jawort.digital) and share it via WhatsApp.'
        },
        step5: {
          title: 'Receive Responses',
          desc: 'Keep track of all acceptances and declines in your private real-time dashboard.'
        },
        step6: {
          title: 'Celebrate Stress-Free',
          desc: 'Focus on what matters while we handle the digital coordination.'
        }
      },
      contactPage: {
        title: 'Contact Us',
        subtitle: 'Do you have questions about our templates or need a custom solution? We are here for you.',
        name: 'Your Names',
        email: 'Email Address',
        message: 'Message',
        placeholderName: 'Sarah & Marc',
        placeholderEmail: 'example@mail.com',
        placeholderMessage: 'How can we help you?',
        send: 'Send Message',
        office: 'Office',
        location: 'Berlin, Germany'
      },
      testimonials: {
        title: 'What couples say',
        sarah: 'The best decision for our planning. Our guests were thrilled with the digital invitation!',
        lukas: 'So easy to use and the design is just premium. Absolutely recommended.',
        thomas: 'Seeing RSVP in real-time saved us so much stress. Thanks Jawort!'
      },
      finalCTA: {
        title: 'Ready for your Jawort?',
        subtitle: 'One-time payment. No subscription. Online forever.',
        button: 'Create Invitation Now'
      },
      footer: {
        madeIn: 'Made with love in Germany',
        platform: 'Platform',
        legal: 'Legal',
        rights: 'All rights reserved.',
        imprint: 'Imprint',
        privacy: 'Privacy',
        terms: 'Terms'
      },
      cookie: {
        text: 'We use cookies to improve your experience. By using our website, you agree to the use of cookies according to our privacy policy.',
        accept: 'Accept',
        decline: 'Decline'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'de',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
