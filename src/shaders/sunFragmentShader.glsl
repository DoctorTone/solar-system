varying vec2 vUv;
uniform sampler2D map;

void main()
{
	vec3 diffuseColor = texture2D(map, vUv).rgb;
	gl_FragColor = vec4(diffuseColor, 1.0);
}