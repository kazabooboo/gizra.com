$(function() {
  $('#slideshow .scene').parallax();
});

var about = {}
about.animation = function() {
  var width = 768,
    height = 500;

  var fill = function(i) {
    if (i === 0) {
      return 'palegreen';
    }
    if (i === 1) {
      return 'coral';
    }
    if (i === 2) {
      return 'white';
    }
    if (i === 3) {
      return 'red';
    }
  };

  var nodes = d3.range(50).map(function(i) {
    return {index: i};
  });

  var force = d3.layout.force()
    .nodes(nodes)
    .size([width, height])
    .on("tick", tick)
    .start();

  var svg = d3.select("#about").append("svg")
    .attr("width", width)
    .attr("height", height);

  var node = svg.selectAll(".node")
    .data(nodes)
    .enter().append("circle")
    .attr("class", "node")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", 1)
    .style("fill", function(d, i) { return fill(i & 3); })
    .style("stroke", function(d, i) { return d3.rgb(fill(i & 3)).darker(2); })
    .call(force.drag)
    .on("mousedown", function() { d3.event.stopPropagation(); });

  svg.style("opacity", 1e-6)
    .transition()
    .duration(1000)
    .style("opacity", 1);

  d3.select("#about")
    .on("mousedown", mousedown)
    .on("mouseover", mousedown);

  function tick(e) {

    // Push different nodes in different directions for clustering.
    var ky = 15 * e.alpha;
    var kx = 10 * e.alpha;

    nodes.forEach(function(o, i) {
      o.y += ky;
      o.x += -kx;
    });

    node.attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
  }

  function mousedown() {
    nodes.forEach(function(o, i) {
      o.x += (Math.random() - .5) * 140;
      o.y += (Math.random() - .5) * 140;
    });
    force.resume();
  }
};

