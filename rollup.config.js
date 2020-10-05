import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";

export default {
	input: ["src/index.ts", "src/TestComponent/TestComponent.tsx"],
	output: [
		{
			dir: "build",
			format: "esm",
			sourcemap: true,
			preserveModules: true,
		},
	],
	plugins: [
		peerDepsExternal(),
		resolve(),
		commonjs(),
		typescript({ useTsconfigDeclarationDir: true }),
		postcss(),
	],
};
