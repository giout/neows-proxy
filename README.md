<h1>Neows proxy server</h1>
<p>Web server that acts as a proxy server for Neows.</p>
<p>Near Earth Objects Web Service is a RESTful web service that retrieves detailed information about near earth planet asteroids (documentation at https://api.nasa.gov/ in the "Browse APIs" section). This service requires an API key (obtained easily by submitting an email at the NASA api website). DEMO_KEY can be used as a temporary api key, it has a limit of 50 daily requests.</p>
<p>The normal usage of Neows consists on the client introducing a key to obtain information. This project acts as an intermediary between the client and the Neows API. Client won't have to register its email and get an API key to obtain the NASA data. Also, its requests will be anonymous, every request will be executed with the proxy server IP and API key.</p>
<p>The purpose of this project is didactic. No api key will be shared, for it goes against NASA policies.</p>

<h2>Stack</h2>
<p>This project is developed in <b>Javascript</b>, running on <b>Node.js</b>. The web server is up and handled with <b>Express.js</b> and http requests were handled with <b>Axios</b>.</p>

<h2>Installation</h2>

```
npm i install 
```

<h2>Environment Variables</h2>
<table>
<tr>
<th>Variable</th>
<th>Description</th>
</tr>
<tr>
<td>PORT</td>
<td>port in which server will listen</td>
</tr>
<tr>
<td>API_KEY</td>
<td>public API key required to perform http requests</td>
</tr>
</table>

<h2>Start</h2>

```
npm run start
```

<h2>API</h2>
<p>Every functionality executes a GET request. Host will be 'localhost' and port will be '4000', assuming that this project will run locally.</p>
<h3>Get Asteroids based on their closest approach date to Earth.</h3>
<p>Query parameters</p>
<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default</th>
</tr>
<tr>
<td>start_date</td>
<td>YYYY-MM-DD</td>
<td>none</td>
</tr>
<tr>
<td>end_date</td>
<td>YYYY-MM-DD</td>
<td>7 days after start_date</td>
</tr>
</table>

<p><b>Request</b></p>

```
http://localhost:4000/asteroids/feed?start_date=2015-09-07&end_date=2015-09-08
```

<p><b>Response</b></p>

```json
{
    "links": {
        "next": "http://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-08&end_date=2015-09-09&detailed=false&api_key=uk8J0zGMVK7McjPaYm81CiCP4OlYD2KNYdGtWgcF",
        "previous": "http://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-06&end_date=2015-09-07&detailed=false&api_key=uk8J0zGMVK7McjPaYm81CiCP4OlYD2KNYdGtWgcF",
        "self": "http://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&detailed=false&api_key=uk8J0zGMVK7McjPaYm81CiCP4OlYD2KNYdGtWgcF"
    },
    "element_count": 25,
    "near_earth_objects": {
        "2015-09-08": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/2465633?api_key=uk8J0zGMVK7McjPaYm81CiCP4OlYD2KNYdGtWgcF"
                },
                "id": "2465633",
                "neo_reference_id": "2465633",
                "name": "465633 (2009 JR5)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2465633",
                "absolute_magnitude_h": 20.44,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.2170475943,
                        "estimated_diameter_max": 0.4853331752
                    },
                    "meters": {
                        "estimated_diameter_min": 217.0475943071,
                        "estimated_diameter_max": 485.3331752235
                    },
                    "miles": {
                        "estimated_diameter_min": 0.1348670807,
                        "estimated_diameter_max": 0.3015719604
                    },
                    "feet": {
                        "estimated_diameter_min": 712.0984293066,
                        "estimated_diameter_max": 1592.3004946003
                    }
                },
                "is_potentially_hazardous_asteroid": true,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-08",
                        "close_approach_date_full": "2015-Sep-08 20:28",
                        "epoch_date_close_approach": 1441744080000,
                        "relative_velocity": {
                            "kilometers_per_second": "18.1279360862",
                            "kilometers_per_hour": "65260.5699103704",
                            "miles_per_hour": "40550.3802312521"
                        },
                        "miss_distance": {
                            "astronomical": "0.3027469457",
                            "lunar": "117.7685618773",
                            "kilometers": "45290298.225725659",
                            "miles": "28142086.3515817342"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            // ...
        ],
        "2015-09-07": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/2440012?api_key=uk8J0zGMVK7McjPaYm81CiCP4OlYD2KNYdGtWgcF"
                },
                "id": "2440012",
                "neo_reference_id": "2440012",
                "name": "440012 (2002 LE27)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2440012",
                "absolute_magnitude_h": 19.61,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.3180936332,
                        "estimated_diameter_max": 0.7112789871
                    },
                    "meters": {
                        "estimated_diameter_min": 318.0936332215,
                        "estimated_diameter_max": 711.2789870931
                    },
                    "miles": {
                        "estimated_diameter_min": 0.197654159,
                        "estimated_diameter_max": 0.4419681355
                    },
                    "feet": {
                        "estimated_diameter_min": 1043.6143156183,
                        "estimated_diameter_max": 2333.5925520145
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-07",
                        "close_approach_date_full": "2015-Sep-07 07:32",
                        "epoch_date_close_approach": 1441611120000,
                        "relative_velocity": {
                            "kilometers_per_second": "1.1630843052",
                            "kilometers_per_hour": "4187.1034988155",
                            "miles_per_hour": "2601.7032823612"
                        },
                        "miss_distance": {
                            "astronomical": "0.4981690972",
                            "lunar": "193.7877788108",
                            "kilometers": "74525035.840942964",
                            "miles": "46307709.9545183432"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            // ...
        ]
    }
}
```

<h3>Get Asteroid based on its id</h3>

<p>Path parameters</p>
<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default</th>
</tr>
<tr>
<td>asteroid_id</td>
<td>int</td>
<td>none</td>
</tr>
</table>

<p><b>Request</b></p>

```
http://localhost:4000/asteroids/3727639
```

<p><b>Response</b></p>

```json
{
    "links": {
        "self": "http://api.nasa.gov/neo/rest/v1/neo/3727639?api_key=uk8J0zGMVK7McjPaYm81CiCP4OlYD2KNYdGtWgcF"
    },
    "id": "3727639",
    "neo_reference_id": "3727639",
    "name": "(2015 RN83)",
    "designation": "2015 RN83",
    "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3727639",
    "absolute_magnitude_h": 21.7,
    "estimated_diameter": {
        "kilometers": {
            "estimated_diameter_min": 0.1214940408,
            "estimated_diameter_max": 0.2716689341
        },
        "meters": {
            "estimated_diameter_min": 121.4940407996,
            "estimated_diameter_max": 271.6689340891
        },
        "miles": {
            "estimated_diameter_min": 0.0754928736,
            "estimated_diameter_max": 0.1688071972
        },
        "feet": {
            "estimated_diameter_min": 398.6025088171,
            "estimated_diameter_max": 891.3023057169
        }
    },
    "is_potentially_hazardous_asteroid": false,
    "close_approach_data": [
        {
            "close_approach_date": "1906-09-09",
            "close_approach_date_full": "1906-Sep-09 22:52",
            "epoch_date_close_approach": -1997917680000,
            "relative_velocity": {
                "kilometers_per_second": "9.9973435753",
                "kilometers_per_hour": "35990.4368711917",
                "miles_per_hour": "22363.057843658"
            },
            "miss_distance": {
                "astronomical": "0.2726110447",
                "lunar": "106.0456963883",
                "kilometers": "40782031.625594789",
                "miles": "25340779.3845905282"
            },
            "orbiting_body": "Earth"
        },
        {
            "close_approach_date": "1917-04-27",
            "close_approach_date_full": "1917-Apr-27 19:08",
            "epoch_date_close_approach": -1662439920000,
            "relative_velocity": {
                "kilometers_per_second": "9.2949301205",
                "kilometers_per_hour": "33461.7484337531",
                "miles_per_hour": "20791.8291865173"
            },
            "miss_distance": {
                "astronomical": "0.4666593283",
                "lunar": "181.5304787087",
                "kilometers": "69811241.529310721",
                "miles": "43378693.9895451098"
            },
            "orbiting_body": "Earth"
        },
        // ...
    ]
}
```

<h3>Get overall Asteroids data-set</h3>
<p><b>Request</b></p>

```
http://localhost:4000/asteroids/browse
```

<p><b>Response</b></p>

```json
{
"links": {
        "next": "http://api.nasa.gov/neo/rest/v1/neo/browse?page=1&size=20&api_key=uk8J0zGMVK7McjPaYm81CiCP4OlYD2KNYdGtWgcF",
        "self": "http://api.nasa.gov/neo/rest/v1/neo/browse?page=0&size=20&api_key=uk8J0zGMVK7McjPaYm81CiCP4OlYD2KNYdGtWgcF"
    },
    "page": {
        "size": 20,
        "total_elements": 33125,
        "total_pages": 1657,
        "number": 0
    },
    "near_earth_objects": [
        {
            "links": {
                "self": "http://api.nasa.gov/neo/rest/v1/neo/2000433?api_key=uk8J0zGMVK7McjPaYm81CiCP4OlYD2KNYdGtWgcF"
            },
            "id": "2000433",
            "neo_reference_id": "2000433",
            "name": "433 Eros (A898 PA)",
            "name_limited": "Eros",
            "designation": "433",
            "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2000433",
            "absolute_magnitude_h": 10.41,
            "estimated_diameter": {
                "kilometers": {
                    "estimated_diameter_min": 22.0067027115,
                    "estimated_diameter_max": 49.2084832235
                },
                "meters": {
                    "estimated_diameter_min": 22006.7027114738,
                    "estimated_diameter_max": 49208.4832234845
                },
                "miles": {
                    "estimated_diameter_min": 13.6743268705,
                    "estimated_diameter_max": 30.5767244291
                },
                "feet": {
                    "estimated_diameter_min": 72200.4705239119,
                    "estimated_diameter_max": 161445.1600989368
                }
            },
            "is_potentially_hazardous_asteroid": false,
            "close_approach_data": [
                {
                    "close_approach_date": "1900-12-27",
                    "close_approach_date_full": "1900-Dec-27 01:30",
                    "epoch_date_close_approach": -2177879400000,
                    "relative_velocity": {
                        "kilometers_per_second": "5.5786191875",
                        "kilometers_per_hour": "20083.0290749201",
                        "miles_per_hour": "12478.8132604691"
                    },
                    "miss_distance": {
                        "astronomical": "0.3149291693",
                        "lunar": "122.5074468577",
                        "kilometers": "47112732.928149391",
                        "miles": "29274494.7651919558"
                    },
                    "orbiting_body": "Earth"
                },
                // ...
            ]
        },
        //...
    ]
}
```