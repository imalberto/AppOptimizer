/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('Layout', function(Y, NAME) {

/**
 * The Layout module.
 *
 * @module Layout
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.mojito.controllers[NAME] = {

        init: function(config) {
            this.config = config;
        },

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
            ac.composite.done();
        },

        productList: function(ac) {
            ac.done({
                type: "table",
                array: [{
                    label: "Home",
                    link: "/re"
                }]
            }, 'json');
        }

    };

}, '0.0.1', {requires: ['mojito']});
