var $ = require('jquery');
var DateTool = require('gazira/date');
var Keyboard = require('../index');

$(function () {
    Keyboard.hotKey({
        'SHIFT + ?': function() {
            $('#help').show();
        },
        'ESC': function() {
            $('#help').hide();
        },
        'c,o,l,o,r': function() {
            $('#log').append('<div class="color">' + DateTool.format(new Date(), 'yyyy-MM-dd HH:mm:ss') + '-> color log</div>');
        },
        'CTRL + SHIFT + d': function() {
            $('#log div:first-child').remove();
        },
        'p': function() {
            $('#log').append('<div>' + DateTool.format(new Date(), 'yyyy-MM-dd HH:mm:ss') + '-> p log</div>');
        }
    })
});
