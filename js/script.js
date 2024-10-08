// Initialize AOS Library
AOS.init({
    duration: 1000,
    once: true,
  });
  
  // Navbar Background Blur on Scroll
  window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
  
  // Initialize Swiper Carousel
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 800,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
  
  // Parallax Effect for About Us Section
  document.addEventListener('scroll', function () {
    const scrollPosition = window.pageYOffset;
    const parallaxAbout = document.getElementById('parallax-about');
    const aboutSection = document.getElementById('about');
    const aboutSectionTop = aboutSection.offsetTop;
    const aboutSectionHeight = aboutSection.offsetHeight;
  
    if (
      scrollPosition + window.innerHeight > aboutSectionTop &&
      scrollPosition < aboutSectionTop + aboutSectionHeight
    ) {
      parallaxAbout.style.transform =
        'translateY(' + (scrollPosition - aboutSectionTop) * 0.5 + 'px)';
    }
  });
  
  // Form Validation
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get form fields
    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const company = document.getElementById('company').value.trim();
  
    // Simple validation
    if (!name || !surname || !email || !phone || !company) {
      alert('Please fill in all required fields.');
      return;
    }
  
    // Email format validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Phone number validation (basic example)
    const phonePattern = /^\+?[0-9]{7,15}$/;
    if (!phone.match(phonePattern)) {
      alert('Please enter a valid phone number.');
      return;
    }
  
    // If validation passes
    alert('Thank you for contacting us!');
    // Reset form
    this.reset();
  });
  
  // Particles.js Configuration for Left (Pink Particles)
  particlesJS('particles-left', {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 600,
        },
      },
      color: {
        value: '#ff007f',
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: 6, // Increased size for thicker particles
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ff007f',
        opacity: 0.4,
        width: 2, // Increased line width
      },
      move: {
        enable: true,
        speed: 2,
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true, // Enabled hover interaction
          mode: 'grab', // You can change this to 'bubble', 'repulse', etc.
        },
        onclick: {
          enable: true, // Enabled click interaction
          mode: 'push', // You can change this to 'remove', 'bubble', etc.
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 0.6,
          },
        },
        bubble: {
          distance: 200,
          size: 10,
          duration: 2,
          opacity: 0.8,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  });
  
  // Particles.js Configuration for Right (Blue Particles)
  particlesJS('particles-right', {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 600,
        },
      },
      color: {
        value: '#007bff',
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: 6, // Increased size for thicker particles
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#007bff',
        opacity: 0.4,
        width: 2, // Increased line width
      },
      move: {
        enable: true,
        speed: 2,
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true, // Enabled hover interaction
          mode: 'grab', // You can change this to 'bubble', 'repulse', etc.
        },
        onclick: {
          enable: true, // Enabled click interaction
          mode: 'push', // You can change this to 'remove', 'bubble', etc.
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 0.6,
          },
        },
        bubble: {
          distance: 200,
          size: 10,
          duration: 2,
          opacity: 0.8,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  });
  