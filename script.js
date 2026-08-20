gsap.registerPlugin(ScrollTrigger);




gsap.from(".hero h1" , {
    y:100,
    opacity:0,
    duration:0.8,
    delay:0
});

gsap.from(".hero-subtitle" , {
    y:100,
    opacity:0,
    duration:0.8,
    delay:0.3
});

gsap.from(".hero-description" , {
    y:100,
    opacity:0,
    duration:0.8,
    delay:0.6
});

gsap.from(".hero-buttons" , {
    y:100,
    opacity:0,
    duration:0.8,
    delay:0.9
});












gsap.from(".about img" , {
    x:-60,
    opacity:0,
    duration:0.8,
    scrollTrigger: {
        trigger:".about",
        start:"top 90%"
    }
});

gsap.from(".about-subtitle" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:0.2,
    scrollTrigger: {
        trigger:".about",
        start:"top 90%"
    }
});

gsap.from(".about-title h2" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:0.4,
    scrollTrigger: {
        trigger:".about",
        start:"top 90%"
    }
});

gsap.from(".about-description" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:0.6,
    scrollTrigger: {
        trigger:".about",
        start:"top 90%"
    }
});

gsap.from(".about-selection" , {
    y:40,
    opacity:0,
    duration:0.8,
    stagger:0.15,
    delay:0.6,
    scrollTrigger: {
        trigger:".about",
        start:"top 90%"
    }
});













gsap.from(".features-subtitle" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:0,
    scrollTrigger: {
        trigger:".features",
        start:"top 90%"
    }
});

gsap.from(".features-sub h2" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:0.3,
    scrollTrigger: {
        trigger:".features",
        start:"top 90%"
    }
});

gsap.from(".features-description" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:0.6,
    scrollTrigger: {
        trigger:".features",
        start:"top 90%"
    }
});

gsap.from(".features-button-wrap" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:0.9,
    scrollTrigger: {
        trigger:".features",
        start:"top 90%"
    }
});



gsap.from(".features-menu" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:0.6,
    stagger:0.15,
    scrollTrigger: {
        trigger:".features",
        start:"top 50%"
    }
});













gsap.from(".service-text" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:0,
    scrollTrigger: {
        trigger:".service",
        start:"top 90%"
    }
});

gsap.from(".service-left h2" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:0.3,
    scrollTrigger: {
        trigger:".service",
        start:"top 90%"
    }
});

gsap.from(".service-description" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:0.6,
    scrollTrigger: {
        trigger:".service",
        start:"top 90%"
    }
});

gsap.from(".service-button-wrap" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:0.9,
    scrollTrigger: {
        trigger:".service",
        start:"top 90%"
    }
});

gsap.from(".trainer-card" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:1.2,
    stagger:0.15,
    scrollTrigger: {
        trigger:".service",
        start:"top 90%"
    }
})












gsap.from(".pricing-subtitle" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:0,
    scrollTrigger: {
        trigger:".pricing",
        start:"top 90%"
    }
});

gsap.from(".pricing-left h2" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:0.3,
    scrollTrigger: {
        trigger:".pricing",
        start:"top 90%"
    }
});

gsap.from(".pricing-description" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:0.6,
    scrollTrigger: {
        trigger:".pricing",
        start:"top 90%"
    }
});

gsap.from(".pricing-card" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:0.9,
    stagger:0.15,
    scrollTrigger: {
        trigger:".pricing",
        start:"top 80%"
    }
})










gsap.from(".voice-title" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:0,
    scrollTrigger: {
        trigger:".voice",
        start:"top 90%"
    }
});

gsap.from(".voice-selection h2" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:0.3,
    scrollTrigger: {
        trigger:".voice",
        start:"top 90%"
    }
});

gsap.from(".voice-description" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:0.6,
    scrollTrigger: {
        trigger:".voice",
        start:"top 90%"
    }
});

gsap.from(".voice-card" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:0.9,
    stagger:0.15,
    scrollTrigger: {
        trigger:".voice",
        start:"top 80%"
    }
})










gsap.from(".blog-title" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:0,
    scrollTrigger: {
        trigger:".blog",
        start:"top 90%"
    }
});

gsap.from(".blog-header h2" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:0.3,
    scrollTrigger: {
        trigger:".blog",
        start:"top 90%"
    }
});

gsap.from(".blog-description" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:0.6,
    scrollTrigger: {
        trigger:".blog",
        start:"top 90%"
    }
});

gsap.from(".blog-card" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:0.9,
    stagger:0.15,
    scrollTrigger: {
        trigger:".blog",
        start:"top 80%"
    }
})

gsap.from(".blog-button-wrap" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:1.2,
    scrollTrigger: {
        trigger:".blog",
        start:"top 90%"
    }
});










gsap.from(".shop-access" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:0,
    scrollTrigger: {
        trigger:".shop",
        start:"top 90%"
    }
});

gsap.from(".shop-header h2" , {
    y:40,
    opacity:0,
    duration:0.8,
    delay:0.3,
    scrollTrigger: {
        trigger:".shop",
        start:"top 90%"
    }
});

gsap.from(".shop-content img" , {
    x:-40,
    opacity:0,
    duration:0.6,
    delay:0.6,
    scrollTrigger: {
        trigger:".shop",
        start:"top 90%"
    }
});

gsap.from(".shop-information-row" , {
    x:40,
    opacity:0,
    duration:0.8,
    delay:0.6,
    scrollTrigger: {
        trigger:".shop",
        start:"top 90%"
    }
});






const Hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

Hamburger.addEventListener("click" , () => {
    Hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});




