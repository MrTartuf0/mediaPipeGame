// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    World = Matter.World,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.getElementById('gravity'),
    engine: engine,
    options: {
        background: 'transparent',
        wireframes: false,
        width: 960,
        height: 540,
    }
});

// create two boxes and a ground

var boxB = Bodies.rectangle(450, -100, 80, 80 , {
    friction: 0.5,
    restitution: 0.9,
    render: {
        sprite: {
            texture: "./coca-cola_80x80.png",
        }
    }
});

var boxC = Bodies.rectangle(500, -1000, 80, 80 , {
    render: {
        sprite: {
            texture: "./sprite_80x80.png",
        }
    }
});

var boxD = Bodies.rectangle(550, -2000, 80, 80 , {
    render: {
        sprite: {
            texture: "./fanta_80x80.png",
        }
    }
});


var boxE = Bodies.rectangle(600, -3000, 80, 80 , {
    render: {
        sprite: {
            texture: "./coca-cola_80x80.png",
        }
    }
});


var boxF = Bodies.rectangle(500, -4000, 80, 80 , {
    render: {
        sprite: {
            texture: "./coca-cola_80x80.png",
        }
    }
});


var boxG = Bodies.rectangle(650, -5000, 80, 80 , {
    render: {
        sprite: {
            texture: "./coca-cola_80x80.png",
        }
    }
});




var ground = Bodies.rectangle(300, 0, 410, 40, { isStatic: true , friction: 0.5 , restitution: 0.9});

// add all of the bodies to the world
Composite.add(engine.world, [boxB, boxC , boxD , boxE , boxF , boxG ,  ground]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

Runner.run(runner, engine);
var engine = Engine.create();


function addSquare () {
    World.add(engine.world , [Bodies.rectangle(20, 20, 40, 40)]);
}
