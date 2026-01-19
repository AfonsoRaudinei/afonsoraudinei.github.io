export interface Praga {
  id: number;
  name: string;
  shortName: string;
  icon: string;
  color: string;
  data: number[];
  peak: string;
  peakIndex: number;
}

export interface PragaInfo {
  title: string;
  phases: {
    title: string;
    description: string;
  }[];
}

export const stages = ['V2', 'V3', 'V4', 'V5', 'R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8'];

export const pragas: Praga[] = [
  {
    id: 0,
    name: 'Lagarta-da-soja (Anticarsia gemmatalis)',
    shortName: 'Lagarta-da-soja',
    icon: '🐛',
    color: '#e74c3c',
    data: [0, 2.35, 5.88, 11.76, 29.41, 52.94, 82.35, 100, 88.24, 58.82, 35.29, 17.65],
    peak: 'R4',
    peakIndex: 7
  },
  {
    id: 1,
    name: 'Percevejo-marrom (Euschistus heros)',
    shortName: 'Percevejo-marrom',
    icon: '🪲',
    color: '#8B4513',
    data: [0, 0, 0, 2.22, 5.56, 16.67, 38.89, 66.67, 94.44, 100, 77.78, 44.44],
    peak: 'R6',
    peakIndex: 9
  },
  {
    id: 2,
    name: 'Percevejo-verde (Nezara viridula)',
    shortName: 'Percevejo-verde',
    icon: '🐞',
    color: '#27ae60',
    data: [0, 0, 0, 1.33, 6.67, 16, 40, 66.67, 93.33, 100, 73.33, 40],
    peak: 'R6',
    peakIndex: 9
  },
  {
    id: 3,
    name: 'Mosca-branca (Bemisia tabaci)',
    shortName: 'Mosca-branca',
    icon: '🪰',
    color: '#95a5a6',
    data: [12.5, 25, 50, 81.25, 100, 93.75, 75, 56.25, 37.5, 25, 12.5, 6.25],
    peak: 'R1',
    peakIndex: 4
  },
  {
    id: 4,
    name: 'Ácaro-rajado (Tetranychus urticae)',
    shortName: 'Ácaro-rajado',
    icon: '🕷️',
    color: '#c0392b',
    data: [7.14, 11.43, 21.43, 35.71, 50, 71.43, 85.71, 100, 92.86, 71.43, 50, 28.57],
    peak: 'R4',
    peakIndex: 7
  },
  {
    id: 5,
    name: 'Lagarta-falsa-medideira (Chrysodeixis includens)',
    shortName: 'Lagarta-falsa-medideira',
    icon: '🐛',
    color: '#16a085',
    data: [0, 4, 10.67, 20, 40, 73.33, 93.33, 100, 80, 53.33, 33.33, 13.33],
    peak: 'R4',
    peakIndex: 7
  },
  {
    id: 6,
    name: 'Lagarta-elasmo (Elasmopalpus lignosellus)',
    shortName: 'Lagarta-elasmo',
    icon: '🐛',
    color: '#d35400',
    data: [100, 75, 41.67, 16.67, 8.33, 3.33, 0, 0, 0, 0, 0, 0],
    peak: 'V2',
    peakIndex: 0
  },
  {
    id: 7,
    name: 'Tamanduá-da-soja (Sternechus subsignatus)',
    shortName: 'Tamanduá-da-soja',
    icon: '🪳',
    color: '#34495e',
    data: [18.18, 45.45, 81.82, 100, 90.91, 63.64, 36.36, 18.18, 9.09, 3.64, 0, 0],
    peak: 'V5',
    peakIndex: 3
  },
  {
    id: 8,
    name: 'Broca-das-axilas (Crocidosema aporema)',
    shortName: 'Broca-das-axilas',
    icon: '🐛',
    color: '#9b59b6',
    data: [0, 0, 0, 7.69, 23.08, 61.54, 92.31, 100, 76.92, 46.15, 23.08, 7.69],
    peak: 'R4',
    peakIndex: 7
  },
  {
    id: 9,
    name: 'Vaquinha (Diabrotica speciosa)',
    shortName: 'Vaquinha',
    icon: '🦗',
    color: '#f39c12',
    data: [40, 80, 100, 90, 60, 40, 20, 10, 4, 0, 0, 0],
    peak: 'V4',
    peakIndex: 2
  }
];

export const pragaInfo: Record<number, PragaInfo> = {
  0: {
    title: 'Lagarta-da-soja (Anticarsia gemmatalis)',
    phases: [
      {
        title: 'Fase Inicial (V2-V5)',
        description: 'População baixa com crescimento gradual. Início do estabelecimento das lagartas na cultura.'
      },
      {
        title: 'Crescimento Rápido (R1-R3)',
        description: 'Aumento exponencial da população. Período crítico onde as lagartas começam a causar desfolha significativa.'
      },
      {
        title: 'Pico Máximo (R4) - CRÍTICO',
        description: 'Pico de 85% de intensidade em R4. Período mais crítico para controle. Pode causar desfolha severa comprometendo a produtividade.'
      },
      {
        title: 'Declínio (R5-R8)',
        description: 'Redução gradual da população. Manter monitoramento para evitar reinfestação tardia.'
      }
    ]
  },
  1: {
    title: 'Percevejo-marrom (Euschistus heros)',
    phases: [
      {
        title: 'Fase Inicial (V2-R1)',
        description: 'População praticamente ausente. Fase vegetativa não é atrativa para percevejos.'
      },
      {
        title: 'Colonização (R2-R4)',
        description: 'Início da colonização com crescimento acelerado. Percevejos começam a migrar para a lavoura.'
      },
      {
        title: 'Crescimento Exponencial (R5)',
        description: 'Rápido aumento populacional. População estabelecida causando danos crescentes aos grãos.'
      },
      {
        title: 'Pico Máximo (R6-R7) - CRÍTICO',
        description: 'Pico de 90% em R6. Momento mais crítico! Percevejos causam danos severos aos grãos, comprometendo qualidade e peso. Controle intensivo obrigatório.'
      }
    ]
  },
  2: {
    title: 'Percevejo-verde (Nezara viridula)',
    phases: [
      {
        title: 'Fase Inicial (V2-R1)',
        description: 'População muito baixa. Presença insignificante durante fase vegetativa.'
      },
      {
        title: 'Colonização (R2-R4)',
        description: 'Início da infestação com crescimento moderado. Acompanha o padrão do percevejo-marrom.'
      },
      {
        title: 'Pico Máximo (R5-R6) - CRÍTICO',
        description: 'Pico de 75% em R6. Período crítico de dano aos grãos. Sucção de seiva compromete enchimento e qualidade.'
      },
      {
        title: 'Declínio (R7-R8)',
        description: 'Redução populacional gradual. Manter controle até próximo à colheita.'
      }
    ]
  },
  3: {
    title: 'Mosca-branca (Bemisia tabaci)',
    phases: [
      {
        title: 'Colonização Inicial (V2-V4)',
        description: 'Estabelecimento inicial com crescimento moderado. População colonizando plantas jovens.'
      },
      {
        title: 'Crescimento Rápido (V5)',
        description: 'Rápido aumento populacional. Período de crescimento exponencial antes do florescimento.'
      },
      {
        title: 'Pico Máximo (R1) - CRÍTICO',
        description: 'Pico de 80% em R1 (florescimento). Momento crítico! Alto risco de transmissão de viroses. Controle imediato necessário.'
      },
      {
        title: 'Declínio (R2-R8)',
        description: 'Declínio constante após florescimento. População reduz gradualmente até níveis baixos.'
      }
    ]
  },
  4: {
    title: 'Ácaro-rajado (Tetranychus urticae)',
    phases: [
      {
        title: 'Fase Inicial (V2-V5)',
        description: 'População baixa com crescimento lento. Estabelecimento inicial principalmente em condições de déficit hídrico.'
      },
      {
        title: 'Crescimento (R1-R3)',
        description: 'Aumento populacional gradual. Ácaros se multiplicam rapidamente em condições de calor e seca.'
      },
      {
        title: 'Pico Máximo (R4-R5) - CRÍTICO',
        description: 'Pico de 70% em R4. Período crítico especialmente em condições de estresse hídrico. Podem causar desfolha e redução de produtividade.'
      },
      {
        title: 'Declínio (R6-R8)',
        description: 'Redução populacional. Controle natural por chuvas e inimigos naturais.'
      }
    ]
  },
  5: {
    title: 'Lagarta-falsa-medideira (Chrysodeixis includens)',
    phases: [
      {
        title: 'Fase Inicial (V2-V5)',
        description: 'População muito baixa com crescimento lento. Presença inicial discreta na cultura.'
      },
      {
        title: 'Crescimento Exponencial (R1-R3)',
        description: 'Rápido aumento populacional. Lagartas começam a causar desfolha significativa.'
      },
      {
        title: 'Pico Máximo (R4) - CRÍTICO',
        description: 'Pico de 75% em R4. Período mais crítico! Pode causar desfolha severa competindo com lagarta-da-soja. Controle intensivo necessário.'
      },
      {
        title: 'Declínio (R5-R8)',
        description: 'Redução gradual da população. Manter monitoramento até fase final do ciclo.'
      }
    ]
  },
  6: {
    title: 'Lagarta-elasmo (Elasmopalpus lignosellus)',
    phases: [
      {
        title: 'Pico Máximo (V2-V3) - CRÍTICO',
        description: 'Pico de 60% em V2! Praga de início de ciclo. Ataca plântulas causando morte de plantas e falhas na lavoura. MUITO PERIGOSA na emergência.'
      },
      {
        title: 'Declínio Rápido (V4-V5)',
        description: 'Redução rápida da infestação. População cai drasticamente conforme plantas crescem e ficam menos suscetíveis.'
      },
      {
        title: 'Fase Reprodutiva (R1-R8)',
        description: 'População praticamente nula. Praga não tem importância econômica nesta fase do ciclo.'
      }
    ]
  },
  7: {
    title: 'Tamanduá-da-soja (Sternechus subsignatus)',
    phases: [
      {
        title: 'Colonização (V2-V4)',
        description: 'População crescente. Adultos colonizam a lavoura e iniciam postura nas hastes.'
      },
      {
        title: 'Pico Máximo (V5-R1) - CRÍTICO',
        description: 'Pico de 55% em V5. Período crítico! Larvas broqueiam hastes causando tombamento e quebra de plantas. Pode causar perdas significativas.'
      },
      {
        title: 'Declínio (R2-R8)',
        description: 'Redução populacional. Importância econômica diminui conforme plantas lignificam e ciclo avança.'
      }
    ]
  },
  8: {
    title: 'Broca-das-axilas (Crocidosema aporema)',
    phases: [
      {
        title: 'Fase Inicial (V2-R1)',
        description: 'População baixa. Início da colonização com presença discreta.'
      },
      {
        title: 'Crescimento Rápido (R2-R3)',
        description: 'Rápido aumento populacional. Lagartas atacam flores, botões e vagens jovens.'
      },
      {
        title: 'Pico Máximo (R4) - CRÍTICO',
        description: 'Pico de 65% em R4. Período crítico! Ataca estruturas reprodutivas causando abortamento de flores e vagens. Impacto direto na produtividade.'
      },
      {
        title: 'Declínio (R5-R8)',
        description: 'Redução gradual. Manter controle até R6 para proteger vagens em desenvolvimento.'
      }
    ]
  },
  9: {
    title: 'Vaquinha (Diabrotica speciosa)',
    phases: [
      {
        title: 'Colonização Inicial (V2-V3)',
        description: 'População crescente. Adultos colonizam plantas jovens alimentando-se de folhas.'
      },
      {
        title: 'Pico Máximo (V4-V5) - CRÍTICO',
        description: 'Pico de 50% em V4. Período crítico! Adultos causam desfolha em plantas jovens. Larvas atacam raízes. Pode afetar desenvolvimento inicial.'
      },
      {
        title: 'Declínio (R1-R4)',
        description: 'Redução gradual da população. Importância diminui conforme plantas se desenvolvem.'
      },
      {
        title: 'Fase Final (R5-R8)',
        description: 'População insignificante. Praga sem importância econômica nesta fase.'
      }
    ]
  }
};
