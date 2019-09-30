<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- load p5.js -->
  <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.min.js"></script>
  <!-- load ml5.js -->
  <script src="https://unpkg.com/ml5@0.2.3/dist/ml5.min.js" type="text/javascript"></script>
  <script type="text/javascript">
    

 
</script>
  <!-- keep the video in center of browser -->
  <style type="text/css">
    body{
      text-align: center;
    }
  </style>  
</head>
<body id="body">
  <p id="progress"></p>
  <h1> PoseNet video - CSV Progress Bar </h1>
  <video id="video" width="200" height="200"></video>
  <!-- load the posenet.js file -->
  <script src="posenet.js"></script>
   

</body>
</html>