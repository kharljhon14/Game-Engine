const rectangle = function (center, width, height) {
  rigidshape.call(this, center);
  this.mType = "Rectangle";
  this.mWidth = width;
  this.mHeight = height;
  this.mVertex = [];
  this.mFaceNormal = [];

  this.mVertex[0] = new Vec2(center.x - width / 2, center.y - height / 2);
  this.mVertex[1] = new Vec2(center.x + width / 2, center.y - height / 2);
  this.mVertex[2] = new Vec2(center.x + width / 2, center.y + height / 2);
  this.mVertex[3] = new Vec2(center.x - width / 2, center.y + height / 2);

  this.mFaceNormal[0] = this.mVertex[1].subtract(this.mVertex[2]);
  this.mFaceNormal[0] = this.mFaceNormal[0].normalize();
  this.mFaceNormal[1] = this.mVertex[2].subtract(this.mVertex[3]);
  this.mFaceNormal[1] = this.mFaceNormal[1].normalize();
  this.mFaceNormal[2] = this.mVertex[3].subtract(this.mVertex[0]);
  this.mFaceNormal[2] = this.mFaceNormal[2].normalize();
  this.mFaceNormal[3] = this.mVertex[0].subtract(this.mVertex[1]);
  this.mFaceNormal[3] = this.mFaceNormal[3].normalize();
};

const prototype = Object.create(rigidshape.prototype);
prototype.constructor = rectangle;
rectangle.prototype = prototype;

Rectangle.prototype.draw = function (context) {
  context.save();
  context.translate(this.mVertex[0].x, this.mVertex[0].y);
  context.rotate(this.mAngle);
  context.strokeRect(0, 0, this.mWidth, this.mHeight);
  context.restore();
};

const circle = function (center, radius) {
    rigidshape.call(this, center);
    this.mType = "Circle";
    this.mRadius = radius;
    // The start point of line in circle
    this.mStartpoint = new Vec2(center.x, center.y - radius);
};

const prototype = Object.create(RigidShape.prototype);
prototype.constructor = Circle;
circle.prototype = prototype;

circle.prototype.draw = function (context) {
    context.beginPath();
    //draw a circle
    context.arc(this.mCenter.x, this.mCenter.y, this.mRadius, 0, Math.PI *  2, true);
    //draw a line from start point toward center
    context.moveTo(this.mStartpoint.x, this.mStartpoint.y);
    context.lineTo(this.mCenter.x, this.mCenter.y);
    context.closePath();
    context.stroke();
};


