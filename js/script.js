
        var burgerMenu = document.getElementById('burger-menu');
        var menu = document.getElementById('menu');

        burgerMenu.addEventListener('click', function () {
            this.classList.toggle("close");
            menu.classList.toggle("show-menu");
        });

        // ปิดเมนูเมื่อกดลิงก์
        var menuLinks = document.querySelectorAll('#menu a');

        menuLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                burgerMenu.classList.remove("close");
                menu.classList.remove("show-menu");
            });
        });


  