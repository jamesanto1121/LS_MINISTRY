// --- Mobile Drawer Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn') || document.getElementById('close-menu-btn');
    const drawer = document.getElementById('mobile-drawer');
    const panel = document.getElementById('drawer-panel');
    const backdrop = document.getElementById('drawer-backdrop');

    if (menuBtn && drawer) {
        const openDrawer = () => {
            drawer.classList.remove('invisible', 'opacity-0', 'pointer-events-none');
            setTimeout(() => panel.classList.remove('translate-x-full'), 10);
            document.body.style.overflow = 'hidden';
        };

        const closeDrawer = () => {
            panel.classList.add('translate-x-full');
            setTimeout(() => {
                drawer.classList.add('invisible', 'opacity-0', 'pointer-events-none');
                document.body.style.overflow = '';
            }, 300);
        };

        menuBtn.addEventListener('click', openDrawer);
        if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
        if (backdrop) backdrop.addEventListener('click', closeDrawer);
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !drawer.classList.contains('invisible')) {
                closeDrawer();
            }
        });
    }

    // --- Mobile Accordion Logic ---
    const toggles = document.querySelectorAll('.mobile-dropdown-toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const submenu = toggle.nextElementSibling;
            const icon = toggle.querySelector('[data-lucide="chevron-down"], .fa-chevron-down, span:last-child');
            
            if (!submenu) return;

            const isOpen = !submenu.classList.contains('hidden');
            
            // Toggle visibility
            if (isOpen) {
                submenu.classList.add('hidden');
                if(icon) icon.style.transform = 'rotate(0deg)';
            } else {
                submenu.classList.remove('hidden');
                if(icon) icon.style.transform = 'rotate(180deg)';
            }
        });
    });

    // --- Active Link Highlighting ---
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link, .nav-item, .mobile-nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
            // Optional: Add specific active styles here if not handled by CSS
        }
    });
});

// --- Language Switcher Logic ---
window.setLanguage = function(langCode) {
    const currentPath = window.location.pathname;
    const fileName = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    
    let newPath = '';

    if (langCode === 'ta') {
        // If already in /ta/, do nothing or stay. 
        // If in root, go to /ta/filename
        if (currentPath.includes('/ta/')) {
            return; // Already Tamil
        }
        newPath = '/ta/' + fileName;
    } else if (langCode === 'en') {
        // If in /ta/, remove it.
        // If in root, do nothing.
        if (currentPath.includes('/ta/')) {
            newPath = '/' + fileName;
        } else {
            return; // Already English
        }
    }

    // Handle index.html specifically for cleaner URLs if desired, 
    // but keeping explicit filenames is safer for static hosting/file:// protocol
    if (fileName === '') {
        newPath = langCode === 'ta' ? '/ta/index.html' : '/index.html';
    }

    window.location.href = newPath;
};