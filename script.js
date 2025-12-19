document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    const navLink = document.querySelector('.nav-content a')



    function toggleMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');

        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    hamburger.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleMenu();
    });

});

document.addEventListener('DOMContentLoaded', function() {
    const infoButtons = document.querySelectorAll('.teacher-info-btn');
    const closeButtons = document.querySelectorAll('.popup-close');

     function openPopup(teacherId) {
        const popup = document.getElementById(`teacher-popup-${teacherId}`);
        popup.classList.add('active'); 
     }


     function closeAllPopups() {
        document.querySelectorAll('.teacher-popup').forEach(popup => {
            popup.classList.remove('active');
        });
    }

     infoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const teacherId = this.getAttribute('data-teacher');
            openPopup(teacherId);
        });
    });

     closeButtons.forEach(button => {
        button.addEventListener('click', closeAllPopups);
    });
});
