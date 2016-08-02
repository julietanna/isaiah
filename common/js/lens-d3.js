// magic lens JS
var drag = d3.drag()
    .on("drag", function() {
        var clippy = d3.select('#clip rect');
        clippy.attr('x', +clippy.attr('x') + d3.event.dx);
        clippy.attr('y', +clippy.attr('y') + d3.event.dy);
    });

/*
// build out svg - superceeded by hard-coded element in html  
var svg = d3.select("svg")
    .attr("width", w + 2*margin)
    .attr("height", h + 2*margin)
    .append('g')
    .attr('transform', 'translate('+margin+','+margin+')');
*/

var clip = d3.select("svg g").append("svg:clipPath")
    .attr("id", "clip")
    .append("svg:rect")
    .attr('x', 160)
    .attr('y', 25)
    .attr('rx', 15)
    .attr('ry', 15)
    .attr('width', 300)
    .attr('height', 200)
    ;
/*
// background rect -- superceeded by actual image
svg.append('svg:rect')
    .attr('width', w)
    .attr('height', h)
    .attr("clip-path", function(d,i) { return "url(#clip)"; })
    .style("fill", d3.rgb(0, 230, 0))
    .style("stroke", d3.rgb(0, 0, 0))
    .call(drag);

    // adding
    .attr("id", "doc-image")

*/

d3.select("#doc-image")
    .attr("clip-path", function(d,i) { return "url(#clip)"; })
    .call(drag);

