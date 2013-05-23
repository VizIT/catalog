
  var chargeDistribution;
  var drawingSurface;
  var gaussianSurface;
  var renderer;

  function placeCharges(fieldRenderer)
  {
    var charge;

    charge = new Charge(1.0, 0.0, 0.0, 0.0);

    fieldRenderer.addCharge(charge);

    return fieldRenderer;
  }

  function placeStartPoints(fieldRenderer)
  {
    fieldRenderer.addStartPoint( 2.0,  0.0,  0.0,    1.0)
                 .addStartPoint(-2.0,  0.0,  0.0,    1.0)
                 .addStartPoint( 0.0,  2.0,  0.0,    1.0)
                 .addStartPoint( 0.0, -2.0,  0.0,    1.0)
                 .addStartPoint( 1.0,  1.0,  1.4142, 1.0)
                 .addStartPoint( 1.0,  1.0, -1.4142, 1.0)
                 .addStartPoint( 1.0, -1.0,  1.4142, 1.0)
                 .addStartPoint( 1.0, -1.0, -1.4142, 1.0)
                 .addStartPoint(-1.0,  1.0,  1.4142, 1.0)
                 .addStartPoint(-1.0,  1.0, -1.4142, 1.0)
                 .addStartPoint(-1.0, -1.0,  1.4142, 1.0)
                 .addStartPoint(-1.0, -1.0, -1.4142, 1.0);

    return fieldRenderer;
  }

  drawingSurface = generateParameterizedCanvas();

  if (drawingSurface != null)
  {
    document.body.appendChild(drawingSurface);

    renderer        = new fieldRenderer(drawingSurface, "../../efield/");
    if (renderer.getContext())
    {
      renderer        = placeCharges(renderer);
      renderer        = placeStartPoints(renderer);
      gaussianSurface = new gaussianSphere(0.0, 0.0, 0.0, 40.0);
      renderer        = renderer.addGaussianSurface(gaussianSurface);
      renderer.start();
    }
  }

  if (drawingSurface == null || !renderer.getContext())
  {
    showDefaultProductImage();
  }
