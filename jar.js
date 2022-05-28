<script>
var source = new EventSource("demo_sse.php");
source.onmessage = function(event) {
  document.getElementById("result").innerHTML += event.data + "<br>"
};

</script>
 Document.body.innerHTML = '<h1>working with javascript...</h1>';