(function () {
  const pathname = window.location.pathname.replace(/\\/g, '/').toLowerCase();
  const inPages = pathname.includes('/pages/');

  const routes = {
    home: inPages ? '../index.html' : 'index.html',
    about: inPages ? 'about.html' : 'pages/about.html',
    services: inPages ? 'services.html' : 'pages/services.html',
    membership: inPages ? 'membership.html' : 'pages/membership.html',
    booking: inPages ? 'booking.html' : 'pages/booking.html',
    shop: inPages ? 'shop.html' : 'pages/shop.html',
    contact: inPages ? 'contact.html' : 'pages/contact.html',
    faq: inPages ? '../index.html#faqs' : 'index.html#faqs',
    gallery: inPages ? '../index.html#gallery' : 'index.html#gallery',
    privacy: inPages ? 'contact.html' : 'pages/contact.html',
    terms: inPages ? 'contact.html' : 'pages/contact.html'
  };

  const phone = '+2347048050420';
  const whatsapp = 'https://wa.me/2347048050420?text=Hello%20MM%20Fitness';
  const maps = 'https://www.google.com/maps/search/?api=1&query=11%2F13%20Adebayo%20Johnson%20Street%2C%20Pako%20Bus%20Stop%2C%20Dopemu%2C%20Lagos';
  const email = 'mailto:mmfitnesssstudio@gmail.com';
  const newsletterEmail = 'mailto:mmfitnesssstudio@gmail.com?subject=Newsletter%20Signup';
  const socialInstagram = 'https://www.instagram.com/';
  const socialYouTube = 'https://www.youtube.com/';

  const normalize = (value) => value.replace(/\s+/g, ' ').trim().toLowerCase();
  const textOf = (element) => normalize(element.textContent || '');

  const setAnchor = (match, href, { exact = false, target = null, rel = null } = {}) => {
    document.querySelectorAll('a').forEach((anchor) => {
      const text = textOf(anchor);
      if ((exact ? text === match : text.includes(match)) && ['#', '', null].includes(anchor.getAttribute('href'))) {
        anchor.setAttribute('href', href);
        if (target) {
          anchor.setAttribute('target', target);
        }
        if (rel) {
          anchor.setAttribute('rel', rel);
        }
      }
    });
  };

  const setButton = (match, handler, { exact = false } = {}) => {
    document.querySelectorAll('button').forEach((button) => {
      const text = textOf(button);
      const aria = normalize(button.getAttribute('aria-label') || '');
      if (button.closest('form')) {
        return;
      }
      if ((text && (exact ? text === match : text.includes(match))) || (aria && (exact ? aria === match : aria.includes(match)))) {
        button.type = 'button';
        button.addEventListener('click', (event) => {
          event.preventDefault();
          handler(button);
        });
      }
    });
  };

  const setFormMailto = () => {
    const form = document.querySelector('form');
    if (!form) {
      return;
    }
    form.setAttribute('action', email);
    form.setAttribute('method', 'post');
    form.setAttribute('enctype', 'text/plain');
  };

  const setSectionIdByButton = (buttonLabel, sectionId) => {
    const button = [...document.querySelectorAll('button, a')].find((el) => textOf(el).includes(buttonLabel.toLowerCase()));
    if (!button) {
      return;
    }
    const section = button.closest('section');
    if (section && !section.id) {
      section.id = sectionId;
    }
  };

  const setSectionIdByHeading = (headingLabel, sectionId) => {
    const heading = [...document.querySelectorAll('h1, h2, h3')].find((el) => textOf(el).includes(headingLabel.toLowerCase()));
    const section = heading && heading.closest('section');
    if (section && !section.id) {
      section.id = sectionId;
    }
  };

  setAnchor('home', routes.home, { exact: true });
  setAnchor('mm fitness', routes.home, { exact: true });
  setAnchor('about', routes.about, { exact: true });
  setAnchor('about us', routes.about);
  setAnchor('services', routes.services, { exact: true });
  setAnchor('membership', routes.membership, { exact: true });
  setAnchor('book a session', routes.booking);
  setAnchor('book a free trial', routes.booking);
  setAnchor('book a session', routes.booking);
  setAnchor('fitness essentials', routes.shop);
  setAnchor('essentials', routes.shop, { exact: true });
  setAnchor('shop all', routes.shop);
  setAnchor('contact', routes.contact, { exact: true });
  setAnchor('contact us', routes.contact);
  setAnchor('join now', routes.membership);
  setAnchor('join mm fitness', routes.membership);
  setAnchor('join today', routes.membership);
  setAnchor('programs', routes.services);
  setAnchor('training', routes.services, { exact: true });
  setAnchor('coaching', routes.services, { exact: true });
  setAnchor('classes', routes.services, { exact: true });
  setAnchor('coaches', routes.services);
  setAnchor('community', routes.home);
  setAnchor('locations', routes.contact);
  setAnchor('reviews', routes.contact);
  setAnchor('facilities', routes.home);
  setAnchor('gallery', routes.gallery);
  setAnchor('faq', routes.faq);
  setAnchor('faqs', routes.faq);
  setAnchor('privacy policy', routes.privacy);
  setAnchor('terms of service', routes.terms);
  setAnchor('login', routes.contact);
  setAnchor('quick links', routes.home);

  setAnchor('instagram', socialInstagram, { target: '_blank', rel: 'noopener noreferrer' });
  setAnchor('youtube', socialYouTube, { target: '_blank', rel: 'noopener noreferrer' });

  setAnchor('call immediately', `tel:${phone}`);
  setAnchor('message us', whatsapp, { target: '_blank', rel: 'noopener noreferrer' });
  setAnchor('write to us', email);
  setAnchor('call now', `tel:${phone}`);
  setAnchor('chat on whatsapp', whatsapp, { target: '_blank', rel: 'noopener noreferrer' });
  setAnchor('chat with us', whatsapp, { target: '_blank', rel: 'noopener noreferrer' });
  setAnchor('chat with us', whatsapp, { target: '_blank', rel: 'noopener noreferrer' });
  setAnchor('message us on whatsapp', whatsapp, { target: '_blank', rel: 'noopener noreferrer' });
  setAnchor('whatsapp', whatsapp, { target: '_blank', rel: 'noopener noreferrer' });
  setAnchor('call us', `tel:${phone}`);
  setAnchor('open in google maps', maps, { target: '_blank', rel: 'noopener noreferrer' });
  setAnchor('get directions', maps, { target: '_blank', rel: 'noopener noreferrer' });

  setButton('join now', () => (window.location.href = routes.membership));
  setButton('join today', () => (window.location.href = routes.membership));
  setButton('join mm fitness', () => (window.location.href = routes.membership));
  setButton('book a session', () => (window.location.href = routes.booking));
  setButton('book a free trial', () => (window.location.href = routes.booking));
  setButton('book this service', () => (window.location.href = routes.booking));
  setButton('start booking', () => {
    window.location.href = routes.booking;
  });
  setButton('book another session', () => (window.location.href = routes.booking));
  setButton('select daily', () => (window.location.href = routes.booking));
  setButton('select monthly', () => (window.location.href = routes.booking));
  setButton('select', () => (window.location.href = routes.booking));
  setButton('get 6 months', () => (window.location.href = routes.booking));
  setButton('add pt to plan', () => (window.location.href = routes.booking));
  setButton('contact support', () => (window.location.href = routes.contact));
  setButton('view full membership plans', () => (window.location.href = routes.membership));
  setButton('shop all', () => (window.location.href = routes.shop));
  setButton('view full gallery', () => {
    window.location.href = routes.gallery;
  });
  setButton('get directions', () => window.open(maps, '_blank', 'noopener,noreferrer'));
  setButton('call now', () => (window.location.href = `tel:${phone}`));
  setButton('call us', () => (window.location.href = `tel:${phone}`));
  setButton('chat on whatsapp', () => window.open(whatsapp, '_blank', 'noopener,noreferrer'));
  setButton('chat on whatsapp', () => window.open(whatsapp, '_blank', 'noopener,noreferrer'));
  setButton('whatsapp enquiry', () => window.open(whatsapp, '_blank', 'noopener,noreferrer'));
  setButton('message us on whatsapp', () => window.open(whatsapp, '_blank', 'noopener,noreferrer'));
  setButton('visit the gym', () => (window.location.href = routes.contact));
  setButton('visit mm fitness', () => (window.location.href = routes.contact));
  setButton('open in google maps', () => window.open(maps, '_blank', 'noopener,noreferrer'));
  setButton('newsletter', () => window.location.href = newsletterEmail);
  setButton('send', () => window.location.href = newsletterEmail);

  setFormMailto();

  if (window.location.pathname.toLowerCase().includes('/index.html') || window.location.pathname.endsWith('/')) {
    setSectionIdByHeading('our services', 'services');
    setSectionIdByHeading('fitness essentials', 'gallery');
    setSectionIdByHeading('ready to start your fitness journey', 'booking');
    setSectionIdByHeading('frequently asked questions', 'faqs');
  }

  if (window.location.pathname.toLowerCase().includes('/pages/contact.html')) {
    setButton('get directions', () => window.open(maps, '_blank', 'noopener,noreferrer'));
  }
})();





