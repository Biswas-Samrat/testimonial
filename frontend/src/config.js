// Basic dictionary structure for English and Spanish
export const languageMap = {
    'en': {
        home: 'Home',
        customers: 'Customers',
        features: 'Features',
        integrations: 'Integrations',
        pricing: 'Pricing',
        signIn: 'Sign in',
        signUp: 'Sign up',
        wallOfLove: 'Our Wall of Love',
        embedWidgets: 'Embed Widgets',
        chromeExtension: 'Chrome Extension',
        welcome: 'Welcome to the Home Page!',
        pageTitle: (page) => `This is the ${page} page.`,
        switchLang: 'Switch Language',
    },
    'es': {
        home: 'Inicio',
        customers: 'Clientes',
        features: 'Características',
        integrations: 'Integraciones',
        pricing: 'Precios',
        signIn: 'Iniciar sesión',
        signUp: 'Registrarse',
        wallOfLove: 'Nuestro Muro de Amor',
        embedWidgets: 'Widgets Incrustados',
        chromeExtension: 'Extensión de Chrome',
        welcome: '¡Bienvenido a la página de inicio!',
        pageTitle: (page) => `Esta es la página de ${page}.`,
        switchLang: 'Cambiar Idioma',
    }
};

export const defaultLang = 'en';