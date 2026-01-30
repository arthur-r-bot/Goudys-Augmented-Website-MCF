// Custom Product Card Component
class CustomProductCard extends HTMLElement {
    connectedCallback() {
        const name = this.getAttribute('name') || 'Product Name';
        const price = this.getAttribute('price') || '0';
        const image = this.getAttribute('image') || 'https://via.placeholder.com/640x360';
        const description = this.getAttribute('description') || '';
        const tag = this.getAttribute('tag') || '';
        const tagColor = this.getAttribute('tag-color') || 'bg-primary-600';

        this.innerHTML = `
            <div class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="relative overflow-hidden aspect-[4/3] bg-stone-200">
                    <img src="${image}" alt="${name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    ${tag ? `
                        <span class="absolute top-4 right-4 ${tagColor} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                            ${tag}
                        </span>
                    ` : ''}
                </div>
                <div class="p-6">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="font-serif text-xl font-bold text-stone-900 group-hover:text-primary-700 transition-colors">
                            ${name}
                        </h3>
                        <span class="text-2xl font-bold text-primary-700 ml-2">$${price}</span>
                    </div>
                    <p class="text-stone-600 text-sm mb-4 line-clamp-2">
                        ${description}
                    </p>
                    <button onclick="openPreorderModal('${name}')" class="w-full bg-stone-900 hover:bg-primary-600 text-white py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                        <span>${tag ? 'Pre-order' : 'Add to Cart'}</span>
                        <i data-feather="arrow-right" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        `;

        // Initialize feather icons
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }
}

customElements.define('custom-product-card', CustomProductCard);
