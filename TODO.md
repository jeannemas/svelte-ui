## Various

- Migrate to preprocessor
- Add breakpoint variants to components with dynamic styles based on the screen size
- Add contexts to components with variants
- Comment components just like Formsnap does to make them easier to understand
- Split the input component into 2 components: one for text inputs and one for number inputs
- Do not prefix variants exports with `Root` or something
- Add more sizes to components
- Make sure all components are exported with a name (no default exports)
- Change "destructive" to "danger" and the color to red-500
- Remove dependencies of custom theme/colors from components
- Extract common styles into a separate file in `common`
- Add `unstyled` variant to all components

## Forms

- Make sure each form components can both use a binding and event handlers
- Make form components require accessiblity props (such as id, name, etc)
- Wrap form components with a form

## Later

- Make sure styles are concise, don't repeat themselves, and are easy to extend
- Improve styles/variants typing and extensibility
- Create script to add Markdown docs to component from relative file with same name (Ex: `<!--\n@component\n-->` in `AccordionRoot.svelte` -> `AccordionRoot.md`)
