//
// Apex charts
//

if ($('[data-toggle="apex-chart"]').length) {

	// Settings
	Apex.grid = {
		padding: {
			right: 0,
			left: 0
		}
	}, Apex.dataLabels = {
		enabled: !1
	};

	// Random dataset generator

	var randomizeArray = function(e) {
			for (var t, r, a = e.slice(), o = a.length; 0 !== o;) r = Math.floor(Math.random() * o), t = a[o -= 1], a[o] = a[r], a[r] = t;
			return a
		},
		sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46],
		colorPalette = ["#00D8B6", "#008FFB", "#FEB019", "#FF4560", "#775DD0"],
		spark1 = {
			chart: {
				type: "area",
				height: 160,
				sparkline: {
					enabled: !0
				}
			},
			stroke: {
				width: 2,
				curve: "straight"
			},
			fill: {
				opacity: .2
			},
			series: [{
				name: "Hyper Sales ",
				data: randomizeArray(sparklineData)
			}],
			yaxis: {
				min: 0
			},
			colors: ["#DCE6EC"],
			title: {
				text: "$424,652",
				offsetX: 20,
				style: {
					fontSize: "24px"
				}
			},
			subtitle: {
				text: "Sales",
				offsetX: 20,
				style: {
					fontSize: "14px"
				}
			}
		};


	var options1 = {
		chart: {
			type: "line",
			width: '100%',
			height: 50,
			sparkline: {
				enabled: !0
			}
		},
		series: [{
			data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
		}],
		stroke: {
			width: 2,
			curve: "smooth"
		},
		markers: {
			size: 0
		},
		colors: ["#727cf5"],
		tooltip: {
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	},
	options2 = {
		chart: {
			type: "line",
            width: '100%',
			height: 50,
			sparkline: {
				enabled: !0
			}
		},
		colors: ["#0acf97"],
		series: [{
			data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
		}],
		stroke: {
			width: 2,
			curve: "smooth"
		},
		markers: {
			size: 0
		},
		tooltip: {
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	},
	options3 = {
		chart: {
			type: "line",
            width: '100%',
			height: 50,
			sparkline: {
				enabled: !0
			}
		},
		colors: ["#ffbc00"],
		series: [{
			data: [47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82]
		}],
		stroke: {
			width: 2,
			curve: "smooth"
		},
		markers: {
			size: 0
		},
		tooltip: {
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	},
	options4 = {
		chart: {
			type: "line",
            width: '100%',
			height: 50,
			sparkline: {
				enabled: !0
			}
		},
		colors: ["#fa5c7c"],
		series: [{
			data: [15, 75, 47, 65, 14, 2, 41, 54, 4, 27, 15]
		}],
		stroke: {
			width: 2,
			curve: "smooth"
		},
		markers: {
			size: 0
		},
		tooltip: {
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	},
	options5 = {
		chart: {
			type: "bar",
            width: '100%',
			height: 50,
			sparkline: {
				enabled: !0
			}
		},
		plotOptions: {
			bar: {
				columnWidth: "80%"
			}
		},
		colors: ["#727cf5"],
		series: [{
			data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
		}],
		labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
		xaxis: {
			crosshairs: {
				width: 1
			}
		},
		tooltip: {
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	},
	options6 = {
		chart: {
			type: "bar",
            width: '100%',
			height: 50,
			sparkline: {
				enabled: !0
			}
		},
		plotOptions: {
			bar: {
				columnWidth: "80%"
			}
		},
		colors: ["#0acf97"],
		series: [{
			data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
		}],
		labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
		xaxis: {
			crosshairs: {
				width: 1
			}
		},
		tooltip: {
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	},
	options7 = {
		chart: {
			type: "bar",
            width: '100%',
			height: 50,
			sparkline: {
				enabled: !0
			}
		},
		plotOptions: {
			bar: {
				columnWidth: "80%"
			}
		},
		colors: ["#ffbc00"],
		series: [{
			data: [47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82]
		}],
		labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
		xaxis: {
			crosshairs: {
				width: 1
			}
		},
		tooltip: {
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	},
	options8 = {
		chart: {
			type: "bar",
            width: '100%',
			height: 50,
			sparkline: {
				enabled: !0
			}
		},
		plotOptions: {
			bar: {
				columnWidth: "80%"
			}
		},
		colors: ["#fa5c7c"],
		series: [{
			data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
		}],
		labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
		xaxis: {
			crosshairs: {
				width: 1
			}
		},
		tooltip: {
			fixed: {
				enabled: !1
			},
			x: {
				show: !1
			},
			y: {
				title: {
					formatter: function(e) {
						return ""
					}
				}
			},
			marker: {
				show: !1
			}
		}
	};


	// Initialize chart

	new ApexCharts(document.querySelector("#apex-spark-1"), options1).render(),
	new ApexCharts(document.querySelector("#apex-spark-2"), options2).render(),
	new ApexCharts(document.querySelector("#apex-spark-3"), options3).render(),
	new ApexCharts(document.querySelector("#apex-spark-4"), options4).render(),
	new ApexCharts(document.querySelector("#apex-spark-5"), options5).render(),
	new ApexCharts(document.querySelector("#apex-spark-6"), options6).render(),
	new ApexCharts(document.querySelector("#apex-spark-7"), options7).render(),
	new ApexCharts(document.querySelector("#apex-spark-8"), options8).render();
}
