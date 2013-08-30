
  var chargeDistribution1;
  var chargeDistribution2;
  var drawingSurface;
  var gaussianSurface;
  var renderer;

  function placeCharges(fieldRenderer)
  {
      chargeDistribution1 = new chargedCylinder(-1.0, 0.0, 40, 1.0, 0.0, -50,  30, 50, .0001, 0.0);
    // lambda = Pi*(r1**2-r0**2)*pho = 3.14159265358979323846×(50×50−30×30)×.0001 = 0.5026548245743669
    // make sure you have enough accuracy here or the field will not go to zero where you expect it to.
    chargeDistribution2 = new chargedLine(-1.0, 0.0, 40, 1.0, 0.0, -50, -0.5026548245743669, 0.09);

    // Draw the inner most charge distribution first.
    fieldRenderer.addChargeDistribution(chargeDistribution2);
    fieldRenderer.addChargeDistribution(chargeDistribution1);

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
