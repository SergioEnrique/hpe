
var cont=0;
/*
competencias.forEach(function(competencia){
	$.ajax({
	    url: "/sentiments?filter="+competencia,
	    cache: false
	})
	.done(function(data) {
		console.log(data.average)
		$('h2#canvas'+cont).html(data.search);
		CreateGraphic(data.positive,data.negative,data.average,cont)
		cont++;

	});
});
*/
CreateGraphic(30,50,.63,0,'Spotify');
CreateGraphic(36,35,.43,1,'AppleMusic');
CreateGraphic(10,32,.33,2,'GooglePlay');
CreateGraphic(12,29,.23,3,'Tidal');

function CreateGraphic(positivo,negativo,average,cont,nombre)
{

		console.log(positivo+" "+negativo+" "+average);
			        var randomScalingFactor = function() {
			            return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
			        };
			        var randomColorFactor = function() {
			            return Math.round(Math.random() * 255);
			        };
			        var barChartData = {
			            labels: ["positivo", "negativo","average"],
			            datasets: [{
			                backgroundColor: "rgba(255,214,120,1)",
			                data: [positivo, negativo,average]
			            }
			            /*, {
			                label: 'Dataset 2',
			                backgroundColor: "rgba(151,187,205,0.5)",
			                data: [3, 4]
			            }, {
			                label: 'Dataset 3',
			                backgroundColor: "rgba(151,187,205,0.5)",
			                data: [2, 3]
			            }*/
			            ]
			        };
			        //window.onload = function() {
			        	console.log("canvas"+cont);
			            var ctx = document.getElementById("canvas"+cont).getContext("2d");
			            window.myBar = new Chart(ctx, {
			                type: 'bar',
			                data: barChartData,
			                options: {
			                    title:{
			                        display:true,
			                        text:"Chart.js Bar Chart - Stacked"
			                    },
			                    tooltips: {
			                        mode: 'label'
			                    },
			                    responsive: true,
			                    scales: {
			                        xAxes: [{
			                            stacked: true,
			                        }],
			                        yAxes: [{
			                            stacked: true
			                        }]
			                    }
			                }
			            });
			        //};
			        //$('#randomizeData').click(function() {
			            $.each(barChartData.datasets, function(i, dataset) {
			                //dataset.backgroundColor = 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',.7)';
			                dataset.backgroundColor = 'rgba(' +255+ ',' + 255 + ',' + 255 + ',0.2)';
			                dataset.data = [10,-10];
			            });
			            //window.myBar.update();
			        //});
			    


}


