1. 实现一个函数 pathToTree(pathList:string[])
2. 调用示例

```typescript
const pathList = [
  "vitepress",
  "vitepress/gutter",
  "nodejs",
  "nodejs/gutter",
  "nodejs/variable",
  "nodejs/variable/number",
  "nodejs/variable/array",
  "nodejs/variable/tet",
];
const result = pathToTree(pathList);
console.lg(result);
```

输出如下结果 items 为子节点 其中 link 字段只有 节点有 目录没有 items 只有目录有 子节点不能存在

```json
[
  {
    "text": "/vitepress"
  },
  {
    "text": "/vitepress",
    "items": [
      {
        "text": "gutter",
        "link": "/vitepress/gutter/index"
      }
    ]
  }
]
```

我期望返回的是

```json
[
  {
    "text": "/vitepress",
    "items": [
      {
        "text": "/vitepress/gutter",
        "link": "/vitepress/gutter/index"
      }
    ]
  }
]
```

实际返回的是

```json
[
  {
    "text": "/vitepress",
    "link": "/vitepress/index",
    "items": [
      {
        "text": "/vitepress/gutter",
        "link": "/vitepress/gutter/index"
      }
    ]
  }
]
```

1. 实现一个对象访问函数 我传入 dir/test/test 第二个参数为需要访问的对象 返回 对象 {dir:{test:test{}}}

# convertToTree

1. 参数

```javascript
const buffer = {}; // 存储临时变量
const pathList = ["vite", "vite/vitepress"];
// split 之后
const _pathList = [["vite"][("vite", "vitepress")]];
```

2. 参数处理,遍历结构
   1.1. vite buffer[vite] = {text:"vite"}
   2.1. vite buffer[vite] = []
   2.2 vitepress
3. 期望值返回

# 期望结构

```javascript
const equal = [
  {
    text: "vite",
    items: [
      {
        text: "vitepress",
        link: "vite/vitepress",
      },
    ],
  },
];
```
