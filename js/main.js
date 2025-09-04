function showHome() {
    hideAllSections();
    document.querySelector('.hero').style.display = 'block';
    updateActiveNav('Home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showLuxuryCars() {
    hideAllSections();
    document.getElementById('luxury-cars').classList.add('active');
    updateActiveNav('Luxury Cars');
    window.scrollTo({ top: 120, behavior: 'smooth' });
}

function showLuxuryWatches() {
    hideAllSections();
    document.getElementById('luxury-watches').classList.add('active');
    updateActiveNav('Luxury Watches');
    window.scrollTo({ top: 120, behavior: 'smooth' });
}

function showLuxuryNewsletter() {
    hideAllSections();
    document.getElementById('luxury-newsletter').classList.add('active');
    updateActiveNav('Luxury Newsletter');
    window.scrollTo({ top: 120, behavior: 'smooth' });
}

function hideAllSections() {
    document.querySelector('.hero').style.display = 'none';
    const sections = ['luxury-cars', 'luxury-watches', 'luxury-newsletter'];
    sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.classList.remove('active');
        }
    });
}

function updateActiveNav(activeText) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    navLinks.forEach(link => {
        if (link.textContent === activeText) {
            link.classList.add('active');
        }
    });
}

// Modal functions
function openModal(title, imageSrc, description, type, specs) {
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const specsContainer = document.getElementById('modalSpecs');
    
    if (modalTitle) modalTitle.textContent = title;
    if (modalImage) {
        modalImage.src = imageSrc;
        modalImage.alt = title;
    }
    if (modalDescription) modalDescription.textContent = description;
    
    // Clear previous specs
    if (specsContainer) {
        specsContainer.innerHTML = '';
        
        // Add specifications title
        const specsTitle = document.createElement('h3');
        specsTitle.className = 'specs-title';
        specsTitle.textContent = 'Specifications';
        specsContainer.appendChild(specsTitle);
        
        // Add new specs
        if (specs && typeof specs === 'object') {
            Object.entries(specs).forEach(([key, value]) => {
                const specItem = document.createElement('div');
                specItem.className = 'spec-item';
                specItem.innerHTML = `
                    <span class="spec-label">${key}</span>
                    <span class="spec-value">${value}</span>
                `;
                specsContainer.appendChild(specItem);
            });
        }
    }
    
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // Scroll modal to top when opening
        const modalBody = modal.querySelector('.modal-body');
        if (modalBody) {
            modalBody.scrollTop = 0;
        }
    }
}

function closeModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Form submission
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for subscribing to the Luxury Digest! You will receive weekly updates about the latest in luxury lifestyle.');
    });
}

// Initialize with cars section
showLuxuryCars();

// Ensure close button works properly
document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
});