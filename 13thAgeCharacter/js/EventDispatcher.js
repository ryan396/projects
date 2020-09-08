var event = function (sender) {
    this._sender = sender;
    this._listeners = [];
}

Event.prototype = {
    attach: function (_listener) {
        this.listenders.push(listener);
    },

    notify: function (args) {
        for (var i = 0; i < this.listeners.length; i++) {
            this._listeners[i](this._sender, args);
        }
    }
};