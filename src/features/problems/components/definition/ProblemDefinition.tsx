import katex from "katex";
import "katex/dist/katex.min.css";

const equation = katex.renderToString("a^2 + b^2 = c^2", {
  displayMode: true,
  throwOnError: false,
});

export function ProblemDefinition() {
  return <div dangerouslySetInnerHTML={{ __html: equation }} />;
}
