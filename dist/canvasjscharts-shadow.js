(function(){function b(c){return null===c||"undefined"===typeof c}var d=window.CanvasJS||d?window.CanvasJS:null;d&&d.Chart&&(d.Chart.prototype.updateShadowOptions=function(){this.options=b(this.options)?{}:this.options;this.shadowEnabled=b(this.options.shadowEnabled)?!1:!!this.options.shadowEnabled;this.shadowStyle=b(this.options.shadowStyle)?{}:this.options.shadowStyle;this.shadowStyle.offsetX=b(this.options.shadowStyle)||b(this.options.shadowStyle.offsetX)?4:this.options.shadowStyle.offsetX;this.shadowStyle.offsetY=
b(this.options.shadowStyle)||b(this.options.shadowStyle.offsetY)?0:this.options.shadowStyle.offsetY;this.shadowStyle.color=b(this.options.shadowStyle)||b(this.options.shadowStyle.color)?"black":this.options.shadowStyle.color;this.shadowStyle.blurWidth=b(this.options.shadowStyle)||b(this.options.shadowStyle.blurWidth)?4:this.options.shadowStyle.blurWidth},d.Chart.prototype.addShadow=function(){this.ctx.shadowBlur=this.shadowStyle.blurWidth;this.ctx.shadowOffsetX=this.shadowStyle.offsetX;this.ctx.shadowOffsetY=
this.shadowStyle.offsetY;this.ctx.shadowColor=this.shadowStyle.color;for(var c=0;c<this.plotInfo.plotTypes.length;c++)for(var f=this.plotInfo.plotTypes[c],e=0;e<f.plotUnits.length;e++){var a=f.plotUnits[e];"line"===a.type?this.renderLine(a):"stepLine"===a.type?this.renderStepLine(a):"spline"===a.type?this.renderSpline(a):"column"===a.type?this.renderColumn(a):"bar"===a.type?this.renderBar(a):"stackedColumn"===a.type?this.renderStackedColumn(a):"stackedColumn100"===a.type?this.renderStackedColumn100(a):
"stackedBar"===a.type?this.renderStackedBar(a):"stackedBar100"===a.type?this.renderStackedBar100(a):"bubble"===a.type?this.renderBubble(a):"scatter"===a.type?this.renderScatter(a):"candlestick"===a.type?this.renderCandlestick(a):"ohlc"===a.type?this.renderCandlestick(a):"rangeColumn"===a.type?this.renderRangeColumn(a):"error"===a.type?this.renderError(a):"rangeBar"===a.type?this.renderRangeBar(a):"waterfall"===a.type?this.renderWaterfall(a):"boxAndWhisker"===a.type&&this.renderBoxAndWhisker(a)}this.ctx.shadowBlur=
0;this.ctx.shadowOffsetX=0;this.ctx.shadowOffsetY=0;this.ctx.shadowColor="transparent"},d.Chart.prototype.render=function(c){c&&(this.options=c);this._initialize();this.updateShadowOptions();this.setLayout();this.renderElements();this.shadowEnabled&&(this.animationEnabled?console.log("CanvasJS Charts: Shadow Doesn't work when Animation is Enabled"):this.addShadow())})})();