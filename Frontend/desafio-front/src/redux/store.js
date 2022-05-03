import { configureStore } from '@reduxjs/toolkit'
import tasks from "./reducers/tasks.reducer";

const reducer = {
  tasks,
}

export default function configureStoreRedux() {
  const store = configureStore({reducer});
  return { store };
}
