
var data = [
  {Year: 2001, phi: 0.03},
  {Year: 2002, phi: 0.04},
  {Year: 2003, phi: 0.01},
  {Year: 2004, phi: 0.02},
  {Year: 2005, phi: 0.04},
  {Year: 2006, phi: 0.04},
  {Year: 2007, phi: 0.02},
  {Year: 2008, phi: 0.01},
  {Year: 2009, phi: 0.02},
  {Year: 2010, phi: 0.05},
  {Year: 2011, phi: 0.04},
  {Year: 2012, phi: 0.08},
  {Year: 2013, phi: 0.15},
  {Year: 2014, phi: 0.13},
  {Year: 2015, phi: 0.19},
  {Year: 2016, phi: 0.18}
];

new d3plus.LinePlot()
  .data(data)
  .y("phi")
  .x("Year")
  .shapeConfig({
      Line: {strokeWidth: 3}
  })
  .yConfig({
    barConfig: {"stroke-width": 2},
    title: "Phi",
    ticks:[]
  })
  .xConfig({
    barConfig: {"stroke-width": 2},
    title: "Year",
    labels: [2000, 2005, 2010, 2015]
    })
  .render();
