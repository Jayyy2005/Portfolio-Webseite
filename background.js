document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext('2d'),
        stars = [], 
        FPS = 60, 
        x = 100, 
        mouse = {
            x: 0,
            y: 0
        }; 

    function initializeCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function initializeStars() {
        if (stars.length > 0) {
            for (var i = 0; i < stars.length; i++) {
                stars[i].x = Math.random() * canvas.width;
                stars[i].y = Math.random() * canvas.height;
            }
        } else {
            for (var i = 0; i < x; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1 + 1,
                    vx: Math.floor(Math.random() * 50) - 25,
                    vy: Math.floor(Math.random() * 50) - 25
                });
            }
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "lighter";
        
        for (var i = 0; i < stars.length; i++) {
            var s = stars[i];
            ctx.fillStyle = "#000000";
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = 'white';
            ctx.stroke();
        }
        
        ctx.beginPath();
        for (var i = 0; i < stars.length; i++) {
            var starI = stars[i];
            ctx.moveTo(starI.x, starI.y); 
            if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
            for (var j = 0; j < stars.length; j++) {
                var starII = stars[j];
                if (distance(starI, starII) < 150) {
                    ctx.lineTo(starII.x, starII.y); 
                }
            }
        }
        ctx.lineWidth = 0.05;
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }

    function update() {
        for (var i = 0; i < stars.length; i++) {
            var s = stars[i];
            s.x += s.vx / FPS;
            s.y += s.vy / FPS;
            
            if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
            if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
        }
    }

    function distance(point1, point2) {
        var xs = point2.x - point1.x;
        xs = xs * xs;
     
        var ys = point2.y - point1.y;
        ys = ys * ys;
     
        return Math.sqrt(xs + ys);
    }

    function handleMouseMove(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }

    function tick() {
        draw();
        update();
        requestAnimationFrame(tick);
    }

    initializeCanvasSize();
    initializeStars();
    tick();

    window.addEventListener("resize", function() {
        initializeCanvasSize();
        initializeStars();
    });

    canvas.addEventListener('mousemove', handleMouseMove);
});
