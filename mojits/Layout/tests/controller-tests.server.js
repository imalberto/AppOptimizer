/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */

YUI.add('Layout-tests', function(Y) {

    var suite = new YUITest.TestSuite('Layout-tests'),
        controller = null,
        A = YUITest.Assert;
    
    suite.add(new YUITest.TestCase({
        
        name: 'Layout user tests',
        
        setUp: function() {
            controller = Y.mojito.controllers.Layout;
        },
        tearDown: function() {
            controller = null;
        },
        
        'test mojit': function() {

            A.isFunction(controller.index);
        }
        
    }));
    
    YUITest.TestRunner.add(suite);
    
}, '0.0.1', {requires: ['mojito-test', 'Layout']});
