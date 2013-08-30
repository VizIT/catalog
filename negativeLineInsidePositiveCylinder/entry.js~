
  var chargeDistribution;
  var drawingSurface;
  var gaussianSurface;
  var renderer;

  function placeCharges(fieldRenderer)
  {
    chargeDistribution = new chargedCylinder(-15, -10, 40, 15, 10, -50,  30, 50, .0001, .1);

    fieldRenderer.addChargeDistribution(chargeDistribution);

    return fieldRenderer;
  }

  drawingSurface = generateParameterizedCanvas();

  if (drawingSurface != null)
  {
    renderer       = new fieldRenderer(drawingSurface, "../../efield/");
    if (renderer.getContext())
    {
      document.body.appendChild(drawingSurface);
      renderer       = placeCharges(renderer);
      renderer.start();
    }
  }

  if (drawingSurface == null || !renderer.getContext())
  {
    showDefaultProductImage();
  }
