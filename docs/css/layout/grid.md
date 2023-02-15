# Grid

Grid 布局是一个二维布局的方法，可以理解为在网格棋盘上涂鸦的过程。
属性分为两类，分别作用于 grid 容器上和作用于 grid 子项上。

::: details 作用于 Grid 容器上

- grid-template-columns
- grid-template-rows
- grid-template-areas
- grid-template
- grid-column-gap
- grid-row-gap
- justify-items
- align-items
- place-items
- justify-content
- align-content
- place-content
- grid-auto-columns
- grid-auto-rows
- grid-auto-flow
- grid

:::

::: details 作用于 Grid 子项上

- grid-column-start
- grid-column-end
- grid-row-start
- grid-row-end
- grid-column
- grid-row
- grid-area
- justify-self
- align-self
- place-self

:::

## 作用于 Grid 容器上

### grid-template-columns 和 grid-template-rows

column 是列的意思，表示竖直方向的划分；row 是行的意思表示水平方向的划分。

```css
grid-template-columns: <track-size> | <track-name> <track-size>;
grid-template-rows: <track-size> | <track-name> <track-size>;
```

- track-size: 格子的大小，可以是长度值，百分比，fr
- track-name: 分割线的名字

<GridTemplateColumns />
<script setup> import GridTemplateColumns from '../../examples/css/layout/grid/gridTemplateColumns.vue' </script>
