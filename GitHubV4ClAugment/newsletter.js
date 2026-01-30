// Custom Newsletter Component
class CustomNewsletter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
                <i data-feather="mail" class="w-12 h-12 mx-auto mb-4 text-primary-200"></i>
                <h3 class="font-serif text-3xl md:text-4xl font-bold mb-4">
                    Never Miss a Launch
                </h3>
                <p class="text-primary-100 mb-8 max-w-xl mx-auto">
                    Be the first to know about seasonal drops, restocks, and exclusive pre-order windows. 
                    Join our community of charcuterie enthusiasts.
                </p>
                <form class="newsletter-form max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                    <input 
                        type="email" 
                        placeholder="your@email.com" 
                        required
                        class="flex-1 px-6 py-4 rounded-full text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                    <button 
                        type="submit"
                        class="px-8 py-4 bg-white text-primary-700 rounded-full font-semibold hover:bg-primary-50 transition-all transform hover:scale-105 shadow-lg whitespace-nowrap flex items-center justify-center gap-2"
                    >
                        <span>Subscribe</span>
                        <i data-feather="arrow-right" class="w-4 h-4"></i>
                    </button>
                </form>
                <p class="text-primary-200 text-xs mt-4">
                    We respect your inbox. Unsubscribe anytime.
                </p>
            </div>
        `;

        // Initialize feather icons
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }
}

customElements.define('custom-newsletter', CustomNewsletter);
