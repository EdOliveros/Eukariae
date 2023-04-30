(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9514:
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
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: ./public/assets/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.59566939.png","height":537,"width":550,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA0UlEQVR42mM4dWjrmSPbL53aW1dZuGTe5PPHdwFFgIgByJo5uXP6xA4ne6vKkpyM5JgVC6dfOLGb4erZ/SkJkW7OdnFRITkZiQwMDPNn9l88uYdh1+bl82b0hQR6r1s+e/nCadHhgfVVhRkpsQxAMKWvFSh9ZM+GAzvX7N22SktDJSo8gKG1obyusuDgzrUJMWFlhZn7d6yprcgHSjOcP7Zz0ZyJ5UVZ2WnxSXHhcdEhe7euBFl+7tiO+TP65kzr2bxm4Zqls2ZN6Tq8e92ZI9sAtFxqrdJJaQcAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/header/index.js






const Header = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "jsx-1e394b608996456e" + " " + "navbar navbar-expand-lg bg-body-tertiary header",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "jsx-1e394b608996456e" + " " + "container-fluid",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "jsx-1e394b608996456e" + " " + "img-container",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                className: "jsx-1e394b608996456e",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    style: {
                                        paddingTop: "20px",
                                        width: "60px",
                                        height: "auto"
                                    },
                                    src: logo,
                                    alt: "Logo"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            "data-bs-toggle": "collapse",
                            "data-bs-target": "#navbarNavAltMarkup",
                            "aria-controls": "navbarNavAltMarkup",
                            "aria-expanded": "false",
                            "aria-label": "Toggle navigation",
                            className: "jsx-1e394b608996456e" + " " + "navbar-toggler btn",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-1e394b608996456e" + " " + "navbar-toggler-icon"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "navbarNavAltMarkup",
                            className: "jsx-1e394b608996456e" + " " + "collapse navbar-collapse justify-content-center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "jsx-1e394b608996456e" + " " + "navbar-nav ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "text-end",
                                        style: {
                                            fontSize: "17px",
                                            margin: "0 20px",
                                            textDecoration: "none",
                                            color: "black",
                                            fontWeight: "500"
                                        },
                                        href: "/",
                                        children: "HOME"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "text-end",
                                        style: {
                                            fontSize: "17px",
                                            margin: "0 20px",
                                            textDecoration: "none",
                                            color: "black",
                                            fontWeight: "500"
                                        },
                                        href: "/blog",
                                        children: "BLOG"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "text-end",
                                        style: {
                                            fontSize: "17px",
                                            margin: "0 20px",
                                            textDecoration: "none",
                                            color: "black",
                                            fontWeight: "500"
                                        },
                                        href: "/productos",
                                        children: "PRODUCTS"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "text-end",
                                        style: {
                                            fontSize: "17px",
                                            margin: "0 20px",
                                            textDecoration: "none",
                                            color: "black",
                                            fontWeight: "500"
                                        },
                                        href: "/quienes-somos",
                                        children: "QUIENES SOMOS?"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "text-end",
                                        style: {
                                            fontSize: "17px",
                                            margin: "0 20px",
                                            textDecoration: "none",
                                            color: "black",
                                            fontWeight: "500"
                                        },
                                        href: "/contacto",
                                        children: "CONTACTO"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "1e394b608996456e",
                children: ".header.jsx-1e394b608996456e{background-color:#cac2b5;color:rgb(0,0,0)}.img-container.jsx-1e394b608996456e{width:15vw;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.btn.jsx-1e394b608996456e{border:none}.btn.jsx-1e394b608996456e:hover,.btn.jsx-1e394b608996456e:active,.btn.jsx-1e394b608996456e:focus{border:none;outline:none;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}"
            })
        ]
    });
};


;// CONCATENATED MODULE: ./public/assets/rayita.png
/* harmony default export */ const rayita = ({"src":"/_next/static/media/rayita.5d3c56d3.png","height":100,"width":112,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAAAAAAQMlOCAAAAJ0lEQVR42mP49//ffyD6x/Dv3/+///7/AzO+/URnfP8FZYARA0wXANQyN30f6y8KAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./components/Footer/Footer.js






const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "jsx-6e6ea424647b453e",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-6e6ea424647b453e" + " " + "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "jsx-6e6ea424647b453e" + " " + "container-fluid d-flex flex-wrap justify-content-center my-5 align-items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                            className: "jsx-6e6ea424647b453e" + " " + "icons ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                className: "img-fluid rounded-circle",
                                style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "50%"
                                },
                                src: logo,
                                alt: "logo"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                            className: "jsx-6e6ea424647b453e" + " " + "icons ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                className: "img-fluid rounded-circle",
                                style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "50%"
                                },
                                src: logo,
                                alt: "logo"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                            className: "jsx-6e6ea424647b453e" + " " + "icons ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                className: "img-fluid rounded-circle",
                                style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "50%"
                                },
                                src: logo,
                                alt: "logo"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                            className: "jsx-6e6ea424647b453e" + " " + "icons ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                className: "img-fluid rounded-circle",
                                style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "50%"
                                },
                                src: rayita,
                                alt: "logo"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                            className: "jsx-6e6ea424647b453e" + " " + "icons ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                s: true,
                                className: "img-fluid rounded-circle",
                                tyle: {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "50%"
                                },
                                src: logo,
                                alt: "logo"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                            className: "jsx-6e6ea424647b453e" + " " + "icons ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                className: "img-fluid rounded-circle",
                                style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "50%"
                                },
                                src: logo,
                                alt: "logo"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                            className: "jsx-6e6ea424647b453e" + " " + "icons ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                className: "img-fluid rounded-circle",
                                style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "50%"
                                },
                                src: logo,
                                alt: "logo"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                            className: "jsx-6e6ea424647b453e" + " " + "icons ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                className: "img-fluid rounded-circle",
                                style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "50%"
                                },
                                src: logo,
                                alt: "logo"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                            className: "jsx-6e6ea424647b453e" + " " + "icons ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "50%"
                                },
                                src: logo,
                                alt: "logo"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-6e6ea424647b453e" + " " + "row justify-content-center my-4 mas-info-container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-6e6ea424647b453e" + " " + "col-12 col-md-3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "jsx-6e6ea424647b453e" + " " + "text-center",
                            children: "HELP & INFORMATION"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-6e6ea424647b453e" + " " + "col-12 col-md-3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "jsx-6e6ea424647b453e" + " " + "text-center",
                            children: "ABOUT US"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-6e6ea424647b453e" + " " + "col-12 col-md-3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "jsx-6e6ea424647b453e" + " " + "text-center",
                            children: "MORE FROM ASOS"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-6e6ea424647b453e" + " " + "col-12 col-md-3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "jsx-6e6ea424647b453e" + " " + "text-center",
                            children: "SHOPPING FROM:"
                        })
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "6e6ea424647b453e",
                children: ".icons.jsx-6e6ea424647b453e{width:50px;margin:10px}.mas-info-container.jsx-6e6ea424647b453e{background-color:rgb(228,228,228);padding:20px 0;margin:0}.mas-info-container.jsx-6e6ea424647b453e p.jsx-6e6ea424647b453e{margin:0}"
            })
        ]
    });
};


;// CONCATENATED MODULE: ./components/layout/Layout.js




const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
};


// EXTERNAL MODULE: ./global-styles/global.css
var global = __webpack_require__(8040);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(9090);
;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    (0,external_react_.useEffect)(()=>{
        __webpack_require__(399);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 8040:
/***/ (() => {



/***/ }),

/***/ 399:
/***/ ((module) => {

"use strict";
module.exports = require("bootstrap/dist/js/bootstrap.bundle.min.js");

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

/***/ }),

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,675,676,961], () => (__webpack_exec__(9514)));
module.exports = __webpack_exports__;

})();