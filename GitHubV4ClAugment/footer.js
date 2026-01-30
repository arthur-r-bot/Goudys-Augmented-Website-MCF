// Custom Footer Component
class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-stone-900 text-stone-300 pt-16 pb-8">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                        <!-- Brand Column -->
                        <div class="col-span-1 md:col-span-2">
                            <h3 class="font-serif text-2xl font-bold text-white mb-4">Goudy's French Cuisine</h3>
                            <p class="text-stone-400 mb-6 max-w-md">
                                Artisan charcuterie boards crafted with passion since 2012. 
                                Elevating every occasion with curated selections of premium cheeses and meats.
                            </p>
                            <div class="flex gap-4">
                                <a href="#" class="w-10 h-10 bg-stone-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                                    <i data-feather="instagram" class="w-5 h-5"></i>
                                </a>
                                <a href="#" class="w-10 h-10 bg-stone-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                                    <i data-feather="facebook" class="w-5 h-5"></i>
                                </a>
                                <a href="#" class="w-10 h-10 bg-stone-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                                    <i data-feather="mail" class="w-5 h-5"></i>
                                </a>
                            </div>
                        </div>

                        <!-- Quick Links -->
                        <div>
                            <h4 class="font-semibold text-white mb-4">Shop</h4>
                            <ul class="space-y-2">
                                <li><a href="seasonal.html" class="hover:text-primary-400 transition-colors">Seasonal Collection</a></li>
                                <li><a href="year-round.html" class="hover:text-primary-400 transition-colors">Year-Round Classics</a></li>
                                <li><a href="#" class="hover:text-primary-400 transition-colors">Gift Cards</a></li>
                                <li><a href="#" class="hover:text-primary-400 transition-colors">Corporate Orders</a></li>
                            </ul>
                        </div>

                        <!-- Support -->
                        <div>
                            <h4 class="font-semibold text-white mb-4">Support</h4>
                            <ul class="space-y-2">
                                <li><a href="feedback.html" class="hover:text-primary-400 transition-colors">Share Feedback</a></li>
                                <li><a href="#" class="hover:text-primary-400 transition-colors">Shipping Info</a></li>
                                <li><a href="#" class="hover:text-primary-400 transition-colors">FAQs</a></li>
                                <li><a href="#" class="hover:text-primary-400 transition-colors">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>

                    <!-- Bottom Bar -->
                    <div class="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p class="text-sm text-stone-500">
                            © 2024 Goudy's French Cuisine. All rights reserved.
                        </p>
                        <div class="flex gap-6 text-sm">
                            <a href="#" class="hover:text-primary-400 transition-colors">Privacy Policy</a>
                            <a href="#" class="hover:text-primary-400 transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        `;

        // Initialize feather icons
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }
}

customElements.define('custom-footer', CustomFooter);
