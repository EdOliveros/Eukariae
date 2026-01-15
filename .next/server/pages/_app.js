(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.59566939.png","height":537,"width":550,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA0UlEQVR42mM4dWjrmSPbL53aW1dZuGTe5PPHdwFFgIgByJo5uXP6xA4ne6vKkpyM5JgVC6dfOLGb4erZ/SkJkW7OdnFRITkZiQwMDPNn9l88uYdh1+bl82b0hQR6r1s+e/nCadHhgfVVhRkpsQxAMKWvFSh9ZM+GAzvX7N22SktDJSo8gKG1obyusuDgzrUJMWFlhZn7d6yprcgHSjOcP7Zz0ZyJ5UVZ2WnxSXHhcdEhe7euBFl+7tiO+TP65kzr2bxm4Zqls2ZN6Tq8e92ZI9sAtFxqrdJJaQcAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./config/api.js
var api = __webpack_require__(2664);
;// CONCATENATED MODULE: ./components/Header/index.js






const Header = ({ config  })=>{
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    const [isDarkMode, setIsDarkMode] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const theme = localStorage.getItem("theme") || "light";
        setIsDarkMode(theme === "dark");
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            document.body.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            document.body.setAttribute("data-theme", "light");
        }
    }, []);
    const toggleTheme = ()=>{
        const newTheme = !isDarkMode ? "dark" : "light";
        setIsDarkMode(!isDarkMode);
        localStorage.setItem("theme", newTheme);
        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
            document.body.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            document.body.setAttribute("data-theme", "light");
        }
    };
    const navLinks = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Blog",
            href: "/blog"
        },
        {
            name: "Products",
            href: "/productos"
        },
        {
            name: "About",
            href: "/quienes-somos"
        },
        {
            name: "Contact",
            href: "/contacto"
        }
    ];
    const logoSrc = config && config.logo ? `${api/* UPLOADS_BASE_URL */.D}/${config.logo}` : logo;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "sticky top-0 z-[1050] bg-primary dark:bg-[#2c2c2c] text-text-base dark:text-[#e0e0e0] shadow-base transition-all duration-300 py-3 px-6 md:px-12",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "container mx-auto flex items-center justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-16 md:w-20",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                width: 60,
                                height: 60,
                                src: logoSrc,
                                alt: config?.siteName || "Logo",
                                className: "h-auto w-full object-contain"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden lg:flex items-center gap-8",
                        children: navLinks.map((link)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                href: link.href,
                                className: "relative text-sm font-medium tracking-wide transition-all duration-300 hover:text-accent group",
                                children: [
                                    link.name,
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "absolute left-0 bottom-[-4px] w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"
                                    })
                                ]
                            }, link.name))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "w-10 h-10 rounded-full border-2 border-text-base dark:border-[#e0e0e0] flex items-center justify-center transition-all duration-300 hover:bg-text-base hover:text-bg-base dark:hover:bg-[#e0e0e0] dark:hover:text-[#121212] hover:rotate-[15deg]",
                                onClick: toggleTheme,
                                "aria-label": "Toggle Dark Mode",
                                children: isDarkMode ? /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "20",
                                    height: "20",
                                    fill: "currentColor",
                                    viewBox: "0 0 16 16",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                                    })
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "18",
                                    height: "18",
                                    fill: "currentColor",
                                    viewBox: "0 0 16 16",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "lg:hidden w-10 h-10 flex items-center justify-center text-text-base dark:text-[#e0e0e0]",
                                onClick: ()=>setIsOpen(!isOpen),
                                "aria-label": "Toggle menu",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    className: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: isOpen ? /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4 6h16M4 12h16M4 18h16"
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-64 mt-4" : "max-h-0"}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-col items-center gap-4 pb-4",
                    children: navLinks.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: link.href,
                            className: "text-sm font-medium tracking-wide transition-all duration-300 hover:text-accent",
                            onClick: ()=>setIsOpen(false),
                            children: link.name
                        }, link.name))
                })
            })
        ]
    });
};


;// CONCATENATED MODULE: ./public/assets/rayita.png
/* harmony default export */ const rayita = ({"src":"/_next/static/media/rayita.5d3c56d3.png","height":100,"width":112,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAAAAAAQMlOCAAAAJ0lEQVR42mP49//ffyD6x/Dv3/+///7/AzO+/URnfP8FZYARA0wXANQyN30f6y8KAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./public/assets/facebook-round-icon.png
/* harmony default export */ const facebook_round_icon = ({"src":"/_next/static/media/facebook-round-icon.f38bdd46.png","height":400,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAWUlEQVR42jXLvQ2CUABG0bOIW1i7xEN7d7H3ZwIbH5UmjsMOEEJB/ZG8hOoUNxfoVD8XgKeIRbzgLOLtaBKFKmYHJ6uo9NLKrdnvy9Wn2cFdDEbxACj+vgpsp+oksRzYefsAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/instagram-round-icon.png
/* harmony default export */ const instagram_round_icon = ({"src":"/_next/static/media/instagram-round-icon.383a9ee9.png","height":400,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAUklEQVR42iXMsQnDQBAAwSlUX5ITg8C8QM6dGf11pcdWBafg4mUHaMKwAGzS9JO2qql7Wz2khXDqDh9PUxCm1dehO0Utu5dulxqFXv4KBc0wqt6N2yREXQQRsQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/pinterest-round-icon.png
/* harmony default export */ const pinterest_round_icon = ({"src":"/_next/static/media/pinterest-round-icon.a64254ac.png","height":400,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAaElEQVR42g3EoQ4BAQAG4M+7eAIb3QQZSbTZBBNUwUSyQFBsV26iYrtywe4R7nX+uy98ImzUKosIoRBfP3ELtmLl7tQfM/5KZwexVntTaexNxVzryVKURnYuYiy8FD4ijiHC0NXDJAw6on8qHq3gVHoAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/visa-icon.png
/* harmony default export */ const visa_icon = ({"src":"/_next/static/media/visa-icon.02281f9d.png","height":400,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAgVBMVEWAgIB/f4B/f39/eXr//wC1tZCnp4ugooyen4qno4icnIiOjoSNjYOVlIWSkYSBgH+MhHwAAGYAAGiAgH9/f3+AgICKioKJiYJ+fn99fn99fX+AgIB+f4B9fX9/f390fIN/f39/f4B/f38CCm4VFG4jH26edVgAAHEAC28MFG8PFm9A0H/2AAAAK3RSTlMAAAAAAQsODg4PDw8PERIUFRghIyMkMTI0NDQ1NTU2OD1OT19hY2ZrbG6G2IZcgQAAAElJREFUeNody0UWgDAQBNHO4O4wOAnO/Q9IXmpdHyQEdIRqGpj7pYHMAz9xI4XVvu7jLTps1rk/X9lCZl6YOrFCPTLzrGciGP4DnlsEZylKvfkAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/master-card-icon.png
/* harmony default export */ const master_card_icon = ({"src":"/_next/static/media/master-card-icon.91efa681.png","height":400,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAyUlEQVR42mMgCOoaGgSa6uq081tbVRimTJdmyJshnV/botrUUK9dV98gwNBYX++R19YmvywrS/9wRGD0tal+USs78rTyaloUGhvqPRg6amqcGBgYGB5ICc5+asH7/8c0hv9/ljI0g8R6mqqdGVprax1BnBvMDCG3jDj2fJjMsPPTHAZ3kFhbI1Cuvr7eva2hUYWhukaZIadQh8GnRIshslqlo6VBpQ4ox9BQX88PZGh2NTSoTW5uUp3a0aja09qgBhJrbKjnJ+hLAOs4SOOj2S+JAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/paypal-color-icon.png
/* harmony default export */ const paypal_color_icon = ({"src":"/_next/static/media/paypal-color-icon.119f4ca4.png","height":400,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAmklEQVR42mMgCOrrGwQbGhq06uoaNLu76hS7uxsV6+obNRsa6rVAciAFHkBJlY62WunY1Fb7uKgK287mMmmgIuX6+npPkAJ7uHHyzUcYnCefgZve0GCPqiBhxQqGqbfikBTYga2ob2xSaaoskMvsX2vY3tUm01qVK1vf0ASywgOkQADI0AIq0mirzlOpq6vTBEpqNNRDHEnQlwARxkIMYk8CVQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/online-secure-payment-icon.png
/* harmony default export */ const online_secure_payment_icon = ({"src":"/_next/static/media/online-secure-payment-icon.f2a8496e.png","height":498,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAoElEQVR42k3JMauBARhH8fNe3dv9APfG8hYyKIsFq1Eio7IpMpgkgwwWm4EBMSlJMtsNVkX5Qs5gcOrX89QfiwiLa6iHTqrwUUw7rbXRUlu1eJdWURlllVBHPQhpkqTKLyWgrLpSGmghbrrqSYQLXtXVVh+mjFjRpUEIft/MgYJmqhEcg7seTlWgzz9jIKdQtmcSHIIzeSf4I0YU+JHx9QJzaxza7wQwRQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/vip-label-icon.png
/* harmony default export */ const vip_label_icon = ({"src":"/_next/static/media/vip-label-icon.42bd759b.png","height":308,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAQAAADSmGXeAAAATElEQVR42iXIvQ1FUBgA0JO3yZtBolPZgMQOxjCHRUStt4q4hb+bfAqnPCTZ43Q5hJ0wa7R6hUkQVj+1yt/yxaY06IxCJgm37HIL6QXcbx4InHJVhgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./components/Footer/Footer.js














const Footer = ({ config  })=>{
    const socialIcons = [
        {
            src: facebook_round_icon,
            alt: "Facebook",
            href: config?.socialLinks?.facebook
        },
        {
            src: instagram_round_icon,
            alt: "Instagram",
            href: config?.socialLinks?.instagram || "https://www.instagram.com/eukariae/"
        },
        {
            src: pinterest_round_icon,
            alt: "Pinterest",
            href: config?.socialLinks?.twitter
        },
        {
            src: rayita,
            alt: "Separator"
        }
    ];
    const paymentIcons = [
        {
            src: visa_icon,
            alt: "Visa"
        },
        {
            src: master_card_icon,
            alt: "Mastercard"
        },
        {
            src: paypal_color_icon,
            alt: "Paypal"
        },
        {
            src: online_secure_payment_icon,
            alt: "Secure Payment"
        },
        {
            src: vip_label_icon,
            alt: "Online Payment"
        }
    ];
    const infoSections = [
        "HELP & INFORMATION",
        "ABOUT EUKARIAE",
        "OUR MISSION",
        "CONSERVATION"
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "mt-auto bg-bg-base dark:bg-[#121212] text-text-base dark:text-[#e0e0e0] transition-colors duration-300",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container mx-auto px-6 py-12",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-wrap justify-center items-center gap-6 mb-12",
                    children: [
                        ...socialIcons,
                        ...paymentIcons
                    ].map((icon, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-10 transition-transform duration-300 hover:-translate-y-1 cursor-pointer",
                            children: icon.href ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: icon.href,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: icon.src,
                                    alt: icon.alt,
                                    className: "rounded-full w-full h-auto"
                                })
                            }) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: icon.src,
                                alt: icon.alt,
                                className: "rounded-full w-full h-auto"
                            })
                        }, index))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-secondary dark:bg-[#3a3a3a] py-10",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container mx-auto px-6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center",
                        children: infoSections.map((section)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "font-bold text-sm tracking-widest",
                                    children: section
                                })
                            }, section))
                    })
                })
            })
        ]
    });
};


;// CONCATENATED MODULE: ./components/Layout/Layout.js




const Layout = ({ children , config  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "min-h-screen flex flex-col bg-bg-base dark:bg-[#121212] transition-colors duration-300",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                config: config
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "flex-grow",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                config: config
            })
        ]
    });
};


// EXTERNAL MODULE: ./styles/global.css
var global = __webpack_require__(9605);
// EXTERNAL MODULE: ./hooks/useApi.js
var useApi = __webpack_require__(1150);
;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    const { data: config  } = (0,useApi/* useApi */.h)("/config");
    (0,external_react_.useEffect)(()=>{
        const theme = localStorage.getItem("theme") || "light";
        document.body.setAttribute("data-theme", theme);
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        config: config,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 9605:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,675,676,664,150], () => (__webpack_exec__(672)));
module.exports = __webpack_exports__;

})();