//SVG WIDTH & HEIGHT
		var w = 600;
		var h = 450;
		var padding = 30;
		
		//Variables for setting circle colors according to radius
		var c1 ="#3498DB";
		var c2 ="#E25942";
		var c3 ="#13A89E";
		var c4 ="#3F4953";
		var c5 ="#F6CB51";
		var c6 ="#F6CB51";
		var c7 ="#F6CB51";
		var c8 ="#F6CB51";
		var c9 ="#F6CB51";
		
        var dataset = [
			{ "id": 1, "years": 3, "midpoint": 2012.5, "start" : 2011, "end" : 2014, "name":"P.Obul Reddy Public School", "country":"INDIA", "state":"Andhra Pradesh", "city":"Hyderabad", "percentage":"40", "etype":"school" },
			{ "id": 2, "years": 2, "midpoint": 2010, "start" : 2009, "end" : 2011, "name":"Treveni Talent School", "country":"INDIA", "state":"Andhra Pradesh", "city":"Hyderabad", "percentage":"60", "etype":"school" },
			{ "id": 3, "years": 1, "midpoint": 2009.5, "start" : 2009, "end" : 2010, "name":"Trinity Public School", "country":"INDIA", "state":"Andhra Pradesh", "city":"Hyderabad", "percentage":"50", "etype":"school" },
			{ "id": 4, "years": 4, "midpoint": 2008, "start" : 2006, "end" : 2010, "name":"Dav Public School", "country":"INDIA", "state":"Tamil Nadu", "city":"Chennai", "percentage":"60", "etype":"school" },
			{ "id": 5, "years": 1, "midpoint": 2006.5, "start" : 2006, "end" : 2007, "name":"Sri Chaitanya Junior Kalasala", "country":"INDIA", "state":"Andhra Pradesh", "city":"Hyderabad", "percentage":"80", "etype":"college" },
			{ "id": 6, "years": 3, "midpoint": 2007.5, "start" : 2006, "end" : 2009, "name":"KG Reddy College Of Engineering & Technology", "country":"INDIA", "state":"Andhra Pradesh", "city":"Hyderabad", "percentage":"70", "etype":"college" },
			{ "id": 7, "years": 5, "midpoint": 2012.5, "start" : 2010, "end" : 2015, "name":"Univeristy Of Massachusetts Dartmouth", "country":"USA", "state":"Massachusetts", "city":"New Bedford", "percentage":"90", "etype":"university" },
			{ "id": 8, "years": 2, "midpoint": 2013, "start" : 2012, "end" : 2014, "name":"Univeristy Of California", "country":"USA", "state":"California", "city":"Long Beach", "percentage":"70", "etype":"university" }
			
			
//			,{ "id": 9, "years": 1, "midpoint": 2014.5, "start" : 2014, "end" : 2015, "name":"CIS 602 Class", "country":"USA", "state":"Massachusetts", "city":"Dartmouth", "percentage":"70", "etype":"university" }
			
			
			
		];

//dataset.push({ "id": 8, "years": 2, "midpoint": 2012.5, "start" : 2010, "end" : 2015, "name":"Univeristy Of Massachusetts Dartmouth", "country":"USA", "state":"Massachusetts", "city":"New Bedford", "percentage":"90", "etype":"university" });




		
//	var dataset = [ [3,2012.5,2011,2014], [2,2010,2009,2011] , [1,2009.5,2009,2010], [4,2008,2006,2010], [1,2006.5,2006,2007], [3,2007.5,2006,2009], [5,2012.5,2010,2015], []
//					  ];

            
//      var dataset = [ [5,1993.5,1991,1996], [2,1993,1992,1994] , [4,2001,1999,2003], [3,1996.5,1995,1998], [1,1994.5,1994,1995], [1,2001.5,2001,2002], [2,1998,1997,1999], [3,1994.5,1993,1996]
//                    ];
            
		//Xscale
		var Xscale = d3.scale.linear()
						.domain([0, d3.max(dataset,function(d){ return d.years; })])
						.range([padding,w-padding*3]);



		//Yscale
		var Yscale = d3.scale.linear()
						.domain([d3.min(dataset,function(d){ return d.start; })-1, d3.max(dataset,function(d){ return (d.end+1); })])
						.range([h-padding,padding]);


		//Xaxis
		var Xaxis = d3.svg.axis()
						.scale(Xscale)
						.orient("bottom")
						.ticks(4);


		//Yaxis
		var Yaxis = d3.svg.axis()
						.scale(Yscale)
						.orient("left")
						.ticks(dataset.length*1.2);

		var svg = d3.select("body")
					.select("#mainGraph")
					.append("svg")
					.attr("width",w)
					.attr("height",h)
					.attr("id","svg1");

            
            
            
            
            
          var topLine = svg.selectAll("#tl line") //Top Line
                    .data(dataset)
                    .enter()
                    .append("line")
                    .attr("id","tls") //Top Line Selector
                    .attr("x1",Xscale(0.05))
                    .attr("y1",function(d){ return Yscale(d.end); })
                    .attr("x2",function(d){ return Xscale(d.years-(d.years/8)); })
                    .attr("y2",function(d){ return Yscale(d.end); })
                    .attr("stroke","teal");
            
            svg.selectAll("#tcl line") //Top Cross Line
                    .data(dataset)
                    .enter()
                    .append("line")
                    .attr("id","tcls") //Top Cross Line Selector
                    .attr("x1",function(d){ return Xscale(d.years-(d.years/8)); })
                    .attr("y1",function(d){ return Yscale(d.end); })
                    .attr("x2",function(d){ return Xscale(d.years); })
                    .attr("y2",function(d){ return Yscale(d.midpoint); })
                    .attr("stroke","teal");
            
            
            svg.selectAll("#bl line") //Bottom Line
                    .data(dataset)
                    .enter()
                    .append("line")
                    .attr("id","bls") //Bottom Line Selector
                    .attr("x1",Xscale(0.05))
                    .attr("y1",function(d){ return Yscale(d.start); })
                    .attr("x2",function(d){ return Xscale(d.years-(d.years/8)); })
                    .attr("y2",function(d){ return Yscale(d.start); })
                    .attr("stroke","teal");
            
            
            svg.selectAll("#bcl line") //Bottom Cross Line
                    .data(dataset)
                    .enter()
                    .append("line")
                    .attr("id","bcls") //Bottom Cross Line Selector
                    .attr("x1",function(d){ return Xscale(d.years-(d.years/8)); })
                    .attr("y1",function(d){ return Yscale(d.start); })
                    .attr("x2",function(d){ return Xscale(d.years); })
                    .attr("y2",function(d){ return Yscale(d.midpoint); })
                    .attr("stroke","teal");
            
            
            
            
            
            
            var circles = svg.selectAll("circle")
                            .data(dataset)
                            .enter()
                            .append("circle")
							.on("mouseover", function(d){
									window.x = d.id;
									window.a = d.years;
									window.b = d.midpoint;
									window.c = d.start;
									window.d = d.end;
									window.e = d.name;
								
								d3.select(this)
								.attr("fill",function(d){ 
								if(d.years==1){	
									return c1;} else if(d.years==2){
									return c2;} else if(d.years==3){
									return c3;} else if(d.years==4){
									return c4;} else{ return c5;  }
                            	})
								.attr("fill","#E53542")
								.attr("stroke","#E53542")
								.attr("stroke-width",4)
								.attr("cursor","pointer");
								
								circle_details.style("background-color",function(d){
									if(d.id==window.x){
										return "#E53542";
									}
										if(d.years==1){
										return c1;} else if(d.years==2){
										return c2;} else if(d.years==3){
										return c3;} else if(d.years==4){
										return c4;} else{ return c5;  }
								});
//								.style("border-radius",function(d){
//									if(d.id==window.x){
//										return 50+"%";
//									}
//								});
//								.style("width",function(d){
//									if(d.id==window.x){
//										return 23 + "px";
//									}
//								})
//								.style("height",function(d){
//									if(d.id==window.x){
//										return 23 + "px";
//									}
//								});
								
								circle_details_para
								.style("color",function(d){
									if(d.id==window.x){
										return "#E53542";}
								});
								
								
								svg.append("line") //Top Line Selector
								.attr("class","remove")
								.attr("x1",Xscale(0.05))
								.attr("y1",function(d){ return Yscale(window.d); })
								.attr("x2",function(d){ return Xscale(window.a-(window.a/8)); })
								.attr("y2",function(d){ return Yscale(window.d); })
								.attr("stroke","#E53542")
								.attr("stroke-width",2)
								.style("pointer-events", "none");
								
								svg.append("line") //Top Cross Line Selector
								.attr("class","remove")
								.attr("x1",function(d){ return Xscale(window.a-(window.a/8)); })
								.attr("y1",function(d){ return Yscale(window.d); })
								.attr("x2",function(d){ return Xscale(window.a); })
								.attr("y2",function(d){ return Yscale(window.b); })
								.attr("stroke","#E53542")
								.attr("stroke-width",2)
								.style("pointer-events", "none");
								
								svg.append("line") //Bottom Line Selector
								.attr("class","remove")
								.attr("x1",Xscale(0.05))
								.attr("y1",function(d){ return Yscale(window.c); })
								.attr("x2",function(d){ return Xscale(window.a-(window.a/8)); })
								.attr("y2",function(d){ return Yscale(window.c); })
								.attr("stroke","#E53542")
								.attr("stroke-width",2)
								.style("pointer-events", "none");
								
								svg.append("line") //Bottom Cross Line Selector
								.attr("class","remove")
								.attr("x1",function(d){ return Xscale(window.a-(window.a/8)); })
								.attr("y1",function(d){ return Yscale(window.c); })
								.attr("x2",function(d){ return Xscale(window.a); })
								.attr("y2",function(d){ return Yscale(window.b); })
								.attr("stroke","#E53542")
								.attr("stroke-width",2)
								.style("pointer-events", "none");
								
							})
								
							.on("mouseout", function(){
								d3.select(this)
								.transition()
								.duration(250)
								.attr("fill",function(d){ 
								if(d.years==1){	
                                return c1;} else if(d.years==2){
                                return c2;} else if(d.years==3){
                                return c3;} else if(d.years==4){
                                return c4;} else{ return c5;  }
                            	})
								.attr("stroke","grey")
								.attr("stroke-width",1);
								
								circle_details
								.transition()
								.duration(250)
								.style("background-color",function(d){
									if(d.years==1){
										return c1;} else if(d.years==2){
										return c2;} else if(d.years==3){
										return c3;} else if(d.years==4){
										return c4;} else{ return c5;  }
								});
//								.style("border-radius","none");
//								.style("width",function(d){ return 20 + "px";})
//								.style("height",function(d){ return 20 + "px";});
								
								circle_details_para
								.transition()
								.duration(250)
								.style("color",function(d) { return "grey"; });
								
								svg.selectAll("line.remove") //Top Line Selector
//								.transition()
//								.duration(250)
								.attr("x1",0)
								.attr("y1",0)
								.attr("x2",0)
								.attr("y2",0)
								.attr("stroke",none)
								.attr("stroke-width",0);
							})
							.on("click",function(d){
								
								window.id = d.id;
								window.years = d.years;
								window.midpoint = d.midpoint;
								window.start = d.start;
								window.end = d.end;
								window.name = d.name;
								window.country = d.country;
								window.state = d.state;
								window.city = d.city;
								window.percentage = d.percentage;
								window.etype = d.etype;
								
								d3.select("#hexagonContainer")
								.transition()
								.duration(500)
								.delay(500)
								.style("right",function(d){
									if(window.percentage == 10) return -27+"px"; else
									if(window.percentage == 20) return -73+"px"; else
									if(window.percentage == 30) return -120+"px"; else
									if(window.percentage == 40) return -166+"px"; else
									if(window.percentage == 50) return -213+"px"; else
									if(window.percentage == 60) return -259+"px"; else
									if(window.percentage == 70) return -306+"px"; else
									if(window.percentage == 80) return -352+"px"; else
									if(window.percentage == 90) return -399+"px"; else
									if(window.percentage == 100) return -445+"px";
									else return -445+"px";
								})
								
								d3.select("#triRecLine")
								.style("transform",function(){
									   	if(window.etype == "school") return "rotate("+30+"deg)"; else
										if(window.etype == "college") return "rotate("+0+"deg)"; else
										if(window.etype == "university") return "rotate("+152+"deg)";
									   })
								.style("-ms-transform",function(){
									   	if(window.etype == "school") return "rotate("+30+"deg)"; else
										if(window.etype == "college") return "rotate("+0+"deg)"; else
										if(window.etype == "university") return "rotate("+152+"deg)";
									   })
								.style("-webkit-transform",function(){
									   	if(window.etype == "school") return "rotate("+30+"deg)"; else
										if(window.etype == "college") return "rotate("+0+"deg)"; else
										if(window.etype == "university") return "rotate("+152+"deg)";
									   })
								.style("top",function(){
										 if(window.etype == "school") return 20+"px"; else
										 if(window.etype == "college") return 40+"px"; else
										 if(window.etype == "university") return 59+"px";
										})
								.style("right",function(){
										 if(window.etype == "school") return 80+"px"; else
										 if(window.etype == "college") return 80+"px"; else
										 if(window.etype == "university") return 80+"px";
										})
								
								d3.select("#educationNameRect")
								.transition()
								.duration(500)
								.each("start",function(){
									d3.select(this)
									.style("width",300+"px")
									.select("p")
									.style("display","none")
									.style("font-size",20+"px")
									.style("color","white")
									.style("width",250+"px")
									.style("position","relative")
									.style("top",25+"px")
									.style("right",28+"px")
									.text(function(){
									return window.name;
									})
								})
								.style("width",356+"px")
								
								
								d3.select("#educationNameRect")
								.select("p")
								.transition()
								.duration(500)
								.delay(250)
								.style("display","block")
								.style("top",25+"px")
								.style("right",-50+"px")
								.style("text-align","center")
								
								
								d3.select("#educationFirstYear")
								.select("p")
								.attr("color","white")
								.text(function(){
									return window.start;
								})
								
								d3.select("#educationSecondYear")
								.select("p")
								.attr("color","white")
								.text(function(){
									return window.end;
								})
								
								d3.select("#educationSecondYear")
								.transition()
								.duration(500)
								.each("start",function(){
									d3.select(this)
									.style("right",90+"px")
								})
								.style("right",0+"px")
								
								d3.select("#eCountry")
								.select("p")
								.style("display","none")
								.text(function(){
									return window.country;
								})
								
								d3.select("#eCountry")
								.transition()
								.duration(500)
								.each("start",function(){
									d3.select(this)
									.style("right",-50+"px")
									.style("top",-20+"px")
									.select("p")
									.style("display","none")
									.style("right",130+"px")
								})
								.style("right",-90+"px")
								.style("top",0+"px")
								.select("p")
								.style("display","none")
								
								d3.select("#eCountry")
								.select("p")
								.transition()
								.duration(500)
								.delay(250)
								.style("display","block")
								.style("right",70+"px")
								
								d3.select("#eState")
								.select("p")
								.style("display","none")
								.text(function(){
									return window.state;
								})
								
								d3.select("#eState")
								.transition()
								.duration(500)
								.each("start",function(){
									d3.select(this)
									.style("right",-105+"px")
									.style("top",-15+"px")
									.select("p")
									.style("display","none")
									.style("right",155+"px")
								})
								.style("right",-135+"px")
								.style("top",10+"px")
								.select("p")
								.style("display","none")
								
								d3.select("#eState")
								.select("p")
								.transition()
								.duration(500)
								.delay(250)
								.style("display","block")
								.style("right",95+"px")
								
								d3.select("#eCity")
								.select("p")
								.style("display","none")
								.text(function(){
									return window.city;
								})
								
								d3.select("#eCity")
								.transition()
								.duration(500)
								.each("start",function(){
									d3.select(this)
									.style("right",-150+"px")
									.style("top",-10+"px")
									.select("p")
									.style("display","none")
									.style("right",165+"px")
								})
								.style("right",-170+"px")
								.style("top",10+"px")
								.select("p")
								.style("display","none")
								
								d3.select("#eCity")
								.select("p")
								.transition()
								.duration(500)
								.delay(250)
								.style("display","block")
								.style("right",105+"px")
							})
			
			
			//Starts the original circle Attributes
                            .attr("cx", function(d){ return Xscale(d.years); })
                            .attr("cy", function(d){ return Yscale(d.midpoint); })
                            .attr("r", function(d){
								return (d.years*10);
                            })
                            .attr("fill",function(d){ 
                            if(d.years==1){
                                return c1;} else if(d.years==2){
                                return c2;} else if(d.years==3){
                                return c3;} else if(d.years==4){
                                return c4;} else{ return c5;  }
                            })
                            .attr("stroke","grey")
                            .attr("stroke-width",1);
							
                                
            
            dataset.sort(function(a, b){
			 return b.years-a.years
			})
           

			var circle_para_group = d3.select("#circleDetailsModal")
			.selectAll("div")
			.data(dataset)
			.enter()
			.append("div")
			.attr("class","circleParaGroup");


			var circle_details = circle_para_group
			.append("div")
			.attr("class","circleDetails")
			.style("background-color",function(d){ 
				if(d.years==1){
					return c1;} else if(d.years==2){
					return c2;} else if(d.years==3){
					return c3;} else if(d.years==4){
					return c4;} else{ return c5;  }
			});
		
		var circle_details_para = circle_para_group
			.append("p")
			.attr("class","circleDetailsPara")
			.text(function(d){ return d.name; });
            
            
            
            
            svg.append("g")
                .attr("class","xaxis x axis")
                .attr("transform","translate(10," + (h-padding) + ")")
				.call(Xaxis);
            
            svg.append("g")
                .attr("class","yaxis y axis")
                .attr("transform", "translate(" + (padding+10) + ",0)")
				.call(Yaxis);
        
            //Not able to move the gap between the ticks *****IMPORTANT*******
//             svg.selectAll(".yaxis text")  // select all the text elements for the xaxis
//          .attr("transform", function(d) {
//             return "translate(" + this.getBBox().h*-2 + "," + this.getBBox().h + ")";
//         });
            
            
            
            
            
            
            
            
            
            
            
            //On click, update with new data			
			d3.select("div#work")
				.on("click", function() {
                    
					
//			var dataset = [ [5,1993.5,1991,1996], [2,1993,1992,1994] , [4,2001,1999,2003], [3,1996.5,1995,1998], [1,1994.5,1994,1995], [1,2001.5,2001,2002], [2,1998,1997,1999], [3,1994.5,1993,1996]
//                          ];
					
			var dataset = [
			{ "id": 1, "years": 5, "midpoint": 1993.5, "start" : 1991, "end" : 1996, "name":"WIPRO", "country":"INDIA", "state":"Andhra Pradesh", "city":"Hyderabad", "percentage":"40", "etype":"school" },
			{ "id": 2, "years": 2, "midpoint": 1993, "start" : 1992, "end" : 1994, "name":"INFOSYS", "country":"INDIA", "state":"Andhra Pradesh", "city":"Hyderabad", "percentage":"60", "etype":"school" },
			{ "id": 3, "years": 4, "midpoint": 2001, "start" : 1999, "end" : 2003, "name":"TATA Groups", "country":"INDIA", "state":"Andhra Pradesh", "city":"Hyderabad", "percentage":"50", "etype":"school" },
			{ "id": 4, "years": 3, "midpoint": 1997.5, "start" : 1996, "end" : 1999, "name":"RELIANCE", "country":"INDIA", "state":"Tamil Nadu", "city":"Chennai", "percentage":"60", "etype":"school" },
			{ "id": 5, "years": 1, "midpoint": 1994.5, "start" : 1994, "end" : 1995, "name":"PRO SOFT", "country":"INDIA", "state":"Andhra Pradesh", "city":"Hyderabad", "percentage":"80", "etype":"college" },
			{ "id": 6, "years": 1, "midpoint": 2001.5, "start" : 2001, "end" : 2002, "name":"AVID Technologies", "country":"INDIA", "state":"Andhra Pradesh", "city":"Hyderabad", "percentage":"70", "etype":"college" },
			{ "id": 7, "years": 2, "midpoint": 1998, "start" : 1997, "end" : 1999, "name":"GOOGLE", "country":"USA", "state":"Massachusetts", "city":"Boston", "percentage":"90", "etype":"university" },
			{ "id": 8, "years": 3, "midpoint": 1994.5, "start" : 1993, "end" : 1996, "name":"MICROSOFT", "country":"USA", "state":"Massachusetts", "city":"Boston", "percentage":"90", "etype":"university" }
			
		];
					
			
					

           
                    
                     //Update scale domains
                     Xscale.domain([0, d3.max(dataset,function(d){ return d.years; })]);
                     Yscale.domain([d3.min(dataset,function(d){ return d.start; })-1, d3.max(dataset,function(d){ return (d.end+1); })])
                    
   
					//Update all circles
					svg.selectAll("circle")
					   .data(dataset)
					   .transition()
					   .duration(1000)
					   .each("start", function() {
						   d3.select(this)
						     //.attr("fill", "magenta")
                             //.attr("stroke", "grey")
						     .attr("r", 8);
					   })
  					   
                    .attr("cx", function(d){ return Xscale(d.years); })
                            .attr("cy", function(d){ return Yscale(d.midpoint); })
                    
                    .transition()
					   .duration(1000)
                    
                    
//                        .attr("cx", function(d){ return Xscale(d[0]); })
//                            .attr("cy", function(d){ return Yscale(d[1]); })
                            .attr("r", function(d){ 
                            return (d.years*10);
                            })
                            .attr("fill",function(d){ 
                            if(d.years==1){
                                return c1;} else if(d.years==2){
                                return c2;} else if(d.years==3){
                                return c3;} else if(d.years==4){
                                return c4;} else{ return c5;  }
                            })
                            .attr("stroke","grey")
                            .attr("stroke-width",1);
                    
                    
                    
                    
                    
            svg.selectAll("line#tls")//Top Line Selector
                    .data(dataset)
                    .transition()
					   .duration(1000)
					   .each("start", function() {
						   d3.select(this)
						     .attr("x1", padding+10)
                           .attr("y1",function(d){ return Yscale(d.end+padding); }) //Add (d[3]+padding) and see the magic
						     .attr("x2", padding+10)
                           .attr("y2",function(d){ return Yscale(d.end+padding); }) //Add (d[3]+padding) and see the magic
					   })
                    .attr("x1",Xscale(0.05))
                    .attr("y1",function(d){ return Yscale(d.end); })
                    .attr("x2",function(d){ return Xscale(d.years-(d.years/8)); })
                    .attr("y2",function(d){ return Yscale(d.end); })
                    .attr("stroke","teal");
            
            
            svg.selectAll("line#tcls")//Top Cross Line Selector
                    .data(dataset)
                    .transition()
					   .duration(1000)
					   .each("start", function() {
						   d3.select(this)
						     .attr("x1", padding+10)
                           .attr("y1",function(d){ return Yscale(d.end+padding); }) //Add (d[3]+padding) and see the magic
						     .attr("x2", padding+10)
                           .attr("y2",function(d){ return Yscale(d.midpoint+padding); }) //Add (d[3]+padding) and see the magic
					   })
                    .attr("x1",function(d){ return Xscale(d.years-(d.years/8)); })
                    .attr("y1",function(d){ return Yscale(d.end); })
                    .attr("x2",function(d){ return Xscale(d.years); })
                    .attr("y2",function(d){ return Yscale(d.midpoint); })
                    .attr("stroke","teal");
            
            
            svg.selectAll("line#bls")//Bottom Line Selector
                    .data(dataset)
                    .transition()
					   .duration(1000)
					   .each("start", function() {
						   d3.select(this)
						     .attr("x1", padding+10)
                           .attr("y1",function(d){ return Yscale(d.start); })
						     .attr("x2", padding+10)
                           .attr("y2",function(d){ return Yscale(d.start); })
					   })
                    .attr("x1",Xscale(0.05))
                    .attr("y1",function(d){ return Yscale(d.start); })
                    .attr("x2",function(d){ return Xscale(d.years-(d.years/8)); })
                    .attr("y2",function(d){ return Yscale(d.start); })
                    .attr("stroke","teal");
            
            
            svg.selectAll("line#bcls")//Bottom Cross Line Selector
                    .data(dataset)
                    .transition()
					   .duration(1000)
					   .each("start", function() {
						   d3.select(this)
						     .attr("x1", padding+10)
                           .attr("y1",function(d){ return Yscale(d.start); })
						     .attr("x2", padding+10)
                           .attr("y2",function(d){ return Yscale(d.midpoint); })
					   })
                    .attr("x1",function(d){ return Xscale(d.years-(d.years/8)); })
                    .attr("y1",function(d){ return Yscale(d.start); })
                    .attr("x2",function(d){ return Xscale(d.years); })
                    .attr("y2",function(d){ return Yscale(d.midpoint); })
                    .attr("stroke","teal");
					
					
					d3.select("body")
					.select("#percentageSlider")
					.style("display","none");
					
					
					d3.select("body")
					.select("div#yearSlider")
					.transition()
					.duration(1000)
					.each("start",function(){
						d3.select(this)
						.style("opacity", .1);
					})
					.style("opacity", 1)
					.style("display","block");
					
					
					d3.select("body")
					.select("#hexMiddle")
					.select("p")
					.style("font-size",18+"px")
					.style("position","relative")
					.style("top",5+"px")
					.style("right",5+"px")
					.text("EXP");
					
					
					d3.select("body")
					.select("#schoolCircle")
					.style("display","none");
					
					d3.select("body")
					.select("#collegeCircle")
					.style("display","none");
					
					d3.select("body")
					.select("#universityCircle")
					.style("display","none");
					
					d3.select("body")
					.select("#workCircle")
					.transition()
					.duration(500)
					.each("start",function(){
						d3.select(this)
						.style("opacity", .1);
					})
					.style("opacity", 1)
					.style("display","block");
					
					d3.select("body")
					.select("#triRecLine")
					.style("display","none");
					
					d3.select("body")
					.select("#workTriRecLine")
					.transition()
					.duration(500)
					.each("start",function(){
						d3.select(this)
						.style("opacity", .1);
					})
					.style("opacity", 1)
					.style("display","block");
					
					dataset.sort(function(a, b){
					return b.years-a.years
					})
					
					d3.selectAll(".circleDetails")
					.data(dataset)
					.transition()
					.duration(1000)
					.each("start",function(){
						d3.select(this)
						.style("border-radius",50+"%");
					})
					.style("background-color",function(d){ 
							if(d.years==1){
								return c1;} else if(d.years==2){
								return c2;} else if(d.years==3){
								return c3;} else if(d.years==4){
								return c4;} else{ return c5;  }
						})
					.style("border-radius",10+"%");

					d3.selectAll(".circleDetailsPara")
					.data(dataset)
					.transition()
					.duration(1000)
					.each("start",function(){
						d3.select(this)
						.style("opacity", .1);
					})
					.style("opacity", 1)
					.text(function(d){ return d.name; });
					
					
					//Update X axis
					svg.select(".x.axis")
				    	.transition()
				    	.duration(1000)
						.call(Xaxis);
					
					//Update Y axis
					svg.select(".y.axis")
				    	.transition()
				    	.duration(1000)
						.call(Yaxis);


				});
			  
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            //On click, update with new data			
			d3.select("div#education")
				.on("click", function() {
          
					
			var dataset = [
			{ "id": 1, "years": 3, "midpoint": 2012.5, "start" : 2011, "end" : 2014, "name":"P.Obul Reddy Public School", "country":"INDIA", "state":"Andhra Pradesh", "city":"Hyderabad", "percentage":"40", "etype":"school" },
			{ "id": 2, "years": 2, "midpoint": 2010, "start" : 2009, "end" : 2011, "name":"Treveni Talent School", "country":"INDIA", "state":"Andhra Pradesh", "city":"Hyderabad", "percentage":"60", "etype":"school" },
			{ "id": 3, "years": 1, "midpoint": 2009.5, "start" : 2009, "end" : 2010, "name":"Trinity Public School", "country":"INDIA", "state":"Andhra Pradesh", "city":"Hyderabad", "percentage":"50", "etype":"school" },
			{ "id": 4, "years": 4, "midpoint": 2008, "start" : 2006, "end" : 2010, "name":"Dav Public School", "country":"INDIA", "state":"Tamil Nadu", "city":"Chennai", "percentage":"60", "etype":"school" },
			{ "id": 5, "years": 1, "midpoint": 2006.5, "start" : 2006, "end" : 2007, "name":"Sri Chaitanya Junior Kalasala", "country":"INDIA", "state":"Andhra Pradesh", "city":"Hyderabad", "percentage":"80", "etype":"college" },
			{ "id": 6, "years": 3, "midpoint": 2007.5, "start" : 2006, "end" : 2009, "name":"KG Reddy College Of Engineering & Technology", "country":"INDIA", "state":"Andhra Pradesh", "city":"Hyderabad", "percentage":"70", "etype":"college" },
			{ "id": 7, "years": 5, "midpoint": 2012.5, "start" : 2010, "end" : 2015, "name":"Univeristy Of Massachusetts Dartmouth", "country":"USA", "state":"Massachusetts", "city":"New Bedford", "percentage":"90", "etype":"university" },
			{ "id": 8, "years": 2, "midpoint": 2013, "start" : 2012, "end" : 2014, "name":"Univeristy Of California", "country":"USA", "state":"California", "city":"Long Beach", "percentage":"70", "etype":"university" }
			
		];

					
//                 var dataset = [ [3,2012.5,2011,2014], [2,2010,2009,2011] , [1,2009.5,2009,2010], [4,2008,2006,2010], [1,2006.5,2006,2007], [3,2007.5,2006,2009], [5,2012.5,2010,2015], []
//                          ];
                    
                     //Update scale domains
                     Xscale.domain([0, d3.max(dataset,function(d){ return d.years; })]);
                     Yscale.domain([d3.min(dataset,function(d){ return d.start; })-1, d3.max(dataset,function(d){ return (d.end+1); })])
                    
   
					//Update all circles
					svg.selectAll("circle")
					   .data(dataset)
					   .transition()
					   .duration(1000)
					   .each("start", function() {
						   d3.select(this)
						     //.attr("fill", "magenta")
                             //.attr("stroke", "grey")
						     .attr("r", 8);
					   })
  					   
                    .attr("cx", function(d){ return Xscale(d.years); })
                            .attr("cy", function(d){ return Yscale(d.midpoint); })
                    
                    .transition()
					   .duration(1000)
                    
                    
//                        .attr("cx", function(d){ return Xscale(d[0]); })
//                            .attr("cy", function(d){ return Yscale(d[1]); })
                            .attr("r", function(d){ 
                            return (d.years*10);
                            })
                            .attr("fill",function(d){ 
                            if(d.years==1){
                                return c1;} else if(d.years==2){
                                return c2;} else if(d.years==3){
                                return c3;} else if(d.years==4){
                                return c4;} else{ return c5;  }
                            })
                            .attr("stroke","grey")
                            .attr("stroke-width",1);
                    
                    
                    
                    
                    
            svg.selectAll("line#tls")//Top Line Selector
                    .data(dataset)
                    .transition()
					   .duration(1000)
					   .each("start", function() {
						   d3.select(this)
						     .attr("x1", padding+10)
                           .attr("y1",function(d){ return Yscale(d.end+padding); }) //Add (d[3]+padding) and see the magic
						     .attr("x2", padding+10)
                           .attr("y2",function(d){ return Yscale(d.end+padding); }) //Add (d[3]+padding) and see the magic
					   })
                    .attr("x1",Xscale(0.05))
                    .attr("y1",function(d){ return Yscale(d.end); })
                    .attr("x2",function(d){ return Xscale(d.years-(d.years/8)); })
                    .attr("y2",function(d){ return Yscale(d.end); })
                    .attr("stroke","teal");
            
            
            svg.selectAll("line#tcls")//Top Cross Line Selector
                    .data(dataset)
                    .transition()
					   .duration(1000)
					   .each("start", function() {
						   d3.select(this)
						     .attr("x1", padding+10)
                           .attr("y1",function(d){ return Yscale(d.end+padding); }) //Add (d[3]+padding) and see the magic
						     .attr("x2", padding+10)
                           .attr("y2",function(d){ return Yscale(d.midpoint+padding); }) //Add (d[3]+padding) and see the magic
					   })
                    .attr("x1",function(d){ return Xscale(d.years-(d.years/8)); })
                    .attr("y1",function(d){ return Yscale(d.end); })
                    .attr("x2",function(d){ return Xscale(d.years); })
                    .attr("y2",function(d){ return Yscale(d.midpoint); })
                    .attr("stroke","teal");
            
            
            svg.selectAll("line#bls")//Bottom Line Selector
                    .data(dataset)
                    .transition()
					   .duration(1000)
					   .each("start", function() {
						   d3.select(this)
						     .attr("x1", padding+10)
                           .attr("y1",function(d){ return Yscale(d.start); })
						     .attr("x2", padding+10)
                           .attr("y2",function(d){ return Yscale(d.start); })
					   })
                    .attr("x1",Xscale(0.05))
                    .attr("y1",function(d){ return Yscale(d.start); })
                    .attr("x2",function(d){ return Xscale(d.years-(d.years/8)); })
                    .attr("y2",function(d){ return Yscale(d.start); })
                    .attr("stroke","teal");
            
            
            svg.selectAll("line#bcls")//Bottom Cross Line Selector
                    .data(dataset)
                    .transition()
					   .duration(1000)
					   .each("start", function() {
						   d3.select(this)
						     .attr("x1", padding+10)
                           .attr("y1",function(d){ return Yscale(d.start); })
						     .attr("x2", padding+10)
                           .attr("y2",function(d){ return Yscale(d.midpoint); })
					   })
                    .attr("x1",function(d){ return Xscale(d.years-(d.years/8)); })
                    .attr("y1",function(d){ return Yscale(d.start); })
                    .attr("x2",function(d){ return Xscale(d.years); })
                    .attr("y2",function(d){ return Yscale(d.midpoint); })
                    .attr("stroke","teal");
					
					
					d3.select("body")
					.select("div#yearSlider")
					.style("display","none");
					
					d3.select("body")
					.select("#percentageSlider")
					.transition()
					.duration(1000)
					.each("start",function(){
						d3.select(this)
						.style("opacity", .1);
					})
					.style("opacity",1)
					.style("display","block");
					
					d3.select("body")
					.select("#hexMiddle")
					.select("p")
					.style("font-size",25+"px")
					.style("position","relative")
					.style("top",0+"px")
					.style("right",0+"px")
					.text("%");
					
					d3.select("body")
					.select("#workCircle")
					.style("display","none");
					
					d3.select("body")
					.select("#schoolCircle")
					.transition()
					.duration(500)
					.each("start",function(){
						d3.select(this)
						.style("opacity", .1);
					})
					.style("opacity",1)
					.style("display","block");
					
					d3.select("body")
					.select("#collegeCircle")
					.transition()
					.duration(500)
					.each("start",function(){
						d3.select(this)
						.style("opacity", .1);
					})
					.style("opacity",1)
					.style("display","block");
					
					d3.select("body")
					.select("#universityCircle")
					.transition()
					.duration(500)
					.each("start",function(){
						d3.select(this)
						.style("opacity", .1);
					})
					.style("opacity",1)
					.style("display","block");
					
					d3.select("body")
					.select("#triRecLine")
					.transition()
					.duration(500)
					.each("start",function(){
						d3.select(this)
						.style("opacity", .1);
					})
					.style("opacity",1)
					.style("display","block");
					
					d3.select("body")
					.select("#workTriRecLine")
					.style("display","none");
					
					
					
					dataset.sort(function(a, b){
					return b.years-a.years
					})
					
					d3.selectAll(".circleDetails")
					.data(dataset)
					.transition()
					.duration(1000)
					.each("start",function(){
						d3.select(this)
						.style("border-radius",50+"%");
					})
					.style("background-color",function(d){ 
							if(d.years==1){
								return c1;} else if(d.years==2){
								return c2;} else if(d.years==3){
								return c3;} else if(d.years==4){
								return c4;} else{ return c5;  }
						})
					.style("border-radius",10+"%");

					d3.selectAll(".circleDetailsPara")
					.data(dataset)
					.transition()
					.duration(1000)
					.each("start",function(){
						d3.select(this)
						.style("opacity", .1);
					})
					.style("opacity", 1)
					.text(function(d){ return d.name; });
					
					
					
					
            
					//Update X axis
					svg.select(".x.axis")
				    	.transition()
				    	.duration(1000)
						.call(Xaxis);
					
					//Update Y axis
					svg.select(".y.axis")
				    	.transition()
				    	.duration(1000)
						.call(Yaxis);

				});
            



//Education Details
var education_details = [10,20,30,40,50,60,70,80,90,100]; 

d3.select("body")
	.select("#educationDetails")
	.select("#percentageSlider")
	.selectAll("div.test")
	.data(education_details)
	.enter()
	.append("div")
	.attr("class","percentageTicks")
	.append("p")
	.text(function(d){
		return d;
	})

//Work Details
var work_details = [1,2,3,4,5,6,7,8,9,10]; 

d3.select("body")
	.select("#educationDetails")
	.select("#yearSlider")
	.selectAll("div.test1")
	.data(work_details)
	.enter()
	.append("div")
	.attr("class","yearTicks")
	.append("p")
	.text(function(d){
		return d;
	})



