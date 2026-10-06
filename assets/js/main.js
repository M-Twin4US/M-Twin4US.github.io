// Mobile navigation toggle
(function () {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('site-nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
})();

// Streamlit embed: hide the loading overlay once the iframe has loaded.
// The free-tier app may show its own "waking up" screen first; that is still a load.
(function () {
    var frame = document.getElementById('dashboard-frame');
    var loader = document.getElementById('dashboard-loader');
    if (!frame || !loader) return;
    var slowMsg = document.getElementById('dashboard-slow');
    var timer = setTimeout(function () {
        if (slowMsg) slowMsg.hidden = false;
    }, 12000);
    frame.addEventListener('load', function () {
        clearTimeout(timer);
        loader.classList.add('hidden');
    });
})();
