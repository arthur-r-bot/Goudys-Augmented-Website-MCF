class CustomProductCard extends HTMLElement {
    static get observedAttributes() {
        return ['name', 'price', 'image', 'description', 'tag', 'tag-color'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const name = this.getAttribute('name') || 'Product Name';
        const price = this.getAttribute('price') || '0';
        const image = this.getAttribute('image') || 'https://static.photos/food/640x360/1';
        const description = this.getAttribute('description') || '';
        const tag = this.getAttribute('tag') || '';
        const tagColor = this.getAttribute('tag-color') || 'bg-primary-600';

        const root = this.shadowRoot || this.attachShadow({ mode: 'open' });
        root.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                .card {
                    font-family: 'Inter', sans-serif;
                    background: white;
                    border-radius: 1rem;
                    overflow: hidden;
                    transition: all 0.3s ease;
                    border: 1px solid #e7e5e4;
                }
                .card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                }
                .image-container {
                    position: relative;
                    overflow: hidden;
                    aspect-ratio: 16/10;
                }
                .image-container img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
                .card:hover .image-container img {
                    transform: scale(1.05);
                }
                .tag {
                    position: absolute;
                    top: 1rem;
                    left: 1rem;
                    padding: 0.25rem 0.75rem;
                    border-radius: 9999px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: white;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .content {
                    padding: 1.5rem;
                }
                .name {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #1c1917;
                    margin-bottom: 0.5rem;
                }
                .description {
                    color: #78716c;
                    font-size: 0.875rem;
                    line-height: 1.5;
                    margin-bottom: 1rem;
                }
                .footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .price {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #d97706;
                }
                .price span {
                    font-size: 0.875rem;
                    color: #a8a29e;
                    font-weight: 400;
                }
                .button {
                    background: #f5f5f4;
                    color: #44403c;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: 0.5rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s;
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                }
                .button:hover {
                    background: #d97706;
                    color: white;
                }
                .preorder-btn {
                    background: #059669;
                    color: white;
                }
                .preorder-btn:hover {
                    background: #047857;
                }
            </style>
            
            <div class="card">
                <div class="image-container">
                    <img src="${image}" alt="${name}" loading="lazy">
                    ${tag ? `<span class="tag ${tagColor}">${tag}</span>` : ''}
                </div>
                <div class="content">
                    <h3 class="name">${name}</h3>
                    <p class="description">${description}</p>
                    <div class="footer">
                        <div class="price">$${price} <span>/ each</span></div>
                        <button class="button ${tag === 'Pre-order' ? 'preorder-btn' : ''}">
                            ${tag === 'Pre-order' ? 'Pre-order' : 'Add to Cart'}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                ${tag === 'Pre-order' 
                                    ? '<path d="M12 2v20M2 12h20' 
                                    : '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>'}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}

// Global handler for card clicks
function handleCardClick(productName, tag) {
    if (tag === 'Pre-order') {
        if (typeof openPreorderModal === 'function') {
            openPreorderModal(productName);
        } else {
            alert(`Pre-order functionality for ${productName} would open here.`);
        }
    } else {
        // Add to cart functionality
        if (typeof showToast === 'function') {
            showToast(`${productName} added to cart!`, 'success');
        } else {
            alert(`${productName} added to cart!`);
        }
    }
}

customElements.define('custom-product-card', CustomProductCard);