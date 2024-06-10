varying vec2 vUv;
uniform sampler2D noise;
uniform sampler2D sun1;
uniform sampler2D sun2;
uniform float time;
const float threshold = 0.5;
float range = 0.1;
const float PI = 3.14159;

float random(vec2 st)
{
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main()
{
	vec4 colour1 = texture2D(sun1, vUv);
  vec4 colour2 = texture2D(sun2, vUv);
  
  float noise = texture2D(noise, vUv).r;
    
  float t = smoothstep(threshold - range, threshold + range, noise);
  
  gl_FragColor = mix(colour1, colour2, t);
}