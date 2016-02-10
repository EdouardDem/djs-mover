/**
 * Log function
 *
 * @param {String} text
 */
displayLog = function (text) {
    $('.results').append('<div>' + text + '</div>');
    console.log(text);
};
/**
 * Clear log
 */
clearLog = function () {
    $('.results').html('');
    console.clear();
};
/**
 * Run the tests
 */
move = function () {

    //----------------------------------------------
    // Move elements
    djs.mover.move($('.move.append'), $('.destination.append'), 'append');
    djs.mover.move($('.move.prepend'), $('.destination.prepend'), 'prepend');
    djs.mover.move($('.move.before'), $('.destination.before'), 'before');
    djs.mover.move($('.move.after'), $('.destination.after'), 'after');

    //----------------------------------------------
    // Change button
    $('#move').attr('disabled', 'disabled');
    $('#replace').removeAttr('disabled');

    //----------------------------------------------
    // Log
    displayLog("Moved elements.");

};
/**
 * Run the tests
 */
replace = function () {

    //----------------------------------------------
    // Replace elements
    djs.mover.replace($('.move.append'));
    djs.mover.replace($('.move.prepend'));
    djs.mover.replace($('.move.before'));
    djs.mover.replace($('.move.after'));

    //----------------------------------------------
    // Change button
    $('#replace').attr('disabled', 'disabled');
    $('#move').removeAttr('disabled');

    //----------------------------------------------
    // Log
    displayLog("Replaced elements.");

};