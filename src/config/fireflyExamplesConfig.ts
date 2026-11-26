export const fireflyExampleIndexPath = "/firefly-examples/";

export const fireflyExampleSlugs = [
	"firefly",
	"guide",
	"firefly-layout-system",
	"code-examples",
	"encrypted-demo",
	"katex-math-example",
	"markdown-tutorial",
	"markdown-extended",
	"markdown-mermaid",
	"markdown-plantuml",
	"mdx-example",
	"video",
	"draft",
] as const;

const exampleSlugs: ReadonlySet<string> = new Set(fireflyExampleSlugs);

export function isFireflyExample(slug: string): boolean {
	return exampleSlugs.has(slug.replace(/\.(mdx?|markdown)$/i, ""));
}
