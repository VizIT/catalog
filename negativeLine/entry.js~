
  var chargeDistribution;
  var drawingSurface;
  var gaussianSurface;
  var renderer;

  function placeCharges(fieldRenderer)
  {
    chargeDistribution = new chargedLine(-30, -10, 30, 30, 10, -30,  1, .04);

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
