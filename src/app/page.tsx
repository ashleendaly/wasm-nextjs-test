import DisplayText from "@/components/display-text";
import init, { greet } from "../../public/rust-lib/rust_lib.js";
import wasmUrl from "../../config";

export default async function Home() {
  let wasmText;
  await init(wasmUrl).then(() => {
    wasmText = greet("Server Component");
  });

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center text-3xl gap-5">
      <div>Wasm + NextJS Test</div>
      <div>{wasmText}</div>
      <DisplayText />
    </div>
  );
}
