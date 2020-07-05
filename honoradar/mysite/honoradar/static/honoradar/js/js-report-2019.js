
Highcharts.chart('zufriedenheitvslohn', {
    chart: {
        type: 'scatter',
        zoomType: {
		enable: false
		},
    },
    title: {
        text: 'Wo wird gern gearbeitet und gut gezahlt?',
        style: {
            color: "#ff9f23",
            fontWeight: 'bold',
			fontFamily: 'InknutAntiqua-Bold',
			fontSize: '25px'
        }
    },
	exporting: {
		enabled: false
	},
    subtitle: {
        text: 'Gleitender Median der Stundenhonorare in Euro nach Medien im Vergleich zur Zufriedenheit',
        style: {
            color: "#ffbb63",
            fontWeight: 'regular',
			fontFamily: 'Open Sans',
			fontSize: '14px'
        }
    },
    xAxis: {
        title: {
            enabled: true,
			style: {"fontWeight": "bold"},
            text: 'Zufriedenheit',
        },
		max: 9,
		min: 3.5,
		style: {
			color: "#ffbb63",
			fontWeight: 'regular',
			fontFamily: 'Open Sans'
		},
		labels: {
			enabled: true
		},
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true,
		lineWidth: 0,
		minorGridLineWidth: 0,
		lineColor: 'transparent',
		minorTickLength: 0,
		tickLength: 0
    },
    yAxis: {
		max: 60,
		min: 0,
        title: {
            text: 'Stundenhonorar',
			style: {"fontWeight": "bold"},
        },
		style: {
			color: "#ffbb63",
			fontWeight: 'regular',
			fontFamily: 'Open Sans'
			},
		labels: {
            format: '{value} Euro',
			style: {
				fontWeight: 'regular',
				fontFamily: 'Open Sans'
			}
        }
    },
	credits: {
		enabled:false
		},
    legend: {
		enabled:false,
	},
    plotOptions: {
		series: {
            color: 'rgba(119, 152, 191, .3)',
            marker: {
                fillColor: 'rgba(119, 152, 191, .6)',
                lineWidth: 2,
                lineColor: null,
				symbol: "O"
            }
        },
        scatter: {
            marker: {
                radius: 3,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: '#2ecc71'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br><br>',
                pointFormat: 'Stundenhonorar: {point.y} Euro<br>Zufriedenheit: {point.x} von 9'
            }
        },
        line: {
            marker: {
                states: {
                    hover: {
                        enabled: false,
                        lineColor: '#2ecc71'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: 'Stundenhonorar: {point.y} Euro<br>Zufriedenheit: {point.x} von 9'
            }
        }
    },
	 responsive: {
        rules: [{
            condition: {
                maxWidth: 750
            },
            chart: {
                title: {
					style: {
						fontSize: '35px'
					}
				}
            }
        }]
    },
    series: [

{name: "Westdeutscher Rundfunk (Freiberufler)", data: [[7, 39.56]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "NZZ (Freiberufler)", data: [[7, 16.5]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Brigitte (Freiberufler)", data: [[8.5, 52.12]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "WDR 5 (Freiberufler)", data: [[7.8, 56.03]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Bild (Freiberufler)", data: [[6.3, 35.38]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Gehirn&Geist (Freiberufler)", data: [[7.3, 59.03]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Frankfurter Allgemeine Zeitung (Freiberufler)", data: [[6, 17.73]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Deutschlandfunk Nova (Freiberufler)", data: [[7.7, 52.94]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Norddeutscher Rundfunk (Freiberufler)", data: [[5.3, 29.92]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Brand eins (Freiberufler)", data: [[9, 37.15]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Deutschlandfunk Kultur (Freiberufler)", data: [[7.5, 49.88]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Brigitte Woman (Freiberufler)", data: [[6.8, 55.83]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Handelsblatt (Freiberufler)", data: [[7.3, 42.41]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "DPA (Freiberufler)", data: [[5.5, 8.48]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Slow Food Magazin (Freiberufler)", data: [[8, 40.23]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Technology Review (Freiberufler)", data: [[7.3, 46.45]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Spektrum Online (Freiberufler)", data: [[8.3, 35.87]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Walden (Freiberufler)", data: [[8.3, 34.3]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Merian (Freiberufler)", data: [[6.3, 53.89]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Stern (Freiberufler)", data: [[7, 42.41]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "P.M. Magazin (Freiberufler)", data: [[8.3, 33.35]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Psychologie Heute (Freiberufler)", data: [[8, 35.14]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "enorm (Freiberufler)", data: [[8, 34.87]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "WDR 2 (Freiberufler)", data: [[7.3, 40.83]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Essen & Trinken (Freiberufler)", data: [[7.5, 36.81]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Deutschlandfunk (Freiberufler)", data: [[7.3, 38.88]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "T3n (Freiberufler)", data: [[8.3, 27.46]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Buzzfeed (Freiberufler)", data: [[7.7, 30.46]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Geo (Freiberufler)", data: [[6.8, 39.36]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Cicero (Freiberufler)", data: [[6.5, 40.77]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Deutsche Welle (Freiberufler)", data: [[7, 30]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Geo Wissen (Freiberufler)", data: [[7.3, 30.72]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Utopia.de (Freiberufler)", data: [[8.3, 20.33]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Jungle World (Freiberufler)", data: [[9, 12.58]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Natur (Freiberufler)", data: [[7.7, 25.55]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Ideat (Freiberufler)", data: [[6, 41.99]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Zitty (Freiberufler)", data: [[7.7, 23.69]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Funke Mediengruppe (Freiberufler)", data: [[5.3, 46.27]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "P.M. History (Freiberufler)", data: [[7.7, 22.8]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "welt-sichten (Freiberufler)", data: [[7.7, 22.11]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Chrismon (Freiberufler)", data: [[7, 26.61]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Unispiegel (Freiberufler)", data: [[6.7, 29.05]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Die Zeit (Freiberufler)", data: [[7, 21.18]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "ze.tt (Freiberufler)", data: [[7.3, 20.34]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Missy Magazine (Freiberufler)", data: [[8.3, 10.32]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "tip Berlin (Freiberufler)", data: [[7.7, 16.38]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Zeit Online (Freiberufler)", data: [[6, 19.5]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Münchner Merkur (Freiberufler)", data: [[6, 32.78]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Perspective Daily (Freiberufler)", data: [[6.7, 25.57]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Übermedien (Freiberufler)", data: [[7, 22.23]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Evangelischer Pressedienst (Freiberufler)", data: [[7.3, 17.75]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Die Welt am Sonntag (Freiberufler)", data: [[6.5, 25.68]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Spiegel Online (Freiberufler)", data: [[5, 20.69]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "WDR 1LIVE (Freiberufler)", data: [[6, 30.22]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "dpa Themendienst (Freiberufler)", data: [[6.7, 23.24]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Nordis (Freiberufler)", data: [[6.3, 25.82]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Die Welt (Freiberufler)", data: [[7.7, 25.58]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Mare (Freiberufler)", data: [[7, 18.14]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Jetzt Online (Freiberufler)", data: [[7, 17.5]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Freie Presse (Freiberufler)", data: [[5.7, 30.63]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Frankfurter Allgemeine Sonntagszeitung (Freiberufler)", data: [[6.3, 23.22]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Fluter (Freiberufler)", data: [[5.3, 33.96]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "VDI Nachrichten (Freiberufler)", data: [[6.7, 19.21]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Hellweg Radio (Freiberufler)", data: [[6.5, 20.78]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "VICE (Freiberufler)", data: [[6.7, 18.83]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "SWR2 (Freiberufler)", data: [[6.3, 21.02]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "RND (Freiberufler)", data: [[6.7, 15.03]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Neues Deutschland (Freiberufler)", data: [[6.3, 9.61]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Badische Zeitung (Freiberufler)", data: [[7, 11.21]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Frankfurter Rundschau (Freiberufler)", data: [[6.7, 14.11]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Der Feinschmecker (Freiberufler)", data: [[5, 30]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Die Rheinpfalz (Freiberufler)", data: [[6.3, 15.76]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Rheinische Post (Freiberufler)", data: [[6, 22.91]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "11 Freunde Online (Freiberufler)", data: [[6.5, 13.67]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "evangelisch.de (Freiberufler)", data: [[6, 18.54]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Vice Online (Freiberufler)", data: [[6, 16.47]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Bento (Freiberufler)", data: [[6, 15.29]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Juice Magazin (Freiberufler)", data: [[6.7, 8.47]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Junge Welt (Freiberufler)", data: [[7, 4.96]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Edison (Freiberufler)", data: [[4.7, 26.34]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Süddeutsche Zeitung (Freiberufler)", data: [[7, 15.2]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Berliner Zeitung (Freiberufler)", data: [[5.7, 15.33]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Sächsische Zeitung (Freiberufler)", data: [[5.3, 17.78]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Südkurier (Freiberufler)", data: [[5.7, 11.36]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "MDR Aktuell (Freiberufler)", data: [[5.3, 14.63]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Forum-Wochenmagazin (Freiberufler)", data: [[6.3, 4.53]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Chip Online (Freiberufler)", data: [[4.5, 21.42]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Rhein-Neckar-Zeitung (Freiberufler)", data: [[4.7, 18.86]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Westdeutsche Allgemeine Zeitung (Freiberufler)", data: [[4.7, 16.6]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Der Freitag (Freiberufler)", data: [[5.3, 9.9]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Saarbrücker Zeitung (Freiberufler)", data: [[5.3, 9.74]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Weser-Kurier (Freiberufler)", data: [[5, 7.49]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Jüdische Allgemeine (Freiberufler)", data: [[5, 7.45]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Spex (Freiberufler)", data: [[5, 6.98]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Radio Essen (Freiberufler)", data: [[7.3, 18.89]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "filmecho/filmwoche (Freiberufler)", data: [[3.7, 7.8]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Der Tagesspiegel (Freiberufler)", data: [[5, 13]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  {name: "Die Tageszeitung (Freiberufler)", data: [[6.3, 14.64]], showInLegend: false, marker: {states: {hover: {fillColor: '#2ecc71'}}}},
  
  {name: "Bayerischer Rundfunk (Pauschalist)", data: [[7.3, 29.00]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#278FC4', fillColor: '#278FC4'}}}, showInLegend: false},
  {name: "DPA (Pauschalist)", data: [[6.0,15.52]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#278FC4', fillColor: '#278FC4'}}}, showInLegend: false},
  {name: "Der Tagesspiegel (Pauschalist)", data: [[4.3,17.33]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#278FC4', fillColor: '#278FC4'}}}, showInLegend: false},
  {name: "Deutsche Welle (Pauschalist)", data: [[6.8,27.28]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#278FC4', fillColor: '#278FC4'}}}, showInLegend: false},
  {name: "Die Tageszeitung (Pauschalist)", data: [[8.8,14.94]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#278FC4', fillColor: '#278FC4'}}}, showInLegend: false},
  {name: "Radio Essen (Pauschalist)", data: [[6.3,15.05]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#278FC4', fillColor: '#278FC4'}}}, showInLegend: false},
  {name: "Ruhr-Nachrichten (Pauschalist)", data: [[7.0,11.25]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#278FC4', fillColor: '#278FC4'}}}, showInLegend: false},
  {name: "Süddeutsche Zeitung (Pauschalist)", data: [[7.8,23.34]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#278FC4', fillColor: '#278FC4'}}}, showInLegend: false},
  {name: "Südwestrundfunk (Pauschalist)", data: [[8.0,36.31]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#278FC4', fillColor: '#278FC4'}}}, showInLegend: false},
  {name: "Tagesschau Online (Pauschalist)", data: [[5.5,30.10]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#278FC4', fillColor: '#278FC4'}}}, showInLegend: false},
  {name: "Westdeutscher Rundfunk (Pauschalist)", data: [[7.0,36.30]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#278FC4', fillColor: '#278FC4'}}}, showInLegend: false},
  {name: "ZDF (Pauschalist)", data: [[6.0,33.75]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#278FC4', fillColor: '#278FC4'}}}, showInLegend: false},
  
  {name: "Bild (Festangestellter)", data: [[7.7, 34.79]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false},
  {name: "DPA (Festangestellter)", data: [[7.0, 25.46]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false},
  {name: "Der Tagesspiegel (Festangestellter)", data: [[6.8, 22.37]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false},
  {name: "Die Tageszeitung (Festangestellter)", data: [[6.0, 15.46]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false},
  {name: "Die Zeit (Festangestellter)", data: [[6.7, 25.00]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false},
  {name: "Fernsehen (Festangestellter)", data: [[6.8, 25.30]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false},
  {name: "Frankfurter Allgemeine Zeitung (Festangestellter)", data: [[5.8, 45.29]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false},
  {name: "Gründerszene Online (Festangestellter)", data: [[6.0, 19.27]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false},
  {name: "Handelsblatt (Festangestellter)", data: [[6.7, 27.345]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false},
  {name: "Impulse (Festangestellter)", data: [[8.0, 22.99]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false},
  {name: "Munich Online (Festangestellter)", data: [[5.5, 21.25]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false},
  {name: "NZZ (Festangestellter)", data: [[6.7, 44.94]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false},
  {name: "Neue Osnabrücker Zeitung (Festangestellter)", data: [[6.3, 23.14]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false},
  {name: "Norddeutscher Rundfunk (Festangestellter)", data: [[6.3, 39.72]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false},
  {name: "Radio (Festangestellter)", data: [[6.3, 18.11]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false},
  {name: "Rheinische Post (Festangestellter)", data: [[7.3, 18.75]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false},
  {name: "Ruhr-Nachrichten (Festangestellter)", data: [[7.7, 12.41]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false},
  {name: "Rundfunk Berlin-Brandenburg (Festangestellter)", data: [[8.3, 28.47]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false},
  {name: "Spiegel Online (Festangestellter)", data: [[7.3, 26.35]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false},
  {name: "Stern (Festangestellter)", data: [[7.0, 25.07]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false},
  {name: "Stern Online (Festangestellter)", data: [[7.0, 17.16]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false},
  {name: "Straubinger Tagblatt (Festangestellter)", data: [[5.7, 19.37]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false},
  {name: "Süddeutsche Online (Festangestellter)", data: [[6.3, 21.64]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false},
  {name: "Süddeutsche Zeitung (Festangestellter)", data: [[5.3, 20.98]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false},
  {name: "Westdeutscher Rundfunk (Festangestellter)", data: [[6.3, 26.95]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false},
  {name: "Wirtschaftswoche (Festangestellter)", data: [[6.0, 28.20]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false},
  {name: "Zeit Online (Festangestellter)", data: [[6.3, 28.07]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false},
  {name: "netzpolitik.org (Festangestellter)", data: [[8.0, 17.63]], color: 'rgba(119, 152, 191, .3)', marker: {fillColor: 'rgba(119, 152, 191, .6)', lineWidth: 2, lineColor: null, symbol: "O", states: {hover: {lineColor: '#ff9f23', fillColor: '#ff9f23'}}}, showInLegend: false}
	]
});


Highcharts.chart('zeitvslohn', {
    chart: {
        type: 'scatter',
        zoomType: {
		enable: false
		},
    },
	exporting: {
		enabled: false
	},
    title: {
        text: 'Lohnen sich die langen Stücke?',
        style: {
            color: "#ff9f23",
            fontWeight: 'bold',
			fontFamily: 'InknutAntiqua-Bold',
			fontSize: '25px'
        }
    },
    subtitle: {
        text: 'Stundensatz freier Journalist*innen in Abhängigkeit von der Erstellungsdauer ihrer Auftragsarbeiten in Stunden',
        style: {
            color: "#ffbb63",
            fontWeight: 'regular',
			fontFamily: 'Open Sans',
			fontSize: '14px'
        }
    },
    xAxis: {
        title: {
            enabled: true,
			style: {"fontWeight": "bold"},
            text: 'Erstellungsdauer',
        },
		max: 100,
		min: 0,
		style: {
			color: "#ffbb63",
			fontWeight: 'regular',
			fontFamily: 'Open Sans'
		},
		labels: {
			enabled: true
		},
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true,
		lineWidth: 0,
		minorGridLineWidth: 0,
		lineColor: 'transparent',
		minorTickLength: 0,
		tickLength: 0
    },
    yAxis: {
        title: {
            text: 'Stundenhonorar',
			style: {"fontWeight": "bold"},
        },
		style: {
			color: "#ffbb63",
			fontWeight: 'regular',
			fontFamily: 'Open Sans'
			},
		labels: {
            format: '{value} Euro',
			style: {
				fontWeight: 'regular',
				fontFamily: 'Open Sans'
			}
        }
    },
	credits: {
		enabled:false
		},
    legend: {
		enabled:false,
    },
    plotOptions: {
		series: {
            color: 'rgba(119, 152, 191, .3)',
            marker: {
                fillColor: '#39ba6f',
                lineWidth: 2,
                lineColor: null,
				symbol: "O"
            }
        },
        scatter: {
            marker: {
                radius: 3,
                states: {
					fillColor: 'red',
                    hover: {
                        enabled: true,
                        lineColor: '#2ecc71'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: 'Stundenhonorar: {point.y} Euro<br>Erstellungsdauer: {point.x} Stunden'
            }
        }
    },
	 responsive: {
        rules: [{
            condition: {
                maxWidth: 750
            },
            chart: {
                title: {
					style: {
						fontSize: '35px'
					}
				}
            }
        }]
    },
    series: [
  {name: "", data: [[80, 50]]},
  {name: "", data: [[6.5, 88.46]]},
  {name: "", data: [[24, 50]]},
  {name: "", data: [[40, 20]]},
  {name: "", data: [[25, 50]]},
  {name: "", data: [[22.5, 16.67]]},
  {name: "", data: [[72.5, 4.83]]},
  {name: "", data: [[80, 4.38]]},
  {name: "", data: [[80, 4.38]]},
  {name: "", data: [[24, 62.5]]},
  {name: "", data: [[50, 32.1]]},
  {name: "", data: [[31, 34.52]]},
  {name: "", data: [[71.5, 20.98]]},
  {name: "", data: [[48, 33.44]]},
  {name: "", data: [[2, 107]]},
  {name: "", data: [[28, 57.14]]},
  {name: "", data: [[40, 37.5]]},
  {name: "", data: [[40.5, 9.88]]},
  {name: "", data: [[14, 22.29]]},
  {name: "", data: [[40, 10.68]]},
  {name: "", data: [[10, 17]]},
  {name: "", data: [[56, 13.89]]},
  {name: "", data: [[18, 25]]},
  {name: "", data: [[20, 10]]},
  {name: "", data: [[40, 5.5]]},
  {name: "", data: [[7, 71.43]]},
  {name: "", data: [[7, 28.57]]},
  {name: "", data: [[4, 32.5]]},
  {name: "", data: [[30.5, 4.92]]},
  {name: "", data: [[2.5, 40]]},
  {name: "", data: [[5, 18.8]]},
  {name: "", data: [[2.5, 8.8]]},
  {name: "", data: [[3, 19.67]]},
  {name: "", data: [[31, 38.71]]},
  {name: "", data: [[16, 31.25]]},
  {name: "", data: [[5, 60]]},
  {name: "", data: [[2, 40]]},
  {name: "", data: [[5.5, 9.45]]},
  {name: "", data: [[4.5, 7.11]]},
  {name: "", data: [[4.5, 44.44]]},
  {name: "", data: [[5, 30]]},
  {name: "", data: [[12, 37.5]]},
  {name: "", data: [[12, 14]]},
  {name: "", data: [[34, 29.41]]},
  {name: "", data: [[40, 30]]},
  {name: "", data: [[40, 23.75]]},
  {name: "", data: [[7.5, 26.67]]},
  {name: "", data: [[10, 150]]},
  {name: "", data: [[16, 23.75]]},
  {name: "", data: [[20, 30]]},
  {name: "", data: [[12, 10.67]]},
  {name: "", data: [[6, 13.33]]},
  {name: "", data: [[5, 16]]},
  {name: "", data: [[10, 60]]},
  {name: "", data: [[24, 12.5]]},
  {name: "", data: [[41, 4.27]]},
  {name: "", data: [[16.5, 48.48]]},
  {name: "", data: [[40, 16.05]]},
  {name: "", data: [[40, 17.85]]},
  {name: "", data: [[8, 19.25]]},
  {name: "", data: [[8, 18.75]]},
  {name: "", data: [[1, 20]]},
  {name: "", data: [[4.5, 40]]},
  {name: "", data: [[40, 10]]},
  {name: "", data: [[30, 5]]},
  {name: "", data: [[30, 10.7]]},
  {name: "", data: [[25.5, 3.92]]},
  {name: "", data: [[41.5, 3.61]]},
  {name: "", data: [[8, 31.25]]},
  {name: "", data: [[30, 8.33]]},
  {name: "", data: [[10, 35]]},
  {name: "", data: [[10, 40]]},
  {name: "", data: [[6.5, 38.46]]},
  {name: "", data: [[8.5, 21.18]]},
  {name: "", data: [[35, 8.57]]},
  {name: "", data: [[8, 18.75]]},
  {name: "", data: [[24.5, 12.24]]},
  {name: "", data: [[13, 19.23]]},
  {name: "", data: [[6, 50]]},
  {name: "", data: [[4.5, 33.33]]},
  {name: "", data: [[3, 50]]},
  {name: "", data: [[11.5, 13.04]]},
  {name: "", data: [[10, 20]]},
  {name: "", data: [[7, 28.57]]},
  {name: "", data: [[10, 50]]},
  {name: "", data: [[22, 4.55]]},
  {name: "", data: [[2, 25]]},
  {name: "", data: [[5, 9]]},
  {name: "", data: [[6, 8.33]]},
  {name: "", data: [[18, 23.78]]},
  {name: "", data: [[28, 11.57]]},
  {name: "", data: [[4.5, 22.89]]},
  {name: "", data: [[3, 33.33]]},
  {name: "", data: [[10, 40]]},
  {name: "", data: [[5, 7]]},
  {name: "", data: [[4.5, 24.44]]},
  {name: "", data: [[8, 12.5]]},
  {name: "", data: [[3.5, 12.86]]},
  {name: "", data: [[85, 10.35]]},
  {name: "", data: [[9.5, 33.26]]},
  {name: "", data: [[5, 62.2]]},
  {name: "", data: [[100, 21.9]]},
  {name: "", data: [[79, 15.19]]},
  {name: "", data: [[17.5, 25.71]]},
  {name: "", data: [[90, 14.22]]},
  {name: "", data: [[20, 15]]},
  {name: "", data: [[80, 21.29]]},
  {name: "", data: [[7, 41]]},
  {name: "", data: [[7, 32.86]]},
  {name: "", data: [[50, 3.38]]},
  {name: "", data: [[8, 0.25]]},
  {name: "", data: [[6, 33.33]]},
  {name: "", data: [[20, 10.55]]},
  {name: "", data: [[18.5, 24.32]]},
  {name: "", data: [[24, 37.88]]},
  {name: "", data: [[25, 40]]},
  {name: "", data: [[8.5, 29.41]]},
  {name: "", data: [[5, 44]]},
  {name: "", data: [[1, 52]]},
  {name: "", data: [[16, 53.5]]},
  {name: "", data: [[6.5, 46.15]]},
  {name: "", data: [[60, 20]]},
  {name: "", data: [[6, 8.33]]},
  {name: "", data: [[11, 48.64]]},
  {name: "", data: [[16, 27.19]]},
  {name: "", data: [[10, 50]]},
  {name: "", data: [[14, 21.43]]},
  {name: "", data: [[67, 8.96]]},
  {name: "", data: [[12.5, 60]]},
  {name: "", data: [[25, 30]]},
  {name: "", data: [[30, 21.67]]},
  {name: "", data: [[9, 55.56]]},
  {name: "", data: [[16.5, 36.24]]},
  {name: "", data: [[12, 18.33]]},
  {name: "", data: [[4, 47.5]]},
  {name: "", data: [[3, 35]]},
  {name: "", data: [[8, 14.63]]},
  {name: "", data: [[3, 33.33]]},
  {name: "", data: [[35.5, 14.08]]},
  {name: "", data: [[16, 13.75]]},
  {name: "", data: [[20, 20]]},
  {name: "", data: [[3.5, 21.43]]},
  {name: "", data: [[12, 0.42]]},
  {name: "", data: [[5, 20]]},
  {name: "", data: [[6, 16.67]]},
  {name: "", data: [[14, 10.71]]},
  {name: "", data: [[75.5, 5.3]]},
  {name: "", data: [[13.5, 13.33]]},
  {name: "", data: [[20, 20]]},
  {name: "", data: [[10.5, 14.29]]},
  {name: "", data: [[15, 10]]},
  {name: "", data: [[10, 20]]},
  {name: "", data: [[15, 10]]},
  {name: "", data: [[12, 16.67]]},
  {name: "", data: [[6.5, 24.62]]},
  {name: "", data: [[23.5, 5.96]]},
  {name: "", data: [[35, 3.51]]},
  {name: "", data: [[20, 6]]},
  {name: "", data: [[25, 16]]},
  {name: "", data: [[4, 36.5]]},
  {name: "", data: [[9, 10.56]]},
  {name: "", data: [[1.5, 33.33]]},
  {name: "", data: [[7, 21.43]]},
  {name: "", data: [[30, 6]]},
  {name: "", data: [[4, 15]]},
  {name: "", data: [[8.5, 7.06]]},
  {name: "", data: [[10.5, 14.29]]},
  {name: "", data: [[22, 10]]},
  {name: "", data: [[6, 41.67]]},
  {name: "", data: [[32, 3.44]]},
  {name: "", data: [[12, 10]]},
  {name: "", data: [[3.5, 28.57]]},
  {name: "", data: [[48, 18.75]]},
  {name: "", data: [[1, 150]]},
  {name: "", data: [[3.5, 17.14]]},
  {name: "", data: [[2.5, 2]]},
  {name: "", data: [[28, 46.61]]},
  {name: "", data: [[16, 34.06]]},
  {name: "", data: [[70, 25.71]]},
  {name: "", data: [[30.5, 50.16]]},
  {name: "", data: [[52, 30.77]]},
  {name: "", data: [[47, 53.19]]},
  {name: "", data: [[8, 50]]},
  {name: "", data: [[4, 37.5]]},
  {name: "", data: [[13, 38.46]]},
  {name: "", data: [[3, 22]]},
  {name: "", data: [[4, 16.25]]},
  {name: "", data: [[43.5, 36.78]]},
  {name: "", data: [[100, 60]]},
  {name: "", data: [[24, 33.33]]},
  {name: "", data: [[21, 53.48]]},
  {name: "", data: [[10, 45]]},
  {name: "", data: [[3, 31]]},
  {name: "", data: [[16, 54.94]]},
  {name: "", data: [[16, 54.88]]},
  {name: "", data: [[72.5, 5.52]]},
  {name: "", data: [[9, 4.11]]},
  {name: "", data: [[5, 24]]},
  {name: "", data: [[20, 10]]},
  {name: "", data: [[4, 5]]},
  {name: "", data: [[12, 33.33]]},
  {name: "", data: [[14, 19.86]]},
  {name: "", data: [[20, 13.35]]},
  {name: "", data: [[18, 11.89]]},
  {name: "", data: [[40, 10.3]]},
  {name: "", data: [[11, 29.18]]},
  {name: "", data: [[100, 2.8]]},
  {name: "", data: [[4, 60]]},
  {name: "", data: [[8, 8.75]]},
  {name: "", data: [[8, 5]]},
  {name: "", data: [[5, 7.2]]},
  {name: "", data: [[8, 27.5]]},
  {name: "", data: [[4, 37.5]]},
  {name: "", data: [[24, 6.25]]},
  {name: "", data: [[12, 20.83]]},
  {name: "", data: [[6, 33.33]]},
  {name: "", data: [[8, 18.75]]},
  {name: "", data: [[16, 9.38]]},
  {name: "", data: [[4, 37.5]]},
  {name: "", data: [[7, 21.43]]},
  {name: "", data: [[15, 10]]},
  {name: "", data: [[10, 15]]},
  {name: "", data: [[4, 37.5]]},
  {name: "", data: [[11, 13.64]]},
  {name: "", data: [[80, 11.25]]},
  {name: "", data: [[70, 15.71]]},
  {name: "", data: [[8, 50]]},
  {name: "", data: [[5, 20]]},
  {name: "", data: [[53.5, 18.69]]},
  {name: "", data: [[16, 62.5]]},
  {name: "", data: [[15, 53.33]]},
  {name: "", data: [[72, 5.56]]},
  {name: "", data: [[16.5, 21.21]]},
  {name: "", data: [[17, 13.41]]},
  {name: "", data: [[12, 26.75]]},
  {name: "", data: [[16, 7.5]]},
  {name: "", data: [[60, 25]]},
  {name: "", data: [[40, 32.5]]},
  {name: "", data: [[90, 15.46]]},
  {name: "", data: [[15.5, 35.87]]},
  {name: "", data: [[7.5, 34.67]]},
  {name: "", data: [[1, 51]]},
  {name: "", data: [[8, 8.5]]},
  {name: "", data: [[14, 10.71]]},
  {name: "", data: [[12, 5.83]]},
  {name: "", data: [[30, 2]]},
  {name: "", data: [[42, 11.9]]},
  {name: "", data: [[8.5, 35.29]]},
  {name: "", data: [[15.5, 19.35]]},
  {name: "", data: [[16, 46.25]]},
  {name: "", data: [[20, 15]]},
  {name: "", data: [[32, 10.31]]},
  {name: "", data: [[10, 75]]},
  {name: "", data: [[100, 29]]},
  {name: "", data: [[16, 11.19]]},
  {name: "", data: [[5, 20]]},
  {name: "", data: [[85, 37.76]]},
  {name: "", data: [[80.5, 49.69]]},
  {name: "", data: [[100, 2.81]]},
  {name: "", data: [[100, 35]]},
  {name: "", data: [[100, 30]]},
  {name: "", data: [[100, 35]]},
  {name: "", data: [[60, 53.5]]},
  {name: "", data: [[45, 66.67]]},
  {name: "", data: [[12.5, 38.4]]},
  {name: "", data: [[31, 6.45]]},
  {name: "", data: [[50, 20]]},
  {name: "", data: [[20, 13]]},
  {name: "", data: [[44.5, 44.94]]},
  {name: "", data: [[26.5, 37.74]]},
  {name: "", data: [[20, 16.5]]},
  {name: "", data: [[72, 11.94]]},
  {name: "", data: [[14.5, 34.48]]},
  {name: "", data: [[21, 11.19]]},
  {name: "", data: [[20, 11.75]]},
  {name: "", data: [[30, 25]]},
  {name: "", data: [[10, 75]]},
  {name: "", data: [[32, 31.25]]},
  {name: "", data: [[50, 16]]},
  {name: "", data: [[20, 40]]},
  {name: "", data: [[6, 13.33]]},
  {name: "", data: [[15, 53.33]]},
  {name: "", data: [[2.5, 58]]},
  {name: "", data: [[40, 35]]},
  {name: "", data: [[15, 26.67]]},
  {name: "", data: [[20, 55]]},
  {name: "", data: [[24, 66.67]]},
  {name: "", data: [[40, 40]]},
  {name: "", data: [[10, 50]]},
  {name: "", data: [[93, 13.98]]},
  {name: "", data: [[20, 75]]},
  {name: "", data: [[40, 27.5]]},
  {name: "", data: [[54, 24.07]]},
  {name: "", data: [[70.5, 24.28]]},
  {name: "", data: [[14.5, 51.72]]},
  {name: "", data: [[9.5, 15.79]]},
  {name: "", data: [[8, 30.88]]},
  {name: "", data: [[8.5, 35.29]]},
  {name: "", data: [[13.5, 18.52]]},
  {name: "", data: [[2, 85]]},
  {name: "", data: [[3.5, 71.43]]},
  {name: "", data: [[5.5, 63.64]]},
  {name: "", data: [[15, 20]]},
  {name: "", data: [[5, 30]]},
  {name: "", data: [[20, 90]]},
  {name: "", data: [[4.5, 17.78]]},
  {name: "", data: [[1.5, 10]]},
  {name: "", data: [[21, 9.52]]},
  {name: "", data: [[7, 11.43]]},
  {name: "", data: [[3, 50]]},
  {name: "", data: [[16, 50]]},
  {name: "", data: [[25, 32]]},
  {name: "", data: [[8, 50]]},
  {name: "", data: [[12, 37.5]]},
  {name: "", data: [[59.5, 4.32]]},
  {name: "", data: [[24.5, 10.9]]},
  {name: "", data: [[6, 41.67]]},
  {name: "", data: [[56, 15.18]]},
  {name: "", data: [[22.5, 7.2]]},
  {name: "", data: [[4, 20]]},
  {name: "", data: [[4, 25]]},
  {name: "", data: [[6.5, 7.69]]},
  {name: "", data: [[15, 11.33]]},
  {name: "", data: [[18.5, 10]]},
  {name: "", data: [[50, 7]]},
  {name: "", data: [[32, 12.5]]},
  {name: "", data: [[12.5, 17.6]]},
  {name: "", data: [[6.5, 18.46]]},
  {name: "", data: [[8.5, 18.82]]},
  {name: "", data: [[20, 16.05]]},
  {name: "", data: [[16, 18.75]]},
  {name: "", data: [[9.5, 5.79]]},
  {name: "", data: [[8, 18.75]]},
  {name: "", data: [[10, 30]]},
  {name: "", data: [[15, 20]]},
  {name: "", data: [[24, 12.5]]},
  {name: "", data: [[8, 31.25]]},
  {name: "", data: [[8, 31.25]]},
  {name: "", data: [[48, 8.33]]},
  {name: "", data: [[40, 5.35]]},
  {name: "", data: [[16, 15.63]]},
  {name: "", data: [[16, 13.75]]},
  {name: "", data: [[16, 12.5]]},
  {name: "", data: [[4, 80]]},
  {name: "", data: [[29.5, 6.78]]},
  {name: "", data: [[24, 25]]},
  {name: "", data: [[24, 14.58]]},
  {name: "", data: [[18, 13.89]]},
  {name: "", data: [[10, 30]]},
  {name: "", data: [[9, 24.44]]},
  {name: "", data: [[10.5, 14.29]]},
  {name: "", data: [[15, 16.67]]},
  {name: "", data: [[8, 29.75]]},
  {name: "", data: [[8, 37.5]]},
  {name: "", data: [[6.5, 51.23]]},
  {name: "", data: [[4, 37.5]]},
  {name: "", data: [[4.5, 35.56]]},
  {name: "", data: [[35, 0.09]]},
  {name: "", data: [[15, 16.67]]},
  {name: "", data: [[5, 30]]},
  {name: "", data: [[4.5, 6.67]]},
  {name: "", data: [[10.5, 2.86]]},
  {name: "", data: [[22.5, 9.2]]},
  {name: "", data: [[12, 83.33]]},
  {name: "", data: [[32, 11.72]]},
  {name: "", data: [[8, 43.75]]},
  {name: "", data: [[24, 20.83]]},
  {name: "", data: [[36, 41.67]]},
  {name: "", data: [[40, 22.5]]},
  {name: "", data: [[7, 37.86]]},
  {name: "", data: [[4, 87.5]]},
  {name: "", data: [[19, 19.74]]},
  {name: "", data: [[4, 25]]},
  {name: "", data: [[7, 71.43]]},
  {name: "", data: [[6, 41.67]]},
  {name: "", data: [[2.5, 12]]},
  {name: "", data: [[4, 43.75]]},
  {name: "", data: [[40, 25]]},
  {name: "", data: [[8, 37.5]]},
  {name: "", data: [[5, 60]]},
  {name: "", data: [[75, 4.67]]},
  {name: "", data: [[10, 29]]},
  {name: "", data: [[12.5, 1.2]]},
  {name: "", data: [[31, 16.13]]},
  {name: "", data: [[20.5, 12.2]]},
  {name: "", data: [[4, 25]]},
  {name: "", data: [[17.5, 14.29]]},
  {name: "", data: [[63, 4.78]]},
  {name: "", data: [[19.5, 15.38]]},
  {name: "", data: [[16, 28.13]]},
  {name: "", data: [[10.5, 19.43]]},
  {name: "", data: [[8.5, 35.29]]},
  {name: "", data: [[6, 15]]},
  {name: "", data: [[41.5, 14.46]]},
  {name: "", data: [[76.5, 4.33]]},
  {name: "", data: [[11.5, 6.96]]},
  {name: "", data: [[9, 14.78]]},
  {name: "", data: [[10.5, 5.71]]},
  {name: "", data: [[100, 3.5]]},
  {name: "", data: [[7, 28.57]]},
  {name: "", data: [[51, 5.47]]},
  {name: "", data: [[12, 20.83]]},
  {name: "", data: [[40, 14]]},
  {name: "", data: [[30, 17.83]]},
  {name: "", data: [[8, 24.13]]},
  {name: "", data: [[100, 30]]},
  {name: "", data: [[32, 15.63]]},
  {name: "", data: [[8, 33.75]]},
  {name: "", data: [[50, 35]]},
  {name: "", data: [[6, 83.33]]},
  {name: "", data: [[100, 21]]},
  {name: "", data: [[100, 17]]},
  {name: "", data: [[3.5, 51.43]]},
  {name: "", data: [[24, 14.58]]},
  {name: "", data: [[10, 20]]},
  {name: "", data: [[14.5, 10.34]]},
  {name: "", data: [[9, 16.67]]},
  {name: "", data: [[20.5, 14.63]]},
  {name: "", data: [[32, 40]]},
  {name: "", data: [[12, 66.67]]},
  {name: "", data: [[14.5, 15.52]]},
  {name: "", data: [[12, 6.67]]},
  {name: "", data: [[45, 15.56]]},
  {name: "", data: [[21.5, 14.93]]},
  {name: "", data: [[12, 25]]},
  {name: "", data: [[72, 4.86]]},
  {name: "", data: [[26, 23.77]]},
  {name: "", data: [[2, 150]]},
  {name: "", data: [[8, 37.5]]},
  {name: "", data: [[8.5, 11.76]]},
  {name: "", data: [[4.5, 22.22]]},
  {name: "", data: [[32, 25]]},
  {name: "", data: [[4.5, 188.89]]},
  {name: "", data: [[10, 25]]},
  {name: "", data: [[1, 40]]},
  {name: "", data: [[3, 33.33]]},
  {name: "", data: [[16, 41.25]]},
  {name: "", data: [[20.5, 42.93]]},
  {name: "", data: [[100, 35]]},
  {name: "", data: [[8, 50]]},
  {name: "", data: [[2, 82.5]]},
  {name: "", data: [[32, 37.5]]},
  {name: "", data: [[30, 53.33]]},
  {name: "", data: [[80, 37.5]]},
  {name: "", data: [[30, 44.57]]},
  {name: "", data: [[48, 20.83]]},
  {name: "", data: [[3, 20]]},
  {name: "", data: [[38, 26.32]]},
  {name: "", data: [[24, 33.33]]},
  {name: "", data: [[100, 17]]},
  {name: "", data: [[10, 22]]},
  {name: "", data: [[12, 10]]},
  {name: "", data: [[60, 0.42]]},
  {name: "", data: [[3.5, 17.71]]},
  {name: "", data: [[4, 15]]},
  {name: "", data: [[4, 15]]},
  {name: "", data: [[7, 17.14]]},
  {name: "", data: [[8, 7.75]]},
  {name: "", data: [[20, 5.95]]},
  {name: "", data: [[8, 9.5]]},
  {name: "", data: [[6.5, 4.15]]},
  {name: "", data: [[6.5, 5.08]]},
  {name: "", data: [[6, 5.67]]},
  {name: "", data: [[12.5, 8.4]]},
  {name: "", data: [[4.5, 22.22]]},
  {name: "", data: [[6.5, 14.62]]},
  {name: "", data: [[16, 7]]},
  {name: "", data: [[14, 9]]},
  {name: "", data: [[7, 31.43]]},
  {name: "", data: [[18, 13.89]]},
  {name: "", data: [[6.5, 7.69]]},
  {name: "", data: [[38, 7.63]]},
  {name: "", data: [[89, 4.49]]},
  {name: "", data: [[10, 50]]},
  {name: "", data: [[18, 22.22]]},
  {name: "", data: [[25, 16]]},
  {name: "", data: [[20.5, 26.1]]},
  {name: "", data: [[16.5, 24.24]]},
  {name: "", data: [[11, 13.64]]},
  {name: "", data: [[3, 33.33]]},
  {name: "", data: [[18.5, 8.65]]},
  {name: "", data: [[27.5, 29.09]]},
  {name: "", data: [[21.5, 27.91]]},
  {name: "", data: [[32, 21.88]]},
  {name: "", data: [[16.5, 60.61]]},
  {name: "", data: [[4.5, 27.78]]},
  {name: "", data: [[5, 17]]},
  {name: "", data: [[5, 44]]},
  {name: "", data: [[4, 20]]},
  {name: "", data: [[18, 30.56]]},
  {name: "", data: [[6.5, 0.77]]},
  {name: "", data: [[12, 22.33]]},
  {name: "", data: [[5, 30]]},
  {name: "", data: [[8, 62.5]]},
  {name: "", data: [[3, 26.67]]},
  {name: "", data: [[10, 10]]},
  {name: "", data: [[9.5, 10.53]]},
  {name: "", data: [[8, 18.75]]},
  {name: "", data: [[3, 13.33]]},
  {name: "", data: [[1.5, 28.67]]},
  {name: "", data: [[2.5, 16.8]]},
  {name: "", data: [[2.5, 20.4]]},
  {name: "", data: [[4, 7.5]]},
  {name: "", data: [[11, 7.27]]},
  {name: "", data: [[1, 40]]},
  {name: "", data: [[12, 41.67]]},
  {name: "", data: [[1, 65]]},
  {name: "", data: [[3, 8.33]]},
  {name: "", data: [[4, 100]]},
  {name: "", data: [[12, 24.08]]},
  {name: "", data: [[3.5, 85.71]]},
  {name: "", data: [[47, 29.79]]},
  {name: "", data: [[4.5, 71.11]]},
  {name: "", data: [[16, 37.5]]},
  {name: "", data: [[17.5, 45.71]]},
  {name: "", data: [[7, 14.29]]},
  {name: "", data: [[40, 7.5]]},
  {name: "", data: [[4.5, 40]]},
  {name: "", data: [[15, 30]]},
  {name: "", data: [[4, 12.5]]},
  {name: "", data: [[18, 16.67]]},
  {name: "", data: [[8, 62.5]]},
  {name: "", data: [[7, 21.43]]},
  {name: "", data: [[36, 22.22]]},
  {name: "", data: [[12, 33.33]]},
  {name: "", data: [[7, 31.43]]},
  {name: "", data: [[5, 46]]},
  {name: "", data: [[16.5, 27.27]]},
  {name: "", data: [[4.5, 35.56]]},
  {name: "", data: [[3.5, 71.43]]},
  {name: "", data: [[8, 33.75]]},
  {name: "", data: [[16, 11.25]]},
  {name: "", data: [[8, 31.25]]},
  {name: "", data: [[12, 25]]},
  {name: "", data: [[12, 16.67]]},
  {name: "", data: [[6, 36.67]]},
  {name: "", data: [[3.5, 17.14]]},
  {name: "", data: [[2.5, 14]]},
  {name: "", data: [[20.5, 34.15]]},
  {name: "", data: [[24, 27.08]]},
  {name: "", data: [[5, 130]]},
  {name: "", data: [[1.5, 66.67]]},
  {name: "", data: [[4, 25]]},
  {name: "", data: [[1.5, 19.33]]},
  {name: "", data: [[12, 30.33]]},
  {name: "", data: [[45.5, 13.08]]},
  {name: "", data: [[31, 22.58]]},
  {name: "", data: [[18, 55.56]]},
  {name: "", data: [[40, 25]]},
  {name: "", data: [[35, 27.14]]},
  {name: "", data: [[2.5, 20]]},
  {name: "", data: [[5, 40]]},
  {name: "", data: [[5, 40]]},
  {name: "", data: [[40, 10]]},
  {name: "", data: [[20, 15]]},
  {name: "", data: [[5, 30]]},
  {name: "", data: [[7.5, 8]]},
  {name: "", data: [[10, 10.7]]},
  {name: "", data: [[22, 3.64]]},
  {name: "", data: [[12.5, 16.64]]},
  {name: "", data: [[16.5, 21.21]]},
  {name: "", data: [[3.5, 12.86]]},
  {name: "", data: [[4.5, 10]]},
  {name: "", data: [[24, 2.5]]},
  {name: "", data: [[12, 33.33]]},
  {name: "", data: [[100, 12]]},
  {name: "", data: [[8, 31.25]]},
  {name: "", data: [[40, 50]]},
  {name: "", data: [[3, 83.33]]},
  {name: "", data: [[3, 83.33]]},
  {name: "", data: [[4, 50]]},
  {name: "", data: [[2, 13]]},
  {name: "", data: [[4.5, 5.78]]},
  {name: "", data: [[8, 16.25]]},
  {name: "", data: [[100, 24.5]]},
  {name: "", data: [[6, 26.67]]},
  {name: "", data: [[8, 22.5]]},
  {name: "", data: [[5, 44]]},
  {name: "", data: [[14.5, 17.72]]},
  {name: "", data: [[32, 31.88]]},
  {name: "", data: [[8.5, 14.12]]},
  {name: "", data: [[1, 30]]},
  {name: "", data: [[6, 33.33]]},
  {name: "", data: [[20, 50]]},
  {name: "", data: [[24, 37.5]]},
  {name: "", data: [[80, 25]]},
  {name: "", data: [[9, 48.89]]},
  {name: "", data: [[8, 50]]},
  {name: "", data: [[75, 12.27]]},
  {name: "", data: [[38.5, 59.74]]},
  {name: "", data: [[7, 47.14]]},
  {name: "", data: [[100, 8.76]]},
  {name: "", data: [[10, 53.5]]},
  {name: "", data: [[8, 59.38]]},
  {name: "", data: [[4, 10]]},
  {name: "", data: [[24, 33.33]]},
  {name: "", data: [[2.5, 100]]},
  {name: "", data: [[16, 43.75]]},
  {name: "", data: [[2.5, 48]]},
  {name: "", data: [[100, 36]]},
  {name: "", data: [[8.5, 12.94]]},
  {name: "", data: [[8.5, 11.76]]},
  {name: "", data: [[2, 45]]},
  {name: "", data: [[40.5, 8.64]]},
  {name: "", data: [[98.5, 35.53]]},
  {name: "", data: [[100, 37]]},
  {name: "", data: [[20, 50]]},
  {name: "", data: [[20, 25]]},
  {name: "", data: [[44.5, 13.37]]},
  {name: "", data: [[25.5, 23.33]]},
  {name: "", data: [[50, 10]]},
  {name: "", data: [[41.5, 9.64]]},
  {name: "", data: [[4, 10]]},
  {name: "", data: [[6, 16.67]]},
  {name: "", data: [[8.5, 7.06]]},
  {name: "", data: [[25, 25.68]]},
  {name: "", data: [[8, 6.25]]},
  {name: "", data: [[100, 35]]},
  {name: "", data: [[20, 35]]},
  {name: "", data: [[20, 30]]},
  {name: "", data: [[14, 28.57]]},
  {name: "", data: [[32, 28.13]]},
  {name: "", data: [[35, 28.57]]},
  {name: "", data: [[24, 7.5]]},
  {name: "", data: [[15, 10]]},
  {name: "", data: [[17, 8.82]]},
  {name: "", data: [[5.5, 45.45]]},
  {name: "", data: [[8.5, 27.06]]},
  {name: "", data: [[2.5, 55.6]]},
  {name: "", data: [[40, 30]]},
  {name: "", data: [[3.5, 71.43]]},
  {name: "", data: [[9, 8.89]]},
  {name: "", data: [[7.5, 66.67]]},
  {name: "", data: [[4.5, 44.44]]},
  {name: "", data: [[3.5, 42.86]]},
  {name: "", data: [[6.5, 23.08]]},
  {name: "", data: [[8, 43.75]]},
  {name: "", data: [[48, 46.88]]},
  {name: "", data: [[75, 24]]},
  {name: "", data: [[60.5, 49.59]]},
  {name: "", data: [[40.5, 61.73]]},
  {name: "", data: [[8.5, 29.41]]},
  {name: "", data: [[7.5, 24]]},
  {name: "", data: [[8, 31.25]]},
  {name: "", data: [[5, 45.2]]},
  {name: "", data: [[67, 14.93]]},
  {name: "", data: [[14.5, 5.52]]},
  {name: "", data: [[3, 14.33]]},
  {name: "", data: [[27.5, 10.91]]},
  {name: "", data: [[20, 20]]},
  {name: "", data: [[12, 16.67]]},
  {name: "", data: [[10.5, 6.67]]},
  {name: "", data: [[8, 16.25]]},
  {name: "", data: [[20, 11.5]]},
  {name: "", data: [[15, 6.67]]},
  {name: "", data: [[13, 11.54]]},
  {name: "", data: [[3, 16.67]]},
  {name: "", data: [[4, 20]]},
  {name: "", data: [[2.5, 20]]},
  {name: "", data: [[1.5, 20]]},
  {name: "", data: [[5, 10]]},
  {name: "", data: [[8, 25]]},
  {name: "", data: [[1, 20]]},
  {name: "", data: [[0.5, 24]]},
  {name: "", data: [[4.5, 16.67]]},
  {name: "", data: [[5, 16]]},
  {name: "", data: [[1, 25]]},
  {name: "", data: [[1.5, 20]]},
  {name: "", data: [[1, 15]]},
  {name: "", data: [[10.5, 19.05]]},
  {name: "", data: [[30, 60]]},
  {name: "", data: [[20.5, 29.27]]},
  {name: "", data: [[8, 10.63]]},
  {name: "", data: [[6, 33.33]]},
  {name: "", data: [[4, 37.5]]},
  {name: "", data: [[10, 15]]},
  {name: "", data: [[3, 16.67]]},
  {name: "", data: [[9, 16.67]]},
  {name: "", data: [[12, 19.5]]},
  {name: "", data: [[20, 12.65]]},
  {name: "", data: [[4, 58.5]]},
  {name: "", data: [[4.5, 11.11]]},
  {name: "", data: [[48.5, 34.39]]},
  {name: "", data: [[10, 19.7]]},
  {name: "", data: [[8, 16.25]]},
  {name: "", data: [[24, 15.08]]},
  {name: "", data: [[1, 100]]},
  {name: "", data: [[8, 43.75]]},
  {name: "", data: [[12, 41.67]]},
  {name: "", data: [[2, 50]]},
  {name: "", data: [[8.5, 21.18]]},
  {name: "", data: [[16.5, 7.27]]},
  {name: "", data: [[4.5, 7.78]]},
  {name: "", data: [[3, 7]]},
  {name: "", data: [[9.5, 36.84]]},
  {name: "", data: [[32, 4.69]]},
  {name: "", data: [[3.5, 85.71]]},
  {name: "", data: [[8, 50]]},
  {name: "", data: [[14, 35.71]]},
  {name: "", data: [[24, 58.33]]},
  {name: "", data: [[21, 19.05]]},
  {name: "", data: [[2, 30]]},
  {name: "", data: [[3, 33.33]]},
  {name: "", data: [[2, 40]]},
  {name: "", data: [[5, 90]]},
  {name: "", data: [[2, 75]]},
  {name: "", data: [[8, 6.5]]},
  {name: "", data: [[100, 35]]},
  {name: "", data: [[7, 71.43]]},
  {name: "", data: [[6, 75]]},
  {name: "", data: [[7.5, 18.67]]},
  {name: "", data: [[5, 18]]},
  {name: "", data: [[48, 72.92]]},
  {name: "", data: [[20, 30]]},
  {name: "", data: [[6, 22.33]]},
  {name: "", data: [[6, 25]]},
  {name: "", data: [[1, 26]]},
  {name: "", data: [[8, 58.38]]},
  {name: "", data: [[8, 27.13]]},
  {name: "", data: [[12, 22.5]]},
  {name: "", data: [[14, 61.14]]},
  {name: "", data: [[18, 47.56]]},
  {name: "", data: [[6, 66.67]]},
  {name: "", data: [[5, 25.4]]},
  {name: "", data: [[2, 17.5]]},
  {name: "", data: [[7, 18.57]]},
  {name: "", data: [[5, 26]]},
  {name: "", data: [[13.5, 4.44]]},
  {name: "", data: [[16, 8.69]]},
  {name: "", data: [[2, 75]]},
  {name: "", data: [[7, 67.14]]},
  {name: "", data: [[10, 22]]},
  {name: "", data: [[6, 33.33]]},
  {name: "", data: [[3.5, 7.14]]},
  {name: "", data: [[11, 45.45]]},
  {name: "", data: [[48, 36.25]]},
  {name: "", data: [[0.5, 12]]},
  {name: "", data: [[24, 62.5]]},
  {name: "", data: [[4, 5]]},
  {name: "", data: [[13, 56.92]]},
  {name: "", data: [[12, 4.5]]},
  {name: "", data: [[12.5, 3.92]]},
  {name: "", data: [[15, 6.47]]},
  {name: "", data: [[13, 26.92]]},
  {name: "", data: [[5, 30]]},
  {name: "", data: [[10, 17]]},
  {name: "", data: [[10, 6]]},
  {name: "", data: [[5, 48]]},
  {name: "", data: [[2, 14]]},
  {name: "", data: [[40, 11.25]]},
  {name: "", data: [[10, 35]]},
  {name: "", data: [[8, 31.25]]},
  {name: "", data: [[12, 58.33]]},
  {name: "", data: [[24, 37.5]]},
  {name: "", data: [[2, 36]]},
  {name: "", data: [[2.5, 52]]},
  {name: "", data: [[25, 12]]},
  {name: "", data: [[18, 13.89]]},
  {name: "", data: [[17.5, 20]]},
  {name: "", data: [[8, 37.5]]},
  {name: "", data: [[4.5, 42.67]]},
  {name: "", data: [[15, 18.67]]},
  {name: "", data: [[13, 23.08]]},
  {name: "", data: [[32, 37.5]]},
  {name: "", data: [[28, 17.89]]},
  {name: "", data: [[50, 40]]},
  {name: "", data: [[8, 37.5]]},
  {name: "", data: [[8, 37.5]]},
  {name: "", data: [[7, 71.43]]},
  {name: "", data: [[7.5, 28.27]]},
  {name: "", data: [[23.5, 106.38]]},
  {name: "", data: [[8.5, 41.18]]},
  {name: "", data: [[32, 59.38]]},
  {name: "", data: [[56, 47.77]]},
  {name: "", data: [[8, 37.5]]},
  {name: "", data: [[8, 25]]},
  {name: "", data: [[8, 37.5]]},
  {name: "", data: [[8, 45.88]]},
  {name: "", data: [[35, 57.14]]},
  {name: "", data: [[10, 72.4]]},
  {name: "", data: [[42, 35.71]]},
  {name: "", data: [[90, 22.22]]},
  {name: "", data: [[40, 55]]},
  {name: "", data: [[48, 52.08]]},
  {name: "", data: [[24, 35.42]]},
  {name: "", data: [[32, 15.63]]},
  {name: "", data: [[56.5, 24.78]]},
  {name: "", data: [[55.5, 23.42]]},
  {name: "", data: [[100, 25]]},
  {name: "", data: [[28, 14.29]]},
  {name: "", data: [[80, 12.5]]},
  {name: "", data: [[8, 50]]},
  {name: "", data: [[30, 16.67]]},
  {name: "", data: [[24, 12.5]]},
  {name: "", data: [[80, 8.75]]},
  {name: "", data: [[22, 27.27]]},
  {name: "", data: [[100, 5]]},
  {name: "", data: [[20, 22.5]]},
  {name: "", data: [[7, 42.86]]},
  {name: "", data: [[72, 12.5]]},
  {name: "", data: [[30.5, 49.18]]},
  {name: "", data: [[28.5, 52.63]]},
  {name: "", data: [[22.5, 22.22]]},
  {name: "", data: [[37, 35.14]]},
  {name: "", data: [[100, 7]]},
  {name: "", data: [[60, 9]]},
  {name: "", data: [[40, 20]]},
  {name: "", data: [[75, 13.33]]},
  {name: "", data: [[58, 13.79]]},
  {name: "", data: [[10, 45]]},
  {name: "", data: [[9, 27.78]]},
  {name: "", data: [[20, 20]]},
  {name: "", data: [[3, 50]]},
  {name: "", data: [[7, 17.14]]},
  {name: "", data: [[12.5, 24]]},
  {name: "", data: [[24.5, 20.41]]},
  {name: "", data: [[14, 35.71]]},
  {name: "", data: [[7.5, 46.67]]},
  {name: "", data: [[48, 9.38]]},
  {name: "", data: [[19, 26.32]]},
  {name: "", data: [[13, 84.62]]},
  {name: "", data: [[23.5, 55.32]]},
  {name: "", data: [[46.5, 10.75]]},
  {name: "", data: [[3.5, 22.86]]},
  {name: "", data: [[6, 50]]},
  {name: "", data: [[12, 21.58]]},
  {name: "", data: [[4, 10]]},
  {name: "", data: [[2.5, 9.6]]},
  {name: "", data: [[40, 20]]},
  {name: "", data: [[3, 26.67]]},
  {name: "", data: [[17, 32.35]]},
  {name: "", data: [[2, 15]]},
  {name: "", data: [[8, 18.75]]},
  {name: "", data: [[6.5, 15.38]]},
  {name: "", data: [[4, 25]]},
  {name: "", data: [[4.5, 40]]},
  {name: "", data: [[12, 41.67]]},
  {name: "", data: [[77.5, 25.81]]},
  {name: "", data: [[7, 3.57]]},
  {name: "", data: [[3, 10]]},
  {name: "", data: [[40, 25]]},
  {name: "", data: [[80, 13.75]]},
  {name: "", data: [[8, 50]]},
  {name: "", data: [[40, 35]]},
  {name: "", data: [[11, 4.55]]},
  {name: "", data: [[6, 11.83]]},
  {name: "", data: [[40, 12.5]]},
  {name: "", data: [[5, 28]]},
  {name: "", data: [[4, 66.25]]},
  {name: "", data: [[5.5, 36.36]]},
  {name: "", data: [[4, 46.75]]},
  {name: "", data: [[3.5, 22.86]]},
  {name: "", data: [[7, 34.29]]},
  {name: "", data: [[13, 38.46]]},
  {name: "", data: [[16, 33.44]]},
  {name: "", data: [[9.5, 51.58]]},
  {name: "", data: [[18.5, 7.03]]},
  {name: "", data: [[21, 23.81]]},
  {name: "", data: [[28, 32.86]]},
  {name: "", data: [[16, 10]]},
  {name: "", data: [[5, 18]]},
  {name: "", data: [[7.5, 12]]},
  {name: "", data: [[8, 13.13]]},
  {name: "", data: [[10, 40]]},
  {name: "", data: [[8, 15]]},
  {name: "", data: [[6, 6.17]]},
  {name: "", data: [[4, 12.5]]},
  {name: "", data: [[32.5, 9.23]]},
  {name: "", data: [[5.5, 54.55]]},
  {name: "", data: [[39, 10.97]]},
  {name: "", data: [[3, 28]]},
  {name: "", data: [[5, 53.4]]},
  {name: "", data: [[10, 50]]},
  {name: "", data: [[10, 21.4]]},
  {name: "", data: [[1, 12]]},
  {name: "", data: [[4.5, 27.78]]},
  {name: "", data: [[3.5, 28.57]]},
  {name: "", data: [[15, 5.33]]},
  {name: "", data: [[12, 6.67]]},
  {name: "", data: [[8.5, 14.12]]},
  {name: "", data: [[1, 50]]},
  {name: "", data: [[8, 15]]},
  {name: "", data: [[60, 16.55]]},
  {name: "", data: [[100, 18]]},
  {name: "", data: [[25, 40]]},
  {name: "", data: [[3, 20]]},
  {name: "", data: [[22, 15.91]]},
  {name: "", data: [[3, 10]]},
  {name: "", data: [[40, 25]]},
  {name: "", data: [[4.5, 44.44]]},
  {name: "", data: [[25.5, 8.24]]},
  {name: "", data: [[16, 0.94]]},
  {name: "", data: [[10, 6.4]]},
  {name: "", data: [[5, 23]]},
  {name: "", data: [[3, 73.33]]},
  {name: "", data: [[6.5, 10.77]]},
  {name: "", data: [[4.5, 7.78]]},
  {name: "", data: [[40, 66.25]]},
  {name: "", data: [[17, 47.18]]},
  {name: "", data: [[52, 19.23]]},
  {name: "", data: [[33, 75.76]]},
  {name: "", data: [[9, 77.78]]},
  {name: "", data: [[3, 66.67]]},
  {name: "", data: [[4, 25]]},
  {name: "", data: [[8, 32.5]]},
  {name: "", data: [[7.5, 13.33]]},
  {name: "", data: [[1, 50]]},
  {name: "", data: [[14, 8.57]]},
  {name: "", data: [[24, 12.5]]},
  {name: "", data: [[15, 12.87]]},
  {name: "", data: [[8, 22.25]]},
  {name: "", data: [[10, 50]]},
  {name: "", data: [[10, 26.5]]},
  {name: "", data: [[18, 13.89]]},
  {name: "", data: [[14.5, 17.24]]},
  {name: "", data: [[2.5, 60]]},
  {name: "", data: [[30, 17.83]]},
  {name: "", data: [[7, 42.86]]},
  {name: "", data: [[30, 43.33]]},
  {name: "", data: [[30, 100]]},
  {name: "", data: [[60, 25]]},
  {name: "", data: [[80.5, 21.12]]},
  {name: "", data: [[80, 20]]},
  {name: "", data: [[72, 22.29]]},
  {name: "", data: [[32, 37.5]]},
  {name: "", data: [[7, 28.29]]},
  {name: "", data: [[45.5, 27.47]]},
  {name: "", data: [[8.5, 17.65]]},
  {name: "", data: [[3.5, 4.57]]},
  {name: "", data: [[10, 8.2]]},
  {name: "", data: [[9, 4.56]]},
  {name: "", data: [[85.5, 9.71]]},
  {name: "", data: [[5, 25]]},
  {name: "", data: [[5, 24]]},
  {name: "", data: [[4, 25]]},
  {name: "", data: [[7, 10]]},
  {name: "", data: [[5, 15]]},
  {name: "", data: [[11, 9.09]]},
  {name: "", data: [[4.5, 8.89]]},
  {name: "", data: [[2, 15]]},
  {name: "", data: [[18, 19.22]]},
  {name: "", data: [[10, 40.1]]},
  {name: "", data: [[10, 40]]},
  {name: "", data: [[2, 40]]},
  {name: "", data: [[18, 44.44]]},
  {name: "", data: [[8, 37.5]]},
  {name: "", data: [[16, 45]]},
  {name: "", data: [[18, 28.89]]},
  {name: "", data: [[10, 38]]},
  {name: "", data: [[40, 30]]},
  {name: "", data: [[25, 14]]},
  {name: "", data: [[2, 133.5]]},
  {name: "", data: [[9, 59.44]]},
  {name: "", data: [[14, 30.57]]},
  {name: "", data: [[7, 142.86]]},
  {name: "", data: [[19, 63.16]]},
  {name: "", data: [[28.5, 8.77]]},
  {name: "", data: [[4, 6.25]]},
  {name: "", data: [[3, 43.33]]},
  {name: "", data: [[2, 25]]},
  {name: "", data: [[6, 83.33]]},
  {name: "", data: [[7, 10.71]]},
  {name: "", data: [[5, 5.2]]},
  {name: "", data: [[10, 7.5]]},
  {name: "", data: [[16, 80.25]]},
  {name: "", data: [[3.5, 18.57]]},
  {name: "", data: [[2, 8]]},
  {name: "", data: [[6, 25]]},
  {name: "", data: [[20, 15]]},
  {name: "", data: [[25, 10]]},
  {name: "", data: [[16, 4.06]]},
  {name: "", data: [[19, 13.16]]},
  {name: "", data: [[39, 18.46]]},
  {name: "", data: [[21, 32.86]]},
  {name: "", data: [[8.5, 31.41]]},
  {name: "", data: [[4, 12.5]]},
  {name: "", data: [[9, 20]]},
  {name: "", data: [[22.5, 8.89]]},
  {name: "", data: [[14, 15]]},
  {name: "", data: [[30, 10]]},
  {name: "", data: [[20, 15]]},
  {name: "", data: [[3, 5]]},
  {name: "", data: [[8, 18]]},
  {name: "", data: [[40, 6.13]]},
  {name: "", data: [[8, 9]]},
  {name: "", data: [[7, 10.29]]},
  {name: "", data: [[18, 27.78]]},
  {name: "", data: [[6.5, 15.38]]},
  {name: "", data: [[7.5, 13.33]]},
  {name: "", data: [[5, 8.4]]},
  {name: "", data: [[50, 32]]},
  {name: "", data: [[2.5, 11.2]]},
  {name: "", data: [[3, 4]]},
  {name: "", data: [[20.5, 19.51]]},
  {name: "", data: [[100, 20]]},
  {name: "", data: [[90, 22.22]]},
  {name: "", data: [[5, 21.4]]},
  {name: "", data: [[6, 26.67]]},
  {name: "", data: [[11.5, 18.61]]},
  {name: "", data: [[1, 53]]},
  {name: "", data: [[2, 10]]},
  {name: "", data: [[10.5, 47.62]]}
]
});


['mousemove', 'touchmove', 'touchstart'].forEach(function (eventType) {
    document.getElementById('verteilung').addEventListener(
        eventType,
        function (e) {
            var chart,
                point,
                i,
                event;

            for (i = 0; i < Highcharts.charts.length; i = i + 1) {
                chart = Highcharts.charts[i];
                // Find coordinates within the chart
                event = chart.pointer.normalize(e);
                // Get the hovered point
                point = chart.series[0].searchPoint(event, true);

                if (point) {
                    point.highlight(e);
                }
            }
        }
    );
});


Highcharts.Pointer.prototype.reset = function () {
    return undefined;
};


Highcharts.Point.prototype.highlight = function (event) {
    event = this.series.chart.pointer.normalize(event);
    this.onMouseOver(); // Show the hover marker
    this.series.chart.tooltip.refresh(this); // Show the tooltip
    this.series.chart.xAxis[0].drawCrosshair(event, this); // Show the crosshair
};


function syncExtremes(e) {
    var thisChart = this.chart;

    if (e.trigger !== 'syncExtremes') { // Prevent feedback loop
        Highcharts.each(Highcharts.charts, function (chart) {
            if (chart !== thisChart) {
                if (chart.xAxis[0].setExtremes) { // It is null while updating
                    chart.xAxis[0].setExtremes(
                        e.min,
                        e.max,
                        undefined,
                        false,
                        { trigger: 'syncExtremes' }
                    );
                }
            }
        });
    }
}

// Get the data. The contents of the data file can be viewed at
Highcharts.ajax({
    url: '../../../static/honoradar/js/verteilung.json',
    dataType: 'text',
    success: function (activity) {

        activity = JSON.parse(activity);
        activity.datasets.forEach(function (dataset, i) {

            // Add X values
            dataset.data = Highcharts.map(dataset.data, function (val, j) {
                return [activity.xData[j], val];
            });

            var chartDiv = document.createElement('div');
            chartDiv.className = 'chart';
            document.getElementById('verteilung').appendChild(chartDiv);

            Highcharts.chart(chartDiv, {
                chart: {
					type: 'column',
                    marginLeft: 40, // Keep all charts left aligned
                    spacingTop: 40,
                    spacingBottom: 20,
					height: 300
                },
                title: {
                    text: dataset.name,
                    align: 'left',
                    margin: 0,
                    x: 30,
					y: -20,
					style: {
						color: "#2ecc71",
						fontWeight: 'bold',
						fontFamily: 'Open Sans',
						fontSize: '15px'
						}
                },
                credits: {
                    enabled: false
                },
                legend: {
                    enabled: false
                },
                xAxis: {
                    crosshair: true,
					style: {
						fontFamily: 'Open Sans',
						fontSize: '9px'
						},
                    events: {
                        setExtremes: syncExtremes
                    },
				categories: ['0-500','500-1000','1000-1500','1500-2000','2000-2500','2500-3000','3000-3500','3500-4000','4000-4500','4500-5000','5000-5500','5500-6000','6000-6500','6500-7000','7000-7500', '7500-8000','8000-8500','8500-9000','9000-9500','9500-10000','>10000']
                },
                yAxis: {
                    title: {
                        text: null
                    },
					max: 20
                },
				plotOptions: {
					series: {
						marker: {
							enabled: false,
							states: {
								hover: {
									fillColor: '#39ba6f',
									lineColor: '#2ecc71',
									lineWidth: 2
								}
							}
						}
					}
				},
				exporting: {
					enabled: false
				},
                tooltip: {
					positioner: function () {
						return {
							x: 400,
							y: 0
						}
					},
                    borderWidth: 0,
                    backgroundColor: 'none',
					formatter: function () {
						str="";
									if(this.point.x ==0){
									str="weniger als <span style='color: #ff9f23;'>500 Euro</span>";
									}
									if(this.point.x ==1){
									str="zwischen <span style='color: #ff9f23;'>500 und 1000 Euro</span>";
									}
									if(this.point.x ==2){
									str="zwischen <span style='color: #ff9f23;'>1000 und 1500 Euro</span>";
									}
									if(this.point.x ==3){
									str="zwischen <span style='color: #ff9f23;'>1500 und 2000 Euro</span>";
									}
									if(this.point.x ==4){
									str="zwischen <span style='color: #ff9f23;'>2000 und 2500 Euro</span>";
									}
									if(this.point.x ==5){
									str="zwischen <span style='color: #ff9f23;'>2500 und 3000 Euro</span>";
									}
									if(this.point.x ==6){
									str="zwischen <span style='color: #ff9f23;'>3000 und 3500 Euro</span>";
									}
									if(this.point.x ==7){
									str="zwischen <span style='color: #ff9f23;'>3500 und 4000 Euro</span>";
									}
									if(this.point.x ==8){
									str="zwischen <span style='color: #ff9f23;'>4000 und 4500 Euro</span>";
									}
									if(this.point.x ==9){
									str="zwischen <span style='color: #ff9f23;'>4500 und 5000 Euro</span>";
									}
									if(this.point.x ==10){
									str="zwischen <span style='color: #ff9f23;'>5000 und 5500 Euro</span>";
									}
									if(this.point.x ==11){
									str="zwischen <span style='color: #ff9f23;'>5500 und 6000 Euro</span>";
									}
									if(this.point.x ==12){
									str="zwischen <span style='color: #ff9f23;'>6000 und 6500 Euro</span>";
									}
									if(this.point.x ==13){
									str="zwischen <span style='color: #ff9f23;'>6500 und 7000 Euro</span>";
									}
									if(this.point.x ==14){
									str="zwischen <span style='color: #ff9f23;'>7000 und 7500 Euro</span>";
									}
									if(this.point.x ==15){
									str="zwischen <span style='color: #ff9f23;'>7500 und 8000 Euro</span>";
									}
									if(this.point.x ==16){
									str="zwischen <span style='color: #ff9f23;'>8000 und 8500 Euro</span>";
									}
									if(this.point.x ==17){
									str="zwischen <span style='color: #ff9f23;'>8500 und 9000 Euro</span>";
									}
									if(this.point.x ==18){
									str="zwischen <span style='color: #ff9f23;'>9000 und 9500 Euro</span>";
									}
									if(this.point.x ==19){
									str="zwischen <span style='color: #ff9f23;'>9500 und 10000 Euro</span>";
									}
									if(this.point.x ==20){
									str="mehr als <span style='color: #ff9f23;'>10000 Euro</span>";
									}
									
									return '<span style="color: #ff9f23;">' + this.point.y + ' Prozent</span> verdienen brutto ' + str + ' im Monat';
								},
                    headerFormat: '',
                    shadow: false,
                    style: {
						color: "#2ecc71",
						fontWeight: 'bold',
						fontFamily: 'Open Sans',
						fontSize: '15px'
						},
                    valueDecimals: dataset.valueDecimals,
                },
                series: [{
                    data: dataset.data,
                    name: dataset.name,
					type: dataset.type,
                    color: '#2ecc71',
                    fillOpacity: 0.3,
                    tooltip: {
                        valueSuffix: ' ' + dataset.unit
                    }
                }],
				responsive: {
					rules: [
					{condition: {
							maxWidth: 945
						},
						chartOptions: {
							tooltip: {
								positioner: function () {
									return {
										x: 30,
										y: 20
									}
								}
							}
						}
					},
					{condition: {
							maxWidth: 565
						},
						chartOptions: {
				            title: {
								style: {
									fontSize: '14px',
									lineHeight: '15px'
								}
							},
							tooltip: {
								style: {
									fontSize: '14px',
									lineHeight: '15px'
								},
							}
						}
					},
					{condition: {
							maxWidth: 348
						},
						chartOptions: {
				            title: {
								style: {
									fontSize: '12px',
									lineHeight: '13px'
								}
							},
							tooltip: {
								style: {
									fontSize: '12px',
									lineHeight: '13px'
								},
								positioner: function () {
									return {
										x: 30,
										y: 30
									}
								}
							}
						}
					}]				
				}		
				
					}
				);
			}
		);
    }
});


Highcharts.chart('erfahrungvslohn', {
    chart: {
        type: 'column',
        zoomType: {
		enable: false
		},
    },
    title: {
        text: 'Kommt Zeit, kommt Geld?',
        style: {
            color: "#ff9f23",
            fontWeight: 'bold',
			fontFamily: 'InknutAntiqua-Bold',
			fontSize: '25px'
        }
    },
	exporting: {
		enabled: false
	},
    subtitle: {
        text: 'Monatseinkommen in Euro im Vergleich zur Arbeitserfahrung<br>Geringe Erfahrung: < 5 Jahre | Mittlere Erfahrung: < 10 Jahre | Hohe Erfahrung: > 10 Jahre',
        style: {
            color: "#ffbb63",
            fontWeight: 'regular',
			fontFamily: 'Open Sans',
			fontSize: '14px'
        }
    },
    xAxis: {
        title: {
            enabled: false,
			style: {"fontWeight": "bold"},
            text: 'Zufriedenheit',
        },
		categories: [
            'Insgesamt',
            'Freiberufler',
            'Pauschalisten',
            'Festangestellte'
        ],
		style: {
			color: "#ffbb63",
			fontWeight: 'regular',
			fontFamily: 'Open Sans'
		},
		labels: {
			enabled: true
		},
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true,
		lineWidth: 0,
		minorGridLineWidth: 0,
		lineColor: 'transparent',
		minorTickLength: 0,
		tickLength: 0
    },
    yAxis: {
        title: {
            text: 'Monatseinkommen',
			style: {"fontWeight": "bold"},
        },
		style: {
			color: "#ffbb63",
			fontWeight: 'regular',
			fontFamily: 'Open Sans'
			},
		labels: {
            format: '{value} Euro',
			style: {
				fontWeight: 'regular',
				fontFamily: 'Open Sans'
			}
        }
    },
	credits: {
		enabled:false
		},
    legend: {
		enabled:true,
		borderColor: '#39ba6f',
		borderWidth: 2,
		borderRadius: 5,
    },
    plotOptions: {
		series: {
            color: 'rgba(119, 152, 191, .3)',
            marker: {
                fillColor: '#39ba6f',
                lineWidth: 2,
                lineColor: null,
				symbol: "O"
            }
        },
        column: {
            marker: {
                radius: 3,
                states: {
					fillColor: '#3DA5D9',
                    hover: {
                        enabled: true,
                        lineColor: '#2ecc71'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}<b><br><br>',
                pointFormat: 'Monatslohn: {point.y} Euro'
            }
        }
    },
	 responsive: {
        rules: [{
            condition: {
                maxWidth: 750
            },
            chart: {
                title: {
					style: {
						fontSize: '35px'
					}
				}
            }
        }]
    },
    series: [
  {name: "Geringe Erfahrung", color: '#9BD5F2', data: [[3245],[2624],[4100],[3011]]},
  {name: "Mittlere Erfahrung", color: '#6ABEE8', data: [[3546],[3200],[3900],[3538]]},
  {name: "Hohe Erfahrung", color: '#3DA5D9', data: [[4650],[4800],[4800],[4350]]}
	]
});

Highcharts.chart('erfahrungvszufriedenheit', {
    chart: {
        type: 'column',
        zoomType: {
		enable: false
		},
    },
    title: {
        text: 'Stabile Zufriedenheit',
        style: {
            color: "#ff9f23",
            fontWeight: 'bold',
			fontFamily: 'InknutAntiqua-Bold',
			fontSize: '25px'
        }
    },
	exporting: {
		enabled: false
	},
    subtitle: {
        text: 'Zufriedenheit im Vergleich zur Arbeitserfahrung<br>Geringe Erfahrung: < 5 Jahre | Mittlere Erfahrung: < 10 Jahre | Hohe Erfahrung: > 10 Jahre',
        style: {
            color: "#ffbb63",
            fontWeight: 'regular',
			fontFamily: 'Open Sans',
			fontSize: '14px'
        }
    },
    xAxis: {
        title: {
            enabled: false,
			style: {"fontWeight": "bold"},
            text: 'Zufriedenheit',
        },
		categories: [
            'Insgesamt',
            'Freiberufler',
            'Pauschalisten',
            'Festangestellte'
        ],
		style: {
			color: "#ffbb63",
			fontWeight: 'regular',
			fontFamily: 'Open Sans'
		},
		labels: {
			enabled: true
		},
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true,
		lineWidth: 0,
		minorGridLineWidth: 0,
		lineColor: 'transparent',
		minorTickLength: 0,
		tickLength: 0
    },
    yAxis: {
		min: 1,
		max: 9,
        title: {
            text: 'Zufriedenheit',
			style: {"fontWeight": "bold"},
        },
		style: {
			color: "#ffbb63",
			fontWeight: 'regular',
			fontFamily: 'Open Sans'
			},
		labels: {
            format: '{value}',
			style: {
				fontWeight: 'regular',
				fontFamily: 'Open Sans'
			}
        }
    },
	credits: {
		enabled:false
		},
    legend: {
		enabled:true,
		borderColor: '#39ba6f',
		borderWidth: 2,
		borderRadius: 5,
    },
    plotOptions: {
		series: {
            color: 'rgba(119, 152, 191, .3)',
            marker: {
                fillColor: '#39ba6f',
                lineWidth: 2,
                lineColor: null,
				symbol: "O"
            }
        },
        column: {
            marker: {
                radius: 3,
                states: {
					fillColor: '#3DA5D9',
                    hover: {
                        enabled: true,
                        lineColor: '#2ecc71'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}<b><br><br>',
                pointFormat: 'Zufriedenheit: {point.y} von 9'
            }
        }
    },
	 responsive: {
        rules: [{
            condition: {
                maxWidth: 750
            },
            chart: {
                title: {
					style: {
						fontSize: '35px'
					}
				}
            }
        }]
    },
    series: [
  {name: "Geringe Erfahrung", color: '#9BD5F2', data: [[6.6],[6.7],[6.5],[6.6]]},
  {name: "Mittlere Erfahrung", color: '#6ABEE8', data: [[6.5],[6.7],[6.3],[6.4]]},
  {name: "Hohe Erfahrung", color: '#3DA5D9', data: [[6.50],[6.4],[7.0],[6.1]]}
	]
});


/*
Highcharts.chart('positionvszufriedenheit', {
    chart: {
        type: 'column',
        zoomType: {
		enable: false
		},
    },
    title: {
        text: 'Das Tal der Tränen',
        style: {
            color: "#ff9f23",
            fontWeight: 'bold',
			fontFamily: 'InknutAntiqua-Bold',
			fontSize: '25px'
        }
    },
	exporting: {
		enabled: false
	},
    subtitle: {
        text: 'Zufriedenheit im Vergleich zur Karriereposition',
        style: {
            color: "#ffbb63",
            fontWeight: 'regular',
			fontFamily: 'Open Sans',
			fontSize: '14px'
        }
    },
    xAxis: {
        title: {
            enabled: false,
			style: {"fontWeight": "bold"},
            text: 'Zufriedenheit',
        },
		categories: [
            'Insgesamt',
            'Volontäre',
			'Redakteure',
			'Ressortleiter',
			'CvDs',
			'Chefredakteure'
        ],
		style: {
			color: "#ffbb63",
			fontWeight: 'regular',
			fontFamily: 'Open Sans'
		},
		labels: {
			enabled: true
		},
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true,
		lineWidth: 0,
		minorGridLineWidth: 0,
		lineColor: 'transparent',
		minorTickLength: 0,
		tickLength: 0
    },
    yAxis: {
		min: 1,
		max: 9,
        title: {
            text: 'Zufriedenheit',
			style: {"fontWeight": "bold"},
        },
		style: {
			color: "#ffbb63",
			fontWeight: 'regular',
			fontFamily: 'Open Sans'
			},
		labels: {
            format: '{value}',
			style: {
				fontWeight: 'regular',
				fontFamily: 'Open Sans'
			}
        }
    },
	credits: {
		enabled:false
		},
    legend: {
		enabled:false,
		borderColor: '#39ba6f',
		borderWidth: 2,
		borderRadius: 5,
    },
    plotOptions: {
		series: {
            color: 'rgba(119, 152, 191, .3)',
            marker: {
                fillColor: '#39ba6f',
                lineWidth: 2,
                lineColor: null,
				symbol: "O"
            }
        },
        column: {
            marker: {
                radius: 3,
                states: {
					fillColor: '#3DA5D9',
                    hover: {
                        enabled: true,
                        lineColor: '#2ecc71'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{point.x}<b><br><br>',
                pointFormat: 'Zufriedenheit: {point.y} von 9'
            }
        }
    },
	 responsive: {
        rules: [{
            condition: {
                maxWidth: 750
            },
            chart: {
                title: {
					style: {
						fontSize: '35px'
					}
				}
            }
        }]
    },
    series: [
  {name: "", color: '#3DA5D9', data: [[6.46],[6.83],[6.25],[5.29],[6.29],[6.67]]},
  {type: "spline", color: '#ff9f23', data: [[],[6.83],[6.25],[5.29],[6.29],[6.67]], marker: {enabled: false}, lineWidth: 3, enableMouseTracking: false}
	]
});

*/
