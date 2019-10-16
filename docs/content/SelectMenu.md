---
title: SelectMenu
---

```jsx live
<SelectMenu>
    <SelectMenu.Summary>Robots</SelectMenu.Summary>
    <SelectMenu.Modal>
      <SelectMenu.Header>Filter by project</SelectMenu.Header>
      <SelectMenu.Filter placeholder="Filter projects" aria-label="Filter Projects"/>
      <SelectMenu.Tabs>
        <SelectMenu.Tab selected>Repository</SelectMenu.Tab>
        <SelectMenu.Tab>Organization</SelectMenu.Tab>
      </SelectMenu.Tabs>
      <SelectMenu.List>
        <SelectMenu.Item aria-checked="true">Primer Components release tracking</SelectMenu.Item>
        <SelectMenu.Item >Primer Compononents roadmap</SelectMenu.Item>
        <SelectMenu.Divider>More options</SelectMenu.Divider>
        <SelectMenu.Item >Primer Components bugs</SelectMenu.Item>
      </SelectMenu.List>
      <SelectMenu.List hidden>
        <SelectMenu.Item>Design Systems projects</SelectMenu.Item>
      </SelectMenu.List>
      <SelectMenu.Footer>Showing 3 of 3</SelectMenu.Footer>
    </SelectMenu.Modal>
</SelectMenu>
```

#### With Loading State
```jsx live
<SelectMenu>
    <SelectMenu.Summary>Robots</SelectMenu.Summary>
    <SelectMenu.Modal>
      <SelectMenu.Header>Filter by Author</SelectMenu.Header>
      <SelectMenu.Filter placeholder="Filter users" aria-label="Filter users"/>
      <SelectMenu.Loading/>
      <SelectMenu.Footer>Loading...</SelectMenu.Footer>
    </SelectMenu.Modal>
</SelectMenu>
```

### SelectMenu
Used as a wrapper component for select menus

### SelectMenu.Summary
Used as the trigger component for the SelectMenu dropdown. Must be used with `SelectMenu` and `SelectMenu.Modal`

### SelectMenu.Modal
Provides styling for the SelectMenu content

### SelectMenu.List

Wrapper around SelectMenu items. Use multiple `SelectMenu.List` components when using tab navigation within the select menu. Handle selected tab state in the consuming application and dynamically apple the `hidden` HTML attribute on the list to hide unselected tabs.

| Name | Type | Default | Description |
| :- | :- | :-: | :- |
| hidden | Boolean | false| Sets the HTML hidden attribute, used when you'd like to hide panels for tab navigation within a SelectMenu

### SelectMenu.Item

Items in the SelectMenu.List. Handle setting the `aria-checked` attribute in the consuming application. When `aria-checked` is set to true, selected styles will appear for list items.

### SelectMenu.Header
A heading for the SelectMenu

### SelectMenu.Loading
A default loading state for the SelectMenu contents

### SelectMenu.Footer
A footer for the SelectMenu

### SelectMenu.Tabs
Tab navigation for the SelectMenu

### SelectMenu.Tab
Individual tabs for the tab navigation in SelectMenu. `selected` state should be handled in consuming application and passed down via the `selected` prop to get styling.

| Name | Type | Default | Description |
| :- | :- | :-: | :- |
| selected | Boolean | false | Used to style the selected tab.

### SelectMenu.Divider
Used to create a divider between list items
