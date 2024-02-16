let wasmUrl: string;

if (typeof window === "undefined") {
  wasmUrl = "http://localhost:3000/rust-lib/rust_lib_bg.wasm";
} else {
  wasmUrl = "/rust-lib/rust_lib_bg.wasm";
}

export default wasmUrl;
