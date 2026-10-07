import type { GodId } from "./results";

export interface TieBreakerOption {
  god: GodId;
  text: string;
}

export const tieBreakerQuestion =
  "Depois de tudo o que aconteceu, você precisa tomar uma decisão importante sem tempo para analisar muito. Qual destas ideias pesaria mais na sua escolha?";

export const tieBreakerOptions: Record<GodId, TieBreakerOption> = {
  zeus: {
    god: "zeus",
    text: "A responsabilidade que assumi. Se outras pessoas dependem da minha decisão, isso precisa pesar mais do que aquilo que eu preferiria fazer.",
  },
  poseidon: {
    god: "poseidon",
    text: "Aquilo que meu instinto está dizendo. Posso não conseguir explicar perfeitamente, mas algumas situações precisam ser sentidas antes de serem racionalizadas.",
  },
  demeter: {
    god: "demeter",
    text: "O que precisa ser preservado para continuar crescendo. Eu pensaria no impacto da escolha sobre pessoas, projetos e tudo aquilo que depende de cuidado constante.",
  },
  ares: {
    god: "ares",
    text: "Aquilo que eu não estou disposto a aceitar sem reagir. Se algo importante está sendo ameaçado, prefiro enfrentar a situação a me arrepender de ter recuado.",
  },
  athena: {
    god: "athena",
    text: "A escolha que ainda faz mais sentido quando olho alguns passos adiante. Mesmo com pouco tempo, tentaria prever consequências antes de agir.",
  },
  apollo: {
    god: "apollo",
    text: "Aquilo que me permite fazer diferença com o que sei fazer melhor. Quero que minha escolha produza algo que possa alcançar, orientar ou ajudar outras pessoas.",
  },
  hephaestus: {
    god: "hephaestus",
    text: "O que realmente pode funcionar na prática. Entre uma ideia bonita e uma solução que consigo construir, testar ou executar, fico com a segunda.",
  },
  aphrodite: {
    god: "aphrodite",
    text: "O que essa decisão fará com os vínculos envolvidos. Algumas escolhas podem parecer corretas no papel e ainda assim destruir algo humano demais para ser ignorado.",
  },
  hermes: {
    god: "hermes",
    text: "A possibilidade que ainda deixa caminhos abertos. Prefiro uma escolha que me permita me adaptar, negociar ou encontrar outra saída depois.",
  },
  dionysus: {
    god: "dionysus",
    text: "A escolha que ainda me permite ser livre dentro da situação. Tenho dificuldade de aceitar um caminho que resolva tudo às custas de me prender completamente.",
  },
  hades: {
    god: "hades",
    text: "Aquilo que considero íntimo demais para abandonar. Existem pessoas, promessas e partes de mim que não colocaria em negociação só porque seria mais fácil.",
  },
  iris: {
    god: "iris",
    text: "A possibilidade de manter uma ponte aberta. Antes de fechar uma porta definitivamente, quero saber se ainda existe uma forma de as partes se compreenderem.",
  },
  hypnos: {
    god: "hypnos",
    text: "A escolha que não nasce apenas da pressão do momento. Se todos estão exigindo uma resposta imediata, talvez justamente por isso eu precise de um instante para escutar o que minha cabeça ainda não organizou.",
  },
  nemesis: {
    god: "nemesis",
    text: "Aquilo que torna a consequência proporcional ao que aconteceu. Não consigo ignorar quem pagará o preço da decisão — nem quem deveria responder por ela.",
  },
  nike: {
    god: "nike",
    text: "A opção que realmente me aproxima do objetivo. Quando preciso escolher, quero saber qual caminho oferece a melhor possibilidade de chegar até o fim.",
  },
  hebe: {
    god: "hebe",
    text: "O que permite que as pessoas atravessem aquilo juntas. Minha escolha consideraria quem precisa de apoio e como evitar que alguém seja simplesmente deixado para trás.",
  },
  tyche: {
    god: "tyche",
    text: "A oportunidade que talvez não apareça novamente. Se não existe certeza de qualquer maneira, posso preferir o caminho que abre uma possibilidade inesperada.",
  },
  hecate: {
    god: "hecate",
    text: "Aquilo que ainda não estamos enxergando. Antes de aceitar as opções aparentes, eu desconfiaria que existe uma camada do problema que ninguém compreendeu direito.",
  },
};

/**
 * Regras de implementação:
 * - só usar se o empate persistir após todos os critérios normais;
 * - mostrar apenas as alternativas dos deuses ainda empatados;
 * - não mostrar o nome do deus ou o número do chalé;
 * - embaralhar a ordem das alternativas a cada exibição;
 * - a escolha define diretamente o vencedor;
 * - não somar novos pontos ao placar principal.
 */
export function getTieBreakerOptions(candidates: readonly GodId[]): TieBreakerOption[] {
  return candidates.map((god) => tieBreakerOptions[god]);
}
