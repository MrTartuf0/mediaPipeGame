// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
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
        width: 800,
        height: 600,
    }
});

// create two boxes and a ground
var boxA = Bodies.rectangle(20, 20, 40, 40);
var boxB = Bodies.rectangle(450, 50, 80, 80 , {
    render: {
        sprite: {
            texture: "./coca-cola_80x80.png",
        }
    }
});
var ground = Bodies.rectangle(300, 310, 410, 40, { isStatic: true });

// add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB, ground]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

Runner.run(runner, engine);
var engine = Engine.create();

