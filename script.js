// Main JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather Icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    // Mobile menu toggle functionality
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Newsletter form handling
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', handleNewsletterSubmit);
    });

    // Feedback form handling
    const feedbackForm = document.getElementById('feedback-form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', handleFeedbackSubmit);
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-on-scroll').forEach((el) => observer.observe(el));
});

// Newsletter Handler
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    const button = e.target.querySelector('button');
    const originalText = button.innerHTML;
    
    // Simulate API call
    button.disabled = true;
    button.innerHTML = '<i data-feather="loader" class="w-5 h-5 animate-spin"></i>';
    feather.replace();
    
    setTimeout(() => {
        button.innerHTML = '<i data-feather="check" class="w-5 h-5"></i> Subscribed!';
        button.classList.remove('bg-primary-600', 'hover:bg-primary-700');
        button.classList.add('bg-secondary-600', 'hover:bg-secondary-700');
        feather.replace();
        
        // Show success message
        showToast('Welcome! You\'ll be the first to know about restocks and seasonal launches.', 'success');
        
        e.target.reset();
        
        setTimeout(() => {
            button.disabled = false;
            button.innerHTML = originalText;
            button.classList.add('bg-primary-600', 'hover:bg-primary-700');
            button.classList.remove('bg-secondary-600', 'hover:bg-secondary-700');
        }, 3000);
    }, 1500);
}

// Feedback Handler
function handleFeedbackSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const button = e.target.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;
    
    button.disabled = true;
    button.innerHTML = '<i data-feather="loader" class="w-5 h-5 animate-spin mr-2"></i> Sending...';
    feather.replace();
    
    setTimeout(() => {
        button.innerHTML = '<i data-feather="check" class="w-5 h-5 mr-2"></i> Sent!';
        feather.replace();
        
        showToast('Thank you for your feedback! We\'ll use this to improve our shipping.', 'success');
        
        e.target.reset();
        
        setTimeout(() => {
            button.disabled = false;
            button.innerHTML = originalText;
        }, 3000);
    }, 1500);
}

// Toast Notification System
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    const colors = type === 'success' ? 'bg-secondary-600' : 'bg-primary-600';
    
    toast.className = `fixed bottom-4 right-4 ${colors} text-white px-6 py-4 rounded-lg shadow-2xl transform translate-y-0 transition-all duration-300 z-50 flex items-center gap-3`;
    toast.innerHTML = `
        <i data-feather="${type === 'success' ? 'check-circle' : 'info'}" class="w-5 h-5"></i>
        <span class="font-medium">${message}</span>
    `;
    
    document.body.appendChild(toast);
    feather.replace();
    
    setTimeout(() => {
        toast.style.transform = 'translateY(100px)';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// Pre-order Modal Functionality
function openPreorderModal(productName) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-2xl max-w-md w-full p-6 transform scale-100 transition-transform">
            <div class="flex justify-between items-start mb-4">
                <h3 class="font-serif text-2xl font-bold text-stone-900">Pre-order ${productName}</h3>
                <button onclick="this.closest('.fixed').remove()" class="text-stone-400 hover:text-stone-600">
                    <i data-feather="x" class="w-6 h-6"></i>
                </button>
            </div>
            <p class="text-stone-600 mb-6">This seasonal item is available for pre-order. We'll notify you when it ships!</p>
            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-stone-700 mb-1">Quantity</label>
                    <select class="w-full border-stone-300 rounded-lg focus:ring-primary-500 focus:border-primary-500">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4+</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-stone-700 mb-1">Preferred Delivery Date</label>
                    <input type="date" class="w-full border-stone-300 rounded-lg focus:ring-primary-500 focus:border-primary-500">
                </div>
                <button onclick="showToast('Added to pre-order list!', 'success'); this.closest('.fixed').remove()" 
                    class="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                    Confirm Pre-order
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    feather.replace();
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}