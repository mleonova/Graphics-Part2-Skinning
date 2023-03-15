#version 330 core

// Inputs to the fragment shader are the outputs of the same name from the vertex shader.
// Note that you do not have access to the vertex shader's default output, gl_Position.

in vec3 fragNormal;
in vec3 fragPos;

// uniforms used for lighting
uniform vec3 viewPos;
uniform vec3 AmbientColor = vec3(0.2);
uniform vec3 LightDirection = normalize(vec3(1, 5, 2));
uniform vec3 LightColor = vec3(1);
uniform vec3 DiffuseColor;	// passed in from c++ side NOTE: you can also set the value here and then remove 
							// color from the c++ side

// uniforms for second light
uniform vec3 LightColor2 = vec3(0.5f, 0.0f, 0.0f);
uniform vec3 LightPosition2 = vec3(5.0f, 2.0f, -2.0f);

// uniforms for third light
uniform vec3 LightColor3 = vec3(0.0f, 0.0f, 0.5f);
uniform vec3 LightPosition3 = vec3(-5.0f, -2.0f, -2.0f);

// You can output many things. The first vec4 type output determines the color of the fragment
out vec4 fragColor;

void main()
{

	// Color 2 light direction
	vec3 LightDirection2 = normalize(LightPosition2 - fragPos);
	vec3 LightDirection3 = normalize(LightPosition3 - fragPos);

	// Compute irradiance (sum of ambient & direct lighting)
	vec3 irradiance = AmbientColor + LightColor * max(0, dot(LightDirection, fragNormal));
	vec3 irradiance2 = LightColor2 * max(0, dot(LightDirection2, fragNormal));
	vec3 irradiance3 = LightColor3 * max(0, dot(LightDirection3, fragNormal));

	// Diffuse reflectance
	vec3 reflectance = irradiance * DiffuseColor;
	vec3 reflectance2 = irradiance2 * DiffuseColor;
	vec3 reflectance3 = irradiance3 * DiffuseColor;

	// Gamma correction
	fragColor = vec4(reflectance, 1) + vec4(reflectance2, 1) + vec4(reflectance3, 1);
	//fragColor = vec4(sqrt(reflectance), 1);
}