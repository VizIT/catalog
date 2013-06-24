
  var charge;
  var chargeDistribution;
  var drawingSurface;
  var renderer;

  drawingSurface = generateParameterizedCanvas();

  if (drawingSurface != null)
  {
    function placeChargeDistributions(fieldRenderer)
    {
      chargeDistribution = new chargedPlane(.01, .05,
                                            -49.4974746830583267,              5.71067811865475237,          135.710678118654752,
                                             91.9238815542511782,            105.710678118654752,             35.7106781186547525,
                                             91.9238815542511782,            -35.7106781186547524,          -105.710678118654752,
                                            -49.49747468305832667272915846, -135.7106781186547524513414694,   -5.710678118654752478791493056);
      renderer           = renderer.addChargeDistribution(chargeDistribution);
      return renderer;
    }

    function placeCharges(fieldRenderer)
    {
      var charge;

      charge = new Charge(-100.0, -55.0, 33.0, -22.0);

      fieldRenderer.addCharge(charge);

      return fieldRenderer;
    }

    renderer       = new fieldRenderer(drawingSurface, "../../efield/");
    if (renderer.getContext())
    {
      document.body.appendChild(drawingSurface);
      renderer           = placeChargeDistributions(renderer);
      renderer           = placeCharges(renderer);
      renderer.start();
    }
  }

  if (drawingSurface == null || !renderer.getContext())
  {
    showDefaultProductImage();
  }
