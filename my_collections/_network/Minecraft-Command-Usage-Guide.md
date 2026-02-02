---
layout: doc
collection: networking
title: minecraft命令用法说明
toc: true
---



## Java Edition

====[`/gamerule`]====

| 游戏规则                                | 中文说明                              | Minecraft 标识符                       |
|-----------------------------------------|---------------------------------------|---------------------------------------|
| `freeze_damage`                         | 冻结伤害                              | `minecraft:freeze_damage`             |
| `mob_drops`                             | 怪物掉落物品                          | `minecraft:mob_drops`                 |
| `entity_drops`                          | 实体掉落物品                          | `minecraft:entity_drops`              |
| `elytra_movement_check`                 | 异能翼飞行检测                        | `minecraft:elytra_movement_check`     |
| `log_admin_commands`                    | 记录管理员命令                        | `minecraft:log_admin_commands`        |
| `water_source_conversion`               | 水源块转换                            | `minecraft:water_source_conversion`   |
| `mob_explosion_drop_decay`              | 怪物爆炸掉落衰减                      | `minecraft:mob_explosion_drop_decay`  |
| `players_sleeping_percentage`          | 玩家睡觉百分比                        | `minecraft:players_sleeping_percentage` |
| `show_advancement_messages`             | 显示进度消息                          | `minecraft:show_advancement_messages` |
| `max_snow_accumulation_height`         | 最大雪积累高度                        | `minecraft:max_snow_accumulation_height` |
| `fire_spread_radius_around_player`     | 玩家周围火灾传播半径                  | `minecraft:fire_spread_radius_around_player` |
| `forgive_dead_players`                 | 宽恕死去的玩家                        | `minecraft:forgive_dead_players`     |
| `random_tick_speed`                     | 随机方块更新速度                      | `minecraft:random_tick_speed`        |
| `tnt_explosion_drop_decay`             | TNT 爆炸掉落衰减                      | `minecraft:tnt_explosion_drop_decay` |
| `universal_anger`                       | 通用愤怒                              | `minecraft:universal_anger`          |
| `block_drops`                           | 方块掉落物                            | `minecraft:block_drops`              |
| `spawn_wandering_traders`              | 生成流浪商人                          | `minecraft:spawn_wandering_traders`   |
| `global_sound_events`                   | 全局声音事件                          | `minecraft:global_sound_events`       |
| `max_command_forks`                     | 最大命令分叉数                        | `minecraft:max_command_forks`        |
| `max_block_modifications`              | 最大方块修改数                        | `minecraft:max_block_modifications`  |
| `spawn_phantoms`                        | 生成幽灵                              | `minecraft:spawn_phantoms`           |
| `fire_damage`                           | 火焰伤害                              | `minecraft:fire_damage`              |
| `spawn_wardens`                         | 生成看守者                            | `minecraft:spawn_wardens`            |
| `mob_griefing`                          | 怪物破坏世界                          | `minecraft:mob_griefing`             |
| `pvp`                                   | 玩家间互相攻击                        | `minecraft:pvp`                      |
| `immediate_respawn`                     | 立即重生                              | `minecraft:immediate_respawn`        |
| `raids`                                 | 生成侵袭                              | `minecraft:raids`                    |
| `players_nether_portal_creative_delay` | 玩家进入下界的创造模式延迟           | `minecraft:players_nether_portal_creative_delay` |
| `fall_damage`                           | 跌落伤害                              | `minecraft:fall_damage`              |
| `lava_source_conversion`                | 熔岩源块转换                          | `minecraft:lava_source_conversion`   |
| `reduced_debug_info`                    | 减少调试信息                          | `minecraft:reduced_debug_info`       |
| `command_block_output`                  | 命令方块输出                          | `minecraft:command_block_output`     |
| `locator_bar`                           | 定位条                                | `minecraft:locator_bar`              |
| `max_command_sequence_length`          | 最大命令序列长度                      | `minecraft:max_command_sequence_length` |
| `advance_weather`                       | 提前天气                              | `minecraft:advance_weather`          |
| `respawn_radius`                        | 重生半径                              | `minecraft:respawn_radius`           |
| `limited_crafting`                      | 限制制作                              | `minecraft:limited_crafting`         |
| `ender_pearls_vanish_on_death`          | 末影珍珠死亡消失                      | `minecraft:ender_pearls_vanish_on_death` |
| `send_command_feedback`                 | 发送命令反馈                          | `minecraft:send_command_feedback`    |
| `tnt_explodes`                          | TNT 爆炸                              | `minecraft:tnt_explodes`             |
| `drowning_damage`                       | 溺水伤害                              | `minecraft:drowning_damage`          |
| `block_explosion_drop_decay`            | 方块爆炸掉落衰减                      | `minecraft:block_explosion_drop_decay` |
| `allow_entering_nether_using_portals`  | 允许通过传送门进入下界                | `minecraft:allow_entering_nether_using_portals` |
| `spawn_monsters`                        | 生成怪物                              | `minecraft:spawn_monsters`           |
| `max_entity_cramming`                   | 最大实体挤压                          | `minecraft:max_entity_cramming`      |
| `projectiles_can_break_blocks`          | 投射物可以破坏方块                    | `minecraft:projectiles_can_break_blocks` |
| `keep_inventory`                        | 保留物品                              | `minecraft:keep_inventory`           |
| `natural_health_regeneration`           | 自然生命恢复                          | `minecraft:natural_health_regeneration` |
| `advance_time`                          | 提前时间                              | `minecraft:advance_time`             |
| `players_nether_portal_default_delay`  | 玩家默认进入下界的延迟               | `minecraft:players_nether_portal_default_delay` |
| `spawn_patrols`                         | 生成巡逻队                            | `minecraft:spawn_patrols`            |
| `show_death_messages`                   | 显示死亡消息                          | `minecraft:show_death_messages`      |
| `spectators_generate_chunks`            | 观察者生成区块                        | `minecraft:spectators_generate_chunks` |
| `spawn_mobs`                            | 生成怪物                              | `minecraft:spawn_mobs`               |
| `command_blocks_work`                   | 命令方块工作                          | `minecraft:command_blocks_work`      |
| `spawner_blocks_work`                   | 刷怪笼工作                            | `minecraft:spawner_blocks_work`      |
| `spread_vines`                          | 藤蔓扩展                              | `minecraft:spread_vines`             |
| `player_movement_check`                 | 玩家移动检测                          | `minecraft:player_movement_check`    |


====[其他命令]====

| 命令                                      | 中文说明                              |
|-------------------------------------------|--------------------------------------|
| `/give <targets\> <item\> [<count\>]`         | 给目标玩家指定物品及数量               |
| `/help [<command\>]`                       | 获取命令帮助                          |
| `/item (replace\|modify)`                  | 替换或修改物品                        |
| `/kick <targets\> [<reason\>]`              | 踢出玩家（可选原因）                  |
| `/kill [<targets\>]`                       | 杀死目标玩家                          |
| `/list [uuids]`                           | 列出在线玩家的 UUID                   |
| `/locate (structure\|biome\|poi)`           | 定位结构、生态群系或兴趣点            |
| `/loot (replace\|insert\|give\|spawn)`       | 管理战利品                             |
| `/msg <targets\> <message\>`                | 给指定玩家发送私信                    |
| `/tell \-\> msg`                            | 等同于 `/msg` 命令                     |
| `/w \-\> msg`                               | 等同于 `/msg` 命令                     |
| `/particle <name\> [<pos\>]`                | 生成粒子效果                          |
| `/place (feature\|jigsaw\|structure\|template)` | 放置结构、拼图、模板或功能             |
| `/playsound <sound\> [master\|music\|record\|weather\|block\|hostile\|neutral\|player\|ambient\|voice\|ui]` | 播放指定音效                          |
| `/random (value\|roll\|reset)`              | 执行随机数操作或重置                  |
| `/reload`                                 | 重载服务器设置或资源包               |
| `/recipe (give\|take)`                     | 给玩家或移除配方                      |
| `/fetchprofile (name\|id)`                 | 获取玩家或实体的资料                  |
| `/return (<value\>\|fail\|run)`              | 返回值或执行操作                      |
| `/ride <target\> (mount\|dismount)`         | 让玩家骑乘或下马                     |
| `/rotate <target\> (<rotation\>\|facing)`    | 旋转目标或面朝指定方向               |
| `/say <message\>`                          | 公开广播一条消息                     |
| `/schedule (function\|clear)`              | 安排执行功能或清除排定的任务          |
| `/scoreboard (objectives\|players)`       | 管理得分板的目标和玩家信息            |
| `/seed`                                   | 查看当前世界种子                     |
| `/version`                                | 查看当前服务器版本                   |
| `/setblock <pos\> <block\> [destroy\|keep\|replace\|strict]` | 设置方块（可选替换行为）            |
| `/spawnpoint [<targets\>]`                 | 设置玩家的重生点                     |
| `/setworldspawn [<pos\>]`                  | 设置世界重生点                       |
| `/spectate [<target\>]`                    | 以观察者模式观看指定玩家             |
| `/spreadplayers <center\> <spreadDistance\> <maxRange\> (<respectTeams\>\|under)` | 在指定位置随机分散玩家             |
| `/stopsound <targets\> [*\|master\|music\|record\|weather\|block\|hostile\|neutral\|player\|ambient\|voice\|ui]` | 停止播放指定的声音                   |
| `/stopwatch (create\|query\|restart\|remove)` | 创建、查询、重启或移除计时器          |
| `/summon <entity\> [<pos\>]`                | 召唤指定实体                          |
| `/tag <targets\> (add\|remove\|list)`        | 添加、移除或列出标签                  |
| `/team (list\|add\|remove\|empty\|join\|leave\|modify)` | 管理玩家队伍                           |
| `/teammsg <message\>`                      | 向队伍成员发送消息                   |
| `/tm -\> teammsg`                          | 等同于 `/teammsg` 命令                 |
| `/teleport (<location\>\|<destination\>\|<targets\>)` | 传送玩家或目标到指定位置            |
| `/tp -\> teleport`                         | 等同于 `/teleport` 命令               |
| `/tellraw <targets\> <message\>`            | 向目标玩家发送原始消息                |
| `/test (run\|runmultiple\|runthese\|runclosest\|runthat\|runfailed\|verify\|locate\|resetclosest\|resetthese\|resetthat\|clearthat\|clearthese\|clearall\|stop\|pos\|create)` | 执行一系列测试任务                   |
| `/tick (query\|rate\|step\|sprint\|unfreeze\|freeze)` | 查询、设置或冻结游戏 tick           |
| `/time (set\|add\|query)`                   | 设置、增加或查询时间                  |
| `/title <targets\> (clear\|reset\|title\|subtitle\|actionbar\|times)` | 显示或管理标题、子标题和动作栏      |
| `/trigger <objective\> [add\|set]`          | 激活指定的触发器                      |
| `/waypoint (list\|modify)`                 | 列出或修改游戏中的路标               |
| `/weather (clear\|rain\|thunder)`          | 设置天气                              |
| `/worldborder (add\|set\|center\|damage\|get\|warning)` | 设置世界边界            |
| `/jfr (start\|stop)`                       | 开始或停止 JFR 性能分析               |
| `/ban-ip <target\> [<reason\>]`             | 封禁指定 IP 地址                      |
| `/banlist [ips\|players]`                 | 查看被封禁的 IP 或玩家列表            |
| `/ban <targets\> [<reason\>]`               | 封禁指定玩家（可选原因）              |
| `/deop <targets\>`                         | 移除指定玩家的操作员权限            |
| `/op <targets\>`                          | 授予指定玩家操作员权限               |
| `/pardon <targets\>`                      | 解除指定玩家的封禁                   |
| `/pardon-ip <target\>`                    | 解除指定 IP 地址的封禁               |
| `/perf (start\|stop)`                      | 启动或停止性能分析                   |
| `/save-all [flush]`                       | 保存所有世界数据（可选强制刷新）      |
| `/save-off`                               | 禁用自动保存                          |
| `/save-on`                                | 启用自动保存                          |
| `/setidletimeout <minutes\>`               | 设置玩家的空闲超时（分钟）           |
| `/stop`                                   | 停止服务器                            |
| `/transfer <hostname\> [<port\>]`           | 将玩家传送到其他服务器               |
| `/whitelist (on\|off\|list\|add\|remove\|reload)` | 管理服务器白名单                   |




### Bedrock Edition

====[选项卡C]====

通过勇气我们挖到了那么多心里的声音，它就是我们内心的欲望和愿意为欲望奋不顾身的勇气，这就是我们的动机，两个人之间，有一个执行力不够强，本质是欲望不够强，动机也不够强烈。做一个比喻，同样的一个石头以相同的速度相同的角度砸到两个人头上，A 把疼痛指数定义为太他妈的痛要流泪了，B 把疼痛定义为还挺疼的还能忍，这就是心理的结实程度，那么欲望也是如此，同样一个欲望放到一个人心里是不拿下这个东西我名字倒着写必须立刻马上往死里干-干到头破血流也要搞，放到另一个人心里就是我真的想要不能再等了赶紧开始干吧。

====[tabend]==== 

#### 第二个选项组

====[选项卡D]====

通过勇气我们挖到了那么多心里的声音，它就是我们内心的欲望和愿意为欲望奋不顾身的勇气，这就是我们的动机，两个人之间，有一个执行力不够强，本质是欲望不够强，动机也不够强烈。做一个比喻，同样的一个石头以相同的速度相同的角度砸到两个人头上，A 把疼痛指数定义为太他妈的痛要流泪了，B 把疼痛定义为还挺疼的还能忍，这就是心理的结实程度，那么欲望也是如此，同样一个欲望放到一个人心里是不拿下这个东西我名字倒着写必须立刻马上往死里干-干到头破血流也要搞，放到另一个人心里就是我真的想要不能再等了赶紧开始干吧。

====[选项卡E]====

通过勇气我们挖到了那么多心里的声音，它就是我们内心的欲望和愿意为欲望奋不顾身的勇气，这就是我们的动机，两个人之间，有一个执行力不够强，本质是欲望不够强，动机也不够强烈。做一个比喻，同样的一个石头以相同的速度相同的角度砸到两个人头上，A 把疼痛指数定义为太他妈的痛要流泪了，B 把疼痛定义为还挺疼的还能忍，这就是心理的结实程度，那么欲望也是如此，同样一个欲望放到一个人心里是不拿下这个东西我名字倒着写必须立刻马上往死里干-干到头破血流也要搞，放到另一个人心里就是我真的想要不能再等了赶紧开始干吧。

====[选项卡F]====

通过勇气我们挖到了那么多心里的声音，它就是我们内心的欲望和愿意为欲望奋不顾身的勇气，这就是我们的动机，两个人之间，有一个执行力不够强，本质是欲望不够强，动机也不够强烈。做一个比喻，同样的一个石头以相同的速度相同的角度砸到两个人头上，A 把疼痛指数定义为太他妈的痛要流泪了，B 把疼痛定义为还挺疼的还能忍，这就是心理的结实程度，那么欲望也是如此，同样一个欲望放到一个人心里是不拿下这个东西我名字倒着写必须立刻马上往死里干-干到头破血流也要搞，放到另一个人心里就是我真的想要不能再等了赶紧开始干吧。

====[tabend]====
