// Website functionality for Personal Care & Shopping Assistant

// Initialize page features
document.addEventListener('DOMContentLoaded', function() {
    // Animate stat cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0.1s';
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);
    
    // Observe stat cards and feature cards
    document.querySelectorAll('.stat-card, .feature-card').forEach(card => {
        observer.observe(card);
    });
    
    // Initialize stats updates
    updateStats();
});

// Simulated real-time data updates
function updateStats() {
    const stats = [
        { value: '$150', element: document.querySelectorAll('.stat-value')[0] },
        { value: '$87', element: document.querySelectorAll('.stat-value')[1] },
        { value: '$23', element: document.querySelectorAll('.stat-value')[2] },
        { value: '$63', element: document.querySelectorAll('.stat-value')[3] }
    ];
    
    // Simulate slight changes in spending/savings after 30 seconds
    setTimeout(() => {
        if (document.querySelectorAll('.stat-value')[1]) {
            document.querySelectorAll('.stat-value')[1].textContent = '$89';
            document.querySelectorAll('.stat-value')[2].textContent = '$25';
            document.querySelectorAll('.stat-value')[3].textContent = '$61';
        }
    }, 30000);
}
