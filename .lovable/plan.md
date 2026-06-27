## Nova seção: FAQ (Perguntas Frequentes)

Adicionar uma seção de FAQ entre "Como funciona" e o rodapé, com as 10 perguntas e respostas que você enviou.

### Comportamento

Accordion clássico tipo "single open": só uma pergunta aberta por vez. Ao clicar em outra pergunta, a anterior fecha automaticamente — exatamente como você descreveu. Por padrão, todas começam fechadas para a seção ficar limpa e curta.

### Visual (mantendo a identidade do site)

- Mesma estrutura das outras seções: container centralizado, título grande, kicker em laranja neon ("FAQ") e subtítulo curto.
- Cada item: card com borda sutil, cantos arredondados, fundo do card (mesmo padrão dos cards de produtos e passos).
- Pergunta em peso bold + ícone de "+" à direita que rotaciona para "×" quando aberto.
- Hover na pergunta destaca a borda em roxo (igual aos cards atuais).
- Resposta com animação suave de altura (expand/collapse) e fade-in do texto.
- Funciona perfeitamente em mobile e nos dois temas (claro e escuro).
- Link de "FAQ" adicionado no menu de navegação do header (desktop).

### Sugestões opcionais para deixar ainda mais funcional

1. **CTA no fim do FAQ**: um bloco curto com "Não encontrou sua dúvida? Fale com a gente" + botão WhatsApp — converte quem leu o FAQ mas ainda tem perguntas.
2. **FAQ Schema (JSON-LD)**: além de exibir as perguntas na página, adicionar marcação `FAQPage` no `<head>`. Isso pode fazer suas perguntas aparecerem direto no Google como resultado rico (rich snippet), aumentando muito a visibilidade orgânica — combina com o trabalho de SEO que já fizemos.
3. **Permitir abrir links**: cada pergunta recebe um `id` (ex.: `#faq-prazo`), permitindo compartilhar link direto para uma resposta específica caso você queira mandar para um cliente.

Posso aplicar as 3 sugestões junto, ou só o accordion básico — me diga.

### Detalhes técnicos

- Componente novo `FAQ` dentro de `src/routes/index.tsx` (mesmo padrão dos outros componentes da página).
- Estado controlado via `useState<number | null>(openIndex)` — garante o comportamento "single open".
- Animação via `max-height` + `opacity` com transição CSS (sem dependência extra).
- JSON-LD `FAQPage` adicionado ao array `scripts` do `Route.head()` (se aprovado).
- Tokens de cor existentes (`--accent`, `--primary`, `--border`, `--card`) — nenhum hardcode de cor.
