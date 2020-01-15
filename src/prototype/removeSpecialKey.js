String.prototype.removeSpecialKey = function(specialKey) {
  if (this[0] === specialKey) {
    return this.slice(1, this.length);
  }
};
