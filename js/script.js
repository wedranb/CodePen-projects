/**
 * Created by Vedran Blazenka
 * Follow me on twitter: @vblazenka
 **/

(function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = innerWidth; //setting canvas to full width
    canvas.height = innerHeight; //setting canvas to ful height

    var snow = [];

    var MAX = 75; //Maximum number of snow particles

    var W = window.innerWidth;
    var H = window.innerHeight;

    //Setting canvas to full width and height every time window is resized
    window.addEventListener('resize', function(){
        var W = window.innerWidth;
        var H = window.innerHeight;

        canvas.width = W;
        canvas.height = H;
    });

    var Flake = function() {
		this.x= Math.random()*W;
		this.y=Math.random()*H;
		this.w=Math.random()*32;
		this.d = Math.random()*MAX;
		this.angle=0;
        this.img = new Image();
        this.imgSrc = [
            'images/flake1.png',
            'images/flake2.png',
            'images/flake3.png'
        ];
        this.r = Math.floor(Math.random() * (2 - 0 + 1)) + 0; //Getting random number between 0 and 3
        this.img.src = this.imgSrc[this.r]; //Getting index from random number

		this.draw=function(){
            ctx.drawImage(this.img, this.x, this.y, this.w, this.w);
        }
		this.update=function(c){

            if(this.angle <= 1){
                this.angle += 0.01;
            }else{
                this.angle -= 0.01;
            }


            this.x += Math.cos(this.angle+this.d) + 1 + this.w/6;
            this.y += Math.sin(this.angle)*2;


			if( (this.x>W+32) || (this.x<-32) || (this.y > H) )
			{
                if(c%3>0) {
                    this.x = Math.random() * W;
                    this.y = -64;
                }
                else{
                    if(Math.sin(this.angle)>0){
                        this.x = -32;
                        this.y = Math.random()*H;
                    }
                    else{
                        this.x = W+32;
                        this.y = Math.random()*H;
                    }
                }
			}
		}
	};

    //Create snow from flakes
    for(var i=0; i < MAX; i++)
    {
        snow.push(new Flake);
    }

    //Fill background and call update function
    function render()
    {
        ctx.fillStyle = "#3498db";
        ctx.fillRect(0, 0, W, H);

       update();
    }

    //Draw snow and update position
	function update(){
		for(var i=0; i < MAX; i++)
		{
			var f = snow[i];
			f.draw();
			f.update(i);
		}
	}

   setInterval(render, 33);

})();
