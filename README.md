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

#### ```positions [numverts] { [x] [y] [z] ... }```
- This section defines the 3D coordinates (x, y, z) of the vertices of the character's mesh.
- [numverts] represents the number of vertices in the mesh.
- The section contains a list of [numverts] lines, each line representing the x, y, and z coordinates of a vertex in the mesh.

#### ```normals [numverts] { [x] [y] [z] ... }```
- This section defines the normals of the corresponding vertices in the mesh.

#### ```skinweights [numverts] [numattachments] [joint0] [weight0] ... [jointN] [weightN] ...```
- This section defines the skinning weights for each vertex in the mesh.
- [numverts] represents the number of vertices in the mesh.
- [numattachments] represents the number of joints attached to each vertex.
- Each line in the section corresponds to a vertex and its associated skinning weights.
- For each vertex, there are [numattachments] pairs of [joint] and [weight], where [joint] is the index of the joint (bone) in the skeleton, and [weight] is the weight of that joint's influence on the vertex. The sum of all weights for a vertex is typically equal to 1.

#### ```triangles [numtriangles] { [vertex0] [vertex1] [vertex2] ... }```
- This section defines the triangles that make up the character's mesh.
- [numtriangles] represents the number of triangles in the mesh.
- The section contains a list of [numtriangles] lines, each line representing a triangle by specifying the indices of its three vertices in the mesh.

#### ```bindings [numjoints] matrix { [ax] [ay] [az] [bx] [by] [bz] [cx] [cy] [cz] [dx] [dy] [dz] } ...```
- This section defines the binding matrices for each joint in the skeleton.
- [numjoints] represents the number of joints in the skeleton.
- The section contains a list of [numjoints] binding matrices, each represented by a 3x4 matrix.
- The matrix is represented as a set of 12 numbers [ax] [ay] [az] [bx] [by] [bz] [cx] [cy] [cz] [dx] [dy] [dz], which define the initial position and orientation of the joint relative to its parent joint. The matrix consists of three 3D vectors: [a], [b], and [c], representing the joint's local X, Y, and Z axes, respectively, and a 3D vector [d], representing the joint's initial position relative to its parent joint.

## Process
When the program loads a .skel file, it creates a skeleton by connecting joints, which represent the character's bones. The joints are arranged in a hierarchy, with parent and child relationships based on the information in the .skel file.

To animate the character, the program uses a technique called "forward kinematics." It calculates how each joint should move in 3D space to create natural-looking animations. This involves computing transformation matrices for each joint, which describe the joint's position, rotation, and size relative to the world around it.

The program then applies a "skinning algorithm" to deform the character's mesh (the skin) based on the movement of the skeleton. For each point on the mesh, the program calculates its new position by blending the transformations of the nearby joints. This blending is weighted by values assigned to each point, representing how much each joint influences the point's movement.

After performing the skinning, the program renders the character's animated mesh, displaying the character in 3D with its updated shape. Additionally, the program still draws the character's skeleton using boxes, so you can see how the bones move and contribute to the character's animation.

## Demo


