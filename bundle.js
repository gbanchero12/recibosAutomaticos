var xml = new Array(); 
const input = document.querySelector("#file");    
input.addEventListener('change',function (e){
	
	const reader = new FileReader()
	reader.onload = function () {
		const lines = reader.result //.split('|').map(function (line){
			//return line.split('|')
		//})
		
		xml.push(lines);
		
	}
	reader.readAsText(input.files[0])
},false)

