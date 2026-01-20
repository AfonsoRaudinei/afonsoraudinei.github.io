export interface Doenca {
  name: string;
  shortName: string;
  icon: string;
  color: string;
  data: number[];
  peak: string;
  peakIndex: number;
  info: string;
}

export interface DoencaPhase {
  title: string;
  description: string;
}

export interface DoencaInfo {
  title: string;
  phases: DoencaPhase[];
}

export const stages = ['V2', 'V3', 'V4', 'V5', 'R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8'];

export const doencas: Doenca[] = [
  {
    name: 'Crestamento Bacteriano',
    shortName: 'Crestamento Bact.',
    icon: '🦠',
    color: '#e74c3c',
    data: [5, 10, 15, 18, 15, 10, 5, 3, 2, 1, 0, 0],
    peak: 'V5',
    peakIndex: 3,
    info: 'Causada por bactérias, ataca folhas e caules. Predominante em estádios vegetativos (V2-V5), com pico em V5 (18%). Favorecida por alta umidade e temperaturas entre 23-27°C.'
  },
  {
    name: 'Míldio',
    shortName: 'Míldio',
    icon: '🍃',
    color: '#3498db',
    data: [8, 10, 12, 15, 20, 25, 20, 15, 10, 5, 3, 2],
    peak: 'R2',
    peakIndex: 5,
    info: 'Doença fúngica que afeta principalmente folhas. Pico em R1-R2 (25%). Favorecida por alta umidade relativa e temperaturas amenas.'
  },
  {
    name: 'Oídio',
    shortName: 'Oídio',
    icon: '⚪',
    color: '#9b59b6',
    data: [0.5, 1, 2, 5, 10, 20, 35, 50, 74, 85, 95, 99],
    peak: 'R8',
    peakIndex: 11,
    info: 'Fungo que forma camada esbranquiçada sobre folhas, hastes e vagens. Intensidade crescente até R8 (99%). Pode causar perda de até 40% da produção.'
  },
  {
    name: 'Pústula Bacteriana',
    shortName: 'Pústula Bact.',
    icon: '🔴',
    color: '#e67e22',
    data: [1.5, 2, 3, 4, 10, 15, 12, 8, 5, 3, 2, 1],
    peak: 'R2',
    peakIndex: 5,
    info: 'Doença bacteriana que forma pequenas pústulas nas folhas. Pico em R2 (15%). Disseminada por respingos de chuva e ventos.'
  },
  {
    name: 'Mofo Branco',
    shortName: 'Mofo Branco',
    icon: '🤍',
    color: '#95a5a6',
    data: [0, 0, 0, 0, 12, 20, 28, 45, 40, 30, 20, 15],
    peak: 'R4',
    peakIndex: 7,
    info: 'Causado pelo fungo Sclerotinia sclerotiorum. Pico em R4 (45%), período crítico de floração até início de formação de vagens.'
  },
  {
    name: 'Ferrugem Asiática',
    shortName: 'Ferrugem Asiática',
    icon: '🟤',
    color: '#c0392b',
    data: [0, 0, 0, 0, 20, 35, 50, 65, 75, 85, 90, 95],
    peak: 'R8',
    peakIndex: 11,
    info: 'A doença mais destrutiva da soja no Brasil. Pico em R8 (95%). Pode causar perdas de até 90% da produção.'
  },
  {
    name: 'Antracnose',
    shortName: 'Antracnose',
    icon: '🟫',
    color: '#16a085',
    data: [0, 0, 0, 0, 8, 12, 15, 12, 10, 8, 5, 3],
    peak: 'R3',
    peakIndex: 6,
    info: 'Doença fúngica muito comum no Cerrado. Pico em R3 (15%). Afeta folhas, hastes, vagens e sementes.'
  },
  {
    name: 'Mancha Parda (Septoriose)',
    shortName: 'Mancha Parda',
    icon: '🟠',
    color: '#d35400',
    data: [0, 0, 0, 0, 0, 2, 5, 8, 15, 30, 55, 85],
    peak: 'R8',
    peakIndex: 11,
    info: 'Causada pelo fungo Septoria glycines. Doença de final de ciclo com pico em R8 (85%).'
  },
  {
    name: 'Cercospora (Crestamento Foliar)',
    shortName: 'Cercospora',
    icon: '🟢',
    color: '#27ae60',
    data: [0, 0, 0, 0, 0, 0, 2, 5, 15, 35, 55, 75],
    peak: 'R8',
    peakIndex: 11,
    info: 'Fungo que ataca todos os órgãos da planta. Pico em R8 (75%). Causa crestamento severo e desfolha prematura.'
  },
  {
    name: 'Macrophomina (Podridão de Carvão)',
    shortName: 'Macrophomina',
    icon: '⚫',
    color: '#8e44ad',
    data: [0, 0, 0, 0, 0, 0, 0, 5, 20, 45, 70, 85],
    peak: 'R8',
    peakIndex: 11,
    info: 'Fungo de solo que forma escleródios. Pico em R8 (85%). Favorecida por estresse hídrico e altas temperaturas.'
  },
  {
    name: 'Mancha Alvo',
    shortName: 'Mancha Alvo',
    icon: '🎯',
    color: '#2ecc71',
    data: [0, 0, 0, 2, 8, 15, 25, 40, 55, 65, 70, 75],
    peak: 'R8',
    peakIndex: 11,
    info: 'Causada por Corynespora cassiicola. Pico em R8 (75%). Forma lesões circulares características com ponto escuro no centro.'
  },
  {
    name: 'Podridão Radicular (Phytophthora)',
    shortName: 'Phytophthora',
    icon: '🌱',
    color: '#34495e',
    data: [15, 18, 20, 15, 10, 8, 5, 3, 2, 1, 0, 0],
    peak: 'V4',
    peakIndex: 2,
    info: 'Oomiceto que infecta raízes. Pico em V3-V4 (18-20%). Causa morte de plântulas. Favorecida por solos encharcados.'
  },
  {
    name: 'Nematoides',
    shortName: 'Nematoides',
    icon: '🪱',
    color: '#795548',
    data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 55],
    peak: 'R7',
    peakIndex: 10,
    info: 'Parasitas de solo. Intensidade crescente ao longo do ciclo. Prejuízos estimados em R$ 35 bilhões/ano no Brasil.'
  },
  {
    name: 'Cancro da Haste',
    shortName: 'Cancro da Haste',
    icon: '🟣',
    color: '#e91e63',
    data: [0, 0, 0, 5, 10, 15, 25, 35, 45, 55, 60, 50],
    peak: 'R7',
    peakIndex: 10,
    info: 'Causado por fungos Diaporthe/Phomopsis. Pico em R7 (60%). Transmitido por sementes infectadas.'
  },
  {
    name: 'Podridão Vermelha da Raiz',
    shortName: 'Podridão Vermelha',
    icon: '❤️',
    color: '#b71c1c',
    data: [8, 12, 15, 18, 20, 22, 25, 30, 35, 40, 38, 30],
    peak: 'R6',
    peakIndex: 9,
    info: 'Causada por espécies de Fusarium. Mancha avermelhada circunda a raiz. Solos compactados favorecem a doença.'
  },
  {
    name: 'Mela/Requeima (Rhizoctonia)',
    shortName: 'Mela/Requeima',
    icon: '💧',
    color: '#4a148c',
    data: [0, 0, 0, 0, 5, 12, 20, 30, 35, 30, 20, 10],
    peak: 'R5',
    peakIndex: 8,
    info: 'Fungo Rhizoctonia solani altamente agressivo. Pico em R5 (35%). Ataca em condições de alta umidade.'
  },
  {
    name: 'Mancha Olho-de-Rã',
    shortName: 'Olho-de-Rã',
    icon: '👁️',
    color: '#00695c',
    data: [0, 0, 0, 2, 5, 8, 12, 18, 25, 30, 28, 20],
    peak: 'R6',
    peakIndex: 9,
    info: 'Causada por Cercospora sojina. Forma manchas circulares com anéis concêntricos. Pico em R6 (30%).'
  }
];

export const doencaInfo: Record<number, DoencaInfo> = {
  0: {
    title: 'Crestamento Bacteriano',
    phases: [
      { title: 'Fase Crítica (V2-V5)', description: 'Pico de infecção em V5 (18%). Condições de alta umidade e calor favorecem disseminação.' },
      { title: 'Declínio (R1-R8)', description: 'Redução gradual conforme planta amadurece. Menor suscetibilidade em estádios reprodutivos.' }
    ]
  },
  1: {
    title: 'Míldio',
    phases: [
      { title: 'Colonização (V2-V5)', description: 'Estabelecimento inicial com crescimento moderado.' },
      { title: 'Pico (R1-R2) - CRÍTICO', description: 'Máxima intensidade em R2 (25%). Alta umidade relativa favorece infecção.' },
      { title: 'Declínio (R3-R8)', description: 'Redução gradual. Temperaturas mais altas desfavorecem o patógeno.' }
    ]
  },
  2: {
    title: 'Oídio',
    phases: [
      { title: 'Fase Inicial (V2-R1)', description: 'Presença baixa, estabelecimento gradual do fungo.' },
      { title: 'Crescimento (R2-R5)', description: 'Aumento progressivo. Temperaturas amenas (18-24°C) favorecem.' },
      { title: 'Pico Máximo (R6-R8) - CRÍTICO', description: 'Intensidade máxima em R8 (99%). Pode causar perda de até 40% da produção.' }
    ]
  },
  3: {
    title: 'Pústula Bacteriana',
    phases: [
      { title: 'Fase Inicial (V2-V5)', description: 'Baixa intensidade durante desenvolvimento vegetativo.' },
      { title: 'Pico (R1-R2) - CRÍTICO', description: 'Máxima intensidade em R2 (15%). Chuvas frequentes favorecem disseminação.' },
      { title: 'Declínio (R3-R8)', description: 'Redução gradual conforme ciclo avança.' }
    ]
  },
  4: {
    title: 'Mofo Branco',
    phases: [
      { title: 'Ausência (V2-V5)', description: 'Sem presença significativa em estádios vegetativos.' },
      { title: 'Colonização (R1-R3)', description: 'Início da infecção durante floração. Pétalas infectadas iniciam ciclo.' },
      { title: 'Pico (R4) - CRÍTICO', description: 'Máxima intensidade em R4 (45%). Período mais crítico para controle.' },
      { title: 'Declínio (R5-R8)', description: 'Redução gradual. Danos já estabelecidos persistem.' }
    ]
  },
  5: {
    title: 'Ferrugem Asiática',
    phases: [
      { title: 'Ausência (V2-V5)', description: 'Sem presença em estádios vegetativos iniciais.' },
      { title: 'Início (R1-R3)', description: 'Primeiras pústulas. Monitoramento intensivo necessário.' },
      { title: 'Crescimento Exponencial (R4-R6)', description: 'Rápida multiplicação. Controle preventivo essencial.' },
      { title: 'Pico Máximo (R7-R8) - CRÍTICO', description: 'Intensidade máxima em R8 (95%). A DOENÇA MAIS DESTRUTIVA. Pode causar perdas de 90%.' }
    ]
  },
  6: {
    title: 'Antracnose',
    phases: [
      { title: 'Ausência (V2-V5)', description: 'Sem presença significativa inicial.' },
      { title: 'Pico (R1-R3) - CRÍTICO', description: 'Máxima intensidade em R3 (15%). Clima quente e úmido favorece.' },
      { title: 'Declínio (R4-R8)', description: 'Redução gradual. Importância diminui em estádios tardios.' }
    ]
  },
  7: {
    title: 'Mancha Parda (Septoriose)',
    phases: [
      { title: 'Ausência (V2-R2)', description: 'Sem presença significativa até início reprodutivo.' },
      { title: 'Crescimento (R3-R6)', description: 'Aumento gradual da intensidade.' },
      { title: 'Pico (R7-R8) - CRÍTICO', description: 'Doença de final de ciclo. Pico em R8 (85%). Causa desfolha prematura.' }
    ]
  },
  8: {
    title: 'Cercospora (Crestamento Foliar)',
    phases: [
      { title: 'Ausência (V2-R3)', description: 'Sem presença significativa em estádios iniciais.' },
      { title: 'Crescimento (R4-R6)', description: 'Aumento gradual. Lesões começam a se aglutinar.' },
      { title: 'Pico (R7-R8) - CRÍTICO', description: 'Máxima intensidade em R8 (75%). Causa crestamento severo.' }
    ]
  },
  9: {
    title: 'Macrophomina (Podridão de Carvão)',
    phases: [
      { title: 'Ausência (V2-R4)', description: 'Presença insignificante em estádios iniciais.' },
      { title: 'Crescimento (R5-R6)', description: 'Aumento rápido, especialmente com estresse hídrico.' },
      { title: 'Pico (R7-R8) - CRÍTICO', description: 'Máxima intensidade em R8 (85%). Difícil controle. Causa murcha e morte.' }
    ]
  },
  10: {
    title: 'Mancha Alvo',
    phases: [
      { title: 'Início (V2-R1)', description: 'Presença baixa, colonização inicial.' },
      { title: 'Crescimento (R2-R5)', description: 'Aumento progressivo. Lesões características aparecem.' },
      { title: 'Pico (R6-R8) - CRÍTICO', description: 'Máxima intensidade em R8 (75%). Pode causar perdas de até 35%.' }
    ]
  },
  11: {
    title: 'Podridão Radicular (Phytophthora)',
    phases: [
      { title: 'Pico (V2-V4) - CRÍTICO', description: 'Máxima intensidade em V4 (20%). Destrói raízes e causa damping-off.' },
      { title: 'Declínio (V5-R8)', description: 'Redução rápida. Plantas sobreviventes se recuperam.' }
    ]
  },
  12: {
    title: 'Nematoides',
    phases: [
      { title: 'Colonização (V2-V5)', description: 'Estabelecimento inicial nas raízes. Danos já ocorrem.' },
      { title: 'Crescimento Contínuo (R1-R6)', description: 'Aumento progressivo. Sintomas de nanismo e clorose.' },
      { title: 'Pico (R7) - CRÍTICO', description: 'Máxima intensidade em R7 (60%). Prejuízos de R$ 35 bilhões/ano no Brasil.' }
    ]
  },
  13: {
    title: 'Cancro da Haste',
    phases: [
      { title: 'Início (V5-R2)', description: 'Colonização inicial. Lesões começam nas hastes.' },
      { title: 'Crescimento (R3-R5)', description: 'Expansão das lesões necróticas.' },
      { title: 'Pico (R6-R7) - CRÍTICO', description: 'Máxima intensidade em R7 (60%). Morte prematura de plantas.' }
    ]
  },
  14: {
    title: 'Podridão Vermelha da Raiz',
    phases: [
      { title: 'Colonização (V2-V5)', description: 'Estabelecimento em solos compactados e mal drenados.' },
      { title: 'Crescimento (R1-R5)', description: 'Aumento gradual. Manchas avermelhadas nas raízes.' },
      { title: 'Pico (R6) - CRÍTICO', description: 'Máxima intensidade em R6 (40%). Aparece em reboleiras.' }
    ]
  },
  15: {
    title: 'Mela/Requeima (Rhizoctonia)',
    phases: [
      { title: 'Ausência (V2-V5)', description: 'Sem presença em estádios vegetativos.' },
      { title: 'Colonização (R1-R3)', description: 'Início da infecção em alta umidade.' },
      { title: 'Pico (R4-R5) - CRÍTICO', description: 'Máxima intensidade em R5 (35%). Forma micélio branco característico.' },
      { title: 'Declínio (R6-R8)', description: 'Redução gradual. Escleródios persistem no solo.' }
    ]
  },
  16: {
    title: 'Mancha Olho-de-Rã',
    phases: [
      { title: 'Início (V5-R2)', description: 'Colonização inicial com baixa intensidade.' },
      { title: 'Crescimento (R3-R5)', description: 'Aumento progressivo das lesões circulares.' },
      { title: 'Pico (R6) - CRÍTICO', description: 'Máxima intensidade em R6 (30%). Causa desfolha em cultivares suscetíveis.' }
    ]
  }
};
