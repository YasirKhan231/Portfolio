# Developer console portfolio

## Direction

A monochrome developer console with large outlined typography, a character-rendered sphere/torus, a project directory and preview, searchable command navigation, GitHub contributions, and readable work history. The copy stays personal and factual. There is no promotional hero, copied desktop layout, or pixel-window styling.

## Research and limits

X-focused searches were attempted for developer portfolios, terminal designs, bento layouts, and experimental work. Search results were sparse and direct access to Rauno's X profile returned 403; Paco's X page returned no readable posts. No claim is made about the most popular theme on X.

Accessible creator sources informed the direction:

- https://bruno-simon.com/ — an explorable 3D world with explicit interaction controls. Takeaway: make the portfolio itself an experiment, while keeping real project information accessible.
- https://rauno.me/ — craft, projects, and interaction-design work. Takeaway: make controls and details feel intentional.
- https://paco.me/ — personal project index and the command-menu project. Takeaway: fast keyboard navigation and direct access to content.

The implementation is original; no assets or page layouts were copied from these references.

## Controls

- Ctrl+K / Cmd+K or Jump to opens the searchable command menu.
- Arrow keys navigate command results; Enter follows a result and Escape closes the menu.
- Project directory entries select a preview. Previous/next controls browse all seven projects. Framework filters narrow the directory.
- Sphere and Torus change the character-rendered visual. The pause control stops animation. Reduced-motion preferences disable animation automatically. Rendering pauses while the visual or document is hidden and is capped near 11 frames per second.
- Native expandable sections preserve project notes, experience, and education details.

## Services

The GitHub calendar uses https://github-contributions-api.jogruber.de/v4/YasirKhan231 with period selection, loading, retry, and failure states. Service documentation: https://github.com/grubersjoe/github-contributions-api.

The contact form retains NEXT_PUBLIC_FORMSPREE_URL. Without it, visitors compose a draft in their email app and send it there themselves.

## Validation

Source formatting and Git whitespace checks only, following the requested workflow. No production build, database commands, or browser tests were run for this revision. Changes remain local and have not been pushed or deployed.

## Console polish

Refined hero spacing, outlined typography, ASCII display framing, social controls, browser-style project previews, website/source actions, and readable secondary text. Navigation highlights the visible section. Framework filtering keeps the preview within the selected results, and previous/next controls use that same filtered set. The mobile project directory is a horizontal strip. Source formatting and whitespace checks remain the only validation performed for this revision.
