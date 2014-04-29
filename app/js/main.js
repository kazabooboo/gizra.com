$(function() {
  $('#slideshow .scene').parallax();
});

var about = {}
about.animation = function() {
  var w = 960,
    h = 500,
    nodes = [],
    node;

  var vis = d3.select("#about .background").append("svg")
    .attr("width", '100%')
    .attr("height", '100%');

  var force = d3.layout.force()
    .nodes(nodes)
    .links([])
    .size([w, h]);

  force.on("tick", function(e) {
    vis.selectAll("path")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  });

  setInterval(function(){

    // Add a new random shape.
    nodes.push({
      type: d3.svg.symbolTypes[~~(Math.random() * d3.svg.symbolTypes.length)],
      size: Math.random() * 300 + 100
    });

    // Restart the layout.
    force.start();

    vis.selectAll("path")
      .data(nodes)
      .enter().append("path")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
      .attr("d", d3.svg.symbol()
        .size(function(d) { return d.size; })
        .type(function(d) { return d.type; }))
      .style("fill", "steelblue")
      .style("stroke", "white")
      .style("stroke-width", "1.5px")
      .call(force.drag);

  }, 1000);
};

about.animation();
