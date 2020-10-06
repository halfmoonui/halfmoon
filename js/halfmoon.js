/*
* -----------------------------------------------------------------------------
* Halfmoon JS
* Version: 1.1.1
* https://www.gethalfmoon.com
* Copyright, Halfmoon UI
* Licensed under MIT (https://www.gethalfmoon.com/license)
* -----------------------------------------------------------------------------
* The above notice must be included in its entirety when this file is used.
*/

/* Start polyfills */

// Polyfill for Element.matches()
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

// Polyfill for Element.closest()
if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        var el = this;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}

// Polyfill for Element.classList (http://purl.eligrey.com/github/classList.js/blob/master/classList.js)
"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||!function(t){"use strict";if("Element"in t){var e="classList",n="prototype",i=t.Element[n],s=Object,r=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},o=Array[n].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},c=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},a=function(t,e){if(""===e)throw new c("SYNTAX_ERR","The token must not be empty.");if(/\s/.test(e))throw new c("INVALID_CHARACTER_ERR","The token must not contain space characters.");return o.call(t,e)},l=function(t){for(var e=r.call(t.getAttribute("class")||""),n=e?e.split(/\s+/):[],i=0,s=n.length;s>i;i++)this.push(n[i]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},u=l[n]=[],h=function(){return new l(this)};if(c[n]=Error[n],u.item=function(t){return this[t]||null},u.contains=function(t){return~a(this,t+"")},u.add=function(){var t,e=arguments,n=0,i=e.length,s=!1;do t=e[n]+"",~a(this,t)||(this.push(t),s=!0);while(++n<i);s&&this._updateClassName()},u.remove=function(){var t,e,n=arguments,i=0,s=n.length,r=!1;do for(t=n[i]+"",e=a(this,t);~e;)this.splice(e,1),r=!0,e=a(this,t);while(++i<s);r&&this._updateClassName()},u.toggle=function(t,e){var n=this.contains(t),i=n?e!==!0&&"remove":e!==!1&&"add";return i&&this[i](t),e===!0||e===!1?e:!n},u.replace=function(t,e){var n=a(t+"");~n&&(this.splice(n,1,e),this._updateClassName())},u.toString=function(){return this.join(" ")},s.defineProperty){var f={get:h,enumerable:!0,configurable:!0};try{s.defineProperty(i,e,f)}catch(p){void 0!==p.number&&-2146823252!==p.number||(f.enumerable=!1,s.defineProperty(i,e,f))}}else s[n].__defineGetter__&&i.__defineGetter__(e,h)}}(self),function(){"use strict";var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var n,i=arguments.length;for(n=0;i>n;n++)t=arguments[n],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:n.call(this,t)}}"replace"in document.createElement("_").classList||(DOMTokenList.prototype.replace=function(t,e){var n=this.toString().split(" "),i=n.indexOf(t+"");~i&&(n=n.slice(i),this.remove.apply(this,n),this.add(e),this.add.apply(this,n.slice(1)))}),t=null}());

/* End polyfills */


/* Halfmoon JS core */

var halfmoon = {
    // Getting the required elements
    // Re-initialized once the DOM is loaded (to avoid issues with virtual DOM)
    pageWrapper: document.getElementsByClassName("page-wrapper")[0],
    stickyAlerts: document.getElementsByClassName("sticky-alerts")[0],

    darkModeOn: false, // Also re-initialized once the DOM is loaded (see below)

    // Create cookie
    createCookie: function(name, value, days) {
        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        else {
            expires = "";
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    },

    // Read cookie
    readCookie: function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(";");
        for(var i=0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length,c.length);
            }
        }
        return null;
    },

    // Erase cookie
    eraseCookie: function(name) {
        this.createCookie(name, "", -1);
    },

    // Toggle light/dark mode 
    toggleDarkMode: function() {
        if (document.body.classList.contains("dark-mode")) {
            document.body.classList.remove("dark-mode");
            this.darkModeOn = false;
            this.createCookie("halfmoon_preferredMode", "light-mode", 365);
        } else {
            document.body.classList.add("dark-mode");
            this.darkModeOn = true;
            this.createCookie("halfmoon_preferredMode", "dark-mode", 365);
        }
    },

    // Get preferred mode
    getPreferredMode: function() {
        if (this.readCookie("halfmoon_preferredMode")) {
            return this.readCookie("halfmoon_preferredMode");
        } else {
            return "not-set";
        }
    },

    // Toggles sidebar
    toggleSidebar: function() {
        if (this.pageWrapper) {
            if (this.pageWrapper.getAttribute("data-sidebar-hidden")) {
                this.pageWrapper.removeAttribute("data-sidebar-hidden");
            } else {
                this.pageWrapper.setAttribute("data-sidebar-hidden", "hidden");
            }
        }
    },

    // Deactivate all the dropdown toggles when another one is active
    deactivateAllDropdownToggles: function() {
        var activeDropdownToggles = document.querySelectorAll("[data-toggle='dropdown'].active");
        for (var i = 0; i < activeDropdownToggles.length; i++) {
            activeDropdownToggles[i].classList.remove("active");
            activeDropdownToggles[i].closest(".dropdown").classList.remove("show");
        }
    },

    // Toggle modal (using Javascript)
    toggleModal: function(modalId) {
        var modal = document.getElementById(modalId);

        if (modal) {
            modal.classList.toggle("show");
        }
    },

    /* Code block for handling sticky alerts */

    // Make an ID for an element
    makeId: function(length) {
        var result = "";
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    },

    // Toast an alert (show, fade, dispose)
    toastAlert: function(alertId, timeShown) {
        var alertElement = document.getElementById(alertId);

        // Setting the default timeShown
        if (timeShown === undefined) {
            timeShown = 5000;
        }

        // Alert is only toasted if it does not have the .show class
        if (!alertElement.classList.contains("show")) {
            // Add .alert-block class if it does not exist
            if (!alertElement.classList.contains("alert-block")) {
                alertElement.classList.add("alert-block");
            }

            // Show the alert
            // The 0.25 seconds delay is for the animation
            setTimeout(function() {
                alertElement.classList.add("show");
            }, 250);

            // Wait some time (timeShown + 250) and fade out the alert
            var timeToFade = timeShown + 250;
            setTimeout(function() {
                alertElement.classList.add("fade");
            }, timeToFade);

            // Wait some more time (timeToFade + 500) and dispose the alert (by removing the .alert-block class)
            // Again, the extra delay is for the animation
            // Remove the .show and .fade classes (so the alert can be toasted again)
            var timeToDestroy = timeToFade + 500;
            setTimeout(function() {
                alertElement.classList.remove("alert-block");
                alertElement.classList.remove("show");
                alertElement.classList.remove("fade");
            }, timeToDestroy);
        }
    },

    // Create a sticky alert, display it, and then remove it
    initStickyAlert: function(param) {
        // Setting the variables from the param
        var content = ("content" in param) ? param.content: "";
        var title = ("title" in param) ? param.title: "";
        var alertType = ("alertType" in param) ? param.alertType: "";
        var fillType = ("fillType" in param) ? param.fillType: "";
        var hasDismissButton = ("hasDismissButton" in param) ? param.hasDismissButton: true;
        var timeShown = ("timeShown" in param) ? param.timeShown: 5000;

        // Create the alert element
        var alertElement = document.createElement("div");

        // Set ID to the alert element
        alertElement.setAttribute("id", this.makeId(6));

        // Add the title
        if (title) {
            content = "<h4 class='alert-heading'>" + title + "</h4>" + content;
        }

        // Add the classes to the alert element
        alertElement.classList.add("alert");
        if (alertType) {
            alertElement.classList.add(alertType);
        }
        if (fillType) {
            alertElement.classList.add(fillType);
        }

        // Add the close button to the content (if required)
        if (hasDismissButton) {
            content = "<button class='close' data-dismiss='alert' type='button' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" + content;
        }

        // Add the content to the alert element
        alertElement.innerHTML = content;

        // Append the alert element to the sticky alerts
        this.stickyAlerts.insertBefore(alertElement, this.stickyAlerts.childNodes[0]);

        // Toast the alert
        this.toastAlert(alertElement.getAttribute("id"), timeShown);
    },

    /* End code block for handling sticky alerts */

    // Click handler that can be overridden by users if needed
    clickHandler: function(event) {},

    // Keydown handler that can be overridden by users if needed
    keydownHandler: function(event) {},
}


/* Things done once the DOM is loaded */

function halfmoonOnDOMContentLoaded() {
    // Re-initializing the required elements (to avoid issues with virtual DOM)
    if (!halfmoon.pageWrapper) {
        halfmoon.pageWrapper = document.getElementsByClassName("page-wrapper")[0];
    }
    if (!halfmoon.stickyAlerts) {
        halfmoon.stickyAlerts = document.getElementsByClassName("sticky-alerts")[0];
    }

    // Handle the cookie and variable for dark mode
    // 1. First preference is given to the cookie if it exists
    if (halfmoon.readCookie("halfmoon_preferredMode")) {
        if (halfmoon.readCookie("halfmoon_preferredMode") == "dark-mode") {
            halfmoon.darkModeOn = true;
        } else {
            halfmoon.darkModeOn = false;
        }
    } else {
        // 2. If cookie does not exist, next preference is for the dark mode setting
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            halfmoon.darkModeOn = true;
        } else {
            // 3. If all else fails, re-initialize the dark mode preference depending on the .dark-mode class
            if (document.body.classList.contains("dark-mode")) {
                halfmoon.darkModeOn = true;
            } else {
                halfmoon.darkModeOn = false;
            }
        }
    }

    // Automatically set preferred theme
    // But only if one of the data-attribute is provided
    if (document.body.getAttribute("data-set-preferred-mode-onload") || document.body.getAttribute("data-set-preferred-theme-onload")) {
        if (halfmoon.darkModeOn) {
            if (!document.body.classList.contains("dark-mode")) {
                document.body.classList.add("dark-mode");
            }
        } else {
            if (document.body.classList.contains("dark-mode")) {
                document.body.classList.remove("dark-mode");
            }
        }
    }

    // Hiding sidebar on first load on small screens (unless data-attribute provided)
    // Or on larger screens when sidebar type is overlayed-all
    if (document.documentElement.clientWidth <= 768) {
        if (halfmoon.pageWrapper) {
            if (!halfmoon.pageWrapper.getAttribute("data-show-sidebar-onload-sm-and-down")) {
                halfmoon.pageWrapper.setAttribute("data-sidebar-hidden", "hidden");
            }
        }
    } else {
        if (halfmoon.pageWrapper) {
            if (halfmoon.pageWrapper.getAttribute("data-sidebar-type") === "overlayed-all") {
                halfmoon.pageWrapper.setAttribute("data-sidebar-hidden", "hidden");
            }
        }
    }

    // Adding the click event listener
    document.addEventListener(
        "click",
        function(event) {
            var eventCopy = event;
            var target = event.target;

            // Handle clicks on dropdown toggles
            if (target.matches("[data-toggle='dropdown']") || target.matches("[data-toggle='dropdown'] *")) {
                if (target.matches("[data-toggle='dropdown'] *")) {
                    target = target.closest("[data-toggle='dropdown']");
                }
                if (target.classList.contains("active")) {
                    target.classList.remove("active");
                    target.closest(".dropdown").classList.remove("show");
                } else {
                    halfmoon.deactivateAllDropdownToggles();
                    target.classList.add("active");
                    target.closest(".dropdown").classList.add("show");
                }
            } else {
                if (!target.matches(".dropdown-menu *")) {
                    halfmoon.deactivateAllDropdownToggles();
                }
            }

            // Handle clicks on alert dismiss buttons
            if (target.matches(".alert [data-dismiss='alert']") || target.matches(".alert [data-dismiss='alert'] *")) {
                if (target.matches(".alert [data-dismiss='alert'] *")) {
                    target = target.closest(".alert [data-dismiss='alert']");
                }
                target.parentNode.classList.add("dispose");
            }

            // Handle clicks on modal toggles
            if (target.matches("[data-toggle='modal']") || target.matches("[data-toggle='modal'] *")) {
                if (target.matches("[data-toggle='modal'] *")) {
                    target = target.closest("[data-toggle='modal']");
                }
                var targetModal = document.getElementById(target.getAttribute("data-target"));
                if (targetModal) {
                    if (targetModal.classList.contains("modal")) {
                        halfmoon.toggleModal(target.getAttribute("data-target"));
                    }
                }
            }

            // Handle clicks on modal dismiss buttons
            if (target.matches(".modal [data-dismiss='modal']") || target.matches(".modal [data-dismiss='modal'] *")) {
                if (target.matches(".modal [data-dismiss='modal'] *")) {
                    target = target.closest(".modal [data-dismiss='modal']");
                }
                target.closest(".modal").classList.remove("show");
            }

            // Handle clicks on modal overlays
            if (target.matches(".modal-dialog")) {
                var parentModal = target.closest(".modal");

                if (!parentModal.getAttribute("data-overlay-dismissal-disabled")) {
                    if (parentModal.classList.contains("show")) {
                        parentModal.classList.remove("show");
                    } else {
                        window.location.hash = "#";
                    }
                }
            }

            // Call the click handler method to handle any logic set by the user in their projects to handle clicks
            halfmoon.clickHandler(eventCopy);
        }, 
        false
    );

    // Adding the key down event listener (for shortcuts and accessibility)
    document.addEventListener(
        "keydown",
        function(event) {
            var eventCopy = event;

            // Shortcuts are triggered only if no input, textarea, or select has focus,
            // If the control key or command key is not pressed down,
            // And if the enabling data attribute is present on the DOM's body
            if (!(document.querySelector("input:focus") || document.querySelector("textarea:focus") || document.querySelector("select:focus"))) {
                event = event || window.event;

                if (!(event.ctrlKey || event.metaKey)) {
                    // Toggle sidebar when [shift] + [S] keys are pressed
                    if (document.body.getAttribute("data-sidebar-shortcut-enabled")) {
                        if (event.shiftKey && event.which == 83) {
                            // Variable to store whether a modal is open or not
                            var modalOpen = false;

                            // Hash exists, so we check if it belongs to a modal
                            if (window.location.hash) {
                                var hash = window.location.hash.substring(1);
                                var elem = document.getElementById(hash);
                                if (elem) {
                                    if (elem.classList.contains("modal")) {
                                        modalOpen = true;
                                    }
                                }
                            }
                            // Check for a modal with the .show class
                            if (document.querySelector(".modal.show")) {
                                modalOpen = true;
                            }

                            // This shortcut works only if no modal is open
                            if (!modalOpen) {
                                halfmoon.toggleSidebar();
                                event.preventDefault();
                            }
                        }
                    }

                    // Toggle dark mode when [shift] + [D] keys are pressed
                    if (document.body.getAttribute("data-dm-shortcut-enabled")) {
                        if (event.shiftKey && event.which == 68) {
                            halfmoon.toggleDarkMode();
                            event.preventDefault();
                        }
                    }
                }
            }

            // Handling other keydown events
            if (event.which === 27) {
                // Close dropdown menu (if one is open) when [esc] key is pressed
                if (document.querySelector("[data-toggle='dropdown'].active")) {
                    var elem = document.querySelector("[data-toggle='dropdown'].active");
                    elem.classList.remove("active");
                    elem.closest(".dropdown").classList.remove("show");
                    event.preventDefault();
                }
                // Close modal (if one is open, and if no dropdown menu is open) when [esc] key is pressed
                // Conditional on dropdowns so that dropdowns on modals can be closed with the keyboard without closing the modal
                else {
                    // Hash exists, so we check if it belongs to a modal
                    if (window.location.hash) {
                        var hash = window.location.hash.substring(1);
                        var elem = document.getElementById(hash);
                        if (elem) {
                            if (elem.classList.contains("modal")) {
                                if (!elem.getAttribute("data-esc-dismissal-disabled")) {
                                    window.location.hash = "#";
                                    event.preventDefault();
                                }
                            }
                        }
                    }
                    // Check for a modal with the .show class
                    if (document.querySelector(".modal.show")) {
                        var elem = document.querySelector(".modal.show");
                        if (!elem.getAttribute("data-esc-dismissal-disabled")) {
                            elem.classList.remove("show");
                            event.preventDefault();
                        }
                    }
                }
            }

            // Call the keydown handler method to handle any logic set by the user in their projects to handle keydown events
            halfmoon.keydownHandler(eventCopy);
        }
    );

    // Handling custom file inputs
    var halfmoonCustomFileInputs = document.querySelectorAll(".custom-file input");
    for (var i = 0; i < halfmoonCustomFileInputs.length; i++) {
        var customFile = halfmoonCustomFileInputs[i];
        // Create file name container element, add the class name, and set default value
        // Append it to the custom file element
        var fileNamesContainer = document.createElement("div");
        fileNamesContainer.classList.add("file-names");
        var dataDefaultValue = customFile.getAttribute("data-default-value");
        if (dataDefaultValue) {
            fileNamesContainer.innerHTML = dataDefaultValue;
        } else {
            fileNamesContainer.innerHTML = "No file chosen";
        }
        customFile.parentNode.appendChild(fileNamesContainer);

        // Add the event listener that will update the contents of the file name container element on change
        customFile.addEventListener(
            "change",
            function(event) {
                fileNamesContainer = event.target.parentNode.querySelector(".file-names");
                if (event.target.files.length === 1) {
                    fileNamesContainer.innerHTML = event.target.files[0].name;
                } else if (event.target.files.length > 1) {
                    fileNamesContainer.innerHTML = event.target.files.length + " files";
                } else {
                    fileNamesContainer.innerHTML = "No file chosen";
                }
            }
        );
    }

    // Adding the .with-transitions class to the page-wrapper so that transitions are enabled
    // This way, the weird bug on Chrome is avoided, where the transitions run on load
    if (halfmoon.pageWrapper) {
        halfmoon.pageWrapper.classList.add("with-transitions");
    }
}

// Call the function when the DOM is loaded
document.addEventListener("DOMContentLoaded", halfmoonOnDOMContentLoaded);
