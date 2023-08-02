# Animation Project: Skinning

This computer animation project consists of three parts: 
 
[Part1: Skeleton](https://github.com/mleonova/Graphics-Part1-Skeleton)
 
[Part 2: Skinning](https://github.com/mleonova/Graphics-Part2-Skinning) 
 
[Part 3: Animation](https://github.com/mleonova/Graphics-Part3-Animation)

## Objectives:
The main objectives of Part 2 are:

1. Load and parsing a character skin from a (.skin) file and attach it to a previously loaded skeleton from a (.skel) file.
2. Render the skin with shading using at least two different colored lights. 

## Background
Skinning, in the context of computer graphics and 3D animation, refers to the process of attaching a character's or object's skin (mesh) to a skeleton or rig using the vertex weighting method, also known as linear blending. This technique is essential for creating realistic character animations.

In vertex weighting, each vertex of the character's mesh is assigned weights to multiple joints in the skeleton. These weights determine the influence that each joint has on a specific vertex. During animation, as the joints move, their associated vertices follow suit, resulting in smooth and natural deformations of the character's mesh, simulating the movement of muscles and bones.

The goal of vertex weighting is to preserve the shape and volume of the character's mesh throughout the animation. By assigning appropriate weights to the vertices, the mesh can deform smoothly and realistically, ensuring that the character's movements look lifelike.

## Skin file
```
Sample .skin file

positions [numverts] {
    [x] [y] [z]
    ...
}

normals [numverts] {
    [x] [y] [z]
    ...
}

skinweights [numverts]
    [numattachments] [joint0] [weight0] ... [jointN] [weightN]
    ...
}

triangles [numtriangles] {
    [vertex0] [vertex1] [vertex2]
    ...
}

bindings [numjoints]
    matrix {
        [ax] [ay] [az]
        [bx] [by] [bz]
        [cx] [cy] [cz]
        [dx] [dy] [dz]
    }
    ...
}
```

