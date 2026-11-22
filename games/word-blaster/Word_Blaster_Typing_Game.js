(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Title_Logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Art
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9AA8D0").s().p("AgIBIIAAh+IgwAAIAAgQIBxAAIAAAQIgvAAIAAB+g");
	this.shape.setTransform(122.925,298.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9AA8D0").s().p("AAnBIIgTgfIgNgTQgGgHgDgDQgEgCgFgBIgKgBIgWAAIAABAIgTAAIAAiOIA+AAQAUgBAKAEQAKAEAFAKQAGAKAAALQAAAQgJAKQgKAJgVADQAIAEAEADQAIAIAHALIAZAogAgrgHIApAAQAMAAAHgDQAHgDAEgGQAEgGAAgHQAAgKgHgHQgIgGgQAAIgsAAg");
	this.shape_1.setTransform(110.575,298.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9AA8D0").s().p("AAtBIIgQgsIg7AAIgQAsIgUAAIA3iOIATAAIA7COgAgJgdIgQApIAwAAIgPgmIgJgeQgDAOgFANg");
	this.shape_2.setTransform(96,298.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9AA8D0").s().p("AgIBIIAAh+IgwAAIAAgQIBxAAIAAAQIgvAAIAAB+g");
	this.shape_3.setTransform(84.775,298.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9AA8D0").s().p("AgcBEQgNgFgHgMQgHgLgBgPIASgBQABALAFAGQAFAIAJAEQAKAEALAAQALAAAJgDQAHgDAEgGQAFgFAAgIQAAgGgEgFQgEgFgJgEQgGgCgTgFQgTgEgIgEQgKgFgGgIQgEgIAAgJQAAgLAFgKQAHgJALgFQANgFAOAAQAPAAAMAFQAMAFAGAKQAHAKAAAMIgSACQgBgNgJgIQgIgHgQAAQgRABgHAGQgIAGAAAJQAAAIAFAFQAGAFAWAFQAXAFAJAEQAMAFAGAJQAGAJAAALQAAALgHAKQgGALgMAFQgNAGgPAAQgSAAgOgGg");
	this.shape_4.setTransform(71.9,298.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9AA8D0").s().p("AAVBIIghg1IgMALIAAAqIgSAAIAAiOIASAAIAABQIAogpIAXAAIgnAlIArBCg");
	this.shape_5.setTransform(55.375,298.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9AA8D0").s().p("AgfAoQgNgOAAgaQAAgQAGgMQAFgNAMgGQAKgGANAAQARAAAKAIQAMAJADAQIgRACQgDgKgGgGQgGgFgJAAQgMAAgJAKQgIAJAAAUQAAAVAIAJQAIAKAMAAQAKAAAHgHQAHgGACgNIARACQgDASgMAKQgLAKgRAAQgVAAgMgOg");
	this.shape_6.setTransform(45.05,300.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9AA8D0").s().p("AgIBIIAAhnIARAAIAABngAgIgyIAAgUIARAAIAAAUg");
	this.shape_7.setTransform(37.525,298.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9AA8D0").s().p("AgIBIIAAiOIARAAIAACOg");
	this.shape_8.setTransform(33.025,298.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9AA8D0").s().p("AgfAoQgNgOAAgaQAAgQAGgMQAFgNAMgGQAKgGANAAQARAAAKAIQAMAJADAQIgSACQgCgKgGgGQgGgFgJAAQgMAAgJAKQgIAJAAAUQAAAVAIAJQAIAKAMAAQAKAAAHgHQAHgGACgNIARACQgDASgMAKQgLAKgRAAQgVAAgMgOg");
	this.shape_9.setTransform(26.15,300.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9AA8D0").s().p("AgbA1IAAhmIAQAAIAAAPQAGgLAFgDQAEgEAGAAQAJAAAJAGIgGAQQgGgEgHAAQgGAAgDAEQgFADgCAGQgDAJAAALIAAA2g");
	this.shape_10.setTransform(12.775,300.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9AA8D0").s().p("AgiAoQgOgOAAgaQAAgcAQgOQAOgLASAAQAVAAAOAOQAOAOAAAYQAAATgGAMQgGALgMAHQgLAGgOAAQgVAAgNgOgAgVgdQgJAKAAATQAAAUAJAKQAJAKAMAAQANAAAJgKQAIgKAAgUQAAgTgIgKQgJgKgNAAQgMAAgJAKg");
	this.shape_11.setTransform(3.075,300.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9AA8D0").s().p("AgbA1IAAhmIAQAAIAAAPQAGgLAFgDQAEgEAGAAQAJAAAJAGIgGAQQgGgEgHAAQgGAAgDAEQgFADgCAGQgDAJAAALIAAA2g");
	this.shape_12.setTransform(-10.525,300.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9AA8D0").s().p("AgiAoQgNgOAAgZQAAgZAOgPQANgOAVAAQAUAAANAOQAOAOAAAZIAAAEIhNAAQABARAJAKQAJAJAMAAQAJAAAHgFQAHgGAEgLIASADQgEAQgMAIQgLAJgTAAQgVAAgOgOgAgTgfQgIAIgBAOIA5AAQgBgNgGgHQgIgKgNAAQgLAAgJAIg");
	this.shape_13.setTransform(-20.225,300.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9AA8D0").s().p("AgCBEQgFgDgCgFQgCgFAAgQIAAg7IgNAAIAAgNIANAAIAAgaIAQgLIAAAlIASAAIAAANIgSAAIAAA8IABAKQAAAAABABQAAAAAAAAQABABAAAAQABAAAAABQACABAEAAIAIAAIACAPIgNACQgJAAgFgDg");
	this.shape_14.setTransform(-28.425,298.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9AA8D0").s().p("AAZA1IAAg+QAAgLgCgFQgCgFgGgEQgFgDgHAAQgKAAgIAIQgIAGAAAVIAAA3IgSAAIAAhmIAQAAIAAAOQALgRAVAAQAJAAAIAEQAIADAEAFQAEAGABAHIABARIAAA/g");
	this.shape_15.setTransform(-36.875,300.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9AA8D0").s().p("Ag0BIIAAiOIBmAAIAAAQIhTAAIAAAsIBOAAIAAAQIhOAAIAAAxIBWAAIAAARg");
	this.shape_16.setTransform(-48.825,298.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9AA8D0").s().p("AgbBKIApiTIAOAAIgpCTg");
	this.shape_17.setTransform(-64.075,298.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9AA8D0").s().p("AgiAoQgNgOAAgZQAAgZAOgPQANgOAVAAQAUAAANAOQAOAOAAAZIAAAEIhNAAQABARAJAKQAJAJAMAAQAJAAAHgFQAHgGAEgLIASADQgEAQgMAIQgLAJgTAAQgVAAgOgOgAgTgfQgIAIgBAOIA5AAQgBgNgGgHQgIgKgNAAQgLAAgJAIg");
	this.shape_18.setTransform(-77.975,300.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9AA8D0").s().p("AgfAoQgNgOAAgaQAAgQAFgMQAGgNALgGQAMgGAMAAQARAAALAIQALAJACAQIgRACQgCgKgGgGQgGgFgJAAQgMAAgJAKQgIAJAAAUQAAAVAIAJQAIAKAMAAQAKAAAHgHQAHgGACgNIARACQgCASgMAKQgMAKgRAAQgUAAgNgOg");
	this.shape_19.setTransform(-88.2,300.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9AA8D0").s().p("AglAuQgKgJAAgNQAAgHAEgGQADgHAGgEQAGgCAHgCIAPgDQAVgDAKgDIAAgFQAAgKgFgFQgHgGgNAAQgMAAgGAFQgFAEgDALIgRgCQACgLAFgHQAGgHAKgEQAKgDAMAAQAOAAAIADQAIADAEAFQAEAEACAIIAAAQIAAAWQAAAZACAGQABAHADAGIgSAAQgDgGgBgHQgKAIgJAEQgIADgKAAQgRAAgJgIgAgDAGQgLACgEACQgFACgCAEQgDADAAAFQAAAHAGAFQAFAEAKAAQAJAAAIgEQAIgFAEgHQADgGAAgMIAAgGQgKAEgSACg");
	this.shape_20.setTransform(-99.125,300.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9AA8D0").s().p("AgsBJIAAiOIAQAAIAAANQAGgIAHgEQAHgEAKAAQAMAAAKAHQALAHAFAMQAFANAAAPQAAAQgFALQgGANgLAHQgLAHgMAAQgIAAgGgEQgIgEgEgFIAAAygAgTgvQgJAKAAAUQAAATAIAKQAIAJAMAAQAKAAAJgKQAJgKgBgTQABgUgJgKQgIgKgLAAQgKAAgJALg");
	this.shape_21.setTransform(-109.9,302.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9AA8D0").s().p("AgbBEQgNgFgIgMQgIgLAAgPIASgBQABALAFAGQAFAIAJAEQAKAEALAAQALAAAIgDQAIgDAFgGQADgFAAgIQABgGgEgFQgEgFgJgEQgGgCgSgFQgUgEgIgEQgLgFgEgIQgGgIAAgJQAAgLAHgKQAGgJAMgFQAMgFAOAAQAPAAAMAFQAMAFAGAKQAHAKABAMIgSACQgCgNgIgIQgJgHgQAAQgQABgJAGQgHAGgBAJQAAAIAHAFQAFAFAWAFQAXAFAJAEQAMAFAGAJQAGAJAAALQAAALgGAKQgHALgNAFQgLAGgQAAQgTAAgMgGg");
	this.shape_22.setTransform(-122.45,298.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF8A8A").s().p("AgOBPIAAgeIAdAAIAAAegAgIAmIgHhPIAAglIAfAAIAAAlIgIBPg");
	this.shape_23.setTransform(188.475,80.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF8A8A").s().p("Ag3BQIAAicIAcAAIAAAQQAGgJAKgFQAJgFAKAAQAUAAAOAPQANAQAAAcQAAAcgNAPQgOAQgUAAQgJAAgHgEQgIgDgJgJIAAA5gAgSgvQgGAJgBARQAAATAIAIQAIAJAJAAQALAAAHgJQAHgGAAgUQAAgSgHgJQgHgJgLAAQgKAAgIAJg");
	this.shape_24.setTransform(178.45,84.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF8A8A").s().p("AgOBPIAAhxIAdAAIAABxgAgOgyIAAgcIAdAAIAAAcg");
	this.shape_25.setTransform(168.4,80.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF8A8A").s().p("AAWBPIAAg9QAAgRgCgEQgCgFgEgDQgFgDgGAAQgGAAgGAEQgGADgDAHQgDAHAAAPIAAA5IgeAAIAAidIAeAAIAAA6QAPgRATAAQAKAAAJAEQAIAEAFAGQAEAGABAHQACAHAAAPIAABDg");
	this.shape_26.setTransform(158.6,80.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF8A8A").s().p("AgiAyQgOgJgEgRIAegEQACAJAGAEQAGAFAKAAQALAAAGgFQAEgCAAgGQAAgDgCgCQgCgCgIgCQgkgIgJgHQgOgIAAgQQAAgPAMgLQAMgKAYAAQAXABALAHQALAIAFAOIgdAGQgCgHgFgDQgFgEgJAAQgLAAgFAEQgEABAAAEQAAADADADQAEADAXAFQAYAGAKAIQAJAHAAAOQAAAQgNALQgNAMgZgBQgXAAgNgJg");
	this.shape_27.setTransform(145.425,82.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF8A8A").s().p("AgkA6IAAhxIAcAAIAAAQQAHgLAFgEQAFgDAIAAQAKAAAKAFIgKAbQgHgFgGAAQgHAAgFADQgDAEgCAJQgDAJAAAcIAAAjg");
	this.shape_28.setTransform(130.1,82.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF8A8A").s().p("AgiA1QgJgFgEgJQgEgJAAgQIAAhHIAeAAIAAA0QAAAXACAGQABAFAFADQAFADAGAAQAHAAAGgEQAGgEADgGQABgHAAgXIAAgwIAfAAIAABxIgcAAIAAgRQgHAJgJAFQgJAFgMAAQgLAAgKgFg");
	this.shape_29.setTransform(118.2,82.575);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF8A8A").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgHAQgBQAaAAAQARQARARAAAZQAAAZgRARQgRASgZgBQgPABgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_30.setTransform(104.825,82.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF8A8A").s().p("AgwBOIgCgXIAMABQALAAAFgGQAFgGADgKIgshxIAgAAIAbBQIAahQIAgAAIgpBsIgHAUQgEAKgDAGIgIAIQgEADgHACQgHACgJAAQgIAAgJgCg");
	this.shape_31.setTransform(91.825,84.775);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF8A8A").s().p("AAWBPIAAg9QAAgRgCgEQgCgFgEgDQgFgDgGAAQgHAAgFAEQgGADgDAHQgCAHgBAPIAAA5IgeAAIAAidIAeAAIAAA6QAPgRATAAQALAAAIAEQAIAEAFAGQAEAGABAHQACAHAAAPIAABDg");
	this.shape_32.setTransform(73,80.275);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF8A8A").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgPAZgBQAUAAAMAKQANAJAFARIgeAGQgBgJgGgFQgEgEgJAAQgKAAgHAIQgHAIAAASQAAATAHAJQAHAIALAAQAIAAAFgFQAGgFACgMIAeAGQgFATgNALQgNAKgWAAQgYAAgPgPg");
	this.shape_33.setTransform(60.3,82.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF8A8A").s().p("AgqAyQgLgKABgOQgBgKAFgHQAFgIAIgDQAIgEAQgDQAUgEAIgDIAAgEQAAgIgEgEQgFgDgLAAQgHAAgFADQgEADgDAHIgcgEQAFgRAMgHQAKgJAXAAQATABAKAEQAKAFAEAIQAEAGAAAVIAAAiQgBAPACAGQABAIAFAIIgfAAIgCgJIgBgDQgIAHgJAEQgHAEgLgBQgRAAgKgJgAAAAHQgNACgDADQgHAFAAAFQAAAHAGAEQAEAGAIAAQAHgBAHgFQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_34.setTransform(47.9,82.45);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF8A8A").s().p("AgpAoQgLgQAAgXQAAgcAPgPQAOgQAXgBQAZAAAOARQAPARgBAiIhKAAQAAANAHAIQAHAHAJAAQAHAAAFgEQAFgDADgJIAeAEQgGASgNAIQgMAIgTAAQgdAAgOgTgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJAAQgJAAgGAGg");
	this.shape_35.setTransform(35.5258,82.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF8A8A").s().p("AgkA6IAAhxIAcAAIAAAQQAHgLAFgEQAFgDAIAAQAKAAAKAFIgJAbQgIgFgHAAQgGAAgEADQgEAEgCAJQgDAJAAAcIAAAjg");
	this.shape_36.setTransform(26.1,82.325);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF8A8A").s().p("AgwBOIgCgXIAMABQALAAAFgGQAFgGADgKIgshxIAgAAIAbBQIAahQIAgAAIgpBsIgHAUQgEAKgDAGIgIAIQgEADgHACQgHACgJAAQgIAAgJgCg");
	this.shape_37.setTransform(8.625,84.775);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF8A8A").s().p("AA1A6IAAhAQAAgRgDgFQgEgGgIAAQgHAAgGAEQgFADgDAIQgCAHAAAPIAAA3IgdAAIAAg9QAAgRgBgFQgCgFgEgCQgDgCgGAAQgHAAgFADQgGAEgCAHQgDAHAAAQIAAA3IgeAAIAAhxIAcAAIAAAQQAPgSAUAAQAMAAAHAEQAHAFAGAJQAHgJAJgFQAJgEAKAAQAMAAAIAFQAKAFADAKQAEAHAAAQIAABIg");
	this.shape_38.setTransform(-7.2,82.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF8A8A").s().p("AgpAoQgLgQAAgXQAAgcAPgPQAOgQAXgBQAZAAAOARQAPARgBAiIhKAAQAAANAHAIQAHAHAJAAQAHAAAFgEQAFgDADgJIAeAEQgGASgNAIQgMAIgTAAQgdAAgOgTgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJAAQgJAAgGAGg");
	this.shape_39.setTransform(-23.1742,82.45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF8A8A").s().p("AAWA6IAAg6QAAgRgCgGQgCgFgFgDQgDgDgHAAQgHAAgGAEQgGAEgDAHQgCAHAAATIAAAzIgeAAIAAhxIAcAAIAAARQAPgTAVAAQALAAAIADQAIAEAFAFQADAGACAHQACAHAAANIAABGg");
	this.shape_40.setTransform(-35.9,82.325);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF8A8A").s().p("AgpAoQgLgQAAgXQAAgcAPgPQAOgQAXgBQAZAAAOARQAPARgBAiIhKAAQAAANAHAIQAHAHAJAAQAHAAAFgEQAFgDADgJIAeAEQgGASgNAIQgMAIgTAAQgdAAgOgTgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJAAQgJAAgGAGg");
	this.shape_41.setTransform(-48.8742,82.45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF8A8A").s().p("AgwBOIgCgXIAMABQALAAAFgGQAFgGADgKIgshxIAgAAIAbBQIAahQIAgAAIgpBsIgHAUIgHAQIgIAIQgEADgHACQgHACgJAAQgIAAgJgCg");
	this.shape_42.setTransform(-67.225,84.775);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF8A8A").s().p("AAWA6IAAg6QAAgRgCgGQgCgFgEgDQgFgDgGAAQgHAAgGAEQgGAEgDAHQgBAHAAATIAAAzIgfAAIAAhxIAcAAIAAARQAPgTAWAAQAJAAAJADQAIAEAEAFQAEAGADAHQABAHAAANIAABGg");
	this.shape_43.setTransform(-79.95,82.325);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF8A8A").s().p("AgqAyQgLgKAAgOQAAgKAFgHQAFgIAIgDQAIgEAQgDQAUgEAIgDIAAgEQAAgIgEgEQgEgDgMAAQgIAAgEADQgEADgDAHIgbgEQAEgRAMgHQAKgJAXAAQATABAKAEQAKAFAEAIQAEAGAAAVIAAAiQAAAPABAGQABAIAEAIIgeAAIgCgJIgBgDQgIAHgJAEQgIAEgJgBQgTAAgJgJgAAAAHQgMACgFADQgFAFAAAFQAAAHAEAEQAFAGAIAAQAGgBAIgFQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_44.setTransform(-92.8,82.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF8A8A").s().p("AgEBMQgHgDgDgEQgDgFgBgHIgBgWIAAgwIgOAAIAAgYIAOAAIAAgWIAegSIAAAoIAUAAIAAAYIgUAAIAAAtIAAARQAAAAAAAAQABABAAAAQAAABABAAQAAABABAAQACABADAAQAEAAAIgDIACAYQgKAFgNgBQgJABgFgDg");
	this.shape_45.setTransform(-108.7,80.55);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF8A8A").s().p("AgpAoQgLgQAAgXQAAgcAPgPQAOgQAXgBQAZAAAOARQAPARgBAiIhKAAQAAANAHAIQAHAHAJAAQAHAAAFgEQAFgDADgJIAeAEQgGASgNAIQgMAIgTAAQgdAAgOgTgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJAAQgJAAgGAGg");
	this.shape_46.setTransform(-118.6242,82.45);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF8A8A").s().p("AgOBPIAAidIAdAAIAACdg");
	this.shape_47.setTransform(-127.65,80.275);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF8A8A").s().p("AgEBMQgGgDgDgEQgDgFgCgHIgBgWIAAgwIgNAAIAAgYIANAAIAAgWIAegSIAAAoIAUAAIAAAYIgUAAIAAAtIAAARQAAAAAAAAQABABAAAAQAAABABAAQAAABABAAQACABADAAQAEAAAIgDIACAYQgKAFgOgBQgHABgGgDg");
	this.shape_48.setTransform(-140.5,80.55);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF8A8A").s().p("AgKAcIgFgcIAAgbIAfAAIAAAbIgEAcg");
	this.shape_49.setTransform(-146.8,75.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF8A8A").s().p("AAWA6IAAg6QAAgRgCgGQgCgFgFgDQgDgDgHAAQgHAAgGAEQgGAEgDAHQgCAHAAATIAAAzIgeAAIAAhxIAcAAIAAARQAPgTAVAAQALAAAIADQAIAEAEAFQAFAGABAHQACAHAAANIAABGg");
	this.shape_50.setTransform(-156.15,82.325);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF8A8A").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgHAQgBQAaAAAQARQARARAAAZQAAAZgRARQgRASgZgBQgPABgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_51.setTransform(-169.575,82.45);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF8A8A").s().p("AhBBPIAAidIA6AAQATAAAKADQAOAEAKALQAJAKAGAPQAFAPAAAWQAAATgFAOQgGARgLALQgIAIgOAEQgKAEgRAAgAghA0IAXAAQANAAAFgBQAJgCAFgFQAEgEAEgLQADgLAAgSQAAgRgDgKQgDgKgGgFQgGgGgJgCQgGgBgTAAIgOAAg");
	this.shape_52.setTransform(-184.05,80.275);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgkAsQgPgQgBgbQABgcAPgQQAOgQAXAAQAWAAAPAQQAPAPAAAcIAAAFIhVAAQABATAKAJQAKAKANAAQAKABAIgGQAHgFAFgMIAUABQgEASgNAKQgNAJgUAAQgYAAgOgPgAgUgiQgJAJgCAPIBAAAQgCgOgGgHQgJgMgPAAQgNAAgIAJg");
	this.shape_53.setTransform(176.35,46.45);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AggAyQgLgJgDgSIATgDQABALAIAHQAHAFAMAAQAOAAAGgEQAGgGAAgIQAAgGgFgEQgEgCgQgEQgUgGgJgDQgIgEgEgHQgEgGAAgJQAAgHADgHQAEgHAGgDQAEgEAIgDQAIgBAJgBQAMABAKADQAKAEAFAHQAFAGACAMIgTACQgBgJgGgFQgHgFgKAAQgNAAgGAEQgGAFAAAGQAAADADADQACAEAFACIAQAFQAVAGAIADQAIACAFAHQAEAGAAAKQAAAKgFAIQgGAJgLAFQgKAFgOgBQgVABgMgKg");
	this.shape_54.setTransform(164.725,46.45);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgZA2QgJgDgEgGQgEgGgCgJQgBgFAAgNIAAhFIATAAIAAA+QAAAPABAFQACAIAGAEQAGAFAJAAQAHAAAIgFQAIgEADgIQADgIAAgOIAAg8IATAAIAABxIgRAAIAAgRQgNATgWAAQgKAAgJgEg");
	this.shape_55.setTransform(153.075,46.575);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgpAyQgKgJAAgOQAAgJADgGQAEgIAGgDQAHgDAHgDIASgCQAWgEALgDIAAgGQAAgMgFgEQgIgGgOAAQgNgBgHAFQgGAFgEAMIgSgCQADgMAGgIQAFgHAMgFQALgEANAAQAPABAJADQAJADAFAFQADAGADAIIABASIAAAYQAAAbABAHQABAIADAGIgUAAQgCgGgBgIQgLAJgKAEQgJAEgLgBQgTABgKgKgAgEAHQgMACgFACQgEACgDAFQgDADAAAGQAAAHAGAFQAGAFALABQAKgBAJgFQAJgEADgJQAEgGAAgNIAAgHQgKAEgVADg");
	this.shape_56.setTransform(140.85,46.45);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("Ag7BPIAAidIA7AAQAPAAAJACQALACAIAFQAIAGAEAJQAFAKAAAMQAAAUgNANQgNAOghAAIgnAAIAABAgAgmgDIAnAAQAVAAAIgHQAJgIgBgOQABgJgFgHQgFgHgJgDQgEgBgPAAIgnAAg");
	this.shape_57.setTransform(127.85,44.275);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgzAhIAAgSIBnAAIAAASgAgzgOIAAgSIBnAAIAAASg");
	this.shape_58.setTransform(107.6,44.375);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgkBHQgQgKgIgUQgJgUAAgVQAAgZAKgSQAJgSARgKQASgJAUAAQAYAAAQAMQAPAMAHAVIgVAFQgFgRgLgIQgKgIgQAAQgRAAgMAJQgMAJgFAPQgFAOAAAQQAAATAGAPQAFAPANAHQANAIANAAQASAAAMgKQALgLAFgTIAVAFQgHAZgRAOQgRANgZAAQgYAAgQgKg");
	this.shape_59.setTransform(87.25,44.275);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgeBLQgPgGgIgMQgIgNgBgQIAUgCQACAMAEAIQAGAHALAFQAKAFANAAQALAAAKgEQAIgDAGgGQADgHAAgHQAAgHgDgGQgFgFgKgEQgGgDgVgFQgVgFgKgEQgKgGgGgIQgFgJAAgLQAAgMAGgKQAHgLANgFQANgFAQAAQAQAAAOAFQANAGAIALQAGALABAOIgUABQgCgPgJgHQgJgIgSAAQgSAAgJAHQgJAHAAAKQAAAIAHAGQAFAFAZAGQAaAGAJAEQAOAFAGAKQAGAKAAAMQABANgIALQgGALgOAGQgNAGgRAAQgVAAgOgGg");
	this.shape_60.setTransform(71.8,44.275);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("Ag6BPIAAidIBxAAIAAATIhcAAIAAAwIBWAAIAAASIhWAAIAAA1IBgAAIAAATg");
	this.shape_61.setTransform(57.525,44.275);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgfA/IAAAOIgSAAIAAicIATAAIAAA4QANgPASAAQAKAAAKAEQAJAFAHAHQAFAIAEAKQAEAKgBANQAAAdgOAQQgOAQgVAAQgTAAgMgRgAgWgLQgJALAAATQAAAVAGAJQAJAPAQAAQALAAAJgLQAKgLgBgWQAAgVgIgLQgJgKgMgBQgMAAgKAMg");
	this.shape_62.setTransform(19.65,44.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AA6A6IAAhHQAAgLgCgFQgCgFgFgEQgFgDgGAAQgMAAgIAIQgIAIAAASIAABBIgSAAIAAhJQAAgNgFgGQgFgHgLAAQgIAAgHAFQgHAEgDAIQgDAIAAAQIAAA6IgTAAIAAhxIARAAIAAAQQAFgIAJgFQAJgFAMAAQAMAAAIAFQAIAFADAKQANgUAWAAQARAAAJAJQAJAJAAAUIAABNg");
	this.shape_63.setTransform(4.075,46.325);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgmAsQgOgPAAgdQAAgeARgQQAPgNAUAAQAYAAAPAQQAOAPAAAbQAAAWgGAMQgHANgMAGQgNAIgPgBQgXAAgPgPgAgXggQgKALAAAVQAAAWAKALQAKALANgBQAOAAAKgLQAKgKAAgWQAAgVgKgKQgKgMgOABQgNAAgKAKg");
	this.shape_64.setTransform(-11.275,46.45);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgfA/IAAAOIgSAAIAAicIATAAIAAA4QANgPASAAQAKAAAKAEQAJAFAHAHQAFAIAEAKQAEAKgBANQAAAdgOAQQgOAQgVAAQgTAAgMgRgAgWgLQgJALAAATQAAAVAGAJQAJAPAQAAQALAAAJgLQAKgLgBgWQAAgVgIgLQgJgKgMgBQgMAAgKAMg");
	this.shape_65.setTransform(-23.2,44.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("Ag7BPIAAidIA7AAQAPAAAJACQALACAIAFQAIAGAEAJQAFAKAAAMQAAAUgNANQgNAOghAAIgnAAIAABAgAgmgDIAnAAQAVAAAIgHQAJgIgBgOQABgJgFgHQgFgHgJgDQgEgBgPAAIgnAAg");
	this.shape_66.setTransform(-42.25,44.275);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AA3BPIAAiDIguCDIgSAAIgtiFIAACFIgUAAIAAidIAfAAIAmBvIAGAXIAIgZIAmhtIAcAAIAACdg");
	this.shape_67.setTransform(-59.15,44.275);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("Ag6BPIAAidIBxAAIAAATIhcAAIAAAwIBWAAIAAASIhWAAIAAA1IBgAAIAAATg");
	this.shape_68.setTransform(-75.325,44.275);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgzAhIAAgSIBnAAIAAASgAgzgOIAAgSIBnAAIAAASg");
	this.shape_69.setTransform(-95.5,44.375);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AArBPIgVghIgPgWQgGgHgDgDQgFgDgFgBIgLgBIgZAAIAABGIgUAAIAAidIBEAAQAVAAALAFQALAEAHAKQAGALAAANQAAARgKALQgLALgXADIANAIQAJAIAIANIAbArgAgwgIIAtAAQANAAAJgDQAIgDAEgHQAEgGAAgIQAAgLgIgHQgIgHgSAAIgxAAg");
	this.shape_70.setTransform(-115.225,44.275);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("Ag6BPIAAidIBxAAIAAATIhcAAIAAAwIBWAAIAAASIhWAAIAAA1IBgAAIAAATg");
	this.shape_71.setTransform(-130.925,44.275);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgKBPIAAiKIgzAAIAAgTIB8AAIAAATIg0AAIAACKg");
	this.shape_72.setTransform(-145.25,44.275);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAoBPIhSh7IAAB7IgTAAIAAidIAVAAIBSB7IAAh7IAUAAIAACdg");
	this.shape_73.setTransform(-160,44.275);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("Ag6BPIAAidIBxAAIAAATIhcAAIAAAwIBWAAIAAASIhWAAIAAA1IBgAAIAAATg");
	this.shape_74.setTransform(-174.925,44.275);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgCBKQgGgDgCgFQgDgGAAgRIAAhBIgOAAIAAgPIAOAAIAAgcIATgMIAAAoIATAAIAAAPIgTAAIAABCQAAAIABADIADADQACACAEAAIAJgBIADARIgPACQgKAAgFgEg");
	this.shape_75.setTransform(171.375,10.525);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgJBPIAAhxIATAAIAABxgAgJg3IAAgXIATAAIAAAXg");
	this.shape_76.setTransform(165.725,10.275);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgCBKQgGgDgCgFQgDgGAAgRIAAhBIgOAAIAAgPIAOAAIAAgcIATgMIAAAoIATAAIAAAPIgTAAIAABCQAAAIABADIADADQACACAEAAIAJgBIADARIgPACQgKAAgFgEg");
	this.shape_77.setTransform(154.275,10.525);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgmAsQgOgPAAgdQAAgfARgPQAPgNAUAAQAYAAAPAQQAOAPAAAcQAAAUgGANQgHAMgMAIQgNAGgPAAQgXAAgPgPgAgXggQgKALAAAVQAAAWAKALQAKALANAAQAOAAAKgMQAKgKAAgWQAAgVgKgLQgKgLgOAAQgNAAgKALg");
	this.shape_78.setTransform(144.925,12.45);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgmAsQgOgPAAgdQAAgfARgPQAPgNAUAAQAYAAAPAQQAOAPAAAcQAAAUgGANQgHAMgMAIQgNAGgPAAQgXAAgPgPgAgXggQgKALAAAVQAAAWAKALQAKALANAAQAOAAAKgMQAKgKAAgWQAAgVgKgLQgKgLgOAAQgNAAgKALg");
	this.shape_79.setTransform(132.675,12.45);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAbBPIAAhJQAAgNgGgHQgGgGgMAAQgIAAgHAEQgIAFgDAHQgDAHAAANIAAA/IgTAAIAAidIATAAIAAA5QAOgQATAAQAMAAAKAFQAJAFAFAJQADAJAAAPIAABJg");
	this.shape_80.setTransform(120.45,10.275);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AggAyQgLgJgDgSIATgDQABALAIAGQAHAGAMABQAOgBAGgFQAGgFAAgHQAAgHgFgEQgEgCgQgEQgUgGgJgDQgIgEgEgGQgEgIAAgIQAAgIADgGQAEgHAGgEQAEgDAIgDQAIgCAJAAQAMABAKADQAKAEAFAHQAFAGACAMIgTACQgBgJgGgFQgHgFgKAAQgNAAgGAEQgGAFAAAGQAAADADADQACAEAFACIAQAFQAVAFAIAEQAIADAFAGQAEAHAAAJQAAAKgFAIQgGAJgLAFQgKAFgOgBQgVAAgMgJg");
	this.shape_81.setTransform(108.775,12.45);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgmAsQgOgPAAgdQAAgfARgPQAPgNAUAAQAYAAAPAQQAOAPAAAcQAAAUgGANQgHAMgMAIQgNAGgPAAQgXAAgPgPgAgXggQgKALAAAVQAAAWAKALQAKALANAAQAOAAAKgMQAKgKAAgWQAAgVgKgLQgKgLgOAAQgNAAgKALg");
	this.shape_82.setTransform(91.075,12.45);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgCBKQgGgDgCgFQgDgGAAgRIAAhBIgOAAIAAgPIAOAAIAAgcIATgMIAAAoIATAAIAAAPIgTAAIAABCQAAAIABADIADADQACACAEAAIAJgBIADARIgPACQgKAAgFgEg");
	this.shape_83.setTransform(82.075,10.525);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgYBIQgMgHgGgNQgGgOgBgSQABgQAFgNQAGgPAMgGQAKgIAPAAQAJAAAIAEQAIAFAFAGIAAg4IATAAIAACdIgSAAIAAgPQgLARgUAAQgNAAgLgIgAgUgLQgJAKAAAVQABAWAIAMQAKAKAMAAQAMAAAJgKQAJgKAAgWQAAgWgJgLQgJgLgNAAQgNAAgIALg");
	this.shape_84.setTransform(66.25,10.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgeA6IAAhxIARAAIAAARQAHgMAFgEQAFgDAHAAQAKAAAKAGIgHASQgHgEgHAAQgHAAgEADQgEAEgDAHQgDAKAAANIAAA6g");
	this.shape_85.setTransform(57.75,12.325);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgmAsQgOgPAAgdQAAgfARgPQAPgNAUAAQAYAAAPAQQAOAPAAAcQAAAUgGANQgHAMgMAIQgNAGgPAAQgXAAgPgPgAgXggQgKALAAAVQAAAWAKALQAKALANAAQAOAAAKgMQAKgKAAgWQAAgVgKgLQgKgLgOAAQgNAAgKALg");
	this.shape_86.setTransform(47.025,12.45);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAXA5IgShDIgFgUIgWBXIgUAAIgjhxIAUAAIASBBIAHAZIAGgYIAShCIATAAIARBBIAGAWIAGgWIAUhBIASAAIgjBxg");
	this.shape_87.setTransform(32.925,12.45);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgqAyQgJgJgBgOQAAgIAFgIQADgGAHgEQAFgDAIgDIARgCQAXgEALgEIAAgEQAAgMgFgFQgIgGgOgBQgNABgGAEQgHAFgDAMIgTgDQACgMAHgHQAFgHAMgEQAKgFAOAAQAPABAJADQAJADAFAGQADAEACAJIABASIAAAYQAAAbABAIQACAGAEAHIgUAAQgDgGgCgIQgKAJgKAEQgJADgLAAQgUAAgKgJgAgDAHQgNACgEACQgFACgDAFQgDADAAAGQAAAHAGAFQAGAGALAAQAKAAAJgGQAIgEAFgJQADgGAAgNIAAgHQgLAEgTADg");
	this.shape_88.setTransform(12.75,12.45);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgQBQIAAhiIgRAAIAAgPIARAAIAAgMQAAgLACgHQADgHAHgEQAHgFAMAAQAJAAAKACIgEAQIgLgBQgJAAgDAFQgEADAAAKIAAALIAWAAIAAAPIgWAAIAABig");
	this.shape_89.setTransform(-1.95,10.15);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgmAsQgOgPAAgdQAAgfARgPQAPgNAUAAQAYAAAPAQQAOAPAAAcQAAAUgGANQgHAMgMAIQgNAGgPAAQgXAAgPgPgAgXggQgKALAAAVQAAAWAKALQAKALANAAQAOAAAKgMQAKgKAAgWQAAgVgKgLQgKgLgOAAQgNAAgKALg");
	this.shape_90.setTransform(-11.675,12.45);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AggAyQgLgJgDgSIATgDQABALAIAGQAHAGAMABQAOgBAGgFQAGgFAAgHQAAgHgFgEQgEgCgQgEQgUgGgJgDQgIgEgEgGQgEgIAAgIQAAgIADgGQAEgHAGgEQAEgDAIgDQAIgCAJAAQAMABAKADQAKAEAFAHQAFAGACAMIgTACQgBgJgGgFQgHgFgKAAQgNAAgGAEQgGAFAAAGQAAADADADQACAEAFACIAQAFQAVAFAIAEQAIADAFAGQAEAHAAAJQAAAKgFAIQgGAJgLAFQgKAFgOgBQgVAAgMgJg");
	this.shape_91.setTransform(-29.425,12.45);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgeA6IAAhxIARAAIAAARQAHgMAFgEQAFgDAHAAQAKAAAKAGIgHASQgHgEgHAAQgHAAgEADQgEAEgDAHQgDAKAAANIAAA6g");
	this.shape_92.setTransform(-37.65,12.325);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgkAsQgQgQABgbQgBgcAQgQQAOgQAXAAQAWAAAPAQQAPAQAAAbIAAAFIhVAAQABASAKALQAJAJAOABQALAAAHgGQAHgGAFgMIAUACQgEASgNAKQgNAKgUgBQgYAAgOgPgAgVgiQgIAJgCAPIA/AAQgBgOgGgIQgJgLgPAAQgNAAgJAJg");
	this.shape_93.setTransform(-48.4,12.45);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgCBKQgGgDgCgFQgDgGAAgRIAAhBIgOAAIAAgPIAOAAIAAgcIATgMIAAAoIATAAIAAAPIgTAAIAABCQAAAIABADIADADQACACAEAAIAJgBIADARIgPACQgKAAgFgEg");
	this.shape_94.setTransform(-57.375,10.525);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgCBKQgGgDgCgFQgDgGAAgRIAAhBIgOAAIAAgPIAOAAIAAgcIATgMIAAAoIATAAIAAAPIgTAAIAABCQAAAIABADIADADQACACAEAAIAJgBIADARIgPACQgKAAgFgEg");
	this.shape_95.setTransform(-63.475,10.525);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgkAsQgPgQgBgbQABgcAPgQQAOgQAXAAQAWAAAPAQQAPAQAAAbIAAAFIhVAAQACASAJALQAKAJANABQALAAAHgGQAHgGAFgMIAUACQgEASgNAKQgNAKgUgBQgYAAgOgPgAgUgiQgJAJgBAPIA/AAQgCgOgGgIQgJgLgPAAQgNAAgIAJg");
	this.shape_96.setTransform(-72.85,12.45);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_97.setTransform(-81.425,10.275);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgkAsQgQgQABgbQgBgcAQgQQAOgQAXAAQAWAAAPAQQAPAQAAAbIAAAFIhVAAQABASAKALQAJAJAOABQALAAAHgGQAHgGAFgMIAUACQgEASgNAKQgNAKgUgBQgYAAgOgPgAgVgiQgIAJgCAPIA/AAQgBgOgGgIQgJgLgPAAQgNAAgJAJg");
	this.shape_98.setTransform(-96.1,12.45);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAbBPIAAhJQAAgNgGgHQgGgGgMAAQgIAAgHAEQgHAFgEAHQgDAHAAANIAAA/IgUAAIAAidIAUAAIAAA5QAOgQATAAQAMAAAKAFQAKAFAEAJQADAJAAAPIAABJg");
	this.shape_99.setTransform(-108.3,10.275);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgCBKQgGgDgCgFQgDgGAAgRIAAhBIgOAAIAAgPIAOAAIAAgcIATgMIAAAoIATAAIAAAPIgTAAIAABCQAAAIABADIADADQACACAEAAIAJgBIADARIgPACQgKAAgFgEg");
	this.shape_100.setTransform(-117.325,10.525);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgkAsQgPgQgBgbQABgcAPgQQAOgQAXAAQAWAAAPAQQAPAQAAAbIAAAFIhVAAQABASAKALQAKAJANABQAKAAAIgGQAHgGAFgMIAUACQgEASgNAKQgNAKgUgBQgYAAgOgPgAgUgiQgJAJgCAPIBAAAQgCgOgGgIQgJgLgPAAQgNAAgIAJg");
	this.shape_101.setTransform(-132.8,12.45);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgxBQIAAidIASAAIAAAPQAHgJAHgEQAIgEAKAAQAPAAALAIQALAHAGAOQAGAOgBAPQAAASgFANQgHAOgMAHQgMAIgNAAQgJAAgHgEQgIgEgFgHIAAA4gAgWg0QgJALAAAWQAAAVAJALQAJAKANAAQALAAAJgKQAKgMAAgWQAAgVgJgLQgJgLgMAAQgMAAgKAMg");
	this.shape_102.setTransform(-144.7,14.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgpBOIgCgSIALABQAGAAAEgCIAGgGIAGgOIACgFIgrhxIAVAAIAXBCIAIAZQADgMAFgNIAYhCIATAAIgrBzIgKAaQgFAJgHAFQgGAEgKAAQgFAAgHgCg");
	this.shape_103.setTransform(-156.525,14.775);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgKBPIAAiKIg0AAIAAgTIB8AAIAAATIg0AAIAACKg");
	this.shape_104.setTransform(-167.6,10.275);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFE45C").s().p("AgRBWIAAhIIg/hjIAqAAIAmBEIAphEIAnAAIg/BjIAABIg");
	this.shape_105.setTransform(75.3,-25.85);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFE45C").s().p("AAwBWIgPgnIhDAAIgOAnIglAAIBDirIAjAAIBFCrgAgYASIAuAAIgWg/g");
	this.shape_106.setTransform(60.775,-25.85);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFE45C").s().p("Ag8BVIAAipIAjAAIAACMIBWAAIAAAdg");
	this.shape_107.setTransform(45.4,-25.775);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFE45C").s().p("AhBBWIAAirIA4AAQAfAAAJADQAPAEAKANQAKANAAAUQAAAQgGALQgGAJgIAGQgJAHgKABQgMADgWAAIgXAAIAABBgAgegHIATAAQATAAAHgDQAHgDAEgFQAEgGAAgHQAAgKgFgGQgGgGgIgCIgYgBIgRAAg");
	this.shape_108.setTransform(29.825,-25.85);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFE45C").s().p("Ag8BBQgWgXAAgpQAAgZAIgSQAFgNALgLQAKgKAMgFQAQgHAUAAQAmAAAXAYQAWAXAAApQAAAqgWAXQgXAYgmAAQglAAgXgYgAghgsQgOAPAAAdQAAAdAOAPQANAPAUAAQAVAAANgPQANgPAAgdQAAgdgMgPQgNgOgWAAQgUAAgNAOg");
	this.shape_109.setTransform(5.575,-25.825);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFE45C").s().p("AgQBWIAAiOIgzAAIAAgdICHAAIAAAdIgyAAIAACOg");
	this.shape_110.setTransform(-10.675,-25.85);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFE45C").s().p("AAiBWIgih/IghB/IgmAAIgpirIAkAAIAZB1IAgh1IAoAAIAeB3IAbh3IAjAAIgqCrg");
	this.shape_111.setTransform(-35.925,-25.85);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFE45C").s().p("Ag8BBQgWgXAAgpQAAgZAIgSQAFgNALgLQAKgKAMgFQAQgHAUAAQAmAAAXAYQAWAXAAApQAAAqgWAXQgXAYgmAAQglAAgXgYgAghgsQgOAPAAAdQAAAdAOAPQANAPAUAAQAVAAANgPQANgPAAgdQAAgdgMgPQgNgOgWAAQgUAAgNAOg");
	this.shape_112.setTransform(-56.575,-25.825);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFE45C").s().p("AAiBWIAAhLIhDAAIAABLIgjAAIAAirIAjAAIAABEIBDAAIAAhEIAjAAIAACrg");
	this.shape_113.setTransform(-74.675,-25.85);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#4FD8FF").ss(2,1,1).p("EgsDgNRMBYHAAAQAmAAAgAOQAhAOAZAYQAYAZAOAhQAOAgAAAmIAAU7QAAAmgOAgQgOAhgYAZQgZAYghAOQggAOgmAAMhYHAAAQgmAAgggOQghgOgZgYQgYgZgOghQgOggAAgmIAA07QAAgmAOggQAOghAYgZQAZgYAhgOQAggOAmAAg");
	this.shape_114.setTransform(0,35);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(11,18,48,0.8)").s().p("EgsDANSQgmAAgggOQgggOgagYQgYgZgOghQgOggAAgmIAA07QAAglAOghQAOghAYgYQAagZAggOQAggOAmAAMBYHAAAQAmAAAgAOQAgAOAaAZQAYAYAOAhQAOAhAAAlIAAU7QAAAmgOAgQgOAhgYAZQgaAYggAOQggAOgmAAg");
	this.shape_115.setTransform(0,35);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#7FE7FF").s().p("AgSBkIAAgmIAlAAIAAAmgAgKAxIgKhlIAAgvIApAAIAAAvIgKBlg");
	this.shape_116.setTransform(247.525,-98.175);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#7FE7FF").s().p("AgsBAQgRgMgGgVIAngGQACAMAIAFQAHAGANAAQAPAAAHgGQAFgDAAgHQAAgEgCgDQgDgDgKgCQgugLgMgHQgRgLAAgWQAAgSAPgNQAOgNAgAAQAdAAAOAJQAPALAFASIgkAHQgDgJgGgEQgHgEgLgBQgPABgGAEQgFADAAAEQAAAFAEACQAFAFAeAGQAfAIAMAJQAMAKAAASQAAAUgRAOQgQAPghAAQgdAAgRgMg");
	this.shape_117.setTransform(234.825,-95.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#7FE7FF").s().p("AguBKIAAiQIAkAAIAAAVQAJgPAGgFQAIgEAIAAQAOAAAMAHIgMAiQgJgHgJAAQgIAAgGAFQgEAEgEAMQgCALAAAkIAAAtg");
	this.shape_118.setTransform(223.05,-95.575);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#7FE7FF").s().p("Ag1AzQgOgUAAgeQAAgjATgVQATgUAdAAQAfAAATAVQATAWgBArIhfAAQAAARAJAKQAJAJAMAAQAJAAAGgFQAGgFADgLIAnAGQgIAWgQALQgQALgXAAQglAAgTgZgAgTglQgIAKAAAPIA5AAQgBgQgIgJQgIgJgMAAQgMABgIAIg");
	this.shape_119.setTransform(208.6275,-95.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#7FE7FF").s().p("Ag0BSQgSgVAAgkQAAgjASgUQARgTAaAAQAYAAARAUIAAhIIAnAAIAADIIgkAAIAAgWQgJAMgMAHQgMAGgMAAQgZAAgRgUgAgWgIQgJAJAAAWQAAAXAHALQAJAPAQAAQANAAAJgMQAJgLAAgWQABgagKgJQgJgMgNAAQgNAAgKAMg");
	this.shape_120.setTransform(192.15,-98);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#7FE7FF").s().p("Ag2BAQgNgMAAgTQAAgMAGgKQAFgJALgFQALgFAUgEQAagFAKgEIAAgEQAAgLgGgFQgFgFgOAAQgKAAgGAFQgGAEgDAJIgjgFQAGgWAOgKQAOgKAdAAQAYAAANAGQAMAGAGAJQAFAKAAAZIgBAsQAAATACAJQACAJAFALIgmAAIgEgMIgBgEQgKAJgLAFQgKAFgNAAQgWAAgNgMgAAAAIQgQAEgFADQgIAGAAAIQAAAIAGAGQAGAFAJABQAKgBAJgGQAHgGACgHQACgFAAgNIAAgIIgWAFg");
	this.shape_121.setTransform(176.175,-95.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#7FE7FF").s().p("AgQBJIg7iRIApAAIAbBKIAHAYIAEgNIAEgLIAchKIAnAAIg5CRg");
	this.shape_122.setTransform(160.5,-95.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#7FE7FF").s().p("AAcBKIAAhKQAAgWgDgHQgCgHgGgEQgFgEgIAAQgJAAgIAGQgIAFgCAJQgEAJAAAXIAABCIgmAAIAAiQIAkAAIAAAVQASgYAcAAQANAAALAEQAKAFAGAHQAFAHACAJQACAJAAARIAABZg");
	this.shape_123.setTransform(144.35,-95.575);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#7FE7FF").s().p("AgSBkIAAiQIAlAAIAACQgAgShAIAAgjIAlAAIAAAjg");
	this.shape_124.setTransform(131.875,-98.175);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#7FE7FF").s().p("Ag1AzQgOgUAAgeQAAgjATgVQATgUAdAAQAfAAATAVQATAWgBArIhfAAQAAARAJAKQAJAJAMAAQAJAAAGgFQAGgFADgLIAnAGQgIAWgQALQgQALgXAAQglAAgTgZgAgTglQgIAKAAAPIA5AAQgBgQgIgJQgIgJgMAAQgMABgIAIg");
	this.shape_125.setTransform(112.2775,-95.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#7FE7FF").s().p("AAcBkIAAhMQAAgXgCgFQgCgHgGgDQgGgEgIAAQgJAAgHAFQgIAEgDAJQgEAJABATIAABIIgnAAIAAjHIAnAAIAABKQASgWAZAAQANAAAKAFQALAFAGAHQAFAIACAJQACAKAAASIAABVg");
	this.shape_126.setTransform(96.15,-98.175);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#7FE7FF").s().p("AgGBhQgIgEgEgFQgDgGgCgJIgBgcIAAg+IgSAAIAAgfIASAAIAAgdIAmgWIAAAzIAaAAIAAAfIgaAAIAAA5QAAASABADQAAADACACQADACAEAAQAGAAAKgEIADAeQgOAGgQAAQgLAAgIgDg");
	this.shape_127.setTransform(82.95,-97.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#7FE7FF").s().p("Ag9BjIgEgeQAKACAHAAQANABAHgJQAGgHADgNIg3iQIAqAAIAhBmIAihmIAoAAIg0CKIgJAaQgFAMgEAHQgFAHgFAEQgGAEgJACQgIADgLAAQgLAAgLgDg");
	this.shape_128.setTransform(62.55,-92.45);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#7FE7FF").s().p("AglBDQgSgJgKgSQgJgRAAgYQAAgUAJgRQAKgSARgKQASgJAUAAQAhAAAVAVQAVAWAAAgQAAAggVAWQgVAWggAAQgTAAgTgJgAgYggQgKALAAAVQAAAWAKALQAKAMAOgBQAPABAKgMQALgLAAgWQAAgUgLgMQgKgMgPABQgOgBgKAMg");
	this.shape_129.setTransform(46.45,-95.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#7FE7FF").s().p("AguBKIAAiQIAjAAIAAAVQAKgPAGgFQAHgEAJAAQAOAAAMAHIgMAiQgKgHgIAAQgIAAgGAFQgEAEgEAMQgCALAAAkIAAAtg");
	this.shape_130.setTransform(33.5,-95.575);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#7FE7FF").s().p("AgGBhQgHgEgEgFQgFgGgBgJIgBgcIAAg+IgSAAIAAgfIASAAIAAgdIAlgWIAAAzIAaAAIAAAfIgaAAIAAA5QAAASABADQABADADACQADACADAAQAFAAAKgEIAEAeQgOAGgRAAQgKAAgIgDg");
	this.shape_131.setTransform(22.35,-97.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#7FE7FF").s().p("AgsBAQgRgMgGgVIAngGQACAMAIAFQAHAGANAAQAPAAAHgGQAFgDAAgHQAAgEgCgDQgDgDgKgCQgugLgMgHQgRgLAAgWQAAgSAPgNQAOgNAgAAQAdAAAOAJQAPALAFASIgkAHQgDgJgGgEQgHgEgLgBQgPABgGAEQgFADAAAEQAAAFAEACQAFAFAeAGQAfAIAMAJQAMAKAAASQAAAUgRAOQgQAPghAAQgdAAgRgMg");
	this.shape_132.setTransform(9.525,-95.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#7FE7FF").s().p("Ag1AzQgOgUAAgeQAAgjATgVQATgUAdAAQAfAAATAVQATAWgBArIhfAAQAAARAJAKQAJAJAMAAQAJAAAGgFQAGgFADgLIAnAGQgIAWgQALQgQALgXAAQglAAgTgZgAgTglQgIAKAAAPIA5AAQgBgQgIgJQgIgJgMAAQgMABgIAIg");
	this.shape_133.setTransform(-5.7725,-95.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#7FE7FF").s().p("AhTBkIAAjHIBKAAQAYAAANAEQASAFAMANQANANAGAUQAHATAAAbQAAAZgGASQgIAVgOAOQgKAKgSAGQgNAEgWAAgAgrBCIAfAAQAQAAAHgBQAKgDAHgGQAGgGAEgNQAEgOAAgXQAAgWgEgNQgEgMgHgHQgIgHgLgCQgIgCgYAAIgTAAg");
	this.shape_134.setTransform(-23.225,-98.175);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#7FE7FF").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_135.setTransform(-45.325,-90.075);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#7FE7FF").s().p("AgsBAQgRgMgGgVIAngGQACAMAIAFQAHAGANAAQAPAAAHgGQAFgDAAgHQAAgEgCgDQgDgDgKgCQgugLgMgHQgRgLAAgWQAAgSAPgNQAOgNAgAAQAdAAAOAJQAPALAFASIgkAHQgDgJgGgEQgHgEgLgBQgPABgGAEQgFADAAAEQAAAFAEACQAFAFAeAGQAfAIAMAJQAMAKAAASQAAAUgRAOQgQAPghAAQgdAAgRgMg");
	this.shape_136.setTransform(-57.375,-95.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#7FE7FF").s().p("Ag0BSQgSgVAAgkQAAgjASgUQAQgTAbAAQAYAAARAUIAAhIIAnAAIAADIIgkAAIAAgWQgJAMgMAHQgMAGgLAAQgZAAgSgUgAgWgIQgJAJAAAWQAAAXAHALQAJAPAQAAQANAAAJgMQAJgLAAgWQAAgagJgJQgIgMgOAAQgNAAgKAMg");
	this.shape_137.setTransform(-73.6,-98);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#7FE7FF").s().p("AguBKIAAiQIAjAAIAAAVQAKgPAGgFQAHgEAJAAQAOAAAMAHIgMAiQgKgHgIAAQgIAAgGAFQgEAEgEAMQgCALAAAkIAAAtg");
	this.shape_138.setTransform(-86.2,-95.575);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#7FE7FF").s().p("AgkBDQgTgJgJgSQgKgRAAgYQAAgUAKgRQAJgSASgKQAQgJAVAAQAhAAAVAVQAVAWAAAgQAAAggVAWQgWAWggAAQgSAAgSgJgAgYggQgLALAAAVQAAAWALALQAKAMAOgBQAPABALgMQAKgLgBgWQABgUgKgMQgLgMgPABQgOgBgKAMg");
	this.shape_139.setTransform(-101.2,-95.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#7FE7FF").s().p("AAZBJIgZhdIgYBdIglAAIguiRIAlAAIAcBeIAZheIAkAAIAYBeIAcheIAlAAIguCRg");
	this.shape_140.setTransform(-120.675,-95.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#7FE7FF").s().p("Ag1AzQgOgUAAgeQAAgjATgVQATgUAdAAQAfAAATAVQATAWgBArIhfAAQAAARAJAKQAJAJAMAAQAJAAAGgFQAGgFADgLIAnAGQgIAWgQALQgQALgXAAQglAAgTgZgAgTglQgIAKAAAPIA5AAQgBgQgIgJQgIgJgMAAQgMABgIAIg");
	this.shape_141.setTransform(-147.2725,-95.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#7FE7FF").s().p("AAcBkIAAhMQAAgXgCgFQgCgHgGgDQgFgEgJAAQgIAAgIAFQgIAEgDAJQgDAJAAATIAABIIgnAAIAAjHIAnAAIAABKQASgWAZAAQANAAAKAFQALAFAGAHQAFAIACAJQACAKAAASIAABVg");
	this.shape_142.setTransform(-163.4,-98.175);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#7FE7FF").s().p("AgFBhQgIgEgFgFQgEgGgBgJIgBgcIAAg+IgSAAIAAgfIASAAIAAgdIAmgWIAAAzIAaAAIAAAfIgaAAIAAA5QAAASABADQAAADACACQADACAEAAQAGAAAKgEIADAeQgNAGgRAAQgLAAgHgDg");
	this.shape_143.setTransform(-176.6,-97.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#7FE7FF").s().p("Ag1AzQgOgUAAgeQAAgjATgVQATgUAdAAQAfAAATAVQATAWgBArIhfAAQAAARAJAKQAJAJAMAAQAJAAAGgFQAGgFADgLIAnAGQgIAWgQALQgQALgXAAQglAAgTgZgAgTglQgIAKAAAPIA5AAQgBgQgIgJQgIgJgMAAQgMABgIAIg");
	this.shape_144.setTransform(-196.9725,-95.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#7FE7FF").s().p("AhGBmIAAjHIAkAAIAAAVQAHgLAMgHQAMgHANAAQAaAAARAUQASAUAAAjQAAAkgSAUQgSAUgZAAQgLAAgKgFQgKgFgKgLIAABJgAgWg7QgKAKAAAWQAAAYAKALQAKAMANAAQANAAAJgLQAJgKAAgYQAAgXgJgLQgKgLgNAAQgNAAgJALg");
	this.shape_145.setTransform(-212.725,-92.825);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#7FE7FF").s().p("Ag9BjIgEgeQAKACAHAAQANABAHgJQAGgHADgNIg3iQIAqAAIAhBmIAihmIAoAAIg0CKIgJAaQgFAMgEAHQgFAHgFAEQgGAEgJACQgIADgLAAQgLAAgLgDg");
	this.shape_146.setTransform(-229.6,-92.45);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#7FE7FF").s().p("AgTBkIAAilIg8AAIAAgiICfAAIAAAiIg8AAIAAClg");
	this.shape_147.setTransform(-243.675,-98.175);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FF8A2E").s().p("ACkGKIhzisQg9hbgWgYQgWgYgZgJQgagJg3AAIggAAIAAFJIifAAIAAsTIFPAAQB9AAA5AWQA6AVAhA2QAjA2AABGQAABZg0A6Qg0A4hoAPQA0AeAiAkQAhAkA5BcIBgCagAjCg8IB1AAQByAAAcgJQAdgKAQgYQAQgXAAgkQAAgngUgZQgWgYgngHQgTgChgAAIh8AAg");
	this.shape_148.setTransform(223.7,-188.525);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FF8A2E").s().p("AkqGKIAAsTIJHAAIAACGImpAAIAACuIGLAAIAACEImLAAIAADWIG3AAIAACFg");
	this.shape_149.setTransform(144.85,-188.525);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FF8A2E").s().p("AhOGKIAAqNIjqAAIAAiGIJxAAIAACGIjpAAIAAKNg");
	this.shape_150.setTransform(73.35,-188.525);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FF8A2E").s().p("AjfFTQhQhFgQiFICbgOQAOBNArAkQAqAlBIAAQBMAAAoggQAmghAAgsQAAgbgQgUQgRgTgogPQgcgKhjgZQh/gfg0gtQhJhBAAheQAAg8Ajg0QAig1BAgbQBAgcBbABQCTgBBLBBQBLBCAEBsIifAHQgLg9ghgaQgigbhCAAQhFAAgnAdQgaASAAAeQAAAdAYATQAeAaBzAbQB0AcA4AdQA3AdAgAyQAfAyAABLQAABEglA7QgmA7hFAdQhEAchnAAQiUAAhQhEg");
	this.shape_151.setTransform(2.325,-188.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FF8A2E").s().p("ADeGKIhEizIk6AAIhBCzIipAAIEzsTICnAAIE7MTgAhwBSIDWAAIhrkjg");
	this.shape_152.setTransform(-73.6,-188.525);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FF8A2E").s().p("AkUGHIAAsNICfAAIAAKIIGKAAIAACFg");
	this.shape_153.setTransform(-144.15,-188.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FF8A2E").s().p("AlJGKIAAsTIE7AAQBdAAAuAIQAtAIAlAZQAkAYAYAqQAYApAAAzQAAA3gdAuQgeAugzAXQBIAVAmAyQAnAyAABEQAAA2gZAzQgZAzgrAeQgsAeg/AHQgoAFiXABgAiqEFICTAAQBVAAAYgFQAjgGAXgZQAWgZAAgqQAAgjgSgZQgRgZgggLQghgLhrAAIiBAAgAiqhQIBpAAQBbAAAXgCQApgFAXgXQAYgYAAgmQAAgkgUgXQgVgXgogFQgXgDhvAAIhcAAg");
	this.shape_154.setTransform(-218.725,-188.525);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#7A2A10").s().p("ACkGKIhzisQg8hbgXgYQgXgYgZgJQgZgJg3AAIggAAIAAFJIifAAIAAsTIFOAAQB+AAA6AWQA4AVAjA2QAiA2AABGQAABZg0A6Qg0A4hoAPQA0AeAhAkQAiAkA5BcIBgCagAjCg8IB2AAQBxAAAdgJQAcgKAQgYQAQgXAAgkQAAgngVgZQgVgYgngHQgTgChgAAIh8AAg");
	this.shape_155.setTransform(227.7,-184.525);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#7A2A10").s().p("AkrGKIAAsTIJIAAIAACGImoAAIAACuIGKAAIAACEImKAAIAADWIG3AAIAACFg");
	this.shape_156.setTransform(148.85,-184.525);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#7A2A10").s().p("AhOGKIAAqNIjqAAIAAiGIJxAAIAACGIjpAAIAAKNg");
	this.shape_157.setTransform(77.35,-184.525);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#7A2A10").s().p("AjfFSQhQhEgQiEICbgQQAOBOArAlQAqAkBIAAQBMAAAoggQAmghAAgrQAAgcgQgTQgRgVgogOQgcgJhjgZQh/ggg0gtQhJhBAAhdQAAg9Ajg0QAig0BAgcQBAgbBbgBQCTABBLBAQBLBBAEBtIifAHQgLg8ghgbQgigbhCABQhFAAgnAbQgaATAAAeQAAAdAYAUQAeAZBzAbQB0AbA4AeQA3AdAgAyQAfAzAABKQAABEglA7QgmA7hFAdQhEAchnABQiUgBhQhFg");
	this.shape_158.setTransform(6.325,-184.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#7A2A10").s().p("ADeGKIhFizIk6AAIhBCzIioAAIEysTICoAAIE7MTgAhvBSIDWAAIhskjg");
	this.shape_159.setTransform(-69.6,-184.525);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#7A2A10").s().p("AkUGGIAAsMICfAAIAAKIIGKAAIAACEg");
	this.shape_160.setTransform(-140.15,-184.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#7A2A10").s().p("AlJGKIAAsTIE7AAQBdAAAuAIQAtAIAlAZQAkAYAYAqQAYApAAAzQAAA3gdAuQgeAugzAXQBIAVAmAyQAnAyAABEQAAA2gZAzQgZAzgrAeQgsAeg/AHQgoAFiXABgAiqEFICTAAQBVAAAYgFQAjgGAXgZQAWgZAAgqQAAgjgSgZQgRgZgggLQghgLhrAAIiBAAgAiqhQIBpAAQBbAAAXgCQApgFAXgXQAYgYAAgmQAAgkgUgXQgVgXgogFQgXgDhvAAIhcAAg");
	this.shape_161.setTransform(-214.725,-184.525);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AlJGKIAAsTIEjAAQBhAAAzAPQBGAVAxA0QAyA0AaBMQAZBLAABuQAABhgYBGQgeBWg2A1QgqAphGAWQg1ARhXAAgAiqEFIB2AAQBCAAAegHQAmgKAagXQAagXAQg1QAQg1AAhbQAAhbgQgxQgQgwgdgcQgegbgsgKQgggHhiAAIhHAAg");
	this.shape_162.setTransform(135.6,-296.525);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("ACkGKIhzisQg9hbgWgYQgXgYgZgJQgZgJg3AAIggAAIAAFJIifAAIAAsTIFPAAQB9AAA5AWQA6AVAiA2QAiA2AABGQAABZg0A6Qg0A4hoAPQA0AeAiAkQAhAkA5BcIBgCagAjCg8IB2AAQBxAAAcgJQAdgKAQgYQAQgXAAgkQAAgngUgZQgWgYgngHQgTgChgAAIh8AAg");
	this.shape_163.setTransform(58.65,-296.525);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AkVEsQhohrAAi8QAAh3AkhSQAbg8AvgwQAugwA3gXQBKgfBgAAQCtAABpBsQBoBsAAC/QAAC/hoBsQhoBritAAQivAAhnhrgAidjLQg8BEAACHQAACFA+BGQA9BEBeAAQBgAAA9hEQA8hFAAiIQAAiHg7hDQg7hChjAAQhhAAg8BDg");
	this.shape_164.setTransform(-27.375,-296.525);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("ACdGKIidpMIicJMIisAAIi8sTICjAAIB3IcICQocIC8AAICKIlIB4olICgAAIi/MTg");
	this.shape_165.setTransform(-122.1,-296.525);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#0E1330").s().p("AlJGKIAAsTIEiAAQBiAAA0APQBEAVAyA0QAyA0AZBMQAaBLAABuQAABhgYBGQgeBWg3A1QgpAphGAWQg1ARhXAAgAiqEFIB3AAQBCAAAdgHQAngKAagXQAZgXAPg1QAQg1AAhbQAAhbgQgxQgQgwgdgcQgdgbgsgKQghgHhgAAIhIAAg");
	this.shape_166.setTransform(139.6,-292.525);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#0E1330").s().p("ACkGKIhzisQg8hbgXgYQgWgYgagJQgZgJg2AAIghAAIAAFJIifAAIAAsTIFOAAQB+AAA6AWQA4AVAiA2QAjA2AABGQAABZg0A6Qg0A4hoAPQA0AeAhAkQAiAkA5BcIBgCagAjCg8IB1AAQByAAAdgJQAcgKAQgYQAQgXAAgkQAAgngVgZQgVgYgngHQgTgChgAAIh8AAg");
	this.shape_167.setTransform(62.65,-292.525);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#0E1330").s().p("AkVEsQhohrAAi8QAAh3AkhSQAbg8AvgwQAugwA3gXQBKgfBgAAQCtAABpBsQBoBsAAC/QAAC/hoBsQhoBritAAQivAAhnhrgAidjLQg8BEAACHQAACFA+BGQA9BEBeAAQBgAAA9hEQA8hFAAiIQAAiHg7hDQg7hChjAAQhhAAg8BDg");
	this.shape_168.setTransform(-23.375,-292.525);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#0E1330").s().p("ACdGKIidpMIibJMIitAAIi7sTICiAAIB2IcICQocIC8AAICLIlIB5olICgAAIjAMTg");
	this.shape_169.setTransform(-118.1,-292.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Title_Logo, new cjs.Rectangle(-301,-358.7,602,670.5999999999999), null);


(lib.Panel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {pause:0,gameover:1,win:2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Art
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7FE7FF").s().p("Ai/DlIAAnJICpAAQA4AAAeAIQAoAMAdAfQAdAeAPAsQAPAsAAA/QAAA5gOApQgRAyghAfQgXAXgqANQgeAKgyAAgAhjCYIBGAAQAlAAASgFQAWgFAPgOQAPgNAJgfQAJgeAAg1QAAg1gJgcQgJgcgRgQQgRgRgagFQgTgEg4gBIgqAAg");
	this.shape.setTransform(108.6,-154.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7FE7FF").s().p("AitDlIAAnJIFTAAIAABNIj3AAIAABmIDlAAIAABMIjlAAIAAB9ID/AAIAABNg");
	this.shape_1.setTransform(64.125,-154.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7FE7FF").s().p("AiBDFQgvgogJhNIBagJQAIAuAZAVQAZAVApAAQAtAAAWgTQAXgTAAgZQAAgQgJgMQgKgLgYgJQgQgFg5gPQhKgSgegaQgrglAAg3QAAgjAUgfQAUgeAmgQQAlgQA1AAQBVAAAsAmQArAmACA/IhcAEQgGgkgUgOQgTgQgmgBQgpAAgWARQgPALAAARQAAARAOALQARAPBDAQQBDAQAhARQAgARASAdQASAdAAArQAAAogVAjQgWAhgoARQgoARg8AAQhWAAgugog");
	this.shape_2.setTransform(20.275,-154.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7FE7FF").s().p("AhdDaQgigPgUgZQgTgYgHgbQgJgnAAhMIAAj0IBdAAIAAD3QAAA7ADARQAGAdAXARQAWARAmAAQAnAAAUgQQAUgRAEgXQAEgXAAg2IAAj9IBdAAIAADvQAABTgIAiQgHAigUAXQgVAYgiAOQghAOg3AAQhAAAgigPg");
	this.shape_3.setTransform(-23.975,-154.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7FE7FF").s().p("ACBDlIgohoIi2AAIgmBoIhiAAICznJIBhAAIC3HJgAhAAwIB8AAIg+ipg");
	this.shape_4.setTransform(-70.075,-154.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7FE7FF").s().p("AivDlIAAnJICVAAQBTAAAaAHQAoAKAaAjQAbAigBA3QAAAqgPAdQgPAcgYAQQgXARgYAEQgiAHg+AAIg8AAIAACtgAhSgVIAyAAQA2ABATgIQASgHALgQQAKgPAAgUQAAgZgOgQQgPgQgWgFQgRgDgxAAIgtAAg");
	this.shape_5.setTransform(-108.8,-154.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ai/DlIAAnJICpAAQA4AAAeAJQApAMAcAeQAdAeAPAsQAPAsAABAQAAA4gOApQgSAygfAfQgYAXgpAOQgfAJgyAAgAhjCYIBFAAQAmAAARgEQAXgGAPgOQAOgNAKgeQAJggAAg1QAAg0gJgdQgKgcgRgQQgQgPgagGQgSgFg5AAIgqAAg");
	this.shape_6.setTransform(111.6,-151.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AitDlIAAnJIFTAAIAABNIj3AAIAABmIDlAAIAABMIjlAAIAAB9ID/AAIAABNg");
	this.shape_7.setTransform(67.125,-151.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AiBDFQgvgogJhNIBagJQAIAtAZAWQAZAVApAAQAtAAAWgSQAXgUAAgZQAAgQgJgLQgKgMgYgIQgQgGg5gPQhKgSgegaQgrglAAg3QAAgjAUgeQAUgfAmgQQAlgQA1AAQBVAAAsAmQArAlACBAIhcAEQgGgjgUgQQgTgQgmAAQgpAAgWARQgPALAAARQAAARAOALQARAPBDAQQBDAQAhARQAgARASAdQASAdAAAsQAAAngVAiQgWAigoASQgoAQg8AAQhWAAgugog");
	this.shape_8.setTransform(23.275,-151.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhdDaQgigQgUgYQgTgYgHgaQgJgoAAhMIAAj0IBdAAIAAD3QAAA7ADASQAGAcAXARQAWARAmAAQAnAAAUgQQAUgQAEgYQAEgYAAg1IAAj9IBdAAIAADvQAABTgIAiQgHAigUAYQgVAXgiAOQghAOg3AAQhAAAgigPg");
	this.shape_9.setTransform(-20.975,-151.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ACBDlIgohoIi2AAIgmBoIhiAAICznJIBhAAIC3HJgAhAAwIB8AAIg+ipg");
	this.shape_10.setTransform(-67.075,-151.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AivDlIAAnJICVAAQBUAAAZAHQAoAKAaAjQAaAiAAA3QAAAqgPAdQgPAcgYAQQgXAQgZAGQghAGg+AAIg8AAIAACtgAhSgUIAyAAQA3AAASgIQASgHALgQQAKgOAAgVQAAgZgPgQQgOgRgXgDQgQgEgxAAIgtAAg");
	this.shape_11.setTransform(-105.8,-151.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#7FE7FF").ss(4,1,1).p("EgpPggzMBSfAAAQA2AAAvAUQAvAUAkAkQAkAkAUAvQAUAvAAA2MAAAA5fQAAA2gUAvQgUAvgkAkQgkAkgvAUQgvAUg2AAMhSfAAAQg2AAgvgUQgvgUgkgkQgkgkgUgvQgUgvAAg2MAAAg5fQAAg2AUgvQAUgvAkgkQAkgkAvgUQAvgUA2AAg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(11,18,48,0.929)").s().p("EgpPAg0Qg2gBgvgTQgvgUgkgkQgjgkgUgvQgVgvAAg2MAAAg5fQAAg2AVgvQAUgvAjgkQAkgkAvgUQAvgTA2gBMBSfAAAQA2ABAvATQAvAUAkAkQAjAkAUAvQAVAvAAA2MAAAA5fQAAA2gVAvQgUAvgjAkQgkAkgvAUQgvATg2ABg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF4F4F").s().p("ABfDlIhChkQgkg1gNgOQgNgOgPgFQgOgFggAAIgTAAIAAC/IhcAAIAAnJIDCAAQBJAAAhANQAiAMATAfQAVAfgBAqQAAAzgdAhQgfAhg8AJQAeASATAUQATAVAiA1IA4BagAhxgiIBFAAQBCgBAQgFQARgGAJgOQAKgNAAgVQAAgXgNgOQgMgOgXgEQgLgBg3gBIhJAAg");
	this.shape_14.setTransform(174.7,-154.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF4F4F").s().p("AitDlIAAnJIFTAAIAABNIj3AAIAABmIDlAAIAABMIjlAAIAAB9ID/AAIAABNg");
	this.shape_15.setTransform(128.775,-154.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF4F4F").s().p("AgwDlIiknJIBkAAIBzFSIBwlSIBjAAIilHJg");
	this.shape_16.setTransform(85.3,-154.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF4F4F").s().p("AihCuQg8g+AAhtQAAhFAVgwQAPgiAbgdQAcgcAfgNQArgSA4AAQBkAAA9A/QA9A/AABvQAABvg8A+Qg8A/hmAAQhkAAg9g/gAhbh1QgjAnAABOQAABOAkAoQAkAoA2AAQA4AAAjgoQAkgogBhOQAAhPgignQgjgng5AAQg4AAgjAog");
	this.shape_17.setTransform(39.2,-154.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF4F4F").s().p("AitDlIAAnJIFTAAIAABNIj3AAIAABmIDlAAIAABMIjlAAIAAB9ID/AAIAABNg");
	this.shape_18.setTransform(-24.225,-154.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF4F4F").s().p("ACHDlIAAloIhbFoIhYAAIhaloIAAFoIhWAAIAAnJICKAAIBSE3IBSk3ICLAAIAAHJg");
	this.shape_19.setTransform(-72.925,-154.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF4F4F").s().p("ACBDlIgohoIi2AAIgmBoIhiAAICznJIBhAAIC3HJgAhAAwIB8AAIg+ipg");
	this.shape_20.setTransform(-122.825,-154.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF4F4F").s().p("AhqDPQg1gfgbg4Qgbg3AAhBQAAhIAeg4QAeg3A6geQAsgXBAAAQBWAAAwAkQAwAkANA/IhbARQgKgigbgTQgbgUgoAAQg7AAgkAnQgkAmAABLQAABRAkApQAlApA5AAQAeAAAdgMQAdgLAVgRIAAg5IhqAAIAAhNIDHAAIAAC2QgdAcg3AWQg3AVg5AAQhGAAg2geg");
	this.shape_21.setTransform(-171.125,-154.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("ABfDlIhDhjQgjg2gMgOQgNgOgPgFQgPgFggAAIgTAAIAAC/IhcAAIAAnJIDDAAQBIAAAiAMQAhANATAfQAVAgAAAoQAAA0gfAhQgeAhg9AJQAeASAVAUQATAVAhA2IA4BZgAhxgjIBFAAQBBABARgGQAQgGAKgOQAJgNAAgUQAAgYgMgOQgNgPgWgDQgLgCg4AAIhIAAg");
	this.shape_22.setTransform(177.7,-151.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgxDlIijnJIBkAAIBzFSIBwlSIBiAAIikHJg");
	this.shape_23.setTransform(88.3,-151.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AihCvQg8g/AAhtQAAhFAVgwQAQgiAbgdQAbgcAfgNQAsgSA3AAQBlAAA8A/QA9A/AABuQAABvg8BAQg9A+hlAAQhlAAg8g+gAhbh2QgjAnAABPQAABOAkAoQAkAoA2AAQA4AAAkgoQAigoAAhPQABhPgjgmQgigng6AAQg4AAgjAng");
	this.shape_24.setTransform(42.2,-151.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AitDlIAAnJIFTAAIAABNIj3AAIAABmIDlAAIAABMIjlAAIAAB9ID/AAIAABNg");
	this.shape_25.setTransform(-21.225,-151.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("ACHDlIAAlnIhbFnIhYAAIhalnIAAFnIhWAAIAAnJICKAAIBSE3IBSk3ICLAAIAAHJg");
	this.shape_26.setTransform(-69.925,-151.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhqDPQg1gfgbg3Qgbg5AAhBQAAhHAeg4QAeg4A6gdQAsgXBAAAQBWAAAwAkQAwAkANA/IhbARQgKgigbgTQgbgUgoAAQg7AAgkAnQgkAmAABMQAABQAkApQAlApA5AAQAeAAAdgMQAdgLAVgRIAAg5IhqAAIAAhNIDHAAIAAC2QgdAcg3AVQg3AWg5AAQhGAAg2geg");
	this.shape_27.setTransform(-168.125,-151.95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF4F4F").ss(4,1,1).p("EgpPggzMBSfAAAQA2AAAvAUQAvAUAkAkQAkAkAUAvQAUAvAAA2MAAAA5fQAAA2gUAvQgUAvgkAkQgkAkgvAUQgvAUg2AAMhSfAAAQg2AAgvgUQgvgUgkgkQgkgkgUgvQgUgvAAg2MAAAg5fQAAg2AUgvQAUgvAkgkQAkgkAvgUQAvgUA2AAg");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#C98E00").ss(2,1,1).p("AAAjqIBACrIC4AIIiQByIAxCwIiZhkIiYBkIAxiwIiQhyIC4gIg");
	this.shape_29.setTransform(230,-152.475);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFD93B").s().p("AAACHIiYBkIAwiwIiOhyIC3gIIA/irIBACrIC4AIIiPByIAwCwg");
	this.shape_30.setTransform(230,-152.475);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#C98E00").ss(2,1,1).p("AAAjqIBACrIC4AIIiQByIAxCwIiZhkIiYBkIAxiwIiQhyIC4gIg");
	this.shape_31.setTransform(-230,-152.475);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFD93B").s().p("AAACHIiYBkIAwiwIiPhyIC4gIIA/irIBACrIC3AIIiOByIAwCwg");
	this.shape_32.setTransform(-230,-152.475);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFD93B").s().p("AgqDlIAAhYIBWAAIAABYgAgXBvIgYjoIAAhrIBfAAIAABrIgXDog");
	this.shape_33.setTransform(140.3,-154.95);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFD93B").s().p("ABZDlIi4kqIAAEqIhWAAIAAnJIBaAAIC7ExIAAkxIBWAAIAAHJg");
	this.shape_34.setTransform(106.525,-154.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFD93B").s().p("AgtDlIAAnJIBbAAIAAHJg");
	this.shape_35.setTransform(74.825,-154.95);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFD93B").s().p("ABbDlIhblWIhaFWIhkAAIhunJIBfAAIBFE5IBUk5IBtAAIBQE/IBHk/IBdAAIhwHJg");
	this.shape_36.setTransform(35.675,-154.95);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFD93B").s().p("AhdDaQgigPgUgZQgTgYgHgbQgJgnAAhMIAAj0IBdAAIAAD3QAAA7ADARQAGAdAXARQAWARAmAAQAnAAAUgQQAUgRAEgXQAEgXAAg2IAAj9IBdAAIAADvQAABTgIAiQgHAigUAXQgVAYgiAOQghAOg3AAQhAAAgigPg");
	this.shape_37.setTransform(-35.725,-154.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFD93B").s().p("AihCuQg8g+AAhtQAAhFAVgwQAPgiAbgdQAbgcAhgNQArgSA3AAQBkAAA+A/QA8A/AABvQAABvg8A+Qg9A/hkAAQhmAAg8g/gAhbh1QgjAnAABOQAABOAkAoQAkAoA3AAQA2AAAkgoQAkgoAAhOQgBhPgignQgjgng4AAQg5AAgjAog");
	this.shape_38.setTransform(-83.4,-154.95);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFD93B").s().p("AgtDlIAAjBIiokIIBsAAIBrC1IBqi1IBqAAIioEJIAADAg");
	this.shape_39.setTransform(-129.775,-154.95);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgqDlIAAhYIBWAAIAABYgAgYBvIgXjnIAAhsIBfAAIAABsIgXDng");
	this.shape_40.setTransform(143.3,-151.95);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("ABZDlIi4kqIAAEqIhWAAIAAnJIBaAAIC7ExIAAkxIBWAAIAAHJg");
	this.shape_41.setTransform(109.525,-151.95);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgtDlIAAnJIBbAAIAAHJg");
	this.shape_42.setTransform(77.825,-151.95);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("ABbDlIhblVIhaFVIhkAAIhunJIBfAAIBFE6IBUk6IBtAAIBQE/IBHk/IBdAAIhwHJg");
	this.shape_43.setTransform(38.675,-151.95);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AihCvQg8g/AAhtQAAhFAVgwQAPgiAcgdQAbgcAfgNQArgSA4AAQBlAAA8A/QA9A/AABuQAABvg8BAQg8A+hmAAQhkAAg9g+gAhbh2QgjAnAABPQAABOAkAoQAkAoA2AAQA4AAAjgoQAkgogBhPQAAhPgigmQgjgng5AAQg4AAgjAng");
	this.shape_44.setTransform(-80.4,-151.95);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgtDlIAAjBIiokIIBsAAIBrC1IBqi1IBqAAIioEJIAADAg");
	this.shape_45.setTransform(-126.775,-151.95);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFD93B").ss(4,1,1).p("EgpPggzMBSfAAAQA2AAAvAUQAvAUAkAkQAkAkAUAvQAUAvAAA2MAAAA5fQAAA2gUAvQgUAvgkAkQgkAkgvAUQgvAUg2AAMhSfAAAQg2AAgvgUQgvgUgkgkQgkgkgUgvQgUgvAAg2MAAAg5fQAAg2AUgvQAUgvAkgkQAkgkAvgUQAvgUA2AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:-67.075}},{t:this.shape_9,p:{x:-20.975}},{t:this.shape_8},{t:this.shape_7,p:{x:67.125}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_28},{t:this.shape_27},{t:this.shape_10,p:{x:-119.825}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_7,p:{x:131.775}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_13},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_9,p:{x:-32.725}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-292,-212,584,424);


(lib.HUD_Bar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Art
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(79,216,255,0.8)").ss(2,1,1).p("Eg4PAAAMBwfAAA");
	this.shape.setTransform(360,74);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(11,18,48,0.85)").s().p("Eg4PAFyIAArjMBwfAAAIAALjg");
	this.shape_1.setTransform(360,37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HUD_Bar, new cjs.Rectangle(-1,0,722,75), null);


(lib.Btn_Start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Art
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhWByIAAjkICpAAIAAAnIh7AAIAAAzIByAAIAAAlIhyAAIAAA/IB/AAIAAAmg");
	this.shape.setTransform(94.25,-2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABEByIAAizIguCzIgrAAIguizIAACzIgrAAIAAjkIBGAAIAoCbIApibIBGAAIAADkg");
	this.shape_1.setTransform(69.875,-2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABAByIgTgzIhbAAIgTAzIgxAAIBZjkIAwAAIBcDkgAggAYIA9AAIgehUg");
	this.shape_2.setTransform(44.95,-2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0BnQgbgOgOgdQgNgcAAggQAAgkAPgbQAPgcAcgPQAXgMAfABQArgBAZATQAXARAHAgIguAIQgFgRgNgJQgNgKgVAAQgdAAgSATQgRAUgBAlQABAoARAUQASAVAdAAQAOAAAQgFQAOgHAKgIIAAgdIg1AAIAAglIBkAAIAABaQgPAOgbALQgcALgcAAQgjgBgagPg");
	this.shape_3.setTransform(20.8,-2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWByIAAi9IhEAAIAAgnIC1AAIAAAnIhEAAIAAC9g");
	this.shape_4.setTransform(-10.1,-2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAwByIgigxQgRgbgGgHQgHgHgHgDQgHgCgRAAIgJAAIAABfIguAAIAAjkIBiAAQAjAAARAHQARAGAKAPQAJARABATQAAAbgQARQgPAPgeAEQAPAJAKAKQAJALARAbIAcAsgAg4gQIAjAAQAfAAAJgEQAJgDAEgGQAFgHgBgLQAAgLgFgHQgHgHgLgCQgFgBgcAAIgkAAg");
	this.shape_5.setTransform(-30.35,-2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABAByIgTgzIhbAAIgTAzIgxAAIBZjkIAwAAIBcDkgAggAYIA9AAIgehUg");
	this.shape_6.setTransform(-54.6,-2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWByIAAi9IhEAAIAAgnIC1AAIAAAnIhEAAIAAC9g");
	this.shape_7.setTransform(-73.45,-2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhABjQgYgUgEgnIAtgEQAEAWAMALQANALAUAAQAWAAAMgKQALgKAAgMQAAgIgFgGQgFgFgMgFIgkgKQglgJgPgMQgVgUAAgaQAAgSAKgPQAKgQATgIQASgHAbAAQAqgBAWAUQAVASACAgIgvACQgDgSgJgHQgKgIgTAAQgUAAgLAIQgIAGAAAIQAAAJAHAFQAJAIAhAIQAhAHARAJQAQAJAJANQAJAPAAAWQAAAUgLAQQgLASgUAJQgUAIgeAAQgqgBgXgTg");
	this.shape_8.setTransform(-94.125,-2.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#4FD8FF").ss(3,1,1).p("A07ldMAp3AAAQAiAAAdAMQAcANAWAWQAWAWANAcQAMAdAAAiIAAF7QAAAigMAdQgNAcgWAWQgWAWgcANQgdAMgiAAMgp3AAAQgiAAgdgMQgcgNgWgWQgWgWgNgcQgMgdAAgiIAAl7QAAgiAMgdQANgcAWgWQAWgWAcgNQAdgMAiAAg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E2A5A").s().p("A07FeQghAAgdgMQgdgNgWgWQgWgWgNgcQgMgeAAghIAAl7QAAghAMgeQANgcAWgWQAWgWAdgNQAdgMAhAAMAp3AAAQAhAAAdAMQAdANAWAWQAWAWANAcQAMAeAAAhIAAF7QAAAhgMAeQgNAcgWAWQgWAWgdANQgdAMghAAg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.349)").s().p("A07FeQghAAgdgMQgdgNgWgWQgWgWgNgdQgMgdAAghIAAl7QAAghAMgeQANgcAWgWQAWgWAdgMQAdgNAhAAMAp3AAAQAhAAAdANQAdAMAWAWQAWAWANAcQAMAeAAAhIAAF7QAAAhgMAdQgNAdgWAWQgWAWgdANQgdAMghAAg");
	this.shape_11.setTransform(0,5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2E4A9A").s().p("A07FeQghAAgdgMQgdgNgWgWQgWgWgNgcQgMgeAAghIAAl7QAAghAMgeQANgcAWgWQAWgWAdgNQAdgMAhAAMAp3AAAQAhAAAdAMQAdANAWAWQAWAWANAcQAMAeAAAhIAAF7QAAAhgMAeQgNAcgWAWQgWAWgdANQgdAMghAAg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhWBzIAAjlICpAAIAAAnIh7AAIAAAzIByAAIAAAmIhyAAIAAA+IB/AAIAAAng");
	this.shape_13.setTransform(94.25,0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABEBzIAAi0IguC0IgrAAIgui0IAAC0IgrAAIAAjlIBGAAIAoCcIApicIBGAAIAADlg");
	this.shape_14.setTransform(69.875,0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABABzIgTg0IhbAAIgTA0IgxAAIBZjlIAwAAIBcDlgAggAYIA9AAIgehUg");
	this.shape_15.setTransform(44.95,0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag0BoQgbgQgOgbQgNgdAAggQAAgjAPgcQAPgcAcgPQAXgLAfAAQArAAAZASQAXASAHAfIguAIQgFgQgNgKQgNgKgVAAQgdAAgSATQgRAUgBAmQABAnARAVQASAUAdAAQAOAAAQgGQAOgGAKgHIAAgeIg1AAIAAgmIBkAAIAABbQgPAOgbALQgcAKgcAAQgjABgagPg");
	this.shape_16.setTransform(20.8,0.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWBzIAAi+IhEAAIAAgnIC1AAIAAAnIhEAAIAAC+g");
	this.shape_17.setTransform(-10.1,0.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAwBzIgigzQgRgagGgHQgHgHgHgDQgHgCgRAAIgJAAIAABgIguAAIAAjlIBiAAQAjABARAFQARAHAKAPQAJARABATQAAAagQARQgPAQgeAFQAPAIAKALQAJAKARAbIAcAtgAg4gRIAjAAQAfAAAJgCQAJgDAEgHQAFgHgBgKQAAgMgFgHQgHgHgLgCQgFgBgcAAIgkAAg");
	this.shape_18.setTransform(-30.35,0.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ABABzIgTg0IhbAAIgTA0IgxAAIBZjlIAwAAIBcDlgAggAYIA9AAIgehUg");
	this.shape_19.setTransform(-54.6,0.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWBzIAAi+IhEAAIAAgnIC1AAIAAAnIhEAAIAAC+g");
	this.shape_20.setTransform(-73.45,0.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhABiQgYgTgEgnIAtgFQAEAXAMALQANALAUAAQAWAAAMgKQALgJAAgNQAAgIgFgGQgFgFgMgFIgkgKQglgJgPgNQgVgSAAgcQAAgRAKgPQAKgQATgHQASgJAbABQAqAAAWASQAVATACAgIgvACQgDgRgJgJQgKgHgTAAQgUAAgLAIQgIAFAAAKQAAAHAHAGQAJAHAhAJQAhAHARAJQAQAJAJANQAJAPAAAWQAAATgLARQgLASgUAIQgUAJgegBQgqAAgXgUg");
	this.shape_21.setTransform(-94.125,0.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFE45C").ss(3,1,1).p("A07ldMAp3AAAQAiAAAdAMQAcANAWAWQAWAWANAcQAMAdAAAiIAAF7QAAAigMAdQgNAcgWAWQgWAWgcANQgdAMgiAAMgp3AAAQgiAAgdgMQgcgNgWgWQgWgWgNgcQgMgdAAgiIAAl7QAAgiAMgdQANgcAWgWQAWgWAcgNQAdgMAiAAg");
	this.shape_22.setTransform(0,3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF8A2E").s().p("A07FeQghAAgdgNQgdgMgWgWQgWgWgNgcQgMgdAAgiIAAl7QAAghAMgdQANgdAWgWQAWgWAdgNQAdgMAhAAMAp3AAAQAhAAAdAMQAdANAWAWQAWAWANAdQAMAdAAAhIAAF7QAAAigMAdQgNAcgWAWQgWAWgdAMQgdANghAAg");
	this.shape_23.setTransform(0,3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("A3bFeIAAq7MAu3AAAIAAK7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_12},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_11},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_24}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.5,-36.5,303,76.5);


(lib.Btn_Resume = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Art
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGBdIAAi5ICJAAIAAAfIhjAAIAAApIBcAAIAAAfIhcAAIAAAyIBnAAIAAAgg");
	this.shape.setTransform(47.275,-2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA3BdIAAiSIglCSIgjAAIgliSIAACSIgjAAIAAi5IA4AAIAhB+IAih+IA4AAIAAC5g");
	this.shape_1.setTransform(27.475,-2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglBZQgOgHgIgJQgIgLgCgKQgEgQAAggIAAhiIAlAAIAABkQAAAYACAHQACAMAJAGQAJAIAPAAQAQgBAIgGQAIgGACgKQACgJAAgWIAAhnIAlAAIAABhQAAAhgDAPQgDAOgIAJQgIAJgOAGQgOAGgWgBQgZAAgOgFg");
	this.shape_2.setTransform(7.125,-1.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0BQQgTgRgDgeIAkgEQAEASAJAJQAKAJAQgBQATABAJgIQAJgIAAgKQAAgGgEgGQgDgEgKgEIgegHQgegIgLgKQgSgPAAgXQAAgOAIgMQAIgNAPgGQAPgHAWABQAiAAASAPQARAPABAaIglABQgDgNgHgHQgJgGgPAAQgQAAgJAHQgGAEAAAHQAAAGAFAFQAIAHAaAGQAcAHANAGQANAHAIALQAGAMABASQAAAQgJAOQgJAOgQAGQgQAIgZAAQgiAAgTgRg");
	this.shape_3.setTransform(-11,-2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhGBdIAAi5ICJAAIAAAfIhjAAIAAApIBcAAIAAAfIhcAAIAAAyIBnAAIAAAgg");
	this.shape_4.setTransform(-27.875,-2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAnBdIgbgpQgOgVgFgGQgGgGgGgCQgGgCgNAAIgHAAIAABOIgmAAIAAi5IBPAAQAdAAAOAFQANAFAIAMQAJANAAARQAAAVgNAOQgMANgZADQANAHAIAIQAHAJAOAWIAXAkgAgtgNIAcAAQAaAAAGgDQAHgCAEgFQAEgGAAgJQAAgJgFgGQgFgFgJgCIgbgBIgdAAg");
	this.shape_5.setTransform(-45.375,-2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#4FD8FF").ss(3,1,1).p("AxzkrMAjnAAAQAiAAAdAMQAcANAWAWQAWAWANAcQAMAdAAAiIAAEXQAAAigMAdQgNAcgWAWQgWAWgcANQgdAMgiAAMgjnAAAQgiAAgdgMQgcgNgWgWQgWgWgNgcQgMgdAAgiIAAkXQAAgiAMgdQANgcAWgWQAWgWAcgNQAdgMAiAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E2A5A").s().p("AxzEsQghAAgdgNQgdgMgWgWQgWgWgNgcQgMgeAAghIAAkXQAAghAMgeQANgcAWgWQAWgWAdgMQAdgNAhAAMAjnAAAQAhAAAdANQAdAMAWAWQAWAWANAcQAMAeAAAhIAAEXQAAAhgMAeQgNAcgWAWQgWAWgdAMQgdANghAAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.349)").s().p("AxzEsQghAAgdgMQgdgNgWgWQgWgWgNgcQgMgeAAghIAAkXQAAghAMgdQANgdAWgWQAWgWAdgNQAdgMAhAAMAjnAAAQAhAAAdAMQAdANAWAWQAWAWANAdQAMAdAAAhIAAEXQAAAhgMAeQgNAcgWAWQgWAWgdANQgdAMghAAg");
	this.shape_8.setTransform(0,5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2E4A9A").s().p("AxzEsQghAAgdgNQgdgMgWgWQgWgWgNgcQgMgeAAghIAAkXQAAghAMgeQANgcAWgWQAWgWAdgMQAdgNAhAAMAjnAAAQAhAAAdANQAdAMAWAWQAWAWANAcQAMAeAAAhIAAEXQAAAhgMAeQgNAcgWAWQgWAWgdAMQgdANghAAg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhGBdIAAi5ICJAAIAAAgIhjAAIAAAoIBcAAIAAAfIhcAAIAAAyIBnAAIAAAgg");
	this.shape_10.setTransform(47.275,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA3BdIAAiRIglCRIgjAAIgliRIAACRIgjAAIAAi5IA4AAIAhB+IAih+IA4AAIAAC5g");
	this.shape_11.setTransform(27.475,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglBYQgOgFgIgLQgIgJgCgLQgEgQAAgfIAAhiIAlAAIAABjQAAAYACAHQACAMAJAGQAJAIAPgBQAQAAAIgGQAIgGACgKQACgJAAgXIAAhlIAlAAIAABgQAAAigDAOQgDANgIAKQgIAJgOAGQgOAFgWABQgZAAgOgHg");
	this.shape_12.setTransform(7.125,1.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag0BQQgTgQgDggIAkgDQAEATAJAIQAKAJAQAAQATAAAJgIQAJgIAAgKQAAgGgEgFQgDgFgKgDIgegIQgegIgLgKQgSgQAAgVQAAgOAIgNQAIgMAPgHQAPgGAWAAQAiAAASAPQARAPABAaIglABQgDgOgHgGQgJgGgPAAQgQAAgJAGQgGAFAAAHQAAAGAFAGQAIAFAaAHQAcAGANAIQANAGAIALQAGAMABASQAAAQgJAOQgJANgQAIQgQAGgZAAQgiAAgTgQg");
	this.shape_13.setTransform(-11,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhGBdIAAi5ICJAAIAAAgIhjAAIAAAoIBcAAIAAAfIhcAAIAAAyIBnAAIAAAgg");
	this.shape_14.setTransform(-27.875,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAnBdIgbgpQgOgVgFgGQgGgGgGgBQgGgDgNAAIgHAAIAABOIgmAAIAAi5IBPAAQAdAAAOAFQANAFAIANQAJAMAAARQAAAVgNAOQgMANgZADQANAHAIAJQAHAIAOAWIAXAkgAgtgOIAcAAQAaAAAGgBQAHgDAEgFQAEgGAAgJQAAgJgFgFQgFgHgJgBIgbAAIgdAAg");
	this.shape_15.setTransform(-45.375,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFE45C").ss(3,1,1).p("AxzkrMAjnAAAQAiAAAdAMQAcANAWAWQAWAWANAcQAMAdAAAiIAAEXQAAAigMAdQgNAcgWAWQgWAWgcANQgdAMgiAAMgjnAAAQgiAAgdgMQgcgNgWgWQgWgWgNgcQgMgdAAgiIAAkXQAAgiAMgdQANgcAWgWQAWgWAcgNQAdgMAiAAg");
	this.shape_16.setTransform(0,3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF8A2E").s().p("AxzEsQghAAgdgMQgdgNgWgWQgWgWgNgdQgMgdAAghIAAkXQAAgiAMgdQANgcAWgWQAWgWAdgMQAdgNAhAAMAjnAAAQAhAAAdANQAdAMAWAWQAWAWANAcQAMAdAAAiIAAEXQAAAhgMAdQgNAdgWAWQgWAWgdANQgdAMghAAg");
	this.shape_17.setTransform(0,3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("A0TEsIAApXMAonAAAIAAJXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_9},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_8},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_18}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.5,-31.5,263,66.5);


(lib.Btn_Restart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Art
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRBdIAAiaIg4AAIAAgfICTAAIAAAfIg3AAIAACag");
	this.shape.setTransform(52.5,-2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAnBdIgbgpQgOgVgFgGQgGgGgGgCQgGgCgNAAIgHAAIAABOIgmAAIAAi5IBPAAQAdAAAOAFQANAFAIAMQAJANAAARQAAAVgNAOQgMANgZADQANAHAIAIQAHAJAOAWIAXAkgAgtgNIAcAAQAaAAAGgDQAHgCAEgFQAEgGAAgJQAAgJgFgGQgFgFgJgCIgbgBIgdAAg");
	this.shape_1.setTransform(36.025,-2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA1BdIgRgqIhJAAIgPAqIgoAAIBIi5IAnAAIBKC5gAgZATIAxAAIgYhDg");
	this.shape_2.setTransform(16.275,-2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSBdIAAiaIg3AAIAAgfICTAAIAAAfIg3AAIAACag");
	this.shape_3.setTransform(0.95,-2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0BQQgTgRgEgeIAlgEQAEASAKAJQAJAJARgBQARABAKgIQAJgIAAgKQAAgGgEgGQgDgEgKgEIgegHQgdgIgMgKQgSgPAAgXQAAgOAIgMQAIgNAPgGQAPgHAWABQAiAAASAPQARAPABAaIglABQgDgNgHgHQgJgGgPAAQgPAAgKAHQgGAEAAAHQAAAGAFAFQAIAHAaAGQAcAHANAGQANAHAHALQAIAMAAASQAAAQgJAOQgJAOgRAGQgPAIgZAAQgiAAgTgRg");
	this.shape_4.setTransform(-15.85,-2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhGBdIAAi5ICJAAIAAAfIhjAAIAAApIBcAAIAAAfIhcAAIAAAyIBnAAIAAAgg");
	this.shape_5.setTransform(-32.725,-2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAnBdIgbgpQgOgVgFgGQgGgGgGgCQgGgCgNAAIgHAAIAABOIgmAAIAAi5IBPAAQAdAAAOAFQANAFAIAMQAJANAAARQAAAVgNAOQgMANgZADQANAHAIAIQAHAJAOAWIAXAkgAgtgNIAcAAQAaAAAGgDQAHgCAEgFQAEgGAAgJQAAgJgFgGQgFgFgJgCIgbgBIgdAAg");
	this.shape_6.setTransform(-50.225,-2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#4FD8FF").ss(3,1,1).p("AxzkrMAjnAAAQAiAAAdAMQAcANAWAWQAWAWANAcQAMAdAAAiIAAEXQAAAigMAdQgNAcgWAWQgWAWgcANQgdAMgiAAMgjnAAAQgiAAgdgMQgcgNgWgWQgWgWgNgcQgMgdAAgiIAAkXQAAgiAMgdQANgcAWgWQAWgWAcgNQAdgMAiAAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5A1E2A").s().p("AxzEsQghAAgdgNQgdgMgWgWQgWgWgNgcQgMgeAAghIAAkXQAAghAMgeQANgcAWgWQAWgWAdgMQAdgNAhAAMAjnAAAQAhAAAdANQAdAMAWAWQAWAWANAcQAMAeAAAhIAAEXQAAAhgMAeQgNAcgWAWQgWAWgdAMQgdANghAAg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.349)").s().p("AxzEsQghAAgdgMQgdgNgWgWQgWgWgNgcQgMgeAAghIAAkXQAAghAMgdQANgdAWgWQAWgWAdgNQAdgMAhAAMAjnAAAQAhAAAdAMQAdANAWAWQAWAWANAdQAMAdAAAhIAAEXQAAAhgMAeQgNAcgWAWQgWAWgdANQgdAMghAAg");
	this.shape_9.setTransform(0,5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9A2E4A").s().p("AxzEsQghAAgdgNQgdgMgWgWQgWgWgNgcQgMgeAAghIAAkXQAAghAMgeQANgcAWgWQAWgWAdgMQAdgNAhAAMAjnAAAQAhAAAdANQAdAMAWAWQAWAWANAcQAMAeAAAhIAAEXQAAAhgMAeQgNAcgWAWQgWAWgdAMQgdANghAAg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRBdIAAiZIg4AAIAAggICTAAIAAAgIg3AAIAACZg");
	this.shape_11.setTransform(52.5,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAnBdIgbgpQgOgVgFgGQgGgGgGgBQgGgDgNAAIgHAAIAABOIgmAAIAAi5IBPAAQAdAAAOAFQANAFAIANQAJAMAAARQAAAVgNAOQgMANgZADQANAHAIAJQAHAIAOAWIAXAkgAgtgOIAcAAQAaAAAGgBQAHgDAEgFQAEgGAAgJQAAgJgFgFQgFgHgJgBIgbAAIgdAAg");
	this.shape_12.setTransform(36.025,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA1BdIgRgrIhJAAIgPArIgoAAIBIi5IAnAAIBKC5gAgZAUIAxAAIgYhFg");
	this.shape_13.setTransform(16.275,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSBdIAAiZIg3AAIAAggICTAAIAAAgIg3AAIAACZg");
	this.shape_14.setTransform(0.95,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag0BQQgTgQgEggIAlgDQAEATAKAIQAJAJARAAQARAAAKgIQAJgIAAgKQAAgGgEgFQgDgFgKgDIgegIQgdgIgMgKQgSgQAAgVQAAgOAIgNQAIgMAPgHQAPgGAWAAQAiAAASAPQARAPABAaIglABQgDgOgHgGQgJgGgPAAQgPAAgKAGQgGAFAAAHQAAAGAFAGQAIAFAaAHQAcAGANAIQANAGAHALQAIAMAAASQAAAQgJAOQgJANgRAIQgPAGgZAAQgiAAgTgQg");
	this.shape_15.setTransform(-15.85,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhGBdIAAi5ICJAAIAAAgIhjAAIAAAoIBcAAIAAAfIhcAAIAAAyIBnAAIAAAgg");
	this.shape_16.setTransform(-32.725,1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAnBdIgbgpQgOgVgFgGQgGgGgGgBQgGgDgNAAIgHAAIAABOIgmAAIAAi5IBPAAQAdAAAOAFQANAFAIANQAJAMAAARQAAAVgNAOQgMANgZADQANAHAIAJQAHAIAOAWIAXAkgAgtgOIAcAAQAaAAAGgBQAHgDAEgFQAEgGAAgJQAAgJgFgFQgFgHgJgBIgbAAIgdAAg");
	this.shape_17.setTransform(-50.225,1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFE45C").ss(3,1,1).p("AxzkrMAjnAAAQAiAAAdAMQAcANAWAWQAWAWANAcQAMAdAAAiIAAEXQAAAigMAdQgNAcgWAWQgWAWgcANQgdAMgiAAMgjnAAAQgiAAgdgMQgcgNgWgWQgWgWgNgcQgMgdAAgiIAAkXQAAgiAMgdQANgcAWgWQAWgWAcgNQAdgMAiAAg");
	this.shape_18.setTransform(0,3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF8A2E").s().p("AxzEsQghAAgdgMQgdgNgWgWQgWgWgNgdQgMgdAAghIAAkXQAAgiAMgdQANgcAWgWQAWgWAdgMQAdgNAhAAMAjnAAAQAhAAAdANQAdAMAWAWQAWAWANAcQAMAdAAAiIAAEXQAAAhgMAdQgNAdgWAWQgWAWgdANQgdAMghAAg");
	this.shape_19.setTransform(0,3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("A0TEsIAApXMAonAAAIAAJXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_10},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_9},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_20}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.5,-31.5,263,66.5);


(lib.Btn_Pause = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Art
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1BHIAAiOIBoAAIAAAYIhLAAIAAAhIBHAAIAAAWIhHAAIAAAoIBPAAIAAAXg");
	this.shape.setTransform(38.35,-1.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoA9QgOgMgDgYIAcgDQADAOAHAHQAIAGAMABQAOgBAHgFQAHgGAAgIQAAgFgCgDQgDgEgIgDIgWgGQgXgGgKgHQgNgMAAgRQAAgLAGgKQAHgJALgFQAMgFAQAAQAaAAAOALQAOAMAAAVIgdAAQgBgKgHgGQgGgEgLAAQgMAAgIAFQgEADAAAGQAAAFAEADQAGAFAUAFQAVAFAKAFQAKAGAGAIQAFAJAAAOQAAAMgGALQgHAKgNAGQgMAFgTAAQgaAAgPgNg");
	this.shape_1.setTransform(24.625,-1.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdBEQgKgFgGgHQgGgIgDgIQgCgNAAgYIAAhLIAdAAIAABNQAAASABAGQACAIAGAGQAIAFALAAQAMAAAHgFQAFgFACgHIABgZIAAhOIAdAAIAABKQAAAagCALQgDAKgGAIQgGAHgLAEQgLAFgQAAQgUAAgLgFg");
	this.shape_2.setTransform(10.8,-1.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAoBHIgMggIg4AAIgMAgIgfAAIA4iOIAeAAIA5COgAgTAPIAmAAIgTg1g");
	this.shape_3.setTransform(-3.625,-1.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag2BHIAAiOIAvAAQAZAAAIADQAMACAJALQAIAMAAAQQAAANgFAKQgFAHgHAFQgHAGgIABQgKACgTAAIgTAAIAAA2gAgZgGIAQAAQAQAAAGgCQAGgDADgEQADgFAAgGQAAgIgEgFQgFgFgHgCQgFgBgPAAIgOAAg");
	this.shape_4.setTransform(-15.675,-1.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNBHIAAiOIAbAAIAACOg");
	this.shape_5.setTransform(-36.45,-1.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOBHIAAiOIAcAAIAACOg");
	this.shape_6.setTransform(-42,-1.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#4FD8FF").ss(3,1,1).p("Ap/jvIT/AAQAiAAAdAMQAcANAWAWQAWAWANAcQAMAdAAAiIAACfQAAAigMAdQgNAcgWAWQgWAWgcANQgdAMgiAAIz/AAQgiAAgdgMQgcgNgWgWQgWgWgNgcQgMgdAAgiIAAifQAAgiAMgdQANgcAWgWQAWgWAcgNQAdgMAiAAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E2A5A").s().p("Ap/DwQghAAgegMQgcgNgWgWQgWgWgNgdQgMgdAAghIAAifQAAghAMgdQANgdAWgWQAWgWAcgNQAegMAhAAIT/AAQAhAAAeAMQAcANAWAWQAWAWANAdQAMAdAAAhIAACfQAAAhgMAdQgNAdgWAWQgWAWgcANQgeAMghAAg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.349)").s().p("Ap/DwQghAAgegNQgcgMgWgWQgWgWgNgcQgMgdAAgiIAAifQAAgiAMgdQANgcAWgWQAWgWAcgMQAegNAhAAIT/AAQAhAAAeANQAcAMAWAWQAWAWANAcQAMAdAAAiIAACfQAAAigMAdQgNAcgWAWQgWAWgcAMQgeANghAAg");
	this.shape_9.setTransform(0,5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2E4A9A").s().p("Ap/DwQghAAgegMQgcgNgWgWQgWgWgNgdQgMgdAAghIAAifQAAghAMgdQANgdAWgWQAWgWAcgNQAegMAhAAIT/AAQAhAAAeAMQAcANAWAWQAWAWANAdQAMAdAAAhIAACfQAAAhgMAdQgNAdgWAWQgWAWgcANQgeAMghAAg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag1BIIAAiOIBoAAIAAAXIhLAAIAAAhIBHAAIAAAXIhHAAIAAAnIBPAAIAAAYg");
	this.shape_11.setTransform(38.35,1.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgoA9QgOgMgDgYIAcgDQADAOAHAHQAIAGAMAAQAOAAAHgFQAHgGAAgIQAAgFgCgEQgDgDgIgDIgWgGQgXgGgKgIQgNgLAAgRQAAgLAGgJQAHgKALgFQAMgFAQAAQAaAAAOAMQAOAMAAATIgdABQgBgKgHgFQgGgFgLAAQgMAAgIAFQgEADAAAGQAAAFAEAEQAGAEAUAFQAVAFAKAGQAKAFAGAIQAFAJAAAOQAAAMgGALQgHAKgNAGQgMAFgTAAQgaAAgPgNg");
	this.shape_12.setTransform(24.625,1.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAoBIIgMghIg4AAIgMAhIgfAAIA4iOIAeAAIA5COgAgTAPIAmAAIgTg1g");
	this.shape_13.setTransform(-3.625,1.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag2BIIAAiOIAvAAQAZAAAIACQAMADAJAKQAIALAAASQAAANgFAIQgFAIgHAGQgHAFgIABQgKACgTABIgTAAIAAA2gAgZgGIAQAAQAQAAAGgCQAGgCADgFQADgFAAgGQAAgIgEgFQgFgFgHgCQgFgBgPAAIgOAAg");
	this.shape_14.setTransform(-15.675,1.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNBIIAAiOIAbAAIAACOg");
	this.shape_15.setTransform(-36.45,1.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOBIIAAiOIAcAAIAACOg");
	this.shape_16.setTransform(-42,1.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFE45C").ss(3,1,1).p("Ap/jvIT/AAQAiAAAdAMQAcANAWAWQAWAWANAcQAMAdAAAiIAACfQAAAigMAdQgNAcgWAWQgWAWgcANQgdAMgiAAIz/AAQgiAAgdgMQgcgNgWgWQgWgWgNgcQgMgdAAgiIAAifQAAgiAMgdQANgcAWgWQAWgWAcgNQAdgMAiAAg");
	this.shape_17.setTransform(0,3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF8A2E").s().p("Ap/DwQghAAgegNQgcgMgWgWQgWgWgNgcQgMgdAAgiIAAifQAAghAMgeQANgcAWgWQAWgWAcgMQAegNAhAAIT/AAQAhAAAeANQAcAMAWAWQAWAWANAcQAMAeAAAhIAACfQAAAigMAdQgNAcgWAWQgWAWgcAMQgeANghAAg");
	this.shape_18.setTransform(0,3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AsfDwIAAnfIY/AAIAAHfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{y:-1.425}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_10},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{y:-1.425}},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_9},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_2,p:{y:1.575}},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_19}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.5,-25.5,163,54.5);


(lib.Ship = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Art
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.9)").s().p("AgHAlQgEgDgCgGQgDgFgCgIQgBgHAAgIQAAgIABgGQACgIADgGQACgFAEgDQAEgDADAAQAEAAAEADQADADADAFQADAGABAIQACAGAAAIQAAAIgCAHQgBAIgDAFQgDAGgDADQgEADgEAAQgDAAgEgDg");
	this.shape.setTransform(-2,-20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0E1330").ss(1.8,1,1).p("ABBAAQAAAZgFAWQgFAWgJAQQgJARgLAJQgMAJgOAAQgNAAgMgJQgLgJgJgRQgJgQgFgWQgFgWAAgZQAAgYAFgVQAFgXAJgQQAJgQALgKQAMgJANAAQAOAAAMAJQALAKAJAQQAJAQAFAXQAFAVAAAYg");
	this.shape_1.setTransform(0,-16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4FD8FF").s().p("AgYBuQgMgJgJgQQgJgRgFgVQgFgWAAgZQAAgYAFgVQAFgXAJgQQAJgQAMgKQAMgJAMAAQANAAAMAJQAMAKAJAQQAJAQAFAXQAFAVAAAYQAAAZgFAWQgFAVgJARQgJAQgMAJQgMAKgNAAQgMAAgMgKg");
	this.shape_2.setTransform(0,-16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF8A2E").s().p("AgdE5QgNgNgHgaQgGgcgCg1QgDg2AChAQABhAACg6IAGhiQADgmAGghQAFggAIgZQAHgYAHgOQAIgOAFAAQAGAAAIAOQAHAOAHAYQAIAZAFAgQAGAhADAmIAGBiQACA6ABBAQACBAgDA2QgCA1gGAcQgHAagNANQgOANgQAAQgPAAgOgNg");
	this.shape_3.setTransform(0,-7.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0E1330").ss(2.4,1,1).p("AAAmpQARABASAcQASAdASAuQATAtAPA0QAPA0AKAvQAKAvAHA9QAHA8AEA/QAEBAABA2QAAA3gDAjQgDAhgHASQgHASgLAIQgKAJgOAEQgNAEgPAGQgPAGgVADQgVADgXAAQgWAAgVgDQgVgDgPgGQgPgGgNgEQgOgEgKgJQgLgIgHgSQgHgSgDghQgDgjAAg3QABg2AEhAQAEg/AHg8QAHg9AKgvQAKgvAPg0QAPg0ATgtQASguASgdQASgcAQgBg");
	this.shape_4.setTransform(0,-9.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EEF3FB").s().p("AgrGnQgUgDgQgGIgcgKQgOgEgKgJQgKgIgHgSQgIgSgDghQgDgjAAg3QABg2AEhAQAEg/AHg8QAHg9AKgvQAKgvAQg0QAPg0ASgtQASguASgdQASgcAQgBQARABASAcQASAdASAuQASAtAPA0QAQA0AKAvQAKAvAHA9QAHA8AEA/QAEBAABA2QAAA3gDAjQgDAhgIASQgHASgKAIQgLAJgNAEIgcAKQgQAGgUADQgVADgXAAQgWAAgVgDg");
	this.shape_5.setTransform(0,-9.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0E1330").ss(1.6,1,1).p("AAehZIAACzIg7AAIAAizg");
	this.shape_6.setTransform(47,23);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF5E3A").s().p("AgdBaIAAizIA7AAIAACzg");
	this.shape_7.setTransform(47,23);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0E1330").ss(1.6,1,1).p("AgdhZIA7AAIAACzIg7AAg");
	this.shape_8.setTransform(-47,23);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF5E3A").s().p("AgdBaIAAizIA7AAIAACzg");
	this.shape_9.setTransform(-47,23);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(142,162,224,0.8)").s().p("AAMBcQgmgCgjgGQgigGgQgLQgPgMgGgYQgGgYABgaQABgbAHgVQAHgUALgFQAMgDAXAKQAYALAbARQAbASAZASIApAcIAfAYQAPAMAKAMQALALACAJQACAIgLAEQgMAEggACIgdAAIgrgBg");
	this.shape_10.setTransform(31.1513,13.2725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(142,162,224,0.8)").s().p("AhTBdQgggCgMgEQgLgEACgIQACgJALgLQAKgMAPgMIAfgYIApgcQAZgSAbgSQAbgRAYgLQAXgKAMADQALAFAHAUQAHAVABAbQABAagGAYQgGAYgPAMQgQALgiAGQgjAGgmACIgrABIgdAAg");
	this.shape_11.setTransform(-31.1513,13.2725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#0E1330").ss(2.2,1,1).p("ADDChQgVAJg0AGQg0AGg/gBQg+AAg1gJQg1gKgXgVQgVgXgEgvQgEgwAJg1QAIg2AQgqQARgpATgLQATgHAjASQAiASAnAfQAnAgAjAhQAkAhAWAVQAWAWAVAYQAWAYAPAXQAPAXABARQACASgSAJg");
	this.shape_12.setTransform(28.5418,9.8916);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5C6FA8").s().p("AAHC1Qg+AAg1gJQg1gKgXgVQgVgXgEgvQgEgwAJg1QAIg2AQgqQARgpATgLQATgHAjASQAiASAnAfQAnAgAjAhQAkAhAWAVQAWAWAVAYQAWAYAPAXQAPAXABARQACASgSAJQgVAJg0AGQgwAFg5AAIgKAAg");
	this.shape_13.setTransform(28.5418,9.8916);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#0E1330").ss(2.2,1,1).p("AjCChQgSgJACgSQABgRAPgXQAPgXAWgYQAVgYAWgWQAWgVAkghQAjghAnggQAngfAigSQAjgSATAHQATALARApQAQAqAIA2QAJA1gEAwQgEAvgVAXQgXAVg1AKQg1AJg+AAQg/ABg0gGQg0gGgVgJg");
	this.shape_14.setTransform(-28.5418,9.8916);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5C6FA8").s().p("Ah5CwQg0gGgVgJQgSgJACgSQABgRAPgXQAPgXAWgYQAVgYAWgWQAWgVAkghQAjghAnggQAngfAigSQAjgSATAHQATALARApQAQAqAIA2QAJA1gEAwQgEAvgVAXQgXAVg1AKQg1AJg+AAIgKAAQg5AAgwgFg");
	this.shape_15.setTransform(-28.5418,9.8916);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE45C").s().p("AgPAzQgJgPgJgVQgKgVgEgSQgFgUADgHQAEgIAOgDQAOgFARAAQASAAAOAFQAOADAEAIQADAHgFAUQgEASgKAVQgJAVgJAPQgKAQgGAAQgFAAgKgQg");
	this.shape_16.setTransform(0,31.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,138,46,0.9)").s().p("AgcBnQgRgegQgrQgQgpgIgnQgJglAFgRQAGgPAagHQAagIAfAAQAgAAAaAIQAaAHAGAPQAFARgJAlQgIAngQApQgQArgRAeQgRAegMACQgLgCgRgeg");
	this.shape_17.setTransform(0,36.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFE45C").s().p("AgPBwQgJghgJgvQgKgtgEgpQgFgpADgSQAEgQAOgIQAOgIARAAQASAAAOAIQAOAIAEAQQADASgFApQgEApgKAtQgJAvgJAhQgKAhgGABQgFgBgKghg");
	this.shape_18.setTransform(0,37.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,138,46,0.9)").s().p("AgcCjQgRgwgQhDQgQhDgIg8QgJg8AFgaQAGgYAagMQAagMAfAAQAgAAAaAMQAaAMAGAYQAFAagJA8QgIA8gQBDQgQBDgRAwQgRAxgMACQgLgCgRgxg");
	this.shape_19.setTransform(0,42.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-53.2,102,117.2);


(lib.Explosion = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Art
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAcQgFgDgEgEQgEgEgDgFQgCgGAAgGQAAgFACgGQADgFAEgEQAEgEAFgDQAGgCAFAAQAGAAAGACQAFADAEAEQAEAEADAFQACAGAAAFQAAAGgCAGQgDAFgEAEQgEAEgFADQgGACgGAAQgFAAgGgCg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE45C").s().p("AgWA4QgLgGgIgIQgIgIgGgLQgEgLAAgMQAAgLAEgLQAGgLAIgIQAIgIALgGQALgEALAAQAMAAALAEQALAGAIAIQAIAIAGALQAEALAAALQAAAMgEALQgGALgIAIQgIAIgLAGQgLAEgMAAQgLAAgLgEg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,179,71,0.9)").s().p("AgUAzIhAAiIAihAIhFgVIBFgUIgihAIBAAiIAUhFIAVBFIBAgiIgiBAIBFAUIhFAVIAiBAIhAgiIgVBFg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,94,58,0.35)").s().p("AgzB8QgZgKgSgTQgTgSgKgZQgLgYAAgcQAAgbALgYQAKgZATgSQASgTAZgKQAYgLAbAAQAcAAAYALQAZAKASATQATASAKAZQALAYAAAbQAAAcgLAYQgKAZgTASQgSATgZAKQgYALgcAAQgbAAgYgLg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.875)").s().p("AgUAyQgKgFgHgHQgHgHgFgKQgEgJAAgMQAAgLAEgJQAFgKAHgHQAHgHAKgFQAJgEALAAQAMAAAJAEQAKAFAHAHQAHAHAFAKQAEAJAAALQAAAMgEAJQgFAKgHAHQgHAHgKAFQgJAEgMAAQgLAAgJgEg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,228,92,0.875)").s().p("AgpBkQgTgJgQgOQgOgQgJgTQgIgTAAgXQAAgWAIgTQAJgTAOgQQAQgOATgJQATgIAWAAQAXAAATAIQATAJAQAOQAOAQAJATQAIATAAAWQAAAXgIATQgJATgOAQQgQAOgTAJQgTAIgXAAQgWAAgTgIg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,179,71,0.787)").s().p("Ag3BSIh9AkIBUhkIhzg+ICCgLIgkh9IBkBUIA+hzIALCCIB9gkIhUBkIByA+IiBALIAkB9IhkhUIg+Byg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,94,58,0.306)").s().p("AheDgQgsgTghghQghghgTgtQgSgrgBgzQABgyASgsQATgsAhghQAhghAsgTQAsgSAygBQAzABArASQAtATAhAhQAhAhATAsQASAsABAyQgBAzgSArQgTAtghAhQghAhgtATQgrASgzABQgygBgsgSg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.75)").s().p("AgeBIQgNgGgLgLQgLgLgGgNQgGgPAAgQQAAgPAGgPQAGgNALgLQALgLANgGQAPgGAPAAQAQAAAPAGQANAGALALQALALAGANQAGAPAAAPQAAAQgGAPQgGANgLALQgLALgNAGQgPAGgQAAQgPAAgPgGg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,228,92,0.75)").s().p("Ag7CPQgdgLgWgVQgVgWgLgdQgNgcAAggQAAgfANgcQALgdAVgWQAWgVAdgLQAcgNAfAAQAgAAAcANQAdALAWAVQAVAWALAdQANAcAAAfQAAAggNAcQgLAdgVAWQgWAVgdALQgcANggAAQgfAAgcgNg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,179,71,0.675)").s().p("AgDCPIh7COIAXi7Ii8AOICVhzIiOh7IC7AXIgOi8IBzCVIB7iOIgYC7IC9gOIiVBzICOB7Ii7gYIAOC9g");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,94,58,0.262)").s().p("AiIFDQg/gbgwgwQgwgwgbg/QgbhAgBhJQABhIAbhAQAbg/AwgwQAwgwA/gbQBAgbBIgBQBJABBAAbQA/AbAwAwQAwAwAbA/QAbBAABBIQgBBJgbBAQgbA/gwAwQgwAwg/AbQhAAbhJABQhIgBhAgbg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.625)").s().p("AgnBeQgSgIgOgOQgOgOgIgSQgIgSAAgWQAAgVAIgSQAIgSAOgOQAOgOASgIQASgIAVAAQAWAAASAIQASAIAOAOQAOAOAIASQAIASAAAVQAAAWgIASQgIASgOAOQgOAOgSAIQgSAIgWAAQgVAAgSgIg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,228,92,0.625)").s().p("AhOC8QgmgQgbgcQgcgbgQgmQgQgkAAgrQAAgqAQgkQAQgmAcgbQAbgcAmgQQAkgQAqAAQArAAAkAQQAmAQAbAcQAcAbAQAmQAQAkAAAqQAAArgQAkQgQAmgcAbQgbAcgmAQQgkAQgrAAQgqAAgkgQg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,179,71,0.562)").s().p("AgqC2IjFCUIBRjpIj0ghIDdhqIiUjFIDpBRIAhj0IBqDdIDFiUIhRDpID0AhIjdBqICUDFIjphRIghD0g");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,94,58,0.219)").s().p("AixGnQhTgkhAg+Qg+hAgkhTQgkhTAAhfQAAheAkhTQAkhTA+hAQBAg+BTgkQBTgkBeAAQBfAABTAkQBTAkBAA+QA+BAAkBTQAkBTAABeQAABfgkBTQgkBTg+BAQhAA+hTAkQhTAkhfAAQheAAhTgkg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.5)").s().p("AgwB0QgXgKgRgRQgRgRgKgXQgKgWAAgbQAAgaAKgWQAKgXARgRQARgRAXgKQAWgKAaAAQAbAAAWAKQAXAKARARQARARAKAXQAKAWAAAaQAAAbgKAWQgKAXgRARQgRARgXAKQgWAKgbAAQgaAAgWgKg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,228,92,0.5)").s().p("AhhDoQgtgUgjgiQgigjgUgtQgTgtgBg1QABg0ATgtQAUgtAigjQAjgiAtgUQAtgTA0gBQA1ABAtATQAtAUAjAiQAiAjAUAtQATAtABA0QgBA1gTAtQgUAtgiAjQgjAigtAUQgtATg1ABQg0gBgtgTg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,179,71,0.45)").s().p("AhjDRIkSCAICckEIkdhmIEmhKIiAkSIEECcIBmkdIBKEmIESiAIicEEIEdBmIkmBKICAESIkEicIhmEdg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,94,58,0.175)").s().p("AjcILQhmgthOhNQhNhOgthnQgrhmgBh2QABh1ArhnQAthmBNhOQBOhNBmgtQBngrB1gBQB2ABBmArQBnAtBOBNQBNBOAtBmQArBnABB1QgBB2grBmQgtBnhNBOQhOBNhnAtQhmArh2ABQh1gBhngrg");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.375)").s().p("Ag6CKQgagMgVgUQgUgVgMgbQgMgbAAgfQAAgeAMgcQAMgaAUgVQAVgUAagMQAcgMAeAAQAfAAAbAMQAbAMAVAUQAUAVAMAaQAMAcAAAeQAAAfgMAbQgMAbgUAVQgVAUgbAMQgbAMgfAAQgeAAgcgMg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,228,92,0.375)").s().p("Ah0EUQg2gWgpgqQgqgpgWg2QgXg2gBg/QABg+AXg2QAWg2AqgpQApgqA2gWQA2gXA+gBQA/ABA2AXQA2AWApAqQAqApAWA2QAXA2ABA+QgBA/gXA2QgWA2gqApQgpAqg2AWQg2AXg/ABQg+gBg2gXg");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,179,71,0.338)").s().p("AimDaIlgBSID2kIIkzi/IFqgLIhSlgIEID2IC/kzIALFqIFghSIj2EIIEzC/IlqALIBSFgIkIj2Ii/Ezg");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,94,58,0.131)").s().p("AkGJuQh6g0hdhcQhchdg0h6Qg0h7gBiMQABiLA0h7QA0h6BchdQBdhcB6g0QB7g0CLgBQCMABB7A0QB6A0BdBcQBcBdA0B6QA0B7ABCLQgBCMg0B7Qg0B6hcBdQhdBch6A0Qh7A0iMABQiLgBh7g0g");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.25)").s().p("AhDCgQgfgNgYgYQgYgYgNgfQgOgfAAglQAAgkAOgfQANgfAYgYQAYgYAfgNQAfgOAkAAQAlAAAfAOQAfANAYAYQAYAYANAfQAOAfAAAkQAAAlgOAfQgNAfgYAYQgYAYgfANQgfAOglAAQgkAAgfgOg");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,228,92,0.25)").s().p("AiHFAQg+gagwgwQgwgwgag+QgchAAAhIQAAhHAchAQAag+AwgwQAwgwA+gaQBAgcBHAAQBIAABAAcQA+AaAwAwQAwAwAaA+QAcBAAABHQAABIgcBAQgaA+gwAwQgwAwg+AaQhAAchIAAQhHAAhAgcg");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,179,71,0.225)").s().p("AgYE+IkjEuIBKmdImkAIIFYjvIkukjIGdBKIgImkIDvFYIEjkuIhKGdIGkgIIlYDvIEuEjImdhKIAIGkg");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,94,58,0.087)").s().p("AkwLSQiNg9hshsQhrhrg9iNQg8iOgBijQABiiA8iOQA9iNBrhsQBshrCNg9QCOg8CigBQCjABCOA8QCNA9BrBrQBsBsA9CNQA8COABCiQgBCjg8COQg9CNhsBrQhrBsiNA9QiOA8ijABQiigBiOg8g");

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.125)").s().p("AhMC3QgkgQgbgbQgbgbgQgkQgPgkAAgpQAAgoAPgkQAQgkAbgbQAbgbAkgQQAkgPAoAAQApAAAkAPQAkAQAbAbQAbAbAQAkQAPAkAAAoQAAApgPAkQgQAkgbAbQgbAbgkAQQgkAPgpAAQgoAAgkgPg");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,228,92,0.125)").s().p("AiZFtQhHgfg3g2Qg2g3gfhHQgfhHAAhTQAAhSAfhHQAfhHA2g3QA3g2BHgfQBHgfBSAAQBTAABHAfQBHAfA3A2QA2A3AfBHQAfBHAABSQAABTgfBHQgfBHg2A3Qg3A2hHAfQhHAfhTAAQhSAAhHgfg");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,179,71,0.113)").s().p("AhmFcImMEMIC0m7InVhaIG4i5IkMmMIG7C0IBanVIC5G4IGMkMIi0G7IHVBaIm4C5IEMGMIm7i0IhaHVg");

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,94,58,0.044)").s().p("AlaM1QihhFh6h6Qh6h6hFihQhFihgBi6QABi5BFihQBFihB6h6QB6h6ChhFQChhFC5gBQC6ABChBFQChBFB6B6QB6B6BFChQBFChABC5QgBC6hFChQhFChh6B6Qh6B6ihBFQihBFi6ABQi5gBihhFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.1,-89.1,178.2,178.2);


(lib.Enemy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Art
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB3C1").s().p("AgJAYQgFgCgEgDQgDgEgCgFQgCgEAAgGQAAgFACgEQACgFADgDQAEgEAFgCQAFgCAEAAQAFAAAFACQAFACAEAEQADADACAFQACAEAAAFQAAAGgCAEQgCAFgDAEQgEADgFACQgFACgFAAQgEAAgFgCg");
	this.shape.setTransform(0,-25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0E1330").ss(2,1,1).p("AAAAeIAAg7");
	this.shape_1.setTransform(0,-21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0E1330").ss(1,1,1).p("AAeAAQAAAHgCAFQgCAFgFAEQgEAFgGACQgFACgGAAQgFAAgGgCQgFgCgEgFQgFgEgCgFQgCgFAAgHQAAgGACgFQACgFAFgEQAEgFAFgCQAGgCAFAAQAGAAAFACQAGACAEAFQAFAEACAFQACAFAAAGg");
	this.shape_2.setTransform(17,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A2E8A").s().p("AgLAbQgFgCgEgEQgFgEgCgGQgCgFAAgGQAAgGACgEQACgGAFgEQAEgEAFgDQAFgCAGAAQAGAAAGACQAFADAEAEQAFAEABAGQADAEAAAGQAAAGgDAFQgBAGgFAEQgEAEgFACQgGADgGAAQgGAAgFgDg");
	this.shape_3.setTransform(17,5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0E1330").ss(1,1,1).p("AAeAAQAAAHgCAFQgCAFgFAEQgEAFgFACQgFACgHAAQgGAAgFgCQgFgCgEgFQgFgEgCgFQgCgFAAgHQAAgGACgFQACgFAFgEQAEgFAFgCQAFgCAGAAQAHAAAFACQAFACAEAFQAFAEACAFQACAFAAAGg");
	this.shape_4.setTransform(6,5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4A2E8A").s().p("AgKAbQgGgCgEgEQgFgEgCgGQgCgFAAgGQAAgGACgEQACgGAFgEQAEgEAGgDQAEgCAGAAQAGAAAFACQAGADAEAEQAEAEACAGQADAEAAAGQAAAGgDAFQgCAGgEAEQgEAEgGACQgFADgGAAQgGAAgEgDg");
	this.shape_5.setTransform(6,5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0E1330").ss(1,1,1).p("AAeAAQAAAHgCAFQgCAFgFAEQgEAFgFACQgFACgHAAQgGAAgFgCQgFgCgEgFQgFgEgCgFQgCgFAAgHQAAgGACgFQACgFAFgEQAEgFAFgCQAFgCAGAAQAHAAAFACQAFACAEAFQAFAEACAFQACAFAAAGg");
	this.shape_6.setTransform(-6,5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A2E8A").s().p("AgKAbQgGgCgEgEQgEgEgCgGQgDgFAAgGQAAgGADgEQACgGAEgEQAEgEAGgDQAFgCAFAAQAHAAAEACQAGADAEAEQAFAEACAGQACAEAAAGQAAAGgCAFQgCAGgFAEQgEAEgGACQgEADgHAAQgFAAgFgDg");
	this.shape_7.setTransform(-6,5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0E1330").ss(1,1,1).p("AAeAAQAAAHgCAFQgCAFgFAEQgEAFgFACQgGACgGAAQgFAAgFgCQgGgCgEgFQgFgEgCgFQgCgFAAgHQAAgGACgFQACgFAFgEQAEgFAGgCQAFgCAFAAQAGAAAGACQAFACAEAFQAFAEACAFQACAFAAAGg");
	this.shape_8.setTransform(-17,5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE45C").s().p("AgLAbQgFgCgEgEQgFgEgBgGQgDgFAAgGQAAgGADgEQABgGAFgEQAEgEAFgDQAGgCAFAAQAHAAAFACQAFADAEAEQAFAEACAGQACAEAAAGQAAAGgCAFQgCAGgFAEQgEAEgFACQgFADgHAAQgFAAgGgDg");
	this.shape_9.setTransform(-17,5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(165,124,242,0.8)").s().p("AhVAlQgogDgegFQgegGgRgIQgQgGgBgJQABgIAQgGQARgIAegGQAegFAogDQAogDAtAAQAuAAAoADQAoADAeAFQAeAGARAIQAQAGABAIQgBAJgQAGQgRAIgeAGQgeAFgoADQgoADguAAQgtAAgogDg");
	this.shape_10.setTransform(0,-1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0E1330").ss(2.2,1,1).p("AEYAAQAAAVgWASQgVASgnAOQgmAOgzAHQgyAIg7AAQg6AAgygIQgzgHgmgOQgngOgVgSQgWgSAAgVQAAgUAWgSQAVgSAngOQAmgOAzgHQAygIA6AAQA7AAAyAIQAzAHAmAOQAnAOAVASQAWASAAAUg");
	this.shape_11.setTransform(0,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7B4BD6").s().p("AhsBcQgzgHgmgOQgmgOgWgSQgVgSgBgVQABgUAVgSQAWgSAmgNQAmgOAzgIQAzgIA5AAQA6AAAzAIQAzAIAmAOQAmANAWASQAVASABAUQgBAVgVASQgWASgmAOQgmAOgzAHQgzAIg6AAQg5AAgzgIg");
	this.shape_12.setTransform(0,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgFAOIgFgCIgDgGQgCgDAAgDQAAgCACgDIADgGIAFgDQACgBADAAQADAAADABIAFADIAEAGQABADAAACQAAADgBADIgEAGIgFACQgDACgDAAQgDAAgCgCg");
	this.shape_13.setTransform(1.5,-8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1B2A2A").s().p("AgTAuQgIgEgHgGQgHgIgEgJQgEgJAAgKQAAgJAEgJQAEgKAHgGQAHgHAIgEQAJgEAKAAQALAAAJAEQAIAEAHAHQAHAGAEAKQAEAJAAAJQAAAKgEAJQgEAJgHAIQgHAGgIAEQgJAEgLAAQgKAAgJgEg");
	this.shape_14.setTransform(0,-6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#0E1330").ss(2,1,1).p("ACMAAQAAAZgLAWQgLAWgTAQQgTARgZAJQgaAJgdAAQgcAAgagJQgZgJgTgRQgTgQgLgWQgLgWAAgZQAAgYALgWQALgWATgQQATgQAZgKQAagJAcAAQAdAAAaAJQAZAKATAQQATAQALAWQALAWAAAYg");
	this.shape_15.setTransform(0,-6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(124,245,194,0.85)").s().p("Ag2BuQgZgJgTgQQgTgQgLgXQgLgVAAgZQAAgYALgVQALgXATgQQATgRAZgIQAagKAcAAQAdAAAaAKQAZAIATARQATAQALAXQALAVAAAYQAAAZgLAVQgLAXgTAQQgTAQgZAJQgaAKgdAAQgcAAgagKg");
	this.shape_16.setTransform(0,-6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.25)").s().p("Ah0BJQg2gFgpgMQgqgKgWgPQgXgOgBgRQABgQAXgOQAWgOAqgLQApgMA2gGQA2gGA+AAQA/AAA2AGQA2AGApAMQAqALAWAOQAXAOABAQQgBARgXAOQgWAPgqAKQgpAMg2AFQg2AHg/AAQg+AAg2gHg");
	this.shape_17.setTransform(0,6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF5E7A").s().p("AgJAYQgFgCgEgDQgDgEgCgFQgCgEAAgGQAAgFACgEQACgFADgDQAEgEAFgCQAFgCAEAAQAFAAAFACQAFACAEAEQADADACAFQACAEAAAFQAAAGgCAEQgCAFgDAEQgEADgFACQgFACgFAAQgEAAgFgCg");
	this.shape_18.setTransform(0,-25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFE45C").s().p("AgKAbQgGgCgEgEQgEgEgCgGQgDgFAAgGQAAgGADgEQACgGAEgEQAEgEAGgDQAFgCAFAAQAHAAAEACQAGADAEAEQAFAEACAGQACAEAAAGQAAAGgCAFQgCAGgFAEQgEAEgGACQgEADgHAAQgFAAgFgDg");
	this.shape_19.setTransform(-6,5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4A2E8A").s().p("AgLAbQgFgCgEgEQgFgEgBgGQgDgFAAgGQAAgGADgEQABgGAFgEQAEgEAFgDQAGgCAFAAQAHAAAFACQAFADAEAEQAFAEACAGQACAEAAAGQAAAGgCAFQgCAGgFAEQgEAEgFACQgFADgHAAQgFAAgGgDg");
	this.shape_20.setTransform(-17,5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFE45C").s().p("AgKAbQgGgCgEgEQgFgEgCgGQgCgFAAgGQAAgGACgEQACgGAFgEQAEgEAGgDQAEgCAGAAQAGAAAFACQAGADAEAEQAEAEACAGQADAEAAAGQAAAGgDAFQgCAGgEAEQgEAEgGACQgFADgGAAQgGAAgEgDg");
	this.shape_21.setTransform(6,5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFE45C").s().p("AgLAbQgFgCgEgEQgFgEgCgGQgCgFAAgGQAAgGACgEQACgGAFgEQAEgEAFgDQAFgCAGAAQAGAAAGACQAFADAEAEQAFAEABAGQADAEAAAGQAAAGgDAFQgBAGgFAEQgEAEgFACQgGADgGAAQgGAAgFgDg");
	this.shape_22.setTransform(17,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_20},{t:this.shape_8},{t:this.shape_19},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_18}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_20},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_21},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_20},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_22},{t:this.shape_2},{t:this.shape_1},{t:this.shape_18}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-27.6,60,41.6);


(lib.Bullet = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Art
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4FD8FF").ss(1.6,1,1).p("AAAiLQAHAAAFACQAFACAEAFQAFAEACAFQACAFAAAHIAADbQAAAHgCAFQgCAFgFAEQgEAFgFACQgFACgHAAQgGAAgFgCQgFgCgEgFQgFgEgCgFQgCgFAAgHIAAjbQAAgHACgFQACgFAFgEQAEgFAFgCQAFgCAGAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8FBFF").s().p("AgLCKQgFgCgEgFQgEgEgDgGQgCgEAAgHIAAjbQAAgHACgFQADgFAEgEQAEgFAFgCQAGgCAFAAQAGAAAGACQAFACAEAFQAEAEADAFQACAFAAAHIAADbQAAAHgCAEQgDAGgEAEQgEAFgFACQgGACgGAAQgFAAgGgCg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(79,216,255,0.35)").s().p("AgeC4QgPgPgLgcQgLgbgGgkQgGglAAgpQAAgoAGglQAGgkALgbQALgcAPgQQAPgOAPgBQAQABAPAOQAPAQALAcQALAbAGAkQAGAlAAAoQAAApgGAlQgGAkgLAbQgLAcgPAPQgPAPgQABQgPgBgPgPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bullet, new cjs.Rectangle(-8,-20,16,40), null);


(lib.Boss = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Art
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0E1330").ss(1.4,1,1).p("Agdg7IA7AAIAAB3Ig7AAg");
	this.shape.setTransform(36,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5A1410").s().p("AgdA8IAAh3IA7AAIAAB3g");
	this.shape_1.setTransform(36,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0E1330").ss(1.4,1,1).p("Agdg7IA7AAIAAB3Ig7AAg");
	this.shape_2.setTransform(18,30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5A1410").s().p("AgdA8IAAh3IA7AAIAAB3g");
	this.shape_3.setTransform(18,30);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0E1330").ss(1.4,1,1).p("Agdg7IA7AAIAAB3Ig7AAg");
	this.shape_4.setTransform(-18,30);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5A1410").s().p("AgdA8IAAh3IA7AAIAAB3g");
	this.shape_5.setTransform(-18,30);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0E1330").ss(1.4,1,1).p("Agdg7IA7AAIAAB3Ig7AAg");
	this.shape_6.setTransform(-36,30);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5A1410").s().p("AgdA8IAAh3IA7AAIAAB3g");
	this.shape_7.setTransform(-36,30);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A0A0A").s().p("AgNAgQgGgDgEgEQgFgFgDgGQgDgHAAgHQAAgHADgFQADgHAFgFQAEgFAGgCQAHgDAGAAQAIAAAFADQAHACAEAFQAFAFADAHQADAFAAAHQAAAHgDAHQgDAGgFAFQgEAEgHADQgFADgIAAQgGAAgHgDg");
	this.shape_8.setTransform(28,-12);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0E1330").ss(1.6,1,1).p("ABGAAQAAAOgFANQgGANgJAJQgKAKgNAGQgNAFgOAAQgNAAgNgFQgNgGgJgKQgKgJgGgNQgFgNAAgOQAAgNAFgNQAGgNAKgJQAJgKANgGQANgFANAAQAOAAANAFQANAGAKAKQAJAJAGANQAFANAAANg");
	this.shape_9.setTransform(28,-14);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaBAQgNgFgKgKQgJgJgGgNQgFgMAAgPQAAgOAFgMQAGgNAJgKQAKgJANgFQAMgGAOAAQAOAAANAGQANAFAJAJQAKAKAGANQAFAMAAAOQAAAPgFAMQgGANgKAJQgJAKgNAFQgNAGgOAAQgOAAgMgGg");
	this.shape_10.setTransform(28,-14);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A0A0A").s().p("AgMAgQgHgDgEgEQgFgFgDgGQgDgHAAgHQAAgHADgFQADgHAFgFQAEgFAHgCQAFgDAHAAQAHAAAHADQAGACAEAFQAFAFADAHQADAFAAAHQAAAHgDAHQgDAGgFAFQgEAEgGADQgHADgHAAQgHAAgFgDg");
	this.shape_11.setTransform(-28,-12);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#0E1330").ss(1.6,1,1).p("ABGAAQAAAOgFANQgGANgKAJQgJAKgNAGQgNAFgOAAQgNAAgNgFQgNgGgKgKQgJgJgGgNQgFgNAAgOQAAgNAFgNQAGgNAJgJQAKgKANgGQANgFANAAQAOAAANAFQANAGAJAKQAKAJAGANQAFANAAANg");
	this.shape_12.setTransform(-28,-14);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaBAQgNgFgJgKQgKgJgGgNQgFgMAAgPQAAgOAFgMQAGgNAKgKQAJgJANgFQANgGANAAQAOAAANAGQANAFAKAJQAJAKAGANQAFAMAAAOQAAAPgFAMQgGANgJAJQgKAKgNAFQgNAGgOAAQgNAAgNgGg");
	this.shape_13.setTransform(-28,-14);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.9)").s().p("AgWA3QgLgFgIgHQgIgJgGgKQgEgMAAgMQAAgLAEgMQAGgKAIgJQAIgHALgFQALgFALAAQAMAAALAFQALAFAIAHQAIAJAGAKQAEAMAAALQAAAMgEAMQgGAKgIAJQgIAHgLAFQgLAFgMAAQgLAAgLgFg");
	this.shape_14.setTransform(0,4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#0E1330").ss(2,1,1).p("ACCAAQAAAbgKAYQgKAXgSASQgSASgXAKQgYAKgbAAQgaAAgYgKQgXgKgSgSQgSgSgKgXQgKgYAAgbQAAgaAKgYQAKgXASgSQASgSAXgKQAYgKAaAAQAbAAAYAKQAXAKASASQASASAKAXQAKAYAAAag");
	this.shape_15.setTransform(0,4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE45C").s().p("AgxB4QgYgLgSgRQgSgSgKgXQgKgYAAgbQAAgaAKgYQAKgXASgSQASgRAYgLQAXgKAaAAQAbAAAXAKQAYALASARQASASAKAXQAKAYAAAaQAAAbgKAYQgKAXgSASQgSARgYALQgXAKgbAAQgaAAgXgKg");
	this.shape_16.setTransform(0,4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(240,106,79,0.8)").s().p("AGaB4Qg1gLhIgSQhJgShLgPQhLgPg+gBQg9ABhLAPQhLAPhJASQhIASg1ALQg2AKgQgIQgOgKASgdQARgdAnglQAmgjAwggQAwggAugPQAugOA/gGQA/gHBDAAQBEAAA/AHQA/AGAuAOQAuAPAwAgQAwAgAmAjQAnAlARAdQASAdgOAKQgHADgOAAQgSAAgfgFg");
	this.shape_17.setTransform(0,-22.202);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#0E1330").ss(2.6,1,1).p("Aprg8QAPgoAegsQAegsAqgqQAqgrA0giQAzgiA6gTQA6gTBPgJQBOgKBUAAQBVAABOAKQBPAJA6ATQA6ATAzAiQA0AiAqArQAqAqAeAsQAeAsAPAoQAPAnAEArQAEArgJAsQgJArgXAnQgXAngnAdQgnAdg/AZQg/AZhMAUQhMAThNALQhNALhFAAQhEAAhNgLQhNgLhMgTQhMgUg/gZQg/gZgngdQgngdgXgnQgXgngJgrQgJgsAEgrQAEgrAPgng");
	this.shape_18.setTransform(0,-3.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D0402F").s().p("AiRGEQhNgLhMgTQhLgUg/gZQhAgZgngdQgngdgWgnQgYgngJgrQgIgsADgrQAEgrAPgnQAPgoAfgsQAegsAqgqQAqgrAzgiQAzgiA6gTQA6gTBPgJQBOgKBUAAQBVAABOAKQBPAJA6ATQA6ATAzAiQAzAiAqArQAqAqAeAsQAfAsAPAoQAPAnAEArQADArgIAsQgJArgYAnQgWAngnAdQgnAdhAAZQg/AZhLAUQhMAThNALQhOALhEAAQhDAAhOgLg");
	this.shape_19.setTransform(0,-3.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#0E1330").ss(2.4,1,1).p("AiYjfQALABAiARQAiARAqAcQAqAbAmAfQAmAfAUAcQATAdALAmQAMAnAEAnQAFAogCAfQgBAfgIAMQgIALgVgFQgUgEgagOQgZgOgYgTQgXgSgMgRQgMgQgFgWQgFgVgCgZQgBgYgDgYQgDgYgJgXQgJgXgUgeQgUgegUgdQgTgdgLgTQgKgTAJgBg");
	this.shape_20.setTransform(75.2654,22.3781);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A3291F").s().p("AB2DeQgUgEgagOQgZgOgYgTQgXgSgMgRQgMgQgFgWQgFgVgCgZIgEgwQgDgYgJgXQgJgXgUgeIgog7QgTgdgLgTQgKgTAJgBQALABAiARQAiARAqAcQAqAbAmAfQAmAfAUAcQATAdALAmQAMAnAEAnQAFAogCAfQgBAfgIAMQgFAIgMAAIgMgCg");
	this.shape_21.setTransform(75.2654,22.3781);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#0E1330").ss(2.4,1,1).p("ACZjfQAJABgKATQgLATgTAdQgUAdgUAeQgUAegJAXQgJAXgDAYQgDAYgBAYQgCAZgFAVQgFAWgMAQQgNARgWASQgYATgZAOQgaAOgUAEQgVAFgIgLQgIgMgBgfQgCgfAFgoQAEgnAMgnQALgmATgdQAUgcAmgfQAmgfAqgbQAqgcAigRQAigRALgBg");
	this.shape_22.setTransform(-75.2654,22.3781);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A3291F").s().p("AiSDYQgIgMgBgfQgCgfAFgoQAEgnAMgnQALgmATgdQAUgcAmgfQAmgfAqgbQAqgcAigRQAigRALgBQAJABgKATQgLATgTAdIgoA7QgUAegJAXQgJAXgDAYIgEAwQgCAZgFAVQgFAWgMAQQgNARgWASQgYATgZAOQgaAOgUAEIgMACQgMAAgFgIg");
	this.shape_23.setTransform(-75.2654,22.3781);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.9)").s().p("AgaA/QgNgFgJgJQgJgKgGgMQgFgMAAgPQAAgOAFgMQAGgMAJgKQAJgJANgFQANgGANAAQAOAAANAGQANAFAJAJQAJAKAGAMQAFAMAAAOQAAAPgFAMQgGAMgJAKQgJAJgNAFQgNAGgOAAQgNAAgNgGg");
	this.shape_24.setTransform(0,4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#0E1330").ss(2,1,1).p("ACWAAQAAAfgMAbQgMAbgUAVQgVAUgbAMQgbAMgfAAQgeAAgbgMQgbgMgVgUQgUgVgMgbQgMgbAAgfQAAgeAMgbQAMgbAUgVQAVgUAbgMQAbgMAeAAQAfAAAbAMQAbAMAVAUQAUAVAMAbQAMAbAAAeg");
	this.shape_25.setTransform(0,4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFE45C").s().p("Ag5CKQgbgMgUgUQgVgVgMgbQgLgbAAgfQAAgeALgbQAMgbAVgVQAUgUAbgMQAbgMAeAAQAfAAAbAMQAbAMAUAUQAVAVAMAbQALAbAAAeQAAAfgLAbQgMAbgVAVQgUAUgbAMQgbAMgfAAQgeAAgbgMg");
	this.shape_26.setTransform(0,4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.9)").s().p("AgeBIQgNgGgLgLQgLgLgGgOQgGgNAAgRQAAgPAGgOQAGgOALgLQALgLANgGQAPgGAPAAQAQAAAPAGQANAGALALQALALAGAOQAGAOAAAPQAAARgGANQgGAOgLALQgLALgNAGQgPAGgQAAQgPAAgPgGg");
	this.shape_27.setTransform(0,4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#0E1330").ss(2,1,1).p("ACpAAQAAAjgNAfQgNAfgXAXQgXAXgfANQgfANgjAAQgiAAgfgNQgfgNgXgXQgXgXgNgfQgNgfAAgjQAAgiANgfQANgeAXgYQAXgXAfgNQAfgNAiAAQAjAAAfANQAfANAXAXQAXAYANAeQANAfAAAig");
	this.shape_28.setTransform(0,4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFE45C").s().p("AhBCbQgfgNgXgXQgWgWgOgfQgNgfAAgjQAAgiANgfQAOgfAWgWQAXgXAfgNQAfgOAiAAQAjAAAfAOQAfANAXAXQAWAWAOAfQANAfAAAiQAAAjgNAfQgOAfgWAWQgXAXgfANQgfAOgjAAQgiAAgfgOg");
	this.shape_29.setTransform(0,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.1,-45,184.3,91);


(lib.BG_Space = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Art
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.9)").s().p("AgNAOIg4gOIA4gNIANg4IAOA4IA4ANIg4AOIgOA4g");
	this.shape.setTransform(260,460);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.9)").s().p("AgNAOIg4gOIA4gNIANg4IAOA4IA4ANIg4AOIgOA4g");
	this.shape_1.setTransform(660,860);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.9)").s().p("AgNAOIg4gOIA4gNIANg4IAOA4IA4ANIg4AOIgOA4g");
	this.shape_2.setTransform(520,620);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.9)").s().p("AgNAOIg4gOIA4gNIANg4IAOA4IA4ANIg4AOIgOA4g");
	this.shape_3.setTransform(140,120);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.303)").s().p("AgEAMIgFgCIgCgFIgBgFIABgEIACgEIAFgDIAEgBIAFABIAEADIADAEIABAEIgBAFIgDAFIgEACIgFABIgEgBg");
	this.shape_4.setTransform(390.15,867.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.503)").s().p("AgDAKIgEgDIgCgDIgBgEIABgDIACgEIAEgCIADgBIAEABIAEACIACAEIABADIgBAEIgCADIgEADIgEABIgDgBg");
	this.shape_5.setTransform(126.975,143.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.825)").s().p("AgCAHIgCgCIgCgCIgBgDIABgCIACgDIACgBIACgBIADABIACABIACADIABACIgBADIgCACIgCACIgDABIgCgBg");
	this.shape_6.setTransform(304.175,766.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.802)").s().p("AgCAIIgEgCIgCgCIAAgEIAAgDIACgCIAEgCIACgBIADABIAEACIABACIABADIgBAEIgBACIgEACIgDABIgCgBg");
	this.shape_7.setTransform(634.55,188);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.34)").s().p("AgEANIgFgDIgCgFIgCgFQAAgCACgCIACgFIAFgDIAEgBIAGABIAEADIADAFIABAEIgBAFIgDAFIgEADIgGABIgEgBg");
	this.shape_8.setTransform(312.425,823.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.607)").s().p("AgFAOQgDgBgBgDIgDgEQgCgDAAgDQAAgCACgDIADgFIAEgDIAFgBIAGABIAEADIAEAFQABADAAACQAAADgBADIgEAEIgEAEIgGABIgFgBg");
	this.shape_9.setTransform(82.4,596.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.357)").s().p("AgFAPIgFgEIgEgFIgBgGIABgFIAEgFQACgCADgBIAFgCQADAAADACQADABACACQACACABADQACADAAACIgCAGQgBADgCACIgFAEIgGABIgFgBg");
	this.shape_10.setTransform(168.275,467.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.487)").s().p("AgEANIgFgDIgDgEIgBgGIABgFIADgEIAFgCIAEgCIAFACIAFACIADAEIABAFIgBAGIgDAEIgFADIgFABIgEgBg");
	this.shape_11.setTransform(391.225,365.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.351)").s().p("AgEANIgFgDIgDgEQgBgDAAgDQAAgCABgCIADgFIAFgDIAEgBIAGABIAEADIADAFIABAEIgBAGIgDAEIgEADIgGABIgEgBg");
	this.shape_12.setTransform(7.575,804.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.614)").s().p("AgEANIgFgDIgDgFIgBgFIABgEIADgFIAFgDIAEgBIAFABIAFADIACAFIACAEIgCAFIgCAFIgFADIgFABIgEgBg");
	this.shape_13.setTransform(99.925,348.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.665)").s().p("AgFAOIgEgEIgDgEQgCgDAAgDQAAgCACgDIADgEIAEgDIAFgCQADAAADACIAEADIAEAEIABAFIgBAGIgEAEIgEAEIgGABIgFgBg");
	this.shape_14.setTransform(428.025,469.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.321)").s().p("AgBAGIgCgCIgCgCIAAgCIAAgCIACgCIACgBIABAAIADAAIACABIABACIAAACIAAACIgBACIgCACIgDAAIgBAAg");
	this.shape_15.setTransform(339.475,505.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.764)").s().p("AgFAOQgDgBgCgDIgDgEIgBgGIABgFIADgFIAFgDIAFgBIAGABIAEADQADACABADIABAFIgBAGIgEAEQgCADgCABIgGABIgFgBg");
	this.shape_16.setTransform(483.475,317.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.421)").s().p("AgFAOIgEgDQgDgCgBgDIgBgGIABgFQABgCADgCIAEgEIAFgBIAGABIAEAEIAEAEIABAFIgBAGIgEAFIgEADIgGABIgFgBg");
	this.shape_17.setTransform(632.075,528.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.77)").s().p("AgEANQgDgBgCgCIgDgFQgBgCAAgDQAAgCABgDIADgEQACgCADgBIAEgBIAFABQADABACACIADAEQABADAAACQAAADgBACIgDAFQgCACgDABIgFABIgEgBg");
	this.shape_18.setTransform(631.025,111.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.308)").s().p("AgFAOIgFgDIgDgFIgBgGIABgFIADgFIAFgDIAFgBIAGABIAFADIADAFIABAFIgBAGIgDAFIgFADIgGABIgFgBg");
	this.shape_19.setTransform(157.35,3.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.856)").s().p("AgEANIgFgEIgCgEIgBgFIABgEIACgFIAFgCIAEgBIAFABIAEACIAEAFIABAEIgBAFIgEAEIgEAEIgFABIgEgBg");
	this.shape_20.setTransform(457.35,546.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.4)").s().p("AgBAGIgDgBIgBgDIgBgCIABgBIABgCIADgCIABgBIACABIACACIACACIABABIgBACIgCADIgCABIgCABIgBgBg");
	this.shape_21.setTransform(697.35,640.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.377)").s().p("AgEAOQgEgBgCgCIgCgFIgCgGQAAgCACgCIACgGIAGgDQACgBACAAQADAAADABIAEADQADACABAEIABAEIgBAGIgEAFIgEADIgGABIgEgBg");
	this.shape_22.setTransform(481.2,42.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.877)").s().p("AgFAOIgFgDIgEgFIgBgGIABgFIAEgFIAFgEIAFgBIAGABIAFAEIADAFIACAFQAAADgCADIgDAFIgFADIgGACIgFgCg");
	this.shape_23.setTransform(688.525,71.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.854)").s().p("AgDAIIgCgCIgCgDIgBgDIABgCIACgDIACgCIADgBIADABIADACIACADIABACIgBADIgCADIgDACIgDABIgDgBg");
	this.shape_24.setTransform(471.425,658.525);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.617)").s().p("AgFANIgEgDIgDgFIgBgFIABgFIADgEIAEgDIAFgBIAFABIAFADIADAEIABAFIgBAFIgDAFIgFADIgFABIgFgBg");
	this.shape_25.setTransform(575.65,616.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.694)").s().p("AgDAJIgDgDIgCgDIAAgDIAAgDIACgCIADgCIADgBIAEABIADACIACACIAAADIAAADIgCADIgDADIgEABIgDgBg");
	this.shape_26.setTransform(647.825,887.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.824)").s().p("AgCAHIgDgCIgCgCIAAgDIAAgCIACgDIADgBIACgBIADABIADABIACADIAAACIAAADIgCACIgDACIgDABIgCgBg");
	this.shape_27.setTransform(355.9,89.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.747)").s().p("AgEANIgFgDIgDgEIgBgGIABgFIADgEIAFgCIAEgCIAGACIADACIAEAEIABAFIgBAGIgEAEIgDADIgGABIgEgBg");
	this.shape_28.setTransform(648.7,627.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.542)").s().p("AgFAPIgFgEIgEgFIgBgGIABgFIAEgFIAFgEIAFgBIAGABIAFAEQADACABADIABAFIgBAGQgBADgDACIgFAEIgGABIgFgBg");
	this.shape_29.setTransform(668.175,542.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.331)").s().p("AgCAHIgCgCIgCgCIgBgDIABgCIACgCIACgCIACAAIADAAIADACIABACIAAACIAAADIgBACIgDACIgDAAIgCAAg");
	this.shape_30.setTransform(166.65,834.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.425)").s().p("AgDAIIgCgCIgCgDIAAgDIAAgCIACgDIACgCIADAAIADAAIADACIACADIABACIgBADIgCADIgDACIgDAAIgDAAg");
	this.shape_31.setTransform(22.8,244.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.599)").s().p("AgFANIgEgDIgDgEIgBgGIABgFIADgEIAEgDIAFgBIAGABIAEADIADAEIABAFIgBAGIgDAEIgEADIgGABIgFgBg");
	this.shape_32.setTransform(178.975,853.725);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.553)").s().p("AgCAGIgCgCIgBgBIAAgDIAAgCIABgCIACgBIACAAIADAAIABABIACACIAAACIAAADIgCABIgBACIgDAAIgCAAg");
	this.shape_33.setTransform(174.15,394.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.587)").s().p("AgFAOIgFgDIgEgFIgBgGIABgFIAEgFIAFgEQADgBACAAIAGABQADACACACIAEAFIABAFIgBAGIgEAFQgCADgDAAIgGACQgCAAgDgCg");
	this.shape_34.setTransform(557.125,392.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.618)").s().p("AgCAHIgCgCIgCgCIAAgDIAAgCIACgCIACgCIACAAIADAAIACACIACACIAAACIAAADIgCACIgCACIgDAAIgCAAg");
	this.shape_35.setTransform(179.325,957.725);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.594)").s().p("AgBAGIgDgCIgBgBIgBgDIABgCIABgCIADgBIABAAIACAAIACABIACACIABACIgBADIgCABIgCACIgCAAIgBAAg");
	this.shape_36.setTransform(487.3,143.65);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.401)").s().p("AgBAGIgDgBIgBgCIgBgDIABgBIABgCIADgCIABAAIACAAIACACIACACIABABIgBADIgCACIgCABIgCAAIgBAAg");
	this.shape_37.setTransform(149.7,56.95);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.554)").s().p("AgFAPIgFgEIgDgFQgCgDAAgDIACgFIADgFIAFgEIAFgBIAGABIAFAEQADACABADIABAFIgBAGIgEAFIgFAEIgGABIgFgBg");
	this.shape_38.setTransform(209.025,93.225);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.518)").s().p("AgFANIgDgDIgEgFIgBgFQAAgCABgCIAEgFIADgDIAFgBIAFABIAFADIADAFIABAEIgBAFIgDAFIgFADIgFABIgFgBg");
	this.shape_39.setTransform(32.25,162.775);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.306)").s().p("AgDAJIgDgCIgCgDIAAgEIAAgCIACgDIADgCIADgBIAEABIADACIACADIAAACIAAAEIgCADIgDACIgEAAIgDAAg");
	this.shape_40.setTransform(274.775,923.325);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.382)").s().p("AgDAJIgDgBIgCgEIgBgEIABgDIACgEIADgCIADgBIAEABIAEACIACAEIABADIgBAEIgCAEIgEABIgEABIgDgBg");
	this.shape_41.setTransform(211.25,183.75);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.791)").s().p("AgEALIgEgCIgCgEIgBgFIABgEIACgEIAEgCIAEgBIAFABIADACIADAEIABAEIgBAFIgDAEIgDACIgFABIgEgBg");
	this.shape_42.setTransform(295.525,905.575);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.765)").s().p("AgFAPIgFgEQgCgCgCgDIgBgGIABgFQACgDACgCQACgCADgBQACgCADAAIAGACQADABACACIAEAFIABAFIgBAGIgEAFIgFAEIgGABIgFgBg");
	this.shape_43.setTransform(13.1,277.425);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.876)").s().p("AgEANIgFgEIgCgEIgBgFIABgEIACgFIAFgDIAEAAIAFAAIAEADIADAFIABAEIgBAFIgDAEIgEAEIgFABIgEgBg");
	this.shape_44.setTransform(645.075,916.55);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.718)").s().p("AgBAGIgDgCIgBgBIAAgDIAAgCIABgCIADgBIABAAIADAAIACABIABACIAAACIAAADIgBABIgCACIgDAAIgBAAg");
	this.shape_45.setTransform(127.825,440.65);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.499)").s().p("AgCAIIgDgCIgCgDIAAgDIAAgCIACgDIADgCIACAAIADAAIADACIACADIAAACIAAADIgCADIgDACIgDAAIgCAAg");
	this.shape_46.setTransform(550.925,590.825);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.437)").s().p("AgBAGIgDgCIgBgCIgBgCIABgCIABgCIADgBIABgBIACABIACABIACACIABACIgBACIgCACIgCACIgCAAIgBAAg");
	this.shape_47.setTransform(651.1,96.95);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.635)").s().p("AgCAIIgEgCIgCgDIAAgDIAAgDIACgDIAEgCIACAAIAEAAIADACIABADIABADIgBADIgBADIgDACIgEABIgCgBg");
	this.shape_48.setTransform(256.2,717.075);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.466)").s().p("AgEALIgEgCIgCgEIgBgFIABgEQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAgBQABAAAAAAQAAgBABAAQABAAAAAAIAEgBIAFABIAEACIACAEIABAEIgBAFIgCAEIgEACIgFABIgEgBg");
	this.shape_49.setTransform(297.225,194.575);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.417)").s().p("AgFAOIgGgDIgDgFIgBgGIABgFIADgGIAGgDIAFgBIAGABIAFADQACADABADQACACAAADIgCAGQgBADgCACQgCADgDAAIgGACIgFgCg");
	this.shape_50.setTransform(339.3,329.15);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.621)").s().p("AgCAIIgDgCIgCgDIgBgDIABgDIACgCIADgCIACgBIADABIADACIACACIABADIgBADIgCADIgDACIgDABIgCgBg");
	this.shape_51.setTransform(33.35,601.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.326)").s().p("AgFANIgEgDIgDgEIgBgGIABgFIADgEIAEgDIAFgBIAGABIAEADIADAEIABAFIgBAGIgDAEIgEADIgGABIgFgBg");
	this.shape_52.setTransform(116.15,292.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.559)").s().p("AgEALIgDgCIgEgEIAAgFIAAgEIAEgEIADgCIAEgBIAEABIAFACIACAEIABAEIgBAFIgCAEIgFACIgEABIgEgBg");
	this.shape_53.setTransform(366.05,397.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.809)").s().p("AgFAOIgEgEIgEgEIgBgGIABgFIAEgFIAEgDIAFgBIAGABIAFADIADAFIABAFIgBAGIgDAEIgFAEIgGABIgFgBg");
	this.shape_54.setTransform(654.375,549.475);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.48)").s().p("AgDAKIgEgCIgDgDIAAgFIAAgDIADgEIAEgDIADAAIAFAAIADADIACAEIABADIgBAFIgCADIgDACIgFABIgDgBg");
	this.shape_55.setTransform(672.9,830.85);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0.354)").s().p("AgDAKIgDgCIgDgEIgBgEIABgDIADgEIADgCIADgBIAEABIAEACIACAEIABADIgBAEIgCAEIgEACIgEABIgDgBg");
	this.shape_56.setTransform(364.275,170.675);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.703)").s().p("AgEALIgEgDQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBIgBgEIABgEQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAIAEgDIAEgBIAFABIADADIADADIABAEIgBAEIgDAEIgDADIgFABIgEgBg");
	this.shape_57.setTransform(633.65,83.25);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.813)").s().p("AgEAMIgEgDIgDgEIgBgFIABgEIADgFIAEgCIAEgBIAFABIAFACIACAFIABAEIgBAFIgCAEIgFADIgFACQgCgBgCgBg");
	this.shape_58.setTransform(223.075,601.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0.416)").s().p("AgEANIgEgDIgEgEQgBgDAAgDQAAgCABgDIAEgEQABgCADgBIAEgBIAFABIAFADIADAEIABAFIgBAGIgDAEIgFADIgFABIgEgBg");
	this.shape_59.setTransform(596.8,774.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(255,255,255,0.856)").s().p("AgCAIIgDgCIgCgDIAAgDIAAgCIACgDIADgBIACgBIADABIADABIABADIABACIgBADIgBADIgDACIgDAAIgCAAg");
	this.shape_60.setTransform(124.325,101.925);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(255,255,255,0.466)").s().p("AgEALIgDgDIgDgEIAAgEIAAgEIADgDIADgCIAEgCIAEACIAEACQAAAAABABQAAAAAAABQABAAAAABQAAAAAAAAIABAEIgBAEQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgEADIgEAAIgEAAg");
	this.shape_61.setTransform(550.925,213.05);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(255,255,255,0.78)").s().p("AgFAOIgFgDIgDgFQgBgDAAgDQAAgCABgDIADgFIAFgDQADgBACAAIAGABIAFADIADAFIABAFIgBAGIgDAFIgFADIgGABIgFgBg");
	this.shape_62.setTransform(47.875,385.525);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.393)").s().p("AgDAJIgDgCIgCgDIgBgEIABgDIACgDIADgDIADAAIAEAAIADADIACADIABADIgBAEIgCADIgDACIgEABIgDgBg");
	this.shape_63.setTransform(169.95,99.05);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(61,42,116,0.8)").s().p("AiaC4QhJgPg3gbQg3gcgfgkQgeglgBgpQABgpAegkQAfgkA3gcQA3gbBJgQQBHgPBTAAQBUAABHAPQBJAQA3AbQA3AcAfAkQAeAkABApQgBApgeAlQgfAkg3AcQg3AbhJAPQhHAQhUAAQhTAAhHgQg");
	this.shape_64.setTransform(40,760);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#2E1D58").s().p("ApHVmQkPhzjNjPQjPjNhzkPQh0kPgCk5QACk3B0kQQBzkPDPjOQDNjNEPh0QEQh0E3gCQE5ACEPB0QEPB0DNDNQDODOB0EPQB0EQACE3QgCE5h0EPQh0EPjODNQjNDPkPBzQkPB0k5ACQk3gCkQh0g");
	this.shape_65.setTransform(80,808);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#20143E").s().p("ApHVmQkPhzjNjPQjPjNhzkPQh0kQgCk4QACk4B0kPQBzkPDPjNQDNjOEPh0QEPh0E4gCQE5ACEPB0QEPB0DNDOQDPDNBzEPQB0EPACE4QgCE4h0EQQhzEPjPDNQjNDPkPBzQkPB0k5ACQk4gCkPh0g");
	this.shape_66.setTransform(90,820);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("rgba(159,182,255,0.6)").ss(3,1,1).p("ASwAAQgBAuheAoQhcAoikAeQilAejZARQjZAQj6ABQj5gBjZgQQjZgRilgeQikgehdgoQhdgogBguQABgtBdgoQBdgoCkgeQClgeDZgRQDZgQD5gBQD6ABDZAQQDZARClAeQCkAeBcAoQBeAoABAtg");
	this.shape_67.setTransform(600,170);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(90,116,208,0.7)").s().p("AhVBuQgngIgfgRQgegQgRgXQgQgVgBgZQABgYAQgVQARgXAegQQAfgRAngIQAogKAtAAQAuAAAnAKQApAIAdARQAeAQARAXQARAVABAYQgBAZgRAVQgRAXgeAQQgdARgpAIQgnAKguAAQgtAAgogKg");
	this.shape_68.setTransform(560,140);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#3E56B0").s().p("AkQKFQh+g2hghgQhghgg2h/Qg2h+gBiSQABiRA2h+QA2h/BghgQBghgB+g2QB/g2CRgBQCSABB/A2QB+A2BgBgQBgBgA2B/QA2B+ABCRQgBCSg2B+Qg2B/hgBgQhgBgh+A2Qh/A2iSABQiRgBh/g2g");
	this.shape_69.setTransform(586,156);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#2C3E8A").s().p("AkPKFQh/g2hghgQhghgg2h+Qg2h/gBiSQABiRA2h/QA2h+BghgQBghgB/g2QB+g2CRgBQCSABB+A2QB/A2BgBgQBgBgA2B+QA2B/ABCRQgBCSg2B/Qg2B+hgBgQhgBgh/A2Qh+A2iSABQiRgBh+g2g");
	this.shape_70.setTransform(600,170);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(107,30,90,0.22)").s().p("ApxP2QjegVjLg5QjLg5iThTQiThUg1hlQgwhnAdifQAeigBZiyQBZixCCifQCCigCXhnQCbhlDqhdQDrhcEIhAQEGhADxgRQDxgRCnAwQCmA2ClCPQCmCPCAC5QCAC5A1C1QA2Czg8CBQhEB/jQCBQjRCCkVByQkWBykVBQQkVBQjNAaQhsANhyAAQhjAAhogKg");
	this.shape_71.setTransform(220.0586,618.858);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(18,60,120,0.35)").s().p("AiTayQkbgzkZh5Qkah5jvikQjuijiaixQiYi0iDkNQiCkMhKknQhLknAOkHQANkGCHinQCSilE9iMQE9iMGLhdQGMhcF7gWQF7gVEOBJQELBQEbDOQEbDODyEOQDyEPCSETQCRESgIDZQgTDZi7D9Qi8D+kZDuQkZDvksCsQksCsj0A3Qh1AXh+AAQiGAAiRgag");
	this.shape_72.setTransform(582.4923,528.3316);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(59,30,110,0.35)").s().p("AhdXeQl5g5lUhtQlThsjniXQjlicjakJQjakIigkvQigktg4kPQg3kPBgioQBsikEqiEQEqiDGMhWQGLhVGPgaQGOgZEzAxQEyA1FgCXQFgCYFHDOQFIDPDpDcQDpDcBFC/QA6C/hWDxQhXDxi5DuQi5DvjtC5QjtC4jxBQQj0BKlZAEIguAAQlFAAlgg1g");
	this.shape_73.setTransform(178.1385,272.3017);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#060A1C").s().p("Eg4PBLAMAAAiV/MBwfAAAMAAACV/g");
	this.shape_74.setTransform(360,480);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BG_Space, new cjs.Rectangle(-70,0,870.1,970), null);


// stage content:
(lib.Activity7_Word_Blaster_Typing_Game = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* =====================================================================
		   WORD BLASTER - typing shooter
		   Adobe Animate HTML5 Canvas (CreateJS) - Actions layer, frame 1
		   ---------------------------------------------------------------------
		   Type the word on an enemy to shoot it. Each correct letter fires a laser.
		   If an enemy reaches your ship -> GAME OVER.  Clear all waves -> YOU WIN.
		   Keys : letters = shoot | ENTER = EMP bomb | ESC = pause/resume | CTRL+M = music on/off
		   Mouse: START / PAUSE / RESUME / RESTART buttons
		   Library symbols used by code (Linkage names):
		     Enemy, Boss, Bullet, Explosion, Ship (on stage: "ship")
		   Stage instance names: bg, ship, titleLogo, panel, hudBar,
		     btnStart, btnPause, btnResume, btnRestart
		   ===================================================================== */
		var root = this;
		root.stop();
		
		if (!root.__gameReady) {
			root.__gameReady = true;
			// wait one tick so every timeline instance (bg, ship, buttons...) is on stage
			createjs.Ticker.on("tick", setupGame, null, true);
		}
		
		function setupGame() {
		
			// ------------------------------------------------------------ CONFIG
			var W = lib.properties.width;
			var H = lib.properties.height;
			var SHIP_X = W / 2;
			var SHIP_Y = H - 95;
			var TOTAL_WAVES = 8;
			var HIT_RADIUS = 46;          // enemy closer than this to the ship = you die
			var START_EMPS = 3;
		
			var WORDS = {
				easy: ["cat", "sun", "map", "code", "byte", "loop", "run", "key", "web", "bug", "game", "ship", "star", "zap", "fire",
					"wave", "data", "file", "html", "java", "type", "fast", "jump", "moon", "nova", "beam", "byte", "core", "grid"],
				mid: ["planet", "rocket", "galaxy", "laser", "comet", "object", "string", "canvas", "button", "keyboard", "mouse",
					"variable", "function", "pixel", "script", "number", "random", "player", "enemy", "orbit", "meteor", "shield",
					"engine", "signal", "vector", "sprite", "render", "server", "browser", "module", "events", "listener"],
				hard: ["javascript", "animation", "collision", "condition", "gameplay", "spaceship", "asteroid", "algorithm",
					"developer", "interface", "framework", "statement", "parameter", "navigation", "programming", "multimedia",
					"createjs", "timeline", "adobeanimate", "constellation"],
				boss: ["intergalactic", "extraterrestrial", "supercalifragilistic", "interactivemultimedia", "objectoriented"]
			};
		
			// ------------------------------------------------------------ STATE
			var state = "title";          // title | play | paused | over | win
			var enemies = [];
			var bullets = [];
			var particles = [];
			var stars = [];
			var shockwaves = [];
			var target = null;
			var score = 0, wave = 0, combo = 0, bestCombo = 0;
			var hits = 0, misses = 0, emps = START_EMPS;
			var spawnQueue = [], spawnTimer = 0, bannerTimer = 0, shake = 0;
			var playTime = 0;
			var highScore = 0;
			try { highScore = parseInt(localStorage.getItem("wordBlasterHigh") || "0", 10) || 0; } catch (err) { highScore = 0; }
		
			// ------------------------------------------------------------ LAYERS
			var starLayer = new createjs.Container();
			var gameLayer = new createjs.Container();
			var fxLayer = new createjs.Container();
			var hudLayer = new createjs.Container();
			// layer order (bottom -> top). addChild() on an existing child moves it to the top.
			var ORDER = [root.bg, starLayer, gameLayer, root.ship, fxLayer, root.hudBar, hudLayer,
				root.titleLogo, root.panel, root.btnStart, root.btnPause, root.btnResume, root.btnRestart];
			for (var oi = 0; oi < ORDER.length; oi++) { root.addChild(ORDER[oi]); }
		
			root.ship.x = SHIP_X;
			root.ship.y = SHIP_Y;
		
			// ------------------------------------------------------------ HUD TEXT
			function makeText(txt, font, color, x, y, align) {
				var t = new createjs.Text(txt, font, color);
				t.x = x; t.y = y; t.textAlign = align || "left";
				return t;
			}
			var txtScore = makeText("SCORE 0", "bold 22px Arial", "#FFFFFF", 18, 14);
			var txtWave = makeText("WAVE 1/" + TOTAL_WAVES, "bold 22px Arial", "#7FE7FF", W / 2, 14, "center");
			var txtEmp = makeText("EMP x3", "bold 22px Arial", "#FFB347", W - 18, 14, "right");
			var txtCombo = makeText("", "bold 18px Arial", "#FFE45C", 18, 44);
			var txtHigh = makeText("", "16px Arial", "#9AA8D0", W - 18, 46, "right");
			var txtBanner = makeText("", "bold 46px Arial", "#FFFFFF", W / 2, H / 2 - 60, "center");
			var txtSub = makeText("", "bold 22px Arial", "#7FE7FF", W / 2, H / 2, "center");
			var txtPanel = makeText("", "bold 24px Arial", "#FFFFFF", W / 2, H / 2 - 10, "center");
			txtPanel.lineHeight = 36;
			hudLayer.addChild(txtScore, txtWave, txtEmp, txtCombo, txtHigh, txtBanner, txtSub);
			root.panel.addChild(txtPanel);
			txtPanel.x = 0; txtPanel.y = -20;
		
			function updateHUD() {
				txtScore.text = "SCORE " + score;
				txtWave.text = "WAVE " + Math.max(wave, 1) + "/" + TOTAL_WAVES;
				txtEmp.text = "EMP x" + emps;
				txtCombo.text = combo >= 5 ? ("COMBO x" + combo + "  (score x" + multiplier() + ")") : "";
				txtHigh.text = "BEST " + highScore;
			}
			function multiplier() { return Math.min(5, 1 + Math.floor(combo / 10)); }
			function accuracy() { return (hits + misses) === 0 ? 100 : Math.round(hits * 100 / (hits + misses)); }
		
			// ------------------------------------------------------------ SOUND (Web Audio, no files needed)
			var AC = null, master = null, musicGain = null, musicOn = true;
			function audio() {
				if (!AC) {
					var C = window.AudioContext || window.webkitAudioContext;
					if (!C) { return null; }
					AC = new C();
					master = AC.createGain(); master.gain.value = 0.6; master.connect(AC.destination);
					musicGain = AC.createGain(); musicGain.gain.value = 0.18; musicGain.connect(master);
				}
				if (AC.state === "suspended") { AC.resume(); }
				return AC;
			}
			function tone(freq, dur, type, vol, slideTo, dest) {
				var ac = audio(); if (!ac) { return; }
				var t = ac.currentTime;
				var o = ac.createOscillator(), g = ac.createGain();
				o.type = type || "square";
				o.frequency.setValueAtTime(freq, t);
				if (slideTo) { o.frequency.exponentialRampToValueAtTime(slideTo, t + dur); }
				g.gain.setValueAtTime(vol || 0.2, t);
				g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
				o.connect(g); g.connect(dest || master);
				o.start(t); o.stop(t + dur + 0.02);
			}
			function noise(dur, vol, freq) {
				var ac = audio(); if (!ac) { return; }
				var n = Math.floor(ac.sampleRate * dur);
				var buf = ac.createBuffer(1, n, ac.sampleRate);
				var d = buf.getChannelData(0);
				for (var i = 0; i < n; i++) { d[i] = (Math.random() * 2 - 1) * (1 - i / n); }
				var src = ac.createBufferSource(); src.buffer = buf;
				var f = ac.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = freq || 1200;
				var g = ac.createGain(); g.gain.value = vol || 0.3;
				src.connect(f); f.connect(g); g.connect(master);
				src.start();
			}
			var sfx = {
				shoot: function () { tone(1400, 0.07, "square", 0.08, 500); },
				hit: function () { tone(300, 0.05, "triangle", 0.12, 180); },
				explode: function () { noise(0.45, 0.45, 900); tone(160, 0.35, "sawtooth", 0.12, 40); },
				wrong: function () { tone(110, 0.12, "sawtooth", 0.12, 90); },
				lock: function () { tone(880, 0.05, "sine", 0.1, 1320); },
				emp: function () { tone(80, 0.8, "sine", 0.4, 900); noise(0.6, 0.3, 3000); },
				wave: function () { tone(523, 0.12, "square", 0.1); setTimeout(function () { tone(659, 0.12, "square", 0.1); }, 120); setTimeout(function () { tone(784, 0.25, "square", 0.1); }, 240); },
				dead: function () { noise(1.2, 0.6, 600); tone(300, 1.2, "sawtooth", 0.2, 30); },
				win: function () { var n = [523, 659, 784, 1046, 784, 1046]; for (var i = 0; i < n.length; i++) { (function (f, k) { setTimeout(function () { tone(f, 0.22, "square", 0.12); }, k * 150); })(n[i], i); } },
				click: function () { tone(660, 0.05, "sine", 0.12); }
			};
		
			// simple background music: bass + arpeggio scheduled ahead with Web Audio clock
			var BASS = [55, 55, 65.4, 49];
			var ARP = [0, 3, 7, 10, 12, 10, 7, 3];
			var musicStep = 0, nextNoteTime = 0;
			function musicTick() {
				if (!AC || !musicOn || state !== "play") { return; }
				if (nextNoteTime < AC.currentTime) { nextNoteTime = AC.currentTime + 0.05; }
				while (nextNoteTime < AC.currentTime + 0.2) {
					var bar = Math.floor(musicStep / 8) % BASS.length;
					var root_ = BASS[bar];
					if (musicStep % 4 === 0) { schedule(root_, 0.32, "triangle", 0.5, nextNoteTime); }
					schedule(root_ * 4 * Math.pow(2, ARP[musicStep % 8] / 12), 0.11, "square", 0.12, nextNoteTime);
					nextNoteTime += 0.15;
					musicStep++;
				}
			}
			function schedule(freq, dur, type, vol, when) {
				var o = AC.createOscillator(), g = AC.createGain();
				o.type = type; o.frequency.value = freq;
				g.gain.setValueAtTime(vol, when); g.gain.exponentialRampToValueAtTime(0.0001, when + dur);
				o.connect(g); g.connect(musicGain); o.start(when); o.stop(when + dur + 0.02);
			}
		
			// ------------------------------------------------------------ STARFIELD (parallax)
			for (var s = 0; s < 90; s++) {
				var st = new createjs.Shape();
				var depth = Math.random();
				st.graphics.beginFill(depth > 0.8 ? "#FFFFFF" : (depth > 0.4 ? "#9FB6FF" : "#5A6A9A")).drawCircle(0, 0, 0.6 + depth * 1.6);
				st.x = Math.random() * W; st.y = Math.random() * H; st.speed = 15 + depth * 70;
				starLayer.addChild(st); stars.push(st);
			}
		
			// ------------------------------------------------------------ ENEMIES
			function pickWord(list) {
				for (var tries = 0; tries < 30; tries++) {
					var w = list[Math.floor(Math.random() * list.length)];
					var clash = false;
					for (var i = 0; i < enemies.length; i++) {
						if (enemies[i].remaining.charAt(0) === w.charAt(0)) { clash = true; break; }
					}
					if (!clash) { return w; }
				}
				return list[Math.floor(Math.random() * list.length)];
			}
		
			function makeLabel(e) {
				var lbl = new createjs.Container();
				var bgShape = new createjs.Shape();
				var done = new createjs.Text("", "bold 20px 'Courier New', monospace", "#FF9A2E");
				var rest = new createjs.Text("", "bold 20px 'Courier New', monospace", "#FFFFFF");
				lbl.addChild(bgShape, done, rest);
				lbl.bgShape = bgShape; lbl.done = done; lbl.rest = rest;
				e.label = lbl;
				gameLayer.addChild(lbl);
				refreshLabel(e);
			}
			function refreshLabel(e) {
				var lbl = e.label;
				lbl.done.text = e.word.substr(0, e.word.length - e.remaining.length);
				lbl.rest.text = e.remaining;
				var w1 = lbl.done.text ? lbl.done.getMeasuredWidth() : 0;
				var w2 = lbl.rest.getMeasuredWidth();
				var total = w1 + w2;
				lbl.done.x = -total / 2;
				lbl.rest.x = -total / 2 + w1;
				lbl.done.y = lbl.rest.y = -11;
				lbl.bgShape.graphics.clear()
					.beginFill(e === target ? "rgba(255,120,30,0.35)" : "rgba(10,15,40,0.75)")
					.setStrokeStyle(2).beginStroke(e === target ? "#FF9A2E" : "#3A4A7A")
					.drawRoundRect(-total / 2 - 8, -14, total + 16, 28, 8);
			}
		
			function spawnEnemy(word, isBoss) {
				var e = isBoss ? new lib.Boss() : new lib.Enemy();
				e.word = word;
				e.remaining = word;
				e.pending = 0;            // bullets on their way
				e.dying = false;
				e.isBoss = isBoss;
				e.x = 60 + Math.random() * (W - 120);
				e.y = isBoss ? -90 : -40;
				var base = 30 + wave * 7;
				e.speed = isBoss ? base * 0.45 : base * (0.85 + Math.random() * 0.4) * (word.length > 8 ? 0.8 : 1);
				e.wobble = Math.random() * Math.PI * 2;
				e.knock = 0;
				e.flash = 0;
				gameLayer.addChild(e);
				enemies.push(e);
				makeLabel(e);
				return e;
			}
		
			function buildWave(n) {
				var q = [];
				var count = 5 + n * 2;
				for (var i = 0; i < count; i++) {
					var r = Math.random();
					var list = WORDS.easy;
					if (n >= 3 && r < 0.5) { list = WORDS.mid; }
					if (n >= 5 && r < 0.25) { list = WORDS.hard; }
					if (n >= 7 && r < 0.45) { list = WORDS.hard; }
					q.push({ list: list, boss: false });
				}
				if (n % 4 === 0 || n === TOTAL_WAVES) {
					q.push({ list: WORDS.boss, boss: true });
				}
				return q;
			}
		
			function startWave(n) {
				wave = n;
				spawnQueue = buildWave(n);
				spawnTimer = 1.5;
				bannerTimer = 2.2;
				txtBanner.text = (n === TOTAL_WAVES) ? "FINAL WAVE!" : "WAVE " + n;
				txtSub.text = (n % 4 === 0 || n === TOTAL_WAVES) ? "Boss incoming!" : "Get ready...";
				sfx.wave();
				updateHUD();
			}
		
			// ------------------------------------------------------------ SHOOTING
			function fireAt(e) {
				var b = new lib.Bullet();
				b.x = SHIP_X; b.y = SHIP_Y - 30;
				b.target = e;
				b.speed = 900;
				fxLayer.addChild(b);
				bullets.push(b);
				e.pending++;
				root.ship.rotation = Math.atan2(e.y - SHIP_Y, e.x - SHIP_X) * 180 / Math.PI + 90;
				root.ship.y = SHIP_Y + 6;   // recoil
				sfx.shoot();
			}
		
			function destroyEnemy(e, byEmp) {
				e.dead = true;
				var ex = new lib.Explosion();
				ex.x = e.x; ex.y = e.y;
				ex.scaleX = ex.scaleY = e.isBoss ? 2.2 : 1.1;
				fxLayer.addChild(ex);
				particles.push({ clip: ex, life: 0.6, type: "anim" });
				for (var i = 0; i < (e.isBoss ? 30 : 14); i++) {
					var p = new createjs.Shape();
					var c = ["#FFB347", "#FF5E3A", "#FFE45C", "#FFFFFF"][i % 4];
					p.graphics.beginFill(c).drawRect(-2, -2, 4 + Math.random() * 4, 4);
					p.x = e.x; p.y = e.y;
					var a = Math.random() * Math.PI * 2, sp = 80 + Math.random() * 260;
					fxLayer.addChild(p);
					particles.push({ clip: p, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 0.5 + Math.random() * 0.5, type: "spark", spin: Math.random() * 720 - 360 });
				}
				gameLayer.removeChild(e.label);
				gameLayer.removeChild(e);
				var idx = enemies.indexOf(e);
				if (idx >= 0) { enemies.splice(idx, 1); }
				if (target === e) { target = null; }
				if (!byEmp) {
					score += e.word.length * 10 * multiplier() + (e.isBoss ? 500 : 0);
				} else {
					score += 25;
				}
				shake = e.isBoss ? 0.5 : 0.18;
				sfx.explode();
				updateHUD();
			}
		
			function pickTarget(ch) {
				var best = null;
				for (var i = 0; i < enemies.length; i++) {
					var e = enemies[i];
					if (!e.dying && e.remaining.charAt(0) === ch) {
						if (!best || e.y > best.y) { best = e; }
					}
				}
				return best;
			}
		
			function typeChar(ch) {
				if (!target) {
					target = pickTarget(ch);
					if (target) { sfx.lock(); }
				}
				if (target && target.remaining.charAt(0) === ch) {
					target.remaining = target.remaining.substr(1);
					hits++; combo++;
					if (combo > bestCombo) { bestCombo = combo; }
					score += 10 * multiplier();
					fireAt(target);
					if (target.remaining.length === 0) {
						target.dying = true;
						var t = target;
						target = null;
						refreshLabel(t);
					} else {
						refreshLabel(target);
					}
				} else {
					misses++; combo = 0;
					sfx.wrong();
					root.ship.x = SHIP_X + (Math.random() < 0.5 ? -6 : 6);
				}
				for (var i = 0; i < enemies.length; i++) { refreshLabel(enemies[i]); }
				updateHUD();
			}
		
			function useEmp() {
				if (emps <= 0) { sfx.wrong(); return; }
				emps--;
				var ring = new createjs.Shape();
				ring.x = SHIP_X; ring.y = SHIP_Y;
				fxLayer.addChild(ring);
				shockwaves.push({ clip: ring, r: 10 });
				sfx.emp();
				shake = 0.4;
				updateHUD();
			}
		
			// ------------------------------------------------------------ GAME FLOW
			function clearAll() {
				var i;
				for (i = enemies.length - 1; i >= 0; i--) { gameLayer.removeChild(enemies[i].label); gameLayer.removeChild(enemies[i]); }
				for (i = 0; i < bullets.length; i++) { fxLayer.removeChild(bullets[i]); }
				for (i = 0; i < particles.length; i++) { fxLayer.removeChild(particles[i].clip); }
				for (i = 0; i < shockwaves.length; i++) { fxLayer.removeChild(shockwaves[i].clip); }
				enemies = []; bullets = []; particles = []; shockwaves = [];
				target = null;
			}
		
			function showUI() {
				root.titleLogo.visible = (state === "title");
				root.btnStart.visible = (state === "title");
				root.btnPause.visible = (state === "play");
				root.btnResume.visible = (state === "paused");
				root.btnRestart.visible = (state === "paused" || state === "over" || state === "win");
				root.panel.visible = (state === "paused" || state === "over" || state === "win");
				root.ship.visible = (state !== "over");
				hudLayer.visible = (state !== "title");
				root.hudBar.visible = (state !== "title");
				if (state === "paused") {
					root.panel.gotoAndStop("pause");
					txtPanel.text = "Score: " + score + "\nPress ESC or RESUME to continue";
				} else if (state === "over") {
					root.panel.gotoAndStop("gameover");
					txtPanel.text = "An enemy reached your ship!\nScore: " + score + "   Best: " + highScore +
						"\nWave: " + wave + "   Accuracy: " + accuracy() + "%\nBest combo: " + bestCombo + "\n\nPress RESTART or SPACE";
				} else if (state === "win") {
					root.panel.gotoAndStop("win");
					txtPanel.text = "All " + TOTAL_WAVES + " waves cleared!\nScore: " + score + "   Best: " + highScore +
						"\nAccuracy: " + accuracy() + "%   Best combo: " + bestCombo + "\nTime: " + Math.round(playTime) + " s\n\nPress RESTART or SPACE";
				}
			}
		
			function startGame() {
				audio();
				clearAll();
				score = 0; combo = 0; bestCombo = 0; hits = 0; misses = 0; emps = START_EMPS; playTime = 0;
				root.ship.rotation = 0; root.ship.x = SHIP_X; root.ship.y = SHIP_Y; root.ship.alpha = 1;
				state = "play";
				startWave(1);
				showUI();
				sfx.click();
			}
		
			function pauseGame() {
				if (state === "play") { state = "paused"; showUI(); sfx.click(); }
			}
			function resumeGame() {
				if (state === "paused") { state = "play"; showUI(); sfx.click(); }
			}
		
			function saveHigh() {
				if (score > highScore) {
					highScore = score;
					try { localStorage.setItem("wordBlasterHigh", String(highScore)); } catch (err) { }
				}
			}
		
			function gameOver() {
				state = "over";
				saveHigh();
				var ex = new lib.Explosion();
				ex.x = SHIP_X; ex.y = SHIP_Y; ex.scaleX = ex.scaleY = 2.5;
				fxLayer.addChild(ex);
				particles.push({ clip: ex, life: 0.8, type: "anim" });
				shake = 0.8;
				sfx.dead();
				txtBanner.text = ""; txtSub.text = "";
				showUI();
			}
		
			function winGame() {
				state = "win";
				saveHigh();
				sfx.win();
				txtBanner.text = ""; txtSub.text = "";
				showUI();
			}
		
			// ------------------------------------------------------------ MAIN LOOP
			function update(dt) {
				var i, e, dx, dy, d;
				playTime += dt;
		
				// banner + spawning
				if (bannerTimer > 0) {
					bannerTimer -= dt;
					txtBanner.alpha = txtSub.alpha = Math.min(1, bannerTimer);
					if (bannerTimer <= 0) { txtBanner.text = ""; txtSub.text = ""; }
				}
				spawnTimer -= dt;
				if (spawnQueue.length > 0 && spawnTimer <= 0) {
					var item = spawnQueue.shift();
					spawnEnemy(pickWord(item.list), item.boss);
					spawnTimer = Math.max(0.9, 3.0 - wave * 0.25) * (0.7 + Math.random() * 0.6);
				}
		
				// enemies move toward the ship
				for (i = enemies.length - 1; i >= 0; i--) {
					e = enemies[i];
					dx = SHIP_X - e.x; dy = SHIP_Y - e.y;
					d = Math.sqrt(dx * dx + dy * dy);
					e.wobble += dt * 2;
					var sp = e.speed * (e.knock > 0 ? -1.5 : 1);
					if (e.knock > 0) { e.knock -= dt; }
					e.x += (dx / d) * sp * dt + Math.sin(e.wobble) * 12 * dt;
					e.y += (dy / d) * sp * dt;
					e.rotation = Math.atan2(dy, dx) * 180 / Math.PI - 90;
					e.alpha = e.flash > 0 ? 0.5 : 1;
					if (e.flash > 0) { e.flash -= dt; }
					e.label.x = e.x;
					e.label.y = e.y + (e.isBoss ? 70 : 38);
					// collision with player ship -> lose
					if (d < HIT_RADIUS + (e.isBoss ? 40 : 0)) {
						gameOver();
						return;
					}
				}
		
				// bullets home in on their target
				for (i = bullets.length - 1; i >= 0; i--) {
					var b = bullets[i];
					var t = b.target;
					if (!t || t.dead) { fxLayer.removeChild(b); bullets.splice(i, 1); continue; }
					dx = t.x - b.x; dy = t.y - b.y;
					d = Math.sqrt(dx * dx + dy * dy);
					b.rotation = Math.atan2(dy, dx) * 180 / Math.PI + 90;
					if (d < 22) {                          // bullet / enemy collision
						fxLayer.removeChild(b); bullets.splice(i, 1);
						t.pending--;
						t.flash = 0.08;
						t.knock = 0.06;
						sfx.hit();
						if (t.dying && t.pending <= 0) { destroyEnemy(t, false); }
						continue;
					}
					b.x += dx / d * b.speed * dt;
					b.y += dy / d * b.speed * dt;
				}
		
				// EMP shockwaves
				for (i = shockwaves.length - 1; i >= 0; i--) {
					var w = shockwaves[i];
					w.r += 1100 * dt;
					w.clip.graphics.clear().setStrokeStyle(6).beginStroke("rgba(120,220,255," + Math.max(0, 1 - w.r / 1000) + ")").drawCircle(0, 0, w.r);
					for (var k = enemies.length - 1; k >= 0; k--) {
						e = enemies[k];
						dx = e.x - SHIP_X; dy = e.y - SHIP_Y;
						if (Math.sqrt(dx * dx + dy * dy) < w.r && !e.isBoss) { destroyEnemy(e, true); }
						else if (e.isBoss && Math.sqrt(dx * dx + dy * dy) < w.r) { e.knock = 0.4; }
					}
					if (w.r > 1000) { fxLayer.removeChild(w.clip); shockwaves.splice(i, 1); }
				}
		
				// wave cleared?
				if (spawnQueue.length === 0 && enemies.length === 0 && bannerTimer <= 0) {
					if (wave >= TOTAL_WAVES) { winGame(); return; }
					if (wave % 2 === 0 && emps < 5) { emps++; }
					startWave(wave + 1);
				}
		
				// ship eases back from recoil
				root.ship.x += (SHIP_X - root.ship.x) * 0.3;
				root.ship.y += (SHIP_Y - root.ship.y) * 0.3;
				if (!target && bullets.length === 0) { root.ship.rotation *= 0.85; }
			}
		
			function updateEffects(dt) {
				var i;
				for (i = 0; i < stars.length; i++) {
					stars[i].y += stars[i].speed * dt * (state === "play" ? 1 : 0.3);
					if (stars[i].y > H) { stars[i].y = 0; stars[i].x = Math.random() * W; }
				}
				for (i = particles.length - 1; i >= 0; i--) {
					var p = particles[i];
					p.life -= dt;
					if (p.type === "spark") {
						p.clip.x += p.vx * dt; p.clip.y += p.vy * dt;
						p.vx *= 0.96; p.vy *= 0.96;
						p.clip.rotation += p.spin * dt;
						p.clip.alpha = Math.max(0, p.life * 1.5);
					}
					if (p.life <= 0) { fxLayer.removeChild(p.clip); particles.splice(i, 1); }
				}
				if (shake > 0) {
					shake -= dt;
					gameLayer.x = fxLayer.x = (Math.random() - 0.5) * 14 * shake * 3;
					gameLayer.y = fxLayer.y = (Math.random() - 0.5) * 14 * shake * 3;
				} else {
					gameLayer.x = gameLayer.y = fxLayer.x = fxLayer.y = 0;
				}
			}
		
			function onTick(evt) {
				var dt = Math.min(0.1, evt.delta / 1000);
				if (state === "play") { update(dt); musicTick(); }
				updateEffects(state === "paused" ? 0 : dt);
			}
			createjs.Ticker.addEventListener("tick", onTick);
		
			// ------------------------------------------------------------ INPUT
			function onKey(evt) {
				var k = evt.key;
				if (k === " " || k === "Backspace" || k === "'" || k === "/" || k === "Tab") { evt.preventDefault(); }
				if (k === "Escape") {
					if (state === "play") { pauseGame(); } else if (state === "paused") { resumeGame(); }
					return;
				}
				if (state === "title" || state === "over" || state === "win") {
					if (k === " " || k === "Enter") { startGame(); }
					return;
				}
				if (state !== "play") { return; }
				if (k === "Enter") { useEmp(); return; }
				if (k === "m" && evt.ctrlKey) { musicOn = !musicOn; return; }
				if (k && k.length === 1) {
					var ch = k.toLowerCase();
					if (ch >= "a" && ch <= "z") { typeChar(ch); }
				}
			}
			document.addEventListener("keydown", onKey);
		
			root.btnStart.addEventListener("click", function () { startGame(); });
			root.btnPause.addEventListener("click", function () { pauseGame(); });
			root.btnResume.addEventListener("click", function () { resumeGame(); });
			root.btnRestart.addEventListener("click", function () { startGame(); });
			if (typeof stage !== "undefined" && stage) { stage.enableMouseOver(10); }
		
			// ------------------------------------------------------------ FIT TO BROWSER WINDOW
			// Scales the whole game to fit the window (no scrolling) and centers it.
			function fitToWindow() {
				if (typeof stage === "undefined" || !stage || !stage.canvas) { return; }
				var c = stage.canvas;
				var s = Math.min(window.innerWidth / W, window.innerHeight / H);
				var w = Math.floor(W * s), h = Math.floor(H * s);
				document.documentElement.style.overflow = "hidden";
				document.body.style.margin = "0";
				document.body.style.overflow = "hidden";
				document.body.style.backgroundColor = "#000000";
				c.style.width = w + "px";
				c.style.height = h + "px";
				var box = document.getElementById("animation_container") || c.parentNode;
				if (box && box !== document.body) {
					box.style.position = "absolute";
					box.style.width = w + "px";
					box.style.height = h + "px";
					box.style.left = Math.floor((window.innerWidth - w) / 2) + "px";
					box.style.top = Math.floor((window.innerHeight - h) / 2) + "px";
				}
				var dom = document.getElementById("dom_overlay_container");
				if (dom) { dom.style.width = w + "px"; dom.style.height = h + "px"; }
			}
			window.addEventListener("resize", fitToWindow);
			fitToWindow();
		
			updateHUD();
			showUI();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Buttons
	this.btnRestart = new lib.Btn_Restart();
	this.btnRestart.name = "btnRestart";
	this.btnRestart.setTransform(360,780);
	new cjs.ButtonHelper(this.btnRestart, 0, 1, 2, false, new lib.Btn_Restart(), 3);

	this.btnResume = new lib.Btn_Resume();
	this.btnResume.name = "btnResume";
	this.btnResume.setTransform(360,700);
	new cjs.ButtonHelper(this.btnResume, 0, 1, 2, false, new lib.Btn_Resume(), 3);

	this.btnPause = new lib.Btn_Pause();
	this.btnPause.name = "btnPause";
	this.btnPause.setTransform(620,924);
	new cjs.ButtonHelper(this.btnPause, 0, 1, 2, false, new lib.Btn_Pause(), 3);

	this.btnStart = new lib.Btn_Start();
	this.btnStart.name = "btnStart";
	this.btnStart.setTransform(360,730);
	new cjs.ButtonHelper(this.btnStart, 0, 1, 2, false, new lib.Btn_Start(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnStart},{t:this.btnPause},{t:this.btnResume},{t:this.btnRestart}]}).wait(1));

	// Panel (Pause / Game Over / Win)
	this.panel = new lib.Panel();
	this.panel.name = "panel";
	this.panel.setTransform(360,430);

	this.timeline.addTween(cjs.Tween.get(this.panel).wait(1));

	// Title
	this.titleLogo = new lib.Title_Logo();
	this.titleLogo.name = "titleLogo";
	this.titleLogo.setTransform(360,420);

	this.timeline.addTween(cjs.Tween.get(this.titleLogo).wait(1));

	// HUD
	this.hudBar = new lib.HUD_Bar();
	this.hudBar.name = "hudBar";

	this.timeline.addTween(cjs.Tween.get(this.hudBar).wait(1));

	// Player Ship
	this.ship = new lib.Ship();
	this.ship.name = "ship";
	this.ship.setTransform(360,865);

	this.timeline.addTween(cjs.Tween.get(this.ship).wait(1));

	// Background
	this.bg = new lib.BG_Space();
	this.bg.name = "bg";

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(290,480,510.1,490);
// library properties:
lib.properties = {
	id: '0FB712B32253CF4C8855F82BF090EC28',
	width: 720,
	height: 960,
	fps: 24,
	color: "#060A1C",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0FB712B32253CF4C8855F82BF090EC28'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;