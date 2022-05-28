window.MathJax = {
	tex: {
		inlineMath: [['$', '$'], ['\\(', '\\)']],
		tags: "ams",
		macros: {
			const: "{\\text{const}}",
			x: ["{\\mathbin{\\times}}"],						// \times を簡略化
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
			vermid: ["\\mathrel{}\\middle #1\\mathrel{}", 1]	
		}
	},
	chtml: {
		scale: 0.95,
		mtextInheritFont: true
	}
};