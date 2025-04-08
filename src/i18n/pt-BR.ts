export const ptBR = {
  defaultInstructions: `O usuário pode a qualquer momento enviar um prompt contendo uma frase-chave para que você execute uma instrução predefinida, listada neste arquivo;

Para identificar quando o usuário está usando uma chave e diferenciá-la de uma conversa normal, o usuário deve 
enviar o seguinte prompt: instructa [frase-chave]

Por exemplo: instructa ajuda

Cada instrução pode ter múltiplas ações, que serão executadas na ordem em que estão listadas.

O arranjo das instruções com suas frases-chave e ações será feito utilizando a estrutura JSON abaixo:
\`\`\`json
{
 "chave": [
   "ação 1",
   "ação 2"
 ]
}
\`\`\`

# Instruções predefinidas
\`\`\`json
{ 
  "context_create-backup": [
    "Criar uma pasta dentro de 'instructa/src/backup/' chamada 'context_backup_[id formado pela data atual em formato epoch]'",
    "Copiar todos os arquivos e pastas que estão dentro da pasta 'context' para a pasta criada na ação anterior, com o objetivo de criar um backup do contexto atual",
    "Criar um arquivo de log na pasta 'logs' com o nome da instrução, data e hora de criação no nome. O log deve conter informações sobre o backup criado"
  ],
  "context_load-backup": [
    "Listar os backups disponíveis na pasta 'instructa/src/backup'",
    "Permitir que o usuário escolha qual backup deseja restaurar",
    "Excluir todos os arquivos e pastas na pasta 'instructa/context', exceto os arquivos criados durante a instalação deste pacote ('/context.md' e '/instructions/default-instructions.md'), mas excluir quaisquer alterações feitas a estes arquivos",
    "Copiar o conteúdo do backup selecionado para a pasta 'instructa/context'",
    "Criar um log com o nome da instrução, data e hora de execução, e o nome do backup restaurado"
  ],
  "context_update": [
    "Executar a instrução 'context_create_backup'",
    "Ler o conteúdo de \`context-config.md\` e, com base nas instruções nele contidas, analisar cada arquivo e seus dados localizados em \`src/data/\` para gerar arquivos \`.md\` dentro da pasta \`context/\`. Cada arquivo \`.md\` gerado deve ser modularizado por assunto ou funcionalidade, ter uma estrutura clara com títulos e subtítulos, conter apenas informações úteis, detalhadas e bem escritas para consumo por LLM. Ao incluir dados brutos ou interpretações de gráficos e afins, usar ASCII para criar as formas, tabelas e gráficos necessários para explicações",
    "Criar um arquivo de log na pasta 'logs' com o nome da instrução, data e hora de criação no nome. O log deve conter os nomes dos arquivos lidos para compor o contexto, os nomes dos arquivos gerados, data e hora de execução, os prompts utilizados no processo, e as diferenças entre os arquivos de contexto criados e os do último backup se existir (guardar o número da linha alterada e exemplo de antes e depois da alteração)"
  ],
  "context_reset": [
    "Informar o usuário que esta ação irá excluir todo o contexto atual e criar um novo",
    "Excluir todos os arquivos e pastas na pasta 'instructa/context', exceto os arquivos criados durante a instalação deste pacote ('/context.md' e '/instructions/default-instructions.md'), mas excluir quaisquer alterações feitas a estes arquivos",
    "Criar um arquivo de log na pasta 'logs' com o nome da instrução, data e hora de criação no nome. O log deve conter os nomes dos arquivos excluídos durante a execução da instrução"
  ],
  "context_summarize": [
    "Ler todos os arquivos com extensão \`.md\` localizados diretamente na pasta \`instructa/context\`, ignorando subpastas",
    "Para cada arquivo, gerar um resumo textual claro, objetivo e fiel do conteúdo presente. O resumo deve capturar os tópicos principais, conceitos importantes e estruturas explicadas, usando linguagem apropriada para consumo por LLMs",
    "Unificar todos os resumos em um único texto contínuo, bem estruturado, separado por seções com títulos que correspondam ao nome do arquivo original (sem a extensão \`.md\`)",
    "Salvar o resumo unificado em um novo arquivo chamado \`context_summary.md\` dentro da pasta \`instructa/context/\`",
    "Criar um arquivo de log na pasta \`logs\` com o nome da instrução, data e hora de criação no nome. O log deve conter os nomes dos arquivos resumidos, número total de linhas lidas, e o nome do arquivo de saída gerado"
  ],
  "instruction_create": [
    "Se não existir, criar um arquivo em 'instructa/context/instructions/' chamado 'custom_instructions.md' (usar 'default_instructions.md' como base)",
    "Pedir ao usuário para fornecer as instruções que deseja adicionar ao arquivo 'custom_instructions.md' em formato de lista JSON e mostrar um exemplo de como a lista deve ser formatada, com base no conteúdo do arquivo 'default_instructions.md' (usar 'ajuda' como exemplo)",
    "Validar se as instruções recebidas não têm o mesmo identificador que as instruções contidas em 'default_instructions.md' e em 'custom_instructions.md'",
    "Se não tiverem, adicioná-las à lista de instruções. Se uma instrução com o mesmo nome já existir, informar o usuário que a instrução já existe e pedir-lhe para escolher outro nome",
    "Criar um arquivo de log na pasta 'logs' com o nome da instrução, data e hora de criação no nome. O log deve conter as instruções recebidas e as que foram adicionadas"
  ],
  "instruction_delete": [
    "Verificar se o arquivo 'instructa/context/instructions/custom_instructions.md' existe. Se não existir, informar o usuário que não há instruções personalizadas para serem excluídas",
    "Pedir ao usuário o nome da instrução personalizada que deseja excluir",
    "Verificar se a instrução informada está presente no arquivo 'custom_instructions.md'. Se não estiver, informar o usuário que a instrução não foi encontrada",
    "Remover a instrução do arquivo, preservando a estrutura markdown e garantindo que nenhuma outra instrução seja afetada",
    "Criar um arquivo de log na pasta 'logs' com o nome da instrução, data e hora de criação no nome. O log deve conter o nome da instrução excluída, o conteúdo removido, data e hora de execução"
  ],
  "instruction_edit": [
    "Verificar se o arquivo 'instructa/context/instructions/custom_instructions.md' existe. Se não existir, informar o usuário que não há instruções personalizadas para serem editadas",
    "Pedir ao usuário o nome da instrução personalizada que deseja editar",
    "Verificar se a instrução existe no arquivo 'custom_instructions.md'. Se não existir, informar o usuário que a instrução não foi encontrada",
    "Mostrar o conteúdo atual da instrução e pedir ao usuário a nova versão no mesmo formato utilizado (texto markdown organizado e objetivo)",
    "Substituir o conteúdo da instrução pelo novo conteúdo fornecido, mantendo o resto do arquivo intacto",
    "Criar um arquivo de log na pasta 'logs' com o nome da instrução, data e hora de criação no nome. O log deve conter o nome da instrução editada, o conteúdo anterior, o novo conteúdo, data e hora de execução"
  ],
  "ajuda": [
    "Explicar para que serve a ferramenta Instructa e como utilizá-la",
    "Listar as instruções disponíveis e perguntar se o usuário quer saber sobre alguma delas",
    "Se quiser saber sobre uma ou mais, explicar sobre as instruções"
  ]
}
\`\`\``,
  
  readmeContent: `# Framework Instructa

Framework baseado em POD (Prompt-Oriented Development) para automação de instruções.

## Estrutura de Diretórios

- \`context/\`: Contém arquivos .md processados prontos para uso como contexto
- \`src/\`: Contém dados brutos e arquivos de configuração
  - \`data/\`: Arquivos brutos (PDFs, textos, planilhas, etc)
  - \`config/\`: Arquivos .md com instruções personalizadas
  - \`backup/\`: Backups de contexto e outros arquivos
- \`logs/\`: Arquivos de log
- \`context/instructions/\`: Instruções acionadas por palavras-chave

## Utilização

Para executar uma instrução, use o formato:
\`instructa [frase-chave]\`

Exemplo: \`instructa ajuda\`
`,
  
  contextConfigContent: '# Instruções personalizadas para criação de arquivos de contexto',
  
  installationSuccess: 'O Instructa foi instalado com sucesso! Para que o Instructa funcione, você deve incluir a pasta gerada \'instructa/context\' no contexto da LLM usada pela sua IDE com IA integrada.',
  installationError: 'Erro durante a instalação:',
  startingInstallation: 'Iniciando a instalação do Instructa...',
  directoryCreated: 'Diretório criado:',
  installationFileMoved: 'Arquivo de instalação movido com sucesso',
  errorMovingInstallationFile: 'Erro ao mover arquivo de instalação:',
  directoryStructureCreated: 'Estrutura de diretórios criada com sucesso!'
}; 