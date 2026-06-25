# Plano de alterações

## 0. Sobre backup / recuperação (importante)
Você não precisa criar um backup manual. O Lovable salva automaticamente o histórico de cada alteração. A qualquer momento você pode:

- Clicar no botão **revert** abaixo de qualquer mensagem do chat para voltar exatamente àquele estado.
- Abrir a aba **History** no topo do chat e escolher uma versão anterior para restaurar.

Ou seja, mesmo depois de muitas mudanças, dá para voltar ao estado atual do site com 1 clique. Vou marcar este ponto como referência mencionando "estado base antes das edições" na resposta — assim fica fácil de localizar no History depois.

## 1. Substituir a logo
- Subir a nova imagem `EixoZ - Logo edit.png` como asset (`src/assets/eixoz-logo.png.asset.json`), substituindo a anterior.
- Como todos os usos da logo (header, hero, footer) já apontam para esse mesmo arquivo de asset, a troca se propaga automaticamente para todos os lugares.
- Ajustar o tamanho/recorte no header e no footer se necessário, já que a nova arte é quadrada com mais respiro.

## 2. Remover métricas falsas do Hero
Tirar o bloco "+500 projetos / 48h protótipos / 0,1mm precisão" e substituir por algo honesto para quem está começando. Sugestão (selo discreto no lugar):

- "Estúdio novo, atendimento direto com o maker"
- "Orçamento sem compromisso"
- "Envio para todo o Brasil"

Renderizados como 3 pills/badges pequenos com ícone — sem números inventados. Se preferir, posso simplesmente remover e deixar o hero mais limpo, sem nada no lugar.

## 3. Portfólio: remover "Chaveiros Inteligentes" e adicionar "Personalizados"
Novo card no lugar:

- **Título:** Peças Personalizadas
- **Descrição:** "Do seu desenho ao objeto real: criamos peças sob medida — presentes únicos, suportes, acessórios e projetos especiais. Mande sua ideia e a gente modela e imprime para você."
- Vou gerar uma nova imagem temática para esse card (peças personalizadas variadas) e remover a imagem antiga de chaveiros.

Os outros dois cards (Colecionáveis & Chibis, Brindes Corporativos) permanecem.

## 4. Como Funciona — passo 2
Trocar o texto atual ("FDM e resina de última geração...") por algo focado só em filamento:

- **Imprimimos com qualidade:** "Trabalhamos com impressão FDM em filamentos PLA e PETG, com revisão de qualidade peça por peça e acabamento caprichado."

## Detalhes técnicos
- Arquivos alterados: `src/assets/eixoz-logo.png.asset.json` (substituído via `lovable-assets`), `src/routes/index.tsx` (hero stats, array `PRODUCTS`, array `STEPS`), nova imagem `src/assets/cat-personalizados.jpg` gerada, remoção de `src/assets/cat-chaveiros.jpg`.
- Nenhuma mudança de design system, rotas ou backend.

Quer que eu substitua as métricas do hero pelos 3 selos sugeridos, ou prefere remover o bloco completamente?
