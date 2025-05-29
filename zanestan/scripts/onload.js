var scroller1  = null;
var scrollbar1 = null;
window.onload = function () {
  inithyperlinks();
  scroller1  = new jsScroller1(document.getElementById("Scroller1"), 221, 140);
  scrollbar1 = new jsScrollbar1(document.getElementById("Scrollbar1-Container"), scroller1, false);
  scroller2  = new jsScroller2(document.getElementById("Scroller2"), 205, 154);
  scrollbar2 = new jsScrollbar2(document.getElementById("Scrollbar2-Container"), scroller2, false);
  scroller3  = new jsScroller3(document.getElementById("Scroller3"), 205, 260);
  scrollbar3 = new jsScrollbar3(document.getElementById("Scrollbar3-Container"), scroller3, false);
}