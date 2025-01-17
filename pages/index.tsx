import { renderToString } from "preact-render-to-string";

import { html } from "utils/html.ts";
import { output } from "utils/path.ts";
import { write } from "utils/fs.ts";

import { Layout } from "components/Layout.tsx";

function Index() {
  return (
    <Layout>
      <h1>Welcome!</h1>
      <p>
        Nova is a <a href="https://tc39.es/ecma262/">ECMAScript</a> and{" "}
        <a href="https://webassembly.org/">WebAssembly</a>{" "}
        engine written in Rust and following{" "}
        <a href="https://en.wikipedia.org/wiki/Data-oriented_design">
          data-oriented design principles
        </a>. It is currently nothing more than a fun experiment to learn and to
        prove the viability of such an engine, but may very well become
        something much more in the future.
      </p>
      <p>
        The engine is still very limited in it's capabilities only passing about
        {" "}
        <a href="https://test262.fyi/#|nova">
          25% of the test262 test suite
        </a>.{" "}
        However development is ongoing and we are quickly improving the engine.
        If you are interested in the project, please check out the{" "}
        <a href="https://github.com/trynova/nova">GitHub repository</a>{" "}
        and or join our{" "}
        <a href="https://discord.gg/RTrgJzXKUM">Discord server</a>{" "}
        where the core team resides and where we discuss development.
      </p>
    </Layout>
  );
}

if (import.meta.main) {
  await write(
    output(import.meta.url),
    html(renderToString(<Index />), { title: "Nova" }),
  );
}
