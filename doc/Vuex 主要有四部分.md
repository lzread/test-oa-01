# Vuex 主要有四部分：
- state：包含了store中存储的各个状态。
- getter: 类似于 Vue 中的计算属性，根据其他 getter 或 state 计算返回值。
- mutation: 一组方法，是改变store中状态的执行者，只能是同步操作。
- action: 一组方法，其中可以包含异步操作。