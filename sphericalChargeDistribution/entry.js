
  var chargeDistribution;
  var drawingSurface;
  var renderer;

  function placeStartPoints(fieldRenderer)
  {
    fieldRenderer.addStartPoint(  0.0,  2.10,   0.0,    -1.0)
                 .addStartPoint(  0.0, -2.10,   0.0,    -1.0)
                 .addStartPoint( 2.10,   0.0,   0.0,    -1.0)
                 .addStartPoint(-2.10,   0.0,   0.0,    -1.0)
                 .addStartPoint( 1.05,  1.05,   1.4849, -1.0)
                 .addStartPoint( 1.05,  1.05,  -1.4849, -1.0)
                 .addStartPoint( 1.05, -1.05,   1.4849, -1.0)
                 .addStartPoint( 1.05, -1.05,  -1.4849, -1.0)
                 .addStartPoint(-1.05,  1.05,   1.4849, -1.0)
                 .addStartPoint(-1.05,  1.05,  -1.4849, -1.0)
                 .addStartPoint(-1.05, -1.05,   1.4849, -1.0)
                 .addStartPoint(-1.05, -1.05,  -1.4849, -1.0);

    return fieldRenderer;
  }

  drawingSurface = generateParameterizedCanvas();

  if (drawingSurface != null)
  {
    document.body.appendChild(drawingSurface);

    renderer           = new fieldRenderer(drawingSurface, "../../efield/");
    if (renderer.getContext())
    {
      renderer           = placeStartPoints(renderer);
      chargeDistribution = new chargedSphere( -1, 0.0, 0.0, 0.0, 0.0, 50.0);
      renderer           = renderer.addChargeDistribution(chargeDistribution);
      renderer.start();
    }
  }

  if (drawingSurface == null || !renderer.getContext())
  {
    showDefaultProductImage();
  }