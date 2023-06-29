## v0.2.7

- support option "overflow" to allow the window moving outside the viewports border
- add static function `WinBox.stack()` which returns an Array containing every window instance ordered by focus history
- support drag move from maximized state

## v0.2.5

- support custom toolbar icon
- support custom toolbar controls
- support custom toolbar height
- support custom window index
- support window autosize
- support new callbacks
- improve drag pointer calculation when outside the viewport
- improve toolbar template
- improve window states
- improve performance

#### Migrations:

- the classname `wb-icon` was renamed to `wb-control`
- instead the new window heading toolbar icon was named as `wb-icon`
