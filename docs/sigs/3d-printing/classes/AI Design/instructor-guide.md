# Instructor Guide: AI Design

## Audience

Attendees who are curious about using AI to support 3D printing design work.

## Key Points

- AI is useful for brainstorming, checklists, simple scripts, and explaining CAD concepts.
- AI should not be trusted blindly for load-bearing parts, safety-critical parts, or exact fit.
- Good prompts include measurements, use case, material, printer limits, and constraints.
- Generated files still need human review in CAD and slicer software.
- AI-generated visual concepts are not the same as printable models.

## Demo Flow

1. Start with a practical problem.
2. Prompt AI for design requirements and measurements to collect.
3. Prompt AI for a simple OpenSCAD example.
4. Review the code or dimensions.
5. Explain what could be wrong.
6. Show the model in a CAD viewer or slicer if available.

## Example Prompt

Create a simple OpenSCAD model for a rectangular cable label tag. It should be 50 mm 
long, 18 mm wide, 2 mm thick, with a 4 mm zip-tie hole near each end. Use rounded 
corners if practical. Keep the design easy to print flat on an FDM printer.

## Common Questions

Can AI make STL files?
: Some tools can generate models, but results still need careful checking.

Can AI replace CAD?
: Not for reliable functional work. It can help you start faster and learn concepts.
