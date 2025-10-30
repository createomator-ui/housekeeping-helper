class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    background-color: rgb(17, 24, 39);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                }
                .navbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem 1.5rem;
                    max-width: 100%;
                }
                .logo {
                    display: flex;
                    align-items: center;
                    font-weight: 700;
                    font-size: 1.25rem;
                    color: white;
                }
                .logo-icon {
                    margin-right: 0.75rem;
                    color: #3B82F6;
                }
                .nav-links {
                    display: flex;
                    gap: 1.5rem;
                }
                .nav-link {
                    color: rgba(255, 255, 255, 0.7);
                    text-decoration: none;
                    transition: color 0.2s;
                    display: flex;
                    align-items: center;
                }
                .nav-link:hover {
                    color: white;
                }
                .nav-icon {
                    margin-right: 0.5rem;
                    width: 1rem;
                    height: 1rem;
                }
                .user-menu {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                .avatar {
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 9999px;
                    background-color: rgb(55, 65, 81);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-weight: 600;
                }
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    .mobile-menu-button {
                        display: block;
                    }
                }
            </style>
            <nav class="navbar">
                <a href="/" class="logo">
                    <i data-feather="home" class="logo-icon"></i>
                    RoomRanger
                </a>
                
                <div class="nav-links">
                    <a href="/" class="nav-link">
                        <i data-feather="grid" class="nav-icon"></i>
                        Dashboard
                    </a>
                    <a href="/rooms.html" class="nav-link">
                        <i data-feather="list" class="nav-icon"></i>
                        All Rooms
                    </a>
                    <a href="/reports.html" class="nav-link">
                        <i data-feather="file-text" class="nav-icon"></i>
                        Reports
                    </a>
                    <a href="/settings.html" class="nav-link">
                        <i data-feather="settings" class="nav-icon"></i>
                        Settings
                    </a>
                </div>
                
                <div class="user-menu">
                    <div class="avatar">JD</div>
                </div>
            </nav>
        `;
    }
}
customElements.define('custom-navbar', CustomNavbar);