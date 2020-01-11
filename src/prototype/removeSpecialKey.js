String.prototype.removeSpecialKey = function(specialKey) {
  if (this.slice(0, specialKey) === specialKey) {
    return this.slice(1, this.length);
  }
};
