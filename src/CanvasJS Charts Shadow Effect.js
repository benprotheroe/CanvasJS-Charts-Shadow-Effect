(function(){
  function isNullOrUndefined(value) {
	return value === null || typeof (value) === "undefined";
  }

  var CanvasJS = window.CanvasJS || CanvasJS ? window.CanvasJS : null;

  if(CanvasJS && CanvasJS.Chart) {
	CanvasJS.Chart.prototype.updateShadowOptions = function() {
	  this.options = !isNullOrUndefined(this.options) ? this.options : {};
	  this.shadowEnabled = !isNullOrUndefined(this.options.shadowEnabled) ? !!this.options.shadowEnabled : false;
	  this.shadowStyle = !isNullOrUndefined(this.options.shadowStyle) ? this.options.shadowStyle : {};

	  this.shadowStyle.offsetX = !isNullOrUndefined(this.options.shadowStyle) && !isNullOrUndefined(this.options.shadowStyle.offsetX) ? this.options.shadowStyle.offsetX : 4;
	  this.shadowStyle.offsetY = !isNullOrUndefined(this.options.shadowStyle) && !isNullOrUndefined(this.options.shadowStyle.offsetY) ? this.options.shadowStyle.offsetY : 0;
	  this.shadowStyle.color = !isNullOrUndefined(this.options.shadowStyle) && !isNullOrUndefined(this.options.shadowStyle.color) ? this.options.shadowStyle.color : "black"; 
	  this.shadowStyle.blurLevel = !isNullOrUndefined(this.options.shadowStyle) && !isNullOrUndefined(this.options.shadowStyle.blurLevel) ? this.options.shadowStyle.blurLevel : 4; 
	}

	CanvasJS.Chart.prototype.addShadow = function() {
	  var chart = this;

	  chart.ctx.shadowBlur = chart.shadowStyle.blurLevel;
	  chart.ctx.shadowOffsetX = chart.shadowStyle.offsetX;
	  chart.ctx.shadowOffsetY = chart.shadowStyle.offsetY;
	  chart.ctx.shadowColor = chart.shadowStyle.color;  

	  for (var i = 0; i < chart.plotInfo.plotTypes.length; i++) {
		var plotType = chart.plotInfo.plotTypes[i];
		for (var j = 0; j < plotType.plotUnits.length; j++) {
		  var plotUnit = plotType.plotUnits[j];

		  if (plotUnit.type === "line")
			this.renderLine(plotUnit);
		  else if (plotUnit.type === "stepLine")
			this.renderStepLine(plotUnit);
		  else if (plotUnit.type === "spline")
			this.renderSpline(plotUnit);
		  else if (plotUnit.type === "column")
			this.renderColumn(plotUnit);
		  else if (plotUnit.type === "bar")
			this.renderBar(plotUnit);
		  else if (plotUnit.type === "stackedColumn")
			this.renderStackedColumn(plotUnit);
		  else if (plotUnit.type === "stackedColumn100")
			this.renderStackedColumn100(plotUnit);
		  else if (plotUnit.type === "stackedBar")
			this.renderStackedBar(plotUnit);
		  else if (plotUnit.type === "stackedBar100")
			this.renderStackedBar100(plotUnit);
		  else if (plotUnit.type === "bubble")
			this.renderBubble(plotUnit);
		  else if (plotUnit.type === "scatter")
			this.renderScatter(plotUnit);
		  else if (plotUnit.type === "candlestick")
			this.renderCandlestick(plotUnit);
		  else if (plotUnit.type === "ohlc")
			this.renderCandlestick(plotUnit);
		  else if (plotUnit.type === "rangeColumn")
			this.renderRangeColumn(plotUnit);
		  else if (plotUnit.type === "error")
			this.renderError(plotUnit);
		  else if (plotUnit.type === "rangeBar")
			this.renderRangeBar(plotUnit);
		  else if (plotUnit.type === "waterfall")
			this.renderWaterfall(plotUnit);
		  else if (plotUnit.type === "boxAndWhisker")
			this.renderBoxAndWhisker(plotUnit);
		}
	  }
	  chart.ctx.shadowBlur = 0;
	  chart.ctx.shadowOffsetX = 0;
	  chart.ctx.shadowOffsetY = 0;
	  chart.ctx.shadowColor = "transparent";
	}

	CanvasJS.Chart.prototype.render = function(options) {
	  if (options)
		this.options = options;

	  this._initialize();
	  this.updateShadowOptions();
	  this.setLayout();
	  this.renderElements();
	  if(this.shadowEnabled) {
		  if(this.animationEnabled)
			  console.log("CanvasJS Charts: Shadow Doesn't work when Animation is Enabled");
		  else
			  this.addShadow();
	  }
	}
  }
})();