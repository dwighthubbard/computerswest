# Instructor Guide: Designing For 3D Printing

## Audience

Attendees who want to create or modify models that print reliably.

## Key Points

- FDM parts are anisotropic: strength varies by direction.
- Avoid steep unsupported overhangs where practical.
- Split complicated parts if that makes printing easier.
- Add chamfers or fillets carefully; they can help or hurt depending on orientation.
- Holes, pegs, and snap fits need clearance.
- Test coupons are faster than full-size failed prints.

## Demo Flow

1. Show a part with an obvious overhang.
2. Slice it in the default orientation.
3. Rotate it to reduce supports.
4. Compare print time, supports, and surface quality.
5. Discuss layer direction and likely failure direction.
6. Show a small tolerance test or clearance example.

## Common Questions

How steep can an overhang be?
: Many printers handle about 45 degrees, but printer, material, cooling, and speed matter.

Why are holes too tight?
: Plastic extrusion has width, and printers are not perfect. Holes often need clearance or calibration.

Should I use supports?
: Use them when needed, but design and orient parts to avoid them when practical.
