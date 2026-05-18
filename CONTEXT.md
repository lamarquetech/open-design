# Open Design Context

## Glossary

### Home composer media surface

A Home-only composer intent that lets the prompt card expose media-specific defaults before project creation. The current media surfaces are `image`, `video`, `hyperframes`, and `audio`; they map onto the existing project kinds at submit time instead of extending the backend `ProjectKind` union.

### Chip rail

The row of intent chips below the Home prompt card. A chip chooses the composer surface, default scenario plugin, default option state, and project kind stamp before the user presses Run.

### HyperFrames composer surface

A standalone Home composer media surface shown between Video and Audio for HTML-based motion generation. It submits as `kind: "video"` with `videoModel: "hyperframes-html"` so persisted projects keep the existing video backend shape while the Home UI still gives HyperFrames its own entry point.

### Essential audio generation

A Home Audio entry workflow for the audio capabilities that the product can attempt directly in v1. It includes speech and sound effects, and excludes music until there is an integrated music generation path.

### Audio source field

The inline Home Audio option that provides the source content for generation. Speech uses a Text source because the content is spoken; sound effects use a Prompt source because the content describes a sound to synthesize.

### ElevenLabs fallback voice

The default voice option shown when the Home Audio composer cannot load configured ElevenLabs voices. It keeps ElevenLabs speech runnable by selecting the same default voice id the daemon uses when no explicit voice is supplied.
