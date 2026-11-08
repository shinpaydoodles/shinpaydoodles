import type { Project } from "../types/portfolio";

// Case-study facts and media provenance: docs/project-case-study-sources.md
export const additionalProjects: Project[] = [
  {
    "slug": "oddwise-out",
    "title": "Oddwise Out",
    "subtitle": "A multiplayer game that rewards uncommon answers",
    "role": "Full-Stack Developer",
    "date": "2026",
    "status": "In Development",
    "categories": [
      "Games",
      "Full Stack"
    ],
    "summary": "A competitive word game for 3–10 players where clever, uncommon answers beat obvious ones. Friends can play together on one shared phone or join from their own devices using a room code.",
    "technicalDescription": "I built a Next.js application with server-managed room state in Neon Postgres. Versioned updates protect concurrent actions, while curated answer banks provide predictable scoring. A host review flow handles unlisted answers, and optional dictionary enrichment broadens synonym rounds without making gameplay depend on a third-party response.",
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Neon Postgres"
    ],
    "additionalTechnologies": [
      "Tailwind CSS",
      "GSAP",
      "Vercel",
      "Dictionary API"
    ],
    "contributions": [
      "Built room creation, joining, readiness and host-controlled round progression",
      "Implemented hidden answers, rarity tiers, unique-answer bonuses and Double Down scoring",
      "Kept in-progress matches compatible with earlier prompt versions",
      "Designed single-screen game phases with swipeable reveals and compact sheets",
      "Added GSAP transitions with reduced-motion support",
      "Connected shared room state to Neon Postgres and deployed the app and API on Vercel"
    ],
    "features": [
      "One-device pass-and-play and multi-device rooms",
      "Six-character codes and invite links",
      "3–12 shuffled questions per match",
      "Timed private answers and animated reveals",
      "Curated rarity scoring and unique-answer bonuses",
      "Once-per-match Double Down",
      "Host review for unlisted answers",
      "Mobile player and leaderboard sheets"
    ],
    "technicalHighlights": [
      "Use optimistic version checks when writing shared room state to Postgres.",
      "Score recognized answers automatically and let the host assign rarity or reject unlisted answers.",
      "Fetch synonyms at room creation using fixed clue words; retain curated answers and host review as fallbacks."
    ],
    "caseStudy": {
      "challenge": "A party game needs to feel immediate on phones while keeping simultaneous answers private and scores consistent. It also needs a fair way to handle creative answers that are not in a predefined list.",
      "approach": "I built a Next.js application with server-managed room state in Neon Postgres. Versioned updates protect concurrent actions, while curated answer banks provide predictable scoring. A host review flow handles unlisted answers, and optional dictionary enrichment broadens synonym rounds without making gameplay depend on a third-party response.",
      "outcome": "The game is publicly deployed. The recorded November 4 build and live multiplayer smoke test passed, and the public landing page was checked again for this case study. Larger group playtests and answer-bank balancing remain ongoing.",
      "decisions": [
        "Versioned room updates",
        "Curated scoring with host judgment",
        "Optional dictionary enrichment"
      ],
      "overview": "A competitive word game for 3–10 players where clever, uncommon answers beat obvious ones. Friends can play together on one shared phone or join from their own devices using a room code. I built a Next.js application with server-managed room state in Neon Postgres. Versioned updates protect concurrent actions, while curated answer banks provide predictable scoring. A host review flow handles unlisted answers, and optional dictionary enrichment broadens synonym rounds without making gameplay depend on a third-party response.",
      "contributionGroups": [
        {
          "title": "Multiplayer and game rules",
          "items": [
            "Built room creation, joining, readiness and host-controlled round progression",
            "Implemented hidden answers, rarity tiers, unique-answer bonuses and Double Down scoring",
            "Kept in-progress matches compatible with earlier prompt versions"
          ]
        },
        {
          "title": "Mobile experience and delivery",
          "items": [
            "Designed single-screen game phases with swipeable reveals and compact sheets",
            "Added GSAP transitions with reduced-motion support",
            "Connected shared room state to Neon Postgres and deployed the app and API on Vercel"
          ]
        }
      ],
      "technicalDecisions": [
        {
          "title": "Versioned room updates",
          "problem": "Simultaneous player submissions could overwrite each other.",
          "solution": "Use optimistic version checks when writing shared room state to Postgres.",
          "impact": "Concurrent actions preserve the latest accepted state instead of blindly replacing it."
        },
        {
          "title": "Curated scoring with host judgment",
          "problem": "Valid creative answers cannot all be anticipated.",
          "solution": "Score recognized answers automatically and let the host assign rarity or reject unlisted answers.",
          "impact": "Players retain freedom to answer creatively.",
          "tradeoff": "Rarity is a designed party-game rule, not a measured global frequency."
        },
        {
          "title": "Optional dictionary enrichment",
          "problem": "A dictionary outage should not stop a match.",
          "solution": "Fetch synonyms at room creation using fixed clue words; retain curated answers and host review as fallbacks.",
          "impact": "External lookup failures do not block gameplay or disclose player answers."
        }
      ],
      "developmentChallenges": [
        {
          "title": "Compact phone gameplay",
          "description": "Long answer reveals and leaderboards competed for limited screen space. Swipeable answer cards and expandable sheets keep the main action visible."
        },
        {
          "title": "Content changes during active matches",
          "description": "Prompt updates must not invalidate rooms already in progress. Older prompt definitions remain available for those matches."
        }
      ],
      "learnings": [
        "Designing state transitions for concurrent multiplayer actions",
        "Balancing automatic rules with human moderation",
        "Building animated interfaces that respect reduced motion"
      ],
      "nextSteps": [
        "Run sessions with 3–10 players across both device modes",
        "Refine answer tiers from playtest feedback",
        "Review room lifecycle and production behavior as usage grows"
      ],
      "note": "Live and actively iterating. Rarity tiers are curated, and the host adjudicates unlisted answers. Historical test results describe the recorded build rather than a guarantee for every device."
    },
    "liveUrl": "https://oddwise-out.vercel.app",
    "media": [
      {
        "src": "/projects/oddwise-out/website.webp",
        "alt": "Oddwise Out — Live website: room creation and game introduction",
        "caption": "Live website: room creation and game introduction"
      }
    ],
    "previewLabel": "Project visuals"
  },
  {
    "slug": "forge-studio",
    "title": "Forge Studio",
    "subtitle": "A local-first workspace for AI-assisted development",
    "role": "Desktop / Full-Stack Developer",
    "date": "2026",
    "status": "In Development",
    "categories": [
      "Developer Tools",
      "Desktop",
      "AI"
    ],
    "summary": "A Windows desktop workspace that brings local projects, AI coding tasks, Markdown knowledge, Git inspection and tool connections into one place, with persistent task history and explicit review steps.",
    "technicalDescription": "I used a Tauri shell around a React interface and a Node.js loopback service. SQLite stores project and task state. The agent workflow distinguishes immediate manual tasks from assisted tasks that present a plan before execution. Markdown edits are reviewed before application, and filesystem operations resolve real paths to enforce the selected knowledge-folder boundary.",
    "technologies": [
      "Tauri",
      "React",
      "TypeScript",
      "Node.js",
      "SQLite"
    ],
    "additionalTechnologies": [
      "Rust",
      "Vite",
      "Codex App Server",
      "Claude Agent SDK",
      "Model Context Protocol",
      "Git"
    ],
    "contributions": [
      "Separated the Tauri shell, React interface and local TypeScript runtime",
      "Persisted projects, tasks, events and decisions in SQLite",
      "Packaged the runtime with a Windows NSIS installer",
      "Integrated Codex App Server manual and assisted tasks with plan approval and rejection",
      "Added streamed responses, task stopping and persisted history",
      "Built Markdown search, read and reviewed edit flows",
      "Added read-only Git inspection",
      "Implemented MCP stdio connection, tool discovery and stored permissions",
      "Prepared a Claude Agent SDK adapter with explicit configuration requirements"
    ],
    "features": [
      "Import existing local project folders",
      "Manual and plan-first assisted Codex tasks",
      "Streaming task events, Stop and outcome review",
      "Persistent projects, tasks and decisions",
      "Search and read Markdown knowledge",
      "Preview and apply reviewed note changes",
      "Inspect Git branch, status and diff",
      "Discover local MCP tools and store project permissions"
    ],
    "technicalHighlights": [
      "Store projects, task events and decisions in SQLite behind a loopback API.",
      "Separate note reading, edit proposal, human review and filesystem application.",
      "Expose MCP discovery and persist per-project permissions while leaving tool invocation for a later milestone."
    ],
    "caseStudy": {
      "challenge": "AI development work was spread across terminals, project folders, notes and Git tools. The challenge was to bring that context together without hiding what an agent was doing or treating every proposed edit as approved.",
      "approach": "I used a Tauri shell around a React interface and a Node.js loopback service. SQLite stores project and task state. The agent workflow distinguishes immediate manual tasks from assisted tasks that present a plan before execution. Markdown edits are reviewed before application, and filesystem operations resolve real paths to enforce the selected knowledge-folder boundary.",
      "outcome": "The development record documents working Codex manual and assisted turns, stop/review flows, task reload, Markdown editing and MCP discovery. A Windows installer was built and locally installed; packaged native UI and clean-machine checks remain the next delivery milestone.",
      "decisions": [
        "Local runtime with durable history",
        "Review before applying knowledge edits",
        "Discovery before tool execution"
      ],
      "overview": "A Windows desktop workspace that brings local projects, AI coding tasks, Markdown knowledge, Git inspection and tool connections into one place, with persistent task history and explicit review steps. I used a Tauri shell around a React interface and a Node.js loopback service. SQLite stores project and task state. The agent workflow distinguishes immediate manual tasks from assisted tasks that present a plan before execution. Markdown edits are reviewed before application, and filesystem operations resolve real paths to enforce the selected knowledge-folder boundary.",
      "contributionGroups": [
        {
          "title": "Desktop architecture",
          "items": [
            "Separated the Tauri shell, React interface and local TypeScript runtime",
            "Persisted projects, tasks, events and decisions in SQLite",
            "Packaged the runtime with a Windows NSIS installer"
          ]
        },
        {
          "title": "Agent and knowledge workflows",
          "items": [
            "Integrated Codex App Server manual and assisted tasks with plan approval and rejection",
            "Added streamed responses, task stopping and persisted history",
            "Built Markdown search, read and reviewed edit flows"
          ]
        },
        {
          "title": "Local integrations",
          "items": [
            "Added read-only Git inspection",
            "Implemented MCP stdio connection, tool discovery and stored permissions",
            "Prepared a Claude Agent SDK adapter with explicit configuration requirements"
          ]
        }
      ],
      "technicalDecisions": [
        {
          "title": "Local runtime with durable history",
          "problem": "Task context should survive closing and reopening the app.",
          "solution": "Store projects, task events and decisions in SQLite behind a loopback API.",
          "impact": "Work can be reviewed after the original task session ends."
        },
        {
          "title": "Review before applying knowledge edits",
          "problem": "An AI-proposed note change may not reflect the intended project decision.",
          "solution": "Separate note reading, edit proposal, human review and filesystem application.",
          "impact": "The user can inspect a change before it modifies project knowledge."
        },
        {
          "title": "Discovery before tool execution",
          "problem": "Connecting a tool server should not silently authorize arbitrary tool calls.",
          "solution": "Expose MCP discovery and persist per-project permissions while leaving tool invocation for a later milestone.",
          "impact": "The current capability boundary is explicit rather than implied by the connection UI."
        }
      ],
      "developmentChallenges": [
        {
          "title": "Desktop packaging",
          "description": "Bundling a Node runtime with a Tauri application adds process startup and lifecycle concerns beyond a browser-only app. Local packaging succeeded, but clean-machine verification remains necessary."
        },
        {
          "title": "Filesystem boundaries",
          "description": "Markdown operations need to reject traversal and junction escapes. The runtime checks canonical paths rather than trusting a user-supplied relative path."
        }
      ],
      "learnings": [
        "Coordinating desktop, local server and agent lifecycles",
        "Persisting reviewable task histories",
        "Separating integration discovery from execution permissions"
      ],
      "nextSteps": [
        "Verify native UI and startup on a clean Windows machine",
        "Add permissioned MCP tool invocation",
        "Complete live Claude and Codex command/file approval checks"
      ],
      "note": "This is a development-stage desktop application, not a hosted service. MCP discovery works, but MCP tool calls and live Roblox/Blender integrations are not implemented. The Claude adapter still requires live-key verification. Agent isolation is not a hardened sandbox."
    },
    "media": [
      {
        "src": "/projects/forge-studio/workspace.webp",
        "alt": "Forge Studio — Local development interface: new workspace with no project imported",
        "caption": "Local development interface: new workspace with no project imported"
      }
    ],
    "previewLabel": "Project visuals"
  },
  {
    "slug": "manhunt",
    "title": "MANHUNT",
    "subtitle": "Real-world hide-and-seek with server-controlled game rules",
    "role": "Full-Stack Developer",
    "date": "2026",
    "status": "In Development",
    "categories": [
      "Games",
      "Full Stack"
    ],
    "summary": "An outdoor multiplayer web game for 4–15 players. A host assembles the group, a random hunter is revealed, and runners try to stay hidden while brief GPS pulses and host-reviewed reports drive the chase.",
    "technicalDescription": "I built the React/Vinext interface around a Cloudflare Worker and D1-backed game state. The server owns role selection, timers and authorized transitions. It sends current coordinates only to hunter sessions during a three-second pulse each minute, preceded by a warning. Visibility and connectivity incidents are flagged for a human host instead of causing automatic disqualification.",
    "technologies": [
      "React",
      "TypeScript",
      "Vinext",
      "Cloudflare Workers",
      "Cloudflare D1"
    ],
    "additionalTechnologies": [
      "Vite",
      "Drizzle ORM",
      "Tailwind CSS",
      "Leaflet",
      "OpenStreetMap",
      "jsQR",
      "QRCode",
      "Geolocation API"
    ],
    "contributions": [
      "Implemented server-selected hunters, timed phases and win conditions",
      "Validated actions against player roles and current game phase",
      "Used versioned writes to protect concurrent joins and actions",
      "Built QR invites, camera scanning and room-code entry",
      "Rendered anonymous map pulses only for authorized hunter sessions",
      "Added location freshness checks, visibility alerts and host review of incidents"
    ],
    "features": [
      "Host or join with a six-character code or camera-scanned QR",
      "Callsigns, ready checks and location consent",
      "Random hunter reveal and 30-second hiding countdown",
      "Configurable 5–120 minute hunts",
      "Hunter-only anonymous GPS pulses",
      "Host-confirmed eliminations and found reports",
      "Recruitment power-up for groups of eight or more",
      "Connectivity notices and best-effort screen wake lock"
    ],
    "technicalHighlights": [
      "Validate game actions and phase timing in the server-side engine.",
      "Release fresh anonymous coordinates only to hunter sessions during the pulse window.",
      "Report visibility/connectivity incidents to the host and require deliberate elimination."
    ],
    "caseStudy": {
      "challenge": "Outdoor hide-and-seek needs a shared referee and occasional location clues, but continuously exposing every runner would ruin the game. Mobile browsers also cannot reliably prove that a participant switched off a phone.",
      "approach": "I built the React/Vinext interface around a Cloudflare Worker and D1-backed game state. The server owns role selection, timers and authorized transitions. It sends current coordinates only to hunter sessions during a three-second pulse each minute, preceded by a warning. Visibility and connectivity incidents are flagged for a human host instead of causing automatic disqualification.",
      "outcome": "The app is publicly deployed. The build record reports nine rule tests and an eight-player HTTP integration test passing, including concurrent joins, authorization and GPS redaction. The public landing page was visually checked for this case study; real-phone camera and GPS field playtests remain open.",
      "decisions": [
        "Server-authoritative phases",
        "Short, role-limited location pulses",
        "Human review of connection incidents"
      ],
      "overview": "An outdoor multiplayer web game for 4–15 players. A host assembles the group, a random hunter is revealed, and runners try to stay hidden while brief GPS pulses and host-reviewed reports drive the chase. I built the React/Vinext interface around a Cloudflare Worker and D1-backed game state. The server owns role selection, timers and authorized transitions. It sends current coordinates only to hunter sessions during a three-second pulse each minute, preceded by a warning. Visibility and connectivity incidents are flagged for a human host instead of causing automatic disqualification.",
      "contributionGroups": [
        {
          "title": "Game engine and authority",
          "items": [
            "Implemented server-selected hunters, timed phases and win conditions",
            "Validated actions against player roles and current game phase",
            "Used versioned writes to protect concurrent joins and actions"
          ]
        },
        {
          "title": "Field interface and location",
          "items": [
            "Built QR invites, camera scanning and room-code entry",
            "Rendered anonymous map pulses only for authorized hunter sessions",
            "Added location freshness checks, visibility alerts and host review of incidents"
          ]
        }
      ],
      "technicalDecisions": [
        {
          "title": "Server-authoritative phases",
          "problem": "Clients should not choose their own roles or bypass the countdown.",
          "solution": "Validate game actions and phase timing in the server-side engine.",
          "impact": "All participants share one accepted game state."
        },
        {
          "title": "Short, role-limited location pulses",
          "problem": "Continuous tracking would expose runners unnecessarily.",
          "solution": "Release fresh anonymous coordinates only to hunter sessions during the pulse window.",
          "impact": "Location clues become a bounded game mechanic.",
          "tradeoff": "GPS is approximate and spoofable; this is a casual game, not an anti-cheat platform."
        },
        {
          "title": "Human review of connection incidents",
          "problem": "A hidden page or missed heartbeat does not prove intentional cheating.",
          "solution": "Report visibility/connectivity incidents to the host and require deliberate elimination.",
          "impact": "Temporary network issues do not automatically eject a player."
        }
      ],
      "developmentChallenges": [
        {
          "title": "Concurrent room activity",
          "description": "Several players can join, ready up or report events together. Compare-and-swap version checks prevent one update from silently overwriting another."
        },
        {
          "title": "Browser limits in the field",
          "description": "Location, camera and wake-lock behavior vary by browser and device. The interface explains permission and connectivity requirements, with real-phone validation still needed."
        }
      ],
      "learnings": [
        "Designing role-scoped location responses",
        "Combining timed game rules with human moderation",
        "Accounting for browser lifecycle and mobile connectivity"
      ],
      "nextSteps": [
        "Playtest camera scanning and GPS outdoors on real phones",
        "Check behavior during backgrounding and signal loss",
        "Explore host migration and improved session recovery"
      ],
      "note": "Everyone needs internet, HTTPS and location permission. Found reports are structured buttons, not voice chat. The host must remain connected; host migration is not implemented. Closing a tab can lose that player’s session."
    },
    "liveUrl": "https://manhunt-fieldgame-lb.luismiguelbenico.chatgpt.site",
    "media": [
      {
        "src": "/projects/manhunt/website.webp",
        "alt": "MANHUNT — Live website: outdoor game introduction and host/join options",
        "caption": "Live website: outdoor game introduction and host/join options"
      }
    ],
    "previewLabel": "Project visuals"
  },
  {
    "slug": "secret-randomizer",
    "title": "Secret Randomizer",
    "subtitle": "Private matching with a one-time animated reveal",
    "role": "Full-Stack Developer",
    "date": "2026",
    "status": "In Development",
    "categories": [
      "Full Stack",
      "Backend"
    ],
    "summary": "A private name-drawing application for gift exchanges and small groups. Organizers configure 2–20 participants and matching rules, then share individual invitations that reveal one permanent assignment through an animated wheel.",
    "technicalDescription": "I separated assignment generation from the reveal animation. The server creates a randomized perfect matching once and commits it transactionally; the wheel displays that stored result. Organizer authentication, database authorization, token hashes, origin checks and rate limits protect the API. Participant recovery uses a short-lived HttpOnly cookie rather than exposing an entire room’s assignment list.",
    "technologies": [
      "React",
      "TypeScript",
      "Vite",
      "PostgreSQL",
      "Supabase"
    ],
    "additionalTechnologies": [
      "Tailwind CSS",
      "Motion",
      "React Hook Form",
      "Zod",
      "Vitest",
      "Playwright",
      "PGlite",
      "Vercel Functions (deployment target)"
    ],
    "contributions": [
      "Implemented randomized perfect matching with fixed and forbidden pairs",
      "Rejected impossible or conflicting constraints before locking a room",
      "Used database transactions, row locks and uniqueness constraints to prevent duplicate assignments",
      "Created secure invitations using hashed high-entropy tokens",
      "Added token rotation, replay handling and short-lived recovery cookies",
      "Built the animated wheel, private result page and organizer progress view",
      "Covered the service, SQL rules, HTTP security and UI in automated tests",
      "Exercised the real transactional service against multi-connection PostgreSQL",
      "Tested desktop Chromium and iPhone WebKit reveal flows"
    ],
    "features": [
      "Organizer authentication integration and room wizard",
      "Fixed and forbidden matching rules",
      "Server-generated immutable assignments",
      "Private invitation links and token rotation",
      "One-time wheel reveal with reduced-motion support",
      "Short-lived refresh recovery",
      "Participant progress dashboard",
      "Close and archive room actions"
    ],
    "technicalHighlights": [
      "Generate and store a permanent server-side assignment before revealing it.",
      "Solve the constrained assignment as a randomized perfect matching and reject impossible rule sets.",
      "Use row locking, uniqueness constraints, hashed invitation tokens and a 15-minute recovery session."
    ],
    "caseStudy": {
      "challenge": "A cheerful spinning wheel hides a difficult backend problem: every participant needs one valid, private match, restrictions must be honored, and refreshes or simultaneous claims must never create a reroll.",
      "approach": "I separated assignment generation from the reveal animation. The server creates a randomized perfect matching once and commits it transactionally; the wheel displays that stored result. Organizer authentication, database authorization, token hashes, origin checks and rate limits protect the API. Participant recovery uses a short-lived HttpOnly cookie rather than exposing an entire room’s assignment list.",
      "outcome": "Local verification on November 6 recorded 26 unit/integration/component tests and four browser tests passing. A PostgreSQL race test sent 20 simultaneous lock requests and 400 claims: one draw, 20 claims and 20 unique recipients resulted. TypeScript, lint and the production build passed. Hosting remains pending.",
      "decisions": [
        "Match first, animate second",
        "Perfect matching instead of a greedy draw",
        "Transactional claims and limited recovery"
      ],
      "overview": "A private name-drawing application for gift exchanges and small groups. Organizers configure 2–20 participants and matching rules, then share individual invitations that reveal one permanent assignment through an animated wheel. I separated assignment generation from the reveal animation. The server creates a randomized perfect matching once and commits it transactionally; the wheel displays that stored result. Organizer authentication, database authorization, token hashes, origin checks and rate limits protect the API. Participant recovery uses a short-lived HttpOnly cookie rather than exposing an entire room’s assignment list.",
      "contributionGroups": [
        {
          "title": "Matching and transaction design",
          "items": [
            "Implemented randomized perfect matching with fixed and forbidden pairs",
            "Rejected impossible or conflicting constraints before locking a room",
            "Used database transactions, row locks and uniqueness constraints to prevent duplicate assignments"
          ]
        },
        {
          "title": "Privacy and participant experience",
          "items": [
            "Created secure invitations using hashed high-entropy tokens",
            "Added token rotation, replay handling and short-lived recovery cookies",
            "Built the animated wheel, private result page and organizer progress view"
          ]
        },
        {
          "title": "Verification",
          "items": [
            "Covered the service, SQL rules, HTTP security and UI in automated tests",
            "Exercised the real transactional service against multi-connection PostgreSQL",
            "Tested desktop Chromium and iPhone WebKit reveal flows"
          ]
        }
      ],
      "technicalDecisions": [
        {
          "title": "Match first, animate second",
          "problem": "Client-side spins could create inconsistent or repeat results.",
          "solution": "Generate and store a permanent server-side assignment before revealing it.",
          "impact": "Refreshes and animations cannot change the accepted match."
        },
        {
          "title": "Perfect matching instead of a greedy draw",
          "problem": "A locally valid early choice can leave the last participant without an allowed match.",
          "solution": "Solve the constrained assignment as a randomized perfect matching and reject impossible rule sets.",
          "impact": "Every accepted draw satisfies the room’s configured constraints."
        },
        {
          "title": "Transactional claims and limited recovery",
          "problem": "Repeated requests could double-claim links or leak a result into a fresh browser.",
          "solution": "Use row locking, uniqueness constraints, hashed invitation tokens and a 15-minute recovery session.",
          "impact": "Concurrent claims remain consistent and recovery is time-bounded."
        }
      ],
      "developmentChallenges": [
        {
          "title": "Proving concurrency behavior",
          "description": "An embedded database test alone cannot establish multi-connection row-lock behavior. A separate PostgreSQL harness exercised the real service with concurrent lock and claim requests."
        },
        {
          "title": "Separating test identity from hosted auth",
          "description": "Browser tests used an isolated test identity fixture. The case study keeps that separate from live Supabase email, JWT and registration verification."
        }
      ],
      "learnings": [
        "Modeling constrained assignments as a matching problem",
        "Testing database invariants under concurrency",
        "Building a playful interface around strict privacy rules"
      ],
      "nextSteps": [
        "Provision an active dedicated Supabase project and apply migrations",
        "Verify hosted authentication and email flows",
        "Publish source and verify Vercel serverless deployment"
      ],
      "note": "Locally implemented and tested; no production URL is available. Screenshots show the local interface. Hosted Supabase authentication and Vercel execution have not been verified; the browser tests used test-only authentication."
    },
    "media": [
      {
        "src": "/projects/secret-randomizer/landing.webp",
        "alt": "Secret Randomizer — Local application: landing page and wheel illustration",
        "caption": "Local application: landing page and wheel illustration"
      }
    ],
    "previewLabel": "Project visuals"
  },
  {
    "slug": "steal-a-slime",
    "title": "Steal a Slime",
    "subtitle": "Biome creatures, reactive guardians and a theft-and-escape loop",
    "role": "Game Developer / 3D Asset Workflow",
    "date": "2026",
    "status": "Prototype / Iterated Project",
    "categories": [
      "Games",
      "3D"
    ],
    "summary": "A Roblox game prototype built around stealing a slime from its nest and escaping a biome guardian. The project combines server-controlled carrying and recovery behavior with a themed Blender asset collection across seven biomes.",
    "technicalDescription": "I used server-side Luau to own pickup state, carrier identity and each slime’s original nest transform. The Jungle guardian targets one carrier and queues additional thefts, while state attributes expose the loop for debugging. Blender assets and previews establish each biome’s visual identity, with import and validation records kept alongside the game documentation.",
    "technologies": [
      "Roblox Studio",
      "Luau",
      "Blender"
    ],
    "additionalTechnologies": [
      "Python",
      "Roblox ProximityPrompt",
      "Roblox Attributes",
      "FBX asset workflow"
    ],
    "contributions": [
      "Implemented five Jungle slime pickups and Rootwarden’s theft-response loop",
      "Attached carried slimes above the player and tracked server-owned theft state",
      "Added knockback, dropped-slime retrieval, return-to-nest and boundary escape behavior",
      "Placed 51 additional slimes with matching nests across six other biomes",
      "Connected six additional guardians to chase, attack and retrieval behavior",
      "Organized Blender previews, creature rosters, nests, weapons and export validation notes"
    ],
    "features": [
      "Server-controlled slime pickup and carrying",
      "Original-nest tracking and recovery",
      "Guardian alert, chase, attack and return states",
      "Jungle boundary escape behavior",
      "Queued theft targeting for the Jungle guardian",
      "Seven themed biome asset collections",
      "Slime nests, guardians, gears and biome swords",
      "Blender reference and validation galleries"
    ],
    "technicalHighlights": [
      "Track carrier identity, theft state and original nest transforms on the server.",
      "Expose theft, carrier and guardian state through Roblox Attributes.",
      "Keep rendered asset galleries separate from Studio playtest records."
    ],
    "caseStudy": {
      "challenge": "The core interaction must be understandable without a long tutorial: pick up a creature, attract its guardian, then escape or watch the guardian recover it. The same loop also needs to work across many individually placed nests and themed assets.",
      "approach": "I used server-side Luau to own pickup state, carrier identity and each slime’s original nest transform. The Jungle guardian targets one carrier and queues additional thefts, while state attributes expose the loop for debugging. Blender assets and previews establish each biome’s visual identity, with import and validation records kept alongside the game documentation.",
      "outcome": "Studio Play reports verified Jungle pickup, knockback, retrieval, return and boundary escape. The six-biome expansion added 51 slimes and matching nests; one theft per biome was tested with all six guardians chasing, attacking and returning the dropped slime. This remains a prototype rather than a published complete game.",
      "decisions": [
        "Server-owned theft state",
        "Inspectable guardian states",
        "Asset and gameplay evidence stay distinct"
      ],
      "overview": "A Roblox game prototype built around stealing a slime from its nest and escaping a biome guardian. The project combines server-controlled carrying and recovery behavior with a themed Blender asset collection across seven biomes. I used server-side Luau to own pickup state, carrier identity and each slime’s original nest transform. The Jungle guardian targets one carrier and queues additional thefts, while state attributes expose the loop for debugging. Blender assets and previews establish each biome’s visual identity, with import and validation records kept alongside the game documentation.",
      "contributionGroups": [
        {
          "title": "Gameplay prototype",
          "items": [
            "Implemented five Jungle slime pickups and Rootwarden’s theft-response loop",
            "Attached carried slimes above the player and tracked server-owned theft state",
            "Added knockback, dropped-slime retrieval, return-to-nest and boundary escape behavior"
          ]
        },
        {
          "title": "Biome expansion and assets",
          "items": [
            "Placed 51 additional slimes with matching nests across six other biomes",
            "Connected six additional guardians to chase, attack and retrieval behavior",
            "Organized Blender previews, creature rosters, nests, weapons and export validation notes"
          ]
        }
      ],
      "technicalDecisions": [
        {
          "title": "Server-owned theft state",
          "problem": "Client-controlled pickups could disagree about who owns or carries a slime.",
          "solution": "Track carrier identity, theft state and original nest transforms on the server.",
          "impact": "Pickup, drop and recovery share one authoritative state."
        },
        {
          "title": "Inspectable guardian states",
          "problem": "A reactive NPC loop is hard to tune when transitions are invisible.",
          "solution": "Expose theft, carrier and guardian state through Roblox Attributes.",
          "impact": "Studio inspection makes chase and recovery behavior easier to diagnose."
        },
        {
          "title": "Asset and gameplay evidence stay distinct",
          "problem": "A successful Blender export does not prove a working Roblox interaction.",
          "solution": "Keep rendered asset galleries separate from Studio playtest records.",
          "impact": "The portfolio shows both visual work and the limits of runtime verification."
        }
      ],
      "developmentChallenges": [
        {
          "title": "Returning the correct creature",
          "description": "Each guardian must retrieve a dropped slime and restore it to its own nest. Recording the original transform ties recovery to the actual placed instance."
        },
        {
          "title": "Prototype movement limitations",
          "description": "Rootwarden currently slides toward its target and can pass through decorations. Navigation and obstacle handling need another gameplay pass."
        }
      ],
      "learnings": [
        "Coordinating NPC state with player-carried objects",
        "Maintaining a repeatable Blender-to-Roblox asset workflow",
        "Using visible state and focused playtests to diagnose interactions"
      ],
      "nextSteps": [
        "Playtest simultaneous thefts and player disconnects",
        "Verify complete nest-to-exit escape runs",
        "Improve obstacle handling and movement",
        "Validate persistence and public multiplayer behavior"
      ],
      "note": "The gallery contains Blender asset previews from the project vault, not in-game screenshots. The documented collection has 56 normal slimes and seven bosses; the tested placed runtime slice contains five Jungle slimes plus 51 elsewhere. Persistence and multiplayer contention remain unverified."
    },
    "media": [
      {
        "src": "/projects/steal-a-slime/slime-collection.webp",
        "alt": "Steal a Slime — Blender preview: original biome slime collection",
        "caption": "Blender preview: original biome slime collection"
      },
      {
        "src": "/projects/steal-a-slime/guardians.webp",
        "alt": "Steal a Slime — Blender preview: biome guardians",
        "caption": "Blender preview: biome guardians"
      },
      {
        "src": "/projects/steal-a-slime/expansion.webp",
        "alt": "Steal a Slime — Blender preview: Cyberwave, Aquatic and Arcade expansion",
        "caption": "Blender preview: Cyberwave, Aquatic and Arcade expansion"
      },
      {
        "src": "/projects/steal-a-slime/rootwarden.webp",
        "alt": "Steal a Slime — Blender review: Rootwarden guardian",
        "caption": "Blender review: Rootwarden guardian"
      }
    ],
    "previewLabel": "Blender asset gallery"
  },
  {
    "slug": "mahal-kong-radyo",
    "title": "Mahal kong radyo",
    "subtitle": "A simple Android radio companion for an older listener",
    "role": "Mobile Developer",
    "date": "2026",
    "status": "In Development",
    "categories": [
      "Mobile"
    ],
    "summary": "An Android internet-radio app designed around large readable controls and familiar Philippine stations. It keeps favorites, recent stations and preferences on the device, without accounts, app advertising or a backend.",
    "technicalDescription": "I built an Expo/React Native application with a single audio player and local state persistence. The UI uses large touch targets and wrapping labels. A local Kotlin module attaches a sleep timer to the existing player using Android elapsed realtime, while JavaScript handles visible playback states and explicit retries. Station metadata stays in a curated local catalog.",
    "technologies": [
      "React Native",
      "Expo",
      "TypeScript",
      "Kotlin"
    ],
    "additionalTechnologies": [
      "Expo Router",
      "Expo Audio",
      "Zustand",
      "AsyncStorage",
      "Zod",
      "Android Media3",
      "EAS Build"
    ],
    "contributions": [
      "Built Stations, Favorites, recent history and settings around large labeled controls",
      "Used wrapping text, flexible heights and visible actions instead of hidden gestures",
      "Stored favorites and preferences locally with validation and serialized writes",
      "Managed one active player with stream replacement and stale-callback handling",
      "Added explicit reconnect behavior and connection/buffering timeouts",
      "Implemented a local Kotlin timer module against the existing Expo Audio player",
      "Maintained source and reachability records for station streams",
      "Built an EAS development APK after resolving native audio dependency linking",
      "Kept the final scope focused on personal use rather than a Play Store launch"
    ],
    "features": [
      "17 enabled official-source radio stations",
      "Station search and category filtering",
      "Local favorites and listening history",
      "Large labeled playback controls",
      "Adjustable text sizing and uncapped system font scaling",
      "Explicit offline, buffering and retry states",
      "15-, 30- and 60-minute sleep timer options",
      "Lock-screen playback integration"
    ],
    "technicalHighlights": [
      "Persist favorites, recent stations and preferences locally with AsyncStorage.",
      "Attach a Kotlin timer to the existing Expo Audio player using elapsed realtime.",
      "Release failed playback and offer a clear Retry action rather than silently restarting."
    ],
    "caseStudy": {
      "challenge": "An older listener needs a radio app that feels predictable: clear station names, large Play controls, readable text and obvious recovery when a stream fails. Background audio and sleep expiry also require more than a JavaScript countdown.",
      "approach": "I built an Expo/React Native application with a single audio player and local state persistence. The UI uses large touch targets and wrapping labels. A local Kotlin module attaches a sleep timer to the existing player using Android elapsed realtime, while JavaScript handles visible playback states and explicit retries. Station metadata stays in a curated local catalog.",
      "outcome": "The current README records 17 enabled stations and user-confirmed playback on an emulator and an Android phone. An EAS development APK was built. The project is intended for personal use; a standalone personal APK and remaining background/audio-accessibility checks are still follow-up work.",
      "decisions": [
        "Local data, no account",
        "One player with native timer integration",
        "Explicit recovery after failure"
      ],
      "overview": "An Android internet-radio app designed around large readable controls and familiar Philippine stations. It keeps favorites, recent stations and preferences on the device, without accounts, app advertising or a backend. I built an Expo/React Native application with a single audio player and local state persistence. The UI uses large touch targets and wrapping labels. A local Kotlin module attaches a sleep timer to the existing player using Android elapsed realtime, while JavaScript handles visible playback states and explicit retries. Station metadata stays in a curated local catalog.",
      "contributionGroups": [
        {
          "title": "Listener-first interface",
          "items": [
            "Built Stations, Favorites, recent history and settings around large labeled controls",
            "Used wrapping text, flexible heights and visible actions instead of hidden gestures",
            "Stored favorites and preferences locally with validation and serialized writes"
          ]
        },
        {
          "title": "Audio lifecycle and Android integration",
          "items": [
            "Managed one active player with stream replacement and stale-callback handling",
            "Added explicit reconnect behavior and connection/buffering timeouts",
            "Implemented a local Kotlin timer module against the existing Expo Audio player"
          ]
        },
        {
          "title": "Station curation and delivery",
          "items": [
            "Maintained source and reachability records for station streams",
            "Built an EAS development APK after resolving native audio dependency linking",
            "Kept the final scope focused on personal use rather than a Play Store launch"
          ]
        }
      ],
      "technicalDecisions": [
        {
          "title": "Local data, no account",
          "problem": "A personal radio app should not require sign-in or remote profile storage.",
          "solution": "Persist favorites, recent stations and preferences locally with AsyncStorage.",
          "impact": "The core experience works without an application backend.",
          "tradeoff": "Clearing app storage or uninstalling removes saved preferences."
        },
        {
          "title": "One player with native timer integration",
          "problem": "A second playback instance or suspended JavaScript could undermine sleep behavior.",
          "solution": "Attach a Kotlin timer to the existing Expo Audio player using elapsed realtime.",
          "impact": "The timer can stop the actual active player.",
          "tradeoff": "Locked-screen expiry and OEM behavior still require device verification."
        },
        {
          "title": "Explicit recovery after failure",
          "problem": "Automatically restarting a stream after connectivity returns can surprise the listener.",
          "solution": "Release failed playback and offer a clear Retry action rather than silently restarting.",
          "impact": "Playback recovery stays deliberate and understandable."
        }
      ],
      "developmentChallenges": [
        {
          "title": "Native dependency linking",
          "description": "The first cloud build failed when the timer referenced Expo Audio as a direct Gradle project. Using Expo’s dependency resolver supported the precompiled Audio library and allowed the replacement build to finish."
        },
        {
          "title": "Accessibility beyond font size",
          "description": "Large system text can break fixed-height layouts. Controls use minimum sizes, wrapping labels and scrolling content, with TalkBack and device-scale checks still pending."
        }
      ],
      "learnings": [
        "Designing for a specific listener’s needs",
        "Managing audio state across network and app lifecycle changes",
        "Bridging Expo Audio with a small native Android module"
      ],
      "nextSteps": [
        "Build and test the standalone personal APK",
        "Verify screen-off sleep expiry and background playback",
        "Check TalkBack, large text, Bluetooth and interruption behavior",
        "Maintain station endpoints as broadcasters change streams"
      ],
      "note": "Personal Android application; no web demo or Play Store listing is claimed. Playback confirmation does not establish background reliability or audited accessibility. The gallery uses the project’s radio-heart branding artwork, not a device screenshot."
    },
    "media": [
      {
        "src": "/projects/mahal-kong-radyo/radio-heart.webp",
        "alt": "Mahal kong radyo — Radio-heart app branding artwork; not a device screenshot",
        "caption": "Radio-heart app branding artwork; not a device screenshot"
      }
    ],
    "previewLabel": "Project visuals"
  }
];
