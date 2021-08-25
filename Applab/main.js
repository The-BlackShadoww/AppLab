 // ---------------------------- close links 

            const navToggle = document.querySelector(".nav-toggle");
            const linksContainer = document.querySelector(".links-container");
            const links = document.querySelector(".links");

            navToggle.addEventListener("click", () => {
                // linksContainer.classList.toggle("show-links");

                const containerHight = linksContainer.getBoundingClientRect().height;
                const linksHight = links.getBoundingClientRect().height;

                if (containerHight === 0) {
                    linksContainer.style.height = `${linksHight}px`;
                }
                else {
                    linksContainer.style.height = 0;
                }

            })


            // --------------------------- fixed navbar 

            const navBar = document.getElementById("nav");
            const topLink = document.querySelector(".go-top");

            window.addEventListener("scroll", () => {
                const scrollHight = window.pageYOffset;
                const navHight = navBar.getBoundingClientRect().height;
                if (scrollHight > navHight) {
                    navBar.classList.add("fixed-nav");
                }
                else {
                    navBar.classList.remove("fixed-nav")
                }

                if (scrollHight > 500) {
                    topLink.classList.add("show-go-top");
                }
                else {
                    topLink.classList.remove("show-go-top");
                }
            })

            // ------------------------- smooth scroll 

            const scrollLinks = document.querySelectorAll(".scroll-link");
            scrollLinks.forEach((link) => {
                link.addEventListener("click", (e) => {
                    e.preventDefault();
                    const id = e.currentTarget.getAttribute("href").slice(1);
                    console.log(id);
                    const element = document.getElementById(id);

                    const navHeight = navBar.getBoundingClientRect().height;
                    const containerHeight = linksContainer.getBoundingClientRect().height;
                    const fixedNav = navBar.classList.contains("fixed-nav");
                    let position = element.offsetTop - navHeight;

                    if (!fixedNav) {
                        position = position - navHeight;
                    }
                    if (navHeight > 82) {
                        position = position + containerHeight;
                    }

                    window.scrollTo({
                        left: 0,
                        top: position,
                    });
                    // close
                    linksContainer.style.height = 0;
                });
            });






            //------------------------- Review ---

            const slides = document.querySelectorAll(".rvw_slide");
            const nxtBtn = document.querySelector(".next");
            const prevBtn = document.querySelector(".prev");

            slides.forEach(function (slide, index) {
                slide.style.top = `${index * 100}%`
            })

            let count = 0;

            nxtBtn.addEventListener('click', function () {
                count++;
                rvwCarsoul()
            })

            prevBtn.addEventListener('click', function () {
                count--;
                rvwCarsoul()
            })

            function rvwCarsoul() {
                if (count === slides.length) {
                    count = 0;
                }
                if (count < 0) {
                    count = slides.length - 1;
                }
                slides.forEach(function (slide) {
                    slide.style.transform = `translateY(-${count * 100}%)`
                })
            };



            //----------------- Apps

            const boards = document.querySelectorAll('.app_board');
            const bPrev = document.querySelector(".bPrev");
            const bNxt = document.querySelector(".bNxt");

            boards.forEach(function (board, bIndex) {
                board.style.left = `${bIndex * 34}%`
            });

            bNxt.addEventListener('click', function () {
                count++;
                boardCursoul();
            });

            bPrev.addEventListener('click', function () {
                count--;
                boardCursoul();
            });


            function boardCursoul() {
                if (count > boards.length - 2) {
                    count = 0;
                }
                if (count < 0) {
                    count = boards.length - 1;
                }
                boards.forEach(function (slide) {
                    slide.style.transform = `translateX(-${count * 100}%)`
                })
            };





            //----------------- Apps-2

                const boards2 = document.querySelectorAll('.app_board_2');
                const bPrev2 = document.querySelector(".bPrev2");
                const bNxt2 = document.querySelector(".bNxt2");

                boards2.forEach(function (board, bIndex) {
                    board.style.left = `${bIndex * 100}%`
                });

                bNxt2.addEventListener('click', function () {
                    count++;
                    boardCursoul2();
                });

                bPrev2.addEventListener('click', function () {
                    count--;
                    boardCursoul2();
                });


                function boardCursoul2() {
                    if (count > boards2.length - 1) {
                        count = 0;
                    }
                    if (count < 0) {
                        count = boards2.length - 1;
                    }
                    boards2.forEach(function (slide) {
                        slide.style.transform = `translateX(-${count * 100}%)`
                    })
                };


















            // --------------------- Animations

            const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
            tl.to(".intro-logo", { width: "200px", duration: .7, delay: .2 });
            tl.to(".intro-img", { y: "0%", duration: .8 });
            tl.to(".intro_slide", { y: "-100%", duration: .7, delay: .7 });
