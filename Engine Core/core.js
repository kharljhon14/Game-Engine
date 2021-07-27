const gEngine = {};

//physics engine core functionality
gEngine.Core = (function () {
  //Width and height of the canvas element
  const mCanvas = document.querySelector(".canvas");
  const mContext = mCanvas.getContext("2d");
  const mWidth = 800;
  const mHeight = 450;

  mCanvas.width = mWidth;
  mCanvas.height = mHeight;

  let mPublic = {
    mWidth: mWidth,
    mHeight: mHeight,
    mContext: mContext,
  };

  return mPublic;

})();
