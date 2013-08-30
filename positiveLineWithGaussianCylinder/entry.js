
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

  function placeGaussianSurface(fieldRenderer)
  {
    // Copied angles from running javascript for the charged line.
    gaussianSurface    = new gaussianCylinder(0.0, 0.0, 0.0, 40, 15, 2.32986653606156, 0, 0.3217505543966422);

    fieldRenderer.addGaussianSurface(gaussianSurface);

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
      renderer       = placeGaussianSurface(renderer);
      renderer.start();
    }
  }

  if (drawingSurface == null || !renderer.getContext())
  {
    showDefaultProductImage();
  }
