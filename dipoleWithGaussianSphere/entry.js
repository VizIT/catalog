  var drawingSurface;
  var gaussianSurface;
  var renderer;
  var startPoints;

  /*
   * Create the charges and register them with the renderer. Edit this
   * to change the charge configuration modeled in this illustration.
   */
  function placeCharges(fieldRenderer)
  {
    var charge1;
    var charge2;

    // Each charge has a charge, then x, y, z coordinates.
    // Each of these is a floating point number.
    charge1 = new Charge(  1.0, -30.0,  0.0, 0.0);
    charge2 = new Charge( -1.0,  30.0,  0.0, 0.0);

    fieldRenderer.addCharge(charge1)
                 .addCharge(charge2);

    return fieldRenderer;
  }

  /*
   * This sets the start points of flux or field lines that will be traced
   * to generate the illustration. Each startpoint is specified with x, y, z,
   * and sgn. Where (x, y, z) is the coordinate of the point where we start
   * tracing the field line, and sgn is +1.0 or -1.0 indicating whether the
   * fiux line is to be traced along, or in opposition to the electric field.
   * Field lines starting near a negative charge will usually have this
   * indicator as -1.0.
   */
  function placeStartPoints(fieldRenderer)
  {
    fieldRenderer.addStartPoint(-28.0,   0.0,   0.0,    1.0)
                 .addStartPoint(-30.0,   2.0,   0.0,    1.0)
                 .addStartPoint(-30.0,  -2.0,   0.0,    1.0)
                 .addStartPoint(-29.0,   1.0,   1.4142, 1.0)
                 .addStartPoint(-29.0,   1.0,  -1.4142, 1.0)
                 .addStartPoint(-29.0,  -1.0,   1.4142, 1.0)
                 .addStartPoint(-29.0,  -1.0,  -1.4142, 1.0)
                 .addStartPoint(-31.0,   1.0,   1.4142, 1.0)
                 .addStartPoint(-31.0,   1.0,  -1.4142, 1.0)
                 .addStartPoint(-31.0,  -1.0,   1.4142, 1.0)
                 .addStartPoint(-31.0,  -1.0,  -1.4142, 1.0)
                 .addStartPoint(-31.31,  0.54,  1.4142, 1.0)
                 .addStartPoint(-31.31,  0.54, -1.4142, 1.0)
                 .addStartPoint(-31.31, -0.54,  1.4142, 1.0)
                 .addStartPoint(-31.31, -0.54, -1.4142, 1.0);

    return fieldRenderer;
  }

  drawingSurface = generateParameterizedCanvas();

  if (drawingSurface != null)
  {
    renderer        = new fieldRenderer(drawingSurface, "../../efield/");
    if (renderer.getContext())
    {
      document.body.appendChild(drawingSurface);
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
