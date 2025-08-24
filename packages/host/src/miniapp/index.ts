import { colors } from "../theme";
import { MiniApp } from "./types";

export const MINI_APPS: MiniApp[] = [
 {
    id: "notes",
    title: "Notes",
    icon: "document-text-outline",
    color: colors.notesPrimary, // Blue
    load: () => import('notes/App'),
  },

  //for later
  // {
  //   id: "todos",
  //   title: "Todos",
  //   icon: "checkmark-done-outline",
  //   color: colors.todosPrimary, // Purple
  //   load: () => import("./scenes/todoList/TodoList"),
  // },
];