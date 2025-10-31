
// User roles and authentication simulation
let currentUser = {
    role: 'staff', // Default to staff view
    name: 'Housekeeper'
};

// Check for manager view
function checkUserRole() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('role') && urlParams.get('role') === 'manager') {
        currentUser.role = 'manager';
        document.getElementById('manager-view-btn').classList.remove('hidden');
        document.getElementById('stats-dashboard').classList.remove('hidden');
    }
}

// Room status counters
const statusCounts = {
    clean: 0,
    dirty: 0,
    'in-progress': 0,
    maintenance: 0
};

// Shared functionality across pages
document.addEventListener('DOMContentLoaded', function() {
    checkUserRole();
    
    // Filter functionality
    const filterBtn = document.querySelector('.filter-btn');
    const filterDropdown = document.querySelector('.filter-dropdown');
    const filterOptions = document.querySelectorAll('.filter-option');
    const roomCards = document.querySelectorAll('.room-card');
    
    filterBtn.addEventListener('click', () => {
        filterDropdown.classList.toggle('hidden');
    });
    
    filterOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const status = option.dataset.status;
            
            roomCards.forEach(card => {
                if (status === 'all') {
                    card.style.display = 'block';
                } else {
                    card.style.display = card.classList.contains(`border-${status === 'clean' ? 'green' : status === 'dirty' ? 'red' : status === 'in-progress' ? 'yellow' : 'purple'}-500`) ? 'block' : 'none';
                }
            });
            
            filterDropdown.classList.add('hidden');
        });
    });
    
    // Count statuses
    document.querySelectorAll('.room-card').forEach(card => {
        if (card.classList.contains('border-green-500')) statusCounts.clean++;
        else if (card.classList.contains('border-red-500')) statusCounts.dirty++;
        else if (card.classList.contains('border-yellow-500')) statusCounts['in-progress']++;
        else if (card.classList.contains('border-purple-500')) statusCounts.maintenance++;
    });
    
    // Update stats dashboard
    document.getElementById('clean-count').textContent = statusCounts.clean;
    document.getElementById('dirty-count').textContent = statusCounts.dirty;
    document.getElementById('progress-count').textContent = statusCounts['in-progress'];
    document.getElementById('maintenance-count').textContent = statusCounts.maintenance;
    
    // Note buttons functionality
    document.querySelectorAll('.note-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const roomNumber = btn.dataset.room;
            const action = btn.dataset.action;
            
            if (action === 'add') {
                showNotification(`Note added to Room ${roomNumber}`, 'success');
            } else {
                showNotification(`Note removed from Room ${roomNumber}`, 'error');
            }
        });
    });
    
    // Manager view button
    document.getElementById('manager-view-btn')?.addEventListener('click', () => {
        window.location.href = window.location.pathname + '?role=manager';
    });
// Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Handle status filter dropdown
    const filterButton = document.querySelector('.filter-button');
    if (filterButton) {
        filterButton.addEventListener('click', function() {
            document.querySelector('.filter-dropdown').classList.toggle('hidden');
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.filter-button') && !event.target.closest('.filter-dropdown')) {
            const dropdowns = document.querySelectorAll('.filter-dropdown');
            dropdowns.forEach(dropdown => {
                dropdown.classList.add('hidden');
            });
        }
    });
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg flex items-center ${type === 'success' ? 'bg-green-800' : type === 'error' ? 'bg-red-800' : 'bg-primary-700'}`;
    notification.innerHTML = `
        <i data-feather="${type === 'success' ? 'check-circle' : type === 'error' ? 'alert-circle' : 'info'}" class="mr-3"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(notification);
    feather.replace();
    
    setTimeout(() => {
        notification.classList.add('opacity-0', 'transition-opacity', 'duration-300');
        setTimeout(() => notification.remove(), 300);
    }, 3000);

}
