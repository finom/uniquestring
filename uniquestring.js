(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.uniqueString = factory();
  }
}(this, function () {
    return function uniqueString() {
        // let's call this date a birthday of the function
        var datePart = new Date().getTime() - new Date(2013, 4, 3).getTime();
        var randomPart = Math.floor(Math.random() * 36*36*36*36*36);

        return datePart.toString(36) + randomPart.toString(36);
    }
}));
