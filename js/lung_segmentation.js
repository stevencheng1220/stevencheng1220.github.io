$(document).ready(function() {
  const realFileBtn = document.getElementById("lung_xray_button_file");
  const customBtn = document.getElementById("lung_xray_button");

  customBtn.addEventListener("click", function() {
    realFileBtn.click();
  });

  ////
  const EL = (sel) => document.querySelector(sel);
  const ctx = EL("#canvas").getContext("2d");

  realFileBtn.addEventListener("change", function() {
    if (!this.files || !this.files[0]) return;

    const FR = new FileReader();
    FR.addEventListener("load", (evt) => {
      const img = new Image();
      img.addEventListener("load", () => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
      });
      img.src = evt.target.result;
    });
    FR.readAsDataURL(this.files[0]);
  });
});
