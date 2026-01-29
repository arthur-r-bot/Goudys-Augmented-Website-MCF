class CustomNavbar extends HTMLElement {
    connectedCallback() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                nav {
                    font-family: 'Inter', sans-serif;
                }
                .nav-link {
                    position: relative;
                    transition: color 0.3s;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: #d97706;
                    transition: width 0.3s;
                }
                .nav-link:hover::after,
                .nav-link.active::after {
                    width: 100%;
                }
                .nav-link.active {
                    color: #d97706;
                    font-weight: 600;
                }
                .mobile-menu {
                    transform: translateX(-100%);
                    transition: transform 0.3s ease-in-out;
                }
                .mobile-menu.open {
                    transform: translateX(0);
                }
            </style>
            
            <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-center h-20">
                        <!-- Logo -->
                        <div class="flex-shrink-0 flex items-center">
                            <a href="index.html" class="font-serif text-2xl font-bold text-stone-900 tracking-tight">
                                Goudy & <span class="text-primary-600">Grace</span>
                            </a>
                        </div>
                        
                        <!-- Desktop Navigation -->
                        <div class="hidden md:flex space-x-8 items-center">
                            <a href="index.html" class="nav-link ${currentPage === 'index.html' || currentPage === '' ? 'active' : ''} text-stone-600 hover:text-primary-600 font-medium">
                                Home
                            </a>
                            <a href="seasonal.html" class="nav-link ${currentPage === 'seasonal.html' ? 'active' : ''} text-stone-600 hover:text-primary-600 font-medium">
                                Seasonal Products
                            </a>
                            <a href="year-round.html" class="nav-link ${currentPage === 'year-round.html' ? 'active' : ''} text-stone-600 hover:text-primary-600 font-medium">
                                Year Round
                            </a>
                            <a href="feedback.html" class="nav-link ${currentPage === 'feedback.html' ? 'active' : ''} text-stone-600 hover:text-primary-600 font-medium">
                                Feedback
                            </a>
                        </div>
                        
                        <!-- CTA Button -->
                        <div class="hidden md:flex items-center space-x-4">
                            <button class="p-2 text-stone-600 hover:text-primary-600 transition-colors relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                <span class="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
                            </button>
                            <a href="seasonal.html" class="bg-primary-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-primary-700 transition-all text-sm">
                                Pre-order Now
                            </a>
                        </div>
                        
                        <!-- Mobile menu button -->
                        <div class="md:hidden flex items-center">
                            <button id="mobile-toggle" class="text-stone-600 hover:text-stone-900 focus:outline-none p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Mobile Menu -->
                <div id="mobile-menu" class="mobile-menu fixed inset-y-0 left-0 w-64 bg-white shadow-2xl md:hidden z-50 p-6">
                    <div class="flex justify-between items-center mb-8">
                        <span class="font-serif text-xl font-bold">Menu</span>
                        <button id="mobile-close" class="text-stone-500 hover:text-stone-800">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                    <div class="space-y-4">
                        <a href="index.html" class="block py-2 text-lg font-medium ${currentPage === 'index.html' || currentPage === '' ? 'text-primary-600' : 'text-stone-600'}">Home</a>
                        <a href="seasonal.html" class="block py-2 text-lg font-medium ${currentPage === 'seasonal.html' ? 'text-primary-600' : 'text-stone-600'}">Seasonal Products</a>
                        <a href="year-round.html" class="block py-2 text-lg font-medium ${currentPage === 'year-round.html' ? 'text-primary-600' : 'text-stone-600'}">Year Round</a>
                        <a href="feedback.html" class="block py-2 text-lg font-medium ${currentPage === 'feedback.html' ? 'text-primary-600' : 'text-stone-600'}">Feedback</a>
                    </div>
                    <div class="mt-8 pt-8 border-t border-stone-200">
                        <a href="seasonal.html" class="block w-full bg-primary-600 text-white text-center py-3 rounded-full font-medium">
                            Pre-order Now
                        </a>
                    </div>
                </div>
            </nav>
            <div class="h-20"></div>
        `;
        
        // Mobile menu toggle logic
        const toggle = this.shadowRoot.getElementById('mobile-toggle');
        const close = this.shadowRoot.getElementById('mobile-close');
        const menu = this.shadowRoot.getElementById('mobile-menu');
        
        if (toggle && menu) {
            toggle.addEventListener('click', () => {
                menu.classList.add('open');
            });
        }
        
        if (close && menu) {
            close.addEventListener('click', () => {
                menu.classList.remove('open');
            });
        }
    }
}

customElements.define('custom-navbar', CustomNavbar);