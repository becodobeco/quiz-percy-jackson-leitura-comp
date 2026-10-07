import type { OptionId, QuestionId } from "./questions";
import type { GodId } from "./results";

export interface ScoreAllocation {
  god: GodId;
  points: 3 | 2 | 1;
}

type QuestionScoreMap = Record<OptionId, readonly [
  ScoreAllocation,
  ScoreAllocation,
  ScoreAllocation,
]>;

export type ScoringMatrix = Record<QuestionId, QuestionScoreMap>;

/**
 * Matriz oficial V2.
 *
 * Regra:
 * - 1º nome = +3
 * - 2º nome = +2
 * - 3º nome = +1
 *
 * Não alterar as associações sem uma revisão editorial da matriz.
 */
export const scoringMatrix: ScoringMatrix = {
  q01: {
    A: [
      { god: "hecate", points: 3 },
      { god: "hephaestus", points: 2 },
      { god: "athena", points: 1 },
    ],
    B: [
      { god: "zeus", points: 3 },
      { god: "nike", points: 2 },
      { god: "ares", points: 1 },
    ],
    C: [
      { god: "tyche", points: 3 },
      { god: "poseidon", points: 2 },
      { god: "dionysus", points: 1 },
    ],
    D: [
      { god: "demeter", points: 3 },
      { god: "hebe", points: 2 },
      { god: "aphrodite", points: 1 },
    ],
    E: [
      { god: "hermes", points: 3 },
      { god: "iris", points: 2 },
      { god: "apollo", points: 1 },
    ],
  },

  q02: {
    A: [
      { god: "zeus", points: 3 },
      { god: "nike", points: 2 },
      { god: "athena", points: 1 },
    ],
    B: [
      { god: "hebe", points: 3 },
      { god: "iris", points: 2 },
      { god: "aphrodite", points: 1 },
    ],
    C: [
      { god: "demeter", points: 3 },
      { god: "hephaestus", points: 2 },
      { god: "hermes", points: 1 },
    ],
    D: [
      { god: "dionysus", points: 3 },
      { god: "tyche", points: 2 },
      { god: "poseidon", points: 1 },
    ],
    E: [
      { god: "nemesis", points: 3 },
      { god: "ares", points: 2 },
      { god: "hecate", points: 1 },
    ],
  },

  q03: {
    A: [
      { god: "athena", points: 3 },
      { god: "zeus", points: 2 },
      { god: "demeter", points: 1 },
    ],
    B: [
      { god: "tyche", points: 3 },
      { god: "hephaestus", points: 2 },
      { god: "hermes", points: 1 },
    ],
    C: [
      { god: "ares", points: 3 },
      { god: "hades", points: 2 },
      { god: "nemesis", points: 1 },
    ],
    D: [
      { god: "apollo", points: 3 },
      { god: "poseidon", points: 2 },
      { god: "dionysus", points: 1 },
    ],
    E: [
      { god: "iris", points: 3 },
      { god: "hypnos", points: 2 },
      { god: "hecate", points: 1 },
    ],
  },

  q04: {
    A: [
      { god: "hecate", points: 3 },
      { god: "athena", points: 2 },
      { god: "hypnos", points: 1 },
    ],
    B: [
      { god: "poseidon", points: 3 },
      { god: "nike", points: 2 },
      { god: "ares", points: 1 },
    ],
    C: [
      { god: "iris", points: 3 },
      { god: "aphrodite", points: 2 },
      { god: "hebe", points: 1 },
    ],
    D: [
      { god: "hades", points: 3 },
      { god: "nemesis", points: 2 },
      { god: "zeus", points: 1 },
    ],
    E: [
      { god: "dionysus", points: 3 },
      { god: "apollo", points: 2 },
      { god: "tyche", points: 1 },
    ],
  },

  q05: {
    A: [
      { god: "apollo", points: 3 },
      { god: "nike", points: 2 },
      { god: "hephaestus", points: 1 },
    ],
    B: [
      { god: "athena", points: 3 },
      { god: "hecate", points: 2 },
      { god: "hypnos", points: 1 },
    ],
    C: [
      { god: "nemesis", points: 3 },
      { god: "ares", points: 2 },
      { god: "hades", points: 1 },
    ],
    D: [
      { god: "demeter", points: 3 },
      { god: "aphrodite", points: 2 },
      { god: "hebe", points: 1 },
    ],
    E: [
      { god: "hermes", points: 3 },
      { god: "dionysus", points: 2 },
      { god: "tyche", points: 1 },
    ],
  },

  q06: {
    A: [
      { god: "hephaestus", points: 3 },
      { god: "demeter", points: 2 },
      { god: "hebe", points: 1 },
    ],
    B: [
      { god: "hypnos", points: 3 },
      { god: "hades", points: 2 },
      { god: "aphrodite", points: 1 },
    ],
    C: [
      { god: "dionysus", points: 3 },
      { god: "poseidon", points: 2 },
      { god: "hermes", points: 1 },
    ],
    D: [
      { god: "zeus", points: 3 },
      { god: "apollo", points: 2 },
      { god: "nike", points: 1 },
    ],
    E: [
      { god: "hecate", points: 3 },
      { god: "iris", points: 2 },
      { god: "nemesis", points: 1 },
    ],
  },

  q07: {
    A: [
      { god: "nike", points: 3 },
      { god: "athena", points: 2 },
      { god: "nemesis", points: 1 },
    ],
    B: [
      { god: "poseidon", points: 3 },
      { god: "hermes", points: 2 },
      { god: "tyche", points: 1 },
    ],
    C: [
      { god: "ares", points: 3 },
      { god: "hades", points: 2 },
      { god: "demeter", points: 1 },
    ],
    D: [
      { god: "hecate", points: 3 },
      { god: "apollo", points: 2 },
      { god: "hypnos", points: 1 },
    ],
    E: [
      { god: "hebe", points: 3 },
      { god: "aphrodite", points: 2 },
      { god: "iris", points: 1 },
    ],
  },

  q08: {
    A: [
      { god: "athena", points: 3 },
      { god: "hecate", points: 2 },
      { god: "apollo", points: 1 },
    ],
    B: [
      { god: "hermes", points: 3 },
      { god: "tyche", points: 2 },
      { god: "hephaestus", points: 1 },
    ],
    C: [
      { god: "iris", points: 3 },
      { god: "hebe", points: 2 },
      { god: "nemesis", points: 1 },
    ],
    D: [
      { god: "ares", points: 3 },
      { god: "zeus", points: 2 },
      { god: "nike", points: 1 },
    ],
    E: [
      { god: "hypnos", points: 3 },
      { god: "poseidon", points: 2 },
      { god: "hades", points: 1 },
    ],
  },

  q09: {
    A: [
      { god: "hades", points: 3 },
      { god: "nike", points: 2 },
      { god: "hephaestus", points: 1 },
    ],
    B: [
      { god: "nemesis", points: 3 },
      { god: "zeus", points: 2 },
      { god: "ares", points: 1 },
    ],
    C: [
      { god: "aphrodite", points: 3 },
      { god: "hermes", points: 2 },
      { god: "iris", points: 1 },
    ],
    D: [
      { god: "poseidon", points: 3 },
      { god: "hypnos", points: 2 },
      { god: "demeter", points: 1 },
    ],
    E: [
      { god: "apollo", points: 3 },
      { god: "tyche", points: 2 },
      { god: "dionysus", points: 1 },
    ],
  },

  q10: {
    A: [
      { god: "hephaestus", points: 3 },
      { god: "hecate", points: 2 },
      { god: "demeter", points: 1 },
    ],
    B: [
      { god: "hebe", points: 3 },
      { god: "aphrodite", points: 2 },
      { god: "iris", points: 1 },
    ],
    C: [
      { god: "nike", points: 3 },
      { god: "athena", points: 2 },
      { god: "apollo", points: 1 },
    ],
    D: [
      { god: "dionysus", points: 3 },
      { god: "hermes", points: 2 },
      { god: "tyche", points: 1 },
    ],
    E: [
      { god: "hades", points: 3 },
      { god: "nemesis", points: 2 },
      { god: "hypnos", points: 1 },
    ],
  },

  q11: {
    A: [
      { god: "hephaestus", points: 3 },
      { god: "athena", points: 2 },
      { god: "zeus", points: 1 },
    ],
    B: [
      { god: "hypnos", points: 3 },
      { god: "demeter", points: 2 },
      { god: "hades", points: 1 },
    ],
    C: [
      { god: "aphrodite", points: 3 },
      { god: "hebe", points: 2 },
      { god: "iris", points: 1 },
    ],
    D: [
      { god: "ares", points: 3 },
      { god: "nemesis", points: 2 },
      { god: "poseidon", points: 1 },
    ],
    E: [
      { god: "hermes", points: 3 },
      { god: "dionysus", points: 2 },
      { god: "apollo", points: 1 },
    ],
  },

  q12: {
    A: [
      { god: "zeus", points: 3 },
      { god: "athena", points: 2 },
      { god: "nike", points: 1 },
    ],
    B: [
      { god: "tyche", points: 3 },
      { god: "ares", points: 2 },
      { god: "poseidon", points: 1 },
    ],
    C: [
      { god: "nemesis", points: 3 },
      { god: "hades", points: 2 },
      { god: "hypnos", points: 1 },
    ],
    D: [
      { god: "aphrodite", points: 3 },
      { god: "demeter", points: 2 },
      { god: "hebe", points: 1 },
    ],
    E: [
      { god: "hephaestus", points: 3 },
      { god: "dionysus", points: 2 },
      { god: "hecate", points: 1 },
    ],
  },

  q13: {
    A: [
      { god: "demeter", points: 3 },
      { god: "hebe", points: 2 },
      { god: "zeus", points: 1 },
    ],
    B: [
      { god: "nike", points: 3 },
      { god: "apollo", points: 2 },
      { god: "ares", points: 1 },
    ],
    C: [
      { god: "tyche", points: 3 },
      { god: "poseidon", points: 2 },
      { god: "hecate", points: 1 },
    ],
    D: [
      { god: "iris", points: 3 },
      { god: "aphrodite", points: 2 },
      { god: "hermes", points: 1 },
    ],
    E: [
      { god: "hypnos", points: 3 },
      { god: "hades", points: 2 },
      { god: "athena", points: 1 },
    ],
  },
};

export const structuralQuestions: readonly QuestionId[] = [
  "q04",
  "q07",
  "q10",
  "q12",
];
