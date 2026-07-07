# Parametric Design

This class introduces parametric design: creating models that can be adjusted by changing measurements instead of redrawing the object from scratch.

## Using OpenSCAD for Parametric Design
OpenSCAD is a free, script‑based 3D modeling tool that excels at parametric geometry. It treats your model as code, so changing a variable automatically rebuilds the shape.

### What is OpenSCAD?
OpenSCAD (https://openscad.org) is a 3‑D CAD program that lets you define objects using a simple programming language. Unlike most modeling tools, there is no interactive mouse editing; you edit the script and press **Compile** to see the result.

### Download & Install
- Windows: download the installer from the website and run it. It creates a `openscad.exe` in your Program Files.
- macOS: use Homebrew with `brew install --cask openscad` or download the DMG from the site.
- Linux: most distros ship a package; e.g., `sudo apt install openscad`.

### Example Script
```openscad
// Simple adjustable box
module custom_box(width=20, height=10, depth=30, wall=2) {
    difference() {
        cube([width, height, depth]);
        translate([wall, wall, wall])
            cube([width-2*wall, height-2*wall, depth-2*wall]);
    }
}

custom_box(); // call with defaults
```

### Using the Customizer Window
OpenSCAD provides a *Customizer* panel that lets you tweak parameters interactively:
1. Open the script.
2. Click **View → Customizer** (or press `Ctrl+Shift+C`).
3. A sidebar appears with sliders for each parameter.
4. Adjust values and the preview updates instantly.
5. When satisfied, click **Export** to save an STL.

This workflow shows how a single script can generate many variations without 
requiring manual redesign.

## Class Materials

- [Slide Deck](slide-deck.md)
- [Instructor Guide](instructor-guide.md)
- [Attendee Handout](attendee-handout.md)
- [Timing Plan](timing-plan.md)

## Class Goal

By the end of the class, attendees should understand:

- What parametric design means.
- Why measurements and constraints matter.
- How changing a value can resize or reshape a model.
- Where parametric models are useful: boxes, brackets, organizers, adapters, and repair parts.
- Why simple, well-named parameters are easier to maintain.

## Suggested Demonstration

Use a simple customizable object such as a spacer, hook, label tag, or small box. Change width, height, hole size, and wall thickness, then export a new STL.
