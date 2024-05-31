function setup() 
{
	createCanvas(1600, 1000);

	colorMode(HSB);

	background(0);
}

function draw()
{
	noLoop();
	
	let xmin = -2;
	let ymin = -1;
	let xmax = 1;
	let ymax = 1;
	let xdelta = (xmax - xmin) / width;
	let ydelta = (ymax - ymin) / height;
	
	loadPixels();
	
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			let a = xmin + x * xdelta;
			let b = ymin + y * ydelta;
			let ca = a;
			let cb = b;
			let n = 0;
			
			while (n < 1000 && (ca * ca + cb * cb) < 4) {
				let temp = ca * ca - cb * cb + a;
				cb = 2 * ca * cb + b;
				ca = temp;
				n++;
			}
			
			//let c = color(n * 10 % 255, 0, 0);
			//let c = color(n * 10 % 360, 100, 100);
			//let c = color(n * 10 % 360, n * 10 % 100, 100);
			//let c = color(0, n * 10 % 100, n * 10 % 100);
			let c = color(n * 10 % 360, 100, n * 10 % 100);
			let index = (x + y * width) * 4;
			
			pixels[index] = red(c);
			pixels[index + 1] = green(c);
			pixels[index + 2] = blue(c);
			pixels[index + 3] = 255;
		}
	}
	updatePixels();
	
}

