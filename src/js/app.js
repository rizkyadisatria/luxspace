import "../css/app.css";

import "./menu-toggler";
import "./modal";
import "./anchor-link-smooth";
import "./carousel";
import "./accordion";
import "./slider";
import "./shoppingCart";
import "./shippingDetail";

// (() => {
//   var e = {
//       316: () => {
//         const e = document.querySelectorAll("a[href^='#']");
//         for (let t = 0; t < e.length; t++) {
//           e[t].addEventListener("click", function (e) {
//             e.preventDefault(),
//               document.getElementById(
//                 this.getAttribute("href").replace("#", "")
//               ) &&
//                 document
//                   .querySelector(this.getAttribute("href"))
//                   .scrollIntoView({ behavior: "smooth" });
//           });
//         }
//       },
//     },
//     t = {};
//   function n(o) {
//     if (t[o]) return t[o].exports;
//     var i = (t[o] = { exports: {} });
//     return e[o](i, i.exports, n), i.exports;
//   }
//   (() => {
//     "use strict";
//     function e(e, t) {
//       e.classList && e.classList.add(...t.split(" "));
//     }
//     function t(e, t) {
//       e.classList && e.classList.remove(...t.split(" "));
//     }
//     const o = document.getElementById("menu-toggler");
//     o.addEventListener("click", function () {
//       const n = document.getElementById("menu");
//       n.className.indexOf("opacity-0") > -1
//         ? (e(o, "fixed top-0 right-0"),
//           t(o, "relative"),
//           e(n, "opacity-100 z-30"),
//           t(n, "opacity-0 invisible"))
//         : (e(o, "relative"),
//           t(o, "fixed top-0 right-0"),
//           e(n, "opacity-0 invisible"),
//           t(n, "opacity-100 z-30"));
//     });
//     const i = document.getElementsByClassName("modal-trigger");
//     for (let t = 0; t < i.length; t++) {
//       const n = i[t];
//       n.addEventListener("click", function () {
//         console.log("ok");
//         const t = document.createElement("div"),
//           o = document.createElement("div");
//         o.addEventListener("click", function () {
//           t.remove();
//         }),
//           e(
//             t,
//             "fixed inset-0 z-40 flex items-center justify-center w-100 min-h-screen"
//           ),
//           e(o, "fixed inset-0 bg-black opacity-35");
//         const i = document.createElement("div");
//         (i.innerHTML = n.attributes?.["data-content"].value),
//           e(i, "bg-white p-0 md:p-6 z-10"),
//           t.append(o),
//           t.append(i),
//           document.body.append(t);
//       });
//     }
//     n(316);
//     const l = document?.getElementById("carousel"),
//       s = l?.getElementsByClassName("flex")[0],
//       a = l?.getElementsByClassName("container")[0];
//     function c() {
//       const e = a.getBoundingClientRect().left;
//       (s.style.paddingLeft = e - 16 + "px"),
//         (s.style.paddingRight = e - 16 + "px");
//     }
//     l &&
//       (!(function (n, o) {
//         let i,
//           l,
//           s = 0,
//           a = 0,
//           c = o.getElementsByClassName("card").length,
//           r = o.getElementsByClassName("card")[0].offsetWidth,
//           d = 0,
//           u = !0;
//         function m(e) {
//           (e = e || window.event).preventDefault(),
//             (i = o.offsetLeft),
//             "touchstart" == e.type
//               ? (s = e.touches[0].clientX)
//               : ((s = e.clientX),
//                 (document.onmouseup = g),
//                 (document.onmousemove = f));
//         }
//         function f(e) {
//           "touchmove" == (e = e || window.event).type
//             ? ((a = s - e.touches[0].clientX), (s = e.touches[0].clientX))
//             : ((a = s - e.clientX), (s = e.clientX)),
//             (o.style.left = o.offsetLeft - a + "px");
//         }
//         function g() {
//           (l = o.offsetLeft),
//             l - i < -100
//               ? p(1, "drag")
//               : l - i > 100
//               ? p(-1, "drag")
//               : (o.style.left = i + "px"),
//             (document.onmouseup = null),
//             (document.onmousemove = null);
//         }
//         function p(t, n) {
//           e(o, "transition-all duration-200"),
//             u &&
//               (n || (i = o.offsetLeft),
//               1 == t
//                 ? ((o.style.left = i - r + "px"), d++)
//                 : -1 == t && ((o.style.left = i - r + "px"), d--)),
//             (u = !1);
//         }
//         n.classList.add("loaded"),
//           (o.onmousedown = m),
//           o.addEventListener("touchstart", m),
//           o.addEventListener("touchend", g),
//           o.addEventListener("touchmove", f),
//           o.addEventListener("transitionend", function () {
//             setTimeout(() => {
//               t(o, "transition-all duration-200");
//             }, 200),
//               -1 == d && ((o.style.left = -c * r + "px"), (d = c - 1)),
//               d == c - 4 &&
//                 ((o.style.left = -(c - 4 - 1) * r + "px"), (d = c - 4 - 1)),
//               (d != c && d != c - 1) || ((o.style.left = "0px"), (d = 0)),
//               (u = !0);
//           });
//       })(l, s),
//       window.addEventListener("load", c()),
//       window.addEventListener("rezize", c())),
//       window.innerWidth < 768 &&
//         window.addEventListener("load", function () {
//           const n = document.getElementsByClassName("accordion");
//           for (let i = 0; i < n.length; i++) {
//             const l = n[i],
//               s = document.createElement("button");
//             e(
//               s,
//               "absolute block md:hidden right-0 transform -translate-y-1/2 focus:outline-none transition duration-200 rotate-0"
//             ),
//               (s.style.top = "50%"),
//               (s.innerHTML =
//                 '<svg width="20" height="9" viewBox="0 0 20 9" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M1 1L9.75 7.5L18.5 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n      </svg>\n      ');
//             const a = l.getElementsByTagName("ul")[0];
//             function o() {
//               a.className.indexOf("h-0") > -1
//                 ? (e(s, "rotate-180"),
//                   e(a, "opacity-100"),
//                   t(a, "h-0 invisible opacity-0"))
//                 : (t(s, "rotate-180"),
//                   t(a, "opacity-100"),
//                   e(a, "h-0 invisible opacity-0"));
//             }
//             e(a, "transition duration-200"),
//               s.addEventListener("click", o),
//               l.getElementsByTagName("h5")[0].append(s);
//           }
//         });
//     const r = document.getElementsByClassName("slider");
//     for (let n = 0; n < r.length; n++) {
//       const o = r[n],
//         i = o.querySelectorAll(".slider .item"),
//         l = o.querySelector("div > .preview");
//       for (let n = 0; n < i.length; n++) {
//         const o = i[n];
//         o.addEventListener("click", function () {
//           const n = this.attributes?.["data-img"]?.value;
//           for (let e = 0; e < i.length; e++) {
//             t(i[e], "selected");
//           }
//           e(o, "selected"), l.querySelector("img").setAttribute("src", n);
//         });
//       }
//     }
//     localStorage.setItem("cart", JSON.stringify(["1", "2", "3"]));
//     const d = document.getElementById("shopping-cart");
//     if (d) {
//       const e = document.getElementById("header-cart"),
//         n = d.querySelectorAll("button[data-delete-item]");
//       for (let o = 0; o < n.length; o++) {
//         const i = n[o],
//           l = i.attributes["data-delete-item"].value;
//         i.addEventListener("click", function () {
//           d.querySelector(`div[data-row='${l}']`).remove();
//           const n =
//               localStorage.getItem("cart") &&
//               JSON.parse(localStorage.getItem("cart")),
//             o = n.indexOf(l);
//           o > -1 &&
//             (n.splice(o, 1), localStorage.setItem("cart", JSON.stringify(n))),
//             0 === n.length &&
//               (t(e, "cart-filled"),
//               t(document.getElementById("cart-empty"), "hidden"));
//         });
//       }
//     }
//     let u = {
//       "complete-name": "",
//       email: "",
//       address: "",
//       "phone-number": "",
//       courier: "",
//       payment: "",
//     };
//     const m = document.querySelectorAll("#shipping-detail input[data-input]");
//     for (let e = 0; e < m.length; e++) {
//       m[e].addEventListener("change", function (e) {
//         (u[e.target.id] = e.target.value), g();
//       });
//     }
//     const f = document.querySelectorAll("#shipping-detail button[data-name]");
//     for (let e = 0; e < f.length; e++) {
//       f[e].addEventListener("click", function () {
//         const e = this.attributes["data-value"].value,
//           t = this.attributes["data-name"].value;
//         (u[t] = e), g();
//       });
//     }
//     function g() {
//       0 === Object.values(u).filter((e) => "" === e).length &&
//         (document.querySelector(
//           "#shipping-detail button[type='submit']"
//         ).disabled = !1);
//     }
//   })();
// })();
