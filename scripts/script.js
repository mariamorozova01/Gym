    function scrollToSchedule() {
        const scheduleSection = document.getElementById("schedule");
        scheduleSection.scrollIntoView({ behavior: "smooth" });
    }


    function toggleMenu() {
        const navOverlay = document.getElementById("nav-overlay");
        navOverlay.classList.toggle("active");
    }
    
    