(function() {
    var type_impls = Object.fromEntries([["skia_safe",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Handle%3CSkRuntimeEffect_Uniform%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/skia_safe/effects/runtime_effect.rs.html#25-29\">Source</a><a href=\"#impl-Debug-for-Handle%3CSkRuntimeEffect_Uniform%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"type\" href=\"skia_safe/runtime_effect/type.Uniform.html\" title=\"type skia_safe::runtime_effect::Uniform\">Uniform</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/skia_safe/effects/runtime_effect.rs.html#26-28\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","skia_safe::effects::runtime_effect::Variable"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Handle%3CSkRuntimeEffect_Uniform%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/skia_safe/effects/runtime_effect.rs.html#31-63\">Source</a><a href=\"#impl-Handle%3CSkRuntimeEffect_Uniform%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"type\" href=\"skia_safe/runtime_effect/type.Uniform.html\" title=\"type skia_safe::runtime_effect::Uniform\">Uniform</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.name\" class=\"method\"><a class=\"src rightside\" href=\"src/skia_safe/effects/runtime_effect.rs.html#32-34\">Source</a><h4 class=\"code-header\">pub fn <a href=\"skia_safe/runtime_effect/type.Uniform.html#tymethod.name\" class=\"fn\">name</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.str.html\">str</a></h4></section><section id=\"method.offset\" class=\"method\"><a class=\"src rightside\" href=\"src/skia_safe/effects/runtime_effect.rs.html#36-38\">Source</a><h4 class=\"code-header\">pub fn <a href=\"skia_safe/runtime_effect/type.Uniform.html#tymethod.offset\" class=\"fn\">offset</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.usize.html\">usize</a></h4></section><section id=\"method.ty\" class=\"method\"><a class=\"src rightside\" href=\"src/skia_safe/effects/runtime_effect.rs.html#40-42\">Source</a><h4 class=\"code-header\">pub fn <a href=\"skia_safe/runtime_effect/type.Uniform.html#tymethod.ty\" class=\"fn\">ty</a>(&amp;self) -&gt; <a class=\"enum\" href=\"skia_safe/runtime_effect/uniform/enum.Type.html\" title=\"enum skia_safe::runtime_effect::uniform::Type\">Type</a></h4></section><section id=\"method.count\" class=\"method\"><a class=\"src rightside\" href=\"src/skia_safe/effects/runtime_effect.rs.html#44-46\">Source</a><h4 class=\"code-header\">pub fn <a href=\"skia_safe/runtime_effect/type.Uniform.html#tymethod.count\" class=\"fn\">count</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.i32.html\">i32</a></h4></section><section id=\"method.flags\" class=\"method\"><a class=\"src rightside\" href=\"src/skia_safe/effects/runtime_effect.rs.html#48-50\">Source</a><h4 class=\"code-header\">pub fn <a href=\"skia_safe/runtime_effect/type.Uniform.html#tymethod.flags\" class=\"fn\">flags</a>(&amp;self) -&gt; <a class=\"struct\" href=\"skia_safe/runtime_effect/uniform/struct.Flags.html\" title=\"struct skia_safe::runtime_effect::uniform::Flags\">Flags</a></h4></section><section id=\"method.is_array\" class=\"method\"><a class=\"src rightside\" href=\"src/skia_safe/effects/runtime_effect.rs.html#52-54\">Source</a><h4 class=\"code-header\">pub fn <a href=\"skia_safe/runtime_effect/type.Uniform.html#tymethod.is_array\" class=\"fn\">is_array</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.bool.html\">bool</a></h4></section><section id=\"method.is_color\" class=\"method\"><a class=\"src rightside\" href=\"src/skia_safe/effects/runtime_effect.rs.html#56-58\">Source</a><h4 class=\"code-header\">pub fn <a href=\"skia_safe/runtime_effect/type.Uniform.html#tymethod.is_color\" class=\"fn\">is_color</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.bool.html\">bool</a></h4></section><section id=\"method.size_in_bytes\" class=\"method\"><a class=\"src rightside\" href=\"src/skia_safe/effects/runtime_effect.rs.html#60-62\">Source</a><h4 class=\"code-header\">pub fn <a href=\"skia_safe/runtime_effect/type.Uniform.html#tymethod.size_in_bytes\" class=\"fn\">size_in_bytes</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.usize.html\">usize</a></h4></section></div></details>",0,"skia_safe::effects::runtime_effect::Variable"],["<section id=\"impl-Send-for-Handle%3CSkRuntimeEffect_Uniform%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/skia_safe/effects/runtime_effect.rs.html#14\">Source</a><a href=\"#impl-Send-for-Handle%3CSkRuntimeEffect_Uniform%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"type\" href=\"skia_safe/runtime_effect/type.Uniform.html\" title=\"type skia_safe::runtime_effect::Uniform\">Uniform</a></h3></section>","Send","skia_safe::effects::runtime_effect::Variable"],["<section id=\"impl-Sync-for-Handle%3CSkRuntimeEffect_Uniform%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/skia_safe/effects/runtime_effect.rs.html#14\">Source</a><a href=\"#impl-Sync-for-Handle%3CSkRuntimeEffect_Uniform%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"type\" href=\"skia_safe/runtime_effect/type.Uniform.html\" title=\"type skia_safe::runtime_effect::Uniform\">Uniform</a></h3></section>","Sync","skia_safe::effects::runtime_effect::Variable"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[6842]}