 <html>
 	<body>
		<h1> STRING </h1>
 		<p id = "id1"> </p>
		
		<script>
			function String(str){
			this.string = str;
			}

String.prototype.isEmpty = function () {
    ///     Check if string is empty
	       //  return /^\s*$/.test(this);
			};
			
			
			
			var strObj = new String("NI");
			document.getElementById("id1").innerHTML = "String is " +strObj.str; 
		</script>
 	</body>
 </html>