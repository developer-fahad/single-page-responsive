const hamburger = document.getElementById("hamburger");
const drawer = document.getElementById("drawer");
const closeDrawer = document.getElementById("close-drawer");
const drawerLinks = document.querySelectorAll('.drawer-links li');

// Open drawer when clicking the hamburger icon
hamburger.onclick = function() {
    drawer.classList.toggle("open");
}

// Close drawer when clicking the 'X' button
closeDrawer.onclick = function() {
    drawer.classList.remove("open");
}

// Close drawer when clicking outside of the drawer
window.onclick = function(event) {
    if (event.target !== hamburger && !drawer.contains(event.target)) {
        drawer.classList.remove("open");
    }
}

// Close drawer when clicking any menu item inside the drawer
drawerLinks.forEach(link => {
    link.onclick = function() {
        drawer.classList.remove("open");
    }
});
