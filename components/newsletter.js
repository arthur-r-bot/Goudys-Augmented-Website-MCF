class CustomNewsletter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                .newsletter-section {
                    font-family: 'Inter', sans-serif;
                    background: linear-gradient(135deg, #fffbeb 0%, #ecfdf5 100%);
                    border-radius: 1.5rem;
                    padding: 3rem;
                    position: relative;
                    overflow: hidden;
                }
                .newsletter-section::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    right: -10%;
                    width: 300px;
                    height: 300px;
                    background: rgba(217, 119, 6, 0.1);
                    border-radius: 50%;
                }
                .newsletter-section::after {
                    content: '';
                    position: absolute;
                    bottom: -30%;
                    left: -5%;
                    width: 200px;
                    height: 200px;
                    background: rgba(5, 150, 105, 0.1);
                    border-radius: 50%;
                }
                .content {
                    position: relative;
                    z-index: 1;
                    max-width: 600px;
                    margin: 0 auto;
                    text-align: center;
                }
                h2 {
                    font-family: 'Playfair Display', serif;
                    font-size: 2rem;
                    color: #1c1917;
                    margin-bottom: 0.5rem;
                }
                p {
                    color: #78716c;
                    margin-bottom: 1.5rem;
                }
                .form {
                    display: flex;
                    gap: 0.75rem;
                    max-width: 500px;
                    margin: 0 auto;
                }
                input {
                    flex: 1;
                    padding: 0.875rem 1.25rem;
                    border: 1px solid #d6d3d1;
                    border-radius: 9999px;
                    font-size: 1rem;
                    outline: none;
                    transition: all 0.2s;
                }
                input:focus {
                    border-color: #d97706;
                    box-shadow: 0 0 0 3px rgba(217, 119, 6, 0.1);
                }
                button {
                    background: #d97706;
                    color: white;
                    border: none;
                    padding: 0.875rem 1.5rem;
                    border-radius: 9999px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                    white-space: nowrap;
                }
                button:hover {
                    background: #b45309;
                    transform: translateY(-1px);
                }
                button:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }
                .benefits {
                    display: flex;
                    justify-content: center;
                    gap: 2rem;
                    margin-top: 1.5rem;
                    font-size: 0.875rem;
                    color: #78716c;
                }
                .benefit {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                @media (max-width: 640px) {
                    .newsletter-section {
                        padding: 2rem 1.5rem;
                    }
                    .form {
                        flex-direction: column;
                    }
                    button {
                        width: 100%;
                    }
                    .benefits {
                        flex-direction: column;
                        gap: 0.5rem;
                    }
                }
            </style>
            
            <div class="newsletter-section">
                <div class="content">
                    <h2>Join the Inner Circle</h2>
                    <p>Be the first to know about seasonal launches, restocks, and exclusive offers. No spam, just cheese.</p>
                    
                    <form class="form newsletter-form">
                        <input type="email" placeholder="Enter your email address" required>
                        <button type="submit">Subscribe</button>
                    </form>
                    
                    <div class="benefits">
                        <div class="benefit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span>Restock alerts</span>
                        </div>
                        <div class="benefit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span>Early access</span>
                        </div>
                        <div class="benefit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span>Seasonal previews</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Attach form handler
        const form = this.shadowRoot.querySelector('.newsletter-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = form.querySelector('input').value;
                const button = form.querySelector('button');
                
                // Simulate submission
                button.disabled = true;
                button.innerHTML = 'Subscribing...';
                
                setTimeout(() => {
                    button.innerHTML = '✓ Subscribed!';
                    button.style.background = '#059669';
                    
                    // Dispatch custom event for main script
                    window.dispatchEvent(new CustomEvent('newsletterSignup', { 
                        detail: { email } 
                    }));
                    
                    setTimeout(() => {
                        form.reset();
                        button.disabled = false;
                        button.innerHTML = 'Subscribe';
                        button.style.background = '#d97706';
                    }, 3000);
                }, 1500);
            });
        }
    }
}

customElements.define('custom-newsletter', CustomNewsletter);