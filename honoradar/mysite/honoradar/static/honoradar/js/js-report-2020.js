Highcharts.chart('zufriedenheitvslohn', {
    chart: {
        type: 'scatter',
        zoomType: {
            enable: false
        },
    },
    title: {
        text: 'Der Faktor Zufriedenheit ',
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
            fontSize: '14px',
            transform: 'translate(-25px, 0)'
        }
    },
    xAxis: {
        title: {
            enabled: true,
            style: {
                "fontWeight": "bold"
            },
            text: 'Zufriedenheit',
        },
        max: 9,
        min: 3.5,
        style: {
            color: "#ffbb63",
            fontWeight: 'regular'
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
            style: {
                "fontWeight": "bold"
            },
        },
        style: {
            color: "#ffbb63",
            fontWeight: 'regular',
            fontFamily: 'Open Sans'
        },
        labels: {
            format: '{value} Euro',
            style: {
                fontWeight: 'regular'
            }
        }
    },
    credits: {
        enabled: false
    },
    legend: {
        enabled: false,
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
        {
            name: "Bild (Festangestellter)",
            data: [[8, 38.59]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Brigitte (Festangestellter)",
            data: [[6.3, 24.56]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Correctiv (Festangestellter)",
            data: [[7, 20.77]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Der Spiegel (Festangestellter)",
            data: [[7.3, 26.43]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Der Tagesspiegel (Festangestellter)",
            data: [[6.8, 22.37]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Die Tageszeitung (Festangestellter)",
            data: [[6.3, 14.57]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Die Welt (Festangestellter)",
            data: [[5.8, 21.77]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Die Zeit (Festangestellter)",
            data: [[6.7, 25]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "dpa (Festangestellter)",
            data: [[7, 25.46]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Fernsehen (Festangestellter)",
            data: [[6.8, 25.3]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Frankfurter Allgemeine Zeitung (Festangestellter)",
            data: [[5.3, 32.32]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Gründerszene Online (Festangestellter)",
            data: [[6, 19.27]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Handelsblatt (Festangestellter)",
            data: [[6.7, 27.34]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Impulse (Festangestellter)",
            data: [[8, 22.99]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Munich Online (Festangestellter)",
            data: [[5.5, 21.25]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Norddeutscher Rundfunk (Festangestellter)",
            data: [[6.8, 32.84]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Netzpolitik.org (Festangestellter)",
            data: [[8, 17.63]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Neue Osnabrücker Zeitung (Festangestellter)",
            data: [[6.3, 23.14]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "NZZ (Festangestellter)",
            data: [[6.7, 44.94]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Prosieben (Festangestellter)",
            data: [[7.3, 13.65]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Radio (Festangestellter)",
            data: [[6.3, 18.11]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Rheinische Post (Festangestellter)",
            data: [[7.3, 18.75]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "RTL (Fernsehen & Online) (Festangestellter)",
            data: [[7, 15.3]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Ruhr-Nachrichten (Festangestellter)",
            data: [[7.7, 12.41]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Rundfunk Berlin-Brandenburg (Festangestellter)",
            data: [[8.3, 28.47]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Sächsische Zeitung (Festangestellter)",
            data: [[5.3, 15.21]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Schwäbische Zeitung (Festangestellter)",
            data: [[5.3, 19.38]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Spiegel Online (Festangestellter)",
            data: [[7.5, 27.27]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Stern (Festangestellter)",
            data: [[7, 24.46]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Stern Online (Festangestellter)",
            data: [[6.8, 17.71]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Straubinger Tagblatt (Festangestellter)",
            data: [[5.7, 19.37]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Stuttgarter Zeitung (Festangestellter)",
            data: [[3.7, 22.84]],
            color: 'rgba119, 152, 191, .3',
            marker: {
                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Süddeutsche Online (Festangestellter)",
            data: [[6.3, 21.52]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Süddeutsche Zeitung (Festangestellter)",
            data: [[5.7, 19.7]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "T-Online (Festangestellter)",
            data: [[7.3, 18.75]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Weser-Kurier (Festangestellter)",
            data: [[5, 19.97]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Westdeutscher Rundfunk (Festangestellter)",
            data: [[6.3, 26.95]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Wirtschaftswoche (Festangestellter)",
            data: [[6, 28.2]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Zeit Online (Festangestellter)",
            data: [[6.3, 28.07]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#ff9f23',
                        fillColor: '#ff9f23'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Bayerischer Rundfunk (Pauschalist)",
            data: [[7.5, 28.44]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#278FC4',
                        fillColor: '#278FC4'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Der Tagesspiegel (Pauschalist)",
            data: [[3.8, 16.8]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#278FC4',
                        fillColor: '#278FC4'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Deutsche Welle (Pauschalist)",
            data: [[6.8, 27.28]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#278FC4',
                        fillColor: '#278FC4'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Deutschlandfunk Kultur (Pauschalist)",
            data: [[7.3, 40.13]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#278FC4',
                        fillColor: '#278FC4'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Die Tageszeitung (Pauschalist)",
            data: [[8.3, 13.17]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#278FC4',
                        fillColor: '#278FC4'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Die Welt (Pauschalist)",
            data: [[5, 28.92]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#278FC4',
                        fillColor: '#278FC4'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Die Zeit (Pauschalist)",
            data: [[8.3, 32.35]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#278FC4',
                        fillColor: '#278FC4'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "dpa (Pauschalist)",
            data: [[6, 15.54]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#278FC4',
                        fillColor: '#278FC4'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Radio Essen (Pauschalist)",
            data: [[6.3, 15.05]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#278FC4',
                        fillColor: '#278FC4'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Ruhr-Nachrichten (Pauschalist)",
            data: [[7, 11.25]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#278FC4',
                        fillColor: '#278FC4'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Süddeutsche Zeitung (Pauschalist)",
            data: [[7.8, 23.4]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#278FC4',
                        fillColor: '#278FC4'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Südwestrundfunk (Pauschalist)",
            data: [[8.3, 36.02]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#278FC4',
                        fillColor: '#278FC4'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Tagesschau Online (Pauschalist)",
            data: [[5.5, 30.1]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#278FC4',
                        fillColor: '#278FC4'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "Westdeutscher Rundfunk (Pauschalist)",
            data: [[7, 37.36]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#278FC4',
                        fillColor: '#278FC4'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "ZDF (Pauschalist)",
            data: [[6.7, 33.4]],
            color: 'rgba119, 152, 191, .3',
            marker: {

                lineWidth: 2,
                lineColor: null,
                symbol: "O",
                states: {
                    hover: {
                        lineColor: '#278FC4',
                        fillColor: '#278FC4'
                    }
                }
            },
            showInLegend: false
                },
        {
            name: "11 Freunde Online (Freiberufler)",
            data: [[6.5, 13.67]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Allgemeine Zeitung (VRM) (Freiberufler)",
            data: [[5, 9.84]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Augsburger Allgemeine (Freiberufler)",
            data: [[7.3, 25.87]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Badische Zeitung (Freiberufler)",
            data: [[6.5, 10.37]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Bayerischer Rundfunk (Freiberufler)",
            data: [[7, 27.33]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Bento (Freiberufler)",
            data: [[6, 16.52]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Berliner Zeitung (Freiberufler)",
            data: [[6, 14.88]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Bild (Freiberufler)",
            data: [[7, 33.89]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Bild der Wissenschaft (Freiberufler)",
            data: [[7, 37.19]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Brand eins (Freiberufler)",
            data: [[9, 37.15]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Brigitte (Freiberufler)",
            data: [[8.3, 43.33]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Buzzfeed (Freiberufler)",
            data: [[7.7, 30.46]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Chip Online (Freiberufler)",
            data: [[4, 20.22]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Chrismon (Freiberufler)",
            data: [[7.3, 29.02]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Cicero (Freiberufler)",
            data: [[6.5, 40.77]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Das Magazin (Berlin) (Freiberufler)",
            data: [[6.5, 11.42]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Der Feinschmecker (Freiberufler)",
            data: [[5, 30]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Der Freitag (Freiberufler)",
            data: [[5.3, 6.67]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Der Standard (Freiberufler)",
            data: [[5.3, 12.9]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Der Tagesspiegel (Freiberufler)",
            data: [[5, 15.63]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Deutsche Welle (Freiberufler)",
            data: [[6.8, 26.67]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Deutschlandfunk (Freiberufler)",
            data: [[7, 38.5]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Deutschlandfunk Kultur (Freiberufler)",
            data: [[7.5, 49.88]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Deutschlandfunk Nova (Freiberufler)",
            data: [[7.7, 52.94]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Die Rheinpfalz (Freiberufler)",
            data: [[6.3, 15.76]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Die Tageszeitung (Freiberufler)",
            data: [[6, 14.1]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Die Welt (Freiberufler)",
            data: [[6.5, 18.13]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Die Welt am Sonntag (Freiberufler)",
            data: [[6.3, 29.16]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Die Zeit (Freiberufler)",
            data: [[7, 21.79]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Dogs (Freiberufler)",
            data: [[8, 38.67]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "dpa (Freiberufler)",
            data: [[5.7, 8.97]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "dpa Themendienst (Freiberufler)",
            data: [[6.7, 23.24]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Edison Online (Freiberufler)",
            data: [[4.8, 23.09]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Eltern (Freiberufler)",
            data: [[8.7, 44.17]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Emotion (Freiberufler)",
            data: [[6.7, 35.54]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "enorm (Freiberufler)",
            data: [[8.5, 30.13]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Essen & Trinken (Freiberufler)",
            data: [[7.5, 36.81]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Evangelisch.de (Freiberufler)",
            data: [[6, 18.54]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Evangelischer Pressedienst (Freiberufler)",
            data: [[6.3, 17.75]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "filmecho/filmwoche (Freiberufler)",
            data: [[3.7, 7.8]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Fluter (Freiberufler)",
            data: [[6.3, 36.5]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Focus Gesundheit (Freiberufler)",
            data: [[6.3, 53.07]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Focus Gesundheit Arztsuche (Freiberufler)",
            data: [[6, 53.27]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Focus Online (Freiberufler)",
            data: [[6.3, 28.38]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Forum-Wochenmagazin (Freiberufler)",
            data: [[6.3, 4.53]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Frankfurter Allgemeine Sonntagszeitung (Freiberufler)",
            data: [[6.3, 22.88]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Frankfurter Allgemeine Zeitung (Freiberufler)",
            data: [[6, 24.33]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Frankfurter Rundschau (Freiberufler)",
            data: [[6.5, 18.5]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Freie Presse (Freiberufler)",
            data: [[5.7, 10.53]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Funke Mediengruppe (Freiberufler)",
            data: [[5.5, 38.61]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Gehirn & Geist (Freiberufler)",
            data: [[6.7, 29.41]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Geo (Freiberufler)",
            data: [[6.7, 35.92]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Geo Wissen (Freiberufler)",
            data: [[7.3, 30.72]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Goethe Online (Freiberufler)",
            data: [[6.3, 24.99]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Golem.de (Freiberufler)",
            data: [[4.3, 17.64]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Greenpeace Magazin (Freiberufler)",
            data: [[6.3, 38.33]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Hamburger Morgenpost (Freiberufler)",
            data: [[5.3, 33.22]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Handelsblatt (Freiberufler)",
            data: [[6.5, 42.53]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Heidenheimer Zeitung (Freiberufler)",
            data: [[5, 29.99]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Hellweg Radio (Freiberufler)",
            data: [[6.5, 20.78]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Ideat (Freiberufler)",
            data: [[6, 41.99]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Jetzt.de (Freiberufler)",
            data: [[6.8, 16.46]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Jüdische Allgemeine (Freiberufler)",
            data: [[5, 7.45]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Juice Magazin (Freiberufler)",
            data: [[6.3, 7.6]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Junge Welt (Freiberufler)",
            data: [[6.3, 6.06]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Jungle World (Freiberufler)",
            data: [[8.3, 10.93]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Landeszeitung für die Lüneburger Heide (Freiberufler)",
            data: [[4, 23.81]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Mair Dumont (Freiberufler)",
            data: [[5.7, 30.68]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Mare (Freiberufler)",
            data: [[6.8, 19.77]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Märkische Allgemeine (Freiberufler)",
            data: [[5, 20.22]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "MDR Aktuell (Freiberufler)",
            data: [[5.3, 14.63]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Medium Magazin (Freiberufler)",
            data: [[7.3, 27.43]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Merian (Freiberufler)",
            data: [[6.3, 43.33]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Missy Magazine (Freiberufler)",
            data: [[6.8, 18.15]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Mit Vergnügen (Freiberufler)",
            data: [[8, 25.78]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Münchner Merkur (Freiberufler)",
            data: [[6.7, 29.44]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Natur (Freiberufler)",
            data: [[7.8, 28.54]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Neue Osnabrücker Zeitung (Freiberufler)",
            data: [[4.7, 22.54]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Neues Deutschland (Freiberufler)",
            data: [[5.3, 9.07]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Norddeutscher Rundfunk (Freiberufler)",
            data: [[5, 29.92]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Nordis (Freiberufler)",
            data: [[6.3, 25.82]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "NZZ (Freiberufler)",
            data: [[7, 20.84]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "NZZ am Sonntag (Freiberufler)",
            data: [[8, 38.88]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Orange by Handelsblatt (Freiberufler)",
            data: [[6.3, 11.85]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "P.M. Magazin (Freiberufler)",
            data: [[8, 33.76]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "P.M. History (Freiberufler)",
            data: [[8.7, 22.8]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Perspective Daily (Freiberufler)",
            data: [[8, 14.91]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Psychologie Heute (Freiberufler)",
            data: [[8, 29.69]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Radio Essen (Freiberufler)",
            data: [[7.3, 18.89]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Redaktionsnetzwerk Deutschland (Freiberufler)",
            data: [[6.8, 13.85]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Rhein-Neckar-Zeitung (Freiberufler)",
            data: [[5.5, 13.61]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Rheinische Post (Freiberufler)",
            data: [[5.8, 19.06]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Saarbrücker Zeitung (Freiberufler)",
            data: [[5.3, 9.8]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Sächsische Zeitung (Freiberufler)",
            data: [[5.3, 13.33]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Science Notes Magazin (Freiberufler)",
            data: [[7, 19.11]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Senioren Ratgeber (Freiberufler)",
            data: [[7, 58.76]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Slow Food Magazin (Freiberufler)",
            data: [[8, 40.23]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Spektrum Online (Freiberufler)",
            data: [[8, 21.46]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Spex (Freiberufler)",
            data: [[5.8, 6.28]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Spiegel Geschichte (Freiberufler)",
            data: [[8.5, 47.24]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Spiegel Online (Freiberufler)",
            data: [[5.7, 20.05]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Stern (Freiberufler)",
            data: [[7, 44.79]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Süddeutsche Zeitung (Freiberufler)",
            data: [[7, 16.49]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Südkurier (Freiberufler)",
            data: [[5.8, 11.34]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "SWR2 (Freiberufler)",
            data: [[6.3, 21.02]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Szene Hamburg (Freiberufler)",
            data: [[4.7, 17.64]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "T-Online (Freiberufler)",
            data: [[6.8, 64.48]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "T3n (Freiberufler)",
            data: [[8.3, 27.46]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Technology Review (Freiberufler)",
            data: [[7.8, 42.72]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Tempus Corporate (Freiberufler)",
            data: [[5, 43.53]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "tip Berlin (Freiberufler)",
            data: [[6.8, 20.28]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Tour Magazin (Freiberufler)",
            data: [[6.3, 18.4]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Übermedien (Freiberufler)",
            data: [[7, 22.23]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Unispiegel (Freiberufler)",
            data: [[6.7, 29.05]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Utopia.de (Freiberufler)",
            data: [[8.3, 20.33]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "VDI Nachrichten (Freiberufler)",
            data: [[6.7, 19.21]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Vice (Freiberufler)",
            data: [[7, 17.87]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Vice Online (Freiberufler)",
            data: [[6, 17.51]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Vivanty (Freiberufler)",
            data: [[6.3, 13.4]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Walden (Freiberufler)",
            data: [[8.3, 34.3]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Wanderlust (Freiberufler)",
            data: [[3.3, 49.87]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Westdeutscher Rundfunk (Freiberufler)",
            data: [[7, 39.56]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "WDR 1LIVE (Freiberufler)",
            data: [[6, 30.22]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "WDR 2 (Freiberufler)",
            data: [[7.3, 40.83]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "WDR 5 (Freiberufler)",
            data: [[7.8, 56.03]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "welt-sichten (Freiberufler)",
            data: [[7.7, 22.11]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Weser-Kurier (Freiberufler)",
            data: [[6, 16.33]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Westdeutsche Allgemeine Zeitung (Freiberufler)",
            data: [[5, 14.33]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Westfälischer Anzeiger (Freiberufler)",
            data: [[6, 5.38]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Wiesbadener Kurier (Freiberufler)",
            data: [[5.8, 8.92]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Wirtschaftswoche (Freiberufler)",
            data: [[6.3, 39.72]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Ze.tt (Freiberufler)",
            data: [[7, 18.19]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Zeit Online (Freiberufler)",
            data: [[6, 19.18]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Zeit Wissen (Freiberufler)",
            data: [[8.7, 41.76]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
                },
        {
            name: "Zitty (Freiberufler)",
            data: [[8, 20.27]],
            showInLegend: false,
            marker: {
                states: {
                    hover: {
                        fillColor: '#2ecc71'
                    }
                }
            }
    }
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
                        false, {
                            trigger: 'syncExtremes'
                        }
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
                        fontSize: '20px',
                        fontFamily: 'InknutAntiqua-Bold'
                    }
                },
                credits: {
                    enabled: false
                },
                legend: {
                    enabled: false
                },
                xAxis: {
                    plotLines: [{
                            id: 'line-1',
                            name: 'test',
                            color: 'rgba(0,0,0,0.401)',
                            dashStyle: 'ShortDot',
                            width: 2,
                            value: 3.95,
                            label: {
                                text: 'Median',
                                style: {
                                    color: 'rgba(0,0,0,0.401)',
                                    fontSize: '13px',
                                    fontWeight: 'bold',
                                    transform: 'translate(5px, 15px) rotate(0)'
                                }
                            }
                    }, {
                            id: 'line-2',
                            color: 'rgba(0,0,0,0.402)',
                            dashStyle: 'ShortDot',
                            width: 2,
                            value: 3.23,
                            label: {
                                text: 'Median',
                                style: {
                                    color: 'rgba(0,0,0,0.401)',
                                    fontSize: '13px',
                                    fontWeight: 'bold',
                                    transform: 'translate(5px, 15px) rotate(0)'
                                }
                            }
                    }


                               ],
                    crosshair: true,
                    style: {
                        fontSize: '9px'
                    },
                    events: {
                        setExtremes: syncExtremes
                    },
                    categories: ['0-5', '5-10', '10-15', '15-20', '20-25', '25-30', '30-35', '35-40', '40-45', '45-50', '50-55', '>55']
                },
                yAxis: {
                    title: {
                        text: null
                    },
                    max: 25
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
                        str = "";
                        if (this.point.x == 0) {
                            str = "weniger als <span style='color: #ff9f23;'>5 Euro</span>";
                        }
                        if (this.point.x == 1) {
                            str = "zwischen <span style='color: #ff9f23;'>5 und 10 Euro</span>";
                        }
                        if (this.point.x == 2) {
                            str = "zwischen <span style='color: #ff9f23;'>10 und 15 Euro</span>";
                        }
                        if (this.point.x == 3) {
                            str = "zwischen <span style='color: #ff9f23;'>15 und 20 Euro</span>";
                        }
                        if (this.point.x == 4) {
                            str = "zwischen <span style='color: #ff9f23;'>20 und 25 Euro</span>";
                        }
                        if (this.point.x == 5) {
                            str = "zwischen <span style='color: #ff9f23;'>25 und 30 Euro</span>";
                        }
                        if (this.point.x == 6) {
                            str = "zwischen <span style='color: #ff9f23;'>30 und 35 Euro</span>";
                        }
                        if (this.point.x == 7) {
                            str = "zwischen <span style='color: #ff9f23;'>35 und 40 Euro</span>";
                        }
                        if (this.point.x == 8) {
                            str = "zwischen <span style='color: #ff9f23;'>40 und 45 Euro</span>";
                        }
                        if (this.point.x == 9) {
                            str = "zwischen <span style='color: #ff9f23;'>45 und 50 Euro</span>";
                        }
                        if (this.point.x == 10) {
                            str = "zwischen <span style='color: #ff9f23;'>50 und 55 Euro</span>";
                        }
                        if (this.point.x == 11) {
                            str = "mehr als <span style='color: #ff9f23;'>55 Euro</span>";
                        }

                        return '<span style="color: #ff9f23;">' + this.point.y + ' Prozent</span> erhalten brutto ' + str + ' in der Stunde';
                    },
                    headerFormat: '',
                    shadow: false,
                    style: {
                        color: "#2ecc71",
                        fontWeight: 'bold',
                        fontSize: '13px',
                        fontFamily: 'InknutAntiqua-Bold'
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
                        {
                            condition: {
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
                        {
                            condition: {
                                maxWidth: 565
                            },
                            chartOptions: {
                                title: {
                                    style: {
                                        fontSize: '14px',
                                        lineHeight: '15px'
                                    }
                                },
                                chart: {
                                    height: 200
                                },
                                tooltip: {
                                    style: {
                                        fontSize: '14px',
                                        lineHeight: '15px'
                                    },
                                }
                            }
					},
                        {
                            condition: {
                                maxWidth: 348
                            },
                            chartOptions: {
                                title: {
                                    style: {
                                        fontSize: '12px',
                                        lineHeight: '13px'
                                    }
                                },
                                chart: {
                                    height: 200
                                },
                                tooltip: {
                                    style: {
                                        fontSize: '10.5px',
                                        lineHeight: '13px',
                                        fontWeight: 'normal'
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

            });
        });
    }
});


/* VERBREITUNG */


['mousemove', 'touchmove', 'touchstart'].forEach(function (eventType) {
    document.getElementById('verbreitung').addEventListener(
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
                        false, {
                            trigger: 'syncExtremes'
                        }
                    );
                }
            }
        });
    }
}

// Get the data. The contents of the data file can be viewed at
Highcharts.ajax({
    url: '../../../static/honoradar/js/verbreitung.json',
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
            document.getElementById('verbreitung').appendChild(chartDiv);

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
                        fontSize: '20px',
                        fontFamily: 'InknutAntiqua-Bold'
                    }
                },
                credits: {
                    enabled: false
                },
                legend: {
                    enabled: false
                },
                xAxis: {
                    plotLines: [{
                            color: 'rgba(0,0,0,0.403)',
                            dashStyle: 'ShortDot',
                            width: 2,
                            value: 5.78,
                            label: {
                                text: 'Median',
                                style: {
                                    color: 'rgba(0,0,0,0.403)',
                                    fontSize: '13px',
                                    fontWeight: 'bold',
                                    transform: 'translate(5px, 15px) rotate(0)'
                                }
                            }
                    }, {
                            color: 'rgba(0,0,0,0.404)',
                            dashStyle: 'ShortDot',
                            width: 2,
                            value: 5.12,
                            label: {
                                text: 'Median',
                                style: {
                                    color: 'rgba(0,0,0,0.404)',
                                    fontSize: '13px',
                                    fontWeight: 'bold',
                                    transform: 'translate(5px, 15px) rotate(0)'
                                }
                            }
                    }, {
                            color: 'rgba(0,0,0,0.405)',
                            dashStyle: 'ShortDot',
                            width: 2,
                            value: 4.66,
                            label: {
                                text: 'Median',
                                style: {
                                    color: 'rgba(0,0,0,0.405)',
                                    fontSize: '13px',
                                    fontWeight: 'bold',
                                    transform: 'translate(5px, 15px) rotate(0)'
                                }
                            }
                    }


                               ],
                    crosshair: true,
                    style: {
                        fontSize: '9px'
                    },
                    events: {
                        setExtremes: syncExtremes
                    },
                    categories: ['0-5', '5-10', '10-15', '15-20', '20-25', '25-30', '30-35', '35-40', '40-45', '45-50', '50-55', '>55']
                },
                yAxis: {
                    title: {
                        text: null
                    },
                    max: 17
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
                        str = "";
                        if (this.point.x == 0) {
                            str = "weniger als <span style='color: #ff9f23;'>5 Euro</span>";
                        }
                        if (this.point.x == 1) {
                            str = "zwischen <span style='color: #ff9f23;'>5 und 10 Euro</span>";
                        }
                        if (this.point.x == 2) {
                            str = "zwischen <span style='color: #ff9f23;'>10 und 15 Euro</span>";
                        }
                        if (this.point.x == 3) {
                            str = "zwischen <span style='color: #ff9f23;'>15 und 20 Euro</span>";
                        }
                        if (this.point.x == 4) {
                            str = "zwischen <span style='color: #ff9f23;'>20 und 25 Euro</span>";
                        }
                        if (this.point.x == 5) {
                            str = "zwischen <span style='color: #ff9f23;'>25 und 30 Euro</span>";
                        }
                        if (this.point.x == 6) {
                            str = "zwischen <span style='color: #ff9f23;'>30 und 35 Euro</span>";
                        }
                        if (this.point.x == 7) {
                            str = "zwischen <span style='color: #ff9f23;'>35 und 40 Euro</span>";
                        }
                        if (this.point.x == 8) {
                            str = "zwischen <span style='color: #ff9f23;'>40 und 45 Euro</span>";
                        }
                        if (this.point.x == 9) {
                            str = "zwischen <span style='color: #ff9f23;'>45 und 50 Euro</span>";
                        }
                        if (this.point.x == 10) {
                            str = "zwischen <span style='color: #ff9f23;'>50 und 55 Euro</span>";
                        }
                        if (this.point.x == 11) {
                            str = "mehr als <span style='color: #ff9f23;'>55 Euro</span>";
                        }

                        return '<span style="color: #ff9f23;">' + this.point.y + ' Prozent</span> erhalten brutto ' + str + ' in der Stunde';
                    },
                    headerFormat: '',
                    shadow: false,
                    style: {
                        color: "#2ecc71",
                        fontWeight: 'bold',
                        fontSize: '13px',
                        fontFamily: 'InknutAntiqua-Bold'
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
                        {
                            condition: {
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
					}, {
                            condition: {
                                maxWidth: 800
                            },
                            chartOptions: {
                                title: {
                                    style: {
                                        fontSize: '14px',
                                        lineHeight: '15px'
                                    }
                                },
                            }
					},
                        {
                            condition: {
                                maxWidth: 565
                            },
                            chartOptions: {
                                title: {
                                    style: {
                                        fontSize: '14px',
                                        lineHeight: '15px'
                                    }
                                },
                                chart: {
                                    height: 200
                                },
                                tooltip: {
                                    style: {
                                        fontSize: '14px',
                                        lineHeight: '15px'
                                    },
                                }
                            }
					},
                        {
                            condition: {
                                maxWidth: 348
                            },
                            chartOptions: {
                                title: {
                                    style: {
                                        fontSize: '12px',
                                        lineHeight: '13px'
                                    }
                                },
                                chart: {
                                    height: 200
                                },
                                tooltip: {
                                    style: {
                                        fontSize: '10.5px',
                                        lineHeight: '13px',
                                        fontWeight: 'normal'
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

            });
        });
    }
});
