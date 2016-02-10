/**
 * @author Edouard Demotes-Mainard <https://github.com/EdouardDem>
 * @license http://opensource.org/licenses/BSD-2-Clause BSD 2-Clause License
 */

/**
 * Object djs for _namespace
 */
window.djs = window.djs || {};
/**
 * This object moves HTML elements and keep the initial position.
 * The initial position is kept by a placeholder. Thus you can replace the element.
 * This object is "chainable"
 */
djs.mover = {

    /**
     * Use for auto-increment
     *
     * @private
     * @var {Integer}
     */
    _autoIncrement: 0,
    /**
     * Namespace used to bind events
     *
     * @private
     * @var {String}
     */
    _namespace: 'dj-mover',

    /**
     * Move an element to another (with a position)
     *
     * @param {Object} $element
     * @param {Object} $destination
     * @param {String} position         (after, before, append, prepend)
     * @return {Object}
     */
    move: function($element, $destination, position) {

        // Check the arguments validity
        if ($element.length==0) return this;
        if ($destination.length==0) return this;
        if (position==null) return this;

        // Handle only one element
        $element = $element.first();
        $destination = $destination.first();

        // Create an unique identifier for this movement
        var phId = this._getNewId();

        // Add a placeholder with an unique id after the element
        var ph = '<div style="display: none;" djs-mover-id="'+phId+'"></div>';
        $element.after(ph);

        // Link the placeholder to the element
        $element.attr('djs-mover-ph', phId);

        // Move the element regarding the 'position' argument
        if (position == 'after') $destination.after($element);
        else if (position == 'before') $destination.before($element);
        else if (position == 'append') $destination.append($element);
        else if (position == 'prepend') $destination.prepend($element);

        return this;
    },
    /**
     * Replace an element to its initial position
     *
     * @param {String} $element
     * @return {Object}
     */
    replace: function($element) {

        // Get the placeholder
        var phId = $element.attr('djs-mover-ph');

        // Check if we got a value
        if (phId == null) return this;

        // Get the placeholder
        var $ph = $('[djs-mover-id="'+phId+'"]');

        // Check if we got the placeholder
        if ($ph.length==0) return this;

        // Replace the element
        $ph.before($element);

        // Remove the placeholder
        $ph.remove();

        // Remove the link to the placeholder
        $element.removeAttr('djs-mover-ph');

        return this;
    },
    /**
     * Return an unique identifier based on auto-increment
     *
     * @return {String}
     */
    _getNewId: function() {

        // Increment counter
        this._autoIncrement++;

        // Return unique id
        return this._namespace+'-'+this._autoIncrement;
    }
};






