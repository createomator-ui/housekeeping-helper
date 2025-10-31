class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    background-color: rgb(17, 24, 39);
                    color: rgba(255, 255, 255, 0.6);
                    padding: 1.5rem;
                    margin-top: 2rem;
                }
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                }
                .footer-links {
                    display: flex;
                    gap: 1.5rem;
                }
                .footer-link {
                    color: rgba(255, 255, 255, 0.6);
                    text-decoration: none;
                    transition: color 0.2s;
                }
                .footer-link:hover {
                    color: white;
                }
                .copyright {
                    font-size: 0.875rem;
                }
                @media (max-width: 768px) {
                    .footer-content {
                        flex-direction: column;
                        gap: 1rem;
                        text-align: center;
                    }
                    .footer-links {
                        order: -1;
                    }
                }
            </style>
            <div class="footer-content">
                <div class="copyright">
                    &copy; ${new Date().getFullYear()} RoomRanger. All rights reserved.
                </div>
                <div class="footer-links">
                    <a href="/privacy" class="footer-link">Privacy</a>
                    <a href="/terms" class="footer-link">Terms</a>
                    <a href="/contact" class="footer-link">Contact</a>
                    <a href="/help" class="footer-link">Help</a>
                </div>
            </div>
        `;
    }
}
customElements.define('custom-footer', CustomFooter);
