import type { PromptTemplateSummary } from '../types';

export const PT_BR_SKILL_COPY: Record<string, { description?: string; examplePrompt?: string }> = {
  'audio-jingle': {
    examplePrompt:
      'Um jingle indie-pop alegre de 30 segundos para o lançamento de uma cafeteria — piano elétrico aconchegante, bateria com vassourinha, baixo suave e um único coral "ahhh" luminoso no refrão. Sem vocal. Final fácil de fazer loop.',
    description:
      'Geração de áudio para jingles, músicas de fundo, voiceover e efeitos sonoros. Pedidos de música vão para Suno V5 / Udio / Lyria, voz para MiniMax TTS / FishAudio / ElevenLabs V3, e SFX para ElevenLabs SFX ou AudioCraft. A saída é um arquivo MP3/WAV na pasta do projeto.',
  },
  'agent-browser': {
    examplePrompt:
      'Verifique a preview local do Open Design com agent-browser: inicie ou conecte o Chrome CDP, abra http://127.0.0.1:17573/, depois relate o título, URL, texto visível e salve um screenshot.',
    description:
      'Automação de navegador para validar a preview local do Open Design. Conecta-se a um endpoint Chrome CDP verificado, lê o estado renderizado da página, pode clicar/digitar se necessário e salva um screenshot.',
  },
  'blog-post': {
    examplePrompt:
      'Um artigo long-form / blog post — masthead, placeholder de imagem hero, corpo do artigo com figuras e pull quotes, linha do autor, artigos relacionados.',
  },
  'critique': {
    examplePrompt:
      'Faça uma crítica em 5 dimensões do deck magazine-web-ppt que acabou de ser gerado — avalie filosofia / hierarquia / detalhe / função / inovação e entregue Keep / Fix / Quick wins.',
  },
  'dashboard': {
    examplePrompt:
      'Dashboard admin / analytics em um único arquivo HTML.',
  },
  'dating-web': {
    examplePrompt:
      'Projete "mutuals" — um site de dating para criadores no X. Dashboard digest diário com stats, bar chart de matches mútuos e ticker da comunidade.',
  },
  'design-brief': {},
  'digital-eguide': {
    examplePrompt:
      'Projete "The Creator\'s Style & Format Guide" — página de capa e página interna para uma marca de lifestyle creator.',
  },
  'docs-page': {
    examplePrompt:
      'Uma página de documentação — navegação à esquerda, área de artigo rolável, índice à direita.',
  },
  'open-design-landing': {
    examplePrompt:
      'Projete a landing page de marketing do Open Design no estilo Atelier Zero / Monocle — canvas papel quente, colagem surreal gesso + arquitetura, tipografia display serif itálica mista em grande escala, numerais romanos como marcadores de seções e um único acento coral.',
  },
  'open-design-landing-deck': {
    examplePrompt:
      'Crie o pitch deck do Open Design no estilo Atelier Zero — cover com hero plate, separadores de seção em numerais romanos, slide de stats (31 Skills · 72 sistemas · 12 CLIs), citação de cliente, CTA e end-card mega italic-serif. Paginação horizontal-swipe como uma revista impressa.',
    description:
      'Cria um slide deck single-file no estilo Atelier Zero (papel quente, spans de acento em serif itálica, pontos finais coral, placas de colagem surreal). Paginação revista horizontal com navegação por setas e espaço, HUD live com contador de slides e progress bar; compartilha o stylesheet e a biblioteca de imagens de 16 slots com o Skill irmão `open-design-landing`.',
  },
  'email-marketing': {
    examplePrompt:
      'Projete um email de lançamento para uma marca de tênis de corrida — masthead, hero, grande headline lockup, grid de specs, CTA.',
  },
  'eng-runbook': {
    examplePrompt:
      'Escreva um runbook para nosso serviço de auth — alertas, dashboards, procedimentos padrão, rotação on-call.',
  },
  'faq-page': {
    examplePrompt:
      'Uma página FAQ com seções acordeão colapsáveis, busca e filtro por categoria.',
  },
  'finance-report': {
    examplePrompt:
      'Crie um relatório financeiro de Q3 para um SaaS early-stage — MRR, burn, margem bruta, top accounts.',
  },
  'gamified-app': {
    examplePrompt:
      'Projete um app gamificada de life management — protótipo mobile multi-screen: cover poster, quests do dia com XP e detalhe de quest. "Daily quests for becoming a better human."',
  },
  'magazine-web-ppt': {
    examplePrompt:
      'Crie um PPT magazine sobre "empresas de uma pessoa · organizações dobradas pela IA", talk de 25 minutos, público designers + founders. Recomende primeiro uma direção (Monocle / WIRED / Kinfolk / Domus / Lab) para eu escolher.',
  },
  'hatch-pet': {
    examplePrompt:
      'Faça eclodir um pequeno pixel-pet — um Shiba amigável em um moletom aconchegante. Use o Skill hatch-pet de ponta a ponta.',
    description:
      'Cria, repara, valida e empacota uma spritesheet de pet animado compatível com Codex (atlas 8x9, células 192x208), com contact sheet de QA, vídeos preview e pet.json.',
  },
  'hr-onboarding': {
    examplePrompt:
      'Crie um plano de onboarding de 30 dias para um novo Product Designer em uma startup de 40 pessoas.',
  },
  'html-ppt': {},
  'html-ppt-course-module': {},
  'html-ppt-dir-key-nav-minimal': {},
  'html-ppt-graphify-dark-graph': {},
  'html-ppt-hermes-cyber-terminal': {},
  'html-ppt-knowledge-arch-blueprint': {},
  'html-ppt-obsidian-claude-gradient': {},
  'html-ppt-pitch-deck': {},
  'html-ppt-presenter-mode': {},
  'html-ppt-product-launch': {},
  'html-ppt-tech-sharing': {},
  'html-ppt-testing-safety-alert': {},
  'html-ppt-weekly-report': {},
  'html-ppt-xhs-pastel-card': {},
  'html-ppt-xhs-post': {},
  'html-ppt-xhs-white-editorial': {},
  'hyperframes': {
    examplePrompt:
      'Product reveal de 5 segundos: produto premium minimalista sobre uma superfície creme limpa, luz lateral suave, lento push-in de câmera, movimento contido, sem overlay de texto.',
    description:
      'Cria composições de vídeo, animações, title cards, overlays, legendas, voiceovers, visuais audio-reativos e transições de cenas em HTML HyperFrames.',
  },
  'image-poster': {
    examplePrompt:
      'Poster editorial para um festival de cinema indie — silhueta abstrata forte sobre papel quente levemente granulado; título sans-serif composto à mão no topo, datas e local do festival em monospace na base. Paleta ocre e tinta suavizada.',
    description:
      'Geração de imagem única para posters, key art e ilustrações editoriais. O padrão é gpt-image-2, mas o workflow permanece independente de provedor.',
  },
  'invoice': {
    examplePrompt:
      'Crie uma fatura de um estúdio de design freelance para um cliente em um projeto de identidade de marca — três linhas, adiantamento de 10%, IVA de 9%.',
  },
  'kami-deck': {
    examplePrompt:
      'Crie um deck de conferência em seis slides no estilo kami (紙) — pergaminho quente, tinta azul na cover, uma única espessura de serif, swipe magazine horizontal.',
    description:
      'Gera um slide deck pronto para imprimir no design system kami: pergaminho quente (ou tinta azul na cover e capítulos), serif em uma única espessura, acento tinta azul ≤5% por slide, sem itálica. Paginação revista horizontal (←/→ · scroll · swipe · ESC para visão geral). Um único arquivo HTML autônomo, apenas Google Fonts.',
  },
  'kami-landing': {
    examplePrompt:
      'Projete um one-pager de estúdio no estilo kami — canvas pergaminho, acento tinta azul, editorial como um whitepaper.',
    description:
      'Gera um one-pager pronto para imprimir no estilo kami (紙): pergaminho quente, acento tinta azul, serif em uma única espessura, sem itálica, sem cinzas frios. Lê-se como um whitepaper ou one-pager de estúdio, não como uma UI de app. Multilíngue (EN · zh-CN · ja). Um único arquivo HTML sem dependências.',
  },
  'kanban-board': {
    examplePrompt:
      'Crie um Kanban board para uma equipe growth de 5 pessoas no meio do sprint — Backlog, Doing, Review, Done.',
  },
  'live-artifact': {
    examplePrompt:
      'Crie um artefato live interativo com cartões de status, tabela de dados e um painel de detalhes que reage a mudanças de seleção.',
  },
  'magazine-poster': {
    examplePrompt:
      'Projete um poster editorial estilo revista — "You don\'t need a designer to ship your first draft anymore." Papel jornal, seis seções numeradas.',
  },
  'meeting-notes': {
    examplePrompt:
      'Escreva as notas de um weekly growth de 60 minutos — agenda, decisões, action items com owners, próxima reunião.',
  },
  'mobile-app': {
    examplePrompt:
      'Uma tela de app mobile, renderizada em um frame iPhone 15 Pro pixel-perfect na página.',
  },
  'mobile-onboarding': {
    examplePrompt:
      'Projete um flow de onboarding mobile em 3 telas para um app de meditação — welcome, value props, sign-in.',
  },
  'motion-frames': {
    examplePrompt:
      'Projete um hero animado — um type ring rotativo ao redor de um globo wireframe, com o headline "Reach every country." Loop em 12s, pronto para export HyperFrames.',
  },
  'pm-spec': {
    examplePrompt:
      'Escreva uma PRD para autenticação de dois fatores no nosso app SaaS — problema, escopo, milestones, questões em aberto.',
  },
  'pptx-html-fidelity-audit': {
    examplePrompt:
      'Compare deck.pptx com deck.html, liste desvios de layout (overflow de footer, itálica faltando, hero não centralizado) e reexporte com Footer Rail + Cursor Flow.',
  },
  'pricing-page': {
    examplePrompt:
      'Uma pricing page autônoma — header, níveis de planos, tabela de comparação de features e FAQ.',
  },
  'replit-deck': {
    examplePrompt:
      'Deck HTML single-file com swipe horizontal no estilo da galeria de templates do Replit Slides.',
  },
  'saas-landing': {
    examplePrompt:
      'Landing page SaaS one-page com hero, features, social proof, pricing e CTA.',
  },
  'simple-deck': {
    examplePrompt:
      'Deck HTML single-file com swipe horizontal.',
  },
  'social-carousel': {
    examplePrompt:
      'Projete um social carousel cinematográfico de 3 cards — "onwards.", "to the next one.", "looking ahead." Quadrados 1080×1080, prontos para Instagram.',
  },
  'sprite-animation': {
    examplePrompt:
      'Crie uma animação baseada em sprites com curiosidades sobre a história da Nintendo. Combine mascote pixel, texto animado e acento Hanafuda. Cor e tipografia devem evocar a marca Nintendo.',
  },
  'team-okrs': {
    examplePrompt:
      'Crie um OKR tracker para Q4 — três Objectives, três Key Results cada, progress bars, owners, status pills.',
  },
  'tweaks': {
    examplePrompt:
      'Adicione a esta landing page um Tweak Panel — Accent Color, Type Scale, Density, Light/Dark — e persista no localStorage para manter a escolha após refresh.',
  },
  'video-shortform': {
    examplePrompt:
      'Product reveal de 5 segundos — uma xícara de cerâmica gira sobre fundo de papel suave, luz quente lateral vinda da esquerda, finas partículas de poeira no feixe de luz. Cinematográfico, 16:9, lento drift de câmera.',
    description:
      'Geração de vídeo short-form para clips de 3 a 10 segundos: product reveals, motion teasers e ambient loops.',
  },
  'web-prototype': {
    examplePrompt:
      'Protótipo versátil para desktop web.',
  },
  'weekly-update': {
    examplePrompt:
      'Crie um deck de weekly update para a equipe growth — concluído, em andamento, blockers, métricas e questões para a próxima semana.',
  },
  'wireframe-sketch': {
    examplePrompt:
      'Esbocẽ um wireframe desenhado à mão v0.1 para um portal — quatro variantes como tabs em papel milimetrado, headlines com marcador, anotações em sticky-note, placeholders de charts hachurados.',
  },
};

export const PT_BR_DESIGN_SYSTEM_SUMMARIES: Record<string, string> = {
  airbnb: 'Marketplace de viagens. Acento coral acolhedor, fortemente guiado por fotos, UI arredondada.',
  airtable: 'Híbrido spreadsheet / banco de dados. Colorido, acessível, estética de dados estruturados.',
  apple: 'Eletrônica de consumo. Espaço branco premium, SF Pro, imagens cinematográficas.',
  'atelier-zero':
    'Sistema de estúdio editorial. Canvas papel quente, colagem surreal gesso + arquitetura, tipografia display serif itálica mista, numerais romanos como marcadores de seções e um único acento coral — feito para landing pages magazine, sites de estúdio e páginas manifesto.',
  binance: 'Exchange crypto. Acento amarelo forte sobre monocromático, urgência de trading-floor.',
  bmw: 'Automóvel de luxo. Superfícies dark premium, estética de engenharia alemã precisa.',
  bugatti: 'Marca hypercar. Tela cinematográfica escura, rigor monocromático, tipografia display monumental.',
  cal: 'Agendamento open-source. UI neutra e limpa, simplicidade voltada ao desenvolvedor.',
  claude: 'Assistente IA da Anthropic. Acento terracota quente, layout editorial claro.',
  clay: 'Agência criativa. Formas orgânicas, gradientes suaves, layout fortemente editorial e art-directed.',
  clickhouse: 'Banco de analytics rápido. Estilo de documentação técnica com acento amarelo.',
  cohere: 'Plataforma IA enterprise. Gradientes vibrantes, estética de dashboard rica em dados.',
  coinbase: 'Exchange crypto. Identidade azul clara, confiança, sensação institucional.',
  composio: 'Plataforma de integrações de ferramentas. Dark moderno com ícones de integração coloridos.',
  cursor: 'Editor de código AI-first. Interface dark elegante, acentos em gradiente.',
  default:
    'Padrão limpo e orientado a produto. Usar quando o brief não pede uma atmosfera específica — bom para ferramentas B2B, dashboards e páginas utilitárias.',
  elevenlabs: 'Plataforma IA de voz. UI dark cinematográfica, estética de waveform de áudio.',
  expo: 'Plataforma React Native. Tema escuro, tracking apertado, centrado em código.',
  ferrari: 'Automóvel de luxo. Editorial chiaroscuro, acentos Ferrari Red, negro cinematográfico.',
  figma: 'Ferramenta de design colaborativo. Multicolorido vibrante, lúdico e profissional.',
  framer: 'Website builder. Preto e azul ousados, motion-first, orientado a design.',
  hashicorp: 'Automação de infraestrutura. Visual enterprise limpo, preto e branco.',
  ibm: 'Tecnologia enterprise. Carbon Design System, paleta azul estruturada.',
  intercom: 'Customer messaging. Paleta azul amigável, padrões de UI conversacionais.',
  kami:
    'Sistema de papel editorial. Canvas papel quente, acento azul tinta, serif em uma única espessura — feito para currículos, one-pagers, white papers, portfólios e slide decks.',
  kraken: 'Trading crypto. UI escura com acento violeta, dashboards ricos em dados.',
  lamborghini: 'Marca supercar. Superfícies negro profundo, acentos dourados, tipografia uppercase dramática.',
  'linear-app': 'Project management. Ultraminimal, preciso, acento violeta.',
  loom: 'Mensageiro de vídeo assíncrono. Violeta primary, acento framboesa, UI clara e luminosa, superfícies brancas para comunicação em vídeo.',
  lovable: 'Builder full-stack IA. Gradientes lúdicos, estética dev amigável.',
  mastercard: 'Rede global de pagamentos. Canvas papel quente, formas pill orbitais, calor editorial.',
  meta: 'Tech retail store. Centrado em fotografia, superfícies binárias claro/escuro, CTAs Meta Blue.',
  minimax: 'Provedor de modelos IA. Interface dark ousada com acentos neon.',
  mintlify: 'Plataforma de documentação. Limpo, acento verde, otimizado para leitura.',
  miro: 'Colaboração visual. Acento amarelo luminoso, estética de infinite canvas.',
  'mistral-ai': 'Provedor LLM open-weight. Minimalismo construído à francesa, com tonalidade violeta.',
  mongodb: 'Banco documental. Branding folha verde, foco na documentação do desenvolvedor.',
  nike: 'Varejo esportivo. UI monocromática, uppercase massiva, fotografia full-bleed.',
  notion: 'Workspace all-in-one. Minimalismo quente, headings serif, superfícies suaves.',
  nvidia: 'GPU computing. Energia verde-preta, estética de potência técnica.',
  ollama: 'Executar LLMs localmente. Terminal-first, simplicidade monocromática.',
  'opencode-ai': 'Plataforma IA de coding. Tema dark centrado no desenvolvedor.',
  pinterest: 'Descoberta visual. Acento vermelho, masonry grid, foco em imagens.',
  playstation:
    'Varejo de console gaming. Layout de três superfícies, autoridade calma em tipografia display, hover scale cyan.',
  posthog: 'Product analytics. Branding lúdico, UI dark developer-friendly.',
  raycast: 'Launcher de produtividade. Chrome dark elegante, acentos de gradiente vibrantes.',
  renault: 'Automóvel francês. Gradientes aurora vibrantes, tipografia NouvelR, energia forte.',
  replicate: 'Executar modelos ML por API. Canvas branco limpo, orientado a código.',
  resend: 'API de email. Tema dark minimalista, acentos monospace.',
  revolut: 'Banco digital. Interface dark elegante, cartões com gradiente, precisão fintech.',
  runwayml: 'Geração de vídeo IA. UI dark cinematográfica, layout rico em mídia.',
  sanity: 'Headless CMS. Acento vermelho, layout editorial content-first.',
  sentry: 'Monitoramento de erros. Dashboard dark, rico em dados, acento rosa-violeta.',
  shopify: 'Plataforma e-commerce. Dark-first e cinematográfico, acento verde neon, tipo ultraleve.',
  spacex: 'Tecnologia espacial. Preto e branco rigorosos, imagens full-bleed, futurista.',
  spotify: 'Streaming musical. Verde vibrante sobre dark, tipo forte, guiado por album art.',
  starbucks:
    'Marca global de café retail. Sistema verde de quatro níveis, canvas papel quente, botões full-pill.',
  stripe: 'Infraestrutura de pagamento. Gradientes violetas assinatura, elegância em weight 300.',
  supabase: 'Alternativa Firebase open-source. Tema dark esmeralda, code-first.',
  superhuman: 'Client de email rápido. UI dark premium, keyboard-first, glow violeta.',
  tesla: 'Automóvel elétrico. Redução radical, fotografia full-viewport, quase nenhuma UI.',
  theverge:
    'Mídia tech editorial. Acentos acid mint e ultravioleta, display Manuka, story tiles estilo rave flyer.',
  'together-ai': 'Infraestrutura IA open-source. Técnico, design próximo de blueprint.',
  'trading-terminal': 'Interface de trading financeiro. Terminal data-dense estilo Bloomberg, UI dark-only.',
  uber: 'Plataforma de mobilidade. Preto e branco francos, tipo justa, energia urbana.',
  vercel: 'Deploy frontend. Precisão preto e branco, Geist Font.',
  vodafone: 'Marca telecom global. Tipografia display uppercase monumental, faixas Vodafone Red.',
  voltagent: 'Framework de agentes IA. Fundo negro profundo, acento esmeralda, pensado como terminal nativo.',
  'warm-editorial':
    'Estética revista guiada pela serif. Acento terracota sobre papel off-white quente — bom para long-form, editorial e páginas de marketing guiadas pela marca.',
  warp: 'Terminal moderno. Interface dark tipo IDE, command UI em blocos.',
  webflow: 'Visual web builder. Acento azul, estética polida de marketing-site.',
  wired: 'Revista tech. Densidade broadsheet sobre branco papel, custom serif display, kicker mono, links azul tinta.',
  wise: 'Transferência de dinheiro. Acento verde luminoso, amigável e claro.',
  'x-ai': 'Lab de IA do Elon Musk. Visual monocromático rigoroso, minimalismo futurista.',
  xiaohongshu: 'Plataforma social lifestyle UGC. Vermelho de marca singular, radius generoso, content-first.',
  wechat: 'Mini programas WeChat. Verde fresco (#07C160), PingFang SC, UI de bolha de chat, barra de abas.',
  zapier: 'Plataforma de automação. Laranja quente, amigável, guiada por ilustração.',
};

export const PT_BR_DESIGN_SYSTEM_CATEGORIES: Record<string, string> = {
  Starter: 'Starter',
  'AI & LLM': 'AI & LLM',
  'Bold & Expressive': 'Ousado & expressivo',
  'Creative & Artistic': 'Criativo & artístico',
  'Developer Tools': 'Developer Tools',
  'Layout & Structure': 'Layout & estrutura',
  'Modern & Minimal': 'Moderno & minimal',
  'Morphism & Effects': 'Morphism & efeitos',
  'Productivity & SaaS': 'Produtividade & SaaS',
  'Professional & Corporate': 'Profissional & corporativo',
  'Backend & Data': 'Backend & data',
  'Design & Creative': 'Design & criatividade',
  'Fintech & Crypto': 'Fintech & crypto',
  'E-Commerce & Retail': 'E-commerce & varejo',
  'Media & Consumer': 'Mídia & consumo',
  'Social & Messaging': 'Redes sociais & mensageria',
  Automotive: 'Automotivo',
  Product: 'Produto',
  'Editorial & Print': 'Editorial & print',
  'Editorial · Studio': 'Editorial · Studio',
  'Retro & Nostalgic': 'Retro & nostálgico',
  'Themed & Unique': 'Temático & único',
  'Editorial / Personal / Publication': 'Editorial / Pessoal / Publicação',
  Uncategorized: 'Não categorizado',
};

export const PT_BR_PROMPT_TEMPLATE_CATEGORIES: Record<string, string> = {
  Infographic: 'Infográfico',
  'Anime / Manga': 'Anime / manga',
  'App / Web Design': 'App / web design',
  'Game UI': 'Game UI',
  Illustration: 'Ilustração',
  'Profile / Avatar': 'Perfil / avatar',
  'Social Media Post': 'Post em redes sociais',
  General: 'Geral',
  Advertising: 'Publicidade',
  'Motion Graphics': 'Motion graphics',
  Cinematic: 'Cinematográfico',
  'VFX / Fantasy': 'VFX / fantasy',
  Anime: 'Anime',
  'Social / Meme': 'Social / meme',
  Branding: 'Branding',
  Data: 'Data',
  Marketing: 'Marketing',
  Product: 'Produto',
  'Short Form': 'Short form',
  Travel: 'Viagem',
  'Live Artifact': 'Live artifact',
  'VFX / HTML-in-Canvas': 'VFX / HTML-in-Canvas',
};

export const PT_BR_PROMPT_TEMPLATE_TAGS: Record<string, string> = {
  '3d': '3D',
  '3d-render': 'render 3D',
  action: 'ação',
  'ancient-china': 'China antiga',
  anime: 'anime',
  'app-showcase': 'app showcase',
  archery: 'tiro com arco',
  arpg: 'ARPG',
  'audio-reactive': 'audio-reativo',
  'boss-fight': 'boss fight',
  brand: 'brand',
  branding: 'branding',
  captions: 'legendas',
  cavalry: 'cavalaria',
  chart: 'chart',
  childlike: 'infantil',
  choreography: 'coreografia',
  cinematic: 'cinematográfico',
  'cinematic-romance': 'romance cinematográfico',
  combat: 'combate',
  combo: 'combo',
  'companion-to-image': 'companion to image',
  counter: 'counter',
  crayon: 'giz de cera',
  cyberpunk: 'cyberpunk',
  dance: 'dança',
  'data-viz': 'data-viz',
  editorial: 'editorial',
  'elden-ring': 'Elden Ring',
  endcard: 'end card',
  escort: 'escort',
  'escort-mission': 'missão de escolta',
  fantasy: 'fantasy',
  fashion: 'moda',
  'fighting-game': 'fighting game',
  food: 'food',
  'game-cinematic': 'cinematic de jogo',
  'game-ui': 'game UI',
  'grid-sheet': 'grid sheet',
  guanyu: 'Guanyu',
  'hand-drawn': 'desenhado à mão',
  hud: 'HUD',
  'hud-safe': 'HUD-safe',
  hype: 'hype',
  hyperframes: 'HyperFrames',
  idol: 'idol',
  illustration: 'ilustração',
  'image-to-image': 'image-to-image',
  infographic: 'infográfico',
  japanese: 'japonês',
  karaoke: 'karaokê',
  'key-visual': 'key visual',
  'kinetic-typography': 'tipografia cinética',
  'linear-style': 'estilo Linear',
  'live-artifact': 'live artifact',
  logo: 'logo',
  lyubu: 'Lyu Bu',
  map: 'mapa',
  marketing: 'marketing',
  minimal: 'minimal',
  mmo: 'MMO',
  mobile: 'mobile',
  money: 'dinheiro',
  'mounted-combat': 'combate montado',
  nature: 'natureza',
  'open-world': 'open world',
  'otaku-dance': 'dança otaku',
  outro: 'outro',
  overlay: 'overlay',
  pipeline: 'pipeline',
  'pose-reference': 'referência de pose',
  portrait: 'retrato',
  product: 'produto',
  'product-promo': 'promo de produto',
  rework: 'rework',
  route: 'rota',
  saas: 'SaaS',
  sequence: 'sequência',
  sizzle: 'sizzle',
  social: 'social',
  storyboard: 'storyboard',
  'street-fighter': 'Street Fighter',
  'style-transfer': 'style transfer',
  tekken: 'Tekken',
  'three-kingdoms': 'Three Kingdoms',
  tiktok: 'TikTok',
  'title-card': 'title card',
  transform: 'transformação',
  travel: 'viagem',
  tts: 'TTS',
  typography: 'tipografia',
  'unreal-engine-5': 'Unreal Engine 5',
  vertical: 'vertical',
  'video-reference': 'referência de vídeo',
  'vs-screen': 'VS screen',
  'website-to-video': 'website-to-video',
  wuxia: 'wuxia',
  zhaoyun: 'Zhaoyun',
  dashboard: 'dashboard',
  data: 'data',
  destruction: 'destruição',
  displacement: 'displacement',
  hero: 'hero',
  'html-in-canvas': 'HTML-in-Canvas',
  iphone: 'iPhone',
  keynote: 'keynote',
  liquid: 'líquido',
  'liquid-glass': 'liquid glass',
  macbook: 'MacBook',
  magnetic: 'magnético',
  particles: 'partículas',
  portal: 'portal',
  'product-demo': 'demo de produto',
  shader: 'shader',
  shatter: 'shatter',
  text: 'texto',
  webgl: 'WebGL',
};

export const PT_BR_PROMPT_TEMPLATE_COPY: Record<string, Partial<Pick<PromptTemplateSummary, 'summary' | 'title'>>> = {
  '3d-stone-staircase-evolution-infographic': {
    title: 'Infográfico 3D de uma evolução em escadaria de pedra',
    summary:
      'Transforma uma timeline de evolução plana em um infográfico 3D realista em escadaria de pedra, com renderizações detalhadas de organismos e painéis laterais estruturados.',
  },
  'anime-martial-arts-battle-illustration': {
    title: 'Ilustração anime de batalha de artes marciais',
    summary:
      'Gera uma ilustração anime dinâmica e impactante de duas personagens femininas lutando em um dojo tradicional com efeitos de energia elemental.',
  },
  'e-commerce-live-stream-ui-mockup': {
    title: 'Mockup de interface de livestream e-commerce',
    summary:
      'Gera uma interface realista de livestream em redes sociais sobre um retrato, com mensagens de chat personalizáveis, popups de presentes e card de compra de produto.',
  },
  'illustrated-city-food-map': {
    title: 'Mapa culinário ilustrado de uma cidade',
    summary:
      'Gera um mapa turístico desenhado à mão em estilo aquarela, com especialidades locais numeradas, pontos de interesse e legenda.',
  },
  'infographic-otaku-dance-choreography-breakdown-gokurakujodo-16-panels': {},
  'momotaro-explainer-slide-in-hybrid-style': {
    title: 'Slide explicativa Momotaro em estilo híbrido',
    summary:
      'Combina a estética simples e acolhedora das ilustrações Irasutoya com a densidade de informação dos slides administrativos japoneses.',
  },
  'profile-avatar-anime-girl-to-cinematic-photo': {
    title: 'Perfil / avatar - Anime girl para foto cinematográfica',
    summary:
      'Transforma uma ilustração de personagem em um retrato vintage realista de interior, com tons quentes, preservando roupa, pose e gato.',
  },
  'profile-avatar-casual-fashion-grid-photoshoot': {
    title: 'Perfil / avatar - Shooting foto moda casual em grid',
    summary:
      'Prompt JSON estruturado para um colagem de 4 fotos de um shooting de moda casual, com parâmetros detalhados para a pessoa e a luz.',
  },
  'profile-avatar-cinematic-south-asian-male-portrait-with-vultures': {
    title: 'Perfil / avatar - Retrato cinematográfico sul-asiático com abutres',
    summary:
      'Retrato cinematográfico detalhado de um jovem sul-asiático em uma cena dark fantasy, cercado por abutres e corvos.',
  },
  'profile-avatar-cyberpunk-anime-portrait-with-neon-face-text': {
    title: 'Perfil / avatar - Retrato anime cyberpunk com texto neon no rosto',
    summary:
      'Retrato anime estilizado banhado em neon para poster, social media art ou visuais de branding futurista.',
  },
  'profile-avatar-elegant-fantasy-girl-in-violet-garden': {
    title: 'Perfil / avatar - Fantasy girl elegante em um jardim violeta',
    summary:
      'Gera um retrato anime fantasy polido de uma mulher elegante, cabelos brilhantes penteados, roupa violeta-preta e jardim floral mágico.',
  },
  'profile-avatar-ethereal-blue-haired-fantasy-portrait': {
    title: 'Perfil / avatar - Retrato fantasy etéreo de cabelos azuis',
    summary:
      'Gera um retrato anime fantasy suave e luminoso para key art vertical elegante ou ilustração de personagem com cabelos fluidos.',
  },
  'profile-avatar-glamorous-woman-in-black-portrait': {
    title: 'Perfil / avatar - Retrato glamour de mulher de preto',
    summary:
      'Gera um retrato luxuoso fotorrealista de uma mulher elegante em roupa preta, ideal para editorial de moda ou visuais de beleza.',
  },
  'profile-avatar-hyper-realistic-selfie-texture-prompts': {
    title: 'Perfil / avatar - Prompts de textura selfie hiper-realista',
    summary:
      'Snippets de prompt detalhados para texturas de pele realistas e enquadramento de selfie smartphone autêntico com poros visíveis e luz natural.',
  },
  'profile-avatar-lavender-fantasy-mage-portrait': {
    title: 'Perfil / avatar - Retrato de maga fantasy lavanda',
    summary:
      'Gera um retrato anime fantasy polido de uma princesa maga elegante com cabelos loiros, flores violetas e vestidos cristalinos.',
  },
  'profile-avatar-monochrome-studio-portrait': {
    title: 'Perfil / avatar - Retrato studio monocromático',
    summary:
      'Prompt de fotografia comercial high-end para retrato monocromático, fundo fortemente dividido e luz de estúdio dramática.',
  },
  'profile-avatar-old-photo-restoration-to-dslr-portrait': {
    title: 'Perfil / avatar - Restauração de foto antiga para retrato DSLR',
    summary:
      'Restaura uma foto familiar vintage danificada de quatro pessoas em um retrato realista limpo, colorizado e de alta resolução.',
  },
  'profile-avatar-poetic-woman-in-garden-portrait': {
    title: 'Perfil / avatar - Retrato poético de mulher no jardim',
    summary:
      'Gera um retrato editorial realista de uma jovem letrada em um jardim ensolarado, ideal para lifestyle photography ou literary branding.',
  },
  'profile-avatar-professional-identity-portrait-wallpaper': {
    title: 'Perfil / avatar - Wallpaper de retrato de identidade profissional',
    summary:
      'Gera um wallpaper premium de alta resolução com uma pessoa em traje profissional, atividades profissionais e tipografia.',
  },
  'profile-avatar-realistically-imperfect-ai-selfie': {
    title: 'Perfil / avatar - Selfie IA realisticamente imperfeito',
    summary:
      'Prompt criativo GPT-image-2 para um selfie "falha" que parece um instantâneo smartphone acidental de baixa qualidade.',
  },
  'profile-avatar-signed-marker-portrait-on-shikishi': {
    title: 'Perfil / avatar - Retrato marker assinado em shikishi',
    summary:
      'Gera um retrato marker vivo e assinado em shikishi quadrado, para fan art autografado e visual de agradecimento pessoal.',
  },
  'profile-avatar-snow-rabbit-empress-portrait': {
    title: 'Perfil / avatar - Retrato de imperatriz coelho das neves',
    summary:
      'Prompt de retrato fantasy realista de uma mulher real com motif de coelho, em hanfu de inverno diante de um templo de montanha com neve.',
  },
  'profile-avatar-snow-rabbit-mask-hanfu-portrait': {
    title: 'Perfil / avatar - Retrato hanfu com máscara de coelho das neves',
    summary:
      'Gera um retrato fantasy invernal cinematográfico de uma mulher mascarada em hanfu branco com motif de coelho, ideal para character art elegante.',
  },
  'profile-avatar-snowy-rabbit-hanfu-portrait': {
    title: 'Perfil / avatar - Retrato hanfu coelho nevado',
    summary:
      'Gera um retrato fantasy beauty ultradetalhado de uma mulher com orelhas de coelho em hanfu bordado, para character art ou costume design.',
  },
  'profile-avatar-snowy-rabbit-spirit-portrait': {
    title: 'Perfil / avatar - Retrato de espírito coelho nevado',
    summary:
      'Gera um retrato fantasy calmo de uma mulher anônima com orelhas de coelho no inverno, ideal para character art atmosférico.',
  },
  'profile-avatar-song-dynasty-hanfu-portrait': {
    title: 'Perfil / avatar - Retrato hanfu da dinastia Song',
    summary:
      'Prompt otimizado para retrato realista detalhado de uma beleza em hanfu tradicional da dinastia Song em um pátio antigo.',
  },
  'social-media-post-anime-pokemon-shop-outfit-teaser-poster': {
    title: 'Post em redes sociais - Teaser outfit anime em uma Pokémon shop',
    summary:
      'Gera um poster de anúncio fashion anime suave e pastel, com rosto desfocado em uma Pokémon Store.',
  },
  'social-media-post-cinematic-elevator-scene': {
    title: 'Post em redes sociais - Cena de elevador cinematográfica',
    summary:
      'Prompt para uma cena sombria e cinematográfica de uma mulher em um elevador metálico, com luz e reflexos realistas.',
  },
  'social-media-post-confused-elf-girl-at-pastel-desk': {
    title: 'Post em redes sociais - Elf girl confusa em uma mesa pastel',
    summary:
      'Gera uma ilustração anime pastel suave de uma elf girl no computador em um workspace kawaii aconchegante.',
  },
  'social-media-post-editorial-fashion-photography': {
    title: 'Post em redes sociais - Fotografia fashion editorial',
    summary:
      'Prompt atmosférico focado em fashion para uma cena de estúdio minimalista com luz suave e tons quentes.',
  },
  'social-media-post-fashion-editorial-collage': {
    title: 'Post em redes sociais - Colagem fashion editorial',
    summary:
      'Prompt muito detalhado de colagem de fotos 2x2 para shots fashion editorial, com styling coerente, luz específica e rosto de referência.',
  },
  'social-media-post-psg-transfer-announcement-poster': {
    title: 'Post em redes sociais - Poster de anúncio de transferência PSG',
    summary:
      'Poster de futebol profissional e impactante para anunciar a contratação de um jogador pelo Paris Saint-Germain.',
  },
  'social-media-post-showa-day-retro-culture-magazine-cover': {
    title: 'Post em redes sociais - Capa de revista retro cultura para Showa Day',
    summary:
      'Página editorial acolhedora sobre um feriado japonês, com character art anime, rua nostálgica da era Showa e layout magazine.',
  },
  'social-media-post-social-media-fashion-outfit-generation': {
    title: 'Post em redes sociais - Geração de outfits fashion',
    summary:
      'Prompt para gerar uma semana de recomendações de outfits de fashion blogger a partir de um perfil de personagem, com labels e preços.',
  },
  'social-media-post-travel-snapshot-collage-prompt': {
    title: 'Post em redes sociais - Colagem de snapshots de viagem',
    summary:
      'Prompt detalhado para uma colagem nostálgica em 12 frames de fotos de viagem solo estilo smartphone.',
  },
  'social-media-post-vintage-sign-painter-sketch': {
    title: 'Post em redes sociais - Esboço vintage de sign painter',
    summary:
      'Gera um esboço marker desenhado à mão em papel, com detalhes realistas como linhas de grafite e sangramento de tinta.',
  },
  'vr-headset-exploded-view-poster': {
    title: 'Poster em vista explodida de um headset VR',
    summary:
      'Gera um diagrama high-tech em vista explodida de um headset VR, com callouts detalhados de componentes e texto promocional.',
  },
  '3d-animated-boy-building-lego': {
    title: 'Menino animado 3D construindo Lego',
    summary:
      'Prompt de vídeo multi-shot em estilo animação 3D descrevendo um menino montando cuidadosamente blocos Lego em um quarto, com efeitos time-lapse.',
  },
  'a-decade-of-refinement-glow-up': {
    title: 'Uma década de refinamento: glow-up',
    summary:
      'Prompt de transformação para Seedance 2.0 mostrando a transição de um homem de um cenário casual de 2016 para um lifestyle luxuoso em Dubai em 2026.',
  },
  'ancient-guardian-dragon-rescue': {
    title: 'Resgate por um antigo dragão guardião',
    summary:
      'Prompt cinematográfico multi-shot detalhado sobre uma garota em um vilarejo chuvoso salva por um dragão emergente.',
  },
  'ancient-indian-kingdom-fpv-video': {
    title: 'Vídeo FPV de um antigo reino indiano',
    summary:
      'Prompt FPV drone rápido e cinematográfico mostrando um reino indiano místico com templos e selvas.',
  },
  'animation-transfer-and-camera-tracking-prompt': {
    title: 'Prompt de transferência de animação e camera tracking',
    summary:
      'Prompt técnico para Seedance 2.0 aplicando uma referência de movimento precisa a um personagem mantendo camera tracking fixo.',
  },
  'beat-synced-outfit-transformation-dance': {
    title: 'Dança de transformação de outfit sincronizada ao beat',
    summary:
      'Prompt Seedance 2.0 que faz um personagem dançar a partir de breakdown frames e aciona uma mudança de outfit sincronizada ao beat.',
  },
  'character-intro-motion-graphics-sequence': {
    title: 'Sequência motion graphics de introdução de personagem',
    summary:
      'Prompt motion graphics complexo em múltiplas etapas para apresentar uma equipe de personagens com overlays UI e transições.',
  },
  'cinematic-birthday-celebration-sequence': {
    title: 'Sequência cinematográfica de festa de aniversário',
    summary:
      'Prompt de vídeo multi-shot muito detalhado para uma sequência de aniversário, com foco em coerência dos personagens e storytelling emocional.',
  },
  'cinematic-dragon-interaction-flight': {
    title: 'Interação cinematográfica com dragão e voo',
    summary:
      'Prompt storyboard detalhado para um vídeo com interação emocional entre uma mulher e um dragão, seguida de um voo cinematográfico.',
  },
  'cinematic-east-asian-woman-hand-dance': {
    title: 'Dança de mãos cinematográfica de uma mulher leste-asiática',
    summary:
      'Prompt de vídeo cinematográfico multi-shot muito detalhado para uma dança de mãos estilizada com instruções de câmera e ação time-coded.',
  },
  'cinematic-emotional-face-close-up': {
    title: 'Close-up facial emocional cinematográfico',
    summary:
      'Prompt técnico Seedance 2.0 muito detalhado focado em texturas de pele realistas e transições emocionais complexas do rosto.',
  },
  'cinematic-marine-biologist-exploration': {
    title: 'Exploração cinematográfica de uma bióloga marinha',
    summary:
      'Prompt de vídeo cinematográfico detalhado para uma cena subaquática onde uma bióloga marinha descobre um navio antigo em um recife de coral.',
  },
  'cinematic-music-podcast-and-guitar-technique': {
    title: 'Podcast musical cinematográfico e técnica de guitarra',
    summary:
      'Prompt cinematográfico avançado para um vídeo de podcast musical 4K, focado em técnica de guitarra, pinch harmonics e estética de estúdio.',
  },
  'cinematic-route-navigation-guide': {
    title: 'Guia de navegação de rota cinematográfico',
    summary:
      'Prompt multi-cena estruturado para Seedance para criar um vídeo de navegação a pé coerente com guia recorrente.',
  },
  'cinematic-street-racing-sequence-for-seedance-2': {
    title: 'Sequência street racing cinematográfica para Seedance 2',
    summary:
      'Prompt multi-shot detalhado para uma sequência de street racing noturna com foco intenso no piloto, câmera dinâmica e aceleração explosiva.',
  },
  'cinematic-vampire-alley-fight-sequence': {
    title: 'Sequência de luta de vampiro em um beco',
    summary:
      'Prompt de ação completo para uma cena de curta-metragem com câmera dinâmica e combate em alta velocidade em um beco iluminado por neon.',
  },
  'crimson-horizon-sci-fi-cinematic-sequence': {
    title: 'Sequência cinematográfica sci-fi Crimson Horizon',
    summary:
      'Sequência fílmica completa em 9 shots para um filme sci-fi chamado "Crimson Horizon", do lançamento de foguete ao encontro alienígena inquietante em Marte.',
  },
  'cyberpunk-game-trailer-script': {
    title: 'Script de trailer de jogo cyberpunk',
    summary:
      'Prompt de vídeo detalhado para trailer de jogo cyberpunk com character design, animações UI e transições de ambiente do void branco para a favela.',
  },
  'forbidden-city-cat-satire': {
    title: 'Sátira com gato na Cidade Proibida',
    summary:
      'Prompt dark comedy complexo para Seedance 2.0 com gato funcionário laranja e imperador hiena em uma cena satírica da dinastia Qing.',
  },
  'game-screenshot-anime-fighting-game-captain-ryuuga-vs-kaze-renshin': {},
  'game-screenshot-three-kingdoms-guanyu-slaying-yanliang': {},
  'game-screenshot-three-kingdoms-lyubu-yuanmen-archery': {},
  'game-screenshot-three-kingdoms-zhaoyun-cradle-escape': {},
  'hollywood-haute-couture-fantasy-video-prompt': {
    title: 'Prompt de vídeo fantasy haute couture hollywoodiano',
    summary:
      'Prompt de vídeo multi-cena detalhado para Seedance 2.0, concebido para um filme fantasy haute couture hollywoodiano em estética 8K / Unreal Engine.',
  },
  'hyperframes-app-showcase-three-phones': {
    title: 'HyperFrames: app showcase 12 segundos com três phones flutuantes',
    summary:
      'Composição app showcase 16:9 de 12 segundos — três telas iPhone flutuam no espaço 3D, cada uma gira para revelar uma feature, com label callouts beat-sync e end logo lockup. Construído diretamente sobre o bloco do catálogo HyperFrames `app-showcase`.',
  },
  'hyperframes-brand-sizzle-reel': {
    title: 'HyperFrames: brand sizzle reel de 30 segundos',
    summary:
      'Sizzle reel HyperFrames 16:9 de 30 segundos — cortes rápidos, tipografia cinética beat-sync, scale audio-reativo nas palavras display, transições shader entre cinco cenas, end-card com logo bloom. Modelado no arquétipo aisoc-hype do student kit.',
  },
  'hyperframes-data-bar-chart-race': {
    title: 'HyperFrames: bar chart race animado estilo NYT',
    summary:
      'Infográfico de dados 16:9 de 12 segundos — bar chart e line chart animados com reveal de categorias em stagger, headline serif estilo NYT, footnote de fonte, labels de valor cinéticos. Construído sobre o bloco HyperFrames `data-chart`.',
  },
  'hyperframes-flight-map-route': {
    title: 'HyperFrames: mapa de voo estilo Apple (origem → destino)',
    summary:
      'Mapa de rota aérea cinematográfico 16:9 de 8 segundos — zoom em terreno realista, avião animado em rota curva, cidades etiquetadas, contador de distância cinético. Construído sobre o bloco HyperFrames `nyc-paris-flight`, reutilizável para qualquer par de cidades.',
  },
  'hyperframes-logo-outro-cinematic': {
    title: 'HyperFrames: logo outro cinematográfico de 4 segundos',
    summary:
      'Logo outro 16:9 de 4 segundos — construção progressiva do wordmark com bloom, shimmer sweep sobre o lockup final, grain overlay suave, CTA em uma linha. Construído sobre os blocos HyperFrames `logo-outro`, `shimmer-sweep` e `grain-overlay`.',
  },
  'hyperframes-money-counter-hype': {
    title: 'HyperFrames: money counter hype $0 → $10K (9:16)',
    summary:
      'Clip hype vertical HyperFrames 1080×1920 de 6 segundos — contador estilo Apple de $0 a $10,000 com flash verde, partículas money-burst, ícone cash stack e kicker headline. Construído sobre o bloco HyperFrames `apple-money-count`.',
  },
  'weread-year-in-review-video-template': {
    title: 'Template de vídeo WeRead Year in Review',
    summary:
      'Template de vídeo HyperFrames 9:16 para relatórios anuais de leitura estilo WeRead: papel quente, tipografia chinesa editorial, transições de páginas, estatísticas de leitura, traços de notas, palavras-chave de interesse e card final de persona leitor.',
  },
  'hyperframes-product-reveal-minimal': {
    title: 'HyperFrames: product reveal minimal de 5 segundos',
    summary:
      'Composição HyperFrames de 5 segundos para product reveal de alto padrão — canvas dark, único acento quente, push-in title-card lento, linha kicker cinética, movimento contido. O agente renderiza o MP4 a partir de HTML+GSAP via Puppeteer; sem necessidade de stock footage.',
  },
  'hyperframes-saas-product-promo-30s': {
    title: 'HyperFrames: promo produto SaaS 30 segundos estilo Linear',
    summary:
      'Composição HyperFrames de 30 segundos inspirada nos filmes de produto Linear/ClickUp — reveals UI 3D, tipografia cinética beat-sync, screenshots UI animados, end-card com logo outro. Construída com blocos HF Catalog e transições shader.',
  },
  'hyperframes-social-overlay-stack': {
    title: 'HyperFrames: stack de overlays sociais 9:16 (X · Reddit · Spotify · Instagram)',
    summary:
      'Composição HyperFrames vertical 1080×1920 de 15 segundos empilhando quatro cards sociais animados sobre um loop face-cam — post X, reação Reddit, card Spotify Now Playing, e CTA Instagram follow.',
  },
  'hyperframes-tiktok-karaoke-talking-head': {
    title: 'HyperFrames: talking head TikTok 9:16 com legendas karaokê',
    summary:
      'Short vertical HyperFrames 1080×1920 — talking head narrado em TTS sobre loop face-cam, legendas palavra-a-palavra estilo karaokê, lower third animado e overlay follow TikTok no final.',
  },
  'hyperframes-website-to-video-promo': {
    title: 'HyperFrames: pipeline website-to-video (marketing cut 15 segundos)',
    summary:
      'Composição HyperFrames 16:9 de 15 segundos que captura um site live em três tamanhos de viewport e depois anima as cenas com split radial cromático.',
  },
  'hunched-character-animation': {
    title: 'Animação de personagem curvado',
    summary:
      'Instrução para Seedance 2 criar uma animação de caminhada no lugar a partir de uma referência de personagem precisa.',
  },
  'live-action-anime-adaptation-water-vs-thunder-breathing-duel': {
    title: 'Adaptação live-action anime: duelo respiração água vs trovoada',
    summary:
      'Prompt de 15 segundos muito detalhado para adaptação live-action de um duelo anime com efeitos de água azul e raios dourados.',
  },
  'luxury-supercar-cinematic-narrative': {
    title: 'Narração cinematográfica de supercar de luxo',
    summary:
      'Prompt cinematográfico multi-shot muito detalhado para Seedance 2.0 com homem estiloso, dobermans e supercar vintage em uma cena de montanha nebulosa.',
  },
  'magical-academy-storyboard-sequence': {
    title: 'Sequência storyboard de uma academia mágica',
    summary:
      'Prompt storyboard detalhado para uma sequência cinematográfica em torno de uma magical girl em uma academia, da chegada ao duelo mágico.',
  },
  'modern-rural-aesthetics-healing-short-film-video-prompt': {
    title: 'Curta-metragem healing em estética rural moderna',
    summary:
      'Prompt three-shot detalhado para Seedance 2.0 produzindo um curta-metragem healing cinematográfico em estética rural moderna.',
  },
  'nightclub-flyer-atmospheric-animation': {
    title: 'Animação atmosférica de flyer de balada',
    summary:
      'Prompt de animação sutil Seedance 2.0 que dá vida aos elementos de fundo e luz mantendo o sujeito principal fixo.',
  },
  'retro-hk-wuxia-film-aesthetic': {
    title: 'Estética filme wuxia HK retro',
    summary:
      'Prompt de vídeo complexo em múltiplas partes recriando a estética wuxia de Hong Kong dos anos 80/90 com transformação de gato em humano.',
  },
  'seedance-2-0-15-second-cinematic-japanese-romance-short-film': {
    title: 'Seedance 2.0: curta-metragem romance japonês cinematográfico de 15 segundos',
    summary:
      'Prompt multi-cena de 15 segundos muito detalhado para curta-metragem romance de ensino médio japonês cinematográfico e ultrarrealista.',
  },
  'seedance-2-0-80-year-old-rapper-mv': {
    title: 'Seedance 2.0: rapper de 80 anos em clipe',
    summary:
      'Prompt de 15 segundos detalhado para um clipe street rap horizontal 16:9 com uma mulher de 80 anos e tons neon violeta/azul frio.',
  },
  'sequence-and-movement-instruction-for-martial-arts-video': {
    title: 'Instrução de sequência e movimento para vídeo de artes marciais',
    summary:
      'Prompt de vídeo para Seedance 2.0 animando uma sequência a partir de um character sheet e enfatizando movimentos e estágios específicos.',
  },
  'soul-switching-mirror-magic-sequence': {
    title: 'Sequência de magia de espelho com troca de almas',
    summary:
      'Prompt de vídeo narrativo sobre um evento mágico de troca de almas diante de um espelho, com instruções de câmera e cues emocionais.',
  },
  'toaster-rocket-jumpscare': {
    title: 'Jumpscare de torradeira foguete',
    summary:
      'Prompt para um vídeo home-video realista de um senhor surpreso quando uma torradeira lança pão como um foguete.',
  },
  'traditional-dance-performance': {
    title: 'Performance de dança tradicional',
    summary:
      'Prompt Seedance 2.0 completo para uma dança tradicional graciosa baseada em imagens de referência de coreografia e identidade.',
  },
  'video-seedance-three-kingdoms-guanyu-slaying-yanliang': {},
  'video-seedance-three-kingdoms-lyubu-yuanmen-archery': {},
  'video-seedance-three-kingdoms-zhaoyun-cradle-escape': {},
  'vintage-disney-style-pirate-crocodile-animation': {
    title: 'Animação crocodilo pirata estilo Disney vintage',
    summary:
      'Prompt narrativo multi-cena para animação clássica vintage Disney com crocodilo pirata e pássaros piratas em um navio.',
  },
  'viral-k-pop-dance-choreography': {
    title: 'Coreografia K-pop viral',
    summary:
      'Prompt Seedance 2.0 detalhado fazendo um personagem dançar segundo uma coreografia baseada em um storyboard de referência em 16 panels.',
  },
  'wasteland-factory-chase': {
    title: 'Perseguição em uma fábrica wasteland',
    summary:
      'Prompt cinematográfico para cena wasteland desértica em alta velocidade com fábrica industrial andando sobre pernas e perseguição em rebel bike.',
  },
  'game-ui-ancient-china-open-world-mmo-hud': {
    title: 'Game UI - HUD MMO open-world China antiga',
    summary:
      'Gera um mockup screenshot HUD in-game para AAA open-world MMO na China antiga, estilo fotorrealista cinematográfico Black Myth: Wukong, centrado em uma espadachim em uma cena de montanha nebulosa com HUD MMO completo.',
  },
  'illustration-crayon-kid-drawing-rework': {
    title: 'Ilustração - Rework desenho infantil a giz de cera',
    summary:
      'Prompt de style transfer que transforma qualquer imagem de referência em ilustração a giz de cera desenhada à mão como por uma criança de 10 anos, com paleta luminosa e cenário infantil.',
  },
  'social-media-post-sensational-girl-dance-storyboard-8-shots': {
    title: 'Post em redes sociais - Storyboard dança de uma stylish girl (8 shots)',
    summary:
      'Set completo de prompts storyboard em 8 shots para gerar uma sequência de dança coerente, com style tokens globais, negative prompt reutilizável e oito planos individuais.',
  },
};
