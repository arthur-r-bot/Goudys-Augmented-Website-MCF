// Custom Navbar Component
class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="bg-white/95 backdrop-blur-md border-b border-stone-200 sticky top-0 z-50 shadow-sm">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-center h-20">
                        <!-- Logo/Brand -->
                        <div class="flex-shrink-0">
                            <a href="index.html" class="flex items-center group">
                                <span class="font-serif text-2xl font-bold text-stone-900 group-hover:text-primary-700 transition-colors">
                                    Goudy's French Cuisine
                                </span>
                            </a>
                        </div>

                        <!-- Desktop Navigation -->
                        <div class="hidden md:flex items-center space-x-1">
                            <a href="index.html" class="nav-link px-4 py-2 rounded-lg text-stone-700 hover:text-primary-700 hover:bg-primary-50 font-medium transition-all">
                                Home
                            </a>
                            <a href="seasonal.html" class="nav-link px-4 py-2 rounded-lg text-stone-700 hover:text-primary-700 hover:bg-primary-50 font-medium transition-all flex items-center gap-2">
                                <i data-feather="calendar" class="w-4 h-4"></i>
                                Seasonal
                            </a>
                            <a href="year-round.html" class="nav-link px-4 py-2 rounded-lg text-stone-700 hover:text-primary-700 hover:bg-primary-50 font-medium transition-all flex items-center gap-2">
                                <i data-feather="shopping-bag" class="w-4 h-4"></i>
                                Year Round
                            </a>
                            <a href="feedback.html" class="nav-link px-4 py-2 rounded-lg text-stone-700 hover:text-primary-700 hover:bg-primary-50 font-medium transition-all">
                                Feedback
                            </a>
                        </div>

                        <!-- CTA Button -->
                        <div class="hidden md:flex items-center space-x-4">
                            <button class="flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-md hover:shadow-lg">
                                <i data-feather="shopping-cart" class="w-4 h-4"></i>
                                <span class="cart-count">0</span>
                            </button>
                        </div>

                        <!-- Mobile Menu Button -->
                        <div class="md:hidden">
                            <button id="mobile-menu-btn" class="p-2 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors">
                                <i data-feather="menu" class="w-6 h-6"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Mobile Menu -->
                <div id="mobile-menu" class="hidden md:hidden border-t border-stone-200 bg-white">
                    <div class="px-4 py-4 space-y-2">
                        <a href="index.html" class="block px-4 py-3 rounded-lg text-stone-700 hover:bg-primary-50 hover:text-primary-700 font-medium transition-colors">
                            Home
                        </a>
                        <a href="seasonal.html" class="block px-4 py-3 rounded-lg text-stone-700 hover:bg-primary-50 hover:text-primary-700 font-medium transition-colors">
                            <div class="flex items-center gap-2">
                                <i data-feather="calendar" class="w-4 h-4"></i>
                                Seasonal Products
                            </div>
                        </a>
                        <a href="year-round.html" class="block px-4 py-3 rounded-lg text-stone-700 hover:bg-primary-50 hover:text-primary-700 font-medium transition-colors">
                            <div class="flex items-center gap-2">
                                <i data-feather="shopping-bag" class="w-4 h-4"></i>
                                Year Round
                            </div>
                        </a>
                        <a href="feedback.html" class="block px-4 py-3 rounded-lg text-stone-700 hover:bg-primary-50 hover:text-primary-700 font-medium transition-colors">
                            Feedback
                        </a>
                        <div class="pt-4 mt-4 border-t border-stone-200">
                            <button class="w-full flex items-center justify-center gap-2 px-5 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-colors">
                                <i data-feather="shopping-cart" class="w-4 h-4"></i>
                                Cart (<span class="cart-count">0</span>)
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        `;

        // Initialize feather icons after rendering
        if (typeof feather !== 'undefined') {
            feather.replace();
        }

        // Set active state
        this.setActiveLink();
    }

    setActiveLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const links = this.querySelectorAll('.nav-link');
        
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('bg-primary-100', 'text-primary-700');
            }
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);
