import { Step, Table, BeforeSuite, AfterSuite } from "gauge-ts";
import {
  checkBox,
  click,
  closeBrowser,
  evaluate,
  goto,
  into,
  link,
  openBrowser,
  press,
  text,
  textBox,
  toLeftOf,
  write,
} from "taiko";
import assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === "true";

export default class StepImplementation {
  @BeforeSuite()
  public async beforeSuite() {
    await openBrowser({ headless: headless });
  }

  @AfterSuite()
  public async afterSuite() {
    await closeBrowser();
  }

  @Step("TODOアプリを開く")
  public async openTodo() {
    await goto("todo.taiko.dev");
  }

  @Step("<item>をタスク追加")
  public async addTask(item: string) {
    await write(
      item,
      into(
        textBox({
          class: "new-todo",
        })
      )
    );
    await press("Enter");
  }

  @Step("<message>が表示される")
  public async checkDisplay(message: string) {
    assert.ok(await text(message).exists(0, 0));
  }

  @Step("複数のタスクを追加 <table>")
  public async addTasks(table: Table) {
    for (var row of table.getTableRows()) {
      await write(row.getCell("description"));
      await press("Enter");
    }
  }

  @Step("複数のタスクを完了する <table>")
  public async completeTasks(table: Table) {
    for (var row of table.getTableRows()) {
      await click(checkBox(toLeftOf(row.getCell("description"))));
    }
  }

  @Step("<type> 状態のタスクだけ表示する")
  public async viewTasks(type: string) {
    await click(link(type));
  }

  @Step("存在する <table>")
  public async mustHave(table: Table) {
    for (var row of table.getTableRows()) {
      assert.ok(await text(row.getCell("description")).exists());
    }
  }

  @Step("存在しない <table>")
  public async mustNotHave(table: Table) {
    for (var row of table.getTableRows()) {
      assert.ok(!(await text(row.getCell("description")).exists(0, 0)));
    }
  }

  @Step("全てのタスクをクリア")
  public async clearAllTasks() {
    // @ts-ignore
    await evaluate(() => localStorage.clear());
  }
}
