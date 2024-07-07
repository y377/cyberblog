---
title: sublime编辑器
layout: doc
date: 2023-10-10
---


## 好用的插件

以下是 RegReplace 插件支持的参数的Markdown表格：

| 参数名                 | 类型     | 说明                                                                                                                             |
| ----------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| name                    | (str)    | 规则名称。必填项。                                                                                                                     |
| find                    | (str)    | 正则表达式模式或文字字符串。使用 (?i) 以进行不区分大小写匹配。使用 (?s) 以进行 dotall 匹配。详细信息请参考 [Python re 文档](https://docs.python.org/3.4/library/re.html)。除非定义了 "scope"，否则必填项。    |
| replace                 | (str - 默认为 r'\g<0>') | 替换模式。                                                                                                                                  |
| literal                 | (bool - 默认为 False)    | 执行非正则表达式的文字搜索和替换。                                                                                    |
| literal_ignorecase      | (bool - 默认为 False)    | 在 "literal" 为真时，忽略大小写。                                                                                    |
| scope                   | (str)    | 要搜索并应用可选正则表达式的作用域。除非定义了 "find"，否则必填项。                                |
| scope_filter            | ([str] - 默认为 []) | 包含匹配的作用域限定符数组。仅在未定义 "scope" 时使用。                 |
| greedy                  | (bool - 默认为 True)  | 对所有实例应用操作（查找所有）。当定义了 "find" 时使用。                         |
| greedy_scope            | (bool - 默认为 True)  | 查找所有由 "scope" 指定的作用域。                                      |
| format_replace          | (bool - 默认为 False) | 使用格式化字符串样式的替换模板。仅对 Regex（带和不带反向引用）和 Re（带反向引用）有效。详细信息请参考 [这里](https://facelessuser.github.io/backrefs/usage/#format-replacements)。 |
| selection_inputs        | (bool - 默认为 False) | 使用选择作为查找模式的输入。全局设置 "selection_only" 必须禁用才能使用此选项。                              |
| multi_pass              | (bool - 默认为 False) | 当正则表达式无法格式化以找到所有实例时，在作用域区域上执行多次扫描以查找和替换所有实例。由于替换可能会更改作用域，这可能很有用。     |
| plugin                  | (str)    | 为更高级的替换逻辑定义替换插件。仅用于正则表达式替换和替换。                                              |
| args                    | (dict)   | "plugin" 的参数。仅用于正则表达式替换和替换。                                                          |