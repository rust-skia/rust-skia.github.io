(function() {
    var type_impls = Object.fromEntries([["skia_safe",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-RefHandle%3CN%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/skia_safe/prelude.rs.html#492-496\">Source</a><a href=\"#impl-Drop-for-RefHandle%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N: NativeDrop&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"skia_safe/struct.RefHandle.html\" title=\"struct skia_safe::RefHandle\">RefHandle</a>&lt;N&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/skia_safe/prelude.rs.html#493-495\">Source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.1/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.85.1/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","skia_safe::core::drawable::gpu_draw_handler::GPUDrawHandler","skia_safe::core::image_generator::ImageGenerator","skia_safe::core::typeface::LocalizedStringsIter","skia_safe::gpu::ganesh::backend_surface::BackendTexture","skia_safe::modules::paragraph::paragraph::Paragraph","skia_safe::modules::paragraph::paragraph_builder::ParagraphBuilder","skia_safe::modules::paragraph::paragraph_style::ParagraphStyle","skia_safe::modules::shaper::Shaper","skia_safe::modules::shaper::FontRunIterator","skia_safe::modules::shaper::BiDiRunIterator","skia_safe::modules::shaper::ScriptRunIterator","skia_safe::modules::shaper::LanguageRunIterator","skia_safe::utils::camera::View3D"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-RefHandle%3CN%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/skia_safe/prelude.rs.html#498-502\">Source</a><a href=\"#impl-PartialEq-for-RefHandle%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N: NativeDrop + NativePartialEq&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"skia_safe/struct.RefHandle.html\" title=\"struct skia_safe::RefHandle\">RefHandle</a>&lt;N&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/skia_safe/prelude.rs.html#499-501\">Source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.1/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, rhs: &amp;Self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.85.1/src/core/cmp.rs.html#261\">Source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.1/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.1/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","skia_safe::core::drawable::gpu_draw_handler::GPUDrawHandler","skia_safe::core::image_generator::ImageGenerator","skia_safe::core::typeface::LocalizedStringsIter","skia_safe::gpu::ganesh::backend_surface::BackendTexture","skia_safe::modules::paragraph::paragraph::Paragraph","skia_safe::modules::paragraph::paragraph_builder::ParagraphBuilder","skia_safe::modules::paragraph::paragraph_style::ParagraphStyle","skia_safe::modules::shaper::Shaper","skia_safe::modules::shaper::FontRunIterator","skia_safe::modules::shaper::BiDiRunIterator","skia_safe::modules::shaper::ScriptRunIterator","skia_safe::modules::shaper::LanguageRunIterator","skia_safe::utils::camera::View3D"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PointerWrapper%3CN%3E-for-RefHandle%3CN%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/skia_safe/wrapper.rs.html#142-161\">Source</a><a href=\"#impl-PointerWrapper%3CN%3E-for-RefHandle%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"trait\" href=\"skia_safe/wrapper/trait.PointerWrapper.html\" title=\"trait skia_safe::wrapper::PointerWrapper\">PointerWrapper</a>&lt;N&gt; for <a class=\"struct\" href=\"skia_safe/struct.RefHandle.html\" title=\"struct skia_safe::RefHandle\">RefHandle</a>&lt;N&gt;<div class=\"where\">where\n    N: NativeDrop,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.wrap\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/skia_safe/wrapper.rs.html#146-148\">Source</a><a href=\"#method.wrap\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"skia_safe/wrapper/trait.PointerWrapper.html#tymethod.wrap\" class=\"fn\">wrap</a>(ptr: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.1/std/primitive.pointer.html\">*mut N</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Self&gt;</h4></section></summary><div class='docblock'>Wraps a native pointer into a wrapper type.\nReturns <code>None</code> if the pointer is <code>null</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unwrap\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/skia_safe/wrapper.rs.html#150-152\">Source</a><a href=\"#method.unwrap\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"skia_safe/wrapper/trait.PointerWrapper.html#tymethod.unwrap\" class=\"fn\">unwrap</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.1/std/primitive.pointer.html\">*mut N</a></h4></section></summary><div class='docblock'>Unwraps the wrapper type into the native pointer.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.inner\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/skia_safe/wrapper.rs.html#154-156\">Source</a><a href=\"#method.inner\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"skia_safe/wrapper/trait.PointerWrapper.html#tymethod.inner\" class=\"fn\">inner</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.1/std/primitive.reference.html\">&amp;N</a></h4></section></summary><div class='docblock'>Access the wrapped pointer.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.inner_mut\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/skia_safe/wrapper.rs.html#158-160\">Source</a><a href=\"#method.inner_mut\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"skia_safe/wrapper/trait.PointerWrapper.html#tymethod.inner_mut\" class=\"fn\">inner_mut</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.1/std/primitive.reference.html\">&amp;mut N</a></h4></section></summary><div class='docblock'>Access the wrapped pointer.</div></details></div></details>","PointerWrapper<N>","skia_safe::core::drawable::gpu_draw_handler::GPUDrawHandler","skia_safe::core::image_generator::ImageGenerator","skia_safe::core::typeface::LocalizedStringsIter","skia_safe::gpu::ganesh::backend_surface::BackendTexture","skia_safe::modules::paragraph::paragraph::Paragraph","skia_safe::modules::paragraph::paragraph_builder::ParagraphBuilder","skia_safe::modules::paragraph::paragraph_style::ParagraphStyle","skia_safe::modules::shaper::Shaper","skia_safe::modules::shaper::FontRunIterator","skia_safe::modules::shaper::BiDiRunIterator","skia_safe::modules::shaper::ScriptRunIterator","skia_safe::modules::shaper::LanguageRunIterator","skia_safe::utils::camera::View3D"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RefHandle%3CSk3DView%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/skia_safe/utils/camera.rs.html#118-169\">Source</a><a href=\"#impl-RefHandle%3CSk3DView%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"skia_safe/struct.RefHandle.html\" title=\"struct skia_safe::RefHandle\">RefHandle</a>&lt;Sk3DView&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/skia_safe/utils/camera.rs.html#119-121\">Source</a><h4 class=\"code-header\">pub fn <a href=\"skia_safe/struct.RefHandle.html#tymethod.new\" class=\"fn\">new</a>() -&gt; Self</h4></section><section id=\"method.save\" class=\"method\"><a class=\"src rightside\" href=\"src/skia_safe/utils/camera.rs.html#123-126\">Source</a><h4 class=\"code-header\">pub fn <a href=\"skia_safe/struct.RefHandle.html#tymethod.save\" class=\"fn\">save</a>(&amp;mut self) -&gt; &amp;mut Self</h4></section><section id=\"method.restore\" class=\"method\"><a class=\"src rightside\" href=\"src/skia_safe/utils/camera.rs.html#128-131\">Source</a><h4 class=\"code-header\">pub fn <a href=\"skia_safe/struct.RefHandle.html#tymethod.restore\" class=\"fn\">restore</a>(&amp;mut self) -&gt; &amp;mut Self</h4></section><section id=\"method.translate\" class=\"method\"><a class=\"src rightside\" href=\"src/skia_safe/utils/camera.rs.html#133-137\">Source</a><h4 class=\"code-header\">pub fn <a href=\"skia_safe/struct.RefHandle.html#tymethod.translate\" class=\"fn\">translate</a>(&amp;mut self, d: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"skia_safe/struct.V3.html\" title=\"struct skia_safe::V3\">V3</a>&gt;) -&gt; &amp;mut Self</h4></section><section id=\"method.rotate_x\" class=\"method\"><a class=\"src rightside\" href=\"src/skia_safe/utils/camera.rs.html#139-142\">Source</a><h4 class=\"code-header\">pub fn <a href=\"skia_safe/struct.RefHandle.html#tymethod.rotate_x\" class=\"fn\">rotate_x</a>(&amp;mut self, deg: <a class=\"type\" href=\"skia_safe/type.scalar.html\" title=\"type skia_safe::scalar\">scalar</a>) -&gt; &amp;mut Self</h4></section><section id=\"method.rotate_y\" class=\"method\"><a class=\"src rightside\" href=\"src/skia_safe/utils/camera.rs.html#144-147\">Source</a><h4 class=\"code-header\">pub fn <a href=\"skia_safe/struct.RefHandle.html#tymethod.rotate_y\" class=\"fn\">rotate_y</a>(&amp;mut self, deg: <a class=\"type\" href=\"skia_safe/type.scalar.html\" title=\"type skia_safe::scalar\">scalar</a>) -&gt; &amp;mut Self</h4></section><section id=\"method.rotate_z\" class=\"method\"><a class=\"src rightside\" href=\"src/skia_safe/utils/camera.rs.html#149-152\">Source</a><h4 class=\"code-header\">pub fn <a href=\"skia_safe/struct.RefHandle.html#tymethod.rotate_z\" class=\"fn\">rotate_z</a>(&amp;mut self, deg: <a class=\"type\" href=\"skia_safe/type.scalar.html\" title=\"type skia_safe::scalar\">scalar</a>) -&gt; &amp;mut Self</h4></section><section id=\"method.matrix\" class=\"method\"><a class=\"src rightside\" href=\"src/skia_safe/utils/camera.rs.html#154-158\">Source</a><h4 class=\"code-header\">pub fn <a href=\"skia_safe/struct.RefHandle.html#tymethod.matrix\" class=\"fn\">matrix</a>(&amp;self) -&gt; <a class=\"struct\" href=\"skia_safe/struct.Matrix.html\" title=\"struct skia_safe::Matrix\">Matrix</a></h4></section><section id=\"method.apply_to_canvas\" class=\"method\"><a class=\"src rightside\" href=\"src/skia_safe/utils/camera.rs.html#160-163\">Source</a><h4 class=\"code-header\">pub fn <a href=\"skia_safe/struct.RefHandle.html#tymethod.apply_to_canvas\" class=\"fn\">apply_to_canvas</a>(&amp;self, canvas: &amp;<a class=\"struct\" href=\"skia_safe/struct.Canvas.html\" title=\"struct skia_safe::Canvas\">Canvas</a>) -&gt; &amp;Self</h4></section><section id=\"method.dot_with_normal\" class=\"method\"><a class=\"src rightside\" href=\"src/skia_safe/utils/camera.rs.html#165-168\">Source</a><h4 class=\"code-header\">pub fn <a href=\"skia_safe/struct.RefHandle.html#tymethod.dot_with_normal\" class=\"fn\">dot_with_normal</a>(&amp;self, d: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"skia_safe/struct.V3.html\" title=\"struct skia_safe::V3\">V3</a>&gt;) -&gt; <a class=\"type\" href=\"skia_safe/type.scalar.html\" title=\"type skia_safe::scalar\">scalar</a></h4></section></div></details>",0,"skia_safe::utils::camera::View3D"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RunIterator-for-RefHandle%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/skia_safe/modules/shaper.rs.html#101-117\">Source</a><a href=\"#impl-RunIterator-for-RefHandle%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"skia_safe/shaper/trait.RunIterator.html\" title=\"trait skia_safe::shaper::RunIterator\">RunIterator</a> for <a class=\"struct\" href=\"skia_safe/struct.RefHandle.html\" title=\"struct skia_safe::RefHandle\">RefHandle</a>&lt;T&gt;<div class=\"where\">where\n    T: NativeDrop + NativeBase&lt;SkShaper_RunIterator&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.consume\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/skia_safe/modules/shaper.rs.html#106-108\">Source</a><a href=\"#method.consume\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"skia_safe/shaper/trait.RunIterator.html#tymethod.consume\" class=\"fn\">consume</a>(&amp;mut self)</h4></section><section id=\"method.end_of_current_run\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/skia_safe/modules/shaper.rs.html#110-112\">Source</a><a href=\"#method.end_of_current_run\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"skia_safe/shaper/trait.RunIterator.html#tymethod.end_of_current_run\" class=\"fn\">end_of_current_run</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.1/std/primitive.usize.html\">usize</a></h4></section><section id=\"method.at_end\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/skia_safe/modules/shaper.rs.html#114-116\">Source</a><a href=\"#method.at_end\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"skia_safe/shaper/trait.RunIterator.html#tymethod.at_end\" class=\"fn\">at_end</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.1/std/primitive.bool.html\">bool</a></h4></section></div></details>","RunIterator","skia_safe::core::drawable::gpu_draw_handler::GPUDrawHandler","skia_safe::core::image_generator::ImageGenerator","skia_safe::core::typeface::LocalizedStringsIter","skia_safe::gpu::ganesh::backend_surface::BackendTexture","skia_safe::modules::paragraph::paragraph::Paragraph","skia_safe::modules::paragraph::paragraph_builder::ParagraphBuilder","skia_safe::modules::paragraph::paragraph_style::ParagraphStyle","skia_safe::modules::shaper::Shaper","skia_safe::modules::shaper::FontRunIterator","skia_safe::modules::shaper::BiDiRunIterator","skia_safe::modules::shaper::ScriptRunIterator","skia_safe::modules::shaper::LanguageRunIterator","skia_safe::utils::camera::View3D"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[16356]}