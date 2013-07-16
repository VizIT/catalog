
  var chargeDistribution;
  var drawingSurface;
  var gaussianSurface;
  var renderer;

  drawingSurface = generateParameterizedCanvas();

  if (drawingSurface != null)
  {
    renderer       = new fieldRenderer(drawingSurface, "../../efield/");
    if (renderer.getContext())
    {
      document.body.appendChild(drawingSurface);
      chargeDistribution = new chargedPlane(.01, .03,
                                            -49.5006781186547524,    5.71067811865475232, -105.710678118654753,
                                             91.9206781186547524,  105.710678118654752,     -5.71067811865475249,
                                             91.9206781186547524,  -35.7106781186547523,   135.710678118654753,
                                            -49.5006781186547524, -135.710678118654752,     35.7106781186547525);
      renderer           = renderer.addChargeDistribution(chargeDistribution);

      gaussianSurface    = new gaussianCylinder(21.21, -15.0, 15.0, 30, 55, -Math.PI/4, -Math.PI/4, 0);
      renderer.addGaussianSurface(gaussianSurface);

      renderer.start();
    }
  }

  if (drawingSurface == null || !renderer.getContext())
  {
    showDefaultProductImage();
  }
