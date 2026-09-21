
document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {

            const isOpen = mainNav.classList.toggle("open");

            menuToggle.classList.toggle("active", isOpen);

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

            document.body.classList.toggle(
                "menu-open",
                isOpen
            );

        });


        /* Закрываем меню после выбора пункта */

        const navLinks = mainNav.querySelectorAll("a");

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                mainNav.classList.remove("open");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                document.body.classList.remove(
                    "menu-open"
                );

            });

        });

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".intro-grid, " +
        ".direction-card, " +
        ".featured-route-card, " +
        ".manifesto-text, " +
        ".gallery-item, " +
        ".final-cta-inner"
    );


    revealElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform = "translateY(35px)";

        element.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

    });


    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* =====================================================
       HEADER ON SCROLL
    ===================================================== */

    const header = document.querySelector(".site-header");

    if (header) {

        let lastScroll = 0;

        window.addEventListener(
            "scroll",
            () => {

                const currentScroll = window.scrollY;

                if (currentScroll > 80) {
                    header.classList.add("scrolled");
                } else {
                    header.classList.remove("scrolled");
                }

                lastScroll = currentScroll;

            },
            { passive: true }
        );

    }


    /* =====================================================
       ESC — CLOSE MOBILE MENU
    ===================================================== */

    document.addEventListener("keydown", event => {

        if (event.key !== "Escape") {
            return;
        }

        if (!mainNav || !menuToggle) {
            return;
        }

        mainNav.classList.remove("open");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove(
            "menu-open"
        );

    });

});

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {

            const isOpen = mainNav.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            document.body.classList.toggle(
                "menu-open",
                isOpen
            );

        });


        mainNav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                mainNav.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                document.body.classList.remove("menu-open");

            });

        });

    }


    /* =====================================================
       HEADER SCROLL
    ===================================================== */

    const header = document.querySelector(".site-header");

    if (header) {

        const checkHeader = () => {

            if (window.scrollY > 80) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        };

        checkHeader();

        window.addEventListener(
            "scroll",
            checkHeader,
            { passive: true }
        );

    }


    /* =====================================================
       ESCAPE
    ===================================================== */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closeRouteModal();

            if (mainNav && menuToggle) {

                mainNav.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                document.body.classList.remove(
                    "menu-open"
                );

            }

        }

    });


    /* =====================================================
       ROUTE ACCORDIONS
    ===================================================== */

    const categories =
        document.querySelectorAll(".route-category");

    categories.forEach(category => {

        const button =
            category.querySelector(
                ".route-category__header"
            );

        if (!button) return;

        button.addEventListener("click", () => {

            const isOpen =
                category.classList.contains("open");


            /*
             * Если хотим, чтобы одновременно
             * была открыта только одна категория,
             * закрываем остальные.
             */

            categories.forEach(otherCategory => {

                if (otherCategory !== category) {

                    otherCategory.classList.remove(
                        "open"
                    );

                    const otherButton =
                        otherCategory.querySelector(
                            ".route-category__header"
                        );

                    if (otherButton) {

                        otherButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                }

            });


            category.classList.toggle(
                "open",
                !isOpen
            );

            button.setAttribute(
                "aria-expanded",
                !isOpen ? "true" : "false"
            );

        });

    });


    /* =====================================================
       ROUTE DATA
    ===================================================== */

    const routes = {

        alps: {

            title: "Альпы",

            country: "Австрия",

            difficulty: "Средняя",

            nights: "Палатки / отели",

            duration: "5–6 дней",

            children: "Да",

            images: [
                "images/routes/alps.jpg",
                "images/routes/alps-02.jpg",
                "images/routes/alps-03.jpg"
            ],

            description:
                "Маршрут для тех, кто хочет увидеть настоящие Альпы " +
                "и при этом не превращать путешествие в спортивный марафон. " +
                "Днём — горные тропы, озёра и небольшие деревни. " +
                "Вечером — спокойный отдых и возможность выбрать между " +
                "палаткой и уютным отелем. Маршрут можно адаптировать " +
                "под разный темп путешествия."

        },


        tatry: {

            title: "Татры",

            country: "Словакия",

            difficulty: "Средняя",

            nights: "Отели / приюты",

            duration: "4 дня",

            children: "С ограничениями",

            images: [
                "images/routes/tatry.jpg",
                "images/routes/tatry-02.jpg",
                "images/routes/tatry-03.jpg"
            ],

            description:
                "Компактное горное путешествие среди высоких вершин, " +
                "лесов и горных озёр. Татры подходят тем, кто хочет " +
                "попробовать полноценный хайкинг, но не готов выделять " +
                "на путешествие целую неделю. Некоторые участки требуют " +
                "хорошей физической подготовки."

        },


        dolomites: {

            title: "Доломиты",

            country: "Италия",

            difficulty: "Высокая",

            nights: "Приюты / отели",

            duration: "6–7 дней",

            children: "Нет",

            images: [
                "images/routes/dolomites.jpg",
                "images/routes/dolomites-02.jpg",
                "images/routes/dolomites-03.jpg"
            ],

            description:
                "Высокогорный маршрут среди характерных скальных массивов " +
                "Доломитов. Здесь много подъёмов, длинных переходов и " +
                "открытых участков. Это путешествие для тех, кто хочет " +
                "проводить большую часть дня на тропе и готов к более " +
                "серьёзной физической нагрузке."

        },


        prague: {

            title: "Прага",

            country: "Чехия",

            difficulty: "Лёгкая",

            nights: "Отели",

            duration: "3 дня",

            children: "Да",

            images: [
                "images/routes/prague.jpg",
                "images/routes/prague-02.jpg",
                "images/routes/prague-03.jpg"
            ],

            description:
                "Прага отлично подходит для короткого путешествия без " +
                "жёсткого плана. Старый город, узкие улицы, мосты, " +
                "маленькие кафе и вечерние прогулки. За несколько дней " +
                "можно увидеть основные места и оставить достаточно " +
                "времени просто побродить по городу."

        },


        budapest: {

            title: "Будапешт",

            country: "Венгрия",

            difficulty: "Лёгкая",

            nights: "Отели",

            duration: "3 дня",

            children: "Да",

            images: [
                "images/routes/budapest.jpg",
                "images/routes/budapest-02.jpg",
                "images/routes/budapest-03.jpg"
            ],

            description:
                "Город, который удобно исследовать пешком. Дунай, " +
                "исторические кварталы, необычная архитектура и знаменитые " +
                "термы. Хороший вариант для тех, кто хочет сменить обстановку " +
                "на несколько дней и при этом не перегружать поездку."

        },


        krakow: {

            title: "Краков + Закопане",

            country: "Польша",

            difficulty: "Лёгкая / средняя",

            nights: "Отели",

            duration: "4 дня",

            children: "Да",

            images: [
                "images/routes/krakow.jpg",
                "images/routes/krakow-02.jpg",
                "images/routes/krakow-03.jpg"
            ],

            description:
                "Два совершенно разных впечатления в одном путешествии. " +
                "Сначала — старый Краков с его площадями и историческими " +
                "улицами, затем — Закопане и горы. Подходит тем, кто хочет " +
                "совместить городскую поездку с природой."

        },


        wroclaw: {

            title: "Вроцлав",

            country: "Польша",

            difficulty: "Лёгкая",

            nights: "Отель",

            duration: "2 дня",

            children: "Да",

            images: [
                "images/routes/wroclaw.jpg",
                "images/routes/wroclaw-02.jpg",
                "images/routes/wroclaw-03.jpg"
            ],

            description:
                "Идеальный формат короткого путешествия. Цветные фасады, " +
                "острова на Одре, небольшие мосты и город, который интересно " +
                "исследовать без чёткого маршрута. Хороший вариант, если " +
                "на полноценный отпуск времени пока нет."

        },


        gdansk: {

            title: "Гданьск",

            country: "Польша",

            difficulty: "Лёгкая",

            nights: "Отель",

            duration: "2–3 дня",

            children: "Да",

            images: [
                "images/routes/gdansk.jpg",
                "images/routes/gdansk-02.jpg",
                "images/routes/gdansk-03.jpg"
            ],

            description:
                "Балтийское море, старый город и длинные прогулки вдоль " +
                "воды. Гданьск хорошо подходит для спокойного уикенда, " +
                "когда хочется сменить привычную обстановку, но не хочется " +
                "планировать сложное путешествие."

        },


        karlovy: {

            title: "Карловы Вары",

            country: "Чехия",

            difficulty: "Лёгкая",

            nights: "Отель",

            duration: "3 дня",

            children: "Да",

            images: [
                "images/routes/karlovy.jpg",
                "images/routes/karlovy-02.jpg",
                "images/routes/karlovy-03.jpg"
            ],

            description:
                "Спокойное путешествие среди исторической архитектуры, " +
                "лесов и прогулочных маршрутов. Можно совместить городскую " +
                "прогулку с лёгким походом и провести несколько дней " +
                "без плотного расписания."

        }

    };


    /* =====================================================
       MODAL
    ===================================================== */

    const modal =
        document.getElementById("routeModal");

    const modalMainImage =
        document.getElementById("modalMainImage");

    const modalThumbs =
        document.getElementById("modalThumbs");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalCountry =
        document.getElementById("modalCountry");

    const modalFacts =
        document.getElementById("modalFacts");

    const modalDescription =
        document.getElementById("modalDescription");

    const closeButton =
        document.querySelector(".route-modal__close");

    const backdrop =
        document.querySelector(".route-modal__backdrop");


    function openRouteModal(routeId) {

        const route = routes[routeId];

        if (!route || !modal) return;


        modalTitle.textContent =
            route.title;

        modalCountry.textContent =
            route.country;

        modalDescription.textContent =
            route.description;


        /* FACTS */

        modalFacts.innerHTML = `

            <div class="route-modal__fact">
                <span>Сложность</span>
                <span>${route.difficulty}</span>
            </div>

            <div class="route-modal__fact">
                <span>Продолжительность</span>
                <span>${route.duration}</span>
            </div>

            <div class="route-modal__fact">
                <span>Ночёвки</span>
                <span>${route.nights}</span>
            </div>

            <div class="route-modal__fact">
                <span>С детьми</span>
                <span>${route.children}</span>
            </div>

        `;


        /* MAIN IMAGE */

        modalMainImage.src =
            route.images[0];

        modalMainImage.alt =
            route.title;


        /* THUMBNAILS */

        modalThumbs.innerHTML = "";


        route.images.forEach(
            (image, index) => {

                const button =
                    document.createElement("button");

                button.className =
                    "route-modal__thumb";

                if (index === 0) {
                    button.classList.add("active");
                }

                button.type = "button";

                button.innerHTML = `
                    <img
                        src="${image}"
                        alt="${route.title}"
                    >
                `;


                button.addEventListener(
                    "click",
                    () => {

                        modalMainImage.src =
                            image;

                        modalThumbs
                            .querySelectorAll(
                                ".route-modal__thumb"
                            )
                            .forEach(
                                thumb =>
                                    thumb.classList.remove(
                                        "active"
                                    )
                            );

                        button.classList.add(
                            "active"
                        );

                    }
                );


                modalThumbs.appendChild(
                    button
                );

            }
        );


        modal.classList.add("open");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "modal-open"
        );

    }


    window.closeRouteModal =
        function () {

            if (!modal) return;

            modal.classList.remove(
                "open"
            );

            modal.setAttribute(
                "aria-hidden",
                "true"
            );

            document.body.classList.remove(
                "modal-open"
            );

        };


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeRouteModal
        );

    }


    if (backdrop) {

        backdrop.addEventListener(
            "click",
            closeRouteModal
        );

    }


    /* OPEN CARD */

    document
        .querySelectorAll(".route-card")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    const routeId =
                        card.dataset.route;

                    openRouteModal(
                        routeId
                    );

                }
            );

        });


    /* =====================================================
       QUIZ
    ===================================================== */

    const quiz =
        document.querySelector(".quiz");

    if (quiz) {

        const startButton =
            quiz.querySelector(".quiz__start");

        const nextButton =
            quiz.querySelector(".quiz__next");

        const backButton =
            quiz.querySelector(".quiz__back");

        const restartButton =
            quiz.querySelector(".quiz__restart");

        const questionElement =
            document.getElementById(
                "quizQuestion"
            );

        const answersElement =
            document.getElementById(
                "quizAnswers"
            );

        const progressText =
            quiz.querySelector(
                ".quiz__progress-text"
            );

        const progressBar =
            quiz.querySelector(
                ".quiz__progress-line span"
            );

        const resultTitle =
            document.getElementById(
                "quizResultTitle"
            );

        const resultText =
            document.getElementById(
                "quizResultText"
            );

        const resultButton =
            quiz.querySelector(
                ".quiz__result-button"
            );


        const questions = [

            {
                question:
                    "Сколько у вас времени?",

                answers: [
                    {
                        text: "2–3 дня",
                        value: "short"
                    },
                    {
                        text: "4–5 дней",
                        value: "medium"
                    },
                    {
                        text: "Неделя и больше",
                        value: "long"
                    }
                ]
            },

            {
                question:
                    "Что хочется больше всего?",

                answers: [
                    {
                        text: "Горы",
                        value: "mountains"
                    },
                    {
                        text: "Город",
                        value: "city"
                    },
                    {
                        text: "Природа",
                        value: "nature"
                    },
                    {
                        text: "Всего понемногу",
                        value: "mixed"
                    }
                ]
            },

            {
                question:
                    "Как относитесь к физической нагрузке?",

                answers: [
                    {
                        text: "Хочу отдыхать",
                        value: "easy"
                    },
                    {
                        text: "Готов немного устать",
                        value: "medium"
                    },
                    {
                        text:
                            "Чем сложнее, тем интереснее",
                        value: "hard"
                    }
                ]
            },

            {
                question:
                    "Где хочется ночевать?",

                answers: [
                    {
                        text: "Только отель",
                        value: "hotel"
                    },
                    {
                        text: "Отель или приют",
                        value: "shelter"
                    },
                    {
                        text:
                            "Палатка — почему бы и нет",
                        value: "tent"
                    }
                ]
            },

            {
                question:
                    "Едете с детьми?",

                answers: [
                    {
                        text: "Да",
                        value: "children"
                    },
                    {
                        text: "Нет",
                        value: "no-children"
                    }
                ]
            }

        ];


        let currentQuestion = 0;

        let selectedAnswer = null;

        let answers = [];


        function renderQuestion() {

            const question =
                questions[currentQuestion];


            questionElement.textContent =
                question.question;


            progressText.textContent =
                `Вопрос ${currentQuestion + 1} из ${questions.length}`;


            progressBar.style.width =
                `${((currentQuestion + 1) / questions.length) * 100}%`;


            answersElement.innerHTML = "";

            selectedAnswer =
                answers[currentQuestion] || null;


            question.answers.forEach(
                answer => {

                    const button =
                        document.createElement("button");

                    button.type = "button";

                    button.className =
                        "quiz__answer";

                    button.textContent =
                        answer.text;


                    if (
                        selectedAnswer ===
                        answer.value
                    ) {

                        button.classList.add(
                            "selected"
                        );

                    }


                    button.addEventListener(
                        "click",
                        () => {

                            selectedAnswer =
                                answer.value;

                            answers[currentQuestion] =
                                answer.value;


                            answersElement
                                .querySelectorAll(
                                    ".quiz__answer"
                                )
                                .forEach(
                                    item =>
                                        item.classList.remove(
                                            "selected"
                                        )
                                );


                            button.classList.add(
                                "selected"
                            );


                            nextButton.disabled =
                                false;

                        }
                    );


                    answersElement.appendChild(
                        button
                    );

                }
            );


            nextButton.disabled =
                !selectedAnswer;


            backButton.style.visibility =
                currentQuestion === 0
                    ? "hidden"
                    : "visible";


            nextButton.textContent =
                currentQuestion ===
                questions.length - 1
                    ? "Получить результат →"
                    : "Далее →";

        }


        function calculateResult() {

            const result = {

                mountains: 0,
                city: 0,
                nature: 0,

                short: 0,
                medium: 0,
                long: 0,

                easy: 0,
                hard: 0,

                hotel: 0,
                tent: 0,

                children: 0,
                noChildren: 0

            };


            answers.forEach(answer => {

                if (!answer) return;

                if (result[answer] !== undefined) {
                    result[answer]++;
                }

                if (answer === "no-children") {
                    result.noChildren++;
                }

            });


            /*
             * Основной принцип:
             * сначала определяем тип путешествия,
             * затем учитываем остальные ответы.
             */


            let route = "prague";


            /* ГОРЫ */

            if (result.mountains > 0) {

                if (
                    result.hard > 0 &&
                    result.noChildren > 0 &&
                    result.long > 0
                ) {

                    route = "dolomites";

                } else if (
                    result.tent > 0 ||
                    result.medium > 0
                ) {

                    route = "alps";

                } else {

                    route = "tatry";

                }

            }


            /* ГОРОДА */

            else if (result.city > 0) {

                if (
                    result.medium > 0 ||
                    result.nature > 0
                ) {

                    route = "krakow";

                } else if (
                    result.short > 0
                ) {

                    route = "budapest";

                } else {

                    route = "prague";

                }

            }


            /* ПРИРОДА */

            else if (result.nature > 0) {

                if (result.long > 0) {

                    route = "alps";

                } else {

                    route = "karlovy";

                }

            }


            /* ВСЕГО ПОНЕМНОГУ */

            else {

                if (result.short > 0) {

                    route = "wroclaw";

                } else {

                    route = "krakow";

                }

            }


            return route;

        }


        function showResult() {

            const routeId =
                calculateResult();

            const route =
                routes[routeId];


            resultTitle.textContent =
                route.title;


            resultText.textContent =
                `${route.country}. ${route.description}`;


            resultButton.dataset.route =
                routeId;


            quiz.classList.add(
                "finished"
            );

        }


        startButton.addEventListener(
            "click",
            () => {

                quiz.classList.add(
                    "started"
                );

                currentQuestion = 0;

                answers = [];

                renderQuestion();

            }
        );


        nextButton.addEventListener(
            "click",
            () => {

                if (!selectedAnswer) return;


                if (
                    currentQuestion <
                    questions.length - 1
                ) {

                    currentQuestion++;

                    renderQuestion();

                } else {

                    showResult();

                }

            }
        );


        backButton.addEventListener(
            "click",
            () => {

                if (currentQuestion > 0) {

                    currentQuestion--;

                    renderQuestion();

                }

            }
        );


        restartButton.addEventListener(
            "click",
            () => {

                quiz.classList.remove(
                    "finished"
                );

                quiz.classList.remove(
                    "started"
                );

                currentQuestion = 0;

                answers = [];

                selectedAnswer = null;

            }
        );


        resultButton.addEventListener(
            "click",
            () => {

                const routeId =
                    resultButton.dataset.route;

                if (routeId) {

                    openRouteModal(
                        routeId
                    );

                }

            }
        );

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".route-card, .route-category, .quiz"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.08
                }
            );


        revealElements.forEach(
            element =>
                observer.observe(element)
        );

    }

});
