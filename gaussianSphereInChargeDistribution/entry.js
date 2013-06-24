
  var chargeDistribution;
  var drawingSurface;
  var gaussianSurface;
  var renderer;

  function placeStartPoints(fieldRenderer)
  {
    fieldRenderer.addStartPoint(  0.0,  21.0,   0.0,    -1.0)
                 .addStartPoint(  0.0, -21.0,   0.0,    -1.0)
                 .addStartPoint( 21.0,   0.0,   0.0,    -1.0)
                 .addStartPoint(-21.0,   0.0,   0.0,    -1.0)
                 .addStartPoint( 10.5,  10.5,   14.849, -1.0)
                 .addStartPoint( 10.5,  10.5,  -14.849, -1.0)
                 .addStartPoint( 10.5, -10.5,   14.849, -1.0)
                 .addStartPoint( 10.5, -10.5,  -14.849, -1.0)
                 .addStartPoint(-10.5,  10.5,   14.849, -1.0)
                 .addStartPoint(-10.5,  10.5,  -14.849, -1.0)
                 .addStartPoint(-10.5, -10.5,   14.849, -1.0)
                 .addStartPoint(-10.5, -10.5,  -14.849, -1.0);

    return fieldRenderer;
  }

  drawingSurface = generateParameterizedCanvas();

  if (drawingSurface != null)
  {
    renderer           = new fieldRenderer(drawingSurface, "../../efield/");
    if (renderer.getContext())
    {
      document.body.appendChild(drawingSurface);
      renderer           = placeStartPoints(renderer);
      gaussianSurface    = new gaussianSphere(0.0, 0.0, 0.0, 10.0);
      renderer           = renderer.addGaussianSurface(gaussianSurface);
      chargeDistribution = new chargedSphere( -1.0, 0.0, 0.0, 0.0, 0.0, 20.0, 50.0);
      renderer           = renderer.addChargeDistribution(chargeDistribution);
      renderer.start();
    }
  }

  if (drawingSurface == null || !renderer.getContext())
  {
    showDefaultProductImage();
  }
