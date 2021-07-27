//Handles all user keyboard inputs
function userControl() {
  let width = gEngine.Core.mWidth;
  let height = gEngine.Core.mHeight;
  let context = gEngine.Core.mContext;
  let gObjectNum = 0;

  document.addEventListener("keydown", (evt) => {
    if (evt.key === "f") {
      //Create new rectangle at random position
      context.strokeRect(
        Math.random() * width * 0.8, //X position of center
        Math.random() * height * 0.8, // Y position of center
        Math.random() * 30 + 10,
        Math.random() * 30 + 10
      ); // width and height location
      let r1 = new rectangle(
        new Vec2(Math.random() * width * 0.8, Math.random() * height * 0.8),
        Math.random() * 30 + 10,
        Math.random() * 30 + 10
      );
    }

    if (evt.key === "g") {
      //Create circle at random position
      context.beginPath();
      //draw circle
      context.arc(
        Math.random() * width * 0.8, // X position of center
        Math.random() * height * 0.8, //Y position of center
        Math.random() * 30 + 10,
        0,
        Math.PI * 2,
        true
      );

      //Radius
      context.closePath();
      context.stroke();

      let r1 = new circle(
        new Vec2(Math.random() * width * 0.8, Math.random() * height * 0.8),
        Math.random() * 10 + 20
      );
    }
  });
}

userControl();
