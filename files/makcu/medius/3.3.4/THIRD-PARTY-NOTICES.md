# Third-party notices

The firmware images published from this repository contain code from the projects below. Their
licence terms are reproduced or referenced here, and this file is published alongside the images in
every release.

## ABCurves

The render mode (`OPTION(RENDER)`) runs the ABCurves motion model. `firmware/device/components/render/abc/`
is upstream's C99 runtime at commit `bb17418`, and `render_blob.bin` is upstream's
`models/renderer_global_h80.bin` unchanged. The runtime is modified for this target: every change,
what it costs and how it is proven bit-exact against a fixture captured from the pristine upstream
build is recorded in
[`firmware/device/components/render/PROVENANCE.md`](firmware/device/components/render/PROVENANCE.md).

Upstream: https://github.com/optima-manent/ABCurves

```
MIT License

Copyright (c) 2026 the ABCurves author and contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## CherryUSB

Both chips' USB stacks are CherryUSB 1.6.1, pinned by `dependencies.lock` and patched by
`firmware/patches/`. Licensed under Apache-2.0; the full text ships in the fetched component at
`firmware/<app>/managed_components/cherry-embedded__cherryusb/LICENSE`.

Upstream: https://github.com/cherry-embedded/CherryUSB

## ESP-IDF

Built against ESP-IDF v5.4.4, which is Apache-2.0 and carries its own third-party code under MIT,
BSD and other licences (FreeRTOS, newlib, mbedTLS and the rest), each with its licence in the IDF
tree. The images link whichever of those components the build pulls in.

Upstream: https://github.com/espressif/esp-idf
