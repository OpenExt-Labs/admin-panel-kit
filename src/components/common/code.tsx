import React from "react";

function CodeFragment({ code }: { code: string }) {
  return (
    <div>
      <div data-rehype-pretty-code-fragment="">
        <pre
          className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
          data-language="bash"
          data-theme="default"
        >
          <code className="text-white px-4">{code}</code>
        </pre>

      </div>
    </div>
  );
}

export default CodeFragment;
