document.addEventListener('DOMContentLoaded', () => {

    // ================================
    // PARTICLE CANVAS BACKGROUND
    // ================================
    const canvas = document.getElementById('particle-canvas');
    const heroGlow = document.querySelector('.hero-glow');
    
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let canvasOpacity = 1;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class Particle {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
                this.radius = Math.random() * 1.8 + 0.3;
                this.opacity = Math.random() * 0.6 + 0.1;
                // Warm color palette: orange, amber, rose
                const colors = ['249,115,22', '251,191,36', '244,63,94', '251,146,60'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.life = 0;
                this.maxLife = Math.random() * 300 + 200;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.life++;
                if (this.life > this.maxLife || this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                    this.reset();
                }
            }
            draw() {
                const fade = Math.sin((this.life / this.maxLife) * Math.PI);
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color}, ${this.opacity * fade * canvasOpacity})`;
                ctx.fill();
            }
        }

        // Create particles
        for (let i = 0; i < 120; i++) particles.push(new Particle());

        // Draw connection lines between nearby particles
        function drawConnections() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        const alpha = (1 - dist / 120) * 0.12 * canvasOpacity;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(249,115,22,${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }
        }

        // Mouse interaction
        let mouse = { x: null, y: null };
        document.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        function animateCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            drawConnections();

            // Mouse repulsion
            if (mouse.x !== null) {
                particles.forEach(p => {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        const force = (100 - dist) / 100;
                        p.vx += (dx / dist) * force * 0.5;
                        p.vy += (dy / dist) * force * 0.5;
                        // Clamp velocity
                        p.vx = Math.max(-2, Math.min(2, p.vx));
                        p.vy = Math.max(-2, Math.min(2, p.vy));
                    }
                });
            }

            requestAnimationFrame(animateCanvas);
        }
        animateCanvas();

        // ================================
        // SCROLL FADING
        // ================================
        const orbs = document.querySelectorAll('.orb');
        const heroGlowEl = document.querySelector('.hero-glow');

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const vh = window.innerHeight;
            const opacity = Math.max(0, 1 - scrollY / (vh * 1.1));
            canvas.style.opacity = opacity;
            if (heroGlowEl) heroGlowEl.style.opacity = opacity;
            orbs.forEach(orb => { orb.style.opacity = opacity; });
        });
    }

    // ================================
    // NAVIGATION SCROLL EFFECT
    // ================================
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    });

    // ================================
    // REVEAL ON SCROLL
    // ================================
    const observerOptions = {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px"
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));

    // ================================
    // PROJECT RENDERING
    // ================================
    const projectsGrid = document.getElementById('projects-grid');
    const modal = document.getElementById('project-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalCarousel = document.getElementById('modal-carousel');
    let currentCarouselIndex = 0;
    let currentProjectImages = [];

    function renderProjects() {
        if (!projectsGrid) return;
        const projectData = getProjects();
        projectsGrid.innerHTML = projectData.map(project => `
            <div class="project-card glass reveal" onclick="openModal(${project.id})">
                <div class="project-img">
                    <img src="${project.images[0]}" alt="${project.title}" loading="lazy">
                    <div class="project-img-overlay">
                        <span class="project-overlay-text">View Case Study &rarr;</span>
                    </div>
                </div>
                <div class="project-info">
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <span class="mono" style="font-size: 0.68rem;">${project.category}</span>
                    <h3 style="margin: 8px 0 12px 0; font-size: 1.25rem;">${project.title}</h3>
                    <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5;">${project.description.substring(0, 90)}...</p>
                </div>
            </div>
        `).join('');

        document.querySelectorAll('.projects-grid .reveal').forEach(el => observer.observe(el));
    }

    // ================================
    // MODAL LOGIC
    // ================================
    window.openModal = (id) => {
        const project = getProjects().find(p => p.id === id);
        if (!project) return;

        currentProjectImages = project.images;
        currentCarouselIndex = 0;

        document.getElementById('modal-title').innerText = project.title;
        document.getElementById('modal-description').innerText = project.description;
        document.getElementById('modal-category').innerText = project.category;
        document.getElementById('modal-tags').innerHTML = project.tags.map(t => `<span class="tag">${t}</span>`).join('');

        const videoContainer = document.getElementById('modal-video-container');
        if (project.videoUrl) {
            document.getElementById('modal-video-link').href = project.videoUrl;
            videoContainer.style.display = 'block';
        } else {
            videoContainer.style.display = 'none';
        }

        // Build images
        modalCarousel.innerHTML = currentProjectImages.map(img => `
            <img src="${img}" alt="Project View">
        `).join('');

        // Build dots
        const dotsContainer = document.getElementById('modal-dots');
        if (dotsContainer) {
            dotsContainer.innerHTML = currentProjectImages.map((_, i) =>
                `<span class="carousel-dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></span>`
            ).join('');
        }

        updateCarousel();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    function updateCarousel() {
        modalCarousel.style.transform = `translateX(-${currentCarouselIndex * 100}%)`;
        // Update dots
        document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentCarouselIndex);
        });
    }

    window.goToSlide = (index) => {
        currentCarouselIndex = index;
        updateCarousel();
    };

    document.querySelector('.carousel-next').addEventListener('click', () => {
        currentCarouselIndex = (currentCarouselIndex + 1) % currentProjectImages.length;
        updateCarousel();
    });

    document.querySelector('.carousel-prev').addEventListener('click', () => {
        currentCarouselIndex = (currentCarouselIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
        updateCarousel();
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    };

    renderProjects();

    // ================================
    // LOAD ABOUT DATA
    // ================================
    if (typeof getAboutData === 'function') {
        const aboutData = getAboutData();
        if (aboutData) {
            if (aboutData.subtitle) document.getElementById('about-subtitle').innerText = aboutData.subtitle;
            if (aboutData.title) document.getElementById('about-title').innerHTML = aboutData.title.replace(/\n/g, '<br>');
            if (aboutData.desc) {
                document.getElementById('about-desc').innerHTML = aboutData.desc.split('\n\n').map(p => `<p>${p}</p>`).join('');
            }
            if (aboutData.image) {
                document.getElementById('about-placeholder').style.display = 'none';
                const imgEl = document.getElementById('about-img');
                imgEl.src = aboutData.image;
                imgEl.style.display = 'block';
            }
        }
    }

    // ================================
    // CONTACT FORM AJAX
    // ================================
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const data = new FormData(contactForm);
            btn.innerText = 'Sending...';
            btn.disabled = true;

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: data,
                    headers: { 'Accept': 'application/json' }
                });
                if (response.ok) {
                    btn.innerText = '✓ Message Sent!';
                    btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
                    contactForm.reset();
                    setTimeout(() => {
                        btn.innerText = 'Send Message';
                        btn.style.background = '';
                        btn.disabled = false;
                    }, 4000);
                } else throw new Error('Failed');
            } catch (err) {
                btn.innerText = '✕ Error – Try Again';
                btn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
                setTimeout(() => {
                    btn.innerText = 'Send Message';
                    btn.style.background = '';
                    btn.disabled = false;
                }, 3000);
            }
        });
    }

    // ================================
    // STAGGERED REVEAL FOR BENTO GRID
    // ================================
    document.querySelectorAll('.bento-item').forEach((item, i) => {
        item.style.transitionDelay = `${i * 0.08}s`;
    });
});
