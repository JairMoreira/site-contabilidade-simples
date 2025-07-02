        function showSection(id) {
            document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
            document.getElementById(id).classList.add('active');
        }
        window.onload = function() {
            showSection('inicio');
            document.querySelectorAll('nav a').forEach(link => {
                link.onclick = function(e) {
                    e.preventDefault();
                    showSection(this.getAttribute('href').substring(1));
                }
            });
        }
 