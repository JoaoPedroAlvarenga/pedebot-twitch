String.prototype.removeSpecialKey = function(specialKey) {
  if (this.slice(0, 1) === specialKey) {
    return this.slice(1, this.length);
  }
};
