import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
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
		typescript({ useTsconfigDeclarationDir: true }),
		postcss({
			modules: true,
		}),
	],
};
