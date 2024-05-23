    <script>
        function showImage(src) {
            var enlargedImg = document.getElementById("enlarged-img");
            enlargedImg.src = src;
            document.getElementById("enlarged-container").style.display = "flex";
        }

        function hideImage() {
            document.getElementById("enlarged-container").style.display = "none";
        }
    </script>