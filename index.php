<!doctype html>

<html>

  <head>

    <meta charset="utf-8">

    <link rel="stylesheet" type="text/css" href="css/main.css">

  </head>

  <body>

    <div class="rating-wrapper" id="rating">

      <div style="float:left;">

        <label id="rate-string"></label>

        <ul>
          <li class="r1 star"></li>
          <li class="r2 star"></li>
          <li class="r3 star"></li>
          <li class="r4 star"></li>
          <li class="r5 star"></li>
        </ul>

      </div>

      <div style="float:left;margin-left:40px;margin-top:20px;">

        <button onclick="limpiar_estrellas()">clear stars</button>

      </div>

    </div>

    <script src="js/main.js" data-id="rating"></script>

  </body>

</html>