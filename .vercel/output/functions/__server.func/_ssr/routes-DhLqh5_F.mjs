import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { i as Activity, n as Volume2, r as ArrowUp, t as VolumeX } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DhLqh5_F.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var _jsxFileName$2 = "/app/applet/src/components/ui/animated-button.tsx";
function AnimatedButton({ href, to, children, className, ...props }) {
	const baseClass = cn("btn-uiverse font-sans inline-flex", className);
	const inner = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "invisible block px-6 py-3",
			children
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 16,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "anim-bg anim-bg-1",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 18,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 17,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "anim-bg anim-bg-2",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 21,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 20,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 15,
		columnNumber: 5
	}, this);
	if (to) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
		to,
		className: baseClass,
		...props,
		children: inner
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 28,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
		href,
		className: baseClass,
		...props,
		children: inner
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 35,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/ui/3-d-coverflow-carousel.tsx";
var ChevronLeftIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
	width: "20",
	height: "20",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	strokeWidth: 2.5,
	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M15 19l-7-7 7-7"
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 8,
		columnNumber: 5
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 7,
	columnNumber: 3
}, void 0);
var ChevronRightIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
	width: "20",
	height: "20",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	strokeWidth: 2.5,
	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M9 5l7 7-7 7"
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 14,
		columnNumber: 5
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 13,
	columnNumber: 3
}, void 0);
var ArrowRightIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
	width: "13",
	height: "13",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	strokeWidth: 2.5,
	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
		strokeLinecap: "round",
		strokeLinejoin: "round",
		d: "M14 5l7 7m0 0l-7 7m7-7H3"
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 20,
		columnNumber: 5
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 19,
	columnNumber: 3
}, void 0);
function CoverFlowCarousel({ items = [], sectionLabel = "", autoplay = true, autoplayDelay = 5e3, className = "", onCtaClick }) {
	const [currentIndex, setCurrentIndex] = (0, import_react.useState)(0);
	const [isHovered, setIsHovered] = (0, import_react.useState)(false);
	const touchStartX = (0, import_react.useRef)(0);
	const total = items.length;
	const nextSlide = (0, import_react.useCallback)(() => {
		setCurrentIndex((prev) => (prev + 1) % total);
	}, [total]);
	const prevSlide = (0, import_react.useCallback)(() => {
		setCurrentIndex((prev) => (prev - 1 + total) % total);
	}, [total]);
	const goToSlide = (idx) => {
		setCurrentIndex(idx % total);
	};
	(0, import_react.useEffect)(() => {
		if (!autoplay || isHovered || total <= 1) return;
		const interval = setInterval(nextSlide, autoplayDelay);
		return () => clearInterval(interval);
	}, [
		autoplay,
		autoplayDelay,
		isHovered,
		nextSlide,
		total
	]);
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if (e.key === "ArrowLeft") prevSlide();
			if (e.key === "ArrowRight") nextSlide();
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [nextSlide, prevSlide]);
	const handleTouchStart = (e) => {
		touchStartX.current = e.touches[0].clientX;
	};
	const handleTouchEnd = (e) => {
		const diff = e.changedTouches[0].clientX - touchStartX.current;
		if (Math.abs(diff) > 45) if (diff < 0) nextSlide();
		else prevSlide();
	};
	if (!items || items.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: `relative w-full h-[600px] flex items-center justify-center overflow-hidden py-12 select-none ${className}`,
		onMouseEnter: () => setIsHovered(true),
		onMouseLeave: () => setIsHovered(false),
		onTouchStart: handleTouchStart,
		onTouchEnd: handleTouchEnd,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative w-full max-w-6xl mx-auto px-4 z-10 flex flex-col items-center",
			children: [
				sectionLabel && /* @__PURE__ */ (void 0)("div", {
					className: "flex items-center gap-3 mb-8",
					children: [
						/* @__PURE__ */ (void 0)("span", { style: {
							width: "36px",
							height: "1px",
							background: "linear-gradient(90deg, transparent, #D9002B)"
						} }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 109,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("h3", {
							style: {
								fontSize: "0.75rem",
								fontWeight: 700,
								letterSpacing: "0.3em",
								textTransform: "uppercase",
								color: "#D9002B",
								margin: 0
							},
							children: sectionLabel
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 110,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("span", { style: {
							width: "36px",
							height: "1px",
							background: "linear-gradient(90deg, #D9002B, transparent)"
						} }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 122,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 108,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative w-full h-[500px] flex justify-center items-center mb-8",
					style: { perspective: "1400px" },
					children: items.map((item, idx) => {
						const offset = (idx - currentIndex + total) % total;
						let transform = "translateX(0px) scale(0.4) rotateY(0deg)";
						let opacity = 0;
						let zIndex = 0;
						let filter = "brightness(0.4) blur(2px)";
						let isCenter = false;
						if (offset === 0) {
							isCenter = true;
							transform = "translateX(0px) scale(1) rotateY(0deg)";
							opacity = 1;
							zIndex = 30;
							filter = "brightness(1)";
						} else if (offset === 1) {
							transform = "translateX(240px) scale(0.84) rotateY(-24deg)";
							opacity = .65;
							zIndex = 20;
							filter = "brightness(0.75)";
						} else if (offset === 2) {
							transform = "translateX(460px) scale(0.68) rotateY(-38deg)";
							opacity = .38;
							zIndex = 10;
							filter = "brightness(0.55) blur(1px)";
						} else if (offset === total - 1) {
							transform = "translateX(-240px) scale(0.84) rotateY(24deg)";
							opacity = .65;
							zIndex = 20;
							filter = "brightness(0.75)";
						} else if (offset === total - 2) {
							transform = "translateX(-460px) scale(0.68) rotateY(38deg)";
							opacity = .38;
							zIndex = 10;
							filter = "brightness(0.55) blur(1px)";
						}
						return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							onClick: () => !isCenter && goToSlide(idx),
							style: {
								position: "absolute",
								width: "300px",
								height: "450px",
								borderRadius: "18px",
								overflow: "hidden",
								backgroundColor: "#111111",
								border: "1px solid rgba(255, 255, 255, 0.1)",
								transform,
								opacity,
								zIndex,
								filter,
								transformOrigin: "center center",
								transition: "all 800ms cubic-bezier(0.25, 1, 0.5, 1)",
								boxShadow: isCenter ? "0 25px 60px rgba(0,0,0,0.9), 0 0 35px rgba(217,0,43,0.15)" : "0 15px 35px rgba(0,0,0,0.5)",
								cursor: isCenter ? "default" : "pointer"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
									src: item.img,
									alt: item.titleLine1,
									style: {
										position: "absolute",
										inset: 0,
										width: "100%",
										height: "100%",
										objectFit: "cover"
									}
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 193,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
									position: "absolute",
									inset: 0,
									background: "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.68) 60%, rgba(0,0,0,0.96) 100%)",
									pointerEvents: "none",
									zIndex: 10
								} }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 206,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									style: {
										position: "relative",
										width: "100%",
										height: "100%",
										padding: "20px 18px 22px",
										display: "flex",
										flexDirection: "column",
										justifyContent: "space-between",
										textAlign: "center",
										zIndex: 20,
										opacity: isCenter ? 1 : 0,
										transform: isCenter ? "translateY(0px)" : "translateY(16px)",
										transition: "opacity 500ms ease, transform 500ms ease",
										pointerEvents: isCenter ? "auto" : "none"
									},
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										style: {
											textAlign: "right",
											width: "100%",
											paddingRight: "4px"
										},
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											style: {
												display: "inline-block",
												fontSize: "0.78rem",
												fontWeight: 600,
												letterSpacing: "0.06em",
												color: "rgba(255,255,255,0.9)",
												backgroundColor: "#D9002B",
												padding: "2px 10px",
												borderRadius: "12px"
											},
											children: item.tag
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 237,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 236,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										style: {
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											gap: "3px",
											marginTop: "auto",
											paddingBottom: "4px"
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
												style: {
													fontSize: "1.45rem",
													fontWeight: 900,
													textTransform: "uppercase",
													letterSpacing: "0.04em",
													color: "#ffffff",
													margin: 0,
													lineHeight: 1.1
												},
												children: item.titleLine1
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 264,
												columnNumber: 21
											}, this),
											item.titleLine2 && /* @__PURE__ */ (void 0)("span", {
												style: {
													fontSize: "1rem",
													fontWeight: 700,
													textTransform: "uppercase",
													letterSpacing: "0.06em",
													color: "#9ca3af",
													lineHeight: 1.2
												},
												children: item.titleLine2
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 279,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
												width: "34px",
												height: "2px",
												backgroundColor: "#D9002B",
												borderRadius: "2px",
												margin: "8px auto"
											} }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 293,
												columnNumber: 21
											}, this),
											item.desc && /* @__PURE__ */ (void 0)("p", {
												style: {
													fontSize: "0.85rem",
													color: "rgba(255,255,255,0.8)",
													maxWidth: "280px",
													margin: "0 0 10px",
													lineHeight: 1.4
												},
												children: item.desc
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 304,
												columnNumber: 23
											}, this),
											item.ctaText && /* @__PURE__ */ (void 0)("a", {
												href: item.ctaUrl || "#",
												onClick: (e) => {
													if (onCtaClick) {
														e.preventDefault();
														onCtaClick(item);
													}
												},
												style: {
													display: "inline-flex",
													alignItems: "center",
													gap: "6px",
													padding: "7px 18px",
													borderRadius: "9999px",
													backgroundColor: "#1E5AE8",
													color: "#ffffff",
													fontSize: "0.72rem",
													fontWeight: 800,
													letterSpacing: "0.14em",
													textTransform: "uppercase",
													textDecoration: "none",
													cursor: "pointer",
													transition: "transform 200ms ease, background-color 200ms ease"
												},
												onMouseEnter: (e) => e.currentTarget.style.backgroundColor = "#1a4dc6",
												onMouseLeave: (e) => e.currentTarget.style.backgroundColor = "#1E5AE8",
												children: [/* @__PURE__ */ (void 0)("span", { children: item.ctaText }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 345,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)(ArrowRightIcon, {}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 346,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 318,
												columnNumber: 23
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 254,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 218,
									columnNumber: 17
								}, this)
							]
						}, idx, true, {
							fileName: _jsxFileName$1,
							lineNumber: 169,
							columnNumber: 15
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 127,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: prevSlide,
					"aria-label": "Previous slide",
					style: {
						position: "absolute",
						left: "24px",
						top: "50%",
						transform: "translateY(-50%)",
						width: "46px",
						height: "46px",
						borderRadius: "50%",
						backgroundColor: "rgba(17,17,17,0.7)",
						border: "1px solid rgba(255,255,255,0.1)",
						color: "#ffffff",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						backdropFilter: "blur(8px)",
						cursor: "pointer",
						zIndex: 40,
						transition: "all 200ms ease"
					},
					className: "hover:bg-[#D9002B]",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronLeftIcon, {}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 381,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 357,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: nextSlide,
					"aria-label": "Next slide",
					style: {
						position: "absolute",
						right: "24px",
						top: "50%",
						transform: "translateY(-50%)",
						width: "46px",
						height: "46px",
						borderRadius: "50%",
						backgroundColor: "rgba(17,17,17,0.7)",
						border: "1px solid rgba(255,255,255,0.1)",
						color: "#ffffff",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						backdropFilter: "blur(8px)",
						cursor: "pointer",
						zIndex: 40,
						transition: "all 200ms ease"
					},
					className: "hover:bg-[#D9002B]",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRightIcon, {}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 408,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 384,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					style: {
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "8px",
						zIndex: 30
					},
					children: items.map((_, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => goToSlide(idx),
						"aria-label": `Go to slide ${idx + 1}`,
						style: {
							height: "6px",
							width: idx === currentIndex ? "24px" : "6px",
							borderRadius: "9999px",
							backgroundColor: idx === currentIndex ? "#D9002B" : "rgba(255,255,255,0.2)",
							border: "none",
							cursor: "pointer",
							transition: "all 300ms ease"
						}
					}, idx, false, {
						fileName: _jsxFileName$1,
						lineNumber: 414,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 412,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 105,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 98,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/index.tsx?tsr-split=component";
var nav = [
	{
		id: "raiz",
		label: "Sintoma vs. Raiz"
	},
	{
		id: "radical",
		label: "Ser Radical"
	},
	{
		id: "autoridade",
		label: "Autoridade"
	},
	{
		id: "diagnostico",
		label: "Diagnóstico"
	},
	{
		id: "solucoes",
		label: "Soluções"
	},
	{
		id: "faq",
		label: "FAQ"
	}
];
var sintomas = [
	{
		title: "Vendas e Margem",
		text: "Mais vendas com margem errada aumentam o esforço, não necessariamente o lucro.",
		img: "https://res.cloudinary.com/ifuatk2z/image/upload/v1788957309/6365.jpg"
	},
	{
		title: "Processos e Equipe",
		text: "Mais pessoas sem processos aumentam a estrutura, não necessariamente a produtividade.",
		img: "https://res.cloudinary.com/ifuatk2z/image/upload/v1788957309/4239672.jpg"
	},
	{
		title: "Crescimento e Caixa",
		text: "Mais clientes sem controle aumentam o faturamento, mas também o problema de caixa.",
		img: "https://res.cloudinary.com/ifuatk2z/image/upload/v1788957309/70656.jpg"
	},
	{
		title: "Dependência Central",
		text: "Empresa que depende do dono para tudo até cresce. Mas dificilmente cresce saudável.",
		img: "https://res.cloudinary.com/ifuatk2z/image/upload/v1788957309/47879.jpg"
	}
];
var cenarios = [
	"Vende, fatura e movimenta, mas o dinheiro nunca sobra.",
	"A empresa cresceu, mas os controles não acompanharam.",
	"Existe equipe, mas tudo ainda chega e depende do dono.",
	"Existe oportunidade no mercado, mas falta estrutura interna."
];
var historia = [
	{
		title: "A Escala das Mega Lojas",
		period: "O VAREJO NA PRÁTICA",
		text: "Enquanto o mercado se acomodava em lojinhas convencionais, Edmar apostou na força das megaoperações. Construiu empreendimentos colossais de 3.000m² a 4.000m² com infraestrutura de ponta, provando que o interior comportava um varejo agressivo e de altíssimo padrão. Uma visão pioneira que mudou o mercado.",
		stats: [{
			value: 350,
			prefix: "+",
			suffix: " mil m²",
			label: "De lojas construídas"
		}]
	},
	{
		title: "O Império Nacional",
		period: "EXPANSÃO",
		text: "O verdadeiro teste de um método é a sua capacidade de expansão. Edmar multiplicou o modelo, estruturando mais de uma centena de empresas e lojas espalhadas pelo país, gerenciando faturamentos gigantescos e liderando milhares de colaboradores na linha de frente.",
		stats: [{
			value: 100,
			prefix: "+",
			suffix: "",
			label: "Lojas e Empresas"
		}, {
			value: 250,
			prefix: "R$ ",
			suffix: " M",
			label: "Faturamento Anual (Est.)"
		}]
	},
	{
		title: "Crises e Liquidez Absoluta",
		period: "A PROVA DE FOGO",
		text: "Em Leme, durante a construção de uma mega loja, o caixa secou. Concorrentes zombaram. Edmar não recuou: liquidou produtos em uma operação cirúrgica de guerra, girou o estoque rapidamente, reergueu o caixa limpo e inaugurou a loja abarrotando a cidade.",
		stats: [{
			value: 100,
			prefix: "",
			suffix: "%",
			label: "Controle de Estoque"
		}, {
			value: 10,
			prefix: "R$ ",
			suffix: " M",
			label: "Gerados em Liquidez"
		}]
	},
	{
		title: "58 Anos de Autoridade Real",
		period: "O LEGADO HOJE",
		text: "Tudo o que o mercado tenta ensinar hoje na teoria, Edmar viveu na prática, na dor e no sucesso. Esse império forjado a suor, riscos calculados e decisões pesadas é a base do seu projeto de Mentoria: ensinar exclusivamente o que ele testou e validou na trincheira.",
		stats: [{
			value: 58,
			prefix: "",
			suffix: "",
			label: "Anos de Varejo Raiz"
		}, {
			value: 3,
			prefix: "+",
			suffix: " Mil",
			label: "Colaboradores Geridos"
		}]
	}
];
var checklist = [
	"Minha empresa vende, mas o dinheiro não sobra.",
	"Crescemos e perdemos parte do controle.",
	"Minha equipe existe, mas decisões demais dependem de mim.",
	"Temos números, mas não os transformamos em decisões.",
	"Precisamos recuperar margem e organizar o caixa.",
	"Sócios ou lideranças precisam alinhar a direção.",
	"Existe uma decisão importante que estamos adiando.",
	"Estamos preparados para crescer, mas precisamos estruturar o próximo ciclo.",
	"Minha equipe precisa mudar comportamento e performance."
];
var solucoes = [
	{
		tag: "Acompanhamento",
		title: "Mentoria Empresarial",
		lead: "Sua empresa não precisa de mais informação. Precisa transformar informação em decisão.",
		body: "Acompanhamento estratégico para reorganizar a operação, recuperar controle e construir uma empresa capaz de crescer com gestão, margem e direção. Trabalhamos caixa, pessoas, processos, indicadores e decisões.",
		note: "Não é uma aula sobre como administrar empresas. É um trabalho sobre a sua empresa.",
		formato: "Ciclos de 3 a 6 meses.",
		foco: "Gestão, acompanhamento e execução.",
		cta: "Quero conhecer a Mentoria",
		accent: "red"
	},
	{
		tag: "Decisão Crítica",
		title: "Consultoria e Imersões",
		lead: "Às vezes sua empresa não precisa de mais uma reunião. Precisa parar tudo e resolver.",
		body: "Intervenção estratégica para identificar rapidamente gargalos, confrontar problemas e sair da sala com decisões tomadas e uma rota clara de execução.",
		note: "Números e processos na mesa. Entramos com perguntas. Saímos com decisões.",
		formato: "1 a 2 dias intensivos.",
		foco: "Sócios, conselho e lideranças.",
		cta: "Colocar minha empresa na mesa",
		accent: "blue"
	},
	{
		tag: "Cultura e Liderança",
		title: "Palestras Corporativas",
		lead: "Uma palestra pode ocupar uma hora. Ou mudar a forma como uma equipe pensa o negócio.",
		body: "Visão construída no mundo real dos negócios. Gestão, vendas, liderança, comportamento e resultado tratados sem discurso pronto e sem teoria distante da realidade.",
		note: "Fazer as pessoas saírem pensando e agindo diferente de quando entraram.",
		formato: "Convenções e In-company.",
		foco: "Comportamento e performance.",
		cta: "Solicitar proposta de palestra",
		accent: "red"
	}
];
var processo = [
	{
		n: "01",
		t: "Diagnóstico",
		d: "Entender sem maquiar números. Separar causas de sintomas. Definir o que precisa ser enfrentado."
	},
	{
		n: "02",
		t: "Decisão",
		d: "Transformar diagnóstico em decisões claras. Responsáveis, prazos e indicadores."
	},
	{
		n: "03",
		t: "Execução",
		d: "Acompanhar impacto e corrigir rota. Construir crescimento sobre uma operação mais saudável."
	}
];
var cases = [
	{
		kpi: "Retomada de Caixa em 45 Dias",
		title: "Recuperação de Caixa e Processos no Varejo",
		ctx: "Rede de lojas enfrentando estagnação nas vendas e margens espremidas.",
		diag: "Estoque mal dimensionado e equipe de vendas sem acompanhamento diário de metas.",
		inter: "Reestruturação da rotina da gerência, metas diárias e liquidação estratégica de estoque.",
		res: "Aumento rápido no fluxo de caixa e retomada da capacidade de investimento."
	},
	{
		kpi: "Independência do Dono",
		title: "Escala e Gestão de Pessoas",
		ctx: "Empresa de serviços estagnada no crescimento por dependência exclusiva do dono.",
		diag: "Falta de delegação, lideranças não preparadas e ausência de indicadores operacionais.",
		inter: "Treinamento intensivo da liderança imediata e implementação de painéis de controle.",
		res: "O dono retomou o papel estratégico e a empresa abriu duas filiais no mesmo semestre."
	},
	{
		kpi: "Estancamento da Queda em 45 Dias",
		title: "Sobrevivência em Cenário de Crise",
		ctx: "Comércio local perdendo clientes rapidamente para novos concorrentes na região.",
		diag: "Posicionamento confuso e experiência do cliente abaixo do padrão do novo mercado.",
		inter: "Mudança pragmática no atendimento, readequação do mix e corte de custos fixos.",
		res: "Estancamento da queda em 45 dias e retorno ao ponto de equilíbrio financeiro."
	}
];
var faq = [
	{
		q: "A Mentoria Empresarial é indicada para qualquer empresa?",
		a: "A base do trabalho é gestão empresarial, mas a adequação depende do momento, porte, desafio e disponibilidade para executar. Após entender seu cenário, indicaremos se a Mentoria é o caminho adequado."
	},
	{
		q: "Qual é a diferença entre Mentoria e Imersão?",
		a: "A Mentoria acompanha decisões e execução ao longo de ciclos de 3 a 6 meses. A Imersão concentra diagnóstico, alinhamento e decisões em 1 a 2 dias. Em alguns casos, uma pode conduzir à outra."
	},
	{
		q: "Qual é a duração da Mentoria?",
		a: "O formato-base prevê ciclos de 3 a 6 meses, definidos conforme o diagnóstico e a proposta aprovada."
	},
	{
		q: "Como contratar uma palestra?",
		a: "Envie data, cidade, público, tema, objetivo e formato do evento. A equipe avaliará disponibilidade e enviará uma proposta personalizada."
	},
	{
		q: "Como saber qual solução escolher?",
		a: "Preencha o formulário com o momento da empresa. A equipe analisa as informações e orienta o próximo movimento, sem obrigar você a escolher uma solução antes da conversa."
	}
];
function AnimatedCounter({ value, prefix = "", suffix = "" }) {
	const [count, setCount] = (0, import_react.useState)(0);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				const end = value;
				const duration = 2e3;
				const startTime = performance.now();
				const updateCounter = (currentTime) => {
					const elapsedTime = currentTime - startTime;
					const progress = Math.min(elapsedTime / duration, 1);
					const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
					setCount(Math.floor(end * easeProgress));
					if (progress < 1) requestAnimationFrame(updateCounter);
				};
				requestAnimationFrame(updateCounter);
				observer.disconnect();
			}
		}, { threshold: .5 });
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, [value]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		ref,
		children: [
			prefix,
			count,
			suffix
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 223,
		columnNumber: 10
	}, this);
}
function Landing() {
	const root = (0, import_react.useRef)(null);
	const [marcados, setMarcados] = (0, import_react.useState)([]);
	const [aberta, setAberta] = (0, import_react.useState)(0);
	const [showTopBtn, setShowTopBtn] = (0, import_react.useState)(false);
	const [heroOpacity, setHeroOpacity] = (0, import_react.useState)(1);
	const [heroScroll, setHeroScroll] = (0, import_react.useState)(0);
	const [isMuted, setIsMuted] = (0, import_react.useState)(true);
	const videoRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (videoRef.current) if (entry.isIntersecting) {
					videoRef.current.volume = 1;
					videoRef.current.play().catch((e) => console.log("Auto-play prevented", e));
				} else videoRef.current.pause();
			});
		}, { threshold: .5 });
		if (videoRef.current) observer.observe(videoRef.current);
		return () => {
			if (videoRef.current) observer.unobserve(videoRef.current);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			if (window.scrollY > 500) setShowTopBtn(true);
			else setShowTopBtn(false);
			const scrollY = window.scrollY;
			setHeroScroll(scrollY);
			const fadeStart = 150;
			const fadeEnd = 850;
			if (scrollY <= fadeStart) setHeroOpacity(1);
			else if (scrollY >= fadeEnd) setHeroOpacity(0);
			else setHeroOpacity(1 - (scrollY - fadeStart) / 700);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	(0, import_react.useEffect)(() => {
		let ctx;
		let cancelled = false;
		(async () => {
			const [{ default: gsap }, { ScrollTrigger }, anime] = await Promise.all([
				import("../_libs/gsap.mjs").then((n) => n.t),
				import("../_libs/gsap.mjs").then((n) => n.n),
				import("../_libs/animejs.mjs").then((n) => n.t)
			]);
			if (cancelled) return;
			gsap.registerPlugin(ScrollTrigger);
			const animate = anime.animate;
			ctx = gsap.context(() => {
				gsap.set(".reveal", {
					opacity: 0,
					y: 28,
					filter: "blur(14px)"
				});
				gsap.to(".hero-reveal", {
					opacity: 1,
					y: 0,
					filter: "blur(0px)",
					duration: 1.1,
					ease: "power3.out",
					stagger: .12,
					delay: .1
				});
				gsap.utils.toArray(".reveal:not(.hero-reveal)").forEach((el) => {
					gsap.to(el, {
						opacity: 1,
						y: 0,
						filter: "blur(0px)",
						duration: .9,
						ease: "power3.out",
						scrollTrigger: {
							trigger: el,
							start: "top 88%"
						}
					});
				});
				gsap.utils.toArray(".aura").forEach((el, i) => {
					gsap.to(el, {
						xPercent: i % 2 ? -12 : 12,
						yPercent: i % 2 ? 10 : -10,
						duration: 9 + i,
						repeat: -1,
						yoyo: true,
						ease: "sine.inOut"
					});
				});
				gsap.to(".hero-bg-layer", {
					opacity: 0,
					scrollTrigger: {
						trigger: "#topo",
						start: "top top",
						end: "bottom top",
						scrub: true
					}
				});
				gsap.to(".quote-char", {
					opacity: 1,
					duration: .1,
					stagger: .03,
					ease: "none",
					scrollTrigger: {
						trigger: ".quote-container",
						start: "top 85%"
					}
				});
			}, root);
			if (typeof animate === "function") {
				animate(".hero-word", {
					opacity: [0, 1],
					filter: ["blur(16px)", "blur(0px)"],
					translateY: [24, 0],
					delay: (_, i) => 200 + i * 70,
					duration: 900,
					ease: "outExpo"
				});
				animate(".pulse-dot", {
					scale: [1, 1.6],
					opacity: [.9, 0],
					duration: 1600,
					loop: true,
					ease: "outQuad"
				});
			}
		})();
		return () => {
			cancelled = true;
			ctx?.revert();
		};
	}, []);
	const toggle = (i) => setMarcados((m) => m.includes(i) ? m.filter((x) => x !== i) : [...m, i]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		ref: root,
		className: "relative min-h-screen overflow-x-hidden bg-[#0A0A0A] font-sans text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "aura -left-40 top-[-10rem] h-[34rem] w-[34rem] hidden" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 391,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "aura right-[-12rem] top-[30rem] h-[36rem] w-[36rem] hidden" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 392,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "aura bottom-[-14rem] left-1/3 h-[32rem] w-[32rem] hidden" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 393,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "absolute inset-0 opacity-[0.35]",
						style: {
							backgroundImage: "linear-gradient(oklch(1 0 0 / 4%) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 4%) 1px, transparent 1px)",
							backgroundSize: "72px 72px",
							maskImage: "radial-gradient(ellipse at 50% 0%, black, transparent 75%)"
						}
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 394,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 390,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "absolute top-0 inset-x-0 h-[100vh] pointer-events-none z-0 overflow-hidden transition-opacity duration-75",
				style: {
					opacity: heroOpacity,
					transform: `translateY(${heroScroll * .6}px)`
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "absolute inset-0 bg-gradient-to-br from-[#e5372b]/10 via-[#0A0A0A] to-[#1e5ae8]/10 animate-pulse",
						style: { animationDuration: "4s" }
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 406,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-[-20rem] right-[-20rem] w-[50rem] h-[50rem] bg-[#e5372b]/10 rounded-full blur-[120px]" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 409,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-[20%] left-[-10rem] w-[30rem] h-[30rem] bg-[#1e5ae8]/10 rounded-full blur-[120px]" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 410,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 402,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "fixed inset-x-0 top-0 z-50 px-4 pt-4",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "bg-[#111111] shadow-sm border border-white/10 mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: "#topo",
							className: "flex items-center gap-2 text-sm font-extrabold tracking-tight",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Activity, {
								className: "h-6 w-6 text-[#e5372b]",
								style: { animation: "pulse 1.5s infinite" }
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 417,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-white",
								children: ["EMPRESÁRIO ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[#e5372b]",
									children: "RADICAL"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 420,
									columnNumber: 53
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 420,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 416,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
							className: "hidden items-center gap-6 text-xs font-medium text-gray-400 lg:flex",
							children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: `#${n.id}`,
								className: "transition-colors hover:text-white",
								children: n.label
							}, n.id, false, {
								fileName: _jsxFileName,
								lineNumber: 423,
								columnNumber: 27
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 422,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedButton, {
							href: "#contato",
							className: "btn-whatsapp min-h-0 py-3 px-6 text-[10px]",
							children: "Falar com a equipe"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 427,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 415,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 414,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				id: "topo",
				className: "relative mx-auto max-w-6xl px-6 pb-24 pt-40 lg:pt-52 transition-opacity duration-75",
				style: { opacity: heroOpacity },
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						style: { transform: `translateY(${-heroScroll * .3}px)` },
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "reveal hero-reveal bg-white shadow-sm border border-gray-200 mb-7 inline-flex rounded-full px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gray-400",
								children: "Mentorias • Imersões • Palestras Corporativas"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 441,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
								className: "text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl",
								children: "Seu problema pode não ser falta de vendas.".split(" ").map((w, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "hero-word mr-[0.25em] inline-block opacity-0",
									children: w === "vendas." ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-[#e5372b]",
										children: "vendas."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 446,
										columnNumber: 38
									}, this) : w
								}, i, false, {
									fileName: _jsxFileName,
									lineNumber: 445,
									columnNumber: 86
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 444,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "reveal hero-reveal mt-7 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg",
								children: "Talvez sua empresa venda e não tenha margem. Cresça e não tenha gestão. Tenha equipe e continue dependendo de você."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 449,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "reveal hero-reveal mt-4 max-w-xl text-base leading-relaxed text-white",
								children: "O Empresário Radical vai à raiz do negócio para transformar problemas em decisões e decisões em resultado."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 453,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "reveal hero-reveal mt-9 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedButton, {
									href: "#diagnostico",
									className: "btn-red py-4 px-9",
									children: "QUERO ENTENDER MEU CENÁRIO"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 458,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedButton, {
									href: "#solucoes",
									className: "btn-blue py-4 px-9",
									children: "Ver soluções"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 461,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 457,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 438,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "reveal hero-reveal relative",
						style: { transform: `translateY(${-heroScroll * .15}px)` },
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "bg-[#111111] border border-white/10 overflow-hidden rounded-[2rem] p-2",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative w-full aspect-[3/4] rounded-[1.6rem] overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
									src: "https://res.cloudinary.com/ifuatk2z/image/upload/v1788975669/edmar9.png",
									alt: "Edmar, mentor do Empresário Radical",
									className: "absolute inset-0 w-full h-full object-cover transform -scale-x-100 object-[left_top]"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 472,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 471,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 470,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "bg-[#111] border border-white/10 absolute -bottom-6 -left-6 max-w-[15rem] rounded-2xl p-4 text-xs leading-relaxed text-gray-400 shadow-2xl z-10",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "block text-sm font-bold text-white",
								children: "Radical vem de raiz."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 476,
								columnNumber: 15
							}, this), "Menos achismo. Mais gestão. Mais decisão. Mais resultado."]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 475,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 467,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 437,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 434,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				id: "autoridade",
				className: "relative w-full bg-[#111111] text-white py-24 md:py-32 overflow-hidden ",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "absolute inset-0 z-0",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-[#111111]/50 z-10" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 486,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-[url('https://res.cloudinary.com/ifuatk2z/image/upload/v1788975668/edmar1.png')] bg-cover bg-[position:80%_top] md:bg-center bg-fixed opacity-100 z-0" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 487,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 485,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative z-10 mx-auto max-w-7xl px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "reveal text-center max-w-3xl mx-auto mb-20",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "inline-flex items-center gap-3 border border-[#e5372b]/30 bg-[#e5372b]/10 text-[#e5372b] rounded-full px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] mb-6",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-2 h-2 rounded-full bg-[#e5372b]" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 492,
										columnNumber: 15
									}, this), "A Jornada do Empresário"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 491,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
									className: "text-4xl md:text-5xl font-extrabold tracking-tight leading-tight",
									style: { fontFamily: "'Sora', sans-serif" },
									children: [
										"58 anos construindo empresas. ",
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", { className: "hidden md:block" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 498,
											columnNumber: 45
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-gray-400",
											children: "Da teoria à prática brutal."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 499,
											columnNumber: 15
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 495,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-8 text-2xl font-medium text-gray-300 quote-container",
									style: { fontFamily: "'Caveat', cursive" },
									children: "\"A diferença entre conhecer gestão e fazer uma empresa funcionar é que a prática deixa cicatrizes.\"".split(" ").map((word, wIdx, arr) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "inline-block whitespace-nowrap",
										children: [word.split("").map((char, cIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "quote-char opacity-0 inline-block",
											children: char
										}, cIdx, false, {
											fileName: _jsxFileName,
											lineNumber: 505,
											columnNumber: 55
										}, this)), wIdx !== arr.length - 1 && /* @__PURE__ */ (void 0)("span", {
											className: "inline-block",
											children: "\xA0"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 506,
											columnNumber: 47
										}, this)]
									}, wIdx, true, {
										fileName: _jsxFileName,
										lineNumber: 504,
										columnNumber: 154
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 501,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 490,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "relative max-w-5xl mx-auto",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#e5372b]/10 via-[#e5372b]/50 to-[#e5372b]/10 md:-translate-x-1/2" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 514,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-16",
								children: historia.map((h, i) => {
									const isEven = i % 2 === 0;
									return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: `reveal relative flex flex-col md:flex-row items-start ${isEven ? "md:flex-row-reverse" : ""} gap-8 md:gap-16`,
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-[#e5372b] border-4 border-[#111111] shadow-[0_0_15px_rgba(229,55,43,0.5)] -translate-x-1/2 mt-1.5 z-10" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 521,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: `w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16 text-left"}`,
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "bg-[#0A0A0A]/90 backdrop-blur-sm border border-white/5 rounded-2xl p-8 transition-all duration-300 shadow-xl flex flex-col h-full",
													children: [
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "text-[#e5372b] text-xs font-bold tracking-[0.2em] uppercase mb-2 block",
															children: h.period
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 526,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
															className: "text-2xl font-bold text-white mb-4",
															style: { fontFamily: "'Sora', sans-serif" },
															children: h.title
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 527,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
															className: "text-gray-400 leading-relaxed text-[15px]",
															children: h.text
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 530,
															columnNumber: 25
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 525,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 524,
												columnNumber: 21
											}, this),
											h.stats && /* @__PURE__ */ (void 0)("div", {
												className: `hidden md:flex w-full md:w-1/2 items-center ${isEven ? "pl-16 justify-start text-left" : "pr-16 justify-end text-right"}`,
												children: /* @__PURE__ */ (void 0)("div", {
													className: `flex flex-col gap-8`,
													children: h.stats.map((stat, sIdx) => /* @__PURE__ */ (void 0)("div", {
														className: "flex flex-col",
														children: [/* @__PURE__ */ (void 0)("span", {
															className: "text-5xl md:text-6xl lg:text-7xl font-extrabold text-white",
															style: { fontFamily: "'Sora', sans-serif" },
															children: /* @__PURE__ */ (void 0)(AnimatedCounter, {
																value: stat.value,
																prefix: stat.prefix,
																suffix: stat.suffix
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 543,
																columnNumber: 33
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 540,
															columnNumber: 31
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "text-sm uppercase tracking-widest text-[#e5372b] mt-2 font-bold",
															children: stat.label
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 545,
															columnNumber: 31
														}, this)]
													}, sIdx, true, {
														fileName: _jsxFileName,
														lineNumber: 539,
														columnNumber: 56
													}, this))
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 538,
													columnNumber: 25
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 537,
												columnNumber: 33
											}, this),
											h.stats && /* @__PURE__ */ (void 0)("div", {
												className: "flex md:hidden w-full pl-16",
												children: /* @__PURE__ */ (void 0)("div", {
													className: "flex flex-wrap gap-8 mt-2",
													children: h.stats.map((stat, sIdx) => /* @__PURE__ */ (void 0)("div", {
														className: "flex flex-col",
														children: [/* @__PURE__ */ (void 0)("span", {
															className: "text-4xl font-extrabold text-white",
															style: { fontFamily: "'Sora', sans-serif" },
															children: /* @__PURE__ */ (void 0)(AnimatedCounter, {
																value: stat.value,
																prefix: stat.prefix,
																suffix: stat.suffix
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 557,
																columnNumber: 33
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 554,
															columnNumber: 31
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "text-xs uppercase tracking-widest text-[#e5372b] mt-1 font-bold",
															children: stat.label
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 559,
															columnNumber: 31
														}, this)]
													}, sIdx, true, {
														fileName: _jsxFileName,
														lineNumber: 553,
														columnNumber: 56
													}, this))
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 552,
													columnNumber: 25
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 551,
												columnNumber: 33
											}, this)
										]
									}, i, true, {
										fileName: _jsxFileName,
										lineNumber: 519,
										columnNumber: 22
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 516,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 512,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-24 reveal text-center max-w-4xl mx-auto",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-12 flex justify-center",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedButton, {
									href: "#raiz",
									className: "btn-red py-4 px-9 text-sm",
									children: "VER COMO A GESTÃO RADICAL FUNCIONA"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 571,
									columnNumber: 16
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 570,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 568,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 489,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 484,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
				id: "raiz",
				bgClass: "bg-[#0A0A0A]",
				textClass: "text-white",
				kicker: "Sintoma vs. Raiz",
				title: "Vender mais não conserta uma empresa desorganizada.",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "reveal max-w-3xl text-gray-400",
						children: "Às vezes, só faz o problema crescer."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 582,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-16 grid gap-6 md:grid-cols-2 max-w-5xl mx-auto",
						children: sintomas.map((s, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
							className: "reveal group relative overflow-hidden border border-[#e5372b]/30 aspect-[16/10] md:aspect-[16/9] shadow-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
									src: s.img,
									alt: `Sintoma 0${index + 1}`,
									className: "absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out mix-blend-luminosity"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 587,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 588,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col z-10",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "text-2xl md:text-[22px] font-bold text-white mb-3",
										style: { fontFamily: "'Sora', sans-serif" },
										children: s.title
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 591,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[15px] font-medium text-gray-300 leading-relaxed max-w-[90%]",
										children: s.text
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 594,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 590,
									columnNumber: 15
								}, this)
							]
						}, index, true, {
							fileName: _jsxFileName,
							lineNumber: 586,
							columnNumber: 39
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 585,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mx-auto mt-24 max-w-4xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "reveal text-lg leading-relaxed text-gray-400",
								children: "Muitos empresários passam anos tentando resolver os sintomas. Buscam mais vendas quando precisam recuperar margem. Cobram mais da equipe quando falta processo. Cortam custos quando falta gestão. Trabalham mais quando deveriam decidir melhor."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 601,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "reveal mt-6 text-xl font-semibold text-white",
								children: "Antes de buscar a próxima solução, é preciso descobrir qual é o problema certo."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 606,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-12 grid gap-4 sm:grid-cols-2 text-left",
								children: cenarios.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "reveal flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors p-6 text-sm text-gray-300 shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e5372b]/10 text-[#e5372b]",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Activity, { className: "h-5 w-5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 613,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 612,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "leading-snug text-base",
										children: c
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 615,
										columnNumber: 17
									}, this)]
								}, c, true, {
									fileName: _jsxFileName,
									lineNumber: 611,
									columnNumber: 32
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 610,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "reveal mt-16 inline-block rounded-full border border-[#e5372b]/20 bg-[#e5372b]/5 px-8 py-5",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-2xl md:text-3xl font-extrabold tracking-tight text-white",
									children: ["É aqui que começa uma gestão radical. ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-[#e5372b]",
										children: "Não no sintoma. Na raiz."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 621,
										columnNumber: 53
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 620,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 619,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 600,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 581,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
				id: "radical",
				bgClass: "bg-[#111111]",
				textClass: "text-white",
				kicker: "O que é ser Radical",
				title: "Radical não é sobre correr riscos. É sobre ir à raiz.",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-8 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-center",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "reveal w-full max-w-md mx-auto lg:mx-0",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "relative bg-[#0A0A0A] p-2 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", {
								ref: videoRef,
								src: "https://res.cloudinary.com/ifuatk2z/video/upload/v1788990263/edmarvideo.mp4",
								loop: true,
								playsInline: true,
								muted: isMuted,
								className: "w-full h-auto object-cover rounded-[1.4rem] aspect-[9/16]"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 632,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: () => setIsMuted(!isMuted),
								className: "absolute bottom-6 right-6 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-md transition-all shadow-lg border border-white/10 z-10",
								"aria-label": isMuted ? "Ativar som" : "Desativar som",
								children: isMuted ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VolumeX, { className: "w-5 h-5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 634,
									columnNumber: 28
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Volume2, { className: "w-5 h-5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 634,
									columnNumber: 62
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 633,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 631,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 630,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "reveal bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 leading-relaxed text-gray-400 shadow-xl",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "A palavra radical vem de raiz. E é exatamente ali que os problemas de uma empresa precisam ser enfrentados." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 640,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-4",
								children: "Porque o caixa travado, a queda nas vendas, a equipe improdutiva e a falta de lucro podem ser consequência. Enquanto você tenta corrigir o que aparece, a verdadeira causa pode continuar crescendo por baixo da operação."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 644,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 639,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "reveal bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 leading-relaxed text-gray-400 shadow-xl",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Ser um Empresário Radical é ter coragem para olhar além dos sintomas. É colocar os números na mesa. Questionar decisões. Rever processos. Enfrentar o que não funciona. Mudar o que precisa ser mudado. E construir uma empresa onde o crescimento seja consequência de uma gestão melhor." }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 651,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-6 text-lg font-bold text-white",
								children: "Menos achismo. Mais gestão. Mais decisão. Mais resultado."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 657,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 650,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 638,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 629,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 628,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
				id: "diagnostico",
				bgClass: "bg-[#111111]",
				textClass: "text-white",
				kicker: "Diagnóstico",
				title: "Em que momento sua empresa está?",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "reveal max-w-2xl text-gray-400",
						children: "Nem toda empresa precisa da mesma solução. Mas existem sinais que mostram quando alguma coisa precisa mudar. Assinale as opções que refletem a sua realidade hoje:"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 667,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-8 grid gap-3 md:grid-cols-2",
						children: checklist.map((c, i) => {
							const on = marcados.includes(i);
							return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => toggle(i),
								className: `reveal flex items-start gap-3 rounded-2xl p-5 text-left text-sm transition-all duration-300 ${on ? "bg-[#1e5ae8] shadow-md border-transparent translate-x-1 text-white" : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10"}`,
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: `mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-[0.65rem] font-bold transition-colors ${on ? "border-transparent text-white" : "border-gray-200"}`,
									style: on ? { background: "var(--grad-radical)" } : void 0,
									children: on ? "✓" : ""
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 675,
									columnNumber: 17
								}, this), c]
							}, c, true, {
								fileName: _jsxFileName,
								lineNumber: 674,
								columnNumber: 18
							}, this);
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 671,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "reveal bg-[#0A0A0A] border border-white/10 mt-8 flex flex-col items-start gap-5 rounded-3xl p-8 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "max-w-lg text-sm text-gray-400",
							children: marcados.length > 0 ? `Você reconheceu sua empresa em ${marcados.length} ${marcados.length === 1 ? "situação" : "situações"}. Talvez seja hora de olhar para a raiz.` : "Se você reconheceu sua empresa em uma ou mais situações, talvez seja hora de olhar para a raiz."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 685,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedButton, {
							href: "#contato",
							className: `btn-whatsapp w-fit shrink-0 [&>span.invisible]:px-7 [&>span.invisible]:py-3.5 ${marcados.length === 4 ? "animate-shake" : ""}`,
							children: "QUERO ENTENDER MEU CENÁRIO"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 688,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 684,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 666,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
				id: "solucoes",
				bgClass: "bg-white",
				textClass: "text-[#0A0A0A]",
				kicker: "Soluções",
				title: "Qual é o próximo movimento da sua empresa?",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "reveal max-w-2xl text-gray-600",
					children: "Algumas empresas precisam de acompanhamento para reorganizar a gestão. Outras precisam parar, diagnosticar e decidir rapidamente. E algumas precisam transformar a mentalidade e a performance das pessoas. Três caminhos. Um mesmo princípio: chegar à raiz."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 696,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-10 flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0 items-stretch hide-scrollbar",
					children: solucoes.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
						className: `reveal bg-gray-50 border border-gray-200 flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl snap-center shrink-0 w-[85vw] md:w-auto ${s.accent === "red" ? "hover:border-[#e5372b]/30" : "hover:border-[#1E5AE8]/30"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: `w-fit rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest ${s.accent === "red" ? "bg-[#e5372b]/10 text-[#e5372b]" : "bg-[#1e5ae8]/10 text-[#1e5ae8]"}`,
								children: s.tag
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 703,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "mt-4 text-xl font-extrabold text-[#0A0A0A]",
								children: s.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 706,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-3 text-sm font-semibold text-gray-900",
								children: s.lead
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 707,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-3 text-sm leading-relaxed text-gray-600",
								children: s.body
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 708,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-3 text-sm italic text-gray-500",
								children: s.note
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 709,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
								className: "mt-6 space-y-1 border-t border-gray-200 pt-4 text-xs text-gray-600",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
										className: "font-bold text-gray-900",
										children: "Formato:"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 712,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: s.formato }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 713,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 711,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
										className: "font-bold text-gray-900",
										children: "Foco:"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 716,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: s.foco }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 717,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 715,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 710,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-auto pt-6",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedButton, {
									href: "#contato",
									className: `w-full ${s.accent === "red" ? "btn-red" : "btn-blue"} [&>span.invisible]:py-3.5`,
									children: s.cta
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 721,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 720,
								columnNumber: 15
							}, this)
						]
					}, s.title, true, {
						fileName: _jsxFileName,
						lineNumber: 702,
						columnNumber: 30
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 701,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 695,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				id: "processo",
				className: "relative w-full bg-[#111111] overflow-hidden py-24 md:py-32 ",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "absolute inset-0 z-0 pointer-events-none",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-[#111111]/50 md:bg-gradient-to-r md:from-transparent md:via-[#111111]/80 md:to-[#111111] z-10" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 733,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-[url('https://res.cloudinary.com/ifuatk2z/image/upload/v1788975667/edmar3.png')] bg-cover bg-left md:bg-[center_left] bg-fixed opacity-100 z-0" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 734,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 732,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 lg:gap-24",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden lg:block" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 738,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col justify-start",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "reveal flex items-center gap-4 pb-3 mb-8 w-max",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-xs uppercase tracking-[0.25em] font-bold text-[#e5372b]",
									children: "O PROGRAMA"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 741,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 740,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "reveal text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]",
								style: { fontFamily: "'Sora', sans-serif" },
								children: [
									"Como funciona ",
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 746,
										columnNumber: 29
									}, this),
									" o Processo"
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 743,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid sm:grid-cols-2 gap-x-8 gap-y-12 mt-16",
								children: processo.map((p, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "reveal flex flex-col gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10 h-1 bg-[#e5372b] mb-2" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 750,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
											className: "text-xl font-bold text-white",
											children: p.t
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 751,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-sm font-medium leading-relaxed text-gray-300",
											children: p.d
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 752,
											columnNumber: 19
										}, this)
									]
								}, index, true, {
									fileName: _jsxFileName,
									lineNumber: 749,
									columnNumber: 43
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 748,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 739,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 737,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 730,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
				id: "cases",
				bgClass: "bg-[#0A0A0A]",
				textClass: "text-white",
				kicker: "Avaliações e Cases",
				title: "Resultados construídos na raiz.",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "reveal text-xs uppercase tracking-widest text-gray-600",
					children: "Dados em validação"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 761,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-8 grid gap-6 lg:grid-cols-3",
					children: cases.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
						className: "reveal bg-[#111111] border border-white/10 rounded-3xl p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-sm font-extrabold text-[#e5372b]",
								children: c.kpi
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 766,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "mt-2 text-base font-bold",
								children: c.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 767,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
								className: "mt-5 space-y-3 text-sm text-gray-400",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {
											className: "text-white",
											children: "Contexto:"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 769,
											columnNumber: 21
										}, this),
										" ",
										c.ctx
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 769,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {
											className: "text-white",
											children: "Diagnóstico:"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 770,
											columnNumber: 21
										}, this),
										" ",
										c.diag
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 770,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {
											className: "text-white",
											children: "Intervenção:"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 771,
											columnNumber: 21
										}, this),
										" ",
										c.inter
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 771,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {
											className: "text-white",
											children: "Resultado:"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 772,
											columnNumber: 21
										}, this),
										" ",
										c.res
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 772,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 768,
								columnNumber: 15
							}, this)
						]
					}, c.title, true, {
						fileName: _jsxFileName,
						lineNumber: 765,
						columnNumber: 27
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 764,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 760,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
				id: "hub",
				bgClass: "bg-[#0A0A0A]",
				textClass: "text-white",
				kicker: "Hub de Conteúdos",
				title: "Conhecimento para quem está do outro lado da mesa.",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "reveal text-gray-400 max-w-2xl",
						children: "Nós não ensinamos gestão baseados apenas na teoria, nós construímos e operamos empresas reais. Descubra artigos, vídeos e materiais exclusivos."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 780,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "reveal mt-10 -mx-6 sm:mx-0",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CoverFlowCarousel, {
							sectionLabel: "",
							items: [
								{
									tag: "Artigo",
									titleLine1: "Gestão",
									titleLine2: "Os Fundamentos",
									desc: "A base sólida para construir uma empresa que não depende de você.",
									img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
									ctaText: "Ler Artigo"
								},
								{
									tag: "Vídeo",
									titleLine1: "Metas",
									titleLine2: "Como Estruturar",
									desc: "Aprenda a definir e cobrar metas que a equipe realmente entende.",
									img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop",
									ctaText: "Assistir Vídeo"
								},
								{
									tag: "Download",
									titleLine1: "Indicadores",
									titleLine2: "Guia Prático",
									desc: "Baixe a planilha essencial para acompanhar os números que importam.",
									img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
									ctaText: "Baixar Material"
								},
								{
									tag: "Artigo",
									titleLine1: "Liderança",
									titleLine2: "O Papel do Líder",
									desc: "O que significa ser um líder radical em tempos de crescimento.",
									img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
									ctaText: "Ler Artigo"
								},
								{
									tag: "Entrevista",
									titleLine1: "Caixa",
									titleLine2: "Protegendo o Lucro",
									desc: "Como blindar o financeiro e evitar surpresas no fim do mês.",
									img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
									ctaText: "Ver Conteúdo"
								}
							]
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 786,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 785,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "reveal mt-12 flex justify-center w-full",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedButton, {
							href: "#contato",
							className: "btn-blue w-fit [&>span.invisible]:px-10 [&>span.invisible]:py-4",
							children: "Explorar todos os conteúdos"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 825,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 824,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 779,
				columnNumber: 13
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
				id: "faq",
				bgClass: "bg-[#111111]",
				textClass: "text-white",
				kicker: "Perguntas Frequentes",
				title: "O que costumam perguntar antes de começar.",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-8 space-y-3",
					children: faq.map((f, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "reveal bg-[#0A0A0A] border border-white/10 overflow-hidden rounded-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setAberta(aberta === i ? null : i),
							className: "flex w-full items-center justify-between gap-4 p-6 text-left text-sm font-semibold",
							children: [f.q, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: `text-primary transition-transform duration-300 ${aberta === i ? "rotate-45" : ""}`,
								children: "+"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 837,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 835,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid transition-all duration-500 ease-out",
							style: { gridTemplateRows: aberta === i ? "1fr" : "0fr" },
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "px-6 pb-6 text-sm leading-relaxed text-gray-400",
									children: f.a
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 843,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 842,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 839,
							columnNumber: 15
						}, this)]
					}, f.q, true, {
						fileName: _jsxFileName,
						lineNumber: 834,
						columnNumber: 30
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 833,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 832,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				id: "contato",
				className: "relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-28",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "reveal bg-white/5 border border-white/10 relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-16 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-gray-400",
							children: "Chamada Final"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 853,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "mx-auto mt-4 sm:mt-6 max-w-3xl text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight",
							children: [
								"Talvez você já saiba que alguma coisa precisa mudar.",
								" ",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[#e5372b]",
									children: "A questão agora é descobrir o quê."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 858,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 856,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mx-auto mt-4 sm:mt-6 max-w-xl text-sm sm:text-base text-gray-400",
							children: "O primeiro passo não é mudar tudo. É descobrir onde realmente está a raiz."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 860,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatedButton, {
							href: "#contato",
							className: "btn-whatsapp w-full max-w-[280px] sm:max-w-none sm:w-fit mx-auto mt-8 sm:mt-9 [&>span.invisible]:px-4 sm:[&>span.invisible]:px-9 [&>span.invisible]:py-4 text-[10px] sm:text-xs md:text-sm",
							children: "QUERO FALAR SOBRE MINHA EMPRESA"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 863,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-5 text-[10px] sm:text-xs text-gray-400",
							children: "Converse com nossa equipe para descobrir o caminho ideal."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 866,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 852,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 851,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
				className: "border-t border-white/10 py-12 text-center text-xs text-gray-500",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "font-bold text-white uppercase tracking-widest",
						children: "Empresário Radical"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 873,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-2 text-gray-400",
						children: "Mentorias • Imersões • Palestras Corporativas"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 874,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-10 opacity-70",
						children: ["Desenvolvido por ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: "https://www.fabricapublicidade.com.br/",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-gray-400 hover:text-white transition-colors underline decoration-white/20 underline-offset-4",
							children: "Fábrica Publicidade Digital"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 876,
							columnNumber: 28
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 875,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 872,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				onClick: scrollToTop,
				className: `fixed bottom-8 right-8 z-50 p-4 rounded-full bg-[#e5372b] text-white shadow-[0_4px_14px_0_rgba(229,55,43,0.39)] transition-all duration-300 hover:scale-110 hover:bg-[#b3221b] ${showTopBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`,
				"aria-label": "Voltar ao topo",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUp, {
					className: "w-5 h-5 md:w-6 md:h-6",
					strokeWidth: 2.5
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 882,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 881,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 388,
		columnNumber: 10
	}, this);
}
function Section({ id, kicker, title, children, bgClass = "", textClass = "text-white" }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id,
		className: `relative scroll-mt-28 py-24 ${bgClass} ${textClass}`,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "reveal mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary",
					children: kicker
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 926,
					columnNumber: 7
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "reveal mb-6 max-w-3xl text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl",
					children: title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 929,
					columnNumber: 7
				}, this),
				children
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 925,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 924,
		columnNumber: 10
	}, this);
}
//#endregion
export { Landing as component };
