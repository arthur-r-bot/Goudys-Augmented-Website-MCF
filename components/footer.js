class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                footer {
                    font-family: 'Inter', sans-serif;
                }
            </style>
            
            <footer class="bg-stone-900 text-stone-300 py-12 border-t border-stone-800">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <!-- Brand -->
                        <div class="col-span-1 md:col-span-1">
                            <h3 class="font-serif text-2xl font-bold text-white mb-4">Goudy & Grace</h3>
                            <p class="text-sm leading-relaxed mb-4">Artisan charcuterie boards crafted with intention. Seasonal selections and year-round classics for every celebration.</p>
                            <div class="flex space-x-4">
                                <a href="#" class="text-stone-400 hover:text-primary-400 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </a>
                                <a href="#" class="text-stone-400 hover:text-primary-400 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </a>
                                <a href="#" class="text-stone-400 hover:text-primary-400 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                </a>
                            </div>
                        </div>
                        
                        <!-- Quick Links -->
                        <div>
                            <h4 class="text-white font-semibold mb-4">Shop</h4>
                            <ul class="space-y-2 text-sm">
                                <li><a href="seasonal.html" class="hover:text-primary-400 transition-colors">Seasonal Products</a></li>
                                <li><a href="year-round.html" class="hover:text-primary-400 transition-colors">Year Round</a></li>
                                <li><a href="#" class="hover:text-primary-400 transition-colors">Gift Cards</a></li>
                                <li><a href="#" class="hover:text-primary-400 transition-colors">Corporate Orders</a></li>
                            </ul>
                        </div>
                        
                        <!-- Support -->
                        <div>
                            <h4 class="text-white font-semibold mb-4">Support</h4>
                            <ul class="space-y-2 text-sm">
                                <li><a href="feedback.html" class="hover:text-primary-400 transition-colors">Shipping Feedback</a></li>
                                <li><a href="#" class="hover:text-primary-400 transition-colors">FAQ</a></li>
                                <li><a href="#" class="hover:text-primary-400 transition-colors">Shipping Info</a></li>
                                <li><a href="#" class="hover:text-primary-400 transition-colors">Contact Us</a></li>
                            </ul>
                        </div>
                        
                        <!-- Contact -->
                        <div>
                            <h4 class="text-white font-semibold mb-4">Contact</h4>
                            <ul class="space-y-2 text-sm">
                                <li class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    hello@goudyandgrace.com
                                </li>
                                <li class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    Portland, OR
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                        <p>&copy; 2024 Goudy & Grace Charcuterie. All rights reserved.</p>
                        <div class="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);