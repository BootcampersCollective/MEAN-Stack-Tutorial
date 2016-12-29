# Filters and Factories

## Filters
Filters in Angular are typically used to FORMAT values which are interpolated (ie. ```{{schedule.date | date:"MM/dd/yy"}}```)

Filters can be chained together as in {{EXPRESSION | FILTER:arg1:arg2 | FILTER}}

Examples:
- orderBy  - sorts and re-orders array items for display
- filter   - conditionally shows/hides elements in the array

## Factories
A factory is registered with a `module` just like a `controller` is.

Factories are used to store shared data or common methods used by multiple controllers.

Factories are 'Singletons', meaning that there is only one instance of any particular factory and when controllers inject that factory they are injecting a **reference** to the factory.  The SAME factory is used by all controllers that have injected that factory.

Controllers cannot share information between themselves.  They need to share and transfer information via a ```factory```.
