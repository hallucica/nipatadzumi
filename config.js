window.MathJax = {
	tex: {
		inlineMath: [['$', '$'], ['\\(', '\\)']],
		tags: "ams",
		macros: {
			const: "{\\text{const}}",
			bm: ["{\\boldsymbol{#1}}",1],						// \boldsymbol を簡略化
			del: "{\\partial}",									// \partial を簡略化
			grad: "\\mathord{\\mathrm{grad}}",					// gradient
			divr: "\\mathord{\\mathrm{div}}",					// divergence
			rot: "\\mathord{\\mathrm{rot}}",					// rotation
			cvec: ["\\begin{pmatrix}#1\\end{pmatrix}", 1],		// 列ベクトル
			rvec: ["\\begin{pmatrix}#1\\end{pmatrix}", 1],		// 行ベクトル
			Im: ["\\mathop{\\rm Im}\\nolimits"],				// 像
			Imfrak: ["\\mathop{\\mathfrak I}"],					// 虚部
			st: ["\\,\\mathrm{s.t.}\\,"],						// s.t.
			span: ["\\mathop{\\rm span}\\nolimits"],			// span
			vermid: ["\\mathrel{}\\middle #1\\mathrel{}", 1],	// 内包的定義のときの中線
			codim: ["\\mathop{\\mathrm{codim}}\\nolimits"],		// codim
			null: ["\\mathop{\\rm null}\\nolimits"],			// nullity
			supp: ["\\mathop{\\rm supp}\\nolimits"]				// support
		}
	},
	chtml: {
		scale: 0.9,
		mtextInheritFont: false
	},
};
