
      function getURIParameter(name)
      {
        var half = location.search.split(name+'=')[1];
        return half? decodeURIComponent(half.split('&')[0]):null;
      }

      function generateParameterizedCanvas()
      {
        var canvasWidth;
        var canvasHeight;
        var drawingSurface;

        if (!!window.HTMLCanvasElement)
        {
          canvasWidth          = getURIParameter("canvasWidth");
          canvasWidth          = canvasWidth  == null ? 200 : canvasWidth;

          canvasHeight         = getURIParameter("canvasHeight");
          canvasHeight         = canvasHeight == null ? 200 : canvasHeight;

          drawingSurface        = document.createElement('canvas');
          drawingSurface.width  = canvasWidth;
          drawingSurface.height = canvasHeight;
        }
        else
        {
          drawingSurface = null;
        }

        return drawingSurface;
      }

      function showDefaultProductImage()
      {
        var canvasWidth;
        var canvasHeight;
        var error;
        var image;

        canvasWidth          = getURIParameter("canvasWidth");
        canvasWidth          = canvasWidth  == null ? 200 : canvasWidth;

        canvasHeight         = getURIParameter("canvasHeight");
        canvasHeight         = canvasHeight == null ? 200 : canvasHeight;

        image     = new Image();
        image.src = "image.png";
        image.style.height = canvasHeight;
        image.style.width  = canvasWidth;

        document.body.appendChild(image);

        error = document.getElementById("nowebgl");
        error.style.display="block";
      }

