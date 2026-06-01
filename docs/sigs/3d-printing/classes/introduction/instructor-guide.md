# Instructor Guide: Introduction to 3D Printing

## Audience

This class is for beginners who are curious about 3D printing but may not own a printer or know the basic workflow. The goal is orientation, not hands-on mastery.

## Learning Objectives

Attendees should leave with a practical understanding of:

- 3D printing as an additive manufacturing process.
- Common uses for functional and decorative prints.
- The basic workflow from STL model to slicer to G-code to printer.
- The limits and risks of owning a 3D printer.
- The reasons a personal 3D printer can still be valuable.

## Key Terms

3D model
: A digital representation of an object.

STL
: A common file format used to describe the shape of a 3D model.

Slicer
: Software that turns a 3D model into printer instructions. This class uses OrcaSlicer as the example.

G-code
: Instructions that tell the printer how to move, heat, extrude material, and build the object.

FDM or FFF printer
: A common plastic 3D printer type that melts filament and deposits it layer by layer.

Resin printer
: A printer that cures liquid resin with light. Resin printing can produce fine detail but requires more chemical handling.

Print service
: A company, library, makerspace, or other organization that prints models for customers or members.

## Class Flow

### 1. What Is 3D Printing?

Explain that 3D printing is a method of making physical objects from digital files. Most beginner printers build parts one thin layer at a time. This is different from cutting, drilling, or machining material away.

Keep the explanation simple:

- A model describes the shape.
- The slicer converts the shape into layers and machine instructions.
- The printer follows those instructions to build the object.

### 2. What Can Be Done With 3D Printing?

Separate examples into two broad categories.

Functional models include:

- Replacement knobs, brackets, clips, mounts, and adapters.
- Prototypes used to test size, fit, and shape.
- Tools, fixtures, jigs, organizers, and repair parts.
- Enclosures for electronics or hobby projects.

Decorative models include:

- Figurines, ornaments, display pieces, and art objects.
- Cosplay pieces, props, and game accessories.
- Gifts and personalized items.
- Architectural or educational models.

Point out that many prints can be both functional and decorative.

### 3. Process Overview

Walk through the complete workflow:

1. Start with a 3D model, commonly an STL file.
2. Open the model in a slicer such as OrcaSlicer.
3. Choose print settings such as material, layer height, infill, supports, and orientation.
4. Generate G-code.
5. Transfer the job to the printer by Wi-Fi, USB, SD card, or other supported method.
6. Start the print and monitor the first layers.
7. Remove the finished model and perform any cleanup.

If time allows, show a model in OrcaSlicer and switch to preview mode so attendees can see layers and toolpaths.

### 4. Why You Might Not Want to Own a Printer

Owning a printer is not the right answer for every person or every project.

Discuss these limitations:

- Some materials, including many metals, require expensive industrial printers.
- Industrial metal printing may require specialized power, ventilation, fire suppression, powder handling, or controlled environments.
- Resin and some other processes involve chemicals that need careful handling, storage, gloves, cleaning, curing, and disposal.
- Some materials or processes can create fumes, particulates, or toxic gases that many people do not want in a home.
- No single printer can print every material that can be 3D printed.
- Printers require maintenance, calibration, troubleshooting, and space.

Emphasize that print services can be the better choice when the material, safety requirements, or cost exceed what makes sense at home.

### 5. Why You May Want Your Own Printer

Owning a printer can be valuable when the person expects to print often or iterate quickly.

Use examples:

- Printing frequent hobby, repair, or prototype parts.
- Getting a quick turnaround without waiting for a service.
- Testing fit, appearance, and function in inexpensive plastic.
- Making several revisions before paying for an expensive material.
- Validating a design at home before sending it to a service for tool steel, titanium, gold, ceramic, or another specialty material.

### 6. Closing

End with practical guidance:

- Start with simple models and common materials.
- PLA on an FDM printer is often the easiest entry point.
- Expect some failed prints while learning.
- Preview sliced models before printing.
- Use services for specialty materials or safety-sensitive processes.

## Optional Demonstration Script

1. Open an STL file in OrcaSlicer.
2. Rotate the model and identify the build plate.
3. Show common settings: printer, filament, layer height, infill, supports.
4. Click slice.
5. Show the preview and explain the layer-by-layer toolpath.
6. Explain that the G-code is transferred to the printer.
7. If a printer is available, show the beginning of a print or a finished example.

## Instructor Notes

- Keep the technical vocabulary brief and repeat the core workflow several times.
- Avoid turning this class into printer-buying advice unless attendees ask.
- Bring a few example prints if possible: one functional part, one decorative part, and one failed print.
- A failed print is useful because it sets realistic expectations.
