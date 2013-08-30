
  var chargeDistribution1;
  var chargeDistribution2;
  var drawingSurface;
  var gaussianSurface;
  var renderer;

  function placeCharges(fieldRenderer)
  {
    chargeDistribution1 = new chargedLine(-30,  0, 10, -30,  0, -60,   1, .04);
    fieldRenderer.addChargeDistribution(chargeDistribution1);
    chargeDistribution2 = new chargedLine( 30,  0, 10,  30,  0, -60,   1, .04);
    fieldRenderer.addChargeDistribution(chargeDistribution2);

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
