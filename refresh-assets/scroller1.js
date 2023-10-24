/**----------------------
     * product scroller js ---
     --------------------------*/
    // tab Carousel js
    // initialize product scroller
    advanceArrows("citrus_instinct_scroller1_tab1");
    function advanceArrows(idx) {
        var splideElement = "#" + idx;
        var splideDefaultOptions = {
            arrows: true,
            type: "slide",
            start: 0,
            pagination: false,
            rewindSpeed: 500,
            speed: 500,
            pauseOnHover: true,
            perPage: 6,
            perMove: 1,
            gap:20,
            omitEnd: true,
            breakpoints: {
                375: {
                    focus: 0,
                    perPage: 2,
                },
                576: {
                    focus: 0,
                    perPage: 2,
                },
                991: {
                    focus: 0,
                    perPage: 3,
                },
                992: {
                    focus: 0,
                    perPage: 4,
                },
                1024: {
                    focus: 0,
                    perPage: 4,
                },
                1200: {
                    focus: 0,
                    perPage: 5,
                },
                1440: {
                    focus: 0,
                    perPage: 6,
                },
            },
            
        };

        new Splide(splideElement, splideDefaultOptions).mount();
    }

    /* ************************************************************************************** */
    //for tab sweater & loader added
    document.addEventListener("DOMContentLoaded", function () {
        filterProducts("citrus_instinct_scroller1_tab1");
    });
    // for dog filter function
    function filterProducts(c) {
        var x, i;
        x = document.getElementsByClassName("citrus_instinct__Product");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
            RemoveClass(x[i], "citrusTabShow");
            if (x[i].className.indexOf(c) > -1) AddClass(x[i], " citrusTabShow");
        }
        advanceArrows(c);
    }
    function AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
                element.className += " " + arr2[i];
            }
        }
    }

    function RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }

    // Add active class to the current button (highlight it)
    document.addEventListener("DOMContentLoaded", function () {
        // for dog active class filter
        var dogBtnContainer = document.getElementById("citrus_instinctTabId");
        var dogBtns = dogBtnContainer.getElementsByClassName("citrus_instinct__tab_item");
        addActiveClass(dogBtns, "citrus_instinct__active_tab");
    });
    function addActiveClass(element, activeClass) {
        for (var i = 0; i < element.length; i++) {
            element[i].addEventListener("click", function () {
                var current = document.getElementsByClassName(activeClass);
                current[0].className = current[0].className.replace(
                    " " + activeClass,
                    ""
                );
                this.className += " " + activeClass;
            });
        }
    }
    //for Dog best seller tab switcher