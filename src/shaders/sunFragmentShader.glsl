varying vec2 vUv;
uniform sampler2D sun1;
uniform float time;
const float PI = 3.14159;

float random(vec2 st)
{
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main()
{
	vec3 diffuseColour = texture2D(sun1, vUv).rgb;
	if(diffuseColour.g > 0.5) {
			diffuseColour.g = sin(time * PI * 0.25) + 1.7;
	}
  
  gl_FragColor = vec4(diffuseColour, 1.0);
}