
  var chargeDistribution;
  var drawingSurface;
  var renderer;

  drawingSurface = generateParameterizedCanvas();

  if (drawingSurface != null)
  {
    renderer       = new fieldRenderer(drawingSurface, "../../efield/");
    if (renderer.getContext())
    {
      document.body.appendChild(drawingSurface);

      chargeDistribution = new chargedPlane(.1, .01,
                                            50.0, -100.,  100.,
                                            50.0,  100.,  100.,
                                            40.0,  100., -100.,
                                            40.0, -100., -100.);
      renderer           = renderer.addChargeDistribution(chargeDistribution);
      // There are no electric field lines traced starting at this distribution.
      chargeDistribution = new chargedPlane(-.1, 0,
                                            -40.0, -100.,  100.,
                                            -40.0,  100.,  100.,
                                            -50.0,  100., -100.,
                                            -50.0, -100., -100.);
      renderer           = renderer.addChargeDistribution(chargeDistribution);

      renderer.start();
    }
  }

  if (drawingSurface == null || !renderer.getContext())
  {
    showDefaultProductImage();
  }
