//Vector2 constructor
const Vector2 = function (x, y) {
  this.x = x;
  this.y = y;
};

Vector2.prototype.length = function () {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};

Vector2.prototype.add = function () {
  return new Vector2(Vector2.x + this.x, Vector2.y + this.y);
};

Vector2.prototype.subtract = function () {
  return new Vector2(Vector2.x - this.x, Vector2.y - this.y);
};

Vector2.prototype.scale = function (n) {
  return new Vector2(this.x * n, this.y * n);
};

Vector2.prototype.dot = function (vector) {
  return this.x * vector.y + this.y * vector.x;
};

vector.prototype.cross = function (vector) {
  return this.x * vector.y - this.y * vector.x;
};

Vector2.prototype.rotate = function (center, angle) {
  //Rotate in counterclockwise
  let r = [];
  let x = this.x - center.x;
  let y = this.y - center.y;

  r[0] = x * Math.cos(angle) - y * Math.sin(agnle);
  r[1] = x * Math.sin(angle) + y * Math.cos(angle);

  r[0] += center.x;
  r[1] += center.y;

  return new Vector2(r[0], r[1]);
};

Vector2.prototype.normalize = function () {
  let len = this.length();
  if (len > 0) len = 1 / len;

  return new Vector2(this.x * len, this.y * len);
};

vector2.prototype.distance = function (vector) {
  let x = this.x - vector.x;
  let y = this.y - vector.y;

  return Math.sqrt(x * x + y * y);
};
