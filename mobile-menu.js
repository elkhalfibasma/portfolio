// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);
    
    if (mobileMenuBtn && mobileMenu) {
        // Toggle menu
        mobileMenuBtn.addEventListener('click', function() {
            const isOpen = mobileMenu.classList.contains('show');
            
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });
        
        // Close menu when clicking on overlay
        overlay.addEventListener('click', function() {
            closeMenu();
        });
        
        // Close menu when clicking on a link
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMenu();
            });
        });
        
        // Close menu on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('show')) {
                closeMenu();
            }
        });
    }
    
    function openMenu() {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex', 'show');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    function closeMenu() {
        mobileMenu.classList.remove('show');
        overlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
        
        // Wait for animation to complete before hiding
        setTimeout(() => {
            if (!mobileMenu.classList.contains('show')) {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            }
        }, 300);
    }
});
