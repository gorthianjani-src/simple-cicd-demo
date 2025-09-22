<!DOCTYPE html>
<html>
<head>
    <title>Basic Interactivity</title>
</head>
<body>
    <p id="myParagraph">Hello, world!</p>
    <button onclick="changeText()">Click me</button>

    <script>
        function changeText() {
            document.getElementById("myParagraph").innerHTML = "Text changed!";
        }
    </script>
</body>
</html>