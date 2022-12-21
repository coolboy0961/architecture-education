# Gaugeをはじめよう

これは、マークダウン仕様ファイルの例です。
このファイルのすべての見出しは、シナリオです。
箇条書きのポイントは、すべてステップです。

この仕様を実行するには
	gauge run specs

This is a context step that runs before every scenario
* TODOアプリを開く

## タスクの数を表示する
* "1個目のタスク"をタスク追加
* "1 item left"が表示される
* "2個目のタスク"をタスク追加
* "2 items left"が表示される

## アクティブなタスクだけ表示する
* 複数のタスクを追加

   |description|
   |-----------|
   |1個目のタスク |
   |2個目のタスク|
   |3個目のタスク |
   |4個目のタスク|
   |5個目のタスク |

* 複数のタスクを完了する

   |description|
   |-----------|
   |2個目のタスク|
   |5個目のタスク |
* "Active" 状態のタスクだけ表示する
* 存在する

   |description|
   |-----------|
   |1個目のタスク |
   |3個目のタスク |
   |4個目のタスク|
* 存在しない

   |description|
   |-----------|
   |2個目のタスク|
   |5個目のタスク |

A tear down step for every scenario
___
* 全てのタスクをクリア