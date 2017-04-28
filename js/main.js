/*
Kulcsar Rudolf

Website: http://kulcsarrudolf.com/
LinkedIN: https://www.linkedin.com/in/kulcsarrudolf/
GitHub: https://github.com/kulcsarrudolf
*/

$(document).ready(function() {
	var d = new Date();
	var h = d.getHours();
	var n = d.getDay();

	if (n == 0){ 
		//ha vasárnap
		$("#zarva").show();
	}else if (n == 7){
		//ha szombat
		if ((h > 8) && (h < 14)){
			$("#nyitva").show();
		}else{
			$("#zarva").show();
		}
	}else{
		if ((h > 8) && (h < 20)){
			$("#nyitva").show();
		}else{
			$("#zarva").show();
		}
	}
})