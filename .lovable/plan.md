## Plano

1. **Substituir os assets externos por arquivos reais no repositório**
   - Baixar/recuperar a logo e o favicon que hoje estão como `.asset.json`.
   - Salvar os binários reais em `src/assets` ou `public` com nomes estáveis, por exemplo `src/assets/eixoz-logo.png` e `public/favicon.png`.
   - Manter as imagens de categorias já existentes em `src/assets`, pois elas já estão versionadas.

2. **Atualizar as referências no código**
   - Trocar imports de `eixoz-logo.png.asset.json` e `favicon.png.asset.json` por imports/URLs de arquivos reais.
   - Ajustar favicon, apple-touch-icon, Open Graph/Twitter image e JSON-LD para não dependerem de URLs `__l5e`, que podem quebrar fora da Lovable.
   - Remover dependência dos arquivos `.asset.json` para essas imagens personalizadas.

3. **Prevenir o problema nas próximas imagens personalizadas**
   - Adicionar uma regra simples ao projeto: imagens personalizadas/usadas no site devem ficar como arquivo real em `src/assets` ou `public`, não apenas como ponteiro externo.
   - Se necessário, ajustar `.gitignore` apenas para não bloquear imagens dessas pastas.

4. **Verificar antes de finalizar**
   - Confirmar que não sobra nenhuma referência a `eixoz-logo.png.asset.json`, `favicon.png.asset.json` ou `/__l5e/assets-v1` nas imagens críticas.
   - Verificar que os arquivos reais aparecem em `git ls-files` ou estão prontos para sincronizar com GitHub.

## Observação importante

Eu não posso executar `commit` ou `push` manualmente daqui, porque o estado Git é gerenciado pela integração da Lovable. Mas, depois que eu salvar os arquivos reais no projeto, a sincronização GitHub da Lovable deve enviar essas alterações automaticamente para o repositório conectado. Se o GitHub não estiver conectado, será preciso conectar em **Plus (+) → GitHub → Connect project**.