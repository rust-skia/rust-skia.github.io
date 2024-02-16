(function() {var type_impls = {
"skia_safe":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3Ci64%3E-for-u64\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.34.0\">1.34.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/convert/num.rs.html#324\">source</a></span><a href=\"#impl-TryFrom%3Ci64%3E-for-u64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i64.html\">i64</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/1.76.0/src/core/convert/num.rs.html#324\">source</a><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(u: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i64.html\">i64</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a>, &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a> as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i64.html\">i64</a>&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html#associatedtype.Error\" title=\"type core::convert::TryFrom::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Try to create the target number type from a source\nnumber type. This returns an error if the source value\nis outside of the range of the target type.</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/num/error/struct.TryFromIntError.html\" title=\"struct core::num::error::TryFromIntError\">TryFromIntError</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details></div></details>","TryFrom<i64>","skia_safe::gpu::vk::DeviceSize"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3Cu128%3E-for-u64\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.34.0\">1.34.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/convert/num.rs.html#306\">source</a></span><a href=\"#impl-TryFrom%3Cu128%3E-for-u64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u128.html\">u128</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/1.76.0/src/core/convert/num.rs.html#306\">source</a><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(u: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u128.html\">u128</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a>, &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a> as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u128.html\">u128</a>&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html#associatedtype.Error\" title=\"type core::convert::TryFrom::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Try to create the target number type from a source\nnumber type. This returns an error if the source value\nis outside of the range of the target type.</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/num/error/struct.TryFromIntError.html\" title=\"struct core::num::error::TryFromIntError\">TryFromIntError</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details></div></details>","TryFrom<u128>","skia_safe::gpu::vk::DeviceSize"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3Ci32%3E-for-u64\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.34.0\">1.34.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/convert/num.rs.html#323\">source</a></span><a href=\"#impl-TryFrom%3Ci32%3E-for-u64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i32.html\">i32</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/1.76.0/src/core/convert/num.rs.html#323\">source</a><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(u: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i32.html\">i32</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a>, &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a> as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i32.html\">i32</a>&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html#associatedtype.Error\" title=\"type core::convert::TryFrom::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Try to create the target number type from a source\nnumber type. This returns an error if the source value\nis outside of the range of the target type.</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/num/error/struct.TryFromIntError.html\" title=\"struct core::num::error::TryFromIntError\">TryFromIntError</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details></div></details>","TryFrom<i32>","skia_safe::gpu::vk::DeviceSize"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3Cisize%3E-for-u64\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.34.0\">1.34.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/convert/num.rs.html#395\">source</a></span><a href=\"#impl-TryFrom%3Cisize%3E-for-u64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.isize.html\">isize</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/1.76.0/src/core/convert/num.rs.html#395\">source</a><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(u: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.isize.html\">isize</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a>, &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a> as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.isize.html\">isize</a>&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html#associatedtype.Error\" title=\"type core::convert::TryFrom::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Try to create the target number type from a source\nnumber type. This returns an error if the source value\nis outside of the range of the target type.</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/num/error/struct.TryFromIntError.html\" title=\"struct core::num::error::TryFromIntError\">TryFromIntError</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details></div></details>","TryFrom<isize>","skia_safe::gpu::vk::DeviceSize"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3Ci8%3E-for-u64\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.34.0\">1.34.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/convert/num.rs.html#321\">source</a></span><a href=\"#impl-TryFrom%3Ci8%3E-for-u64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i8.html\">i8</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/1.76.0/src/core/convert/num.rs.html#321\">source</a><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(u: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i8.html\">i8</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a>, &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a> as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i8.html\">i8</a>&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html#associatedtype.Error\" title=\"type core::convert::TryFrom::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Try to create the target number type from a source\nnumber type. This returns an error if the source value\nis outside of the range of the target type.</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/num/error/struct.TryFromIntError.html\" title=\"struct core::num::error::TryFromIntError\">TryFromIntError</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details></div></details>","TryFrom<i8>","skia_safe::gpu::vk::DeviceSize"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3Cusize%3E-for-u64\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.34.0\">1.34.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/convert/num.rs.html#390\">source</a></span><a href=\"#impl-TryFrom%3Cusize%3E-for-u64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\">usize</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/1.76.0/src/core/convert/num.rs.html#390\">source</a><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a>, &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a> as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\">usize</a>&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html#associatedtype.Error\" title=\"type core::convert::TryFrom::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Try to create the target number type from a source\nnumber type. This returns an error if the source value\nis outside of the range of the target type.</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/num/error/struct.TryFromIntError.html\" title=\"struct core::num::error::TryFromIntError\">TryFromIntError</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details></div></details>","TryFrom<usize>","skia_safe::gpu::vk::DeviceSize"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3Ci128%3E-for-u64\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.34.0\">1.34.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/convert/num.rs.html#329\">source</a></span><a href=\"#impl-TryFrom%3Ci128%3E-for-u64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i128.html\">i128</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/1.76.0/src/core/convert/num.rs.html#329\">source</a><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(u: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i128.html\">i128</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a>, &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a> as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i128.html\">i128</a>&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html#associatedtype.Error\" title=\"type core::convert::TryFrom::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Try to create the target number type from a source\nnumber type. This returns an error if the source value\nis outside of the range of the target type.</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/num/error/struct.TryFromIntError.html\" title=\"struct core::num::error::TryFromIntError\">TryFromIntError</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details></div></details>","TryFrom<i128>","skia_safe::gpu::vk::DeviceSize"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3Ci16%3E-for-u64\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.34.0\">1.34.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/convert/num.rs.html#322\">source</a></span><a href=\"#impl-TryFrom%3Ci16%3E-for-u64\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/1.76.0/src/core/convert/num.rs.html#322\">source</a><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(u: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a>, &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a> as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.i16.html\">i16</a>&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html#associatedtype.Error\" title=\"type core::convert::TryFrom::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Try to create the target number type from a source\nnumber type. This returns an error if the source value\nis outside of the range of the target type.</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/num/error/struct.TryFromIntError.html\" title=\"struct core::num::error::TryFromIntError\">TryFromIntError</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details></div></details>","TryFrom<i16>","skia_safe::gpu::vk::DeviceSize"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()